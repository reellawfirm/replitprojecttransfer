import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Award, Scale, Globe, CheckCircle } from "lucide-react";

const credentials = [
  "Award-winning trial attorney with a record of success in complex litigation",
  "Secured a 7-figure unanimous jury verdict in a multi-million dollar contract dispute",
  "Experienced across commercial, employment, and property damage litigation",
  "Represents both individuals and businesses throughout litigation proceedings",
  "Known for strategic preparation, courtroom composure, and client-centered advocacy",
  "Originally from Canada, bringing an internationally informed legal perspective",
];

const pillars = [
  {
    icon: Scale,
    title: "Trial-Ready",
    description:
      "Chris prepares every case for trial from day one. Opposing counsel knows it — and it shapes every negotiation.",
  },
  {
    icon: Award,
    title: "Proven Results",
    description:
      "From 7-figure jury verdicts to favorably negotiated resolutions, Chris has a track record that speaks for itself.",
  },
  {
    icon: Globe,
    title: "Broad Perspective",
    description:
      "An international background and career spent in complex litigation gives Chris a sharper lens on every matter.",
  },
];

export default function About() {
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    setLocation("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-primary pt-16 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--accent)) 0px, hsl(var(--accent)) 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-bold uppercase tracking-widest text-sm mb-4"
          >
            Meet Your Attorney
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Chris Reel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl mt-4 font-serif"
          >
            Founder &amp; Lead Attorney &mdash; Reel Legal Counsel
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: portrait placeholder + accent block */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-muted">
                <img
                  src="/chris-reel.jpg"
                  alt="Chris Reel, Attorney at Reel Legal Counsel"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white px-8 py-6 z-20">
                <p className="font-bold text-2xl tracking-wide">Meet Chris</p>
              </div>
            </motion.div>

            {/* Right: bio text */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">
                An Attorney Who Shows Up and Fights
              </h2>
              <div className="space-y-5 text-foreground/80 text-lg leading-relaxed">
                <p>
                  Chris Reel is a litigation attorney who built Reel Legal Counsel on a straightforward
                  promise: every client — individual or business — deserves the same fearless, strategic
                  advocacy that was once reserved only for those with deep pockets.
                </p>
                <p>
                  Originally from Canada, Chris brings an internationally informed perspective to the
                  practice of law in the United States. His career has been defined by complex disputes
                  — the kind that demand both meticulous preparation and the ability to think clearly
                  under fire. His landmark achievement includes securing a unanimous 7-figure jury
                  verdict in a multi-million dollar contract dispute, a result that reflects the depth
                  of his trial skill and his refusal to back down.
                </p>
                <p>
                  Chris is known as much for his emotional intelligence as his legal acumen. He reads
                  a room, reads his clients, and calibrates accordingly — earning trust not just by
                  winning, but by making people feel genuinely heard and understood throughout the process.
                </p>
                <p>
                  When you work with Chris Reel, you are not hiring a firm. You are hiring a relentless
                  advocate who treats your matter as if it were his own.
                </p>
              </div>

              <Button
                data-testid="button-case-evaluation"
                onClick={scrollToContact}
                className="mt-10 bg-accent text-white hover:bg-accent/90 rounded-none px-8 py-6 font-bold uppercase tracking-widest text-sm"
              >
                Free Case Evaluation
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-16 bg-white border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">
              Licensed Jurisdictions
            </p>
            <h2 className="font-bold text-2xl md:text-3xl text-primary mb-8">
              Admitted to Practice
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Ohio",
                "Florida",
                "U.S. District Court for the Southern District of Ohio",
                "U.S. District Court for the Northern District of Ohio",
                "U.S. District Court for the Southern District of Florida",
                "U.S. District Court for the Middle District of Florida",
              ].map((court, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
                  <span className="text-foreground/80 text-base">{court}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          >
            Credentials &amp; Highlights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {credentials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4"
              >
                <CheckCircle
                  className="text-accent mt-1 shrink-0"
                  size={20}
                />
                <p className="text-foreground/80 text-base leading-relaxed">{item}</p>
              </motion.div>
            ))}
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
            className="font-serif text-3xl md:text-4xl font-bold text-white text-center mb-14"
          >
            What Defines His Practice
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-8"
              >
                <p.icon className="text-accent mb-5" size={36} />
                <h3 className="font-serif text-xl font-bold text-white mb-3">{p.title}</h3>
                <p className="text-white/70 leading-relaxed">{p.description}</p>
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
            Schedule a free case evaluation and find out what it looks like to have a relentless advocate on your side.
          </p>
          <Button
            data-testid="button-cta-evaluation"
            onClick={scrollToContact}
            className="bg-accent text-white hover:bg-accent/90 rounded-none px-10 py-6 font-bold uppercase tracking-widest text-sm"
          >
            Get a Free Case Evaluation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
