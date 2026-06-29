import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const leftLinks = [
    { path: "#about", label: "About", id: "about" },
    { path: "#services", label: "Services", id: "services" },
  ];

  const rightLinks = [
    { path: "#testimonials", label: "Testimonials", id: "testimonials" },
    { path: "#contact", label: "Contact Us", id: "contact" },
  ];

  // 🔍 IntersectionObserver – set the active link based on visible section
  useEffect(() => {
    // Skip if we are not on the home page
    if (location.pathname !== "/") return;

    const sectionIds = [...leftLinks, ...rightLinks].map((link) => link.id);
    const observers = [];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -60% 0px", // fires when section is near the top
      threshold: 0.1,
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, observerOptions);
        obs.observe(el);
        observers.push(obs);
      }
    });

    // Also set home as active if we're near the top
    const homeEl = document.getElementById("Home");
    if (homeEl) {
      const homeObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection("home");
        },
        { rootMargin: "0px 0px -80% 0px", threshold: 0.1 }
      );
      homeObs.observe(homeEl);
      observers.push(homeObs);
    }

    return () => observers.forEach((obs) => obs.disconnect());
  }, [location.pathname]);

  // 🖱️ Smooth scroll handler
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  // 🎨 Common link styling – uses local active state, not NavLink
  const linkClass = (id) =>
    `block font-bold text-base sm:text-lg transition-all duration-200 whitespace-nowrap ${
      activeSection === id
        ? "border-b-2 border-fantomGreen pb-0.5"
        : "hover:border-b-2 hover:border-fantomGreen hover:pb-0.5"
    } text-fantomGreen`;

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ---- Desktop left links ---- */}
          <div className="hidden lg:flex items-center justify-start flex-1 gap-20 xl:gap-32">
            {leftLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleScroll(e, link.id)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Center Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="shrink-0 flex justify-center"
          >
            <img
              src="./Fantom_group.png"
              alt="Fantom Group Home"
              className="h-16 w-auto"
            />
          </a>

          {/* ---- Desktop right links ---- */}
          <div className="hidden lg:flex items-center justify-end flex-1 gap-20 xl:gap-32">
            {rightLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleScroll(e, link.id)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* ---- Mobile hamburger ---- */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-fantomGreen hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* ---- Mobile menu ---- */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-gray-100 mt-2 pt-2">
            {leftLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleScroll(e, link.id)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
            {rightLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => handleScroll(e, link.id)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;