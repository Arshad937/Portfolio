"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProject from "../Components/FeaturedProject";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";

const featuredProjects = projects.filter(
  (project) => project.featured
);

const moreProjects = projects.filter(
  (project) => !project.featured
);

const experiences = [
  {
    company: "Top Edge Technologies",
    role: "Senior iOS Engineer",
    location: "Multan",
    period: "Jun 2025 — Present",
    duration: "Current",
    current: true,
    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "MVVM",
      "Clean Architecture",
      "Combine",
      "Async/Await",
      "Core ML",
    ],
  },
  {
    company: "Zoobi Apps & Games Technologies",
    role: "iOS Engineer",
    location: "Islamabad",
    period: "Mar 2024 — Jun 2025",
    duration: "1y 3m",
    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "MVVM",
      "Firebase",
      "REST APIs",
    ],
  },
  {
    company: "M Tech Soft",
    role: "iOS Engineer",
    location: "Lahore",
    period: "Jan 2023 — Mar 2024",
    duration: "1y 2m",
    technologies: [
      "Swift",
      "UIKit",
      "SwiftUI",
      "MVVM",
      "REST APIs",
    ],
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Swift", "SwiftUI", "Objective-C"],
  },
  {
    title: "Apple Frameworks",
    items: [
      "UIKit",
      "Combine",
      "AVKit",
      "Core ML",
      "Vision",
      "MapKit",
      "Core Location",
      "Photos",
    ],
  },
  {
    title: "Architecture",
    items: [
      "MVVM",
      "MVC",
      "Clean Architecture",
      "Coordinator",
      "Reusable Components",
    ],
  },
  {
    title: "Development",
    items: [
      "Async/Await",
      "GCD",
      "Xcode",
      "CocoaPods",
      "Git",
      "App Store Connect",
    ],
  },
];

const contactItems = [
  {
    label: "Email",
    value: "arshadmustafa129@gmail.com",
    href: "mailto:arshadmustafa129@gmail.com",
    icon: "/other assets/mail_icon.png",
  },
  {
    label: "Phone",
    value: "+92 335 2428032",
    href: "tel:+923352428032",
    icon: "/other assets/mobile_icon.png",
  },
  {
    label: "WhatsApp",
    value: "Let's connect",
    href: "https://wa.me/923352428032",
    icon: "/other assets/whatsapp_icon.png",
  },
  {
    label: "LinkedIn",
    value: "Arshad Mustafa",
    href: "https://linkedin.com/in/arshad-mustafa-03905225b",
    icon: "/other assets/linkedin_icon.png",
  },
  {
    label: "GitHub",
    value: "Arshad937",
    href: "https://github.com/Arshad937",
    icon: "/other assets/github_icon.png",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />

      {/* =====================================================
          FEATURED WORK
      ===================================================== */}
      <section
        id="work"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end"
          >
            <div>
              <span className="section-label">
                Selected Work
              </span>

              <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                A few things
                <br />
                I&apos;ve built.
              </h2>
            </div>

            <div className="max-w-xs">
              <p className="text-sm leading-6 text-white/35">
                A selection of iOS products spanning
                productivity, utilities, navigation,
                media, and AI-powered experiences.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8 sm:space-y-10">
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MORE PROJECTS
      ===================================================== */}
      <section
        id="more-projects"
        className="relative px-5 py-28 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
          >
            <div>
              <span className="section-label">
                More Projects
              </span>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                More things
                <br />
                <span className="text-gradient">
                  I&apos;ve built.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/40 sm:text-base">
                A collection of other iOS products,
                utilities, and experiences I&apos;ve
                designed and shipped.
              </p>
            </div>

            <div className="hidden text-right sm:block">
              <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                {moreProjects.length}+
              </p>

              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/25">
                Additional Projects
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {moreProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ===================================================== */}
      <section
        id="about"
        className="relative overflow-hidden px-5 py-32 sm:px-8 lg:px-12"
      >
        <div className="ambient-glow ambient-blue -left-32 top-20 h-72 w-72" />
        <div className="ambient-glow ambient-teal bottom-10 right-[-120px] h-80 w-80" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mb-14"
          >
            <span className="section-label">
              About Me
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Building iOS apps
              <br />
              <span className="text-gradient">
                from idea to App Store.
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Main Story */}
            <motion.div
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="glass-surface relative overflow-hidden rounded-[32px] p-7 sm:p-10"
            >
              <div className="pointer-events-none absolute -right-3 -top-12 text-[180px] font-semibold leading-none tracking-[-0.1em] text-white/[0.025]">
                03
              </div>

              <div
                className="mb-8 h-10 w-10 rounded-2xl border border-white/[0.1]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,.18), rgba(45,212,191,.08))",
                }}
              >
                <div className="flex h-full items-center justify-center">
                  <span className="text-xs font-bold text-white/70">
                    AM
                  </span>
                </div>
              </div>

              <p className="relative max-w-2xl text-lg leading-8 tracking-[-0.015em] text-white/75 sm:text-xl">
                I&apos;m a Senior iOS Engineer focused on
                building high-quality, scalable, and
                user-centric applications using Swift,
                SwiftUI, and UIKit.
              </p>

              <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/38 sm:text-[15px]">
                I work across the complete iOS development
                lifecycle, from turning product ideas and
                Figma designs into polished interfaces to
                integrating APIs, implementing modern
                architectures, handling subscriptions and
                monetization, and shipping applications
                through the App Store.
              </p>

              <p className="relative mt-6 max-w-2xl text-sm leading-7 text-white/38 sm:text-[15px]">
                My recent work has covered productivity
                tools, photo and media utilities,
                AI-powered experiences, navigation apps,
                document tools, and other consumer
                applications.
              </p>

              <div className="relative mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-white/15" />

                <span className="text-[10px] font-medium tracking-[0.18em] text-white/25">
                  SWIFT • SWIFTUI • UIKIT
                </span>
              </div>
            </motion.div>

            {/* Right Side */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {/* Experience */}
              <motion.div
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="glass-card group relative overflow-hidden rounded-[30px] p-7"
              >
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[70px] opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    backgroundColor: "#60A5FA",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                      Experience
                    </p>

                    <p className="mt-4 text-5xl font-semibold tracking-[-0.07em] text-white">
                      3.6+
                    </p>

                    <p className="mt-2 text-xs text-white/35">
                      Years building iOS applications
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                    <span className="text-sm text-white/50">
                      ✦
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Apps */}
              <motion.div
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.16,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="glass-card group relative overflow-hidden rounded-[30px] p-7"
              >
                <div
                  className="absolute -bottom-20 -right-10 h-44 w-44 rounded-full blur-[75px] opacity-10 transition-opacity duration-500 group-hover:opacity-20"
                  style={{
                    backgroundColor: "#2DD4BF",
                  }}
                />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                      Shipped
                    </p>

                    <p className="mt-4 text-5xl font-semibold tracking-[-0.07em] text-white">
                      15+
                    </p>

                    <p className="mt-2 text-xs text-white/35">
                      iOS apps and App Store projects
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04]">
                    <span className="text-sm text-white/50">
                      
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Core Focus */}
              <motion.div
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.24,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="glass-card relative overflow-hidden rounded-[30px] p-7 sm:col-span-2 lg:col-span-1"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                  Core Focus
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "SwiftUI",
                    "UIKit",
                    "MVVM",
                    "Core ML",
                    "Combine",
                    "Async/Await",
                    "Firebase",
                    "REST APIs",
                  ].map((item) => (
                    <span
                      key={item}
                      className="glass-chip rounded-full px-3 py-2 text-[10px] font-medium text-white/45"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.25,
            }}
            className="mt-10 flex flex-col justify-between gap-5 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center"
          >
            <p className="max-w-xl text-xs leading-6 text-white/25">
              From interface design to architecture, APIs,
              monetization, testing, and App Store deployment.
            </p>

            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/20">
              iOS Engineering
            </span>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}
      <section
        id="experience"
        className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        {/* Ambient lighting */}
        <div className="pointer-events-none absolute left-[-12%] top-[10%] h-[420px] w-[420px] rounded-full bg-blue-400/[0.045] blur-[130px]" />

        <div className="pointer-events-none absolute bottom-[5%] right-[-12%] h-[420px] w-[420px] rounded-full bg-teal-300/[0.035] blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <motion.div
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="max-w-3xl"
          >
            <span className="section-label">
              Experience
            </span>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl lg:text-6xl">
              Where I&apos;ve
              <br />
              <span className="text-gradient">
                built my experience.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-[15px]">
              A journey through professional iOS development,
              from building production applications to
              shipping polished experiences on the App Store.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative mt-16">
            {/* Vertical timeline */}
            <div className="absolute bottom-8 left-[19px] top-8 hidden w-px bg-gradient-to-b from-blue-400/40 via-white/[0.08] to-teal-300/20 sm:block" />

            <div className="space-y-5">
              {experiences.map((experience, index) => (
                <motion.article
                  key={experience.company}
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
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  className="relative sm:pl-12"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[11px] top-10 z-20 hidden sm:block">
                    <div
                      className={`relative flex h-[17px] w-[17px] items-center justify-center rounded-full border ${
                        experience.current
                          ? "border-teal-300/30 bg-teal-300/[0.06]"
                          : "border-white/[0.12] bg-[#070a0f]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          experience.current
                            ? "bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.9)]"
                            : "bg-white/30"
                        }`}
                      />

                      {experience.current && (
                        <span className="absolute inset-[-5px] animate-pulse rounded-full border border-teal-300/20" />
                      )}
                    </div>
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    whileHover={{
                      y: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 22,
                    }}
                    className="group relative overflow-hidden rounded-[30px] border border-white/[0.08] bg-white/[0.025] shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
                  >
                    {/* Hover Glow */}
                    <div
                      className={`pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full blur-[100px] transition-opacity duration-700 ${
                        experience.current
                          ? "opacity-[0.10] group-hover:opacity-[0.18]"
                          : "opacity-[0.04] group-hover:opacity-[0.10]"
                      }`}
                      style={{
                        backgroundColor: experience.current
                          ? "#2DD4BF"
                          : "#60A5FA",
                      }}
                    />

                    {/* Top Reflection */}
                    <div className="pointer-events-none absolute left-[8%] right-[8%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.14] to-transparent" />

                    {/* Current Badge */}
                    {experience.current && (
                      <div className="absolute right-6 top-6 flex items-center gap-2 rounded-full border border-emerald-300/[0.12] bg-emerald-300/[0.04] px-3 py-1.5 sm:right-8 sm:top-8">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.8)]" />

                        <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-emerald-300/65">
                          Current
                        </span>
                      </div>
                    )}

                    <div className="relative p-6 sm:p-8 lg:p-10">
                      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.35fr_0.55fr] lg:items-center">
                        {/* Company */}
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                            Company
                          </p>

                          <h3 className="mt-3 max-w-xs text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                            {experience.company}
                          </h3>

                          <div className="mt-3 flex items-center gap-2">
                            <span className="h-1 w-1 rounded-full bg-white/25" />

                            <p className="text-xs text-white/30">
                              {experience.location}
                            </p>
                          </div>
                        </div>

                        {/* Role + Technologies */}
                        <div>
                          <p className="text-sm font-medium text-white/65 sm:text-[15px]">
                            {experience.role}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {experience.technologies.map(
                              (technology) => (
                                <motion.span
                                  key={technology}
                                  whileHover={{
                                    y: -2,
                                  }}
                                  className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-[9px] font-medium text-white/35 transition-colors hover:border-white/[0.12] hover:bg-white/[0.055] hover:text-white/65"
                                >
                                  {technology}
                                </motion.span>
                              )
                            )}
                          </div>
                        </div>

                        {/* Period */}
                        <div className="lg:text-right">
                          <p className="text-xs font-medium text-white/50">
                            {experience.period}
                          </p>

                          <p
                            className={`mt-2 text-[9px] font-medium uppercase tracking-[0.18em] ${
                              experience.current
                                ? "text-emerald-300/55"
                                : "text-white/20"
                            }`}
                          >
                            {experience.duration}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Metadata */}
                      <div className="mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5">
                        <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/20">
                          iOS Engineering
                        </span>

                        <span className="text-[9px] font-medium text-white/15">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div
                      className={`absolute bottom-0 left-[10%] right-[10%] h-px transition-opacity duration-500 ${
                        experience.current
                          ? "opacity-50 group-hover:opacity-90"
                          : "opacity-20 group-hover:opacity-50"
                      }`}
                      style={{
                        background: `linear-gradient(
                          90deg,
                          transparent,
                          ${
                            experience.current
                              ? "#2DD4BF"
                              : "#60A5FA"
                          },
                          transparent
                        )`,
                      }}
                    />
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Experience Summary */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              ["3.6+", "Years Experience"],
              ["15+", "Apps Shipped"],
              ["3", "Companies"],
              ["SwiftUI", "Primary UI"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="group relative overflow-hidden rounded-[22px] border border-white/[0.07] bg-white/[0.025] px-5 py-5 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-400/[0.04] blur-2xl transition-opacity group-hover:opacity-100" />

                <p className="relative text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                  {value}
                </p>

                <p className="relative mt-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-white/25 sm:text-[9px]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}
      <section
        id="skills"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <span className="section-label">
              Skills
            </span>

            <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Tools I use to
              <br />
              build products.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{
                  opacity: 0,
                  y: 25,
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
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="glass-card rounded-[26px] p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35">
                    {group.title}
                  </p>

                  <span className="text-[10px] text-white/15">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-[10px] font-medium text-white/45 transition-colors hover:bg-white/[0.07] hover:text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}
      <section
        id="contact"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[36px] border border-white/[0.09] bg-white/[0.035] px-6 py-14 text-center shadow-[0_40px_120px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-12 sm:py-20">
            {/* Background glows */}
            <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-400/[0.09] blur-[100px]" />

            <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-teal-300/[0.05] blur-[90px]" />

            <div className="relative">
              <span className="section-label">
                Get In Touch
              </span>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
                Let&apos;s build something
                <br />
                <span className="text-gradient">
                  great together.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                Have an iOS product, idea, or opportunity?
                I&apos;d be happy to talk about it.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {contactItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={{
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.045] px-4 py-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl transition-colors hover:bg-white/[0.08]"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.045]">
                      <Image
                        src={item.icon}
                        alt={item.label}
                        width={16}
                        height={16}
                        className="opacity-55 transition-opacity group-hover:opacity-80"
                      />
                    </div>

                    <div>
                      <p className="text-[9px] font-medium uppercase tracking-[0.12em] text-white/25">
                        {item.label}
                      </p>

                      <p className="mt-0.5 text-[11px] font-medium text-white/55">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}
      <footer className="px-5 pb-8 pt-4 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-7 text-center sm:flex-row sm:text-left">
          <div>
            <p className="text-xs font-medium text-white/40">
              © {new Date().getFullYear()} Arshad Mustafa
            </p>

            <p className="mt-1 text-[10px] text-white/20">
              Senior iOS Engineer
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Arshad937"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium text-white/25 transition-colors hover:text-white/60"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/arshad-mustafa-03905225b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-medium text-white/25 transition-colors hover:text-white/60"
            >
              LinkedIn
            </a>

            <a
              href="#home"
              className="text-[10px] font-medium text-white/25 transition-colors hover:text-white/60"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
