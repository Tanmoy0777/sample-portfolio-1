"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";
import { easeOutQuart, staggerContainerNoFade, clipReveal } from "@/lib/animations";

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgTextX = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const words = profile.philosophy.split(" ");

  return (
    <section className="philosophy-section" ref={ref}>
      {/* Background ghost text */}
      <motion.div
        className="philosophy-bg-text"
        style={{ x: bgTextX }}
        aria-hidden="true"
      >
        DATA
      </motion.div>

      <div className="philosophy-content">
        {/* Quote */}
        <motion.blockquote
          className="philosophy-quote"
          variants={staggerContainerNoFade(0.04, 0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          aria-label={profile.philosophy}
        >
          {words.map((word, i) => (
            <span key={i} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.25em" }}>
              <motion.span
                style={{ display: "inline-block" }}
                variants={clipReveal}
                transition={{ duration: 0.85, ease: easeOutQuart }}
              >
                {/* Alternate word color */}
                {i % 5 === 3 ? (
                  <em style={{ color: "var(--text-muted)", fontStyle: "normal" }}>
                    {word}
                  </em>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </motion.blockquote>

        {/* Attribution */}
        <motion.div
          className="philosophy-attribution"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.9, duration: 0.7, ease: easeOutQuart }}
        >
          <div className="philosophy-line" />
          <span className="philosophy-attr-text">
            {profile.shortName} Acharjee — Design Philosophy
          </span>
        </motion.div>
      </div>
    </section>
  );
}
