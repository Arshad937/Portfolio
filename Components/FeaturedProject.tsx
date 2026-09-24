//
//  FeaturedProject.tsx
//
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-4, 4]),
    {
      stiffness: 100,
      damping: 20,
    }
  );

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

  const isReversed = project.reverse;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 45,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Project glow */}
      <div
        className="pointer-events-none absolute -inset-10 rounded-[50px] opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-25"
        style={{
          backgroundColor: project.accent,
        }}
      />

      <div
        className={`relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.035] shadow-[0_35px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:rounded-[40px] ${
          isReversed ? "" : ""
        }`}
      >
        {/* Top glass highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

        {/* Ambient accent */}
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full opacity-[0.055] blur-[80px]"
          style={{
            backgroundColor: project.accent,
          }}
        />

        <div
          className={`grid items-center lg:grid-cols-2 ${
            isReversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* ─────────────────────────────
              Project Information
          ───────────────────────────── */}

          <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
            {/* Number + Featured */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-white/25">
                0{index + 1}
              </span>

              <span className="rounded-full border border-white/[0.08] bg-white/[0.045] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                Featured Project
              </span>
            </div>

            {/* Category */}
            <div className="mt-10 flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: project.accent,
                  boxShadow: `0 0 14px ${project.accent}`,
                }}
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
                {project.category}
              </span>
            </div>

            {/* Icon + Title */}
            <div className="mt-5 flex items-center gap-4">
              <div
                className="relative h-14 w-14 overflow-hidden rounded-[16px] border border-white/[0.1] shadow-xl"
                style={{
                  boxShadow: `0 14px 35px ${project.accent}22`,
                }}
              >
                <Image
                  src={project.assets.icon}
                  alt={`${project.title} icon`}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-lg text-[14px] leading-7 text-white/43 sm:text-[15px]">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="glass-chip rounded-full px-3 py-1.5 text-[10px] font-medium text-white/55"
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* CTA */}
            {project.appStoreUrl && (
              <div className="mt-9">
                <motion.a
                  href={project.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.025,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="group/button inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.075] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-colors hover:bg-white/[0.11]"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.08]">
                    <Image
                      src="/other assets/appstore_icon.png"
                      alt="App Store"
                      width={16}
                      height={16}
                      className="opacity-90"
                    />
                  </div>

                  <div className="text-left">
                    <p className="text-[8px] leading-none text-white/30">
                      Available on the
                    </p>

                    <p className="mt-1 text-[11px] font-semibold leading-none text-white">
                      App Store
                    </p>
                  </div>

                  <motion.span
                    whileHover={{
                      x: 3,
                    }}
                    className="ml-1 text-white/35"
                  >
                    ↗
                  </motion.span>
                </motion.a>
              </div>
            )}
          </div>

          {/* ─────────────────────────────
              Phone Showcase
          ───────────────────────────── */}

          <div className="relative min-h-[470px] overflow-hidden border-t border-white/[0.06] lg:min-h-[560px] lg:border-l lg:border-t-0">
            {/* Showcase background */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 55%)`,
              }}
            />

            {/* Grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "45px 45px",
                }}
              />
            </div>

            {/* Main 3D area */}
            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              className="relative flex h-full min-h-[470px] items-center justify-center [perspective:1200px] lg:min-h-[560px]"
            >
              {/* Back phone */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  rotate: isReversed ? 6 : -6,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute z-10 hidden w-[125px] sm:block lg:w-[145px] ${
                  isReversed
                    ? "left-[14%]"
                    : "right-[14%]"
                }`}
              >
                <div
                  className="device-frame overflow-hidden rounded-[25px] p-1.5"
                  style={{
                    boxShadow: `0 25px 60px ${project.accent}18`,
                  }}
                >
                  <div className="relative aspect-[0.48] overflow-hidden rounded-[19px]">
                    <Image
                      src={project.assets.screenshots[1]}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="145px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Main phone */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="relative z-20 w-[205px] sm:w-[225px] lg:w-[245px]"
              >
                <div
                  className="device-frame rounded-[34px] p-2"
                  style={{
                    boxShadow: `
                      0 35px 90px rgba(0,0,0,0.48),
                      0 0 80px ${project.accent}15
                    `,
                  }}
                >
                  <div className="relative aspect-[0.48] overflow-hidden rounded-[27px]">
                    <Image
                      src={project.assets.screenshots[0]}
                      alt={`${project.title} main screenshot`}
                      fill
                      priority={index === 0}
                      className="object-cover"
                      sizes="245px"
                    />

                    {/* Dynamic glass reflection */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-transparent" />
                  </div>
                </div>

                {/* Bottom reflection */}
                <div
                  className="absolute -bottom-8 left-1/2 h-12 w-4/5 -translate-x-1/2 rounded-full blur-2xl"
                  style={{
                    backgroundColor: project.accent,
                    opacity: 0.12,
                  }}
                />
              </motion.div>

              {/* Front phone */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                  rotate: isReversed ? -5 : 5,
                }}
                transition={{
                  duration: 5.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className={`absolute z-10 hidden w-[125px] sm:block lg:w-[145px] ${
                  isReversed
                    ? "right-[14%]"
                    : "left-[14%]"
                }`}
              >
                <div
                  className="device-frame overflow-hidden rounded-[25px] p-1.5"
                  style={{
                    boxShadow: `0 25px 60px ${project.accent}15`,
                  }}
                >
                  <div className="relative aspect-[0.48] overflow-hidden rounded-[19px]">
                    <Image
                      src={project.assets.screenshots[2]}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                      sizes="145px"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating project label */}
              <div className="absolute bottom-6 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap">
                <div className="glass-chip flex items-center gap-2 rounded-full px-3 py-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: project.accent,
                      boxShadow: `0 0 10px ${project.accent}`,
                    }}
                  />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/45">
                    iOS Application
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
