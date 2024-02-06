"use client";
import { useRef } from "react";
import { motion } from "framer-motion";

import { skillsData } from "../../lib/data";
import { useSectionInView } from "../../lib/hooks";
import { use3DHoverEffect } from "../../lib/hooks";

import SectionHeading from "./section-heading";

const Skills = () => {
  const { ref } = useSectionInView("Habilidades", 1);
  const { handleMouseMove, handleMouseLeave, handleMouseEnter } =
    use3DHoverEffect(50);

  return (
    <section
      ref={ref}
      id="habilidades"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center"
    >
      <SectionHeading title="Minhas Habilidades" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-900 [perspective:800px] sm:mb-40">
        {skillsData.map((skill, index) => (
          <motion.li
            className="group relative cursor-default select-all rounded-xl border border-black/10 bg-slate-100 px-5 py-3 shadow-[-1px_-1px_1px_rgba(0,0,0,0.4)_inset] transition-transform ease-out hover:bg-slate-300 hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.2)] dark:bg-slate-800 dark:text-slate-200 dark:shadow-[1px_1px_1px_rgba(255,255,255,0.4)_inset] dark:hover:bg-slate-950"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.05 * index }}
          >
            {skill}
            <div className="pointer-events-none absolute inset-0 rounded-xl group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.1)_5%,transparent_80%)]" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
