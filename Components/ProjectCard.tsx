//
//  ProjectCard.ts
//
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  accent?: string;
};

export default function ProjectCard({
  title,
  category,
  description,
  technologies,
  accent = "#6366F1",
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#101010]"
    >
      {/* App Preview */}
      <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#151515]">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[80px]"
          style={{ backgroundColor: accent }}
        />

        {/* Temporary iPhone */}
        <motion.div
          whileHover={{ scale: 1.04, rotate: 2 }}
          transition={{ duration: 0.3 }}
          className="relative h-56 w-28 rounded-[24px] border border-white/15 bg-[#080808] p-1.5 shadow-2xl"
        >
          <div className="absolute left-1/2 top-2 z-10 h-4 w-12 -translate-x-1/2 rounded-full bg-black" />

          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[19px] bg-[#181818]">
            <div
              className="h-10 w-10 rounded-xl"
              style={{ backgroundColor: accent }}
            />
          </div>
        </motion.div>

        {/* Number */}
        <span className="absolute right-5 top-5 text-xs font-medium text-white/20">
          01
        </span>
      </div>

      {/* Content */}
      <div className="p-7">
        <p
          className="text-xs font-medium uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          {category}
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-white/45">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-white/45"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
          <span className="text-xs text-white/30">
            iOS Application
          </span>

          <span className="text-sm text-white/50 transition group-hover:text-white">
            Explore →
          </span>
        </div>
      </div>
    </motion.article>
  );
}
