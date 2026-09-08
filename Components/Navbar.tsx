//
//  Navbar.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#0c0c0c]/80 px-5 shadow-2xl backdrop-blur-2xl sm:px-6">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight text-white"
        >
          Arshad Mustafa
        </a>

        <div className="hidden items-center gap-7 text-sm text-white/45 md:flex">
          <a
            href="#work"
            className="transition-colors hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#experience"
            className="transition-colors hover:text-white"
          >
            Experience
          </a>
          
          <a
            href="#skills"
            className="transition-colors hover:text-white"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition hover:scale-[1.03]"
        >
          Let&apos;s Talk
        </a>
      </div>
    </motion.nav>
  );
}
