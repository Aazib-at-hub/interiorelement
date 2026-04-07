import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-interior.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/90" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center md:text-left max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-primary uppercase tracking-[0.3em] text-sm mb-6"
        >
          Premium Interior Design
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-foreground leading-tight mb-6"
        >
          Designing Spaces That
          <br />
          <span className="text-gradient">Reflect Your Style</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Premium interior design solutions that blend creativity, functionality, and elegance — tailored for modern living.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/917985067539", "_blank")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-medium rounded-none"
          >
            Book Free Consultation
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base font-medium rounded-none"
          >
            View Projects
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;