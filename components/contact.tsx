"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-card/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll animation="fade-up">
          <p className="text-primary font-mono text-sm mb-4">Let's talk</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200}>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            If you need a clear, low-stress website for your business or
            organization, reach out. I'm happy to talk through what you need
            and see if I can help.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={20} className="text-primary" />
              <span>mpheadley@gmail.com</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Jacksonville, AL</span>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={400}>
          <Button size="lg" asChild>
            <a href="mailto:mpheadley@gmail.com">
              <Send size={18} />
              Say Hello
            </a>
          </Button>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
