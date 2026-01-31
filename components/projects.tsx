"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
  AnimateOnScroll,
  StaggerContainer,
} from "@/components/ui/animate-on-scroll";

const projects = [
  {
    title: "Chromatic Chaos Salon",
    description:
      "Bold, edgy website for a modern hair salon with dark industrial aesthetic, neon accents, scroll animations, interactive gallery, and booking modal. Fully responsive for mobile users.",
    desktopImage: "/images/project-salon.jpg",
    mobileImage: "/images/project-salon-mobile.jpg",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://v0-edgy-salon-website.vercel.app/",
  },
  {
    title: "Golden Hive Honey",
    description:
      "Clean, approachable e-commerce demo for local honey products. Highlights product listings, simple navigation, and responsive design for mobile shoppers.",
    desktopImage: "/images/project-honey.jpg",
    mobileImage: "/images/project-honey-mobile.jpg",
    tags: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://v0-honey-vendor-store.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <StaggerContainer
          className="grid gap-16"
          staggerDelay={150}
          animation="fade-up"
        >
          {projects.map((project) => (
            <article
              key={project.title}
              className="group"
            >
              {/* Screenshots - Desktop left, Mobile right */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-end mb-8">
                {/* Desktop Screenshot */}
                <div className="flex-1 relative group/desktop">
                  <div className="relative aspect-[1440/900] rounded-lg overflow-hidden bg-card border border-border shadow-lg transition-all duration-300 group-hover/desktop:shadow-primary/25 group-hover/desktop:shadow-2xl group-hover/desktop:-translate-y-2">
                    <Image
                      src={project.desktopImage}
                      alt={`${project.title} - Desktop view`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Mobile Screenshot in Phone Frame */}
                <div className="w-32 md:w-40 flex-shrink-0 self-center md:self-end">
                  <div className="relative bg-gray-900 rounded-[2rem] p-2 shadow-2xl">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-5 bg-gray-900 rounded-b-xl z-10" />
                    {/* Screen */}
                    <div className="relative aspect-[375/667] rounded-[1.5rem] overflow-hidden bg-card">
                      <Image
                        src={project.mobileImage}
                        alt={`${project.title} - Mobile view`}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="max-w-2xl">
                <div className="flex items-center gap-4 mb-3 flex-wrap">
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      View Live Site
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-3 font-mono text-sm text-muted-foreground">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary/50"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <AnimateOnScroll animation="fade-up" className="mt-16 text-center">
          <p className="text-muted-foreground">
            Want something like this for your organization?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Let's talk.
            </a>
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
