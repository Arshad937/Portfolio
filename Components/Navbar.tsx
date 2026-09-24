//
//  Navbar.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <div
        className={`mx-auto max-w-7xl rounded-[22px] border transition-all duration-500 ${
          scrolled
            ? "border-white/[0.13] bg-[#080b11]/90 shadow-[0_18px_60px_rgba(0,0,0,0.38)]"
            : "border-white/[0.08] bg-white/[0.035]"
        } backdrop-blur-2xl`}
      >
        <div className="flex h-14 items-center justify-between px-4 sm:h-[62px] sm:px-5 lg:px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            {/* 3D Profile Logo */}
            <motion.div
              whileHover={{
                rotateY: -8,
                rotateX: 4,
                scale: 1.06,
                y: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 22,
              }}
              className="relative h-9 w-9"
              style={{
                perspective: "500px",
              }}
            >
              {/* Soft depth shadow */}
              <div className="absolute inset-[2px] translate-y-[3px] rounded-[12px] bg-black/50 blur-[5px]" />

              {/* Back depth layer */}
              <div className="absolute inset-0 translate-x-[1px] translate-y-[2px] rounded-[12px] border border-emerald-300/[0.08] bg-white/[0.025]" />

              {/* Main glass frame */}
              <div className="relative h-full w-full overflow-hidden rounded-[12px] border border-white/[0.14] bg-white/[0.07] shadow-[0_8px_25px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl">
                <Image
                  src="/own_img.jpg"
                  alt="Arshad Mustafa"
                  fill
                  sizes="36px"
                  className="object-cover object-center"
                />

                {/* Glass reflection */}
                <div className="pointer-events-none absolute -left-3 top-[-12px] h-16 w-6 rotate-[25deg] bg-white/[0.16] blur-[7px]" />

                {/* Bottom depth gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.08]" />

                {/* Fine glass highlight */}
                <div className="pointer-events-none absolute inset-[1px] rounded-[11px] border border-white/[0.06]" />
              </div>
            </motion.div>

            <div className="hidden sm:block">
              <p className="text-[13px] font-semibold tracking-[-0.02em] text-white">
                Arshad Mustafa
              </p>

              <p className="text-[10px] font-medium tracking-[0.08em] text-white/35">
                SENIOR iOS ENGINEER
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative rounded-full px-3.5 py-2 text-[13px] font-medium text-white/45 transition-colors duration-300 hover:text-white"
              >
                <span className="relative z-10">{link.label}</span>

                <span className="absolute inset-0 scale-75 rounded-full bg-white/[0.06] opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            href="tel:+923352428032"
            whileHover={{ scale: 1.035, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="group hidden items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2.5 text-[12px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-white/[0.12] md:flex"
          >
            {/* Phone Icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 text-white/55 transition-colors duration-300 group-hover:text-white"
              aria-hidden="true"
            >
              <path
                d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.61 21 3 12.39 3 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Let's Talk</span>

            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
              className="text-white/50"
            >
              →
            </motion.span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.05] md:hidden"
          >
            <div className="flex w-4 flex-col gap-1.5">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                className="h-px w-full bg-white/80"
              />

              <motion.span
                animate={{
                  opacity: menuOpen ? 0 : 1,
                  x: menuOpen ? 6 : 0,
                }}
                className="h-px w-full bg-white/80"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -4 }
                    : { rotate: 0, y: 0 }
                }
                className="h-px w-full bg-white/80"
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-white/[0.07] px-3 pb-3 pt-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.25,
                    }}
                    className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-white/55 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-white/20">↗</span>
                  </motion.a>
                ))}

                <a
                  href="tel:+923352428032"
                  onClick={closeMenu}
                  className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white"
                >
                  {/* Mobile Phone Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 text-white/70"
                    aria-hidden="true"
                  >
                    <path
                      d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.61 21 3 12.39 3 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  Let's Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
