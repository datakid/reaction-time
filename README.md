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

## Analytics
- **After each block:** median, middle half, spread, fastest and slowest 10%, valid trials, anticipations, early presses, no response, wrong or outline presses, first vs second half, histogram with the reference band, reference ruler, and the difference from the previous 5 sessions with the same setting.
- **Buffer:** median offset, share in window, early and late counts, mean distance.
- **History:** filtered by exercise, input and setting. Shows a chart (median, middle-half band, rolling median), last 7 days vs the previous 7, trend per 10 sessions, typical spread, observations, a time-of-day table, recent sessions and an all-exercises overview.

## Storage
- `localStorage` key `lull1`, structured as `{v,p,h,s,dev}`. Data from older versions is cleaned and kept. If stored data can't be read, it is copied to `lull1_bak_<time>` and not discarded. A backup is also written before Load and Erase.
- Data export: Copy, Save file, Open file, Load and Copy CSV.
