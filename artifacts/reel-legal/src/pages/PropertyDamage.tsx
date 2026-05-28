import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, Home, Building, AlertTriangle, FileSearch } from "lucide-react";

const claimTypes = [
  "Residential and commercial property damage from fire, flood, and storm",
  "Hurricane, tornado, and severe weather damage claims",
  "Water intrusion and mold damage disputes",
  "Insurance claim denials and underpayments",
  "Bad faith insurance practices",
  "Contractor defect and construction dispute claims",
  "Vandalism and third-party damage recovery",
  "Business interruption losses tied to property damage",
  "Subrogation disputes between insurance carriers",
  "Disputes with HOAs, landlords, and property managers",
];

const pillars = [
  {
    icon: Home,
    title: "Individuals and Families",
    description:
      "When your home is damaged and your insurer is delaying, denying, or underpaying your claim, we step in and fight to get you what you are owed — fully and fairly.",
  },
  {
    icon: Building,
    title: "Businesses",
    description:
      "Property damage can halt operations, threaten revenue, and jeopardize everything you have built. We represent businesses of all sizes pursuing recovery for property damage and related losses.",
  },
  {
    icon: AlertTriangle,
    title: "Insurance Bad Faith",
    description:
      "Insurers have a legal obligation to handle claims fairly. When they do not — delaying without reason, denying valid claims, or offering far less than you are owed — we hold them accountable.",
  },
  {
    icon: FileSearch,
    title: "Thorough Case Building",
    description:
      "We work with engineers, contractors, and damage experts to document the full scope of your loss and build an airtight case for maximum recovery.",
  },
];

const process = [
  {
    step: "01",
    title: "Claim Review",
    description:
      "We review your insurance policy, the insurer's response, and the damage documentation to identify every avenue for recovery and every insurer misstep.",
  },
  {
    step: "02",
    title: "Expert Documentation",
    description:
      "We retain engineers, contractors, and appraisers as needed to fully document the damage and counter lowball estimates from the insurer's adjusters.",
  },
  {
    step: "03",
    title: "Demand and Negotiation",
    description:
      "We present the full claim with legal force behind it. Insurers respond very differently when they know litigation is not a threat — it is an outcome we will follow through on.",
  },
  {
    step: "04",
    title: "Litigation if Necessary",
    description:
      "If the insurer or responsible party refuses to pay what is owed, we take the case to court. We are experienced litigators, and we are comfortable in front of a jury.",
  },
];

export default function PropertyDamage() {
  const [, setLocation] = useLocation();

  const goToContact = () => {
    setLocation("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-primary pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            Practice Area
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-5xl md:text-7xl text-white leading-tight mb-6"
          >
            Property Damage Claims
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            Your property was damaged. Your insurer is not playing fair. We get you what you are owed.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bold text-3xl md:text-4xl text-primary mb-6 leading-tight">
                Fighting for Full and Fair Recovery
              </h2>
              <div className="space-y-4 text-foreground/75 text-lg leading-relaxed">
                <p>
                  Property damage — whether from a storm, fire, flood, or a contractor who cut corners — is traumatic enough on its own. When your insurance company delays, underpays, or outright denies a valid claim, the situation becomes even more devastating.
                </p>
                <p>
                  Reel Legal Counsel represents individuals, families, and businesses in property damage disputes against insurance companies and other responsible parties. We understand how insurers build their defenses, and we know how to challenge them effectively — in negotiations and in court.
                </p>
                <p>
                  We handle cases in Ohio and Florida, including claims arising from some of the most catastrophic weather events affecting both states. Whether you are dealing with a denied homeowner's claim or a major commercial property loss, we bring the same aggressive approach to every case.
                </p>
              </div>
              <Button
                data-testid="button-property-evaluation"
                onClick={goToContact}
                className="mt-10 bg-accent text-white hover:bg-accent/90 rounded-none px-8 py-6 font-bold uppercase tracking-widest text-sm"
              >
                Free Case Evaluation
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="font-bold text-xl text-primary mb-6 uppercase tracking-widest">
                Claims We Handle
              </h3>
              <div className="space-y-4">
                {claimTypes.map((claim, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="text-accent mt-1 shrink-0" size={18} />
                    <p className="text-foreground/75 leading-relaxed">{claim}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl md:text-4xl text-white text-center mb-14"
          >
            Who We Represent
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8"
              >
                <p.icon className="text-accent mb-5" size={32} />
                <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                <p className="text-white/70 leading-relaxed">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-3xl md:text-4xl text-primary text-center mb-14"
          >
            How We Pursue Your Recovery
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-border p-8"
              >
                <p className="text-accent font-bold text-4xl mb-4 opacity-40">{step.step}</p>
                <h3 className="font-bold text-primary text-lg mb-3">{step.title}</h3>
                <p className="text-foreground/65 leading-relaxed text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-bold text-4xl md:text-5xl text-primary mb-6"
          >
            Get Your Free Case Evaluation
          </motion.h2>
          <p className="text-foreground/60 text-xl mb-10 max-w-xl mx-auto">
            Insurance companies have teams of adjusters and lawyers working against you. Let us put a trial-ready advocate on your side.
          </p>
          <Button
            data-testid="button-property-cta"
            onClick={goToContact}
            className="bg-accent text-white hover:bg-accent/90 rounded-none px-10 py-6 font-bold uppercase tracking-widest text-sm"
          >
            Contact Us Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
