import React from "react";
import { motion } from "framer-motion";
import { Building2, Briefcase, Home } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Commercial Litigation",
      icon: <Building2 size={48} className="text-accent mb-6" strokeWidth={1.5} />,
      description: "Business disputes, contract enforcement, partnership disagreements, and complex commercial claims. We protect your business interests against powerful adversaries with aggressive, strategic litigation.",
      features: ["Breach of Contract", "Partnership Disputes", "Business Torts", "Intellectual Property"]
    },
    {
      id: "02",
      title: "Employment Litigation",
      icon: <Briefcase size={48} className="text-accent mb-6" strokeWidth={1.5} />,
      description: "Workplace discrimination, wrongful termination, wage disputes, and employee rights advocacy. We stand with employees facing retaliation and discrimination from well-resourced employers.",
      features: ["Wrongful Termination", "Discrimination & Harassment", "Wage & Hour Claims", "Retaliation"]
    },
    {
      id: "03",
      title: "Property Damage Claims",
      icon: <Home size={48} className="text-accent mb-6" strokeWidth={1.5} />,
      description: "Representing individuals and businesses in severe property damage disputes. When insurance companies delay, deny, or underpay, we litigate to ensure you receive the full compensation owed.",
      features: ["Insurance Bad Faith", "Commercial Property Damage", "Residential Claims", "Business Interruption"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 text-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-accent font-bold uppercase tracking-[0.2em] mb-4">Practice Areas</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-black text-primary leading-tight">
                Where we draw the line.
              </h3>
            </motion.div>
          </div>
          <div className="max-w-md text-gray-600 border-l-4 border-accent pl-6 py-2">
            We focus our firepower on three core areas of litigation. By specializing, we bring unmatched intensity and insight to every case we take.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div 
              key={service.id}
              className="bg-white p-10 shadow-xl border-t-4 border-transparent hover:border-accent transition-all duration-300 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2 }}
            >
              <span className="absolute top-8 right-8 text-6xl font-serif font-black text-gray-100 group-hover:text-accent/10 transition-colors pointer-events-none select-none">
                {service.id}
              </span>
              
              {service.icon}
              
              <h4 className="text-2xl font-bold text-primary mb-6 font-serif">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed min-h-[120px]">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3 text-sm font-medium text-primary">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
