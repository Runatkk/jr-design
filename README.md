# Decora — Interior Design Studio Website

A multi-page static website for an interior design studio, ready to host on GitHub Pages.

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Portfolio | `pages/portfolio.html` |
| Project detail | `pages/project.html` |
| About us | `pages/about.html` |
| Shop | `pages/shop.html` |
| Contact | `pages/contact.html` |

## Project structure

```
decora/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── layout.js     ← shared nav & footer
│   └── main.js       ← interactions (FAQ, carousel, filters…)
├── pages/
│   ├── portfolio.html
│   ├── project.html
│   ├── about.html
│   ├── shop.html
│   └── contact.html
└── README.md
```

## Local development

Open `index.html` directly in a browser, or use a local server:

```bash
# With Python
python -m http.server 8000

# With Node / npx
npx serve .
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `decora-studio`).
2. Push this folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/decora-studio.git
git push -u origin main
```

3. In your repository, go to **Settings → Pages**.
4. Under **Source**, select **Deploy from a branch** → branch `main` → folder `/ (root)`.
5. Click **Save**. Your site will be live at `https://YOUR_USERNAME.github.io/decora-studio/` within a minute or two.

## Customisation tips

- **Images** — Replace Unsplash URLs in each HTML file with your own photos. Use the same `?w=800&q=75&auto=format&fit=crop` query params for performance.
- **Colors** — All design tokens are in `css/style.css` under `:root { … }`. Change `--bg`, `--accent`, etc.
- **Fonts** — The Google Fonts import is at the top of `css/style.css`.
- **Nav & Footer** — Edit `js/layout.js` — it's injected into every page automatically.
- **Projects** — Duplicate `pages/project.html` for each project and update the content.

## Notes

- No build tools or npm required — pure HTML, CSS, and vanilla JS.
- Images load from Unsplash CDN; replace with local assets before production.
- The contact form UI is fully functional but needs a backend / service (e.g. Formspree, Netlify Forms) to actually send emails.
