import React from "react";

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const features: FeatureItem[] = [
    {
      title: "10-Year Guarantee",
      desc: "We back our systems with a comprehensive ten-year product warranty covering profiles and hardware durability. This ensures long-term protection against air-water leakage, structural warping, and material degradation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Custom Solutions",
      desc: "Every window, door, and curtain wall is fabricated to the exact configurations of your architectural drawings. Our drafting team tailors framing depths and profiles to accommodate complex corners and custom openings.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: "Competitive Pricing",
      desc: "By combining direct material sourcing with highly efficient, in-house fabrication, we bypass intermediary margins. This structural advantage allows us to deliver commercial-grade systems at highly accessible price points.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Expert Team",
      desc: "Our division is run by licensed structural engineers, technical draftsmen, and certified site installation managers. We supervise every stage of execution, from preliminary wind load analysis to final glazing sealant tests.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Why Weswin
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            The Weswin Advantage
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            We hold ourselves to strict manufacturing benchmarks and engineering criteria, guaranteeing your project stands firm against time, wear, and weather.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col items-start gap-4 rounded-2xl bg-white p-7 shadow-sm border border-zinc-200/50 hover:shadow-md transition-shadow group"
            >
              {/* Feature Icon Container */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                {feat.icon}
              </div>

              {/* Text Blocks */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-extrabold text-zinc-900 group-hover:text-teal-600 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
