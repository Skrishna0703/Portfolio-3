"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 mt-16 md:mt-40 w-full z-[20] gap-10"
    >
      {/* Left Content */}
      <div className="w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start">
        {/* Role Boxes / Taglines */}
        <motion.div
          variants={slideInFromTop}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2 mx-auto md:mx-0"
        >
          <div className="flex items-center gap-2 py-[6px] px-4 border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit">
            <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            <span className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
              Full-Stack Developer
            </span>
          </div>
          <div className="flex items-center gap-2 py-[6px] px-4 border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit">
            <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            <span className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
              Open Source Contributor
            </span>
          </div>
          <div className="flex items-center gap-2 py-[6px] px-4 border border-[#7042f88b] opacity-[0.9] rounded-lg max-w-fit">
            <SparklesIcon className="text-[#b49bff] h-4 w-4 md:h-5 md:w-5" />
            <span className="text-[12px] md:text-[13px] text-gray-200 font-semibold">
              AI & Web App Projects
            </span>
          </div>
        </motion.div>

        {/* Hero Heading */}
        <motion.h1
          variants={slideInFromLeft(0.5)}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-[600px] leading-tight"
        >
          Transforming{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Ideas
          </span>{" "}
          into Seamless User{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-3 sm:my-4 max-w-[500px] md:max-w-[600px] mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer specializing in building modern web applications.  
          I create responsive, scalable, and user-friendly interfaces using the latest web technologies.  
          Explore my projects, skills, and innovative solutions to see how I transform ideas into reality.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 mx-auto md:mx-0">
          {/* Learn More Button */}
          <motion.a
            variants={slideInFromLeft(1)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(125,67,255,0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="#projects"
            className="py-4 px-5 sm:px-6 bg-transparent border-[#7D43FF] border-2 text-white text-base sm:text-base font-medium rounded-full shadow-lg min-w-[110px] sm:min-w-[180px] flex items-center justify-center"
          >
            Learn more
          </motion.a>

          {/* Download Resume Button */}
          <motion.a
            variants={slideInFromLeft(1.1)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(125,67,255,0.6)" }}
            transition={{ type: "spring", stiffness: 300 }}
            href="/public/Shrikrishna Resume Updated.pdf" // Replace with your resume file path
            download
            className="py-4 px-5 sm:px-6 bg-[#7D43FF] text-white text-base sm:text-base font-medium rounded-full shadow-lg min-w-[110px] sm:min-w-[180px] flex items-center justify-center"
          >
            Download Resume
          </motion.a>
        </div>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-8 md:mt-0"
      >
        <div className="relative w-full max-w-[500px] h-[500px] sm:h-[450px] md:h-[500px]">
          <Image
            src="/hero-bg.svg"
            alt="Illustration of web development concepts"
            fill
            className="object-contain select-none drop-shadow-lg"
            draggable={false}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
