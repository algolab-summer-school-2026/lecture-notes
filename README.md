# AlgoLab Summer School — Lecture Notes Website

Static site for the 2026 AlgoLab Summer School on Fault-Tolerant Quantum Computing, hosted on GitHub Pages. All schedule content lives in **`data.js`** — no build step required.

## Editing content

Open `data.js` and update the `SCHEDULE` array. Each entry represents one day:

```js
{
  week: "Week 1",          // tab label
  dayName: "Monday",       // day separator label
  date: "June 8, 2026",    // displayed date
  lectures: [ ... ]
}
```

Each lecture object supports:

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Lecture title |
| `speaker` | string | Speaker full name |
| `affiliation` | string | Institution |
| `scholarUrl` | string \| `null` | Google Scholar profile URL |
| `time` | string | e.g. `"09:00 – 12:30"` |
| `type` | string | `"Lecture"`, `"Tutorial"`, `"Poster Session"`, … |
| `tags` | string[] | Topic pills shown on the card |
| `materials` | object[] | Buttons for slides, notes, video (see below) |

### Adding materials

```js
materials: [
  { label: "Slides", type: "slides", url: "https://example.com/slides.pdf" },
  { label: "Notes",  type: "notes",  url: "pdfs/speaker-notes.pdf" },
  { label: "Video",  type: "video",  url: "https://youtube.com/watch?v=..." },
]
```

Set `url: null` to show a greyed-out "not available" button instead.

### Adding a Google Scholar link

```js
scholarUrl: "https://scholar.google.com/citations?user=XXXXXXX",
```

### Adding the banner image

Place your image in the repo (e.g. `images/banner.jpg`) and set the `src` attribute of the `<img>` tag in the hero section of `index.html`.

## GitHub Pages setup

1. Push this repo to GitHub.
2. Go to **Settings → Pages → Source**: branch `main`, folder `/` (root).
3. The site will be live at `https://algolab-summer-school-2026.github.io/lecture-notes/`.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full site — layout, styles, rendering logic |
| `data.js` | All schedule and lecture data (edit this) |

---

*Built with [Claude](https://claude.ai) — Anthropic*
