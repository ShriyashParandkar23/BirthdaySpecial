/* ============================================================================
   music.js — the soundtrack
   ----------------------------------------------------------------------------
   Two ways to make sound, in order of preference:

     1. YOUR OWN SONG  — drop an MP3 in  assets/music/  and point
        CONFIG.music.src at it (see js/config.js, section 7).

     2. THE BUILT-IN MELODY — if no file is set, or the file can't be loaded,
        a soft piano progression is synthesised live in the browser with the
        Web Audio API. No downloads, no licensing, always available.

   Browser autoplay rules are respected: nothing starts until she presses
   "Open Your Surprise", which is a real user gesture.
   ========================================================================== */

const Music = (() => {
  "use strict";

  const audio  = document.getElementById("audio");
  const target = Math.min(1, Math.max(0, CONFIG.music.volume ?? 0.35));
  const fadeMs = (CONFIG.music.fadeInSeconds ?? 4) * 1000;

  let mode    = "none";   // "file" | "synth" | "none"
  let playing = false;
  let muted   = false;
  let ctx     = null;     // AudioContext, used by the built-in melody
  let bus     = null;     // master gain for the melody
  let timer   = null;     // note scheduler
  let fadeId  = null;
  let onChange = null;

  const notify = () => { if (typeof onChange === "function") onChange(); };

  /* The browser can pause audio on its own — a background tab, the system
     media keys, headphones unplugged. Follow the element's real state so the
     controls never show something that isn't true. */
  audio.addEventListener("play",  () => { if (mode === "file" && !playing) { playing = true;  notify(); } });
  audio.addEventListener("pause", () => { if (mode === "file" &&  playing) { playing = false; notify(); } });

  /* ---------------------------------------------------------------- melody --
     A slow I–V–vi–IV progression — the sound of every love song ever written.
     Each bar is arpeggiated, with a bass note underneath and a touch of
     delay for air. Tempo is deliberately unhurried.                        */

  const PROGRESSION = [
    { bass: 36, notes: [60, 64, 67, 71] },  // C  major 7
    { bass: 31, notes: [59, 62, 67, 69] },  // G  (6th)
    { bass: 33, notes: [57, 60, 64, 67] },  // A  minor 7
    { bass: 29, notes: [53, 57, 60, 64] },  // F  major 7
  ];
  const PATTERN   = [0, 1, 2, 3, 2, 1, 2, 3]; // which chord tone per 8th note
  const STEP_SECS = 0.52;                     // ≈ 58 bpm, dreamy
  const LOOKAHEAD = 0.25;

  let step = 0;
  let nextTime = 0;

  const freq = (midi) => 440 * Math.pow(2, (midi - 69) / 12);

  function buildGraph() {
    bus = ctx.createGain();
    bus.gain.value = 0;

    // gentle top-end roll-off: felt piano rather than bright digital
    const warm = ctx.createBiquadFilter();
    warm.type = "lowpass";
    warm.frequency.value = 2400;
    warm.Q.value = 0.4;

    // a short feedback delay gives the room some depth
    const delay = ctx.createDelay(1);
    delay.delayTime.value = 0.38;
    const feedback = ctx.createGain();
    feedback.gain.value = 0.26;
    const wet = ctx.createGain();
    wet.gain.value = 0.3;

    warm.connect(bus);
    warm.connect(delay);
    delay.connect(feedback);
    feedback.connect(delay);
    delay.connect(wet);
    wet.connect(bus);

    bus.connect(ctx.destination);
    return warm;
  }

  let voiceInput = null;

  function pluck(midi, at, { gain = 0.14, ring = 2.6, type = "triangle" } = {}) {
    const osc = ctx.createOscillator();
    const amp = ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq(midi);

    // a quick swell, then a long natural decay
    amp.gain.setValueAtTime(0.0001, at);
    amp.gain.exponentialRampToValueAtTime(gain, at + 0.035);
    amp.gain.exponentialRampToValueAtTime(0.0001, at + ring);

    osc.connect(amp);
    amp.connect(voiceInput);
    osc.start(at);
    osc.stop(at + ring + 0.1);
  }

  function schedule() {
    while (nextTime < ctx.currentTime + LOOKAHEAD) {
      const bar   = Math.floor(step / PATTERN.length) % PROGRESSION.length;
      const slot  = step % PATTERN.length;
      const chord = PROGRESSION[bar];

      // the melody line
      pluck(chord.notes[PATTERN[slot]], nextTime, { gain: 0.13, ring: 2.8 });

      // a higher shimmer every other bar, for lift
      if (slot === 2 && bar % 2 === 1) {
        pluck(chord.notes[3] + 12, nextTime + 0.06, { gain: 0.05, ring: 3.4, type: "sine" });
      }

      // bass on the downbeat
      if (slot === 0) {
        pluck(chord.bass, nextTime, { gain: 0.1, ring: 3.6, type: "sine" });
        pluck(chord.notes[0], nextTime + 0.01, { gain: 0.07, ring: 3.2, type: "sine" });
      }

      nextTime += STEP_SECS;
      step += 1;
    }
  }

  function startSynth() {
    mode = "synth";
    voiceInput = buildGraph();
    step = 0;
    nextTime = ctx.currentTime + 0.12;
    schedule();
    timer = setInterval(schedule, 60);
    bus.gain.cancelScheduledValues(ctx.currentTime);
    bus.gain.setValueAtTime(0.0001, ctx.currentTime);
    bus.gain.linearRampToValueAtTime(target, ctx.currentTime + fadeMs / 1000);
    playing = true;
  }

  /* ------------------------------------------------------------------ file --
     Can we actually load the MP3? Resolve on "canplay", reject on error or
     if it simply never arrives.                                            */

  function loadFile(src) {
    return new Promise((resolve, reject) => {
      let settled = false;
      const done = (ok) => {
        if (settled) return;
        settled = true;
        audio.removeEventListener("canplay", onReady);
        audio.removeEventListener("error", onFail);
        clearTimeout(bail);
        ok ? resolve() : reject(new Error("audio unavailable"));
      };
      const onReady = () => done(true);
      const onFail  = () => done(false);
      const bail    = setTimeout(() => done(false), 6000);

      audio.addEventListener("canplay", onReady, { once: true });
      audio.addEventListener("error", onFail, { once: true });
      audio.loop = true;
      audio.volume = 0;
      audio.src = src;
      audio.load();
    });
  }

  function fadeFileIn() {
    clearInterval(fadeId);
    const t0 = performance.now();
    fadeId = setInterval(() => {
      const k = Math.min(1, (performance.now() - t0) / fadeMs);
      audio.volume = target * k;
      if (k === 1) clearInterval(fadeId);
    }, 60);
  }

  /* -------------------------------------------------------------- lifecycle */

  async function start() {
    if (playing) return mode;

    // Created inside the user gesture so the melody is allowed to sound,
    // whichever route we end up taking.
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (AC) {
        ctx = new AC();
        if (ctx.state === "suspended") ctx.resume();
      }
    }

    const src = (CONFIG.music.src || "").trim();

    if (src) {
      // Kick playback off synchronously — Safari only allows it in a gesture.
      const attempt = audio.play();
      if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
      try {
        await loadFile(src);
        await audio.play();
        mode = "file";
        playing = true;
        fadeFileIn();
        if (ctx) { ctx.close(); ctx = null; }   // melody not needed
        return mode;
      } catch {
        audio.removeAttribute("src");
        audio.load();
      }
    }

    if (ctx) { startSynth(); return mode; }

    mode = "none";
    return mode;
  }

  function pause() {
    if (!playing) return;
    if (mode === "file") audio.pause();
    else if (mode === "synth" && ctx) ctx.suspend();
    playing = false;
  }

  function resume() {
    if (playing || mode === "none") return;
    if (mode === "file") audio.play().catch(() => {});
    else if (ctx) ctx.resume();
    playing = true;
  }

  return {
    start,
    pause,
    resume,
    toggle()            { playing ? pause() : resume(); return playing; },
    setMuted(next) {
      muted = next;
      if (mode === "file") audio.muted = next;
      else if (bus && ctx) {
        bus.gain.cancelScheduledValues(ctx.currentTime);
        bus.gain.linearRampToValueAtTime(next ? 0.0001 : target, ctx.currentTime + 0.4);
      }
      return muted;
    },
    onChange(fn) { onChange = fn; },
    isPlaying() { return playing; },
    isMuted()   { return muted; },
    source()    { return mode; },
  };
})();
