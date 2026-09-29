import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "../constants/image.index";

const NAV_LINKS = [
  { label: "Home", path: "/", hash: "" },
  { label: "Skills", path: "/", hash: "#skills" },
  { label: "Projects", path: "/projects", hash: "" },
  { label: "Contact", path: "/", hash: "#contact" },
];

function HeaderSection() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // After navigation, scroll to hash if present
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location]);

  const isActive = (path: string, hash: string) => {
    if (path === "/projects" && location.pathname.startsWith("/projects")) return true;
    if (path === "/" && hash === "" && location.pathname === "/" && !location.hash) return true;
    if (path === "/" && hash && location.pathname === "/" && location.hash === hash) return true;
    return false;
  };

  const handleNavClick = (path: string, hash: string) => {
    // If already on homepage and clicking a hash link, just scroll
    if (path === "/" && hash && location.pathname === "/") {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`pf-navbar ${scrolled ? "pf-navbar--scrolled" : ""}`}
    >
      <div className="pf-navbar-inner">
        {/* Logo */}
        <Link to="/" className="pf-navbar-logo">
          <img src={images.hLogo} alt="H Logo" />
        </Link>

        {/* Nav Links */}
        <nav className="pf-navbar-links">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.path + link.hash}
              onClick={() => handleNavClick(link.path, link.hash)}
              className={`pf-navbar-link ${isActive(link.path, link.hash) ? "pf-navbar-link--active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/#contact" className="pf-navbar-cta">
          Hire Me
        </Link>
      </div>
    </header>
  );
}

export default HeaderSection;