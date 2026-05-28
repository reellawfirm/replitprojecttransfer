import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Differentiators } from "@/components/sections/Differentiators";
import { Results } from "@/components/sections/Results";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Results />
        <Differentiators />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
