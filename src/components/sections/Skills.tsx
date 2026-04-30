"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { capabilities } from "@/data/portfolio";
import {
  staggerContainer,
  scaleReveal,
  easeOutQuart,
} from "@/lib/animations";
import { useCursor } from "@/context/CursorContext";

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { setHover } = useCursor();

  return (
    <section className="skills-section" ref={ref}>
      {/* Header */}
      <div className="skills-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          03 / Capabilities
        </motion.span>

        <motion.h2
          className="skills-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.1, duration: 0.9, ease: easeOutQuart }}
        >
          What I
          <br />
          Build
        </motion.h2>
      </div>

      {/* Grid */}
      <motion.div
        className="skills-grid"
        variants={staggerContainer(0.15, 0.2)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {capabilities.map((cap) => (
          <motion.div
            key={cap.title}
            className="skill-card"
            variants={scaleReveal}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className="skill-card-inner">
              <div className="skill-card-number">{cap.number}</div>
              <h3 className="skill-card-title">{cap.title}</h3>
              <p className="skill-card-desc">{cap.description}</p>
              <div className="skill-tools">
                {cap.tools.map((tool) => (
                  <motion.span
                    key={tool}
                    className="skill-tool-tag"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
