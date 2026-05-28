import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I have had the pleasure of working closely with Chris Reel on multiple litigation matters, and he is truly an exceptional attorney. Chris has a keen and strategic sense for resolving cases efficiently without ever sacrificing quality or advocacy. He is completely at ease in the courtroom, with an impressive ability to think on his feet and respond thoughtfully and effectively to anything that comes his way. What stands out most is his calm, steady presence. He communicates with clarity and respect, ensuring that his points are heard and taken seriously by the court and opposing counsel alike.\n\nBeyond his litigation skills, Chris has a remarkable ability to read the personality and needs of his clients. He meets each individual exactly where they need to be, instilling confidence and trust that their case is in capable hands. That combination of legal sharpness, emotional intelligence, and composure is rare. Chris is very compassionate and has impeccable ethics. Chris Reel is an attorney of the highest caliber, and any client or colleague would be fortunate to work with him.",
    author: "Marlene C.",
    context: "Litigation Client",
  },
  {
    quote:
      "I cannot recommend Chris Reel highly enough! From the moment I reached out, his professionalism, expertise, and attention to detail were evident. Chris took the time to thoroughly understand my needs, walked me through every step of the process, and provided clear, actionable guidance.\n\nChris has a unique ability to translate complex legal jargon into understandable terms, ensuring I felt confident and informed at all times. He worked tirelessly to protect my business and ideas, going above and beyond to deliver results that exceeded my expectations. His responsiveness and genuine care for my success set him apart. I truly felt like more than just a client — I felt like a partner.",
    author: "Diane B.",
    context: "Business Client",
  },
  {
    quote:
      "Chris is extremely impressive! He is very thoughtful, attentive, and strategic during the course of litigation and provides timely and regular updates regarding all changes and potential outcomes. Not only that but he also comes to hearings thoroughly prepared and fights advantageously while remaining professional. We would personally trust Chris with matters outside his practice area simply because of how diligent he is. Would recommend to anybody seeking strong representation and a competent attorney.",
    author: "Seth H.",
    context: "Litigation Client",
  },
  {
    quote:
      "I am grateful to Chris Reel for his legal help in settling a business contract dispute. Chris understood the subtleties in the contract verbiage, worked diligently to represent me well, and delivered a successful outcome. He is articulate and has a unique ability to explain legalese to the layperson. I always felt like he heard my voice, understood my needs, and acted accordingly.\n\nI found Chris to be honest and straightforward, and so I trusted him to represent me fairly. Chris was professional at all times, including in his demeanor with the other parties we worked with. I would without reservation recommend Chris Reel for legal counsel.",
    author: "Mike R.",
    context: "Contract Dispute Client",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-accent font-bold uppercase tracking-widest text-sm mb-3">
            Client Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary leading-tight">
            What Clients Say
          </h2>
          <p className="text-foreground/60 mt-4 text-lg max-w-xl mx-auto">
            The measure of an attorney is what their clients say after the fight is over.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              data-testid={`card-testimonial-${i}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-border p-8 md:p-10 flex flex-col relative"
            >
              <Quote
                className="text-accent/20 absolute top-6 right-6"
                size={48}
                strokeWidth={1.5}
              />
              <div className="flex-1">
                {t.quote.split("\n\n").map((paragraph, pi) => (
                  <p
                    key={pi}
                    className="text-foreground/75 leading-relaxed text-[15px] mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-primary text-sm">{t.author}</p>
                  <p className="text-foreground/50 text-xs uppercase tracking-wide mt-0.5">
                    {t.context}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
