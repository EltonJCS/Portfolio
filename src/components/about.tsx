"use client";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <SectionHeading title="Sobre Mim" />
      <p className="mb-3">
        Graduado em Ciência da Computação e atuando como desenvolvedor
        front-end.
      </p>
      <blockquote>
        Criar, depurar, centralizar, ler documentação, procurar soluções e
        resolver problemas. Tudo vale a pena quando nossos objetivos são
        alcançados.
      </blockquote>
    </motion.section>
  );
};
export default About;
