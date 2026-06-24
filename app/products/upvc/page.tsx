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

export default function UpvcProductDetail() {
  const specs: FeatureItem[] = [
    { title: "Thermal Insulation", desc: "High-performance uPVC profiles provide excellent thermal resistance, reducing heating and cooling costs." },
    { title: "Weather Resistance", desc: "Fully sealed frames protect against rain, wind, and UV degradation, ensuring longevity." },
    { title: "Low Maintenance", desc: "Material does not require painting or polishing; simply clean with mild detergent." },
    { title: "Security Features", desc: "Multi-point locking systems and reinforced strike plates enhance security." },
    { title: "Acoustic Insulation", desc: "Designed to minimize external noise penetration for comfortable interiors." },
  ];

  const gallery: GalleryItem[] = [
    {
      image: "/images/project_office.png",
      caption: "Modern uPVC Window Installation",
      scope: "Commercial Office Building, Manila",
    },
    {
      image: "/images/project_villa.png",
      caption: "uPVC Sliding Doors",
      scope: "Luxury Villa, Taguig",
    },
    {
      image: "/images/hero_bg.png",
      caption: "Residential uPVC Facade",
      scope: "Apartment Complex, Cebu",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative flex h-[45vh] min-h-[350px] items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="uPVC product hero background"
            fill
            priority
            className="object-cover opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">Product Systems</span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">uPVC Systems</h1>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
            Durable, energy‑efficient uPVC windows and doors crafted for modern architecture.
          </p>
        </div>
      </section>

      {/* 2. Description & Specs Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            {/* Left: Text Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">System Overview</span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                Sustainable, Low‑Maintenance Window Solutions
              </h2>
              <div className="text-zinc-600 space-y-5 leading-relaxed text-base">
                <p>
                  Our uPVC systems combine advanced polymer blends with reinforced steel inserts, delivering robust structural integrity while maintaining a sleek, minimalist aesthetic. Ideal for both residential and commercial projects, they provide exceptional thermal performance and weather sealing.
                </p>
                <p>
                  The profiles are available in a range of colors and finishes, and can be customized to accommodate various glass types, including double‑glazed low‑E units for additional energy savings.
                </p>
              </div>
            </div>

            {/* Right: Key Specifications list */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-brand-secondary/30 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wide border-b border-brand-secondary/20 pb-4 mb-6">Technical Specifications</h3>
              <ul className="space-y-6">
                {specs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-primary mt-0.5">
                      <svg className="h-3 w-3 stroke-current fill-none stroke-[3]" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-bold text-brand-dark">{item.title}</span>
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
      <section className="bg-brand-bg py-20 sm:py-28 border-t border-brand-secondary/15">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">Gallery</span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Systems in Action</h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">Explore recent installations of our uPVC solutions across diverse projects.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {gallery.map((item, idx) => (
              <div key={idx} className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                  <Image src={item.image} alt={item.caption} fill className="object-cover transition-transform duration-500 ease-out group-hover:scale-110" />
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <span className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">{item.caption}</span>
                  <span className="text-xs text-zinc-500">{item.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom Contextual CTA Banner */}
      <section className="bg-brand-dark py-16 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent opacity-75 pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Interested in our uPVC Systems?</h2>
          <p className="max-w-2xl text-base text-zinc-300 leading-relaxed">
            Reach out to discuss custom designs, performance specifications, and pricing tailored to your project.
          </p>
          <div className="mt-2">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-8 text-base font-bold text-brand-dark transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
