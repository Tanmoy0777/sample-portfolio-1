"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "@/data/portfolio";
import { easeOutQuart } from "@/lib/animations";
import { useCursor } from "@/context/CursorContext";

function WorkItem({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5% 0px" });
  const { setHover, setLinkHover, setLabel } = useCursor();

  return (
    <motion.div
      ref={ref}
      className="work-item"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.85, ease: easeOutQuart }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        setLinkHover(false);
        setLabel("");
      }}
    >
      {/* Hover bg */}
      <div className="work-item-bg" />

      {/* Number */}
      <div className="work-item-number">{project.number}</div>

      {/* Title + summary */}
      <div className="work-item-title-block">
        <div className="work-item-category">{project.category}</div>
        <h3 className="work-item-title">{project.title}</h3>
        <p className="work-item-summary">{project.summary}</p>
      </div>

      {/* Tools + metrics */}
      <div className="work-item-details">
        <div className="work-item-tools-label">Stack</div>
        <p className="work-item-tools">{project.tools}</p>
        <div className="work-item-metrics">
          {project.metrics.map((m) => (
            <span key={m} className="work-metric-badge">
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* CTA arrow */}
      <div className="work-item-cta">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            setLinkHover(true);
            setLabel("View");
          }}
          onMouseLeave={() => {
            setLinkHover(false);
            setLabel("");
          }}
        >
          <div className="work-item-arrow">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 13L13 3M13 3H5M13 3V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section className="work-section" id="work" ref={ref}>
      {/* Header */}
      <div className="work-header">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          01 / Selected Work
        </motion.span>

        <motion.h2
          className="work-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.1, duration: 0.9, ease: easeOutQuart }}
        >
          Analytics
          <br />
          Projects
        </motion.h2>
      </div>

      {/* Project list */}
      <div className="work-list">
        {projects.map((project, i) => (
          <WorkItem key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
