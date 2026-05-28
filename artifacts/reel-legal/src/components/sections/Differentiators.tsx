import React from "react";
import { motion } from "framer-motion";
import { Scale, ShieldAlert, Target } from "lucide-react";

export function Differentiators() {
  return (
    <section id="why-us" className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Column: Image/Visual */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-primary p-12 shadow-2xl"
            >
              <div className="border border-accent/30 p-12 text-center h-full flex flex-col justify-center items-center">
                <Scale size={80} className="text-accent mb-8" strokeWidth={1} />
                <h3 className="text-3xl md:text-5xl font-serif font-black text-white leading-snug mb-6">
                  We don't get intimidated by big names.
                </h3>
                <p className="text-gray-300 text-lg font-light">
                  When facing deep-pocketed corporations or massive insurance conglomerates, you need a firm that hits back. Hard.
                </p>
              </div>
            </motion.div>
            
            {/* Decorative offset box */}
            <div className="absolute -bottom-8 -left-8 w-full h-full bg-gray-100 z-0"></div>
          </div>

          {/* Right Column: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-accent font-bold uppercase tracking-[0.2em] mb-4">Our Approach</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-black text-primary mb-10 leading-tight">
                Sharp, confident, and relentlessly in your corner.
              </h3>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-none border border-accent/20">
                      <Target size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Surgical Precision</h4>
                    <p className="text-gray-600 leading-relaxed">
                      We don't waste time on bloated legal maneuvering. We identify the weakest points in the opposition's case and strike there, forcing favorable resolutions efficiently.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-none border border-primary/20">
                      <ShieldAlert size={24} className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Trial-Ready Posture</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Many firms push for quick settlements because they fear the courtroom. We prepare every case as if it's going to trial. Opposing counsel knows this, and it changes the math entirely.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-none border border-accent/20">
                      <Scale size={24} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-3">Leveling the Power Dynamic</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our boutique size is our weapon. We adapt faster, pivot quicker, and maintain aggressive momentum that large, bureaucratic defense firms struggle to counter.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
