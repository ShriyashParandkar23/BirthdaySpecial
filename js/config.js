/* ============================================================================
   config.js — EDIT EVERYTHING HERE
   ----------------------------------------------------------------------------
   This is the only file you need to touch to personalize the surprise.
   Nothing here is code you need to understand — just text between the quotes.
   Keep the quotes and the commas exactly where they are.
   ========================================================================== */

const CONFIG = {

  /* --------------------------------------------------------------------------
     1. HER NAME
     Used in the browser tab title and the closing section.
     Leave it as "" (empty) to keep everything name-free.
     ------------------------------------------------------------------------ */
  name: "",

  /* --------------------------------------------------------------------------
     2. THE WELCOME SCREEN (the first thing she sees)
     ------------------------------------------------------------------------ */
  welcome: {
    kicker:  "a little something",
    title:   "I made something special for you… ❤️",
    sub:     "Put your headphones on, and take your time.",
    button:  "Open Your Surprise ✨",
    hint:    "Tap to begin your surprise ❤️",   // shown if the browser blocks music
  },

  /* --------------------------------------------------------------------------
     3. THE BIRTHDAY MESSAGE (the centrepiece, between the moving photos)
     `headline` is revealed with a typewriter effect, letter by letter.
     ------------------------------------------------------------------------ */
  hero: {
    headline: "Happy Birthday, Beautiful ❤️",
    sub:      "Today is all about you, your smile, and the beautiful light you bring into this world.",
  },

  /* --------------------------------------------------------------------------
     4. THE LETTER (the heartfelt wish)
     Each string in `paragraphs` becomes its own paragraph.
     Add or remove lines freely — just keep the quotes and commas.
     ------------------------------------------------------------------------ */
  letter: {
    label:     "a few words",
    heading:   "For you, today",
    paragraphs: [
      "There are people who simply make the world feel softer, and you are one of them. Your laugh has a way of making an ordinary afternoon feel like something worth remembering.",
      "I hope this year is kind to you. I hope it brings you quiet mornings, music that gives you goosebumps, and a hundred small moments that make you stop and smile for no reason at all.",
      "Thank you for being exactly who you are. The world is a little brighter because you are in it.",
    ],
    signature: "— with so much warmth",
  },

  /* --------------------------------------------------------------------------
     5. THE MEMORIES SECTION
     ------------------------------------------------------------------------ */
  memories: {
    label:   "the little things",
    heading: "Moments worth keeping",
    sub:     "Every one of these made the year better.",
  },

  /* --------------------------------------------------------------------------
     6. THE FINAL SCREEN
     ------------------------------------------------------------------------ */
  finale: {
    heading: "May your world always be as beautiful as your smile.",
    sub:     "Happy Birthday, once again. ❤️",
    footer:  "Made with a lot of heart.",
    replay:  "Watch it again",
  },

  /* --------------------------------------------------------------------------
     7. MUSIC
     ------------------------------------------------------------------------
     HOW TO ADD YOUR OWN SONG
       1. Drop your MP3 into:  assets/music/
       2. Set `src` below to its path, e.g. "assets/music/our-song.mp3"
       3. Save and refresh the page. That's it.

     If `src` is left empty — or the file is missing — the site plays a soft,
     built-in piano melody generated in the browser, so there is always music.

     `volume` is 0 (silent) to 1 (full). 0.35 is a gentle background level.
     ------------------------------------------------------------------------ */
  music: {
    src:    "assets/music/tere-bin-nahi-laage.mp3",
    volume: 0.35,
    fadeInSeconds: 4,
  },

  /* --------------------------------------------------------------------------
     8. THE PHOTOS  ← the main attraction
     ------------------------------------------------------------------------
     HOW TO ADD YOUR PHOTOS
     All 322 of your photos are listed below, already resized for the web.
     `size` was chosen from each photo's own shape, so nothing is badly cropped:
     landscape shots get a "wide"/"wideSm" frame, portraits get "tall"/"md"/"lg".

       - TO REMOVE a photo, delete its line. The filmstrip re-balances itself.
       - TO ADD one, drop the file in photos/ and copy any line below.
       - TO CAPTION one, put words between the caption quotes. It appears
          softly when that photo is hovered or tapped. Most are left empty —
          a handful of captioned favourites reads better than all 322.
       - `size` options: "sm" | "md" | "lg" | "tall" | "wide" | "wideSm"

     `alt` is read aloud by screen readers. Describe the photo briefly.
     ------------------------------------------------------------------------ */
  photos: [
    { src: "photos/photo-001.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-002.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-003.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-004.jpg", size: "sm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-005.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-006.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-007.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-008.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-009.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-010.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-011.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-012.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-013.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-014.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-015.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-016.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-017.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-018.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-019.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-020.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-021.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-022.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-023.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-024.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-025.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-026.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-027.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-028.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-029.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-030.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-031.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-032.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-033.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-034.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-035.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-036.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-037.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-038.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-039.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-040.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-041.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-042.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-043.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-044.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-045.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-046.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-047.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-048.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-049.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-050.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-051.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-052.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-053.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-054.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-055.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-056.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-057.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-058.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-059.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-060.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-061.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-062.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-063.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-064.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-065.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-066.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-067.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-068.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-069.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-070.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-071.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-072.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-073.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-074.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-075.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-076.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-077.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-078.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-079.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-080.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-081.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-082.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-083.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-084.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-085.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-086.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-087.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-088.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-089.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-090.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-091.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-092.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-093.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-094.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-095.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-096.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-097.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-098.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-099.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-100.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-101.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-102.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-103.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-104.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-105.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-106.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-107.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-108.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-109.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-110.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-111.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-112.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-113.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-114.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-115.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-116.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-117.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-118.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-119.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-120.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-121.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-122.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-123.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-124.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-125.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-126.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-127.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-128.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-129.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-130.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-131.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-132.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-133.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-134.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-135.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-136.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-137.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-138.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-139.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-140.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-141.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-142.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-143.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-144.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-145.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-146.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-147.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-148.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-149.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-150.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-151.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-152.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-153.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-154.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-155.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-156.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-157.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-158.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-159.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-160.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-161.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-162.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-163.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-164.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-165.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-166.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-167.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-168.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-169.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-170.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-171.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-172.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-173.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-174.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-175.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-176.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-177.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-178.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-179.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-180.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-181.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-182.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-183.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-184.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-185.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-186.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-187.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-188.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-189.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-190.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-191.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-192.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-193.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-194.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-195.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-196.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-197.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-198.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-199.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-200.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-201.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-202.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-203.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-204.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-205.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-206.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-207.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-208.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-209.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-210.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-211.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-212.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-213.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-214.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-215.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-216.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-217.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-218.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-219.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-220.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-221.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-222.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-223.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-224.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-225.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-226.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-227.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-228.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-229.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-230.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-231.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-232.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-233.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-234.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-235.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-236.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-237.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-238.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-239.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-240.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-241.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-242.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-243.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-244.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-245.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-246.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-247.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-248.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-249.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-250.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-251.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-252.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-253.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-254.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-255.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-256.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-257.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-258.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-259.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-260.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-261.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-262.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-263.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-264.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-265.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-266.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-267.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-268.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-269.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-270.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-271.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-272.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-273.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-274.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-275.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-276.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-277.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-278.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-279.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-280.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-281.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-282.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-283.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-284.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-285.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-286.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-287.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-288.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-289.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-290.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-291.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-292.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-293.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-294.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-295.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-296.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-297.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-298.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-299.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-300.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-301.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-302.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-303.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-304.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-305.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-306.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-307.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-308.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-309.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-310.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-311.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-312.jpg", size: "wideSm", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-313.jpg", size: "wide", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-314.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-315.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-316.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-317.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-318.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-319.jpg", size: "md", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-320.jpg", size: "lg", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-321.jpg", size: "tall", caption: "", alt: "A cherished photo" },
    { src: "photos/photo-322.jpg", size: "lg", caption: "", alt: "A cherished photo" },
  ],

  /* --------------------------------------------------------------------------
     9. FINE TUNING (safe to ignore)
     ------------------------------------------------------------------------ */
  tuning: {
    // Filmstrip drift, in pixels per second. Lower = slower and dreamier.
    // The three rows differ on purpose — that difference is the parallax.
    topRowSpeed:    34,
    bottomRowSpeed: 26,

    // The three rows of the "Moments worth keeping" wall, top to bottom.
    // Different speeds are what stop it looking like one sliding block.
    memoryRowSpeeds: [30, 21, 36],

    // Phone photos arrive in runs of near-identical shots. Shuffling (with a
    // fixed order, the same on every visit) keeps those runs from stacking up
    // in the same place in every row. Set to false for strict date order.
    shufflePhotos: true,
    petalsOnReveal:   true, // the rose-petal shower on the birthday message
    starCount:        90,   // background stars
    heartCount:       14,   // floating hearts
  },
};
