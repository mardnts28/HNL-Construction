"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string | null }>({
    type: null,
    message: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: null });

    // 1. Client-Side Validation
    if (formData.name.trim().length < 2) {
      setStatus({ type: "error", message: "Name must be at least 2 characters long." });
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      setLoading(false);
      return;
    }

    if (!formData.projectType) {
      setStatus({ type: "error", message: "Please select a project type." });
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus({ type: "error", message: "Message must be at least 10 characters long." });
      setLoading(false);
      return;
    }

    try {
      // 2. Fetch API Route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit message.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your inquiry has been sent successfully. Our engineers will get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch (err: any) {
      console.error("Error submitting contact form:", err);
      setStatus({
        type: "error",
        message: err.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Contact page hero background"
            fill
            priority
            className="object-cover opacity-30 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-300 mx-auto">
            We’d love to hear about your next construction project. Reach out and we’ll get back to you promptly.
          </p>
        </div>
      </section>

      {/* 2. Contact Details + Form Grid */}
      <section className="bg-brand-bg py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-stretch">

            {/* Left – Details Card */}
            <div className="border border-brand-secondary/30 rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[550px] w-full">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-brand-dark border-b border-brand-secondary/30 pb-4">
                  Contact Details
                </h2>
                <div className="space-y-6 mt-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-brand-dark">Address</span>
                       <span className="text-sm text-zinc-500 leading-relaxed">
                         Tower 1, 3607 The Olive Place, Shaw Blvd, Mandaluyong City
                       </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-brand-dark">Phone</span>
                      <a href="tel:+639989920849" className="text-sm text-zinc-500 hover:text-brand-primary transition-colors">
                        (+63) 998 992 0849
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-brand-dark">Email</span>
                      <a href="mailto:hnldesignandconstruction@gmail.com" className="text-sm text-zinc-500 hover:text-brand-primary transition-colors">
                        hnldesignandconstruction@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-secondary/20 text-brand-primary">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-bold text-brand-dark">Business Hours</span>
                      <span className="text-sm text-zinc-500">
                        Monday – Saturday, 8:00 am – 5:00 pm
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-secondary/20 text-xs text-zinc-400">
                HNL Design and Construction — Architects | Engineers | Builders, Mandaluyong City, Metro Manila.
              </div>
            </div>

            {/* Right – Form Card */}
            <form onSubmit={handleSubmit} className="border border-brand-secondary/30 rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col justify-between min-h-[550px] w-full space-y-5">
              <div className="space-y-4">
                {status.type && (
                  <div
                    className={`p-4 rounded-xl text-sm font-semibold transition-all border ${status.type === "success"
                        ? "bg-brand-secondary/30 border-brand-primary text-brand-dark shadow-sm"
                        : "bg-rose-50 text-rose-800 border-rose-200"
                      }`}
                  >
                    {status.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1.5 block w-full h-12 px-4 rounded-lg border border-zinc-200 bg-brand-bg text-brand-dark text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1.5 block w-full h-12 px-4 rounded-lg border border-zinc-200 bg-brand-bg text-brand-dark text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="e.g. +63 917 123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1.5 block w-full h-12 px-4 rounded-lg border border-zinc-200 bg-brand-bg text-brand-dark text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all placeholder:text-zinc-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      id="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="mt-1.5 block w-full h-12 px-4 rounded-lg border border-zinc-200 bg-brand-bg text-brand-dark text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all cursor-pointer text-zinc-800"
                    >
                      <option value="">Select...</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                      <option value="Renovation">Renovation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Describe your structural fabrication or custom installation requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1.5 block w-full p-4 rounded-lg border border-zinc-200 bg-brand-bg text-brand-dark text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary focus:outline-none transition-all min-h-[120px] placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-brand-primary px-8 py-3 text-base font-bold text-brand-dark transition-all hover:bg-brand-primary-hover hover:shadow-lg hover:shadow-brand-primary/20 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
