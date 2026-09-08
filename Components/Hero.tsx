//
//  Hero.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080808] pt-24"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/10 blur-[150px]" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,0.035),transparent_30%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-28">
        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-[#6366F1]" />

            <span className="text-sm font-medium uppercase tracking-[0.22em] text-white/45">
              Senior iOS Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]"
          >
            I build native iOS
            <span className="block text-white/35">
              experiences that ship.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-xl text-lg leading-8 text-white/50"
          >
            I&apos;m Arshad Mustafa, an iOS engineer with 3.6+ years of
            experience building, launching, and improving applications for
            iPhone and iPad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:scale-[1.02]"
            >
              Explore My Work
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 grid max-w-xl grid-cols-3 border-t border-white/10 pt-7"
          >
            <div>
              <p className="text-2xl font-semibold tracking-tight text-white">
                15+
              </p>

              <p className="mt-1 text-xs text-white/35">
                Published Apps
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-2xl font-semibold tracking-tight text-white">
                3.6+
              </p>

              <p className="mt-1 text-xs text-white/35">
                Years Experience
              </p>
            </div>

            <div className="border-l border-white/10 pl-5">
              <p className="text-2xl font-semibold tracking-tight text-white">
                iOS
              </p>

              <p className="mt-1 text-xs text-white/35">
                Native Development
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — PERSONAL PHOTO */}
        <div className="relative flex min-h-[560px] items-center justify-center">
          {/* Large ambient glow */}
          <div className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[#6366F1]/10 blur-[130px]" />

          {/* Decorative rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[460px] w-[460px] rounded-full border border-white/[0.05]"
          />

          {/* Secondary ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[390px] w-[390px] rounded-full border border-white/[0.035]"
          />

          {/* Main photo frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.25,
              },
              scale: {
                duration: 0.8,
                delay: 0.25,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative z-10"
          >
            {/* Outer glass frame */}
            <div className="relative rounded-[3rem] border border-white/[0.12] bg-white/[0.035] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.65)] backdrop-blur-xl">
              {/* Image */}
              <div className="relative h-[440px] w-[330px] overflow-hidden rounded-[2.5rem] bg-[#111] sm:h-[480px] sm:w-[360px]">
                <Image
                  src="/own_img.jpg"
                  alt="Arshad Mustafa"
                  fill
                  priority
                  sizes="(max-width: 640px) 330px, 360px"
                  className="object-cover"
                />

                {/* Image gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                {/* Bottom glass information */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                    iOS Engineer
                  </p>

                  <p className="mt-1 text-sm font-medium text-white/85">
                    Building apps for Apple platforms
                  </p>
                </div>
              </div>
            </div>

            {/* Small accent dot */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-20 h-3 w-3 rounded-full bg-[#6366F1] shadow-[0_0_25px_rgba(99,102,241,0.7)]"
            />
          </motion.div>

          {/* Floating Stack card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: 1,
              x: [0, 6, 0],
              y: [0, -6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 0.8,
              },
              x: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute right-0 top-24 z-20 rounded-2xl border border-white/10 bg-[#101010]/85 px-4 py-3 shadow-2xl backdrop-blur-xl sm:right-[-10px]"
          >
            <p className="text-[10px] uppercase tracking-wider text-white/25">
              Stack
            </p>

            <p className="mt-1 text-xs font-medium text-white/75">
              Swift + SwiftUI
            </p>
          </motion.div>

          {/* Floating Experience card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{
              opacity: 1,
              x: [0, -6, 0],
              y: [0, 6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 1,
              },
              x: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-24 left-0 z-20 rounded-2xl border border-white/10 bg-[#101010]/85 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-[-10px]"
          >
            <p className="text-[10px] uppercase tracking-wider text-white/25">
              Experience
            </p>

            <p className="mt-1 text-xs font-medium text-white/75">
              3.6+ Years
            </p>
          </motion.div>

          {/* Small Apple badge */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 right-10 z-20 hidden items-center gap-3 rounded-full border border-white/[0.08] bg-[#101010]/80 px-4 py-2.5 shadow-xl backdrop-blur-xl sm:flex"
          >
            <Image
              src="/other assets/apple_logo_icon.png"
              alt="Apple"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain opacity-70"
            />

            <span className="text-xs font-medium text-white/55">
              Crafted for Apple
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
