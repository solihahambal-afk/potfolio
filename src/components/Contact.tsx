import { motion } from "motion/react";
import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    if (!supabase) {
      console.warn("Supabase is not configured. Form submission simulated.");
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      }, 1000);
      return;
    }

    try {
      const { error } = await supabase
        .from('messages')
        .insert([{ 
          name: formData.name, 
          email: formData.email, 
          message: formData.message,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{t.contact.title}</h2>
            <p className="text-muted-foreground text-lg">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-muted/30 border border-border p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t.contact.namePlaceholder}
                    disabled={status === "loading"}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={t.contact.emailPlaceholder}
                    disabled={status === "loading"}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.messageLabel}</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                  disabled={status === "loading"}
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20 flex-row-reverse rtl:flex-row"
                >
                  <Send className="w-4 h-4 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" />
                  {status === "loading" ? t.contact.sendingButton : t.contact.sendButton}
                </button>
              </div>

              {status === "success" && (
                <div className="flex items-center p-4 bg-green-500/10 text-green-500 rounded-lg border border-green-500/20">
                  <CheckCircle2 className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
                  <p>{t.contact.successMessage}</p>
                </div>
              )}
              
              {status === "error" && (
                <div className="flex items-center p-4 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20">
                  <AlertCircle className="w-5 h-5 mr-3 rtl:mr-0 rtl:ml-3" />
                  <p>{t.contact.errorMessage}</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
