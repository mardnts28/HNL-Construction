import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </div>
  );
}
