import React from "react";
import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const productLinks = [
    { name: "Aluminum Systems", href: "/products/aluminum" },
    { name: "uPVC Systems", href: "/products/upvc" },
    { name: "Architectural Panels", href: "/products/panels" },
    { name: "Insect & Security Screens", href: "/products/screens" },
    { name: "Sunflex Folding Systems", href: "/products/sunflex" },
  ];

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-900">
      {/* Main Grid Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Column 1: Company Profile & Social Media */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-primary text-brand-dark">
                <svg
                  className="h-6 w-6 stroke-current fill-none stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M9 3v18" />
                  <path d="M15 3v18" />
                  <path d="M3 12h18" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  HNL Construction
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary -mt-1.5">
                  Architects | Engineers | Builders
                </span>
              </div>
            </Link>
            
            <p className="text-sm leading-relaxed text-zinc-400">
              Architects, Engineers, and Builders delivering exceptional construction projects with the highest level of professionalism, quality supplies, and craftsmanship. Serving clients across Metro Manila.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-2">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-primary hover:text-brand-dark"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md bg-zinc-900 text-zinc-400 transition-colors hover:bg-brand-primary hover:text-brand-dark"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="sm:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-primary hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="sm:col-span-4 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-brand-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact details */}
          <div className="sm:col-span-5 lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-zinc-400">
              
              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-brand-primary mt-0.5"
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
                <span>
                  Tower 1, 3607 The Olive Place, Shaw Blvd, Mandaluyong City
                </span>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a href="tel:+639989920849" className="transition-colors hover:text-white">
                  (+63) 998 992 0849
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <svg
                  className="h-5 w-5 shrink-0 text-brand-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:hnldesignandconstruction@gmail.com" className="transition-colors hover:text-white">
                  hnldesignandconstruction@gmail.com
                </a>
              </li>

            </ul>
          </div>
          
        </div>
      </div>

      {/* Sub-footer Section */}
      <div className="border-t border-zinc-900 bg-black/40 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} HNL Construction. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-zinc-400">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-400">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
