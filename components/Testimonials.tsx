import React from "react";

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      quote: "HNL Construction's aluminum casement systems transformed our boutique hotel facade. The wind resistance load ratings and the double-glazing acoustics exceeded all of our design expectations.",
      author: "Engr. Ricardo Silva",
      role: "Project Director",
      company: "Excelsior Corporate Towers",
    },
    {
      quote: "The customization level HNL Construction provided for our Forbes Park residential villas was exceptional. Their massive sliding doors slide completely into the wall cavities, creating a flawless indoor-outdoor transition.",
      author: "Arch. Sofia Martinez",
      role: "Lead Architect",
      company: "ArchiStudio Manila",
    },
    {
      quote: "We needed an agile glass curtain wall partner for our 40-story commercial tower. HNL Construction delivered exactly on schedule and handled all structural shop drawings and load tests seamlessly.",
      author: "Marcus Go",
      role: "VP of Operations",
      company: "Metro Cebu Land Corp.",
    },
  ];

  return (
    <section className="bg-zinc-50 py-20 sm:py-28 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="mx-auto max-w-3xl text-center flex flex-col gap-4 mb-16 sm:mb-20">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
            Reviews
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed">
            We partner with leading architects, developers, and general contractors to build structures that endure. Read about their experiences working with HNL Construction.
          </p>
        </div>

        {/* 3-Column Testimonials Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((test, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-sm border border-zinc-200/50 hover:shadow-md transition-shadow relative"
            >
              {/* Giant Stylized Quotation Mark SVG in the background */}
              <div className="absolute top-6 right-8 text-zinc-100 select-none">
                <svg className="h-10 w-10 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Quote Text */}
              <div className="relative z-10">
                <p className="text-sm leading-relaxed text-zinc-600 italic">
                  "{test.quote}"
                </p>
              </div>

              {/* Author & Company Section */}
              <div className="mt-6 pt-6 border-t border-zinc-100 flex flex-col gap-1">
                <span className="text-sm font-bold text-brand-dark">
                  {test.author}
                </span>
                <span className="text-xs text-zinc-500">
                  {test.role}, <span className="text-brand-primary font-semibold">{test.company}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
