import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center overflow-hidden bg-zinc-950 text-white">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero_bg.png"
          alt="Modern premium architectural glass skyscraper facade representing construction excellence"
          fill
          priority
          className="object-cover opacity-45 transition-transform duration-[10000ms] ease-out scale-105"
        />
        {/* Dark Overlays for ultimate text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-900/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 flex flex-col items-start gap-8 animate-fade-in">
        
        {/* Animated Badge Tagline */}
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-primary/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary border border-brand-primary/30">
          Leader in Architectural Fabrication
        </span>

        {/* Headlines */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl text-white">
            Building Excellence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
              Since 2000
            </span>
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300 md:text-xl mt-2">
            Providing bespoke glass, aluminum, and uPVC structural systems engineered to transform modern skylines, support commercial towers, and elevate luxury residences across the Philippines.
          </p>
        </div>

        {/* Action Button Links */}
        <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
          <Link
            href="/projects"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-brand-primary px-8 text-base font-bold text-brand-dark transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* Small Trust Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-12 mt-8 pt-8 border-t border-white/10 w-full max-w-xl text-zinc-400">
          <div>
            <span className="block text-2xl font-bold text-white">20+ Years</span>
            <span className="block text-xs uppercase tracking-wider mt-0.5">Industry Expertise</span>
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">100% Custom</span>
            <span className="block text-xs uppercase tracking-wider mt-0.5">Project Fabrication</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-2xl font-bold text-white">10-Yr Guarantee</span>
            <span className="block text-xs uppercase tracking-wider mt-0.5">Weather & Wind Loads</span>
          </div>
        </div>

      </div>
    </section>
  );
}
