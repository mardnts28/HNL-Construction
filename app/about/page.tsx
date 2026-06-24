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
      title: "Vision",
      desc: "To become the leading construction firm, while delivering projects that consistently meet the standards and provide exceptional customer satisfaction.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Mission",
      desc: "To become the customers' most preferred choice by attaining excellence in quality and timely completed value added projects. To provide the highest level of service in the construction industry while offering superior craftsmanship to every project we handle.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      ),
    },
    {
      title: "Our Values",
      desc: "We are passionate, honest, and always improving. We guarantee every project is carried out with professionalism, high-quality supplies, and unwavering integrity toward clients, suppliers, and contractors.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  const stats: StatItem[] = [
    { number: "Architects", label: "Licensed Architects" },
    { number: "Engineers", label: "Expert Engineers" },
    { number: "Builders", label: "Skilled Builders" },
    { number: "100%", label: "Client Satisfaction" },
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
            Architects, Engineers, and Builders — delivering projects that consistently meet standards and provide exceptional customer satisfaction.
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
                  HNL Design and Construction is a full-service construction firm composed of licensed Architects, Engineers, and Builders. We are committed to delivering projects that consistently meet the highest standards and provide exceptional customer satisfaction.
                </p>
                <p>
                  Our mission is to become the customers' most preferred choice by attaining excellence in quality and timely completed value-added projects. We provide the highest level of service in the construction industry while offering superior craftsmanship to every project we handle.
                </p>
                <p>
                  From residential developments to commercial structures, our team approaches every project with passion, integrity, and a relentless drive to improve. We maintain transparency with our clients, suppliers, and contractors — because honesty is our only policy.
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

      {/* 3. Leadership Section */}
      <section className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
              The Person Behind It
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Our Leadership
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
              Led by a licensed civil engineer with over a decade of hands-on experience across design, construction, and project management.
            </p>
          </div>

          {/* Leadership Card */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">

            {/* Photo Placeholder Column */}
            <div className="lg:col-span-4 flex flex-col items-center gap-4">
              {/* Photo placeholder – to be replaced with actual photo */}
              <div className="relative w-full max-w-xs mx-auto aspect-[3/4] rounded-2xl border-2 border-dashed border-brand-secondary/40 bg-zinc-100 flex flex-col items-center justify-center gap-3 shadow-sm">
                <svg className="h-12 w-12 text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Photo to follow</span>
              </div>
              {/* Name & Title under photo */}
              <div className="text-center">
                <p className="text-lg font-bold text-brand-dark">Engr. Harry Neil A. Latina, CE</p>
                <p className="text-sm font-medium text-brand-primary">Principal Engineer &amp; Founder</p>
                <p className="text-xs text-zinc-400 mt-1">Licensed Civil Engineer</p>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">

              {/* Professional Background */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold text-brand-dark border-b border-brand-secondary/20 pb-3">
                  Professional Background
                </h3>
                <div className="text-zinc-600 space-y-4 leading-relaxed text-sm sm:text-base">
                  <p>
                    Engr. Harry Neil A. Latina, CE is a licensed Civil Engineer with over 11 years of combined experience in structural engineering, construction management, project estimation, and engineering education.
                  </p>
                  <p>
                    He has 5 years of experience as a Structural Engineer in a private consulting firm and 6 years of experience as a contractor, successfully delivering residential, commercial, office fit-out, renovation, and infrastructure projects. He also gained international exposure by living and working in Australia for one year as a Construction Estimator, specializing in cost estimation, quantity take-offs, and tender preparation.
                  </p>
                  <p>
                    Engr. Latina holds both the Construction Occupational Safety and Health (COSH) Certificate and the Australian White Card, demonstrating his commitment to maintaining the highest standards of safety and quality in every project.
                  </p>
                  <p>
                    In addition to his industry experience, he has been a faculty member at the Technological Institute of the Philippines (TIP) and National University Philippines (NU) for over 11 years, sharing practical engineering and construction knowledge with future professionals.
                  </p>
                  <p>
                    His diverse experience in design, estimation, construction, and project management enables him to provide reliable, cost-effective, and high-quality solutions tailored to each client's needs.
                  </p>
                </div>
              </div>

              {/* Education & Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Education */}
                <div className="rounded-xl bg-white border border-zinc-200/60 p-6 shadow-sm flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider">Education</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex flex-col">
                      <span className="font-semibold text-brand-dark">BS Civil Engineering</span>
                      <span className="text-zinc-400">Technological Institute of the Philippines, Manila</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-semibold text-brand-dark">Master of Engineering in Civil Engineering</span>
                      <span className="text-zinc-400">Technological Institute of the Philippines, QC</span>
                    </li>
                  </ul>
                </div>

                {/* Certifications */}
                <div className="rounded-xl bg-white border border-zinc-200/60 p-6 shadow-sm flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-brand-primary">
                    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider">Certifications</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      Construction Occupational Safety &amp; Health (COSH) Certificate
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      Australian White Card
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      Licensed Civil Engineer (Philippines)
                    </li>
                  </ul>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
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
              Vision &amp; Mission
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
              Guided by a clear vision and a strong mission, HNL Construction is built on principles that put clients first.
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
