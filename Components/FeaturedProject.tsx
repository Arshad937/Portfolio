//
//  FeaturedProject.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import { motion } from "framer-motion";

type FeaturedProjectProps = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  accent?: string;
  reverse?: boolean;
};

export default function FeaturedProject({
  title,
  category,
  description,
  technologies,
  accent = "#6366F1",
  reverse = false,
}: FeaturedProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="group grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
    >
      {/* App Visual */}
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#111] p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-[100px]"
            style={{ backgroundColor: accent }}
          />

          <div className="relative mx-auto flex aspect-[4/3] max-w-xl items-center justify-center">
            {/* Temporary app mockup */}
            <motion.div
              whileHover={{ y: -8, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative h-[330px] w-[165px] rounded-[30px] border border-white/15 bg-[#090909] p-1.5 shadow-2xl"
            >
              <div className="absolute left-1/2 top-2 z-10 h-5 w-16 -translate-x-1/2 rounded-full bg-black" />

              <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[25px] bg-[#151515]">
                <div className="text-center">
                  <div
                    className="mx-auto mb-4 h-12 w-12 rounded-2xl"
                    style={{ backgroundColor: accent }}
                  />

                  <p className="text-xs font-medium text-white">
                    {title}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Information */}
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <p
          className="text-sm font-medium uppercase tracking-[0.2em]"
          style={{ color: accent }}
        >
          {category}
        </p>

        <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h3>

        <p className="mt-6 max-w-lg text-base leading-7 text-white/50">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/55"
            >
              {technology}
            </span>
          ))}
        </div>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:gap-3"
        >
          View Case Study
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </motion.article>
  );
}
