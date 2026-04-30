"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/data/portfolio";
import {
  staggerContainer,
  fadeUp,
  slideInLeft,
} from "@/lib/animations";

const callouts = [
  { label: "Current Role", value: "Account Management & Campaign Strategy" },
  { label: "Location", value: "India" },
  { label: "Specialisation", value: "B2B Analytics & ABM" },
  { label: "Available", value: "Open to opportunities" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <section className="about-section" id="about" ref={ref}>
      {/* Header row */}
      <div className="about-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          02 / About
        </motion.span>

        <motion.div
          className="about-title-block"
          variants={staggerContainer(0.08, 0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="about-headline">
            <motion.span
              style={{ display: "block", overflow: "hidden" }}
              variants={fadeUp}
            >
              Data-led.
            </motion.span>
            <motion.span
              style={{ display: "block", overflow: "hidden" }}
              variants={fadeUp}
            >
              <em>Strategy-first.</em>
            </motion.span>
          </h2>
        </motion.div>
      </div>

      {/* Body */}
      <div className="about-body">
        {/* Left: text */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <p className="about-text">
            I&apos;m a{" "}
            <strong>
              {profile.role} specialist
            </strong>{" "}
            focused on the intersection where CRM data, account ownership, and
            campaign execution meet.
          </p>
          <br />
          <p className="about-text">
            Over <strong>2.5+ years</strong>, I&apos;ve built dashboards, scoring
            models, and automation layers that help teams see which accounts need
            attention, which campaigns deserve more support, and what should
            happen next.
          </p>
          <br />
          <p className="about-text">
            My work spans{" "}
            <strong>
              Power BI, Marketo, Dynamics 365, SQL, ETL design, and
              ABM strategy
            </strong>{" "}
            — bringing clarity to messy data and confidence to campaign
            decisions.
          </p>
        </motion.div>

        {/* Right: callout cards */}
        <motion.div
          className="about-aside"
          variants={staggerContainer(0.1, 0.3)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {callouts.map((item) => (
            <motion.div
              key={item.label}
              className="about-callout"
              variants={fadeUp}
              whileHover={{ borderColor: "var(--border-2)", y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="about-callout-label">{item.label}</div>
              <div className="about-callout-value">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
