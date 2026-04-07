import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    // YOUR WEB3FORMS ACCESS KEY - Get it free at web3forms.com
    formData.append("access_key", "7bdd7a70-44db-b1fd-100c31141477"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        toast({
          title: "Inquiry Sent!",
          description: "We've received your message and will get back to you soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm">
            Let's Connect
          </span>
          <h2 className="section-title mt-4">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-serif text-foreground mb-4">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can transform your space. We'd love to hear about your vision and bring it to life.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 79X-XXX-XXXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">interiorelements10@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">Lucknow, India</p>
                </div>
              </div>
            </div>

            <Button
              onClick={() => window.open("https://wa.me/917985067539", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-foreground gap-2 rounded-none px-6 py-5"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background p-8 rounded-lg"
          >
            <h3 className="text-xl font-serif text-foreground mb-6">
              Send us a message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="bg-card border-border focus:border-primary rounded-none h-12"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    required
                    placeholder="+91 79X-XXX-XXXX"
                    className="bg-card border-border focus:border-primary rounded-none h-12"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="bg-card border-border focus:border-primary rounded-none h-12"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Project Type
                </label>
                <Input
                  name="projectType"
                  placeholder="Residential, Commercial, Interior"
                  className="bg-card border-border focus:border-primary rounded-none h-12"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  name="message"
                  required
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  className="bg-card border-border focus:border-primary rounded-none resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none h-12 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Message Sent
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Submit Inquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;