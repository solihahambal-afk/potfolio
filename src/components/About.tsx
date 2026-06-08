import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p className="leading-relaxed">
              I am a web developer with experience building modern web applications using HTML, CSS, JavaScript, and Supabase. I enjoy creating solutions that are practical, scalable, and easy to use. 
            </p>
            <p className="leading-relaxed mt-4">
              Alongside software development, I actively work on innovation projects focused on education and student productivity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
