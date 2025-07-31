/** @format */

"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ProfileImage from "@/app/components/ProfileImage";
import CopilotChat from "@/app/components/CopilotChat";
// import About from "@/app/about/page";
// import Skills from "@/app/skills/page";
// import Projects from "@/app/projects/page";
// import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* hero section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-monochrome-50 to-white dark:from-monochrome-950 dark:to-monochrome-900"></div>
        <div className="relative z-10 px-4 py-8 md:py-0 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm <span className="gradient-text">Abhinav Ashish</span>
              </h1>
              <p className="text-xl md:text-2xl text-monochrome-600 dark:text-monochrome-300 mb-8">
                Software Developer | AI Integrations & Scalable Web Apps
              </p>
              <p className="text-lg text-monochrome-500 dark:text-monochrome-400 mb-12 max-w-2xl mx-auto lg:mx-0">
                I specialize in developing robust, AI-enhanced full stack
                solutions that balance performance, usability, and scalability.
                My work is guided by a passion for clean code, thoughtful
                design, and impactful software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects" className="btn-primary">
                  View My Work
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <ProfileImage
                src="/profile-image.jpeg"
                alt="Your Name - Full Stack Developer"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 animate-bounce-slow text-monochrome-400" />
          </motion.div>
        </div>
      </section>
      {/* <About />
      <Skills />
      <Projects />
      <Contact /> */}

      {/* footer */}
      <footer className="py-8 bg-monochrome-950 text-white text-center">
        <p>&copy; 2025 Abhinav. All rights reserved.</p>
      </footer>

      <CopilotChat />
    </main>
  );
}
