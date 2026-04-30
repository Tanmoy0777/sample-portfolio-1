"use client";
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useCursor } from "@/context/CursorContext";

export default function CustomCursor() {
  const { hovered, linkHovered, label } = useCursor();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 20, restDelta: 0.001 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20, restDelta: 0.001 });

  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);

  const isVisible = useRef(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible.current) {
        isVisible.current = true;
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY, dotX, dotY]);

  const ringSize = linkHovered ? 80 : hovered ? 64 : 36;

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        className="cursor-dot"
        style={{ left: dotX, top: dotY }}
        animate={{ scale: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Ring — spring lag */}
      <motion.div
        className={`cursor-ring ${linkHovered ? "link-hovered" : hovered ? "hovered" : ""}`}
        style={{ left: springX, top: springY }}
        animate={{
          width: ringSize,
          height: ringSize,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 28 }}
      />

      {/* Label */}
      <AnimatePresence>
        {label && (
          <motion.div
            className="cursor-label"
            style={{ left: springX, top: springY }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
