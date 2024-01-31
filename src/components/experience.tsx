"use client";
import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { useSectionInView } from "../../lib/hooks";
import SectionHeading from "./section-heading";

import iconGraduation from "../../public/icons/graduation.jsx";
import iconWork from "../../public/icons/work.jsx";

const experiencesData = [
  {
    title: "Desenvolvedor Front-end",
    location: "InovaTechJr",
    description:
      "Atuei como desenvolvedor front-end em uma empresa júnior utilizando tecnologias como React, JavaScript, PHP, MySQL, Git/Github, HTML, CSS e Figma.",
    icon: React.createElement(iconWork),
    date: "2021 - 2023",
  },
  {
    title: "Bacharel em Ciência da Computação",
    location: "FACAPE",
    description:
      "Conclui o curso de Ciência da Computação onde ganhei conhecimento em: algoritmos, estrutura de dados, POO, banco de dados, lógica para computação, sistemas operacionais, compiladores, redes, programação funcional teoria dos grafos, IHC, engenharia de software, sistemas distribuídos, etc.",
    icon: React.createElement(iconGraduation),
    date: "2019 - 2023",
  },
] as const;

const Experience = () => {
  const { ref } = useSectionInView("Experiência", 0.6);

  return (
    <section ref={ref} id="experiência" className="mb-28 scroll-mt-28 sm:mb-40">
      <SectionHeading title="Experiência" />
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <Fragment key={index}>
            <VerticalTimelineElement
              className="group"
              visible={true}
              contentStyle={{
                background: "#f1f5f9",
                boxShadow: "none",
                border: "1px solid rgba(71, 85, 105,0.25)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #475569",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
              }}
            >
              <h3 className="rounded-md bg-gradient-to-r from-slate-600 to-transparent p-2 font-semibold capitalize text-white drop-shadow-lg group-odd:xl:bg-gradient-to-l group-odd:xl:text-right">
                {item.title}
              </h3>
              <p className="!my-1 text-center font-normal text-slate-500">
                {item.location}
              </p>
              <p className="!mt-1 rounded-md  bg-gradient-to-t  from-transparent to-slate-300/20 p-2 !font-normal text-slate-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
