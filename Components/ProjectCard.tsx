//
//  ProjectCard.ts
//
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";
import type { Project } from "../Data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  });

  const rotateX = useTransform(
    springY,
    [-0.5, 0.5],
    [5, -5]
  );

  const rotateY = useTransform(
    springX,
    [-0.5, 0.5],
    [-5, 5]
  );

  const imageX = useTransform(
    springX,
    [-0.5, 0.5],
    [-8, 8]
  );

  const imageY = useTransform(
    springY,
    [-0.5, 0.5],
    [-6, 6]
  );

  const screenshots = project.assets.screenshots ?? [];

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

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: 35,
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
        duration: 0.75,
        delay: Math.min(index * 0.05, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        rotateX,
        rotateY,
      }}
      className="group relative [perspective:1200px]"
    >
      <div className="relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] shadow-[0_30px_90px_rgba(0,0,0,0.28)] transition-all duration-500 group-hover:border-white/[0.14] group-hover:bg-white/[0.04]">
        {/* =================================================
            AMBIENT LIGHT
        ================================================= */}

        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-[90px] opacity-0 transition-opacity duration-700 group-hover:opacity-20"
          style={{
            backgroundColor: project.accent,
          }}
        />

        {/* =================================================
            SCREENSHOT STAGE
        ================================================= */}

        <div className="relative h-[300px] overflow-hidden sm:h-[340px]">
          {/* Background glow */}
          <div
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[70px]"
            style={{
              backgroundColor: project.accent,
              opacity: 0.08,
            }}
          />

          {/* Large background screenshot */}
          {screenshots[1] && (
            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="absolute left-[11%] top-[18%] w-[105px] rotate-[-9deg] sm:left-[13%] sm:w-[125px]"
            >
              <div className="relative rounded-[22px] border border-white/[0.1] bg-[#090c11] p-1 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[0.485] overflow-hidden rounded-[18px]">
                  <Image
                    src={screenshots[1]}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="125px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="absolute left-1/2 top-2 h-3 w-10 -translate-x-1/2 rounded-full bg-black" />
              </div>
            </motion.div>
          )}

          {/* Main screenshot */}
          {screenshots[0] && (
            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              whileHover={{
                y: -6,
              }}
              className="absolute left-1/2 top-[7%] z-20 w-[145px] -translate-x-1/2 sm:w-[165px]"
            >
              <div className="absolute -inset-5 rounded-[40px] bg-black/50 blur-2xl" />

              <div className="relative rounded-[28px] border border-white/[0.14] bg-[#080b10] p-1.5 shadow-[0_35px_75px_rgba(0,0,0,0.6)]">
                <div className="relative aspect-[0.485] overflow-hidden rounded-[23px] bg-black">
                  <Image
                    src={screenshots[0]}
                    alt={`${project.title} main screenshot`}
                    fill
                    sizes="165px"
                    className="object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.1] via-transparent to-transparent" />

                  <div className="pointer-events-none absolute inset-0 rounded-[23px] border border-white/[0.08]" />
                </div>

                <div className="absolute left-1/2 top-2.5 h-3.5 w-12 -translate-x-1/2 rounded-full bg-black" />
              </div>
            </motion.div>
          )}

          {/* Third screenshot */}
          {screenshots[2] && (
            <motion.div
              style={{
                x: imageX,
                y: imageY,
              }}
              className="absolute right-[11%] top-[18%] w-[105px] rotate-[9deg] sm:right-[13%] sm:w-[125px]"
            >
              <div className="relative rounded-[22px] border border-white/[0.1] bg-[#090c11] p-1 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-[0.485] overflow-hidden rounded-[18px]">
                  <Image
                    src={screenshots[2]}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="125px"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="absolute left-1/2 top-2 h-3 w-10 -translate-x-1/2 rounded-full bg-black" />
              </div>
            </motion.div>
          )}

          {/* Number */}
          <span className="absolute bottom-5 left-6 z-30 text-[52px] font-semibold tracking-[-0.08em] text-white/[0.035]">
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Accent light */}
          <span
            className="absolute bottom-7 right-7 z-30 h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: project.accent,
              boxShadow: `0 0 16px ${project.accent}`,
            }}
          />
        </div>

        {/* =================================================
            PROJECT INFORMATION
        ================================================= */}

        <div className="relative border-t border-white/[0.06] p-6 sm:p-7">
          <div className="flex items-start justify-between gap-5">
            <div className="min-w-0">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
                {project.category}
              </p>

              <h3 className="truncate text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                {project.title}
              </h3>
            </div>

            {/* App icon */}
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[14px] border border-white/[0.1] bg-white/[0.05] shadow-[0_12px_30px_rgba(0,0,0,0.3)]">
              <Image
                src={project.assets.icon}
                alt={`${project.title} icon`}
                fill
                sizes="48px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.14] via-transparent to-transparent" />
            </div>
          </div>

          <p className="mt-4 line-clamp-2 text-xs leading-6 text-white/35 sm:text-sm">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.07] bg-white/[0.025] px-2.5 py-1 text-[9px] font-medium text-white/35"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
            <a
              href={`/projects/${project.slug}`}
              className="text-[11px] font-medium text-white/40 transition-colors hover:text-white"
            >
              View project
              <span className="ml-1 text-white/20">
                →
              </span>
            </a>

            {project.appStoreUrl && (
              <motion.a
                href={project.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.05] px-3.5 py-2 text-[10px] font-semibold text-white/65 transition-colors hover:bg-white/[0.09] hover:text-white"
              >
                <Image
                  src="/other assets/appstore_icon.png"
                  alt=""
                  width={13}
                  height={13}
                  className="object-contain"
                />

                App Store

                <span className="text-white/25">
                  ↗
                </span>
              </motion.a>
            )}
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-[15%] right-[15%] h-px opacity-0 transition-opacity duration-500 group-hover:opacity-50"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }}
        />
      </div>
    </motion.article>
  );
}
