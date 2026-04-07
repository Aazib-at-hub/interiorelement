import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { title: "The Skyline Penthouse", location: "Mumbai", image: project1 },
  { title: "Corporate Office Hub", location: "Delhi", image: project2 },
  { title: "Royal Villa Entrance", location: "Bangalore", image: project3 },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary uppercase tracking-[0.2em] text-sm">
            Our Portfolio
          </span>
          <h2 className="section-title mt-4">Spaces We've Transformed</h2>
          <p className="section-subtitle mx-auto mt-4">
            Discover a selection of our latest interior projects — thoughtfully designed and beautifully executed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="image-zoom aspect-[4/5]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-primary text-sm mb-1">{project.location}</p>
                <h3 className="text-xl font-serif text-foreground mb-3">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm">View Project</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;