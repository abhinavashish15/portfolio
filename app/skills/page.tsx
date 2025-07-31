/** @format */

"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
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
            <h1 className="text-4xl font-bold mb-4">Skills & Technologies</h1>
            <p className="text-xl text-monochrome-600 dark:text-monochrome-300">
              Here are the technologies I work with
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: "Java", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "TypeScript", level: 80 },
            { name: "Python", level: 75 },
            { name: "MySQL/PostgreSQL", level: 70 },
            { name: "React", level: 90 },
            { name: "Next.js", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "HTML/CSS", level: 90 },
            { name: "Tailwind CSS", level: 80 },
            { name: "Spring Boot", level: 30 },
            { name: "MongoDB", level: 50 },
            { name: "TensorFlow", level: 20 },
            { name: "OpenCV", level: 20 },
            { name: "Streamlit", level: 30 },
            { name: "NumPy", level: 20 },
            { name: "AWS", level: 40 },
            { name: "Firebase", level: 60 },
            { name: "Supabase", level: 60 },
            { name: "REST API", level: 50 },
            { name: "Cursor AI", level: 70 },
            { name: "Git", level: 80 },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card p-6 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-8 translate-x-8 opacity-30"></div>
              <h3 className="font-semibold mb-3 relative z-10">{skill.name}</h3>
              <div className="w-full bg-monochrome-200 dark:bg-monochrome-700 rounded-full h-3 relative z-10">
                <div
                  className="bg-gradient-to-r from-monochrome-800 to-monochrome-600 h-3 rounded-full transition-all duration-1000 shadow-sm"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-monochrome-500 mt-2 relative z-10">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
