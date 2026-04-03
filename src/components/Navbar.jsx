import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-charcoal/70 backdrop-blur-lg shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="font-display text-2xl text-platinum">
          Akdant <span className="text-accent">Associates</span>
        </Link>
        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm tracking-[0.16em] uppercase transition-colors ${
                    isActive ? "text-accent" : "text-platinum hover:text-accent"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-platinum/30 p-2 text-platinum md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-platinum/10 bg-graphite/95 p-6 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-5">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block text-lg ${isActive ? "text-accent" : "text-platinum"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
