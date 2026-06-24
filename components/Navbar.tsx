"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface DropdownItem {
  name: string;
  href: string;
  desc: string;
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const productItems: DropdownItem[] = [
    { name: "Aluminum Systems", href: "/products/aluminum", desc: "Premium windows, casements, and sliding doors" },
    { name: "uPVC Systems", href: "/products/upvc", desc: "Energy-efficient and durable window profiles" },
    { name: "Architectural Panels", href: "/products/panels", desc: "Modern cladding and architectural facade panels" },
    { name: "Insect & Security Screens", href: "/products/screens", desc: "High-tensile mesh screens for security and insect protection" },
    { name: "Sunflex Folding Systems", href: "/products/sunflex", desc: "Sleek sliding-folding architectural glass doors" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur-md transition-all shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-dark text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
              {/* Construction-themed geometric frame SVG logo */}
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
              <span className="text-xl font-bold tracking-tight text-brand-dark">
                HNL Construction
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary -mt-1.5">
                Architects | Engineers | Builders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-primary py-2 cursor-pointer ${
                        pathname.startsWith(link.href)
                          ? "text-brand-primary font-semibold"
                          : "text-brand-dark/70"
                      }`}
                      aria-expanded={dropdownOpen}
                    >
                      {link.name}
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Products Dropdown Menu */}
                    {dropdownOpen && (
                      <div className="absolute left-1/2 z-10 w-80 -translate-x-1/2 pt-2 animate-fade-in">
                        <div className="rounded-xl border border-zinc-200/80 bg-white p-2 shadow-xl ring-1 ring-black/5">
                          <Link
                            href="/products"
                            className="block rounded-lg px-4 py-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:bg-brand-secondary/10 transition-colors"
                          >
                            All Products Overview
                          </Link>
                          <div className="my-1 border-t border-brand-secondary/20" />
                          {productItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block rounded-lg px-4 py-3 text-sm transition-colors hover:bg-brand-secondary/10 ${
                                pathname === item.href
                                  ? "bg-brand-secondary/20 text-brand-primary font-semibold"
                                  : "text-brand-dark"
                              }`}
                            >
                              <span className="block font-medium">{item.name}</span>
                              <span className="block text-xs text-zinc-500 line-clamp-1 mt-0.5">
                                {item.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                    isActive ? "text-brand-primary font-semibold" : "text-brand-dark/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="rounded-lg bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-brand-primary hover:shadow-md hover:shadow-brand-primary/10 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Open/Close Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-lg p-2.5 text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white px-4 py-6 shadow-inner animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="flex flex-col gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 px-3">
                      {link.name}
                    </span>
                    <Link
                      href="/products"
                      className={`block rounded-lg px-4 py-2 text-sm font-semibold text-brand-primary ${
                        pathname === "/products" ? "bg-brand-secondary/20" : ""
                      }`}
                    >
                      Overview (All Products)
                    </Link>
                    <div className="grid grid-cols-1 gap-1 pl-4">
                      {productItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`rounded-md py-2 px-3 text-sm transition-colors ${
                            pathname === item.href
                              ? "bg-brand-secondary/20 text-brand-primary font-semibold"
                              : "text-brand-dark/70 hover:bg-brand-secondary/10"
                          }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                    isActive ? "bg-brand-secondary/20 text-brand-primary font-semibold" : "text-brand-dark hover:bg-brand-secondary/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="mt-4 pt-4 border-t border-brand-secondary/20">
              <Link
                href="/contact"
                className="flex w-full justify-center rounded-lg bg-brand-dark py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-primary"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
