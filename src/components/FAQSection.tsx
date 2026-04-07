import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does interior design cost?",
    answer: "Our pricing varies based on project scope, size, and complexity. We offer customized packages starting from ₹500 per sq. ft. for residential projects. During our free consultation, we'll provide a detailed quote tailored to your specific requirements and budget.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines depend on the scope of work. A single room redesign typically takes 10-12 days weeks, while a complete home renovation may take 2-3 Months. We provide a detailed timeline during the planning phase and keep you updated throughout the process.",
  },
  {
    question: "Do you offer 3D visualization before execution?",
    answer: "Absolutely! We provide photorealistic 3D renderings and virtual walkthroughs for every project. This allows you to visualize the final result before we begin execution, ensuring complete satisfaction with the design.",
  },
  {
    question: "What is included in the consultation?",
    answer: "Our free consultation includes an in-depth discussion of your vision, lifestyle needs, and budget. We'll assess your space, share initial ideas, explain our process, and answer all your questions. There's no obligation to proceed after the consultation.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer: "Yes, we specialize in both residential and commercial interior design. Our portfolio includes luxury homes, apartments, offices, retail spaces, restaurants, and hospitality projects. Each project receives our full attention and creative expertise.",
  },
  {
    question: "Can you work within my budget?",
    answer: "We pride ourselves on creating stunning designs across various budget ranges. During our consultation, we'll discuss your budget openly and propose solutions that maximize value without compromising on style and quality.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm">
            Got Questions?
          </span>
          <h2 className="section-title mt-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Find answers to common questions about our interior design services, process, and pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary text-lg font-medium py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Contact Us →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
