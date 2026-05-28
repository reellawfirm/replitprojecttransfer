import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden pt-20">
      {/* Background abstract texture/pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-accent rounded-full blur-[150px] opacity-20 translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      {/* Diagonal sharp architectural line */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#151558] transform skew-x-12 translate-x-32 shadow-2xl z-0 border-l-[10px] border-accent/20"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block border-l-4 border-accent pl-4 mb-8">
              <h2 className="text-accent font-bold uppercase tracking-[0.2em] text-sm md:text-base">
                Boutique Litigation Firm
              </h2>
            </div>
          </motion.div>

          <motion.h1
            className="font-serif leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block text-3xl md:text-4xl lg:text-5xl italic font-medium text-accent mb-2">
              Advocacy that
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl font-bold text-white">
              levels the playing field.
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl font-light leading-relaxed border-l-2 border-gray-600 pl-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We represent individuals and businesses who are outmatched or outgunned. We take on the tough cases, and we don't back down.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none px-10 py-8 text-lg font-bold uppercase tracking-widest shadow-xl transition-transform hover:-translate-y-1"
            >
              Get Representation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-primary rounded-none px-10 py-8 text-lg font-bold uppercase tracking-widest transition-transform hover:-translate-y-1"
            >
              Our Practice Areas
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
