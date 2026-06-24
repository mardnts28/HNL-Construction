import React from "react";

interface FeatureItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function WhyChooseUs() {
  const features: FeatureItem[] = [
    {
      title: "We Are Passionate",
      desc: "We guarantee that every project is carried out with the utmost professionalism and with high-quality supplies while providing clients with support and accessibility.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Honest and Dependable",
      desc: "We strive to complete all projects with integrity, not only with our clients but also with our suppliers and contractors. Honesty is our only policy.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "We Are Always Improving",
      desc: "We promise to complete all projects within the agreed-upon timeframe. We pay close attention to the smallest of details and make sure that everything is done correctly, all while making use of the most advanced technology and tools.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Grid */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
            Why HNL Construction
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            We are committed to delivering every project with passion, integrity, and continuous improvement—ensuring the best outcomes for our clients.
          </p>
        </div>

        {/* 4 Feature Columns Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="flex flex-col items-start gap-4 rounded-2xl bg-white p-7 shadow-sm border border-zinc-200/50 hover:shadow-md transition-shadow group"
            >
              {/* Feature Icon Container */}
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors">
                {feat.icon}
              </div>

              {/* Text Blocks */}
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-extrabold text-brand-dark group-hover:text-brand-primary transition-colors">
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
