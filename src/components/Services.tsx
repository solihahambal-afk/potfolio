import { motion } from "motion/react";
import { Layout, Smartphone, Code2, Wrench, Globe, AppWindow } from "lucide-react";

const services = [
  { name: "Website Development", icon: Globe },
  { name: "Landing Page Design", icon: Layout },
  { name: "Web Application", icon: AppWindow },
  { name: "PWA Development", icon: Smartphone },
  { name: "Frontend Development", icon: Code2 },
  { name: "Website Maintenance", icon: Wrench },
];

export default function Services() {
  return (
    <section className="py-20 bg-muted/30" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Services</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-6 bg-muted/20 border border-border rounded-3xl flex items-start space-x-4 hover:border-primary/50 transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
