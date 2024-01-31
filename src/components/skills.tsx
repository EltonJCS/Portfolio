"use client";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";

import { skillsData } from "../../lib/data";

import SectionHeading from "./section-heading";

const Skills = () => {
  const { ref } = useSectionInView("Habilidades", 1);

  return (
    <section
      ref={ref}
      id="habilidades"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading title="Minhas Habilidades" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-slate-900">
        {skillsData.map((skill, index) => (
          <motion.li
            className="cursor-default select-all rounded-xl border border-black/10 bg-slate-100 px-5 py-3 shadow-[-1px_-1px_1px_rgba(0,0,0,0.4)_inset] hover:bg-slate-300 dark:bg-slate-800 dark:text-slate-200 dark:shadow-[1px_1px_1px_rgba(255,255,255,0.4)_inset] dark:hover:bg-slate-900"
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
