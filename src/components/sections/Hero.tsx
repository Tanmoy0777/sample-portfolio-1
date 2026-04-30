"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { profile } from "@/data/portfolio";
import {
  staggerContainerNoFade,
  heroNameReveal,
  fadeUp,
  easeOutQuart,
} from "@/lib/animations";
import { useCursor } from "@/context/CursorContext";

interface HeroProps {
  loaded: boolean;
}

export default function Hero({ loaded }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { setHover } = useCursor();

  /* ─── Mouse parallax ──────────────────────────────────────────────── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const translateX1 = useTransform(springX, [-1, 1], [-15, 15]);
  const translateX2 = useTransform(springX, [-1, 1], [15, -15]);
  const translateY1 = useTransform(springY, [-1, 1], [-10, 10]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseX.set((e.clientX / w - 0.5) * 2);
      mouseY.set((e.clientY / h - 0.5) * 2);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  const nameDelay = 0.2;

  return (
    <section className="hero-section" ref={sectionRef} id="hero">
      {/* Section index */}
      <AnimatePresence>
        {loaded && (
          <motion.div
            className="hero-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            ∗ Portfolio 2025
          </motion.div>
        )}
      </AnimatePresence>

      {/* Name block */}
      <motion.div
        className="hero-name-block"
        style={{ perspective: 800 }}
        animate={loaded ? "visible" : "hidden"}
        variants={staggerContainerNoFade(0.15, nameDelay)}
        initial="hidden"
      >
        {/* TANMOY */}
        <span className="hero-name-line">
          <motion.span
            className="hero-first-name"
            style={{ x: translateX1, y: translateY1 }}
            variants={heroNameReveal}
          >
            Tanmoy
          </motion.span>
        </span>

        {/* ACHARJEE */}
        <span className="hero-name-line">
          <motion.span
            className="hero-last-name"
            style={{ x: translateX2, y: translateY1 }}
            variants={heroNameReveal}
          >
            Acharjee
          </motion.span>
        </span>
      </motion.div>

      {/* Meta: role + stats */}
      <motion.div
        className="hero-meta"
        variants={fadeUp}
        initial="hidden"
        animate={loaded ? "visible" : "hidden"}
        transition={{ delay: 0.9, duration: 0.9, ease: easeOutQuart }}
      >
        <p className="hero-role">
          <strong>{profile.role}</strong> — {profile.summary}
        </p>

        <div className="hero-stats">
          {profile.proof.map((item, i) => (
            <motion.div
              key={item.label}
              className="hero-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: 1.1 + i * 0.1,
                duration: 0.7,
                ease: easeOutQuart,
              }}
            >
              <div className="hero-stat-value">{item.value}</div>
              <div className="hero-stat-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="hero-scroll-hint"
        initial={{ opacity: 0 }}
        animate={loaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </motion.div>
    </section>
  );
}
