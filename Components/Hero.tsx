//
//  Hero.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 18,
    mass: 0.6,
  });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  const glowX = useTransform(smoothX, [-0.5, 0.5], ["25%", "75%"]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], ["30%", "70%"]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

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
      className="relative min-h-screen overflow-hidden pt-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute h-[550px] w-[550px] rounded-full bg-emerald-400/[0.055] blur-[140px]"
          style={{
            left: glowX,
            top: glowY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#05070b_82%)]" />

        <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-6 pb-20 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-4">
          {/* LEFT */}
          <motion.div
            className="relative z-20"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Small intro */}
            <motion.div
              className="mb-8 flex items-center gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              <span className="h-px w-8 bg-emerald-400/70" />

              <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/40">
                Senior iOS Engineer
              </span>
            </motion.div>

            {/* Main heading */}
          <h1 className="max-w-[760px] px-1 text-[54px] font-semibold leading-[0.96] tracking-[-0.03em] text-white sm:text-[68px] lg:text-[84px]">
              I build
              <br />

              <span className="bg-gradient-to-r from-white via-white to-white/45 bg-clip-text text-transparent">
                native iOS
              </span>

              <br />

              <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-white/70 bg-clip-text text-transparent">
                experiences.
              </span>
            </h1>

            {/* Description */}
            <motion.p
              className="mt-8 max-w-[560px] text-[15px] leading-7 text-white/45 sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              I&apos;m Arshad Mustafa, a Senior iOS Engineer with 3.6+ years
              of experience building polished, scalable, and user-focused
              applications with Swift, SwiftUI, and UIKit.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
            >
              <motion.a
                href="#work"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_15px_50px_rgba(255,255,255,0.08)]"
              >
                Explore My Work

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-14 flex items-center gap-7 sm:gap-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <div>
                <div className="text-xl font-semibold tracking-tight text-white">
                  15+
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                  Apps Published
                </div>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <div className="text-xl font-semibold tracking-tight text-white">
                  3.6+
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                  Years Experience
                </div>
              </div>

              <div className="h-9 w-px bg-white/10" />

              <div>
                <div className="text-xl font-semibold tracking-tight text-white">
                  Swift
                </div>

                <div className="mt-1 text-[10px] uppercase tracking-wider text-white/30">
                  Primary Stack
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — PORTRAIT */}
          <div
            className="relative flex h-[590px] items-center justify-center lg:h-[680px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "1500px" }}
          >
            {/* Main ambient glow */}
            <motion.div
              className="absolute h-[390px] w-[390px] rounded-full bg-emerald-300/[0.07] blur-[110px]"
              style={{
                x: imageX,
                y: imageY,
              }}
            />

            {/* Subtle orbital lines */}
            <motion.div
              className="absolute h-[500px] w-[500px] rounded-full border border-white/[0.035]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="absolute h-[400px] w-[400px] rounded-full border border-emerald-300/[0.045]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 27,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Main 3D object */}
            <motion.div
              className="relative z-10 h-[500px] w-[350px]"
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Back glass structure */}
              <motion.div
                className="absolute left-1/2 top-1/2 h-[460px] w-[325px] -translate-x-1/2 -translate-y-1/2 rounded-[55px] border border-white/[0.08] bg-white/[0.018] shadow-[0_50px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl"
                style={{
                  transform: "translateZ(-70px) rotateZ(-5deg)",
                }}
              />

              {/* Light behind portrait */}
              <div className="absolute left-1/2 top-1/2 h-[380px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-[60px] bg-gradient-to-b from-emerald-300/[0.08] via-cyan-300/[0.025] to-transparent blur-3xl" />

              {/* Portrait */}
              <motion.div
                className="absolute left-1/2 top-1/2 z-20 h-[455px] w-[315px] -translate-x-1/2 -translate-y-1/2"
                style={{
                  x: imageX,
                  y: imageY,
                  transform: "translateZ(90px)",
                }}
              >
                {/* Outer glass frame */}
                <div className="relative h-full w-full rounded-[52px] border border-white/[0.13] bg-white/[0.045] p-2 shadow-[0_45px_100px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                  {/* Image */}
                  <div className="relative h-full w-full overflow-hidden rounded-[44px] bg-[#101419]">
                    <Image
                      src="/own_img.jpg"
                      alt="Arshad Mustafa"
                      fill
                      priority
                      sizes="315px"
                      className="object-cover object-center"
                    />

                    {/* Cinematic gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-white/[0.06]" />

                    {/* Soft side lighting */}
                    <div className="pointer-events-none absolute -right-20 top-[-40px] h-[320px] w-[150px] rotate-[24deg] bg-white/[0.08] blur-3xl" />

                    {/* Bottom information */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-white">
                              Arshad Mustafa
                            </p>

                            <p className="mt-0.5 text-[10px] text-white/40">
                              Senior iOS Engineer
                            </p>
                          </div>

                          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08]">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Small floating experience badge */}
              <motion.div
                className="absolute -right-8 top-[95px] z-30 rounded-2xl border border-white/10 bg-black/45 px-4 py-3 shadow-2xl backdrop-blur-2xl"
                style={{
                  transform: "translateZ(160px)",
                }}
                animate={{
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/70">
                  Experience
                </div>

                <div className="mt-1 text-sm font-semibold text-white">
                  3.6+ Years
                </div>
              </motion.div>

              {/* Apps badge */}
              <motion.div
                className="absolute -left-10 bottom-[295px] z-30 rounded-2xl border border-white/10 bg-black/5 px-4 py-3 shadow-2xl backdrop-blur-2xl"
                style={{
                  transform: "translateZ(140px)",
                }}
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-[9px] uppercase tracking-[0.18em] text-white/70">
                  Published
                </div>

                <div className="mt-1 text-sm font-semibold text-white">
                  15+ Apps
                </div>
              </motion.div>

              {/* Tiny accent light */}
              <motion.div
                className="absolute right-[18px] top-[55px] h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_22px_rgba(110,231,183,0.8)]"
                style={{
                  transform: "translateZ(190px)",
                }}
                animate={{
                  opacity: [0.35, 1, 0.35],
                  scale: [0.8, 1.15, 0.8],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >


          <motion.div
            className="h-9 w-px bg-gradient-to-b from-white/30 to-transparent"
            animate={{
              scaleY: [1, 0.4, 1],
              opacity: [0.35, 0.9, 0.35],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
