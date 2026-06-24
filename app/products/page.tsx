import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { productsQuery, SanityProduct } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface ProductItem {
  id: string;
  name: string;
  desc: string;
  image: string;
}

// Fallback products list for static pages
const fallbackProducts: ProductItem[] = [
  {
    id: "aluminum",
    name: "Aluminum Systems",
    desc: "Premium casement, awning, and sliding windows engineered with lightweight structural frames and advanced thermal break barriers.",
    image: "/images/hero_bg.png",
  },
  {
    id: "upvc",
    name: "uPVC Systems",
    desc: "High-insulation, multi-chambered window and door profiles formulated to resist harsh tropical sun, wind loads, and noise infiltration.",
    image: "/images/project_villa.png",
  },
  {
    id: "panels",
    name: "Architectural Panels",
    desc: "Modern aluminum composite cladding panels and customized structural panels engineered for premium commercial building facades.",
    image: "/images/project_office.png",
  },
  {
    id: "screens",
    name: "Insect & Security Screens",
    desc: "High-tensile marine-grade 316 stainless steel mesh screens integrated seamlessly into existing profiles to protect against intrusion.",
    image: "/images/office_photo.png",
  },
  {
    id: "sunflex",
    name: "Sunflex Folding Systems",
    desc: "Sleek sliding-folding architectural glass doors that stack together to create open, seamless transitions between indoor and outdoor living areas.",
    image: "/images/project_condo.png",
  },
];

export const revalidate = 60;

export default async function ProductsPage() {
  let sanityProducts: SanityProduct[] = [];
  try {
    sanityProducts = await client.fetch(productsQuery);
  } catch (error) {
    console.error("Failed to fetch products from Sanity:", error);
  }

  // Map Sanity products to the UI format
  const mappedSanityProducts = sanityProducts.map((prod) => ({
    id: prod.slug,
    name: prod.title,
    desc: prod.description,
    image: prod.mainImage?.asset?.url || (prod.mainImage ? urlFor(prod.mainImage).url() : "/images/hero_bg.png"),
  }));

  const displayProducts = mappedSanityProducts.length > 0 ? mappedSanityProducts : fallbackProducts;

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero Banner */}
      <section className="relative flex h-[35vh] min-h-[250px] items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Products overview background facade"
            fill
            priority
            className="object-cover opacity-35 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3 animate-fade-in">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
            Our Solutions
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Product Systems
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
            High-performance structural envelopes, glazing, and customized window systems.
          </p>
        </div>
      </section>

      {/* 2. Products List Grid Section */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Main Title Description */}
          <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
              System Families
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Architectural Product Portfolios
            </h2>
            <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
              We design and fabricate all profile families in-house, matching strict structural compliance criteria and wind velocity demands.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayProducts.map((prod) => (
              <div
                key={prod.id}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/60 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Product Image Frame */}
                <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                  <Image
                    src={prod.image}
                    alt={`${prod.name} layout rendering`}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Product Card Text and Button */}
                <div className="flex flex-col flex-1 p-6 justify-between gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      {prod.desc}
                    </p>
                  </div>
                  
                  {/* Learn More link */}
                  <div className="pt-2 border-t border-zinc-100">
                    <Link
                      href={`/products/${prod.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-brand-primary-hover group/link"
                    >
                      Learn More
                      <svg
                        className="h-4 w-4 transition-transform group-hover/link:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {displayProducts === fallbackProducts && (
            <div className="mt-8 text-center text-xs text-zinc-400">
              Showing fallback static products. Add your products to Sanity Studio to see them dynamically!
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
