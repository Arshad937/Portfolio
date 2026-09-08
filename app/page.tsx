import Image from "next/image";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import FeaturedProject from "../Components/FeaturedProject";
import ProjectCard from "../Components/ProjectCard";
import { projects } from "../Data/projects";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

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
    value: "Chat with me on WhatsApp",
    href: "https://wa.me/923352428032",
    icon: "/other assets/whatsapp_icon.png",
  },
  {
    label: "LinkedIn",
    value: "View my LinkedIn profile",
    href: "https://linkedin.com/in/arshad-mustafa-03905225b",
    icon: "/other assets/linkedin_icon.png",
  },
  {
    label: "GitHub",
    value: "View my GitHub profile",
    href: "https://github.com/Arshad937",
    icon: "/other assets/github_icon.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      {/* Featured Work */}
      <section
        id="work"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
      >
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
            Selected Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            Apps I&apos;ve built
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/40 sm:text-base">
            A selection of iOS applications I&apos;ve designed, developed, and
            shipped to the App Store.
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* More Projects */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 sm:pb-32">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
            More Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            More projects
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>

          {/* About */}
          <section
            id="about"
            className="border-t border-white/[0.06] bg-[#0b0b0b]"
          >
            <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
              <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                {/* Heading */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
                    About Me
                  </p>

                  <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                    Turning ideas into
                    <span className="block text-white/35">
                      polished iOS products.
                    </span>
                  </h2>
                </div>

                {/* Content */}
                <div>
                  <p className="text-base leading-8 text-white/55 sm:text-lg">
                    I&apos;m Arshad Mustafa, a Senior iOS Engineer focused on building
                    polished, reliable, and scalable applications for iPhone and iPad.
                  </p>

                  <p className="mt-6 text-sm leading-8 text-white/40 sm:text-base">
                    Over the years, I&apos;ve worked across productivity, photo and
                    media tools, AI-powered experiences, utilities, navigation, and
                    creative applications. I enjoy taking an idea from an initial
                    concept all the way to a production-ready App Store release.
                  </p>

                  <p className="mt-6 text-sm leading-8 text-white/40 sm:text-base">
                    My development approach combines clean architecture, thoughtful
                    user experience, and modern Apple technologies. I primarily work
                    with Swift, SwiftUI, UIKit, Combine, async/await, and Apple&apos;s
                    native frameworks.
                  </p>

                  {/* Engineering highlights */}
                  <div className="mt-10 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/[0.12]">
                      <p className="text-sm font-medium text-white">
                        Product Mindset
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/35">
                        Focused on creating experiences that are useful, intuitive,
                        and ready for real users.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/[0.12]">
                      <p className="text-sm font-medium text-white">
                        Native iOS
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/35">
                        Building with Swift and Apple&apos;s native frameworks for
                        performant applications.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/[0.12]">
                      <p className="text-sm font-medium text-white">
                        Clean Architecture
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/35">
                        Structured codebases designed to remain maintainable as
                        products grow.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-white/[0.12]">
                      <p className="text-sm font-medium text-white">
                        App Store
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/35">
                        Experienced in taking applications through development,
                        testing, release, and continuous improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section
            id="experience"
            className="border-t border-white/[0.06] bg-[#0b0b0b]"
          >
            <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
              {/* Section Header */}
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
                  Experience
                </p>

                <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                  3.6+ years of building
                  <span className="block text-white/35">
                    native iOS applications.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-white/35 sm:text-base">
                  A journey through iOS development, from building production
                  applications to leading development as a Senior iOS Engineer.
                </p>
              </div>

              {/* Experience Timeline */}
              <div className="relative mt-16">
                {/* Timeline line */}
                <div className="absolute bottom-8 left-[7px] top-8 w-px bg-white/[0.08]" />

                <div className="space-y-10">
                  {/* ================= TOP EDGE ================= */}
                  <div className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-[#6366F1]/40 bg-[#0b0b0b]">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />
                    </div>

                    <div className="rounded-[2rem] border border-white/[0.09] bg-[#101010] p-7 transition-all duration-300 hover:border-white/[0.15] sm:p-9">
                      {/* Header */}
                      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-2xl font-semibold tracking-tight text-white">
                              Senior iOS Engineer
                            </h3>

                            <span className="rounded-full border border-[#6366F1]/20 bg-[#6366F1]/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[#8b8df5]">
                              Current
                            </span>
                          </div>

                          <p className="mt-2 text-sm font-medium text-white/50">
                            Top Edge Technologies
                          </p>

                          <p className="mt-1 text-xs text-white/25">
                            Multan, Pakistan
                          </p>
                        </div>

                        <div className="shrink-0 text-left sm:text-right">
                          <p className="text-sm font-medium text-white/55">
                            Jun 2025 — Present
                          </p>

                          <p className="mt-1 text-xs text-white/25">
                            Present
                          </p>
                        </div>
                      </div>

                      {/* Points */}
                      <div className="mt-8 space-y-4">
                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />

                          <p className="text-sm leading-7 text-white/40">
                            Developing and shipping native iOS applications using
                            Swift, SwiftUI, UIKit, and modern Apple frameworks.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />

                          <p className="text-sm leading-7 text-white/40">
                            Working across productivity, photo and media, AI-powered,
                            utility, and creative applications from development to
                            App Store release.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />

                          <p className="text-sm leading-7 text-white/40">
                            Implementing maintainable architectures and modern
                            concurrency patterns with MVVM, Clean Architecture,
                            Combine, async/await, and GCD.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/30" />

                          <p className="text-sm leading-7 text-white/40">
                            Integrating native Apple technologies including Core ML,
                            Vision, MapKit, Core Location, CallKit, AVKit, and Photos.
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                        {[
                          "Swift",
                          "SwiftUI",
                          "UIKit",
                          "MVVM",
                          "Clean Architecture",
                          "Combine",
                          "Async/Await",
                          "Core ML",
                        ].map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-white/35"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ================= ZOOBI ================= */}
                  <div className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/15 bg-[#0b0b0b]">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/35" />
                    </div>

                    <div className="rounded-[2rem] border border-white/[0.08] bg-[#101010] p-7 transition-all duration-300 hover:border-white/[0.14] sm:p-9">
                      {/* Header */}
                      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-white">
                            iOS Engineer
                          </h3>

                          <p className="mt-2 text-sm font-medium text-white/50">
                            Zoobi Apps &amp; Games Technologies
                          </p>

                          <p className="mt-1 text-xs text-white/25">
                            Islamabad, Pakistan
                          </p>
                        </div>

                        <div className="shrink-0 text-left sm:text-right">
                          <p className="text-sm font-medium text-white/55">
                            Mar 2024 — Jun 2025
                          </p>

                          <p className="mt-1 text-xs text-white/25">
                            1 year 3 months
                          </p>
                        </div>
                      </div>

                      {/* Points */}
                      <div className="mt-8 space-y-4">
                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Developed and maintained production iOS applications
                            using Swift, SwiftUI, and UIKit.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Implemented application features with a focus on
                            performance, usability, and maintainable code.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Worked with modern iOS development patterns including
                            MVVM, Combine, asynchronous programming, and native
                            frameworks.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Contributed to application releases and ongoing
                            improvements throughout the product lifecycle.
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                        {[
                          "Swift",
                          "SwiftUI",
                          "UIKit",
                          "MVVM",
                          "Combine",
                          "GCD",
                        ].map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-white/35"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ================= M TECH SOFT ================= */}
                  <div className="relative pl-10">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border border-white/15 bg-[#0b0b0b]">
                      <div className="h-1.5 w-1.5 rounded-full bg-white/25" />
                    </div>

                    <div className="rounded-[2rem] border border-white/[0.08] bg-[#101010] p-7 transition-all duration-300 hover:border-white/[0.14] sm:p-9">
                      {/* Header */}
                      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                        <div>
                          <h3 className="text-2xl font-semibold tracking-tight text-white">
                            iOS Engineer
                          </h3>

                          <p className="mt-2 text-sm font-medium text-white/50">
                            M Tech Soft
                          </p>

                          <p className="mt-1 text-xs text-white/25">
                            Lahore, Pakistan
                          </p>
                        </div>

                        <div className="shrink-0 text-left sm:text-right">
                          <p className="text-sm font-medium text-white/55">
                            Jan 2023 — Mar 2024
                          </p>

                          <p className="mt-1 text-xs text-white/25">
                            1 year 2 months
                          </p>
                        </div>
                      </div>

                      {/* Points */}
                      <div className="mt-8 space-y-4">
                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Built and maintained iOS applications using Swift and
                            UIKit, focusing on clean and reliable implementations.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Developed application features and user interfaces while
                            working with native iOS frameworks and APIs.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Worked with structured application architecture and
                            reusable components to support maintainable codebases.
                          </p>
                        </div>

                        <div className="flex gap-3">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/25" />

                          <p className="text-sm leading-7 text-white/40">
                            Gained hands-on experience taking iOS features from
                            development and testing through application releases.
                          </p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-6">
                        {[
                          "Swift",
                          "UIKit",
                          "iOS SDK",
                          "MVC",
                          "MVVM",
                        ].map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 text-xs text-white/35"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/[0.06] bg-[#0b0b0b]"
      >
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32">
          <div className="mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              Skills
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Tools & technologies
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Swift",
              "SwiftUI",
              "UIKit",
              "MVVM",
              "Clean Architecture",
              "Combine",
              "Async/Await",
              "GCD",
              "Core ML",
              "Vision",
              "MapKit",
              "Core Location",
              "CallKit",
              "AVKit",
              "Photos",
              "Xcode",
              "CocoaPods",
              "Git",
              "App Store",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm text-white/45"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-5 py-24 sm:px-6 sm:py-32"
      >
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/35">
              Contact
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something great.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/40 sm:text-base">
              Have an iOS project, an opportunity, or an idea you&apos;d like
              to discuss? Feel free to get in touch.
            </p>
          </div>

          <div className="space-y-3">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={
                  item.label === "LinkedIn" ||
                  item.label === "GitHub" ||
                  item.label === "WhatsApp"
                    ? "_blank"
                    : undefined
                }
                rel={
                  item.label === "LinkedIn" ||
                  item.label === "GitHub" ||
                  item.label === "WhatsApp"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-[#101010] p-5 transition-all duration-300 hover:border-white/[0.16] hover:bg-[#141414]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                  <Image
                    src={item.icon}
                    alt={`${item.label} icon`}
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">
                    {item.label}
                  </p>

                  <p className="mt-1 truncate text-sm text-white/35">
                    {item.value}
                  </p>
                </div>

                <span className="text-lg text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/60">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 Arshad Mustafa. All rights reserved.</p>

          <p>Senior iOS Engineer</p>
        </div>
      </footer>
    </main>
  );
}
