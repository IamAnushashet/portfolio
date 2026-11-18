# Anusha A Shet — Portfolio

React 19 · Vite · Tailwind CSS v4 · Framer Motion · Lucide icons

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Add your pictures (optional — placeholders show until you do)

Save images into `public/images/` with these exact names. They replace the
placeholders automatically, no code changes needed.

| File                          | Where it appears                      | Suggested size |
| ----------------------------- | ------------------------------------- | -------------- |
| `public/images/profile.jpg`   | About section portrait (4:5)          | 800 × 1000     |
| `public/images/os-agent.png`  | OS Agent project preview (16:10)      | 1600 × 1000    |
| `public/images/upi-shield.png`| UPI-Shield project preview (16:10)    | 1600 × 1000    |

To use a different file name, change the `src` / `image` value in
`src/sections/About.jsx` or `src/sections/Projects.jsx`.

## Hero artwork

The hero uses `public/tech-girl.png` (your illustration, cleaned and edge-feathered).
Replace that file to change it. Keep roughly a 676 × 585 ratio, or adjust the
`aspect-[676/585]` class and `width`/`height` in `src/sections/Hero.jsx`.

## Edit content

* Projects (problem / what I built / outcome): `src/sections/Projects.jsx`
* Experience timeline: `timeline` array in `src/sections/Experience.jsx`
* Skills: `src/sections/Skills.jsx`
* Bio and highlights: `src/sections/About.jsx`
* Colours: CSS variables at the top of `src/index.css` (dark + light palettes)
* Typed roles in the hero: `roles` array in `src/sections/Hero.jsx`
