import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMood from "../Utils/DarkMood";
import Logo from "../Utils/Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl
    border-b border-[#d6ccff40] dark:border-[#ffffff14]"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 -z-10
        bg-linear-to-r 
        from-[#faf5ff]/90 via-[#f3e8ff]/90 to-[#eef2ff]/90
        dark:from-[#1a1230]/95 dark:via-[#1f163d]/95 dark:to-[#151028]/95"
      />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
       <Logo/>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link key={link.path} to={link.path} className="relative group">
                {/* TEXT */}
                <span
                  className={`text-sm font-medium 
                  ${
                    isActive
                      ? "text-purple-500"
                      : "text-[#5b5675] dark:text-[#b7b2d9] group-hover:text-purple-500"
                  }`}
                >
                  {link.name}
                </span>

                {/* BORDER BOTTOM (ACTIVE + HOVER) */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5
                  bg-linear-to-r from-purple-500 to-indigo-500
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}

          {/* THEME */}
          <DarkMood />

          {/* CTA */}
          <Link to={'/contact'}
            className="px-5 py-2 rounded-xl text-white text-sm
            bg-linear-to-r from-purple-500 to-indigo-500
            hover:scale-105 "
          >
            Hire Me
          </Link>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-3">
          <DarkMood />

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#2a2540] dark:text-[#e6e1ff]"
          >
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden px-6 pb-6 backdrop-blur-xl
            bg-linear-to-b 
            from-[#faf5ff]/95 via-[#f3e8ff]/95 to-[#eef2ff]/95
            dark:from-[#1a1230]/95 dark:via-[#1f163d]/95 dark:to-[#151028]/95"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 border-b border-[#d6ccff40] dark:border-[#ffffff14]"
                >
                  <span
                    className={`text-base 
                    ${
                      isActive
                        ? "text-purple-500"
                        : "text-[#5b5675] dark:text-[#b7b2d9]"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
