//
//  FeaturedProject.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "../Data/projects";

type FeaturedProjectProps = {
  project: Project;
  index: number;
};

export default function FeaturedProject({
  project,
  index,
}: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.8,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] bg-[#101010]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full blur-[140px] opacity-10 transition-opacity duration-700 group-hover:opacity-20"
        style={{ backgroundColor: project.accent }}
      />

      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full blur-[130px] opacity-[0.04]"
        style={{ backgroundColor: project.accent }}
      />

      {/* Content */}
      <div
        className={`relative grid items-center gap-14 p-7 sm:p-10 lg:grid-cols-2 lg:gap-20 lg:p-14 ${
          project.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20">
          {/* App identity */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex items-center gap-4"
          >
            {/* Icon */}
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[18px] border border-white/[0.08] bg-white/[0.03] shadow-2xl">
              <Image
                src={project.assets.icon}
                alt={`${project.title} app icon`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>

            <div>
              <p
                className="text-[11px] font-medium uppercase tracking-[0.2em]"
                style={{ color: project.accent }}
              >
                {project.category}
              </p>

              <h3 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-8 max-w-xl text-sm leading-7 text-white/45 sm:text-base"
          >
            {project.description}
          </motion.p>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3.5 py-2 text-xs text-white/40 transition-colors duration-300 group-hover:border-white/[0.12] group-hover:text-white/55"
              >
                {technology}
              </span>
            ))}
          </motion.div>

          {/* App Store */}
          {project.appStoreUrl && (
            <motion.a
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.34 }}
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-white/90"
            >
              <Image
                src="/other assets/appstore_icon.png"
                alt="App Store"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />

              <span>View on App Store</span>

              <span className="ml-1 text-base">↗</span>
            </motion.a>
          )}
        </div>

        {/* ================= PHONE SHOWCASE ================= */}
        <div className="relative flex min-h-[470px] items-center justify-center">
          {/* Showcase glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute h-72 w-72 rounded-full blur-[110px]"
            style={{ backgroundColor: project.accent }}
          />

          {/* Decorative circle */}
          <div className="pointer-events-none absolute h-[390px] w-[390px] rounded-full border border-white/[0.04]" />

          {/* ================= MAIN PHONE ================= */}
          <motion.div
            whileHover={{
              y: -12,
              rotateY: -5,
              rotateX: 3,
              scale: 1.015,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 18,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="relative z-30 h-[405px] w-[202px] overflow-hidden rounded-[2.7rem] border-[6px] border-[#262626] bg-black shadow-[0_35px_90px_rgba(0,0,0,0.75)]"
          >
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2 z-30 h-5 w-[76px] -translate-x-1/2 rounded-full bg-black" />

            {/* Screen */}
            <Image
              src={project.assets.screenshots[0]}
              alt={`${project.title} screenshot 1`}
              fill
              sizes="202px"
              className="object-cover"
              priority={index === 0}
            />

            {/* Glass reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-40" />
          </motion.div>

          {/* ================= LEFT PHONE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -9 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              rotate: -12,
            }}
            className="absolute left-[2%] top-[15%] z-10 hidden h-[310px] w-[155px] overflow-hidden rounded-[2.2rem] border-[5px] border-[#252525] bg-black shadow-[0_25px_70px_rgba(0,0,0,0.6)] sm:block"
          >
            <Image
              src={project.assets.screenshots[1]}
              alt={`${project.title} screenshot 2`}
              fill
              sizes="155px"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
          </motion.div>

          {/* ================= RIGHT PHONE ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 9 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              rotate: 12,
            }}
            className="absolute right-[2%] bottom-[8%] z-10 hidden h-[290px] w-[145px] overflow-hidden rounded-[2rem] border-[5px] border-[#252525] bg-black shadow-[0_25px_70px_rgba(0,0,0,0.6)] sm:block"
          >
            <Image
              src={project.assets.screenshots[2]}
              alt={`${project.title} screenshot 3`}
              fill
              sizes="145px"
              className="object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent" />
          </motion.div>

          {/* Small floating accent */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-8 left-1/2 z-40 h-1.5 w-1.5 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: project.accent }}
          />
        </div>
      </div>
    </motion.article>
  );
}
