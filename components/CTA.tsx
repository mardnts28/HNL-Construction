import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-brand-dark py-16 sm:py-24 text-white relative overflow-hidden border-t border-brand-secondary/10">
      {/* Brand primary glow overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent opacity-75 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center gap-6">
        
        {/* Bold Headline */}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
          Ready to Start Your Project?
        </h2>
        
        {/* Short Subtext */}
        <p className="max-w-2xl text-base text-zinc-300 leading-relaxed sm:text-lg">
          Consult with our team of structural engineers and custom fabricators today. We help you design, detail, and install premium glass, aluminum, and uPVC systems engineered to fit your exact specifications and wind-load needs.
        </p>

        {/* Contact Us button */}
        <div className="mt-4">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-8 text-base font-bold text-brand-dark transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
