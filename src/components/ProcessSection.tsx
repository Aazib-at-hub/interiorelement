import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Palette, Box, Hammer, Check } from "lucide-react";

const steps = [
  { icon: MessageSquare, title: "Consultation", description: "Understanding your vision" },
  { icon: Lightbulb, title: "Concept Design", description: "Creating the blueprint" },
  { icon: Palette, title: "Material Selection", description: "Curating premium finishes" },
  { icon: Box, title: "3D Visualization", description: "Bringing ideas to life" },
  { icon: Hammer, title: "Execution", description: "Precision craftsmanship" },
  { icon: Check, title: "Final Handover", description: "Your dream realized" },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm">
            How We Work
          </span>
          <h2 className="section-title mt-4">Our Design Process</h2>
        </motion.div>

        {/* Desktop Process - Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-border" />
            <motion.div 
              className="absolute top-8 left-0 h-1 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Steps */}
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/30">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  {/* Step Number */}
                  <span className="text-primary font-medium text-sm mb-2">
                    Step {index + 1}
                  </span>
                  
                  {/* Step Title */}
                  <h4 className="text-foreground font-serif text-lg mb-2">
                    {step.title}
                  </h4>
                  
                  {/* Step Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Process - Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-6 relative"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/30">
                  <step.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                
                {/* Content */}
                <div className="flex-1 pb-2">
                  <span className="text-primary text-sm font-medium">
                    Step {index + 1}
                  </span>
                  <h4 className="text-foreground font-serif text-xl mt-1 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
