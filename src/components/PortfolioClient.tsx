"use client";
import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import { CursorProvider } from "@/context/CursorContext";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ui/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Work from "@/components/sections/Work";
import Experience from "@/components/sections/Experience";
import Philosophy from "@/components/sections/Philosophy";
import Contact from "@/components/sections/Contact";

export default function PortfolioClient() {
  const [loaded, setLoaded] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <CursorProvider>
      {/* Loading screen */}
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Custom cursor */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Smooth scroll wrapper */}
      <SmoothScrollProvider>
        {/* Navigation */}
        <Navbar loaded={loaded} />

        {/* Page sections */}
        <main>
          <Hero loaded={loaded} />
          <Work />
          <About />
          <Skills />
          <Experience />
          <Philosophy />
          <Contact />
        </main>
      </SmoothScrollProvider>
    </CursorProvider>
  );
}
