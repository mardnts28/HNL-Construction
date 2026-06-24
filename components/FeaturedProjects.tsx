import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItem {
  name: string;
  location: string;
  category: "Residential" | "Commercial";
  image: string;
}

export default function FeaturedProjects() {
  const projects: ProjectItem[] = [
    {
      name: "128 Nivel Hills Towers",
      location: "Cebu City, Philippines",
      category: "Commercial",
      image: "/images/project_condo.png",
    },
    {
      name: "Luxury Forbes Villa",
      location: "Makati City, Philippines",
      category: "Residential",
      image: "/images/project_villa.png",
    },
    {
      name: "Innovation Corporate Center",
      location: "BGC, Taguig City, Philippines",
      category: "Commercial",
      image: "/images/project_office.png",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
            Our Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            Explore our curated portfolio of landmark corporate developments and luxury private residences constructed with our engineered architectural products.
          </p>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={proj.image}
                  alt={`${proj.name} structural engineering case`}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                
                {/* Category Badge overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider shadow-sm ${
                    proj.category === "Residential"
                      ? "bg-brand-secondary/20 text-brand-primary border border-brand-secondary/30"
                      : "bg-brand-dark text-white"
                  }`}>
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Text Information */}
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                  {proj.name}
                </h3>
                
                {/* Location indicator */}
                <div className="flex items-center gap-1.5 text-sm text-zinc-500">
                  <svg
                    className="h-4 w-4 shrink-0 text-brand-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{proj.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-dark px-8 text-base font-semibold text-white transition-all hover:bg-brand-primary hover:text-brand-dark hover:shadow-lg hover:shadow-brand-primary/10 active:scale-95"
          >
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
