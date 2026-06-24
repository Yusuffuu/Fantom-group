import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const leftLinks = [
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
  ];

  const rightLinks = [
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Common link styling for desktop / mobile
  const linkClass = ({ isActive }) =>
  `block font-bold text-base sm:text-3xl transition-all duration-200 whitespace-nowrap ${
    isActive
      ? "border-b-2 border-fantomGreen pb-0.5"
      : "hover:border-b-2 hover:border-fantomGreen hover:pb-0.5"
  } text-fantomGreen`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ---- Desktop layout: left, center, right ---- */}
          <div className="hidden lg:flex items-center justify-start flex-1 gap-20 xl:gap-32">
            {leftLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Center Logo (always visible) */}
          <NavLink to="/" className="shrink-0 flex justify-center">
            <img
              src="/Fantom_group.png"
              alt="Fantom Group Home"
              className="h-16 w-auto"
            />
          </NavLink>

          <div className="hidden lg:flex items-center justify-end flex-1 gap-20 xl:gap-32">
            {rightLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ---- Mobile hamburger button ---- */}
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

        {/* ---- Mobile menu panel ---- */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-gray-100 mt-2 pt-2">
            {leftLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
            {rightLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;