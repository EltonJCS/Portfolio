"use client";
import { Fragment } from "react";

import { projectsData } from "../../lib/data";

import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "../../lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projetos", 0.4);

  return (
    <section ref={ref} id="projetos" className="mb-28 scroll-mt-28">
      <SectionHeading title={"Meus projetos"} />
      <div>
        {projectsData.map((project, index) => (
          <Fragment key={index}>
            <Project {...project} />
          </Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
