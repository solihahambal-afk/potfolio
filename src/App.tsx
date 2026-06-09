/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { ThemeProvider } from "./components/ThemeProvider";
import { LanguageProvider } from "./components/LanguageProvider";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="solih-portfolio-theme">
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-foreground selection:text-background font-sans">
          <Header />
          
          <main className="flex-1 w-full pt-16">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Services />
            <Stats />
            <Timeline />
            <Contact />
          </main>
          
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
