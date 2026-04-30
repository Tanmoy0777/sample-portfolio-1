import type { Variants, Transition } from "framer-motion";

/* ─── Easings ─────────────────────────────────────────────────────────────── */
export const easeOutQuart = [0.22, 1, 0.36, 1] as const;
export const easeInOutQuart = [0.76, 0, 0.24, 1] as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/* ─── Base Transitions ────────────────────────────────────────────────────── */
export const slowTransition: Transition = {
  duration: 1.0,
  ease: easeOutQuart,
};

export const medTransition: Transition = {
  duration: 0.75,
  ease: easeOutQuart,
};

export const fastTransition: Transition = {
  duration: 0.45,
  ease: easeOutQuart,
};

/* ─── Fade Up ─────────────────────────────────────────────────────────────── */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: easeOutQuart },
  },
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOutQuart },
  },
};

/* ─── Clip Reveal (text from below) ──────────────────────────────────────── */
export const clipReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease: easeOutQuart },
  },
};

/* ─── Stagger Container ───────────────────────────────────────────────────── */
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/* ─── Stagger Container (no opacity on wrapper) ───────────────────────────── */
export const staggerContainerNoFade = (
  stagger = 0.08,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/* ─── Fade In ─────────────────────────────────────────────────────────────── */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ─── Slide In From Left ──────────────────────────────────────────────────── */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: easeOutQuart },
  },
};

/* ─── Scale Reveal ────────────────────────────────────────────────────────── */
export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: easeOutQuart },
  },
};

/* ─── Line Draw ───────────────────────────────────────────────────────────── */
export const lineExpand: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.0, ease: easeInOutQuart },
  },
};

/* ─── Hero name ───────────────────────────────────────────────────────────── */
export const heroNameReveal: Variants = {
  hidden: { y: "100%", skewY: 4 },
  visible: {
    y: "0%",
    skewY: 0,
    transition: { duration: 1.1, ease: easeOutExpo },
  },
};

/* ─── Loading screen ──────────────────────────────────────────────────────── */
export const loadingExit: Variants = {
  visible: { y: 0 },
  exit: {
    y: "-100%",
    transition: { duration: 0.9, ease: easeInOutQuart, delay: 0.1 },
  },
};
