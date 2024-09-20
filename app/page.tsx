'use client'

import { useEffect, useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import RetroGrid from "@/components/magicui/retro-grid";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { DockDemo } from "@/components/ui/doc";
import GreetingsSection from "@/components/sections/GreetingsSection";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Mouse move event listener
    window.addEventListener('mousemove', handleMouseMove);

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Adjust duration for smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth ease-out effect
      smoothWheel: true, // Smooth on wheel scroll
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* <DockDemo /> */}

      <motion.div
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 20%)`,
        }}
      />
      <div className="content-wrapper h-[200vh] flex flex-col dark:background overflow-hidden">
        <HeroSection />
        <GreetingsSection />
      </div>
    </>
  );
}
