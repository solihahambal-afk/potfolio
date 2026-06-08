import { motion } from "motion/react";

const timelineItems = [
  {
    year: "Present",
    title: "Web Developer & Student Innovator",
    description: "Building responsive web applications and developing innovation concepts like the Smart Solar Backpack."
  },
  {
    year: "Recent",
    title: "Completed Featured Projects",
    description: "Developed and launched Imam International Academy and Imam Market utilizing modern web technologies."
  },
  {
    year: "Past",
    title: "Started Web Development Journey",
    description: "Began learning HTML, CSS, and JavaScript, focusing on UI/UX design and responsive layouts."
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-muted/30" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">My Journey</h2>
          
          <div className="max-w-3xl mx-auto relative cursor-default">
            {/* Vertical line connecting timeline items */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background mt-1.5 -translate-x-[7px] md:-translate-x-1/2 z-10 shadow-sm shadow-primary/50"></div>
                  
                  {/* Content box */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} text-left ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-muted/30 border border-border p-6 rounded-3xl hover:border-primary/50 transition-colors shadow-sm"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-[10px] font-bold uppercase tracking-wider mb-3 border border-primary/20">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
