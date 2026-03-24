import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function useActiveSection() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const lastHref = links[links.length - 1].href;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (atBottom) {
        setActive(lastHref);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return active;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
}

export function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });
  const active = useActiveSection();
  const scrolled = useScrolled();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <a className="nav-brand" href="#hero" onClick={(e) => handleClick(e, "#hero")}>
          <span className="nav-brand__first">&lt;</span>
          {name}
          <span className="nav-brand__last"> /&gt;</span>
        </a>

        <div className="nav-right">
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href} className="nav-links__item">
                <a
                  href={link.href}
                  className={active === link.href ? "active" : ""}
                  onClick={(e) => handleClick(e, link.href)}
                >
                  {link.label}
                  {active === link.href && (
                    <motion.span
                      className="nav-underline"
                      layoutId="nav-underline"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? "☀️" : "🌙"}
          </button>

          <button
            className={`nav-toggle ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              animate={open ? { opacity: 0, x: -16 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
            />
            <motion.ul
              className="nav-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  <a
                    href={link.href}
                    className={active === link.href ? "active" : ""}
                    onClick={(e) => handleClick(e, link.href)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
