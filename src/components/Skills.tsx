import { motion } from "motion/react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Supabase",
  "Responsive Web Design",
  "Progressive Web Apps (PWA)",
  "Git & GitHub",
  "UI/UX Design",
  "Problem Solving",
  "Team Collaboration"
];

export default function Skills() {
  return (
    <section className="py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">Technical Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-3 py-1.5 bg-muted/50 border border-border rounded-lg text-xs font-mono transition-colors hover:border-primary/50 hover:text-primary cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
