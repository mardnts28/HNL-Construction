import React from "react";
import Image from "next/image";

interface ValueItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface StatItem {
  number: string;
  label: string;
}

export default function AboutPage() {
  const values: ValueItem[] = [
    {
      title: "Quality First",
      desc: "We enforce strict QA controls on all profile extrusions, glass seals, and structural welds. This ensures our window and door systems deliver long-term protection under heavy weather loads.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Continuous Innovation",
      desc: "Our engineers research the latest European thermal-break technologies and modern double-glazing configurations, bringing state-of-the-art thermal and acoustic insulation solutions to our clients.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Customer Focus",
      desc: "We work in partnership with architects, developers, and site managers from design stages to final installation, custom-tailoring profile sizes to match exact design scopes and budgets.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
  ];

  const stats: StatItem[] = [
    { number: "25+ Years", label: "Industry Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Corporate Clients" },
    { number: "10-Year", label: "Product Guarantee" },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="About us background skyscraper facade"
            fill
            priority
            className="object-cover opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Learn Our Story
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            About HNL Construction
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
            Crafting the envelopes of modern landmarks and luxury properties since 2000.
          </p>
        </div>
      </section>

      {/* 2. Company Story Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Story Text Column */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
                Our Journey
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                A Legacy of Fabrication Excellence & Precision Engineering
              </h2>
              <div className="text-zinc-600 space-y-4 leading-relaxed">
                <p>
                  HNL Construction was established in 2000 with a clear objective: to fabricate and distribute architectural aluminum facade and glass partition systems that satisfy strict security, insulation, and wind-load constraints. Over the past two decades, we have expanded our capacity to deliver tailored building envelopes across the Philippines.
                </p>
                <p>
                  Operating from our specialized localized manufacturing facility, our teams supervise every stage of execution. We utilize high-grade raw alloys and partner with premium glass suppliers, ensuring that every casement, sliding bay, or storefront panel represents structural precision and longevity.
                </p>
                <p>
                  Today, we continue to collaborate closely with general contractors, structural architects, and private owners. From massive luxury villas in Makati to landmark corporate office structures in Cebu and Taguig, we bring light, security, and wind-resistant strength to contemporary designs.
                </p>
              </div>
            </div>

            {/* Story Photo Column */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-lg h-[450px] w-full bg-zinc-100">
                <Image
                  src="/images/office_photo.png"
                  alt="HNL Construction design engineering office workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Stats Section */}
      <section className="bg-brand-dark py-16 sm:py-24 text-white border-y border-brand-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-4xl font-extrabold tracking-tight text-brand-primary sm:text-5xl">
                  {stat.number}
                </span>
                <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Values Section */}
      <section className="bg-zinc-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
              Our Principles
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Core Values that Drive Us
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
              Every detail of our fabrication process is governed by three simple, uncompromising pillars.
            </p>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((val) => (
              <div
                key={val.title}
                className="flex flex-col items-center text-center gap-5 rounded-2xl bg-white p-8 shadow-sm border border-zinc-200/50 hover:shadow-md transition-shadow group"
              >
                {/* Icon Circle */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-colors">
                  {val.icon}
                </div>

                {/* Info block */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
