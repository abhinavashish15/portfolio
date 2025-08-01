/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Briefcase,
  Code,
  Database,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-monochrome-50 dark:bg-monochrome-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-monochrome-200/20 to-monochrome-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-monochrome-300/20 to-monochrome-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-monochrome-200/10 to-monochrome-300/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      {/* header */}
      <div className="pt-16 pb-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-monochrome-500" />
              <span className="text-sm font-medium text-monochrome-600 dark:text-monochrome-400 bg-monochrome-100 dark:bg-monochrome-800/30 px-3 py-1 rounded-full">
                About Me
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-monochrome-900 via-monochrome-700 to-monochrome-800 dark:from-monochrome-100 dark:via-monochrome-200 dark:to-monochrome-300 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-monochrome-600 dark:text-monochrome-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Software developer with a focus on building
              impactful, user-centric digital solutions. I enjoy combining clean
              code, smart design, and AI technologies to solve real-world
              problems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* main content */}
      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glass morphism card */}
            <div className="absolute inset-0 bg-white/80 dark:bg-monochrome-950/80 backdrop-blur-xl rounded-2xl border border-monochrome-200/20 dark:border-monochrome-700/50 shadow-2xl"></div>

            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-monochrome-400 to-monochrome-500 p-[1px]">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-monochrome-950/90 dark:to-monochrome-900/50 backdrop-blur-xl"></div>
            </div>

            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-monochrome-500" />
                <h3 className="text-2xl font-bold text-monochrome-900 dark:text-monochrome-100">
                  Experience
                </h3>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-monochrome-400 to-monochrome-500 rounded-full"></div>
                  <div className="pl-4">
                    <h4 className="font-bold text-xl text-monochrome-900 dark:text-monochrome-100 mb-2">
                      🔹 AdSpyder (GSTech Technology Pvt Ltd)
                    </h4>
                    <p className="text-xs italic text-monochrome-500 dark:text-monochrome-400 mb-3">
                      Technologies: JavaScript, Chrome Extension APIs, DOM
                      Manipulation, Web Scraping, REST APIs, HTML5, CSS3, Git,
                      GitHub and JSON
                    </p>
                    <p className="text-monochrome-600 dark:text-monochrome-300 leading-relaxed">
                      As a Web Development Intern, I focused on developing and
                      deploying multiple live Chrome extensions that enhanced
                      user productivity and automated browser tasks. My
                      responsibilities included DOM manipulation, API
                      integration, and web scraping, along with maintaining
                      clean and modular code. This experience deepened my
                      understanding of browser architecture, extension
                      publishing workflows, and JavaScript-based automation in
                      real-world applications.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-0 w-2 h-full bg-gradient-to-b from-monochrome-500 to-monochrome-600 rounded-full"></div>
                  <div className="pl-4">
                    <h4 className="font-bold text-xl text-monochrome-900 dark:text-monochrome-100 mb-2">
                      🔹 EverReady AI
                    </h4>
                    <p className="text-xs italic text-monochrome-500 dark:text-monochrome-400 mb-3">
                      Technologies: Next.js, React.js, TypeScript, CopilotKit,
                      FastAPI, Python, TailwindCSS, LLM APIs, Git and GitHub
                    </p>
                    <p className="text-monochrome-600 dark:text-monochrome-300 leading-relaxed">
                      At EverReady AI, I contributed to building AI-integrated
                      web experiences using Next.js, React, CopilotKit, and
                      FastAPI. I worked on full-screen and embedded chatbots,
                      AI-powered assistants, and seamless user interfaces. On
                      the backend, I developed scalable APIs with FastAPI to
                      support real-time interactions with large language models
                      (LLMs). My work emphasized user experience, scalability,
                      and clean architecture—enabling responsive, intelligent
                      web applications driven by AI.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-monochrome-900 dark:text-monochrome-100"
            >
              What I know:
            </motion.div>

            {[
              {
                icon: <Code className="w-5 h-5" />,
                title: "Languages & Databases",
                content:
                  "C, Java, JavaScript, TypeScript, Python, MySQL, MongoDB",
                gradient: "from-monochrome-400 to-monochrome-500",
              },
              {
                icon: <Database className="w-5 h-5" />,
                title: "Web & Frameworks",
                content:
                  "HTML, CSS, React, Next.js, Node.js, Express.js, Spring Boot, MongoDB, TensorFlow, Streamlit, OpenCV, NumPy",
                gradient: "from-monochrome-500 to-monochrome-600",
              },
              {
                icon: <Wrench className="w-5 h-5" />,
                title: "Tools & Platforms",
                content:
                  "AWS, Firebase, Git, GitHub, VS Code, Web Scraping, REST APIs, Chrome DevTools",
                gradient: "from-monochrome-600 to-monochrome-700",
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative"
              >
                {/* Glass morphism card */}
                <div className="absolute inset-0 bg-white/80 dark:bg-monochrome-950/80 backdrop-blur-xl rounded-2xl border border-monochrome-200/20 dark:border-monochrome-700/50 shadow-2xl"></div>

                {/* Gradient border */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.gradient} p-[1px]`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/90 to-white/50 dark:from-monochrome-950/90 dark:to-monochrome-900/50 backdrop-blur-xl"></div>
                </div>

                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-monochrome-500 group-hover:scale-110 transition-transform duration-200">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-monochrome-900 dark:text-monochrome-100">
                      {skill.title}
                    </h4>
                  </div>
                  <p className="text-monochrome-600 dark:text-monochrome-300 leading-relaxed">
                    {skill.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
