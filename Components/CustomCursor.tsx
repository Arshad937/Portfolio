//
//  CustomCursor.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
    mass: 0.3,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
    mass: 0.3,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(pointer: fine)"
    );

    const updatePointer = () => {
      setEnabled(mediaQuery.matches);
    };

    updatePointer();

    mediaQuery.addEventListener(
      "change",
      updatePointer
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        updatePointer
      );
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (
      event: MouseEvent
    ) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const handleMouseOver = (
      event: MouseEvent
    ) => {
      const target = event.target as HTMLElement;

      if (
        target.closest(
          "a, button, [data-cursor]"
        )
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseover",
      handleMouseOver
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );
    };
  }, [enabled, mouseX, mouseY]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          width: hovering ? 42 : 8,
          height: hovering ? 42 : 8,
          opacity: hovering ? 0.5 : 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
      />

      {/* Outer ring */}
      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          width: hovering ? 58 : 30,
          height: hovering ? 58 : 30,
          opacity: hovering ? 0.18 : 0.12,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 25,
        }}
        className="pointer-events-none fixed left-0 top-0 z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white mix-blend-difference"
      />
    </>
  );
}
