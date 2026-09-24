//
//  Navbar.tsx
//  
//
//  Created by Arshad_iOS_Developer  on 08/09/2026.
//

"use client";

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
            <motion.div
              whileHover={{ rotate: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-[12px] border border-white/10 bg-white/[0.06] shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-teal-300/20" />

              <span className="relative text-[11px] font-bold tracking-tight text-white">
                AM
              </span>
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
            href="#contact"
            whileHover={{ scale: 1.035, y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="hidden items-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.08] px-4 py-2.5 text-[12px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:bg-white/[0.12] md:flex"
          >
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
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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
                  href="#contact"
                  onClick={closeMenu}
                  className="mt-1 flex items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white"
                >
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
