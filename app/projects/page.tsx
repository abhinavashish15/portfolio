/** @format */

"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Sparkles,
  Code,
  Globe,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

const projects = [
  {
    title: "Sorting Visualizer",
    description:
      "An interactive web-based tool that visually demonstrates the step-by-step execution of popular sorting algorithms such as Bubble Sort, Merge Sort, and Quick Sort through smooth, real-time animations. Users can control the speed of sorting, shuffle the array, and observe how each algorithm works internally.",
    tech: ["JavaScript", "HTML", "CSS", "React"],
    image: "/projects-snaps/sorting-algorithm.png",
    demo: "https://sorting-visualisation-one.vercel.app/",
    code: "https://github.com/abhinavashish15/Sorting-Visualisation",
    gradient: "from-orange-500 to-red-500",
    icon: Code,
    category: "Frontend Development",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio to showcase my projects, skills, and experience. Features an integrated AI CopilotChat assistant powered by CopilotKit for real-time interaction. Built with Next.js, Tailwind CSS, and Framer Motion, with smooth animations and dark mode support.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "CopilotKit",
      "AI Integration",
    ],
    image: "/projects-snaps/portfolio.png",
    demo: "https://abhinavashish-portfolio.vercel.app/",
    code: "https://github.com/abhinavashish15/portfolio",
    gradient: "from-purple-500 to-pink-500",
    icon: Globe,
    category: "Full Stack Development",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-monochrome-50 to-white dark:from-monochrome-950 dark:to-monochrome-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      {/* header */}
      <div className="pt-16 pb-8 relative z-10">
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
              className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/30 dark:bg-slate-800/30 backdrop-blur-xl rounded-full border border-white/40 dark:border-slate-700/40"
            >
              <Sparkles className="w-5 h-5 text-gray-400" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Featured Projects
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore some of my recent work and creative endeavors that
              showcase my skills and passion for development
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              transition={{
                duration: 1,
                delay: index * 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateY: 2,
                transition: {
                  duration: 0.4,
                  ease: "easeOut",
                },
              }}
              className="group relative perspective-1000"
            >
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-gray-800 rounded-full opacity-60"
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.6, 0.2, 0.6],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-gray-700 rounded-full opacity-40"
                  animate={{
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.7,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 right-8 w-1 h-1 bg-gray-600 rounded-full opacity-50"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              </div>

              {/* Main card container with 3D effect */}
              <motion.div
                className="relative p-8 bg-white/20 dark:bg-slate-900/20 backdrop-blur-xl rounded-3xl border border-white/30 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 opacity-0 group-hover:opacity-20"
                  animate={{
                    background: [
                      "linear-gradient(45deg, #1f2937, #374151, #111827)",
                      "linear-gradient(45deg, #111827, #1f2937, #374151)",
                      "linear-gradient(45deg, #374151, #111827, #1f2937)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Animated background elements */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-800 to-transparent dark:from-gray-900/20 dark:to-transparent rounded-full -translate-y-16 translate-x-16 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Category badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-6"
                >
                  <motion.div
                    className="p-3 bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/30"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </motion.div>

                {/* Enhanced image container */}
                <motion.div
                  className="relative mb-8 rounded-2xl overflow-hidden group/image"
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500"></div>

                  {/* Image overlay with project info */}
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-2">View Project</p>
                      <div className="flex gap-2">
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        <motion.div
                          className="w-2 h-2 bg-white rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Description with enhanced typography */}
                <motion.p
                  className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed text-base"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>

                {/* Enhanced tech stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.2 + techIndex * 0.1 + 1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.1,
                        y: -2,
                      }}
                      className="px-4 py-2 bg-gradient-to-r from-gray-800/60 to-gray-700/60 backdrop-blur-sm text-gray-200 text-sm font-medium rounded-full border border-gray-600/30 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced action buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm hover:from-gray-700/90 hover:to-gray-800/90 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn border border-gray-700/30"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-gray-700/60 to-gray-800/60 backdrop-blur-sm text-gray-200 font-semibold rounded-2xl border border-gray-600/40 shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    <Github className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
                    Source Code
                  </motion.a>
                </div>
              </motion.div>
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
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-700/30">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">
              Interested in collaborating on a project?
            </span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
