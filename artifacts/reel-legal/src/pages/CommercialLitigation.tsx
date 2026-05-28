import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, Briefcase, Scale, ShieldCheck, FileText } from "lucide-react";

const claimTypes = [
  "Breach of contract — goods, services, and complex commercial agreements",
  "Business partnership and shareholder disputes",
  "Trade secret misappropriation and unfair competition",
  "Business fraud and financial misrepresentation",
  "Corporate liability and indemnification disputes",
  "Vendor, supplier, and contractor disputes",
  "Collection and enforcement of judgments",
  "Tortious interference with business relationships",
  "Non-compete and non-solicitation enforcement",
  "Multi-party commercial litigation and complex discovery",
];

const pillars = [
  {
    icon: Briefcase,
    title: "Strategic from Day One",
    description:
      "We assess your exposure, your leverage, and your options before a single filing is made. Every case is built with resolution — or verdict — in mind from the start.",
  },
  {
    icon: Scale,
    title: "Trial-Ready",
    description:
      "Opposing counsel knows we go to trial. That credibility shapes every negotiation and drives better outcomes before the courtroom is ever needed.",
  },
  {
    icon: ShieldCheck,
    title: "Businesses and Individuals",
    description:
      "Whether you are a corporation protecting a multi-million dollar contract or an individual wronged by a business partner, we bring the same relentless approach.",
  },
  {
    icon: FileText,
    title: "Complex Litigation Experience",
    description:
      "We have handled intricate commercial disputes with multi-party discovery, expert witnesses, and high-stakes jury trials — including a 7-figure unanimous jury verdict.",
  },
];

const process = [
  {
    step: "01",
    title: "Case Assessment",
    description:
      "We analyze the facts, the documents, and the law to give you an honest assessment of your position, your risks, and your realistic path to recovery.",
  },
  {
    step: "02",
    title: "Strategy & Demand",
    description:
      "We develop a litigation strategy tailored to your goals — whether that is a negotiated resolution, injunctive relief, or a jury verdict.",
  },
  {
    step: "03",
    title: "Discovery & Motion Practice",
    description:
      "We pursue aggressive discovery to build your case, and we use motion practice to narrow the issues and control the field before trial.",
  },
  {
    step: "04",
    title: "Resolution or Trial",
    description:
      "We push for the best available outcome. If the other side won't move, we try the case. We are comfortable in front of a jury.",
  },
];

export default function CommercialLitigation() {
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
            Commercial Litigation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            When a business dispute threatens what you have built, you need more than a lawyer. You need a fighter.
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
                Protecting What You Have Built
              </h2>
              <div className="space-y-4 text-foreground/75 text-lg leading-relaxed">
                <p>
                  Commercial disputes can be existential. A breached contract, a dishonest partner, or a fraudulent counterparty can threaten everything you have worked to create. Reel Legal Counsel handles commercial litigation for both businesses and individuals — bringing the same relentless, trial-ready approach that earned a unanimous 7-figure jury verdict in a complex contract dispute.
                </p>
                <p>
                  We represent clients in Ohio and Florida state courts as well as federal district courts, handling disputes that range from straightforward contract enforcement to complex multi-party litigation with competing claims and high-stakes discovery.
                </p>
                <p>
                  From the moment you engage us, we are thinking about how to win — at the negotiating table or in front of a jury. That posture changes what the other side offers.
                </p>
              </div>
              <Button
                data-testid="button-commercial-evaluation"
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
            Our Approach
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
            How We Work Your Case
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
            Commercial disputes move fast. The sooner you have counsel, the stronger your position. Contact us today for a confidential evaluation.
          </p>
          <Button
            data-testid="button-commercial-cta"
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
