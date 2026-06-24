import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { productBySlugQuery, SanityProduct } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

// Static details fallbacks for backward compatibility
import AluminumProductDetail from "../aluminum/page";
import UpvcProductDetail from "../upvc/page";
import PanelsProductDetail from "../panels/page";
import ScreensProductDetail from "../screens/page";
import SunflexProductDetail from "../sunflex/page";

// Revalidate Cache every 60 seconds (ISR)
export const revalidate = 60;

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  let product: SanityProduct | null = null;
  try {
    product = await client.fetch(productBySlugQuery, { slug });
  } catch (error) {
    console.error("Failed to fetch product from Sanity:", error);
  }

  // 1. If dynamic product exists in Sanity CMS, render it dynamically
  if (product) {
    const mainImageUrl = product.mainImage?.asset?.url || (product.mainImage ? urlFor(product.mainImage).url() : "/images/hero_bg.png");
    
    return (
      <div className="flex flex-col w-full min-h-screen">
        {/* Page Hero Banner */}
        <section className="relative flex h-[45vh] min-h-[350px] items-center justify-center overflow-hidden bg-brand-dark text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src={mainImageUrl}
              alt={product.mainImage?.alt || product.title}
              fill
              priority
              className="object-cover opacity-35 select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary">
              Product Systems
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
              {product.title}
            </h1>
            <p className="max-w-2xl text-base sm:text-lg text-zinc-300 leading-relaxed mx-auto">
              {product.description}
            </p>
          </div>
        </section>

        {/* Description & Technical Specs Section */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
              
              {/* Left: Detailed Overview Description */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
                  System Overview
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                  Modern Visuals Combined with Structural Rigidity
                </h2>
                <div className="text-zinc-600 space-y-5 leading-relaxed text-base">
                  {product.fullOverview && product.fullOverview.length > 0 ? (
                    product.fullOverview.map((block: any, idx: number) => {
                      if (block._type === 'block') {
                        const text = block.children?.map((c: any) => c.text).join('') || '';
                        return <p key={idx}>{text}</p>;
                      }
                      return null;
                    })
                  ) : (
                    <p>{product.description}</p>
                  )}
                </div>
              </div>

              {/* Right: Technical Features box */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-brand-secondary/30 p-8 shadow-sm">
                <h3 className="text-lg font-bold text-brand-dark uppercase tracking-wide border-b border-brand-secondary/20 pb-4 mb-6">
                  Technical Specifications
                </h3>
                <ul className="space-y-6">
                  {product.features?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-secondary/20 text-brand-primary mt-0.5">
                        <svg className="h-3 w-3 stroke-current fill-none stroke-[3]" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold text-brand-dark">{item.title}</span>
                        <span className="text-xs text-zinc-500 leading-relaxed">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Gallery Section */}
        {product.gallery && product.gallery.length > 0 && (
          <section className="bg-brand-bg py-20 sm:py-28 border-t border-brand-secondary/15">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              
              <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
                <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
                  Gallery
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
                  Systems in Action
                </h2>
                <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
                  Browse standard structural applications utilizing our customized {product.title.toLowerCase()} profiles.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {product.gallery.map((item, idx) => {
                  const galleryImageUrl = item.asset?.url || (item ? urlFor(item).url() : "/images/hero_bg.png");
                  return (
                    <div
                      key={idx}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-60 w-full overflow-hidden bg-zinc-100">
                        <Image
                          src={galleryImageUrl}
                          alt={item.alt || item.caption || "System installation example"}
                          fill
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />
                      </div>
                      {(item.caption || item.scope) && (
                        <div className="flex flex-col gap-1 p-5">
                          {item.caption && (
                            <span className="text-sm font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                              {item.caption}
                            </span>
                          )}
                          {item.scope && <span className="text-xs text-zinc-500">{item.scope}</span>}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        )}

        {/* Bottom CTA Banner */}
        <section className="bg-brand-dark py-16 sm:py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent opacity-75 pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8 flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Interested in our {product.title}?
            </h2>
            <p className="max-w-2xl text-base text-zinc-300 leading-relaxed">
              Get in touch with our team of engineers and draftsmen today to consult on technical profiles, shop drawings, seismic certification, and custom price estimates.
            </p>
            <div className="mt-2">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-primary px-8 text-base font-bold text-brand-dark transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 active:scale-95"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // 2. Fallback switch-case statement for static file rendering (maintaining compatibility before content is input in CMS)
  switch (slug) {
    case "aluminum":
      return <AluminumProductDetail />;
    case "upvc":
      return <UpvcProductDetail />;
    case "panels":
      return <PanelsProductDetail />;
    case "screens":
      return <ScreensProductDetail />;
    case "sunflex":
      return <SunflexProductDetail />;
    default:
      notFound();
      return null;
  }
}
