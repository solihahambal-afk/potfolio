import { motion } from "motion/react";
import { Lightbulb } from "lucide-react";

export default function Innovation() {
  return (
    <section className="py-20" id="innovation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-sm font-medium mb-6">
            <Lightbulb className="w-4 h-4" />
            <span>Innovation Focus</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Innovation Projects</h2>
          
            <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 blur-xl">
               <Lightbulb className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-display mb-4">Smart Solar Backpack</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl text-lg">
                A portable student backpack equipped with solar charging capabilities for powering electronic devices during study and travel.
              </p>
              
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center p-4 bg-background border border-border rounded-lg gap-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Status</span>
                <span className="flex items-center text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
                  Concept & Prototype Development
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
