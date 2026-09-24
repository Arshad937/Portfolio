//
//  ProjectCard.ts
//
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { Project } from "../Data/projects";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [3, -3]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-3, 3]),
    {
      stiffness: 120,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      (event.clientX - rect.left) / rect.width - 0.5
    );

    mouseY.set(
      (event.clientY - rect.top) / rect.height - 0.5
    );
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
      }}
      className="group relative [perspective:1000px]"
    >
      {/* Accent glow */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[38px] opacity-0 blur-[55px] transition-opacity duration-700 group-hover:opacity-20"
        style={{
          backgroundColor: project.accent,
        }}
      />

      <div className="glass-card shine-effect relative overflow-hidden rounded-[28px] p-5 transition-transform duration-500 group-hover:-translate-y-1 sm:p-6">
        {/* Top highlight */}
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.16] to-transparent" />

        {/* Accent glow */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-[0.055] blur-[55px]"
          style={{
            backgroundColor: project.accent,
          }}
        />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-[14px] border border-white/[0.1]"
              style={{
                boxShadow: `0 10px 30px ${project.accent}18`,
              }}
            >
              <Image
                src={project.assets.icon}
                alt={`${project.title} icon`}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[15px] font-semibold tracking-[-0.02em] text-white">
                {project.title}
              </p>

              <p className="mt-1 truncate text-[10px] font-medium uppercase tracking-[0.13em] text-white/30">
                {project.category}
              </p>
            </div>
          </div>

          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-xs text-white/25 transition-all duration-300 group-hover:border-white/[0.14] group-hover:bg-white/[0.07] group-hover:text-white/70">
            ↗
          </span>
        </div>

        {/* Description */}
        <p className="relative z-10 mt-5 min-h-[68px] text-[12px] leading-6 text-white/38">
          {project.description}
        </p>

        {/* Screenshot showcase */}
        <div className="relative mt-6 flex h-[265px] items-end justify-center overflow-hidden rounded-[22px] border border-white/[0.06] bg-black/20">
          {/* Background glow */}
          <div
            className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.09] blur-[55px]"
            style={{
              backgroundColor: project.accent,
            }}
          />

          {/* Main screenshot */}
          <motion.div
            whileHover={{
              y: -7,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 20,
            }}
            className="relative z-20 w-[125px]"
          >
            <div className="device-frame rounded-[21px] p-1.5 shadow-[0_25px_55px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-[0.48] overflow-hidden rounded-[16px]">
                <Image
                  src={project.assets.screenshots[0]}
                  alt={`${project.title} main screen`}
                  fill
                  className="object-cover"
                  sizes="125px"
                />
              </div>
            </div>
          </motion.div>

          {/* Left screenshot */}
          <motion.div
            whileHover={{
              y: -4,
              rotate: -2,
            }}
            className="absolute bottom-[-28px] left-[17%] z-10 w-[95px] -rotate-[8deg] opacity-70 transition-opacity duration-300 group-hover:opacity-90"
          >
            <div className="device-frame rounded-[17px] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[0.48] overflow-hidden rounded-[13px]">
                <Image
                  src={project.assets.screenshots[1]}
                  alt={`${project.title} screen`}
                  fill
                  className="object-cover"
                  sizes="95px"
                />
              </div>
            </div>
          </motion.div>

          {/* Right screenshot */}
          <motion.div
            whileHover={{
              y: -4,
              rotate: 2,
            }}
            className="absolute bottom-[-28px] right-[17%] z-10 w-[95px] rotate-[8deg] opacity-70 transition-opacity duration-300 group-hover:opacity-90"
          >
            <div className="device-frame rounded-[17px] p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
              <div className="relative aspect-[0.48] overflow-hidden rounded-[13px]">
                <Image
                  src={project.assets.screenshots[2]}
                  alt={`${project.title} screen`}
                  fill
                  className="object-cover"
                  sizes="95px"
                />
              </div>
            </div>
          </motion.div>

          {/* Showcase gradient */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
        </div>

        {/* Technologies */}
        <div className="relative z-10 mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.07] bg-white/[0.035] px-2.5 py-1 text-[9px] font-medium text-white/35 transition-colors group-hover:text-white/50"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="relative z-10 mt-5 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-white/20">
            iOS Application
          </span>

          {project.appStoreUrl ? (
            <motion.a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                x: 2,
              }}
              className="flex items-center gap-2 text-[10px] font-semibold text-white/45 transition-colors hover:text-white"
            >
              <Image
                src="/other assets/appstore_icon.png"
                alt="App Store"
                width={14}
                height={14}
                className="opacity-60"
              />

              <span>App Store</span>

              <span className="text-white/20">
                ↗
              </span>
            </motion.a>
          ) : (
            <span className="text-[10px] text-white/20">
              View Project
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
