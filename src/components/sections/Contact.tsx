"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile, socialLinks } from "@/data/portfolio";
import {
  staggerContainer,
  fadeUp,
  clipReveal,
  easeOutQuart,
  staggerContainerNoFade,
} from "@/lib/animations";
import { useCursor } from "@/context/CursorContext";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const { setHover, setLinkHover, setLabel } = useCursor();

  const emailWords = profile.email.split("@");

  return (
    <section className="contact-section" id="contact" ref={ref}>
      {/* Top: CTA */}
      <div className="contact-top">
        <motion.div
          className="contact-cta-label"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          05 / Let&apos;s Connect
        </motion.div>

        <motion.h2
          className="contact-headline"
          variants={staggerContainerNoFade(0.08, 0.1)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          aria-label={profile.email}
        >
          <a
            href={`mailto:${profile.email}`}
            onMouseEnter={() => {
              setLinkHover(true);
              setLabel("Email");
            }}
            onMouseLeave={() => {
              setLinkHover(false);
              setLabel("");
            }}
          >
            {[emailWords[0], "@" + emailWords[1]].map((part, i) => (
              <span
                key={i}
                style={{
                  overflow: "hidden",
                  display: "block",
                  lineHeight: "0.9",
                }}
              >
                <motion.span
                  style={{ display: "block" }}
                  variants={clipReveal}
                  transition={{ duration: 1.0, ease: easeOutQuart }}
                >
                  {part}
                </motion.span>
              </span>
            ))}
          </a>
        </motion.h2>
      </div>

      {/* Bottom: info + social */}
      <motion.div
        className="contact-bottom"
        variants={staggerContainer(0.1, 0.4)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div className="contact-info" variants={fadeUp}>
          <p className="contact-location">
            Based in {profile.location} — Available for remote & hybrid roles
          </p>
          <ul className="contact-social-links">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => {
                    setHover(true);
                    setLabel(link.label);
                  }}
                  onMouseLeave={() => {
                    setHover(false);
                    setLabel("");
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.p className="contact-footer-note" variants={fadeUp}>
          © 2025 Tanmoy Acharjee. All rights reserved.
        </motion.p>
      </motion.div>
    </section>
  );
}
