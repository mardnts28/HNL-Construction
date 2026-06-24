"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { SanityProject } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

/**
 * SmartImage — uses CldImage for Cloudinary public IDs,
 * falls back to next/image for full https:// URLs (e.g. from Sanity CDN).
 */
function SmartImage({
  src,
  alt,
  fill,
  className,
  priority,
}: {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const isExternalUrl = src.startsWith("http");
  if (isExternalUrl) {
    return (
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={className}
        priority={priority}
      />
    );
  }
  // Cloudinary public ID path (e.g. "hnl/hero_bg" or "hnl/project_condo")
  return (
    <CldImage
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      priority={priority}
    />
  );
}

// Mock fallback project data
// ⚡ imageUrl uses Cloudinary public IDs (folder/filename without extension)
// Upload your images to Cloudinary and set the public ID here.
const fallbackProjects = [
  {
    _id: "mock-1",
    title: "Condo Residency",
    location: "Cebu City",
    category: "residential" as const,
    description: "Luxury high-rise residential condos with panoramic views.",
    imageUrl: "hnl/project_condo",
  },
  {
    _id: "mock-2",
    title: "Office Tower",
    location: "Taguig",
    category: "commercial" as const,
    description: "Modern office building with energy-efficient façade.",
    imageUrl: "hnl/project_office",
  },
  {
    _id: "mock-3",
    title: "Villa Elegance",
    location: "Makati",
    category: "residential" as const,
    description: "Spacious villa with glass curtain walls.",
    imageUrl: "hnl/project_villa",
  },
  {
    _id: "mock-4",
    title: "Industrial Plant",
    location: "Cebu",
    category: "industrial" as const,
    description: "Heavy-duty industrial facility with robust structural design.",
    imageUrl: "hnl/hero_bg",
  },
  {
    _id: "mock-5",
    title: "City Hospital",
    location: "Manila",
    category: "hospital" as const,
    description: "State-of-the-art hospital with modular rooms.",
    imageUrl: "hnl/hero_bg",
  },
];

const categories = [
  { title: "All", value: "All" },
  { title: "Residential", value: "residential" },
  { title: "Commercial", value: "commercial" },
  { title: "Industrial", value: "industrial" },
  { title: "Hospital", value: "hospital" },
];

interface ProjectsClientProps {
  initialProjects: SanityProject[];
}

export default function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const [selected, setSelected] = useState<string>("All");

  // Normalize Sanity projects with correct image URL
  const sanityProjectsMapped = (initialProjects || []).map((proj) => ({
    _id: proj._id,
    title: proj.title,
    location: proj.location,
    category: proj.category,
    description: proj.description,
    imageUrl: proj.mainImage?.asset?.url || (proj.mainImage ? urlFor(proj.mainImage).url() : "/images/hero_bg.png"),
  }));

  // Use sanity projects if available, otherwise use mock fallbacks
  const displayProjects = sanityProjectsMapped.length > 0 ? sanityProjectsMapped : fallbackProjects;

  const filtered = selected === "All"
    ? displayProjects
    : displayProjects.filter((p) => p.category === selected);

  return (
    <div className="flex flex-col w-full min-h-screen bg-brand-bg">
      {/* 1. Page Hero Banner */}
      <section className="relative flex h-[35vh] min-h-[250px] items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          {/* CldImage — src is your Cloudinary public ID */}
          <CldImage
            src="hnl/hero_bg"
            alt="Projects overview background facade"
            fill
            priority
            className="object-cover opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Our Portfolio
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Completed Projects
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
            Browse our landmark commercial developments and bespoke residential fabrications.
          </p>
        </div>
      </section>

      {/* 2. Filter & Projects Grid Section */}
      <section className="py-16 sm:py-20">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelected(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all focus:outline-none cursor-pointer
                ${selected === cat.value
                  ? "bg-brand-primary text-brand-dark shadow-sm"
                  : "bg-white border border-brand-secondary/30 text-brand-dark hover:bg-brand-secondary/10"}`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Grid of Project Cards */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((proj) => (
              <div
                key={proj._id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                  {/* SmartImage picks CldImage for Cloudinary IDs, next/image for Sanity URLs */}
                  <SmartImage
                    src={proj.imageUrl}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-medium">{proj.location}</p>
                  </div>
                  <div>
                    <span className="inline-block rounded-md bg-brand-secondary/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-brand-primary border border-brand-secondary/30">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed mt-1">{proj.description}</p>
                </div>
              </div>
            ))}
          </div>

          {displayProjects === fallbackProjects && (
            <div className="mt-8 text-center text-xs text-zinc-400">
              Showing fallback static projects. Add your projects to Sanity Studio to see them dynamically!
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
