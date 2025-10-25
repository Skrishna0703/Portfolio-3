"use client";

import { motion } from "framer-motion";
import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
 
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

const skillCategories = [
  { title: "All Skills", data: SKILL_DATA },
  { title: "Frontend", data: FRONTEND_SKILL },
  { title: "Backend", data: BACKEND_SKILL },
  
  { title: "Other", data: OTHER_SKILL },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center py-20 gap-10 overflow-hidden"
    >
      {/* Section Title */}
      <SkillText />

      {/* Skill Categories */}
      {skillCategories.map((category) => (
        <div
          key={category.title}
          className="flex flex-col items-center w-full mt-12 max-w-[1400px] mx-auto"
        >
          {/* Category Title */}
          <h2 className="text-3xl font-bold text-white tracking-wide mb-10">
            {category.title}
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 w-full px-4 justify-items-center">
            {category.data.map((skill, i) => (
              <motion.div
                key={skill.skill_name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-start
                           shadow-lg shadow-white/10 hover:scale-105 hover:-translate-y-2 hover:border-white/30
                           transition-transform duration-300 backdrop-blur-xl group cursor-pointer min-h-[300px]"
              >
                {/* Skill Icon */}
                <div className="relative w-20 h-20 mb-6">
                  <SkillDataProvider
                    src={skill.image}
                    name={skill.skill_name}
                    width={80}
                    height={80}
                    index={i}
                  />
                </div>

                {/* Skill Name */}
                <p className="text-lg font-semibold text-white/90 group-hover:text-white text-center mb-3">
                  {skill.skill_name}
                </p>

                {/* Skill Description */}
                <p className="text-sm text-gray-300 text-center leading-snug opacity-80 group-hover:opacity-100 line-clamp-3">
                  {skill.description || "Technology Skill"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Background Video */}
      <div className="absolute inset-0 z-[-10] opacity-30 pointer-events-none">
        <video
          className="w-full h-full"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
