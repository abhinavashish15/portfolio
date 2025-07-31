/** @format */

"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
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
            <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-monochrome-600 dark:text-monochrome-300">
              I'm always interested in new opportunities and exciting projects.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-card p-8 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-monochrome-100 to-transparent dark:from-monochrome-800 dark:to-transparent rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
          <p className="text-lg text-monochrome-600 dark:text-monochrome-300 mb-8 relative z-10">
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 relative z-10">
            <a
              href="mailto:abhinavashissh@gmail.com"
              className="btn-primary flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6 relative z-10">
            <a
              href="https://github.com/abhinavashish15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-monochrome-400 hover:text-monochrome-900 transition-colors hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/abhinavashish15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-monochrome-400 hover:text-monochrome-900 transition-colors hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/naval1511"
              target="_blank"
              rel="noopener noreferrer"
              className="text-monochrome-400 hover:text-monochrome-900 transition-colors hover:scale-110"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
