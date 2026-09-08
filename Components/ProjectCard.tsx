//
//  ProjectCard.ts
//
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "../Data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#101010] transition-all duration-500 hover:border-white/[0.14]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full blur-[110px] opacity-[0.07] transition-all duration-700 group-hover:opacity-[0.16]"
        style={{ backgroundColor: project.accent }}
      />

      {/* Content */}
      <div className="relative p-6 sm:p-8">
        {/* App Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            {/* App Icon */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: 2 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[16px] border border-white/[0.08] bg-white/[0.03] shadow-xl"
            >
              <Image
                src={project.assets.icon}
                alt={`${project.title} app icon`}
                fill
                sizes="56px"
                className="object-cover"
              />
            </motion.div>

            <div className="min-w-0">
              <p
                className="text-[10px] font-medium uppercase tracking-[0.2em]"
                style={{ color: project.accent }}
              >
                {project.category}
              </p>

              <h3 className="mt-1 truncate text-xl font-semibold tracking-tight text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Number */}
          <span className="shrink-0 text-xs font-medium tabular-nums text-white/15">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Screenshots */}
        <div className="relative mt-8 h-[350px] overflow-hidden rounded-[1.6rem] border border-white/[0.06] bg-[#080808]">
          {/* Background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-[0.08]"
            style={{ backgroundColor: project.accent }}
          />

          {/* Decorative circle */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]" />

          {/* Left Phone */}
          <motion.div
            whileHover={{
              y: -12,
              rotate: -9,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="absolute left-[7%] top-12 z-10 h-[270px] w-[135px] -rotate-[7deg] overflow-hidden rounded-[1.8rem] border-[5px] border-[#252525] bg-black shadow-[0_25px_65px_rgba(0,0,0,0.65)]"
          >
            <Image
              src={project.assets.screenshots[1]}
              alt={`${project.title} screenshot 2`}
              fill
              sizes="135px"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
          </motion.div>

          {/* Main Phone */}
          <motion.div
            whileHover={{
              y: -14,
              rotateY: -4,
              rotateX: 2,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="absolute left-1/2 top-7 z-20 h-[295px] w-[150px] -translate-x-1/2 overflow-hidden rounded-[2rem] border-[5px] border-[#292929] bg-black shadow-[0_35px_80px_rgba(0,0,0,0.75)]"
          >
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2 z-20 h-4 w-14 -translate-x-1/2 rounded-full bg-black" />

            <Image
              src={project.assets.screenshots[0]}
              alt={`${project.title} screenshot 1`}
              fill
              sizes="150px"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-50" />
          </motion.div>

          {/* Right Phone */}
          <motion.div
            whileHover={{
              y: -12,
              rotate: 9,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            className="absolute right-[7%] top-12 z-10 h-[270px] w-[135px] rotate-[7deg] overflow-hidden rounded-[1.8rem] border-[5px] border-[#252525] bg-black shadow-[0_25px_65px_rgba(0,0,0,0.65)]"
          >
            <Image
              src={project.assets.screenshots[2]}
              alt={`${project.title} screenshot 3`}
              fill
              sizes="135px"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
          </motion.div>

          {/* Bottom glow */}
          <div
            className="pointer-events-none absolute bottom-[-80px] left-1/2 h-40 w-60 -translate-x-1/2 rounded-full blur-[80px] opacity-[0.12]"
            style={{ backgroundColor: project.accent }}
          />
        </div>

        {/* Description */}
        <p className="mt-6 line-clamp-3 text-sm leading-7 text-white/40">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-xs text-white/40 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-white/50"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-5">
          {project.appStoreUrl ? (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-2 text-sm font-medium text-white/55 transition-colors duration-300 hover:text-white"
            >
              <Image
                src="/other assets/appstore_icon.png"
                alt="App Store"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain opacity-60 transition-opacity group-hover/link:opacity-100"
              />

              <span>View on App Store</span>

              <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                ↗
              </span>
            </a>
          ) : (
            <span className="text-sm text-white/20">
              Project
            </span>
          )}

          <span className="text-xs text-white/15">
            iOS
          </span>
        </div>
      </div>
    </motion.article>
  );
}
