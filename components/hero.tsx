"use client";

import { ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <AnimateOnScroll animation="fade-up">
          <p className="text-primary font-mono text-sm mb-4">Hi, I'm</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4">
            Matt Headley
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build simple websites for local organizations.
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            I help small businesses, churches, and community groups get online
            with clear, easy-to-maintain websites that just work, working locally in Calhoun County and Jacksonville, Al, or remotely.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={500}>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:mpheadley@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ArrowDown size={20} className="text-primary animate-bounce" />
      </div>
    </section>
  );
}
