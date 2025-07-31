/** @format */

"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-monochrome-50 dark:bg-monochrome-900">
      <Navbar />
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
            <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
            <p className="text-xl text-monochrome-600 dark:text-monochrome-300">
              Some of my recent work
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Sorting Visualizer",
              description:
                "An interactive web-based tool that visually demonstrates the step-by-step execution of popular sorting algorithms such as Bubble Sort, Merge Sort, and Quick Sort through smooth, real-time animations. Users can control the speed of sorting, shuffle the array, and observe how each algorithm works internally.",
              tech: ["JavaScript", "HTML", "CSS", "React"],
              image: "/projects-snaps/sorting-algorithm.png",
              demo: "https://sorting-visualisation-one.vercel.app/",
              code: "https://github.com/abhinavashish15/Sorting-Visualisation",
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
            },
          ].map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card group rounded-xl overflow-hidden shadow-lg border border-monochrome-100 dark:border-monochrome-800"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* project content */}
              <div className="p-6 relative bg-white dark:bg-monochrome-950">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-10 translate-x-10 opacity-20"></div>

                <h3 className="text-xl font-semibold mb-2 relative z-10">
                  {project.title}
                </h3>
                <p className="text-monochrome-600 dark:text-monochrome-300 mb-4 relative z-10">
                  {project.description}
                </p>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-monochrome-100 to-monochrome-200 dark:from-monochrome-800 dark:to-monochrome-700 text-monochrome-700 dark:text-monochrome-300 text-sm rounded-full border border-monochrome-200/50 dark:border-monochrome-700/50 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* buttons */}
                <div className="flex gap-4 relative z-10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    View Project
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
