"use client";

import {
  AnimateOnScroll,
  StaggerContainer,
} from "@/components/ui/animate-on-scroll";

const skills = [
  "Custom Websites & Mobile-Friendly Design",
  "E-Commerce Setup (Shopify, Stripe, Square, PayPal)",
  "Booking & Contact Forms",
  "Basic Online Workflows & Admin Tools (streamlining forms, booking systems, and other digital processes)",
  "Local SEO & Online Visibility",
  "Modern Web Features & Interactive Sites (built with React / Next.js)",
  "Visual Design with Canva",
  "Styling & Layout with HTML / CSS / Tailwind CSS",
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills & Tools
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>
        </AnimateOnScroll>

        {/* Skills List */}
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-2xl">
            <StaggerContainer
              className="space-y-4"
              staggerDelay={80}
              animation="fade-left"
            >
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-start gap-4 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-lg">{skill}</span>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
