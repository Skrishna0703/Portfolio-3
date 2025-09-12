"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center text-center px-4">
      {/* Top badge */}
      <motion.div
        variants={slideInFromTop}
        className="flex items-center justify-center px-5 py-2 border border-[#7042f88b] bg-[#0d1b2a]/70 backdrop-blur-md rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5 animate-pulse" />
        <h1 className="text-[14px] text-white font-medium tracking-wide">
          Think better with Next.js 14
        </h1>
      </motion.div>

      {/* Heading */}
      <motion.h2
        variants={slideInFromLeft(0.5)}
        className="text-[28px] md:text-[36px] lg:text-[42px] text-white font-bold mt-6 leading-snug drop-shadow-lg"
      >
        Making apps with <span className="text-[#b49bff]">modern technologies</span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        variants={slideInFromRight(0.5)}
        className="italic text-[16px] md:text-[18px] lg:text-[20px] text-gray-300 mt-4 max-w-2xl leading-relaxed"
      >
        Never miss a task, deadline, or idea — build smarter and faster.
      </motion.p>
    </div>
  );
};
