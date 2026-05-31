import React from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureItem {
  title: string;
  desc: string;
}

interface GalleryItem {
  image: string;
  caption: string;
  scope: string;
}

export default function PanelsProductDetail() {
  const specs: FeatureItem[] = [
    { title: "Composite Panels", desc: "Lightweight aluminum composite panels with excellent fire rating and durability." },
    { title: "Custom Finishes", desc: "Available in a variety of colors, textures, and laminates to match architectural aesthetics." },
    { title: "Structural Strength", desc: "Engineered to meet high wind load requirements and seismic standards." },
    { title: "Thermal Performance", desc: "Integrated insulation cores reduce heat transfer for energy efficiency." },
    { title: "Fast Installation", desc: "Modular design allows rapid on‑site assembly with minimal waste." },
  ];

  const gallery: GalleryItem[] = [
    {
      image: "/images/project_office.png",
      caption: "Commercial Facade Panels",
      scope: "Office Tower, Makati",
    },
    {
      image: "/images/project_villa.png",
      caption: "Residential Panel Cladding",
      scope: "Luxury Villa, Taguig",
    },
    {
      image: "/images/hero_bg.png",
      caption: "High‑Rise Panel System",
      scope: "Condo Complex, Cebu",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative flex h-[45vh] min-h-[350px] items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Panels product hero background"
            fill
            priority
            className="object-cover opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">Product Systems</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">Architectural Panels</h1>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
            Premium composite panels delivering sleek aesthetics and robust performance.
          </p>
        </div>
      </section>

      {/* 2. Description & Specs Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: Text Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-wider text-teal-600">System Overview</span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Versatile Facade Solutions for Modern Architecture
              </h2>
              <div className="text-zinc-600 space-y-5 leading-relaxed text-base">
                <p>
                  Our architectural panels combine high‑quality aluminum cores with customizable outer laminates, offering a balance of durability, lightweight construction, and aesthetic flexibility. Ideal for large‑scale commercial façades and premium residential projects.
                </p>
                <p>
                  Engineered to meet strict fire resistance, impact, and environmental standards, they provide a long‑lasting solution that enhances building performance and visual impact.
                </p>
              </div>
            </div>

            {/* Right: Key Specifications list */}
            <div className="lg:col-span-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-200 pb-4 mb-6">Technical Specifications</h3>
              <ul className="space-y-6">
                {specs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 mt-0.5">
                      <svg className="h-3 w-3 stroke-current fill-none stroke-[3]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-zinc-900">{item.title}</span>
                      <span className="text-xs text-zinc-500 leading-relaxed">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Image Gallery Grid */}
      <section className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-600">Gallery</span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Systems in Action</h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">Explore recent installations of our architectural panels across diverse projects.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {gallery.map((item, idx) => (
              <div key={idx} className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                  <Image src={item.image} alt={item.caption} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <span className="text-sm font-bold text-zinc-900 group-hover:text-teal-600 transition-colors">{item.caption}</span>
                  <span className="text-xs text-zinc-500">{item.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Contextual CTA Banner */}
      <section className="bg-zinc-900 py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-950/40 via-transparent to-transparent opacity-75 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Interested in our Architectural Panels?</h2>
          <p className="max-w-2xl text-base text-zinc-300 leading-relaxed">
            Contact us to discuss custom designs, performance specs, and project‑specific solutions.
          </p>
          <div className="mt-2">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-600 px-8 text-base font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-900/30 active:scale-95">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
