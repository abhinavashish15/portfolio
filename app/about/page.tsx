/** @format */

"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-monochrome-50 dark:bg-monochrome-900">
      {/* header */}
      <div className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-monochrome-600 dark:text-monochrome-300 hover:text-monochrome-900 dark:hover:text-monochrome-100 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-monochrome-600 dark:text-monochrome-300 max-w-3xl mx-auto">
              I’m a passionate Software developer with a focus on building
              impactful, user-centric digital solutions. I enjoy combining clean
              code, smart design, and AI technologies to solve real-world
              problems.
            </p>
          </motion.div>
        </div>
      </div>

      {/* main content */}
      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="about-card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10">
                Experiences:
              </h3>
              <p className="text-monochrome-600 dark:text-monochrome-300 mb-4">
                <span className="font-bold text-xl">
                  🔹 AdSpyder (GSTech Technology Pvt Ltd)
                </span>
                <p className="italic text-xs">
                  Technologies used: JavaScript, Chrome Extension APIs, DOM
                  Manipulation, Web Scraping, REST APIs, HTML5, CSS3, Git,
                  GitHub and JSON
                </p>
                <hr />
                <p>
                  {" "}
                  As a Web Development Intern, I focused on developing and
                  deploying multiple live Chrome extensions that enhanced user
                  productivity and automated browser tasks. My responsibilities
                  included DOM manipulation, API integration, and web scraping,
                  along with maintaining clean and modular code. This experience
                  deepened my understanding of browser architecture, extension
                  publishing workflows, and JavaScript-based automation in
                  real-world applications.
                </p>
              </p>
              <p className="text-monochrome-600 dark:text-monochrome-300 relative z-10">
                <span className="font-bold text-xl">🔹 EverReady AI</span>
                <p className="italic text-xs">
                  Technologies used: Next.js, React.js, TypeScript, CopilotKit,
                  FastAPI, Python, TailwindCSS, LLM APIs, Git and GitHub
                </p>
                <hr />
                <p>
                  {" "}
                  At EverReady AI, I contributed to building AI-integrated web
                  experiences using Next.js, React, CopilotKit, and FastAPI. I
                  worked on full-screen and embedded chatbots, AI-powered
                  assistants, and seamless user interfaces. On the backend, I
                  developed scalable APIs with FastAPI to support real-time
                  interactions with large language models (LLMs). My work
                  emphasized user experience, scalability, and clean
                  architecture—enabling responsive, intelligent web applications
                  driven by AI.
                </p>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="p-6 relative overflow-hidden text-2xl font-bold">What I know:</div>
            <div className="about-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
              <h4 className="font-semibold mb-2 relative z-10">
                Languages & Databases
              </h4>
              <p className="text-monochrome-600 dark:text-monochrome-300 relative z-10">
                C, Java, JavaScript, TypeScript, Python, MySQL, MongoDB
              </p>
            </div>
            <div className="about-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
              <h4 className="font-semibold mb-2 relative z-10">
                Web & Frameworks{" "}
              </h4>
              <p className="text-monochrome-600 dark:text-monochrome-300 relative z-10">
                HTML, CSS, React, Next.js, Node.js, Express.js, Spring Boot,
                MongoDB, TensorFlow, Streamlit, OpenCV, NumPy
              </p>
            </div>
            <div className="about-card p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-10 translate-x-10 opacity-30"></div>
              <h4 className="font-semibold mb-2 relative z-10">
                Tools & Platforms
              </h4>
              <p className="text-monochrome-600 dark:text-monochrome-300 relative z-10">
                AWS, Firebase, Git, GitHub, VS Code, Web Scraping, REST APIs,
                Chrome DevTools
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
