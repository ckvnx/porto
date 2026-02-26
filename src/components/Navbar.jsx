import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    isActive(path)
      ? "nav-link active"
      : "nav-link inactive";

  return (
    <nav className="navbar">
      <div className="logo">K.</div>

      {/* Desktop Menu */}
      <div className="nav-links desktop">
        <Link to="/" className={linkClass("/")}>Home</Link>
        <Link to="/about" className={linkClass("/about")}>About</Link>
        <Link to="/work" className={linkClass("/work")}>Work</Link>
        <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
        <ThemeToggle />
      </div>

      {/* Hamburger */}
      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Link to="/" className={linkClass("/")} onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" className={linkClass("/about")} onClick={() => setOpen(false)}>About</Link>
            <Link to="/work" className={linkClass("/work")} onClick={() => setOpen(false)}>Work</Link>
            <Link to="/contact" className={linkClass("/contact")} onClick={() => setOpen(false)}>Contact</Link>
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;