import React from "react";

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Aluminum Windows",
      desc: "High-performance casement, sliding, and awning windows featuring slim architectural profiles and advanced thermal break technology to optimize natural daylight.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18" />
          <path d="M15 3v18" />
          <path d="M3 12h18" />
        </svg>
      ),
    },
    {
      title: "uPVC Doors",
      desc: "Premium multi-chamber polymer doors including sliding, swing, and French door styles, engineered for outstanding acoustic reduction and climate insulation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 4h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z" />
          <circle cx="15" cy="12" r="1" />
        </svg>
      ),
    },
    {
      title: "Glass Panels",
      desc: "Heavy-duty tempered and laminated safety glass installations for frameless railings, architectural skylights, shower enclosures, and internal partitions.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20L21 4H7L3 20h14z" />
          <path d="M9 11h6" />
        </svg>
      ),
    },
    {
      title: "Screens",
      desc: "High-tensile marine-grade 316 stainless steel security mesh and sliding insect screens engineered to guard against intrusion while maintaining natural ventilation.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
          <path d="M9 4v16M15 4v16M4 9h16M4 15h16" />
        </svg>
      ),
    },
    {
      title: "Sunflex Systems",
      desc: "Premium sliding-folding door systems that stack away effortlessly, offering wide architectural expanses and transitions between indoor and outdoor spaces.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          <path d="M7 6v12M12 6v12M17 6v12" />
        </svg>
      ),
    },
    {
      title: "Custom Fabrication",
      desc: "End-to-end specialized fabrication, shop drawings, and engineering calculations structured to withstand local wind pressures, seismic ratings, and design configurations.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Info */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
          <span className="text-sm font-bold uppercase tracking-wider text-teal-600">
            Professional Offerings
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            Our Architectural Services & Systems
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            We deliver state-of-the-art construction products custom-built in our local facility, satisfying strict insulation, structural integrity, and visual specifications.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col items-start gap-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 p-8 shadow-sm transition-all duration-300 hover:border-teal-500/20 hover:bg-white hover:shadow-md"
            >
              {/* Icon Container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title & Desc */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-teal-600">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Accent Hover Border */}
              <div className="absolute inset-x-0 bottom-0 h-1 w-0 rounded-b-2xl bg-teal-500 transition-all duration-300 group-hover:w-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
