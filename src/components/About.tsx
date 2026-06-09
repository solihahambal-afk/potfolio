import { motion } from "motion/react";
import { useLanguage } from "./LanguageProvider";

export default function About() {
  const { t } = useLanguage();

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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t.about.title}</h2>
          <div className="prose prose-lg dark:prose-invert text-muted-foreground">
            <p className="leading-relaxed">
              {t.about.p1}
            </p>
            <p className="leading-relaxed mt-4">
              {t.about.p2}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
