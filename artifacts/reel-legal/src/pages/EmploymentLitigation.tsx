import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle, Users, Shield, Gavel, Clock } from "lucide-react";

const claimTypes = [
  "Wrongful termination and unlawful discharge",
  "Race, gender, age, disability, and national origin discrimination",
  "Sexual harassment and hostile work environment",
  "Retaliation for protected activity or whistleblowing",
  "Wage and hour violations — unpaid overtime, minimum wage, and misclassification",
  "Family and Medical Leave Act (FMLA) interference and retaliation",
  "Americans with Disabilities Act (ADA) violations and failure to accommodate",
  "Pregnancy and parental leave discrimination",
  "Constructive discharge and forced resignation",
  "Severance negotiation and separation agreement review",
];

const pillars = [
  {
    icon: Users,
    title: "On the Employee's Side",
    description:
      "Employers have large legal teams and HR departments built to protect the company. We exist to level that playing field — putting experienced litigation counsel squarely in your corner.",
  },
  {
    icon: Shield,
    title: "State and Federal Court Experience",
    description:
      "Employment claims can arise in state court, federal court, or before agencies like the EEOC or NLRB. We are admitted in Ohio and Florida courts and federal district courts across both states.",
  },
  {
    icon: Gavel,
    title: "Proven in the Courtroom",
    description:
      "We do not just threaten litigation — we execute it. Our trial record gives us credibility that changes what employers put on the table during settlement.",
  },
  {
    icon: Clock,
    title: "Time-Sensitive Claims",
    description:
      "Employment claims come with strict deadlines. EEOC charges often must be filed within 180 or 300 days. Contact us as soon as possible to protect your rights.",
  },
];

const process = [
  {
    step: "01",
    title: "Confidential Consultation",
    description:
      "We listen to your situation in full, ask the right questions, and give you an honest assessment of your claims and your options — no obligation.",
  },
  {
    step: "02",
    title: "Preserve Evidence",
    description:
      "We immediately advise on what to preserve — emails, performance reviews, communications — before they are lost or destroyed by the employer.",
  },
  {
    step: "03",
    title: "Agency or Court Filing",
    description:
      "Depending on your claims, we file EEOC charges, state agency complaints, or initiate litigation directly in state or federal court.",
  },
  {
    step: "04",
    title: "Fight for Your Recovery",
    description:
      "We pursue every dollar you are owed — back pay, front pay, emotional distress damages, punitive damages, and attorneys' fees where available.",
  },
];

export default function EmploymentLitigation() {
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
      <section className="relative bg-primary pt-16 pb-24 overflow-hidden">
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
            Employment Litigation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            Your employer has an army of lawyers. Now you have one too.
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
                Standing Up for Employees
              </h2>
              <div className="space-y-4 text-foreground/75 text-lg leading-relaxed">
                <p>
                  Losing a job — or enduring a hostile, discriminatory, or retaliatory workplace — is one of the most stressful experiences a person can face. Reel Legal Counsel represents employees who have been wronged at work, bringing serious litigation muscle to a fight that is too often one-sided.
                </p>
                <p>
                  We handle employment claims in both Ohio and Florida, in state and federal court, and before administrative agencies including the Equal Employment Opportunity Commission (EEOC). We understand how employers build their defenses, and we know how to dismantle them.
                </p>
                <p>
                  Employment law has strict deadlines. If you believe your rights have been violated, the most important thing you can do right now is speak with an attorney. Your consultation is confidential and carries no obligation.
                </p>
              </div>
              <Button
                data-testid="button-employment-evaluation"
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
            Why Reel Legal Counsel
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
            What to Expect
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
            Employment claims are time-sensitive. Do not wait. Contact us today for a confidential, no-obligation evaluation of your situation.
          </p>
          <Button
            data-testid="button-employment-cta"
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
