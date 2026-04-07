import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Interior Elements transformed our home beautifully. Every detail was perfect, and the team was professional throughout. Highly recommended!",
    name: "Priya Gupta",
    role: "Homeowner, Lucknow",
    avatar: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    quote:
      "The provide the best PVC panel service in Lucknow and nearby. Affordable price, Satisfied by interior decor, best in the market for modular kitchen and wardrobes ",
    name: "Amogh Mishra",
    role: "Business Owner, Lucknow",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&h=150&auto=format&fit=crop",
  },
  {
    quote:
      "They understood our style and executed beyond expectations. The attention to detail and quality of materials is exceptional.",
    name: "Md. Aazib Khan",
    role: "Cafe Owner, Lucknow",
    avatar: "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=150&h=150&auto=format&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm">
            Client Stories
          </span>
          <h2 className="section-title mt-4">What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-card p-8 rounded-lg relative card-hover"
            >
              <Quote className="w-10 h-10 text-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <h4 className="text-foreground font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;