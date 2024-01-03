"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import SectionHeading from "./section-heading";
import { useActiveSectionContext } from "../../context/active-section-context";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Sobre");
    }
  }, [inView, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      id="sobre"
      className="mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <SectionHeading title="Sobre Mim" />
      <p className="mb-3">
        Graduado em Ciência da Computação e atuando como desenvolvedor
        front-end.
        <br /> Criar, depurar, centralizar, ler documentação, procurar soluções
        e resolver problemas. Tudo vale a pena quando nossos objetivos são
        alcançados.
      </p>
    </motion.section>
  );
};
export default About;
