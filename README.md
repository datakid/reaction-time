# Lull

A quiet practice tool for reaction time and input timing. It has no cheering, no scores and no judgement. It only shows neutral analytics.

## Entry
- `index.html` is the single page app. All views (home, exercise, history, reference, settings, about) render into `#app`.

## Files
- `index.html` contains the shell, the logo symbol and the theme pre-paint script.
- `css/app.css` holds the styles, with dark and light themes defined as CSS variables.
- `js/app.js` contains the exercises, adaptation, analytics, Arabic strings and storage.
- `sw.js` is the offline cache. `manifest.webmanifest` makes the app installable.
- `icon.svg` is the favicon. It follows `prefers-color-scheme` on its own.
- `icon-dark.svg` and `icon-light.svg` are used when the theme is set by hand in the app.
- `icon-maskable.svg` is the installed app icon. `images/icon-original.jpg` is the uploaded raster icon, used as the apple-touch-icon.
- The header logo is an inline `<symbol id="m">` that uses theme variables, so it changes with the theme.

## Exercises
Cue, Key (dynamic 2/4/8 or fixed key), Choice (2–4 areas), Go/no-go and Buffer (chain 1–3). Each one starts with a demonstration. The response window adapts quietly in the background. Users can turn on sound cues, reduced motion, practice only, hold difficulty and haptics.

## Input integrity (v3.1)
- **False start restarts the trial.** A press in the waiting period (or before the Buffer arc starts) cancels the pending cue. The field turns tinted, says "Too soon. Wait for the change." and the cue cannot appear until the user has stopped pressing for a short quiet period (0.7 s, growing by 0.4 s with each false start in a row, up to 2.7 s). Each press during that period starts the timer again, so holding a key down or tapping fast keeps the cue away.
- **Anticipations repeat the trial.** A response under 100 ms after the cue counts as an anticipation and triggers the same restart. It never counts as a completed trial.
- **No gap between trials.** The waiting state starts 250 ms after a response, so presses between trials count as false starts too.
- **Buffer:** pressing more than once in the same lock counts as "Several presses" and restarts it.
- **Spoiled blocks are not saved.** If false starts, anticipations and wrong responses together go above 40% of the block (at least 8), or the user keeps pressing during the quiet periods, the block stops with "This block was not recorded." Nothing goes to history and difficulty does not adapt.
- **Continue and Back are disabled for 0.9 s** after a block ends, so presses that are still coming in can't skip the summary.
- After 3 false starts in a row the message changes to "Hands off. It restarts when you stop pressing."

## Analytics
- **After each block:** median, middle half, spread, fastest and slowest 10%, valid trials, anticipations, early presses, no response, wrong or outline presses, first vs second half, histogram with the reference band, reference ruler, and the difference from the previous 5 sessions with the same setting.
- **Buffer:** median offset, share in window, early and late counts, mean distance.
- **History:** filtered by exercise, input and setting. Shows a chart (median, middle-half band, rolling median), last 7 days vs the previous 7, trend per 10 sessions, typical spread, observations, a time-of-day table, recent sessions and an all-exercises overview.

## Storage
- `localStorage` key `lull1`, structured as `{v,p,h,s,dev}`. Data from older versions is cleaned and kept. If stored data can't be read, it is copied to `lull1_bak_<time>` and not discarded. A backup is also written before Load and Erase.
- Data export: Copy, Save file, Open file, Load and Copy CSV.
