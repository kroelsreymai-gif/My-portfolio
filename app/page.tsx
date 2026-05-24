"use client";

import { motion } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
// Effects
import Cursor from "@/components/Cursor";
import PageLoader from "@/components/PageLoader";

import Marquee from "@/components/Marquee";
import Spotlight from "@/components/Spotlight";
export default function Home() {

  return (

    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="
        bg-[#0B0B0B]
        text-white
        overflow-hidden
      "
    >

      {/* Global Effects */}
      <Cursor />

      <PageLoader />
      <Spotlight />
      {/* Navigation */}
      <Navbar />

      {/* Home */}
      <section id="home">
        <Hero />
        <Marquee />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </motion.main>
  );
}