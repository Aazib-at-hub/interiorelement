import { motion } from "framer-motion";
import serviceKitchen from "@/assets/service-kitchen.jpg";
import serviceLiving from "@/assets/service-living.jpg";
import serviceBedroom from "@/assets/service-bedroom.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceCeiling from "@/assets/service-ceiling.jpg";
import serviceFurniture from "@/assets/service-furniture.jpg";
import serviceMoulding from "@/assets/service-moulding.png"; 

const services = [
  { title: "Modular Kitchens", image: serviceKitchen },
  { title: "Living & Bedrooms", image: serviceLiving },
  { title: "Wall Moulding & Panelling", image: serviceMoulding },
  { title: "Office & Commercial", image: serviceOffice },
  { title: "False Ceiling & Lighting", image: serviceCeiling },
  { title: "Custom Furniture", image: serviceFurniture },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm">
            What We Offer
          </span>
          <h2 className="section-title mt-4">Our Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer card-hover"
            >
              <div className="image-zoom aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-serif text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="w-0 group-hover:w-12 h-0.5 bg-primary transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;