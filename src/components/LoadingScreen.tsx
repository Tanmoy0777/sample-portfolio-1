"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { easeInOutQuart } from "@/lib/animations";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const duration = 2000;
    const interval = 16;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * 100));

      if (current >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setVisible(false);
          setTimeout(onComplete, 900);
        }, 200);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.85, ease: easeInOutQuart, delay: 0.05 },
          }}
        >
          {/* Name */}
          <motion.div
            className="loading-name"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Tanmoy Acharjee
          </motion.div>

          {/* Counter */}
          <motion.div
            className="loading-progress-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {count}
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="loading-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Account Management & Campaign Strategy
          </motion.div>

          {/* Top horizontal bar */}
          <motion.div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              background: "var(--border)",
              top: "50%",
              marginTop: "-80px",
            }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: easeInOutQuart }}
          />
          {/* Bottom horizontal bar */}
          <motion.div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: "1px",
              background: "var(--border)",
              top: "50%",
              marginTop: "80px",
            }}
            initial={{ scaleX: 0, transformOrigin: "right" }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 1.2, ease: easeInOutQuart }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
