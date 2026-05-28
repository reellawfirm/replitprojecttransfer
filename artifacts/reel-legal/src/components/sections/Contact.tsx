import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Request Received",
        description: "Your case evaluation request has been submitted. We will contact you shortly.",
        variant: "default",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 bg-primary relative text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#151558] z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Left: Text */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-accent font-bold uppercase tracking-[0.2em] mb-4">Take Action</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight">
                Don't fight this battle alone.
              </h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed font-light">
                The longer you wait, the stronger the opposition gets. Contact us today for a confidential, no-obligation evaluation of your case. Let us show you how we level the playing field.
              </p>

              <div className="space-y-6 text-gray-300">
                <div>
                  <p className="text-accent font-bold text-sm uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-2xl font-serif">(555) 123-4567</p>
                </div>
                <div>
                  <p className="text-accent font-bold text-sm uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl">evaluations@reellegal.com</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 md:p-14 shadow-2xl text-foreground"
            >
              <h4 className="text-3xl font-serif font-bold text-primary mb-8">Request a Free Evaluation</h4>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold uppercase tracking-wider text-gray-500">First Name</label>
                    <Input id="firstName" required className="border-gray-300 focus-visible:ring-accent rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold uppercase tracking-wider text-gray-500">Last Name</label>
                    <Input id="lastName" required className="border-gray-300 focus-visible:ring-accent rounded-none h-12" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                    <Input id="email" type="email" required className="border-gray-300 focus-visible:ring-accent rounded-none h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                    <Input id="phone" type="tel" required className="border-gray-300 focus-visible:ring-accent rounded-none h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="practiceArea" className="text-sm font-bold uppercase tracking-wider text-gray-500">Issue Area</label>
                  <select 
                    id="practiceArea" 
                    className="flex h-12 w-full border border-gray-300 bg-transparent px-3 py-1 text-base transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 md:text-sm rounded-none"
                    required
                  >
                    <option value="" disabled selected>Select an area...</option>
                    <option value="commercial">Commercial Litigation</option>
                    <option value="employment">Employment Litigation</option>
                    <option value="property">Property Damage Claim</option>
                    <option value="other">Other / Unsure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-gray-500">Briefly describe your situation</label>
                  <Textarea 
                    id="message" 
                    required 
                    className="min-h-[150px] border-gray-300 focus-visible:ring-accent rounded-none resize-y" 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-none h-14 text-lg font-bold uppercase tracking-widest mt-4"
                >
                  {isSubmitting ? "Submitting..." : "Submit for Review"}
                </Button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  Submitting this form does not establish an attorney-client relationship. Confidential information should not be sent through this form.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
