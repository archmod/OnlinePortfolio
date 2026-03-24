# How This Portfolio Was Built

A full writeup of how angelinastillman.com was designed, developed, deployed, and shipped — from zero to live.

---

## The Idea

This project started with a simple goal: build a professional online portfolio for Angelina Stillman — a hospitality and housekeeping professional based in Melbourne, Australia. Rather than use a drag-and-drop website builder, the decision was made to build a custom full-stack web application from scratch. This gave full control over the design, performance, and content, and also serves as a showcase of modern web development practices.

---

## Frontend — React + TypeScript + Vite

### Tech Stack

- **React 19** — the latest version of React for building the user interface
- **TypeScript** — strict type checking across all components, hooks, and props
- **Vite 8** — lightning-fast development server and production bundler
- **Framer Motion** — smooth, physics-based animations (navbar, mobile drawer, active section underline)
- **Pure CSS with CSS Custom Properties** — no utility framework (like Tailwind), just clean, hand-written CSS with a full light/dark theme system

### Project Structure

```
client/
├── src/
│   ├── App.tsx              Main application shell
│   ├── App.css              All component styles
│   ├── index.css            Global styles & theme variables
│   ├── main.tsx             React entry point (StrictMode)
│   ├── components/
│   │   ├── Navbar.tsx       Fixed nav with scroll detection, theme toggle, mobile drawer
│   │   ├── Hero.tsx         Header with name, title, bio, email CTA
│   │   ├── AboutMe.tsx      Bio section with image, location, LinkedIn
│   │   ├── Skills.tsx       Grouped skill tags (Hospitality, Cleaning, Strengths)
│   │   ├── Experience.tsx   Timeline cards with company emoji markers
│   │   ├── LookingFor.tsx   Grid of desired role cards
│   │   ├── Projects.tsx     Project cards grid (tech tags, links)
│   │   └── Contact.tsx      Email + LinkedIn CTAs
│   ├── hooks/
│   │   └── usePortfolio.ts  Data-fetching hook (GET /api/portfolio)
│   └── types/
│       └── portfolio.ts     Shared TypeScript interfaces
├── index.html               SEO meta tags, Open Graph, Google Fonts (Inter)
└── vite.config.ts           Dev proxy (/api → localhost:4000)
```

### How the Frontend Works

1. **Data-driven architecture:** The frontend doesn't hardcode any personal information. Instead, it fetches all portfolio data from the backend API (`GET /api/portfolio`) using a custom React hook (`usePortfolio`). This means the entire site content can be updated by editing a single file on the server.

2. **Component composition:** The `App.tsx` shell fetches data once on mount, then passes it down to 8 specialised section components via props. Each component is self-contained and handles its own layout and display logic.

3. **Theme system:** A light/dark toggle is built into the navbar. Clicking the theme button sets a `data-theme` attribute on the `<html>` element, which activates a different set of CSS custom properties. The user's preference is saved to `localStorage` so it persists across visits.

4. **Smooth navigation:** The navbar uses `IntersectionObserver` to automatically detect which section is currently visible and highlight the corresponding nav link. Clicking a nav link triggers smooth scrolling to that section. On scroll, the navbar gains a frosted-glass backdrop blur effect.

5. **Mobile responsive:** At 640px and below, the desktop nav links are replaced by an animated hamburger menu that opens a slide-in drawer (animated with Framer Motion spring physics). The grid layouts collapse to single-column stacks.

6. **Animations:** Sections fade and slide in on load via CSS keyframes. The navbar uses Framer Motion for spring-animated entrance, active link underline, and hamburger-to-X morph animation.

### Development Workflow

- `npm run dev:client` starts the Vite dev server on `http://localhost:5173`
- Nodemon watches for changes in `src/` (`.ts`, `.tsx`, `.css`, `.json`, `.html` files) and restarts Vite automatically
- Vite's proxy configuration forwards all `/api/*` requests to the Express backend at `http://localhost:4000`, so the frontend can call the API without CORS issues during development

---

## Backend — Express + TypeScript

### Tech Stack

- **Express 5** — the latest major version of Express with improved routing
- **TypeScript** — strict mode with ES2020 target, compiled to CommonJS
- **CORS middleware** — enabled for cross-origin requests during development
- **ts-node** — runs TypeScript directly during development (via Nodemon)

### Project Structure

```
server/
├── src/
│   ├── index.ts             Express app setup, middleware, static serving
│   ├── routes/
│   │   └── portfolio.ts     GET /api/portfolio endpoint
│   └── data/
│       └── portfolio.ts     All portfolio content + TypeScript interfaces
├── public/
│   └── angelinaresume.pdf   Downloadable resume
├── tsconfig.json            TypeScript config (CommonJS output to dist/)
└── nodemon.json             Dev file watcher config
```

### How the Backend Works

1. **API endpoint:** The server exposes a single main endpoint — `GET /api/portfolio` — that returns the complete portfolio data (name, title, bio, skills, experience, projects) as JSON.

2. **Data layer:** All content lives in `server/src/data/portfolio.ts` as a plain TypeScript file. The `getPortfolio()` function returns the full data object. No database is needed — updating content is as simple as editing this file and redeploying.

3. **Static file serving:** The server serves the resume PDF from `/public/angelinaresume.pdf` and, in production, serves the built React client from `client/dist/`.

4. **SPA fallback:** In production, Express serves the React app's `index.html` for any route that doesn't match an API endpoint or static file. This is handled by the Express 5 catch-all route `/{*splat}`, ensuring client-side routing works correctly.

5. **Health check:** A `GET /api/health` endpoint returns `{ status: "ok" }` for monitoring and deployment health checks.

### Development Workflow

- `npm run dev:server` starts the Express server on `http://localhost:4000` with Nodemon watching for `.ts` and `.json` file changes
- ts-node runs TypeScript directly without a separate compilation step
- CORS is enabled so the Vite dev server (port 5173) can make API calls to the Express server (port 4000)

### Build Process

```bash
npm run build
```

This runs two steps:
1. `npm run build:client` — TypeScript compilation + Vite bundling → `client/dist/`
2. `npm run build:server` — TypeScript compilation → `server/dist/`

In production, only the compiled server (`node server/dist/index.js`) runs, and it serves both the API and the built React frontend.

---

## Deployment — DigitalOcean

The application is deployed on **DigitalOcean**, a cloud infrastructure provider.

### How It's Deployed

1. **The server runs on a DigitalOcean Droplet** (or App Platform) — a cloud virtual machine running Node.js.

2. **Build step:** The project is built using `npm run build`, which:
   - Compiles and bundles the React frontend into optimised static files (`client/dist/`)
   - Compiles the Express backend TypeScript into JavaScript (`server/dist/`)

3. **Start command:** `npm start` runs `node server/dist/index.js`, which starts the Express server. This single server process handles:
   - Serving the React frontend (static files from `client/dist/`)
   - Serving the API (`/api/portfolio`, `/api/health`)
   - SPA routing fallback (any unknown routes serve `index.html`)

4. **Environment variables:** Server configuration (like the port number) is managed through environment variables (`process.env.PORT`).

5. **The `postinstall` script** in the root `package.json` ensures that running `npm install` at the root automatically installs dependencies for both the client and server subdirectories.

---

## The Git Repository

The project is hosted on **GitHub** at:

**https://github.com/archmod/OnlinePortfolio**

### Repository Structure

This is a **monorepo** — both the frontend and backend live in a single repository:

```
OnlinePortfolio/
├── client/          React + TypeScript frontend (Vite)
├── server/          Express + TypeScript backend
├── package.json     Root scripts to orchestrate both
├── README.md        Getting started guide
├── TODO.md          Project roadmap and task tracking
└── .gitignore       Ignores node_modules/, dist/, .env
```

### Git Workflow

- **Single branch:** The project uses a single `main` branch
- **Commit history:** The project evolved through clear milestones:
  1. `Initial` — project scaffolding
  2. `Production-ready for Digital Ocean` — deployment configuration
  3. `Fix Express 5 catch-all route syntax` — production bug fix
  4. `Add navbar, contact, looking-for sections, grouped skills, SEO, animations` — major feature addition
- **`.gitignore`** excludes `node_modules/`, `dist/` (built output), and `.env` (secrets)

---

## Registering the DNS & Domain

### Domain Registration

The domain **angelinastillman.com** was registered and configured with **Google Workspace**, which provides:

- A professional email address: `angelina@angelinastillman.com`
- Domain management and DNS settings

### DNS Configuration

DNS records were configured to point the domain to the DigitalOcean server:

1. **A Record** — Points `angelinastillman.com` to the DigitalOcean server's IP address
2. **CNAME Record** — Points `www.angelinastillman.com` to the root domain
3. **MX Records** — Configured by Google Workspace for email delivery to `angelina@angelinastillman.com`

The result: visiting `angelinastillman.com` in a browser hits the DigitalOcean server, which serves the React frontend and API.

---

## Summary

| Layer       | Technology                              | Purpose                              |
| ----------- | --------------------------------------- | ------------------------------------ |
| Frontend    | React 19, TypeScript, Vite, Framer Motion | Interactive, responsive UI          |
| Styling     | Pure CSS with CSS Custom Properties     | Light/dark themes, mobile-first     |
| Backend     | Express 5, TypeScript, Node.js          | API server, static file serving     |
| Data        | TypeScript file (no database)           | Simple, file-based content store    |
| Hosting     | DigitalOcean                            | Cloud server running Node.js        |
| Domain      | Google Workspace                        | Domain registration + email         |
| DNS         | Google Workspace / DigitalOcean         | A, CNAME, MX records                |
| Repository  | GitHub                                  | Version control, source of truth    |
| Build       | Vite + TypeScript compiler              | Frontend bundling + backend compile |

This portfolio was built entirely from scratch — no templates, no page builders — as a custom full-stack web application. Every line of code, every style rule, and every deployment configuration was written specifically for this project.
