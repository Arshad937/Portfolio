//
//  FeaturedProject.tsx
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
import type { MouseEvent } from "react";
import type { Project } from "../Data/projects";

type FeaturedProjectProps = {
  project: Project;
  index: number;
};

export default function FeaturedProject({
  project,
  index,
}: FeaturedProjectProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
    mass: 0.6,
  });

  const rotateY = useTransform(springX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(springY, [-0.5, 0.5], [5, -5]);

  const phoneX = useTransform(springX, [-0.5, 0.5], [-14, 14]);
  const phoneY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const backPhoneX = useTransform(
    springX,
    [-0.5, 0.5],
    [-26, 26]
  );

  const backPhoneY = useTransform(
    springY,
    [-0.5, 0.5],
    [-20, 20]
  );

  const rightPhoneX = useTransform(
    springX,
    [-0.5, 0.5],
    [22, -22]
  );

  const rightPhoneY = useTransform(
    springY,
    [-0.5, 0.5],
    [-16, 16]
  );

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
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

  const screenshots = project.assets.screenshots ?? [];

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[38px] border border-white/[0.08] bg-white/[0.025] shadow-[0_40px_120px_rgba(0,0,0,0.35)]"
    >
      {/* =====================================================
          BACKGROUND LIGHT
      ===================================================== */}

      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full blur-[110px] opacity-20"
        style={{
          backgroundColor: project.accent,
        }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 left-[-10%] h-[400px] w-[400px] rounded-full blur-[120px] opacity-10"
        style={{
          backgroundColor: project.accent,
        }}
      />

      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="relative z-40 flex items-center justify-between border-b border-white/[0.06] px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/25">
            Featured {String(index + 1).padStart(2, "0")}
          </span>

          <span className="h-px w-8 bg-white/[0.1]" />

          <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
            {project.category}
          </span>
        </div>

        <div
          className="h-2 w-2 rounded-full"
          style={{
            backgroundColor: project.accent,
            boxShadow: `0 0 18px ${project.accent}`,
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative grid min-h-[650px] items-center lg:grid-cols-[0.9fr_1.1fr]">
        {/* =================================================
            LEFT INFORMATION
        ================================================= */}

        <div className="relative z-40 px-6 pb-8 pt-10 sm:px-10 lg:px-12 lg:py-14">
          {/* App Icon */}
          <motion.div
            whileHover={{
              rotateY: 12,
              rotateX: -8,
              scale: 1.05,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
            }}
            className="mb-7 h-[66px] w-[66px] [perspective:500px]"
          >
            <div className="relative h-full w-full overflow-hidden rounded-[18px] border border-white/[0.12] bg-white/[0.06] p-1 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <Image
                src={project.assets.icon}
                alt={`${project.title} icon`}
                fill
                sizes="66px"
                className="rounded-[14px] object-cover"
              />

              <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-gradient-to-br from-white/[0.2] via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Category */}
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
            {project.category}
          </p>

          {/* Title */}
          <h2 className="max-w-md text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl">
            {project.title}
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-md text-sm leading-7 text-white/40 sm:text-[15px]">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-7 flex max-w-md flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium text-white/45 backdrop-blur-xl"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap gap-3">
            {project.appStoreUrl && (
              <motion.a
                href={project.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.035,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group/button flex items-center gap-3 rounded-full bg-white px-5 py-3 text-xs font-semibold text-black shadow-[0_15px_40px_rgba(255,255,255,0.08)]"
              >
                <Image
                  src="/other assets/appstore_icon.png"
                  alt=""
                  width={15}
                  height={15}
                  className="object-contain"
                />

                <span>View on App Store</span>

                <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                  ↗
                </span>
              </motion.a>
            )}

            <a
              href={`/projects/${project.slug}`}
              className="flex items-center gap-2 rounded-full border border-white/[0.09] bg-white/[0.035] px-5 py-3 text-xs font-medium text-white/55 backdrop-blur-xl transition-colors hover:bg-white/[0.07] hover:text-white"
            >
              Case Study

              <span className="text-white/25">
                →
              </span>
            </a>
          </div>
        </div>

        {/* =================================================
            RIGHT 3D PHONE STAGE
        ================================================= */}

        <motion.div
          style={{
            rotateX,
            rotateY,
          }}
          className="relative h-[460px] [perspective:1400px] sm:h-[570px] lg:h-[650px]"
        >
          {/* Stage glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[110px]"
            style={{
              backgroundColor: project.accent,
              opacity: 0.13,
            }}
          />

          {/* =================================================
              OUTER ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045] sm:h-[510px] sm:w-[510px]"
          >
            <span
              className="absolute left-[7%] top-[16%] h-1.5 w-1.5 rounded-full"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 15px ${project.accent}`,
              }}
            />

            <span className="absolute bottom-[13%] right-[12%] h-1 w-1 rounded-full bg-white/30" />
          </motion.div>

          {/* =================================================
              INNER ORBIT
          ================================================= */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute left-1/2 top-1/2 h-[315px] w-[315px] -translate-x-1/2 -translate-y-1/2 rotate-[18deg] rounded-full border border-dashed border-white/[0.045] sm:h-[400px] sm:w-[400px]"
          />

          {/* =================================================
              BACK LEFT PHONE — SCREENSHOT 2
          ================================================= */}

          <motion.div
            style={{
              x: backPhoneX,
              y: backPhoneY,
            }}
            className="absolute left-[12%] top-1/2 z-10 w-[145px] -translate-y-1/2 sm:left-[12%] sm:w-[185px]"
          >
            <motion.div
              animate={{
                rotateZ: [-7, -5, -7],
                rotateY: [-14, -10, -14],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <PhoneShell
                image={screenshots[1] ?? screenshots[0]}
                title={`${project.title} second screenshot`}
              />

              <div className="absolute -inset-5 -z-10 rounded-[45px] bg-black/50 blur-2xl" />
            </motion.div>
          </motion.div>

          {/* =================================================
              BACK RIGHT PHONE — SCREENSHOT 3
          ================================================= */}

          <motion.div
            style={{
              x: rightPhoneX,
              y: rightPhoneY,
            }}
            className="absolute right-[12%] top-1/2 z-10 w-[145px] -translate-y-1/2 sm:right-[12%] sm:w-[185px]"
          >
            <motion.div
              animate={{
                rotateZ: [7, 5, 7],
                rotateY: [14, 10, 14],
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7,
              }}
              className="relative"
            >
              <PhoneShell
                image={screenshots[2] ?? screenshots[0]}
                title={`${project.title} third screenshot`}
              />

              <div className="absolute -inset-5 -z-10 rounded-[45px] bg-black/50 blur-2xl" />
            </motion.div>
          </motion.div>

          {/* =================================================
              MAIN FRONT PHONE — SCREENSHOT 1
          ================================================= */}

          <motion.div
            style={{
              x: phoneX,
              y: phoneY,
            }}
            className="absolute left-1/2 top-1/2 z-20 w-[190px] -translate-x-1/2 -translate-y-1/2 sm:w-[235px]"
          >
            {/* Deep shadow */}
            <div className="absolute -inset-10 rounded-[60px] bg-black/70 blur-3xl" />

            <div className="relative">
              {/* Outer iPhone frame */}
              <div className="relative rounded-[42px] border border-white/[0.16] bg-[#080b10] p-1.5 shadow-[0_50px_110px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.14)]">
                {/* Screen */}
                <div className="relative aspect-[0.485] overflow-hidden rounded-[36px] bg-black">
                  <Image
                    src={screenshots[0]}
                    alt={`${project.title} main screenshot`}
                    fill
                    sizes="235px"
                    className="object-cover"
                  />

                  {/* Glass reflection */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-transparent" />

                  {/* Screen border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-white/[0.1]" />
                </div>

                {/* Dynamic Island */}
                <div className="absolute left-1/2 top-3 h-5 w-[72px] -translate-x-1/2 rounded-full bg-black shadow-[0_2px_8px_rgba(0,0,0,0.6)]" />
              </div>

              {/* Moving reflection */}
              <motion.div
                animate={{
                  x: ["-130%", "150%"],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-0 top-0 h-full w-[25%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.09] to-transparent"
              />
            </div>
          </motion.div>

          {/* =================================================
              FLOATING APP INFORMATION
          ================================================= */}

          <motion.div
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-card absolute bottom-[12%] right-[4%] z-30 hidden rounded-2xl px-4 py-3 sm:block"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08]"
                style={{
                  backgroundColor: `${project.accent}18`,
                }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{
                    color: project.accent,
                  }}
                >
                  iOS
                </span>
              </div>

              <div>
                <p className="text-[10px] font-semibold text-white">
                  Native Experience
                </p>

                <p className="mt-0.5 text-[8px] text-white/30">
                  Swift + SwiftUI
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              FEATURE NUMBER
          ================================================= */}

          <div className="absolute left-[7%] top-[16%] hidden text-[72px] font-semibold tracking-[-0.08em] text-white/[0.025] sm:block">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* =================================================
              LIGHT PARTICLES
          ================================================= */}

          <span className="absolute left-[22%] top-[11%] h-1 w-1 rounded-full bg-white/30" />

          <span
            className="absolute right-[22%] top-[15%] h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 0 14px ${project.accent}`,
              opacity: 0.7,
            }}
          />

          <span className="absolute bottom-[17%] left-[26%] h-1 w-1 rounded-full bg-white/25" />
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM LIGHT LINE
      ===================================================== */}

      <div
        className="absolute bottom-0 left-[8%] right-[8%] h-px opacity-40"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />
    </motion.article>
  );
}

/* =============================================================
   PHONE SHELL
============================================================= */

function PhoneShell({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative rounded-[38px] border border-white/[0.1] bg-[#090c11] p-1.5 shadow-[0_35px_80px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-[0.485] overflow-hidden rounded-[32px]">
        <Image
          src={image}
          alt={title}
          fill
          sizes="205px"
          className="object-cover"
        />

        <div className="pointer-events-none absolute inset-0 bg-black/20" />

        <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/[0.06]" />
      </div>

      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-3 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />
    </div>
  );
}
