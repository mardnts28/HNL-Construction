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

export default function AluminumProductDetail() {
  const specs: FeatureItem[] = [
    { title: "Thermal Break Technology", desc: "Prevents thermal bridges, reducing indoor heat transfer and lowering cooling energy consumption." },
    { title: "Insulated Glazing", desc: "Accommodates double-glazed low-E safety glass units to reject solar heat and block environmental noise." },
    { title: "Multi-Point Hardware", desc: "Heavy-duty security locks clamping at multiple points along the sash frame for optimal safety." },
    { title: "Corrosion Protection", desc: "Finished in marine-grade powder coating or premium anodizing to prevent rot or salt-spray decay." },
    { title: "Seismic & Wind certified", desc: "Engineered to withstand extreme tropical typhoons with wind velocity ratings up to 3.0 kPa." },
  ];

  const gallery: GalleryItem[] = [
    {
      image: "/images/project_office.png",
      caption: "Double-Glazed Storefront Facade",
      scope: "Commercial Office Park, Taguig",
    },
    {
      image: "/images/project_villa.png",
      caption: "Panoramic Slim-Frame Sliders",
      scope: "Luxury Residential Villa, Makati",
    },
    {
      image: "/images/hero_bg.png",
      caption: "Unitized Glass Curtain Walls",
      scope: "128 Nivel Hills Towers, Cebu",
    },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative flex h-[45vh] min-h-[350px] items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Aluminum window detail hero background"
            fill
            priority
            className="object-cover opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Product Systems
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Aluminum Systems
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
            Precision-engineered casement, awning, and sliding windows designed for maximum light entry and wind resistance.
          </p>
        </div>
      </section>

      {/* 2. Description & Specs Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            
            {/* Left: Text Description */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
                System Overview
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                Modern Visuals Combined with Structural Rigidity
              </h2>
              <div className="text-zinc-600 space-y-5 leading-relaxed text-base">
                <p>
                  Our aluminum systems are crafted from high-performance 6063-T5 structural alloys, providing the ideal strength-to-weight ratio needed for massive panoramic window expanses. Unlike traditional window profiles, our frames are designed with advanced internal thermal breaks, eliminating heat conduction and lowering building HVAC loading.
                </p>
                <p>
                  By featuring extremely slim profile sightlines, these systems maximize glass surface areas to flood interiors with natural light. Integrated with heavy-duty multi-point locking mechanisms and double-layer weatherstripping, our aluminum windows and doors ensure maximum protection against typhoons, moisture infiltration, and urban noise.
                </p>
                <p>
                  Available in diverse anodized options and polyester powder-coated finishes, our profiles fit commercial storefronts, hotel balconies, and modern residential villas alike.
                </p>
              </div>
            </div>

            {/* Right: Key Specifications list */}
            <div className="lg:col-span-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 p-8 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-200 pb-4 mb-6">
                Technical Specifications
              </h3>
              <ul className="space-y-6">
                {specs.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* Teal Checkmark SVG */}
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 mt-0.5">
                      <svg className="h-3 w-3 stroke-current fill-none stroke-[3]" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
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
          
          {/* Gallery Header */}
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
              Gallery
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Systems in Action
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
              Browse standard structural applications utilizing our customized aluminum framing profiles.
            </p>
          </div>

          {/* 3-Column Image Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {gallery.map((item, idx) => (
              <div
                key={idx}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={item.image}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-1 p-5">
                  <span className="text-sm font-bold text-zinc-900 group-hover:text-teal-600 transition-colors">
                    {item.caption}
                  </span>
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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Interested in our Aluminum Systems?
          </h2>
          <p className="max-w-2xl text-base text-zinc-300 leading-relaxed">
            Get in touch with our team of engineers and draftsmen today to consult on technical profiles, shop drawings, seismic certification, and custom price estimates.
          </p>
          <div className="mt-2">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-teal-600 px-8 text-base font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-900/30 active:scale-95"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
