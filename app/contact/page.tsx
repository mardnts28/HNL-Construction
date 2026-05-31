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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend – just clear form for now
    console.log("Submitted", formData);
    setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* 1. Page Hero */}
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Contact page hero background"
            fill
            priority
            className="object-cover opacity-30 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
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

      {/* 2. Contact Details + Form */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Left – Details */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900">Contact Details</h2>
              <p className="text-zinc-600">
                <strong>Address:</strong> 1234 Construction Ave, Makati City, Philippines
              </p>
              <p className="text-zinc-600">
                <strong>Phone:</strong> +63 2 1234 5678
              </p>
              <p className="text-zinc-600">
                <strong>Email:</strong> info@weswin.com
              </p>
              <p className="text-zinc-600">
                <strong>Business Hours:</strong> Mon – Fri, 9:00 am – 6:00 pm
              </p>
            </div>

            {/* Right – Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-700">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-zinc-700">
                  Project Type
                </label>
                <select
                  name="projectType"
                  id="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-zinc-300 bg-white shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                >
                  <option value="">Select…</option>
                  <option value="Residential">Residential</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Industrial">Industrial</option>
                  <option value="Renovation">Renovation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-zinc-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-2.5 text-base font-semibold text-white transition-all hover:bg-teal-700 hover:shadow-md hover:shadow-teal-900/30 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
