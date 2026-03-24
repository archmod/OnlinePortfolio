import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function HowItWasBuiltPage() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <nav className="navbar navbar--scrolled how-built-nav">
        <Link className="nav-brand" to="/">
          <span className="nav-brand__first">&lt;</span>
          Back to Portfolio
          <span className="nav-brand__last"> /&gt;</span>
        </Link>
        <button
          className="theme-toggle"
          onClick={() => setDark(!dark)}
          aria-label="Toggle theme"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </nav>
      <div className="portfolio">
        <HowItWasBuilt />
        <footer className="footer">
          <p>
            <Link to="/" className="how-built-back-link">← Back to Portfolio</Link>
          </p>
        </footer>
      </div>
    </>
  );
}

export function HowItWasBuilt() {
  return (
    <section id="how-it-was-built" className="section how-built">
      <h2>How This Website Was Built</h2>
      <p className="how-built-intro">
        This portfolio isn't a template — it's a custom full-stack web application built from scratch.
        Here's a look at every layer of the project, from code to deployment.
      </p>

      <div className="how-built-grid">
        {/* Frontend */}
        <div className="how-built-card">
          <span className="how-built-icon">⚛️</span>
          <h3>Frontend</h3>
          <p>
            Built with <strong>React 19</strong> and <strong>TypeScript</strong>, bundled by <strong>Vite 8</strong>.
            The UI is composed of modular components — Navbar, Hero, About Me, Skills, Experience, and more —
            each receiving data via props from a single API call.
          </p>
          <ul className="how-built-details">
            <li>Framer Motion for smooth, physics-based animations</li>
            <li>Pure CSS with custom properties for light/dark themes</li>
            <li>IntersectionObserver for active section detection in the navbar</li>
            <li>Fully responsive at 640px breakpoint with mobile hamburger menu</li>
            <li>Theme preference saved to localStorage</li>
          </ul>
          <div className="tech-list">
            <span className="tech-tag">React 19</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Vite 8</span>
            <span className="tech-tag">Framer Motion</span>
            <span className="tech-tag">CSS Custom Properties</span>
          </div>
        </div>

        {/* Backend */}
        <div className="how-built-card">
          <span className="how-built-icon">🖥️</span>
          <h3>Backend</h3>
          <p>
            Powered by <strong>Express 5</strong> and <strong>TypeScript</strong>, running on <strong>Node.js</strong>.
            The server exposes a REST API that returns all portfolio content as JSON. No database
            needed — content lives in a single TypeScript data file.
          </p>
          <ul className="how-built-details">
            <li><code>GET /api/portfolio</code> — returns all site data</li>
            <li><code>GET /api/health</code> — health check endpoint</li>
            <li>Serves the built React app in production (SPA fallback)</li>
            <li>CORS enabled for development, Vite proxy for local API calls</li>
            <li>Content updates require editing one file and redeploying</li>
          </ul>
          <div className="tech-list">
            <span className="tech-tag">Express 5</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">CORS</span>
            <span className="tech-tag">ts-node</span>
          </div>
        </div>

        {/* Deployment */}
        <div className="how-built-card">
          <span className="how-built-icon">🚀</span>
          <h3>Deployment</h3>
          <p>
            Deployed on <strong>DigitalOcean</strong>. The build process compiles the React frontend
            into optimised static files and the Express backend into JavaScript. A single Node.js
            process serves everything — the API, the React app, and static assets.
          </p>
          <ul className="how-built-details">
            <li><code>npm run build</code> compiles both client and server</li>
            <li><code>npm start</code> runs the production Express server</li>
            <li>The server serves the React SPA with catch-all fallback routing</li>
            <li>Environment variables for configuration (PORT, etc.)</li>
            <li>postinstall script auto-installs all sub-dependencies</li>
          </ul>
          <div className="tech-list">
            <span className="tech-tag">DigitalOcean</span>
            <span className="tech-tag">Node.js</span>
            <span className="tech-tag">Vite Build</span>
          </div>
        </div>

        {/* Git Repository */}
        <div className="how-built-card">
          <span className="how-built-icon">📂</span>
          <h3>Git Repository</h3>
          <p>
            The source code is hosted on <strong>GitHub</strong> as a monorepo — both the React frontend
            and Express backend live in a single repository. The project uses a single <code>main</code> branch
            with clear commit milestones.
          </p>
          <ul className="how-built-details">
            <li>Monorepo: <code>client/</code> and <code>server/</code> in one repo</li>
            <li>Root <code>package.json</code> orchestrates both projects</li>
            <li>.gitignore excludes node_modules, dist, and .env</li>
            <li>README with setup instructions and API docs</li>
            <li>TODO.md for tracking project roadmap</li>
          </ul>
          <div className="tech-list">
            <span className="tech-tag">GitHub</span>
            <span className="tech-tag">Git</span>
            <span className="tech-tag">Monorepo</span>
          </div>
        </div>

        {/* DNS & Domain */}
        <div className="how-built-card">
          <span className="how-built-icon">🌐</span>
          <h3>Domain & DNS</h3>
          <p>
            The domain <strong>angelinastillman.com</strong> was registered through <strong>Google Workspace</strong>,
            which also provides the professional email address. DNS records point the domain to the DigitalOcean server.
          </p>
          <ul className="how-built-details">
            <li>A Record → DigitalOcean server IP</li>
            <li>CNAME Record → www subdomain to root domain</li>
            <li>MX Records → Google Workspace for email</li>
            <li>Professional email: angelina@angelinastillman.com</li>
          </ul>
          <div className="tech-list">
            <span className="tech-tag">Google Workspace</span>
            <span className="tech-tag">DNS</span>
            <span className="tech-tag">Custom Domain</span>
          </div>
        </div>

        {/* Architecture Overview */}
        <div className="how-built-card">
          <span className="how-built-icon">🏗️</span>
          <h3>Architecture</h3>
          <p>
            The architecture follows a clean separation of concerns. The frontend fetches data from the
            backend API on load. All content is centrally managed in a single data file, making updates simple.
          </p>
          <ul className="how-built-details">
            <li>React fetches data via <code>usePortfolio</code> custom hook</li>
            <li>TypeScript interfaces shared between client and server</li>
            <li>Data-driven: all content comes from the API, not hardcoded in components</li>
            <li>SEO meta tags and Open Graph for social sharing</li>
            <li>Google Fonts (Inter) for clean, professional typography</li>
          </ul>
          <div className="tech-list">
            <span className="tech-tag">REST API</span>
            <span className="tech-tag">SPA</span>
            <span className="tech-tag">TypeScript</span>
            <span className="tech-tag">SEO</span>
          </div>
        </div>
      </div>

      <div className="how-built-summary">
        <h3>The Full Stack</h3>
        <table className="how-built-table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Technology</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Frontend</td><td>React 19, TypeScript, Vite, Framer Motion</td><td>Interactive, responsive UI</td></tr>
            <tr><td>Styling</td><td>Pure CSS with Custom Properties</td><td>Light/dark themes, mobile-first</td></tr>
            <tr><td>Backend</td><td>Express 5, TypeScript, Node.js</td><td>API server, static file serving</td></tr>
            <tr><td>Data</td><td>TypeScript file (no database)</td><td>Simple, file-based content</td></tr>
            <tr><td>Hosting</td><td>DigitalOcean</td><td>Cloud server running Node.js</td></tr>
            <tr><td>Domain</td><td>Google Workspace</td><td>Domain registration + email</td></tr>
            <tr><td>DNS</td><td>Google Workspace / DigitalOcean</td><td>A, CNAME, MX records</td></tr>
            <tr><td>Repository</td><td>GitHub</td><td>Version control, source of truth</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
