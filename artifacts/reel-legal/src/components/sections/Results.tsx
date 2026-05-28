import React from "react";
import { motion } from "framer-motion";

export function Results() {
  const results = [
    {
      figure: "$4.2M",
      label: "Commercial Dispute",
      desc: "Recovered for a mid-sized tech firm after a breach of partnership agreement by a Fortune 500 competitor."
    },
    {
      figure: "$1.8M",
      label: "Wrongful Termination",
      desc: "Jury verdict for a whistleblower executive wrongfully terminated after reporting financial irregularities."
    },
    {
      figure: "Full Policy",
      label: "Property Damage",
      desc: "Forced bad-faith insurer to pay out full $2.5M commercial policy limits plus legal fees after initial denial."
    }
  ];

  return (
    <section id="results" className="py-24 bg-[#111144] text-white border-y-8 border-accent">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-bold uppercase tracking-[0.2em] mb-4">Track Record</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-black mb-6">
              We let the outcomes speak.
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {results.map((result, idx) => (
            <motion.div
              key={idx}
              className="pt-8 md:pt-0 md:px-8 first:pt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <h4 className="text-5xl lg:text-6xl font-black text-accent mb-4 font-serif">{result.figure}</h4>
              <p className="text-xl font-bold mb-4 tracking-wide">{result.label}</p>
              <p className="text-gray-300 leading-relaxed font-light">{result.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
