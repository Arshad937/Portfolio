//
//  Hero.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);

  const photoX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const photoY = useTransform(springY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-12"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="ambient-glow ambient-blue -left-32 top-10 h-72 w-72 sm:h-[480px] sm:w-[480px]" />

        <div className="ambient-glow ambient-teal right-[-180px] top-[30%] h-80 w-80 sm:h-[520px] sm:w-[520px]" />

        <div className="ambient-glow ambient-indigo bottom-[-180px] left-[35%] h-72 w-72 sm:h-[450px] sm:w-[450px]" />

        <div className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025]" />

        <div className="absolute left-1/2 top-[42%] h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.018]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* ─────────────────────────────
            Left Content
        ───────────────────────────── */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
              Senior iOS Engineer
            </span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-[3.25rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-[4.5rem] lg:text-[5.65rem]">
            I build
            <br />

            <span className="text-gradient">
              native iOS
            </span>

            <br />

            experiences
            <span className="text-white/30">.</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-7 max-w-xl text-[15px] leading-7 text-white/45 sm:text-base"
          >
            I'm Arshad Mustafa, a Senior iOS Engineer with
            3.6+ years of experience building polished,
            scalable, and user-focused applications with
            Swift, SwiftUI, and UIKit.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              href="#work"
              whileHover={{
                scale: 1.025,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(255,255,255,0.08)]"
            >
              <span className="relative z-10">
                Explore My Work
              </span>

              <motion.span
                whileHover={{ x: 3 }}
                className="relative z-10 text-black/50"
              >
                →
              </motion.span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.025,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.045] px-5 py-3.5 text-sm font-medium text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-xl transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-12 flex flex-wrap items-center gap-7 sm:gap-10"
          >
            <div>
              <p className="text-xl font-semibold tracking-tight text-white">
                15+
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                Apps Published
              </p>
            </div>

            <div className="h-8 w-px bg-white/[0.08]" />

            <div>
              <p className="text-xl font-semibold tracking-tight text-white">
                3.6+
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                Years Experience
              </p>
            </div>

            <div className="h-8 w-px bg-white/[0.08]" />

            <div>
              <p className="text-xl font-semibold tracking-tight text-white">
                iOS
              </p>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/30">
                Swift Specialist
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ─────────────────────────────
            Right 3D Visual
        ───────────────────────────── */}

        <motion.div
          style={{
            rotateX,
            rotateY,
          }}
          className="relative mx-auto h-[480px] w-full max-w-[520px] [perspective:1200px] sm:h-[580px]"
        >
          {/* Large glow behind device */}
          <motion.div
            style={{
              x: photoX,
              y: photoY,
            }}
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/[0.13] blur-[90px] sm:h-80 sm:w-80"
          />

          {/* Outer ring */}
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.055] sm:h-[440px] sm:w-[440px]"
          />

          {/* Dashed ring */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 48,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-200/[0.08] sm:h-[370px] sm:w-[370px]"
          />

          {/* Main glass photo card */}
          <motion.div
            style={{
              x: photoX,
              y: photoY,
            }}
            className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 sm:w-[315px]"
          >
            <div className="glass-surface relative overflow-hidden rounded-[38px] p-2">
              <div className="relative aspect-[0.78] overflow-hidden rounded-[31px] bg-[#0b0f16]">
                <Image
                  src="/own_img.jpg"
                  alt="Arshad Mustafa"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="315px"
                />

                {/* Image gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070b]/75 via-transparent to-white/[0.04]" />

                {/* Top shine */}
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.08] to-transparent" />
              </div>
            </div>

            {/* Name plate */}
            <div className="glass-card absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-3 whitespace-nowrap rounded-2xl px-4 py-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.06]">
                <span className="text-[9px] font-bold text-white">
                  AM
                </span>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-white">
                  Arshad Mustafa
                </p>

                <p className="text-[9px] text-white/35">
                  Senior iOS Engineer
                </p>
              </div>
            </div>
          </motion.div>

          {/* SwiftUI floating card */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-card absolute left-0 top-[17%] hidden rounded-2xl px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-300/10 bg-blue-400/10">
                <span className="text-xs font-bold text-blue-200">
                  S
                </span>
              </div>

              <div>
                <p className="text-[11px] font-semibold text-white">
                  SwiftUI
                </p>

                <p className="text-[9px] text-white/30">
                  Modern UI
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience floating card */}
          <motion.div
            animate={{
              y: [0, 8, 0],
              rotate: [0, -1, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7,
            }}
            className="glass-card absolute right-0 top-[28%] hidden rounded-2xl px-4 py-3 sm:block"
          >
            <p className="text-lg font-semibold tracking-tight text-white">
              3.6+
            </p>

            <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/30">
              Years Experience
            </p>
          </motion.div>

          {/* Published apps card */}
          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="glass-card absolute bottom-[16%] right-0 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06]">
                <Image
                  src="/other assets/apple_logo_icon.png"
                  alt="Apple"
                  width={17}
                  height={17}
                  className="opacity-75"
                />
              </div>

              <div>
                <p className="text-[11px] font-semibold text-white">
                  15+ Apps
                </p>

                <p className="text-[9px] text-white/30">
                  Published on App Store
                </p>
              </div>
            </div>
          </motion.div>

          {/* Small decorative dots */}
          <div className="absolute left-[15%] top-[65%] h-1.5 w-1.5 rounded-full bg-teal-200/50 shadow-[0_0_15px_rgba(153,246,228,0.6)]" />

          <div className="absolute right-[18%] top-[12%] h-1 w-1 rounded-full bg-blue-200/60 shadow-[0_0_12px_rgba(191,219,254,0.7)]" />

          <div className="absolute bottom-[18%] left-[17%] h-1 w-1 rounded-full bg-white/30" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/25 sm:flex"
      >
        <span className="text-[9px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xs"
        >
          ↓
        </motion.span>
      </motion.a>
    </section>
  );
}
