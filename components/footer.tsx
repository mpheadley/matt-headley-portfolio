"use client";


export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Contact */}
          <a
            href="mailto:mpheadley@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            mpheadley@gmail.com
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Designed & Built by Matt Headley
          </p>
        </div>
      </div>
    </footer>
  );
}
