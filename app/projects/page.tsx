"use client";

import React, { useState } from "react";
import Image from "next/image";

// Mock project data – using existing image assets
const projects = [
  {
    id: 1,
    name: "Condo Residency",
    location: "Cebu City",
    category: "Residential",
    description: "Luxury high‑rise residential condos with panoramic views.",
    image: "/images/project_condo.png",
  },
  {
    id: 2,
    name: "Office Tower",
    location: "Taguig",
    category: "Commercial",
    description: "Modern office building with energy‑efficient façade.",
    image: "/images/project_office.png",
  },
  {
    id: 3,
    name: "Villa Elegance",
    location: "Makati",
    category: "Residential",
    description: "Spacious villa with glass curtain walls.",
    image: "/images/project_villa.png",
  },
  {
    id: 4,
    name: "Industrial Plant",
    location: "Cebu",
    category: "Industrial",
    description: "Heavy‑duty industrial facility with robust structural design.",
    image: "/images/hero_bg.png",
  },
  {
    id: 5,
    name: "City Hospital",
    location: "Manila",
    category: "Hospital",
    description: "State‑of‑the‑art hospital with modular rooms.",
    image: "/images/hero_bg.png",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Hospital"]; // Order of filter buttons

export default function ProjectsPage() {
  const [selected, setSelected] = useState<string>("All");

  const filtered = selected === "All" ? projects : projects.filter((p) => p.category === selected);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white py-12">
      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus:outline-none 
              ${selected === cat ? "bg-teal-600 text-white" : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Project Cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 gap-2">
                <h3 className="text-lg font-bold text-zinc-900 group-hover:text-teal-600 transition-colors">
                  {proj.name}
                </h3>
                <p className="text-sm text-zinc-500">{proj.location}</p>
                <span className="inline-block self-start mt-1 rounded-full bg-teal-100 px-2 py-0.5 text-xs font-medium text-teal-800">
                  {proj.category}
                </span>
                <p className="mt-2 text-sm text-zinc-600">{proj.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
