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
    icon: "/other assets/email_icon.png",
  },
  {
    label: "Phone",
    value: "+92 335 2428032",
    href: "tel:+923352428032",
    icon: "/other assets/phone_icon.png",
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />

      <Hero />

      {/* ═══════════════════════════════════════
          FEATURED WORK
      ═══════════════════════════════════════ */}

      <section
        id="work"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section heading */}
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
                I've built.
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

          {/* Featured projects */}
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

      {/* ═══════════════════════════════════════
          MORE PROJECTS
      ═══════════════════════════════════════ */}

      <section
        id="projects"
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
            className="mb-12 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end"
          >
            <div>
              <span className="section-label">
                More Projects
              </span>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
                More things
                <br />
                I've shipped.
              </h2>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.035] text-sm text-white/25">
              {String(moreProjects.length).padStart(2, "0")}
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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

      {/* ═══════════════════════════════════════
          ABOUT
      ═══════════════════════════════════════ */}

      <section
        id="about"
        className="relative px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Intro */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.035] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.2)] backdrop-blur-2xl sm:p-10"
            >
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-400/[0.07] blur-[70px]" />

              <span className="section-label">
                About Me
              </span>

              <h2 className="relative mt-5 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                Building iOS
                <br />
                experiences that
                <br />
                feel native.
              </h2>

              <p className="relative mt-6 text-sm leading-7 text-white/38">
                I specialize in building modern iOS applications
                using Swift, SwiftUI, and UIKit. My focus is on
                clean architecture, polished interfaces,
                reliable performance, and products that feel
                natural to use.
              </p>

              <p className="relative mt-4 text-sm leading-7 text-white/38">
                From Figma designs to App Store deployment,
                I work across the complete iOS development
                lifecycle.
              </p>

              <div className="relative mt-8 flex flex-wrap gap-2">
                {[
                  "Swift",
                  "SwiftUI",
                  "UIKit",
                  "MVVM",
                  "Core ML",
                  "Firebase",
                ].map((item) => (
                  <span
                    key={item}
                    className="glass-chip rounded-full px-3 py-1.5 text-[10px] font-medium text-white/45"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] p-7 sm:p-10"
            >
              <div className="absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full bg-teal-300/[0.05] blur-[80px]" />

              <div className="relative grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                    What I care about
                  </p>

                  <div className="mt-5 space-y-5">
                    {[
                      [
                        "01",
                        "Clean Architecture",
                        "Maintainable code that can grow with the product.",
                      ],
                      [
                        "02",
                        "Native UX",
                        "Interfaces that feel at home on Apple platforms.",
                      ],
                      [
                        "03",
                        "Performance",
                        "Fast, responsive experiences with attention to detail.",
                      ],
                    ].map(([number, title, description]) => (
                      <div
                        key={number}
                        className="border-b border-white/[0.06] pb-5 last:border-0"
                      >
                        <div className="flex gap-3">
                          <span className="text-[9px] font-semibold text-white/20">
                            {number}
                          </span>

                          <div>
                            <p className="text-sm font-semibold text-white/75">
                              {title}
                            </p>

                            <p className="mt-1 text-xs leading-5 text-white/30">
                              {description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                    Development
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      "Figma → SwiftUI",
                      "REST API Integration",
                      "Firebase",
                      "Core ML",
                      "App Extensions",
                      "StoreKit & IAP",
                      "AdMob & Mediation",
                      "App Store Deployment",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-xs text-white/40"
                      >
                        <span className="h-1 w-1 rounded-full bg-teal-200/50" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE
      ═══════════════════════════════════════ */}

      <section
        id="experience"
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
              Experience
            </span>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Where I've
              <br />
              worked.
            </h2>
          </motion.div>

          <div className="mt-12 overflow-hidden rounded-[32px] border border-white/[0.08] bg-white/[0.025] backdrop-blur-2xl">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{
                  opacity: 0,
                  y: 20,
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
                  delay: index * 0.08,
                }}
                className={`relative grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.7fr_1fr_0.75fr] lg:items-center lg:px-10 ${
                  index !== experiences.length - 1
                    ? "border-b border-white/[0.06]"
                    : ""
                }`}
              >
                {/* Timeline line */}
                {experience.current && (
                  <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-teal-300/60 via-teal-300/20 to-transparent" />
                )}

                {/* Company */}
                <div>
                  <div className="flex items-center gap-2">
                    {experience.current && (
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                    )}

                    <p className="text-[15px] font-semibold tracking-[-0.02em] text-white/85">
                      {experience.company}
                    </p>
                  </div>

                  <p className="mt-2 text-xs text-white/30">
                    {experience.location}
                  </p>
                </div>

                {/* Role */}
                <div>
                  <p className="text-sm font-medium text-white/60">
                    {experience.role}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {experience.technologies
                      .slice(0, 5)
                      .map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/[0.06] bg-white/[0.025] px-2.5 py-1 text-[9px] text-white/30"
                        >
                          {technology}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Date */}
                <div className="lg:text-right">
                  <p className="text-xs font-medium text-white/45">
                    {experience.period}
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/20">
                    {experience.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════ */}

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

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}

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
                Let's build something
                <br />
                <span className="text-gradient">
                  great together.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                Have an iOS product, idea, or opportunity?
                I'd be happy to talk about it.
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

      {/* ═══════════════════════════════════════
          FOOTER
      ═══════════════════════════════════════ */}

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
