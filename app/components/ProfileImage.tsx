/** @format */

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* glassy background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-monochrome-200/30 to-monochrome-400/30 dark:from-monochrome-600/30 dark:to-monochrome-800/30 rounded-full blur-xl scale-110"></div>

      {/* main image container */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
        {/* glassy border */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/5 rounded-full border border-white/30 dark:border-white/20 backdrop-blur-sm"></div>

        {/* image */}
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image src={src} alt={alt} fill className="object-cover" priority />
        </div>

        {/* glowing effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-monochrome-400/20 to-transparent animate-pulse"></div>

        {/* decorative elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-monochrome-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-monochrome-300 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-1/2 -right-4 w-3 h-3 bg-monochrome-500 rounded-full opacity-50 animate-bounce-slow"></div>
      </div>

      {/* floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-2 h-2 bg-monochrome-400 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-10 right-10 w-1.5 h-1.5 bg-monochrome-300 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 5, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-monochrome-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}
