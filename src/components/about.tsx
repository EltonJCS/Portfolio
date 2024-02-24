"use client";
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { use3DHoverEffect, useSectionInView } from "../../lib/hooks";

const About = () => {
  const { ref } = useSectionInView("Sobre");
  const { handleMouseMove, handleMouseLeave, handleMouseEnter } =
    use3DHoverEffect(10);

  return (
    <motion.section
      ref={ref}
      id="sobre"
      className="max-w-[40rem] scroll-mt-28 text-center leading-8 antialiased [perspective:400px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <SectionHeading title="Sobre Mim" />
      <div
        className="rounded-md bg-slate-400/10 p-2 shadow-[0_0_0_4px_rgba(255,255,255,0.2),0_0_8px_rgba(0,0,0,0.5)_inset] transition-all hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))] dark:bg-slate-900 dark:shadow-[0_0_0_4px_rgba(0,0,0,0.5),0_0_16px_rgba(255,255,255,0.2)]"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <p className="mb-3 antialiased drop-shadow-[0_0_1px_rgba(255,255,255,0.4)]">
          <b>Desenvolvedor front-end</b> e graduado em Ciência da Computação.
          <br className="mb-1" /> Tenho maior conhecimento em desenvolvimento
          web com <b>React</b>, <b>Typescript</b>, <b>Tailwind</b> e{" "}
          <b>Next.js</b>.
          <br className="mb-1" /> Apesar de trilhar um caminho voltado para
          front-end eu possuo conhecimento em back-end e posso participar em
          projetos como desenvolvedor <b>full-stack</b>. <br className="mb-1" />
          <b>Acredito</b> que é possível ser um bom profissional em qualquer
          área quando a procura de melhora é acompanhada de bom julgamento.
          <br className="mb-1" />
          <b>Me mantenho atualizado</b> por meio de vários canais de informação
          como: newsletters (emails), sites de notícias, YouTube, etc.
          <br className="mb-1" />
          Planejar, criar, testar, procurar soluções e resolver problemas. Tudo
          vale a pena quando nossos <b>objetivos são alcançados</b>.
        </p>
      </div>
    </motion.section>
  );
};
export default About;
