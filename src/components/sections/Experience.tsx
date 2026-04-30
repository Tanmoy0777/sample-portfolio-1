"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/data/portfolio";
import { staggerContainer, fadeUp, easeOutQuart } from "@/lib/animations";

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="experience-section" ref={ref}>
      <div className="experience-inner">
        {/* Sticky left: headline */}
        <div className="experience-sticky">
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            04 / Experience
          </motion.span>

          <motion.h2
            className="experience-headline"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: 0.15, duration: 0.9, ease: easeOutQuart }}
          >
            Career
            <br />
            Journey
          </motion.h2>

          <motion.p
            className="experience-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.35, duration: 0.8, ease: easeOutQuart }}
          >
            From analytics foundations to full-scale account and campaign
            systems for B2B growth teams.
          </motion.p>
        </div>

        {/* Right: timeline */}
        <motion.div
          className="experience-list"
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {experience.map((item) => (
            <motion.div
              key={item.role}
              className="experience-item"
              variants={fadeUp}
            >
              <div className="experience-item-top">
                <div>
                  <h3 className="experience-role">{item.role}</h3>
                  <p className="experience-company">{item.company}</p>
                </div>
                <span className="experience-period">{item.period}</span>
              </div>
              <p className="experience-body">{item.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
