# All In One

A quiet, single-page workspace for getting through a day: a two-column task board, saved links, a 25-minute focus timer and a scratchpad. It runs entirely in the browser, with no account, no backend and no build step.

![License: MIT](https://img.shields.io/badge/license-MIT-111111.svg)
![Build: none](https://img.shields.io/badge/build-none-787774.svg)
![Stack: vanilla JS](https://img.shields.io/badge/stack-vanilla%20JS-787774.svg)

[Live demo](https://abhijat-abhijat.github.io/all_in_one/) · [Report a bug](https://github.com/Abhijat-Abhijat/all_in_one/issues)

---

## What it does

| Area | Details |
| :--- | :--- |
| **Backlog and Archive** | A two-column board. Drag a task between columns, or use the Complete / Restore button (the only option on touch screens). Each task keeps its creation date. |
| **Focus** | A 25-minute timer with a thin progress ring. Start, pause, resume and reset. The timer tracks a deadline rather than counting ticks, so it stays accurate when the tab is in the background. The remaining time also shows in the browser tab title, and a short tone plays when the session ends. |
| **Resources** | Save links by name and address. Bare domains get `https://` added, only `http` and `https` addresses are accepted, and each entry shows its hostname. If you leave the name empty, the hostname is used. |
| **Scratchpad** | A plain text area that saves as you type. It tells you if the browser refused to store the text. |
| **Search** | One box filters tasks and resources as you type. Matching is a case-insensitive substring match, not fuzzy matching. |

## Keyboard

| Key | Action |
| :--- | :--- |
| `Ctrl` + `K` (`Cmd` + `K` on macOS) | Focus the search box |
| `Enter` | Add the task or resource you are typing |
| `Esc` | Clear the search and leave the box |

## Design

The interface follows a utilitarian, editorial style: it should read more like a well-set page than a dashboard.

- **Type.** Newsreader (serif) for the date heading and card titles, Geist for interface text, Geist Mono for timers, dates and metadata. System fallbacks are listed for each, so the page still looks right if Google Fonts is blocked.
- **Colour.** Off-white canvas (`#FBFBFA`), white cards, charcoal text (`#111111` and `#2F3437`), never pure black. Colour appears only as muted pastel tags that carry meaning: blue for the backlog count, yellow for open, green for done and running, red for failed checks.
- **Structure.** An asymmetric 12-column grid. Every card has a 1px `#EAEAEA` border and a 12px radius. There are no heavy shadows; task cards gain a barely visible shadow on hover.
- **Icons.** Two hand-drawn SVG symbols (close and search) with one shared 2.5 stroke weight and no icon library.
- **Motion.** Cards fade and rise 12px into place as they scroll into view, staggered by 80ms, and a very faint warm light drifts behind the page. Only `transform` and `opacity` are animated. All of it is switched off under `prefers-reduced-motion: reduce`.

## How it works

Everything lives in `index.html`: markup, CSS and one script. There are no runtime dependencies. The only network request is the Google Fonts stylesheet.

- **Storage.** `localStorage` under the keys `nexus_tasks`, `nexus_links` and `nexus_notes`. These are the same keys earlier versions used, so existing data carries over. If storage is unavailable (some private modes), the app keeps working from memory for the session.
- **Rendering.** State is held in two arrays. Every change saves and re-renders the affected lists from the data. User text is HTML-escaped before it reaches the page, and saved links are checked to be `http(s)` before they become `href` values.
- **Events.** Clicks use a single delegated listener keyed on `data-action` attributes. Adding a task or resource uses real forms, so Enter works everywhere.
- **Data integrity.** Tasks and links are validated on load. Malformed or unsafe rows are dropped instead of breaking the page.

## Self-test

The footer has a **Run self-test** button. It runs checks against the real helper functions (URL normalisation, HTML escaping, search matching, clock formatting, ring geometry, data sanitising and a storage round trip) and lists each result on the page and in the console. It uses a scratch key and never touches your tasks, links or notes.

## Run it locally

No install is needed.

```bash
git clone https://github.com/Abhijat-Abhijat/all_in_one.git
cd all_in_one
```

Then open `index.html` in a browser.

## Project layout

```text
index.html     the whole app
README.md      this file
package.json   Jest is declared, but there are no Jest test files yet
.github/       workflow that deploys the site to GitHub Pages on push to main
```

`npm test` is wired to Jest, and the project does not include Jest tests yet. For now the in-page self-test is the available check.

## Contributing

1. Fork the repository.
2. Create a branch: `git checkout -b feature/short-description`
3. Commit your change: `git commit -m "Describe the change"`
4. Push the branch: `git push origin feature/short-description`
5. Open a pull request.

Keep to the existing look when you add something: one weight of line icons, pastel tags only where colour means something, and motion limited to `transform` and `opacity`.

## License

Released under the MIT License. See `LICENSE` for details.
