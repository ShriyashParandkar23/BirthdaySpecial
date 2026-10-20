# A Birthday Surprise ❤️

A dreamy, cinematic birthday website — dark romantic night sky, a continuously
moving filmstrip of photos, a typewriter birthday message, and a soft soundtrack.

Open `index.html` in a browser and that's it. No build step, no dependencies.

---

## Everything you'll want to change lives in one file

Open **`js/config.js`**. It's plain text with comments, organized into nine
numbered sections:

| Section | What it controls |
|---|---|
| 1 | Her name (browser tab title) |
| 2 | The welcome screen text and button label |
| 3 | The big birthday message + the line underneath |
| 4 | The letter — add or remove paragraphs freely |
| 5 | The memories section headings |
| 6 | The closing screen |
| 7 | The music file and volume |
| 8 | **The photo list** |
| 9 | Speeds, star count, petal shower on/off |

Save the file, refresh the page. Nothing else needs touching.

---

## The photos

All **322** of your photos are in and already optimized:

| | Before | After |
|---|---|---|
| Format | 186 HEIC, 115 JPG, 19 DNG, 2 PNG | all JPEG |
| Size | 1.1 GB | **51 MB** |
| Dimensions | up to 4032px | 900px on the long edge |

They're named `photo-001.jpg` … `photo-322.jpg` in date order, and listed in
`js/config.js` section 8.

**Your full-size originals were not touched.** They're parked outside the
project so they don't get uploaded:

```
~/Desktop/birthday-originals/photos
```

### Changing the selection

- **Remove a photo** — delete its line in `js/config.js`. The strips re-balance.
- **Add one** — drop the file in `photos/` and copy any line in that list.
- **Caption a favourite** — put words between the `caption: ""` quotes. It fades
  in when that photo is hovered or tapped. They're all empty right now, and a
  handful of captioned favourites reads better than all 322 captioned.

Each frame's **`size`** was picked from the photo's own shape, so nothing is
badly cropped — landscape shots get a wide frame, portraits get a tall one.

### How the strips work

There are five rows in total: two framing the birthday message, and three more
forming the **"Moments worth keeping"** wall.

The wall rows are **larger, stacked tight together, and scrollable** — swipe
them on a phone, or click and drag on a computer. A row stops drifting while
you're handling it and picks the drift back up about two seconds after you let
go. Scrolling never hits an end: each row holds its photos twice, so when you
pass one full copy it steps back a copy without you seeing it.

The 322 photos are **shuffled** before being dealt across the rows. Phone
photos arrive in runs — three near-identical shots of the same moment, seconds
apart — and dealt in order those runs land side by side and every row ends up
looking like the one above it. The shuffle uses a fixed order, so it looks the
same on every visit. Set `shufflePhotos: false` in section 9 for strict date
order.

Each row holds its photos twice over and travels exactly half its own width, so
the loop lands on an identical frame: no jump, no gap, no flicker.

Speed is set in **pixels per second** (section 9), not seconds per lap, so adding
or removing photos changes how *long* a row is, never how fast it drifts.

Only the first handful of photos is fetched up front — about **4 MB** on open.
The rest are fetched well before they reach the screen, so frames never drift in
blank.

---

## The music

Your song is already in place:

```
assets/music/tere-bin-nahi-laage.mp3
```

**To swap it for a different track:**

1. Drop the new MP3 into `assets/music/`.
2. In `js/config.js`, section 7, change `src` to its path:
   ```js
   music: {
     src:    "assets/music/your-song.mp3",
     volume: 0.35,          // 0 = silent, 1 = full. 0.35 is a gentle background level.
     fadeInSeconds: 4,      // how long it takes to swell in
   },
   ```

**If the file is ever missing** — or you clear `src` to `""` — the site
synthesises a soft piano progression live in the browser instead, so there is
always music. Nothing is downloaded and nothing is licensed.

**Autoplay:** browsers refuse to play audio until someone interacts with the
page, so the music starts the moment she presses **"Open Your Surprise ✨"** —
a real user gesture. It then plays continuously, looping, and never restarts
when she scrolls between sections. The floating controls in the corner offer
play/pause and mute.

---

## The controls, bottom corner

| Button | What it does |
|---|---|
| Play / Pause | Stops and resumes the music |
| Speaker | Mutes without stopping |
| Motion | Pauses every animation — the filmstrip, stars and glow freeze in place; photos and text all stay |

The motion control starts switched **on** automatically for anyone whose device
asks for reduced motion (macOS: Settings → Accessibility → Display → Reduce motion).

---

## Sharing it with her

It's a plain static site, so any of these work:

- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy
  from `main` / root. The site is 56 MB, well inside GitHub's limits.

  Use the command line rather than the browser upload — GitHub's drag-and-drop
  caps at 100 files per batch and there are 322 photos here:

  ```bash
  cd ~/Desktop/birthday
  git init && git add -A && git commit -m "Birthday surprise"
  git branch -M main
  git remote add origin https://github.com/USERNAME/REPO.git
  git push -u origin main
  ```

- **Simplest:** zip the folder, send it, she opens `index.html`.
- **A real link in seconds:** drag the folder onto
  [netlify.com/drop](https://app.netlify.com/drop) — no git needed.
- **Locally, to test:** run a tiny server from inside this folder —
  ```bash
  python3 -m http.server 4321
  ```
  then open `http://localhost:4321`.

---

## Files

```
index.html          structure
css/style.css       the entire look — palette tokens at the top
js/config.js        ← all your text, photos and music settings
js/main.js          the experience (atmosphere, filmstrip, typewriter, reveals)
js/music.js         the soundtrack + the built-in piano fallback
photos/             her 322 photos, web-sized
assets/music/       your song
```

Built with plain HTML, CSS and vanilla JavaScript. No frameworks, no build tools.
Fonts are *Great Vibes*, *Cormorant Infant* and *Jost* from Google Fonts.
