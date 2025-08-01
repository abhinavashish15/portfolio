/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Twitter,
  Sparkles,
  Zap,
  Code,
  Globe,
  Database,
  Server,
  Cpu,
  Smartphone,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import ProfileImage from "@/app/components/ProfileImage";
import CopilotChat from "@/app/components/CopilotChat";
import About from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
];

const codeSnippets = [
  "const developer = { passion: 'coding', coffee: 'always' };",
  "function createAmazing() { return 'portfolio'; }",
  "async function buildFuture() { return 'success'; }",
  "const skills = ['React', 'Node.js', 'AI'];",
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

        {/* Floating tech icons */}
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-3xl opacity-20"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Globe />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-2xl opacity-20"
          animate={{
            y: [0, -10, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Zap />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-40 text-3xl opacity-20"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Sparkles />
        </motion.div>

        {/* Additional tech icons */}
        <motion.div
          className="absolute top-1/4 left-1/4 text-2xl opacity-15"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <Database />
        </motion.div>

        <motion.div
          className="absolute top-3/4 right-1/3 text-2xl opacity-15"
          animate={{
            y: [0, 25, 0],
            rotate: [0, -20, 20, 0],
          }}
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Server />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3 text-2xl opacity-15"
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        >
          <Cpu />
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-1/4 text-2xl opacity-15"
          animate={{
            y: [0, 30, 0],
            rotate: [0, 25, -25, 0],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5,
          }}
        >
          <Smartphone />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/2 text-2xl opacity-15"
          animate={{
            y: [0, -25, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        >
          <Monitor />
        </motion.div>

        {/* Floating code snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-gray-400 opacity-20 select-none"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -30, -60],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: index * 2,
              ease: "easeOut",
            }}
          >
            {snippet}
          </motion.div>
        ))}

        {/* Floating tech stack */}
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute text-lg opacity-30"
            style={{
              left: `${10 + index * 8}%`,
              top: `${70 + (index % 2) * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.8,
            }}
          >
            <span className="text-2xl">{tech.icon}</span>
          </motion.div>
        ))}
      </div>

      <Navbar />

      {/* hero section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-monochrome-50 to-white dark:from-monochrome-950 dark:to-monochrome-900"></div>

        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="relative z-10 px-4 py-8 md:py-0 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Animated greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4"
              >
                <motion.span
                  className="text-lg font-medium text-monochrome-600 dark:text-monochrome-300"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, #6b7280, #9ca3af, #6b7280)",
                    backgroundSize: "200% 100%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Welcome to my digital space
                </motion.span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Hi, I'm{" "}
                <motion.span
                  className="gradient-text relative"
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  Abhinav Ashish
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  />
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-monochrome-600 dark:text-monochrome-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Software Developer
                </motion.span>{" "}
                |{" "}
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  AI Integrations
                </motion.span>{" "}
                &{" "}
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                >
                  Scalable Web Apps
                </motion.span>
              </motion.p>

              <motion.p
                className="text-lg text-monochrome-500 dark:text-monochrome-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                I specialize in developing robust, AI-enhanced full stack
                solutions that balance performance, usability, and scalability.
                My work is guided by a passion for clean code, thoughtful
                design, and impactful software development.
              </motion.p>

              {/* Tech stack preview */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <p className="text-sm text-monochrome-500 dark:text-monochrome-400 mb-3">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.slice(0, 6).map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-1 px-3 py-1 bg-white/50 dark:bg-slate-800/50 rounded-full text-xs border border-white/20 dark:border-slate-700/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <span className="text-sm">{tech.icon}</span>
                      <span className="text-monochrome-600 dark:text-monochrome-300">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/projects"
                    className="btn-primary relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">View My Work</span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="btn-secondary relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10">Get In Touch</span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex justify-center lg:justify-end relative"
            >
              {/* Floating elements around profile image */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.3, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />

              <motion.div
                className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.5, 1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <ProfileImage
                  src="/profile-image.jpeg"
                  alt="Abhinav Ashish - Software Developer"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 animate-bounce-slow text-monochrome-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* footer */}
      <footer className="py-8 bg-monochrome-950 text-white text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>&copy; 2025 Abhinav. All rights reserved.</p>
        </motion.div>
      </footer>

      <CopilotChat />
    </main>
  );
}
