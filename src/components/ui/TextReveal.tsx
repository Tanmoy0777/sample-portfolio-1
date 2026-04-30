"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clipReveal, staggerContainerNoFade, easeOutQuart } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "words" | "lines" | "chars";
  once?: boolean;
}

export default function TextReveal({
  text,
  className = "",
  delay = 0,
  tag: Tag = "h2",
  splitBy = "words",
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, margin: "-10% 0px" });

  const parts =
    splitBy === "chars"
      ? text.split("")
      : splitBy === "lines"
      ? text.split("\\n")
      : text.split(" ");

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>} className={className} aria-label={text}>
      <motion.span
        style={{ display: "inline-flex", flexWrap: "wrap", gap: splitBy === "words" ? "0.25em" : "0" }}
        variants={staggerContainerNoFade(0.06, delay)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {parts.map((part, i) => (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span
              style={{ display: "inline-block" }}
              variants={clipReveal}
              transition={{ duration: 0.85, ease: easeOutQuart }}
            >
              {part}
              {splitBy === "words" && i < parts.length - 1 ? "" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
