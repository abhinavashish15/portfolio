/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Code,
  Database,
  Globe,
  Server,
  Cpu,
  Smartphone,
  Monitor,
  Terminal,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const techIcons = [
  { icon: Code, name: "Programming" },
  { icon: Globe, name: "Frontend" },
  { icon: Server, name: "Backend" },
  { icon: Database, name: "Database" },
  { icon: Cpu, name: "AI/ML" },
  { icon: Smartphone, name: "Mobile" },
  { icon: Monitor, name: "Desktop" },
  { icon: Terminal, name: "DevOps" },
  { icon: GitBranch, name: "Version Control" },
];

const codeSnippets = [
  "function buildSkills() { return 'expertise'; }",
  "const tech = ['React', 'Node.js', 'Python'];",
  "async function learn() { return 'growth'; }",
  "const passion = 'coding';",
];

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Java", level: 90, color: "from-gray-800 to-gray-900" },
      { name: "JavaScript", level: 85, color: "from-gray-700 to-gray-800" },
      { name: "TypeScript", level: 80, color: "from-gray-800 to-gray-900" },
      { name: "Python", level: 75, color: "from-gray-700 to-gray-800" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React", level: 90, color: "from-gray-800 to-gray-900" },
      { name: "Next.js", level: 85, color: "from-gray-700 to-gray-800" },
      { name: "HTML/CSS", level: 90, color: "from-gray-800 to-gray-900" },
      { name: "Tailwind CSS", level: 80, color: "from-gray-700 to-gray-800" },
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    skills: [
      { name: "Node.js", level: 80, color: "from-gray-800 to-gray-900" },
      {
        name: "MySQL/PostgreSQL",
        level: 70,
        color: "from-gray-700 to-gray-800",
      },
      { name: "MongoDB", level: 50, color: "from-gray-800 to-gray-900" },
      { name: "Spring Boot", level: 30, color: "from-gray-700 to-gray-800" },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Zap,
    skills: [
      { name: "AWS", level: 40, color: "from-gray-800 to-gray-900" },
      { name: "Firebase", level: 60, color: "from-gray-700 to-gray-800" },
      { name: "Supabase", level: 60, color: "from-gray-800 to-gray-900" },
      { name: "Git", level: 80, color: "from-gray-700 to-gray-800" },
    ],
  },
  {
    title: "AI & Data Science",
    icon: Sparkles,
    skills: [
      { name: "TensorFlow", level: 20, color: "from-gray-800 to-gray-900" },
      { name: "OpenCV", level: 20, color: "from-gray-700 to-gray-800" },
      { name: "Streamlit", level: 30, color: "from-gray-800 to-gray-900" },
      { name: "NumPy", level: 20, color: "from-gray-700 to-gray-800" },
    ],
  },
  {
    title: "APIs & Development",
    icon: Database,
    skills: [
      { name: "REST API", level: 50, color: "from-gray-800 to-gray-900" },
      { name: "Cursor AI", level: 70, color: "from-gray-700 to-gray-800" },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-monochrome-50 to-white dark:from-monochrome-950 dark:to-monochrome-900">
      <Navbar />

      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-700/20 to-gray-800/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-800/10 to-gray-900/10 rounded-full blur-3xl"></div>

        {/* Floating skill icons */}
        <motion.div
          className="absolute top-32 left-16 text-3xl opacity-30"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Code />
        </motion.div>

        <motion.div
          className="absolute top-64 right-24 text-2xl opacity-30"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          <Globe />
        </motion.div>

        <motion.div
          className="absolute bottom-64 left-32 text-2xl opacity-30"
          animate={{
            y: [0, -10, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <Server />
        </motion.div>

        <motion.div
          className="absolute bottom-32 right-16 text-3xl opacity-30"
          animate={{
            y: [0, 25, 0],
            rotate: [0, 20, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        >
          <Zap />
        </motion.div>

        {/* Additional tech icons */}
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${15 + (index % 3) * 25}%`,
              top: `${20 + Math.floor(index / 3) * 20}%`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              delay: index * 0.3,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              opacity: 0.6,
            }}
          >
            <tech.icon />
          </motion.div>
        ))}

        {/* Floating code snippets */}
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-xs font-mono text-gray-400 opacity-15 select-none"
            style={{
              left: `${25 + index * 20}%`,
              top: `${60 + index * 8}%`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 0.3, 0],
              y: [0, -25, -50],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: index * 1.5,
              ease: "easeOut",
            }}
          >
            {snippet}
          </motion.div>
        ))}

        {/* Floating tech badges */}
        {["⚛️", "▲", "📘", "🟢", "🐍", "☕", "🍃", "🐘"].map((icon, index) => (
          <motion.div
            key={index}
            className="absolute text-lg opacity-25"
            style={{
              left: `${10 + index * 10}%`,
              top: `${80 + (index % 2) * 5}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + index,
              repeat: Infinity,
              delay: index * 0.4,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.5,
              opacity: 0.8,
            }}
          >
            <span className="text-2xl">{icon}</span>
          </motion.div>
        ))}
      </div>

      <div className="relative pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-gray-400" />
              </motion.div>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Skills & Expertise
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Skills & Technologies
            </motion.h1>
            <motion.p
              className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              A comprehensive showcase of the technologies and tools I work with
              to bring ideas to life
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pb-20">
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Category header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 + 0.3 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-8"
              >
                <motion.div
                  className="p-3 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                  }}
                  animate={{
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.h2
                  className="text-2xl font-bold text-slate-800 dark:text-slate-200"
                  whileHover={{ scale: 1.02 }}
                >
                  {category.title}
                </motion.h2>
              </motion.div>

              {/* Skills grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    className="group relative"
                  >
                    <div className="relative p-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Gradient overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      ></div>

                      {/* Animated background elements */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-800 to-transparent dark:from-gray-900/20 dark:to-transparent rounded-full -translate-y-10 translate-x-10 opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <div className="relative z-10">
                        <motion.h3
                          className="font-semibold text-lg mb-4 text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300"
                          whileHover={{ scale: 1.02 }}
                        >
                          {skill.name}
                        </motion.h3>

                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                              Proficiency
                            </span>
                            <motion.span
                              className="text-sm font-bold text-slate-800 dark:text-slate-200"
                              initial={{ scale: 0.8 }}
                              whileInView={{ scale: 1 }}
                              transition={{
                                delay:
                                  categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                              }}
                              viewport={{ once: true }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>

                          <div className="relative">
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{
                                  duration: 1.5,
                                  delay:
                                    categoryIndex * 0.2 + skillIndex * 0.1 + 1,
                                  ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full shadow-sm relative overflow-hidden`}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                  animate={{
                                    x: ["-100%", "100%"],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay:
                                      categoryIndex * 0.2 +
                                      skillIndex * 0.1 +
                                      1.5,
                                  }}
                                />
                              </motion.div>
                            </div>
                          </div>

                          {/* Skill level indicator */}
                          <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">
                            <span>Beginner</span>
                            <span>Expert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white font-semibold">
              Ready to collaborate on your next project?
            </span>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
