# Mark Galang — Software Engineer

Responsive personal portfolio: React 18, Vite, plain CSS. No UI framework or tracking scripts. Original project screenshots and image assets are preserved.

## Local development

Requires Node.js 20.19+ and npm.

```sh
npm ci
npm start
```

The development server prints its local URL. To choose a port: `npm start -- --port 4173`.

## Checks and production preview

```sh
npm test
npm run build
npm run preview -- --port 4173
npm audit
```

The production output is **build/**, preserving the previous Create React App publish directory. Netlify build command: `npm run build`; publish directory: `build`. Use a supported Node version (20.19+). Repository changes do not require changing Netlify settings; confirm existing settings before publishing. No deployment is performed by these scripts.

## Editing content

- `src/data.js`: grouped skills, dated experience, personal project descriptions and verified screenshots.
- `src/App.jsx`: accessible navigation, sections, disclosure-based project overviews and contact form.
- `src/styles.css`: responsive editorial theme and reduced-motion-aware transitions.
- `index.html`: SEO metadata and canonical URL.
- `public/portfolio-social.png`: social-sharing image.

The existing public Formspree endpoint is retained. Tests mock all contact requests; do not submit live test messages without permission. Name, email and message are sent only when a visitor submits the form. A honeypot, native validation, duplicate-send prevention, 15-second timeout, persistent status and direct-email fallback are included. No phone number or downloadable resume is published.

Scroll reveals progressively enhance already-visible content using IntersectionObserver. Browsers without it, and people preferring reduced motion, get static visible content. Navigation and project disclosures are keyboard accessible. Manual viewport and assistive-technology review remains part of release checks.

Legacy CRA, Redux, Bootstrap, Material UI and carousel components were replaced rather than retained as unused dependencies. Public project screenshots and legacy image assets remain in place; no third-party imagery or font license changes were introduced.
