import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import aboutImage from "@/assets/about-interior.jpg";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", duration = 2 }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref}>0{suffix}</span>;
};

const stats = [
  { target: 200, suffix: "+", label: "Projects Completed" },
  { target: 10, suffix: "+", label: "Years Experience" },
  { target: 98, suffix: "%", label: "Happy Clients" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={aboutImage}
                alt="Modern interior design"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-lg hidden lg:block" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary uppercase tracking-[0.2em] text-sm">
              About Us
            </span>
            <h2 className="section-title mt-4 mb-8">
              Crafting Exceptional
              <br />
              Living Spaces
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                At Interior Elements, we believe every space tells a story. Our mission is to transform ordinary interiors into extraordinary environments that inspire comfort, luxury, and functionality.
              </p>
              <p>
                From concept to completion, we handle every detail with passion and precision. Our team of expert designers brings years of experience and a keen eye for the latest trends in modern interior design.
              </p>
              <p>
                We specialize in creating bespoke solutions that reflect your unique personality and lifestyle, ensuring that every corner of your space feels both beautiful and purposeful.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-serif text-primary font-semibold">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
