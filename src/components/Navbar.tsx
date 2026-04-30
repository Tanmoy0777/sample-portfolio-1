"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navItems, profile } from "@/data/portfolio";
import { useCursor } from "@/context/CursorContext";
import { fadeIn } from "@/lib/animations";

interface NavbarProps {
  loaded: boolean;
}

export default function Navbar({ loaded }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { setHover } = useCursor();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className="navbar"
      variants={fadeIn}
      initial="hidden"
      animate={loaded ? "visible" : "hidden"}
      transition={{ delay: 0.2, duration: 0.8 }}
      style={{
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      {/* Logo */}
      <motion.a
        href="#"
        className="navbar-logo"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.2 }}
      >
        {profile.initials}
      </motion.a>

      {/* Links */}
      <ul className="navbar-links">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={(e) => handleAnchorClick(e, item.href)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Availability */}
      <div className="navbar-availability">
        <div className="navbar-dot" />
        <span>{profile.availability}</span>
      </div>
    </motion.nav>
  );
}
