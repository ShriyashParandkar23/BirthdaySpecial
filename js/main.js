/* ============================================================================
   main.js — the experience
   ----------------------------------------------------------------------------
   Reads everything it needs from js/config.js. You shouldn't need to edit
   this file to personalize the site.

     01 Helpers
     02 Copy  — pour CONFIG into the page
     03 Atmosphere — stars, hearts, sparkles, petals
     04 Filmstrip — build the seamless photo tracks
     05 Typewriter
     06 Reveal on scroll + progress thread
     07 The gate — opening the surprise
     08 Controls — music, mute, motion
   ========================================================================== */

(() => {
  "use strict";

  /* ----------------------------- 01 Helpers ------------------------------ */
  const $  = (id) => document.getElementById(id);
  const rand = (min, max) => min + Math.random() * (max - min);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const prefersStill = window.matchMedia("(prefers-reduced-motion: reduce)");
  let still = prefersStill.matches;

  /** Write text into an element, or remove the element when the text is empty. */
  function setText(el, value) {
    if (!el) return;
    const text = (value ?? "").toString();
    if (!text.trim()) { el.remove(); return; }
    el.textContent = text;
  }

  /* ------------------------------- 02 Copy ------------------------------- */
  const C = CONFIG;

  document.title = C.name ? `Happy Birthday, ${C.name} ❤️` : "A Birthday Surprise ❤️";

  setText($("gateKicker"),   C.welcome.kicker);
  setText($("gateTitle"),    C.welcome.title);
  setText($("gateSub"),      C.welcome.sub);
  setText($("openBtnLabel"), C.welcome.button);
  setText($("gateHint"),     C.welcome.hint);

  setText($("heroSub"), C.hero.sub);

  setText($("letterLabel"),   C.letter.label);
  setText($("letterHeading"), C.letter.heading);
  setText($("letterSign"),    C.letter.signature);

  const letterBody = $("letterBody");
  (C.letter.paragraphs || []).forEach((text, i) => {
    const p = document.createElement("p");
    p.className = "reveal";
    p.style.transitionDelay = `${i * 110}ms`;
    p.textContent = text;
    letterBody.appendChild(p);
  });

  setText($("memLabel"),        C.memories.label);
  setText($("memoriesHeading"), C.memories.heading);
  setText($("memSub"),          C.memories.sub);

  setText($("finaleHeading"), C.finale.heading);
  setText($("finaleSub"),     C.finale.sub);
  setText($("finaleFooter"),  C.finale.footer);
  setText($("replayLabel"),   C.finale.replay);

  /* ---------------------------- 03 Atmosphere ---------------------------- */
  function buildStars() {
    const sky = $("sky");
    const count = window.innerWidth < 760
      ? Math.round((C.tuning.starCount || 90) * 0.55)
      : (C.tuning.starCount || 90);

    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i += 1) {
      const star = document.createElement("span");
      star.className = "star" + pick(["", "", "", " star--gold", " star--rose"]);
      star.style.left = `${rand(0, 100).toFixed(2)}%`;
      star.style.top  = `${rand(0, 100).toFixed(2)}%`;
      star.style.setProperty("--s", `${rand(1, 2.8).toFixed(2)}px`);
      star.style.setProperty("--dur", `${rand(2.4, 7).toFixed(2)}s`);
      star.style.setProperty("--delay", `-${rand(0, 7).toFixed(2)}s`);
      star.style.setProperty("--peak", rand(0.45, 0.95).toFixed(2));
      frag.appendChild(star);
    }
    sky.appendChild(frag);
  }

  function buildHearts() {
    const layer = $("hearts");
    const count = window.innerWidth < 760
      ? Math.round((C.tuning.heartCount || 14) * 0.6)
      : (C.tuning.heartCount || 14);

    const svg = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;

    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i += 1) {
      const heart = document.createElement("span");
      heart.className = "heart" + (Math.random() < 0.3 ? " heart--gold" : "");
      const size = rand(9, 20);
      heart.style.width = `${size.toFixed(1)}px`;
      heart.style.height = `${size.toFixed(1)}px`;
      heart.style.setProperty("--x", `${rand(2, 96).toFixed(2)}%`);
      heart.style.setProperty("--dur", `${rand(16, 30).toFixed(1)}s`);
      heart.style.setProperty("--delay", `-${rand(0, 28).toFixed(1)}s`);
      heart.style.setProperty("--sway", `${rand(-6, 6).toFixed(1)}vw`);
      heart.style.setProperty("--peak", rand(0.2, 0.55).toFixed(2));
      heart.innerHTML = svg;
      frag.appendChild(heart);
    }
    layer.appendChild(frag);
  }

  function buildSparkles() {
    const frame = $("heroFrame");
    if (!frame) return;
    for (let i = 0; i < 12; i += 1) {
      const spark = document.createElement("span");
      spark.className = "spark";
      spark.setAttribute("aria-hidden", "true");
      spark.style.setProperty("--s", `${rand(2, 4.5).toFixed(1)}px`);
      // scattered just inside and just outside the frame edges
      spark.style.setProperty("--x", `${rand(-6, 106).toFixed(1)}%`);
      spark.style.setProperty("--y", `${rand(-8, 108).toFixed(1)}%`);
      spark.style.setProperty("--dur", `${rand(2.6, 5.4).toFixed(1)}s`);
      spark.style.setProperty("--delay", `${rand(0, 4).toFixed(1)}s`);
      frame.appendChild(spark);
    }
  }

  /** The rose-petal shower that accompanies the birthday message. */
  function showerPetals(count = 26) {
    if (still || !C.tuning.petalsOnReveal) return;
    const layer = $("petals");

    for (let i = 0; i < count; i += 1) {
      const petal = document.createElement("span");
      petal.className = "petal" + (Math.random() < 0.28 ? " petal--gold" : "");
      const dur = rand(6, 11);
      petal.style.setProperty("--s", `${rand(8, 17).toFixed(1)}px`);
      petal.style.setProperty("--x", `${rand(-4, 100).toFixed(1)}%`);
      petal.style.setProperty("--dur", `${dur.toFixed(1)}s`);
      petal.style.setProperty("--delay", `${rand(0, 4).toFixed(1)}s`);
      petal.style.setProperty("--sway", `${rand(-18, 18).toFixed(1)}vw`);
      petal.style.setProperty("--spin", `${rand(240, 900).toFixed(0)}deg`);
      petal.addEventListener("animationend", () => petal.remove(), { once: true });
      layer.appendChild(petal);
    }
  }

  /* ---------------------------- 04 Filmstrip ----------------------------- */

  /** A soft gradient stand-in, used if a photo file is missing. */
  function fallbackImage(label) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#2E1024"/><stop offset="1" stop-color="#6E2344"/>
      </linearGradient></defs>
      <rect width="400" height="500" fill="url(#g)"/>
      <text x="200" y="258" text-anchor="middle" fill="#FFF8F3" fill-opacity="0.6"
        font-family="Georgia, serif" font-size="22">${label}</text></svg>`;
    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  }

  const SIZES = ["sm", "md", "lg", "tall", "wide", "wideSm"];

  /* Phone photos come in runs — three near-identical shots of the same moment,
     seconds apart. Dealt straight down the list, those runs land side by side
     and every row looks like the one above it. Shuffling first breaks the runs
     apart. The seed is fixed, so the order is the same on every visit. */
  function shuffled(list) {
    let seed = 0x9e3779b9;
    const rnd = () => {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    const out = list.slice();
    for (let i = out.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rnd() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  /* Photos load well before they reach the screen.
     `loading="lazy"` only fetches once a frame is nearly visible, which left
     blank frames drifting in while they downloaded. This watches a wide band
     either side of the viewport instead, so by the time a photo arrives it is
     already decoded. At the strips' speed that is roughly a minute of warning. */
  const preloader = ("IntersectionObserver" in window)
    ? new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
          }
          obs.unobserve(img);
        });
      }, { rootMargin: "600px 3000px" })
    : null;

  /* A safety net. The observer can lag behind frames that are being moved by a
     CSS animation, which is what left blank frames drifting in. This re-checks
     real positions on a timer, so anything approaching the screen is fetched
     whether the observer noticed or not. */
  function sweepPreload() {
    const pending = document.querySelectorAll("img[data-src]");
    pending.forEach((img) => {
      const r = img.getBoundingClientRect();
      const nearX = r.right > -3200 && r.left < window.innerWidth + 3200;
      const nearY = r.bottom > -1200 && r.top < window.innerHeight + 1200;
      if (nearX && nearY) {
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
      }
    });
    return pending.length > 0;
  }

  // Above this many photos in one strip, the per-tile float and zoom are
  // dropped so hundreds of images don't each need their own GPU layer.
  const CALM_ABOVE = 24;

  function makeTile(photo, index, deferred) {
    const tile = document.createElement("div");
    const size = SIZES.includes(photo.size) ? photo.size : SIZES[index % SIZES.length];
    tile.className = `tile tile--${size}`;
    tile.style.setProperty("--bob", `${rand(7, 13).toFixed(1)}s`);
    tile.style.setProperty("--bob-y", `${rand(5, 14).toFixed(1)}px`);
    tile.style.setProperty("--bob-delay", `-${rand(0, 6).toFixed(1)}s`);
    tile.style.setProperty("--zoom", `${rand(20, 34).toFixed(1)}s`);

    const inner = document.createElement("div");
    inner.className = "tile__inner";
    inner.tabIndex = 0;
    inner.setAttribute("role", "group");

    const img = document.createElement("img");
    img.alt = photo.alt || photo.caption || "A cherished photo";
    img.decoding = "async";
    if (deferred && preloader) img.dataset.src = photo.src;
    else img.src = photo.src;
    img.draggable = false;
    img.addEventListener("error", () => {
      img.src = fallbackImage("Your photo here");
    }, { once: true });

    inner.appendChild(img);

    if (photo.caption) {
      const cap = document.createElement("figcaption");
      cap.className = "tile__cap";
      cap.textContent = photo.caption;
      inner.appendChild(cap);
      inner.setAttribute("aria-label", photo.caption);
    }

    // Tapping a photo on a touch screen reveals its caption and glow,
    // since there is no hover to rely on.
    inner.addEventListener("click", () => {
      const open = tile.classList.toggle("is-active");
      if (open) {
        tile.parentElement.querySelectorAll(".tile.is-active").forEach((other) => {
          if (other !== tile) other.classList.remove("is-active");
        });
      }
    });

    tile.appendChild(inner);
    return tile;
  }

  /**
   * Fill a track with tiles, then clone the whole sequence once.
   * The CSS animation travels exactly -50%, which lands on the clone's
   * first frame — so the loop is invisible, with no gap or jump.
   */
  function buildTrack(track, photos, pxPerSecond) {
    if (!track || !photos.length) return;

    // With only a handful of photos, repeat them until the row is wide
    // enough to fill any screen without looking sparse.
    let base = photos.slice();
    while (base.length < 7) base = base.concat(photos);

    // Only the opening handful is fetched up front; the rest arrive as the
    // strip carries them towards the screen.
    const half = document.createDocumentFragment();
    base.forEach((photo, i) => half.appendChild(makeTile(photo, i, i >= 8)));

    if (base.length > CALM_ABOVE) track.classList.add("strip__track--calm");

    track.appendChild(half.cloneNode(true));
    track.appendChild(half);

    // Speed is set in pixels per second, not in seconds per lap, so adding or
    // removing photos changes how long the strip is — never how fast it drifts.
    const lap = track.scrollWidth / 2;
    const seconds = Math.max(8, lap / Math.max(4, pxPerSecond));
    track.style.setProperty("--dur", `${seconds.toFixed(1)}s`);

    // The clones are decorative duplicates — hide them from screen readers.
    const tiles = track.querySelectorAll(".tile");
    for (let i = 0; i < tiles.length / 2; i += 1) {
      tiles[i].setAttribute("aria-hidden", "true");
      tiles[i].querySelectorAll("[tabindex]").forEach((el) => { el.tabIndex = -1; });
    }

    if (preloader) track.querySelectorAll("img[data-src]").forEach((img) => preloader.observe(img));

    // Re-attach tap handlers lost by cloneNode, and keep error fallbacks.
    track.querySelectorAll(".tile").forEach((tile) => {
      const inner = tile.querySelector(".tile__inner");
      const img = tile.querySelector("img");
      img.addEventListener("error", () => { img.src = fallbackImage("Your photo here"); }, { once: true });
      inner.addEventListener("click", () => {
        const open = tile.classList.toggle("is-active");
        if (open) {
          track.querySelectorAll(".tile.is-active").forEach((other) => {
            if (other !== tile) other.classList.remove("is-active");
          });
        }
      });
    });
  }

  /** Let a wall row be swiped or dragged, and stop its drift while it is. */
  function makeScrollable(strip, track) {
    const lap = () => track.scrollWidth / 2;
    let idle = null;

    const hold = () => {
      track.classList.add("is-held");
      clearTimeout(idle);
      idle = setTimeout(() => track.classList.remove("is-held"), 2200);
    };

    // Start a full copy in, so there is track to explore in both directions.
    requestAnimationFrame(() => { strip.scrollLeft = lap(); });

    strip.addEventListener("scroll", () => {
      hold();
      const L = lap();
      if (L <= 0) return;
      // The track holds the same photos twice, so stepping a whole copy left or
      // right is invisible — it keeps the swipe from ever reaching an end.
      if (strip.scrollLeft > L * 1.5) strip.scrollLeft -= L;
      else if (strip.scrollLeft < L * 0.5) strip.scrollLeft += L;
      sweepPreload();
    }, { passive: true });

    // Touch scrolls natively. This is click-and-drag, for mice.
    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    let travelled = 0;

    strip.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      dragging = true;
      travelled = 0;
      startX = event.clientX;
      startLeft = strip.scrollLeft;
      strip.classList.add("is-dragging");
    });

    strip.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const dx = event.clientX - startX;
      travelled = Math.max(travelled, Math.abs(dx));
      if (travelled > 5) {
        strip.scrollLeft = startLeft - dx;
        event.preventDefault();
      }
    });

    const release = () => {
      dragging = false;
      strip.classList.remove("is-dragging");
    };
    ["pointerup", "pointercancel", "pointerleave"].forEach((type) => {
      strip.addEventListener(type, release);
    });

    // A drag shouldn't also count as a tap on whichever photo ended up under it.
    strip.addEventListener("click", (event) => {
      if (travelled > 5) {
        event.stopPropagation();
        event.preventDefault();
        travelled = 0;
      }
    }, true);
  }

  function buildStrips() {
    const photos = (C.photos || []).filter((p) => p && p.src);
    if (!photos.length) return;

    // Two rows frame the birthday message, five more make the memories wall.
    // The photos are dealt across all seven like cards, so neighbours in the
    // list never end up side by side and no photo is built twice.
    const rows = [
      { el: $("stripTop"),    speed: C.tuning.topRowSpeed    || 34 },
      { el: $("stripBottom"), speed: C.tuning.bottomRowSpeed || 26 },
    ];

    const memorySpeeds = C.tuning.memoryRowSpeeds || [30, 21, 36];
    for (let i = 1; i <= 3; i += 1) {
      rows.push({ el: $(`stripMem${i}`), speed: memorySpeeds[i - 1] || 30, wall: true });
    }

    const live = rows.filter((row) => row.el);
    const order = C.tuning.shufflePhotos === false ? photos : shuffled(photos);
    const groups = live.map(() => []);
    order.forEach((photo, i) => groups[i % live.length].push(photo));

    live.forEach((row, i) => {
      buildTrack(row.el, groups[i].length ? groups[i] : order, row.speed);
      if (row.wall) makeScrollable(row.el.parentElement, row.el);
    });
  }

  /* ---------------------------- 05 Typewriter ---------------------------- */

  /** Split a string into characters a human would recognise, emoji included. */
  function graphemes(text) {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(seg.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  }

  let typeTimer = null;

  function typeHeadline(onDone) {
    const target = $("typeTarget");
    const caret  = $("typeCaret");
    if (!target) return;

    const chars = graphemes(C.hero.headline || "");
    clearInterval(typeTimer);
    target.textContent = "";
    if (caret) caret.classList.remove("is-done");

    // Screen readers get the whole line at once, not letter by letter.
    const headline = $("heroHeadline");
    if (headline) headline.setAttribute("aria-label", C.hero.headline || "");
    target.setAttribute("aria-hidden", "true");

    if (still) {
      target.textContent = C.hero.headline || "";
      if (caret) caret.classList.add("is-done");
      onDone?.();
      return;
    }

    let i = 0;
    typeTimer = setInterval(() => {
      target.textContent += chars[i];
      i += 1;
      if (i >= chars.length) {
        clearInterval(typeTimer);
        if (caret) caret.classList.add("is-done");
        onDone?.();
      }
    }, 62);
  }

  /* ------------------- 06 Reveal on scroll + progress -------------------- */
  function watchReveals() {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    items.forEach((el) => io.observe(el));
  }

  function watchProgress() {
    const bar = $("progressBar");
    const shell = document.querySelector(".progress");
    if (!bar) return;
    shell.classList.add("is-on");

    let queued = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      bar.style.width = `${Math.min(100, Math.max(0, pct)).toFixed(2)}%`;
      queued = false;
    };

    window.addEventListener("scroll", () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(update);
    }, { passive: true });

    update();
  }

  /* ------------------------------ 07 The gate ---------------------------- */
  const gate  = $("gate");
  const stage = $("stage");
  let opened = false;

  async function openSurprise() {
    if (opened) return;
    opened = true;

    const mode = await Music.start();
    syncMusicButtons();

    if (mode === "synth") {
      flashTip("playing a little melody");
    } else if (mode === "none") {
      flashTip("music unavailable on this device");
    }

    gate.classList.add("is-open");
    document.body.classList.remove("is-locked");
    stage.setAttribute("aria-hidden", "false");
    $("controls").hidden = false;

    watchProgress();

    // Let the gate finish dissolving, then begin the message.
    window.setTimeout(() => {
      $("heroFrame")?.classList.add("is-in");
      buildSparkles();
      typeHeadline(() => {
        $("heroSub")?.classList.add("is-in");
        showerPetals();
      });
    }, still ? 120 : 700);

    // Move focus into the experience for keyboard and screen-reader users.
    window.setTimeout(() => $("heroHeadline")?.focus?.(), 900);
  }

  $("openBtn").addEventListener("click", openSurprise);

  // A gentle nudge, in case she is waiting for something to happen.
  window.setTimeout(() => {
    if (!opened) $("gateHint")?.removeAttribute("hidden");
  }, 5000);

  $("replayBtn")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: still ? "auto" : "smooth" });
    window.setTimeout(() => {
      typeHeadline(() => showerPetals(20));
    }, still ? 0 : 700);
  });

  /* ------------------------------ 08 Controls ---------------------------- */
  const playBtn   = $("playBtn");
  const muteBtn   = $("muteBtn");
  const motionBtn = $("motionBtn");
  const tip       = $("controlsTip");

  let tipTimer = null;
  function flashTip(text) {
    if (!tip) return;
    tip.textContent = text;
    tip.classList.add("is-on");
    clearTimeout(tipTimer);
    tipTimer = setTimeout(() => tip.classList.remove("is-on"), 3800);
  }

  function syncMusicButtons() {
    const on = Music.isPlaying();
    playBtn.setAttribute("aria-pressed", String(on));
    playBtn.setAttribute("aria-label", on ? "Pause music" : "Play music");

    const off = Music.isMuted();
    muteBtn.setAttribute("aria-pressed", String(off));
    muteBtn.setAttribute("aria-label", off ? "Unmute music" : "Mute music");
  }

  playBtn.addEventListener("click", async () => {
    if (Music.source() === "none") await Music.start();
    else Music.toggle();
    syncMusicButtons();
  });

  muteBtn.addEventListener("click", () => {
    Music.setMuted(!Music.isMuted());
    syncMusicButtons();
  });

  function applyMotion() {
    document.body.classList.toggle("is-still", still);
    motionBtn.setAttribute("aria-pressed", String(still));
    motionBtn.setAttribute("aria-label", still ? "Resume motion" : "Reduce motion");
  }

  motionBtn.addEventListener("click", () => {
    still = !still;
    applyMotion();
    flashTip(still ? "motion paused" : "motion resumed");
  });

  // Keep the buttons honest if the browser pauses the music by itself.
  Music.onChange(syncMusicButtons);

  prefersStill.addEventListener?.("change", (event) => {
    still = event.matches;
    applyMotion();
  });

  /* ------------------------------- go live ------------------------------- */
  // Top up anything approaching the screen, whatever the observer is doing.
  const sweeper = setInterval(() => {
    if (!sweepPreload()) clearInterval(sweeper);
  }, 900);
  window.addEventListener("scroll", sweepPreload, { passive: true });

  // The hint retires once she has actually moved a row.
  const hint = $("wallHint");
  if (hint) {
    document.querySelectorAll(".strip--wall").forEach((strip) => {
      strip.addEventListener("pointerdown", () => hint.classList.add("is-gone"), { once: true });
      strip.addEventListener("touchstart", () => hint.classList.add("is-gone"), { once: true, passive: true });
    });
  }

  buildStars();
  buildHearts();
  buildStrips();
  watchReveals();
  applyMotion();
  syncMusicButtons();
})();
