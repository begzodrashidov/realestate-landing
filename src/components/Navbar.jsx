import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Uy-joylar", href: "#listings" },
    { label: "Jarayon", href: "#process" },
    { label: "Kalkulyator", href: "#calculator" },
    { label: "Fikrlar", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-baseline gap-2 group">
          <span className="font-display text-2xl text-paper tracking-tight">
            Meridian
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-brass-light">
            Estates
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-paper/80 hover:text-brass-light transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink bg-brass-light px-5 py-3 hover:bg-paper transition-colors"
        >
          Ko'rishga yozilish
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-paper w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          aria-label="Menyu"
        >
          <span
            className={`block w-6 h-px bg-paper transition-transform ${
              open ? "rotate-45 translate-y-[3px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-paper transition-transform ${
              open ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ink border-t border-paper/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-paper/80 text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.2em] text-ink bg-brass-light px-5 py-3 text-center"
          >
            Ko'rishga yozilish
          </a>
        </div>
      )}
    </header>
  );
}
