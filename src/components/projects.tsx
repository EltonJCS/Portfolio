import { Fragment } from "react";

import projectModimisa from "../../public/images/project-Modimisa.jpg";
import projectMyLinks from "../../public/images/project-MyLinks.jpg";
import projectJavaRestAPI from "../../public/images/project-java_restAPI.jpg";

import SectionHeading from "./section-heading";
import Project from "./project";

const projectsData = [
  {
    title: "Modimisa",
    description:
      "Site que possibilita a customização de uma camisa com visualização em 3D.",
    tags: [
      "React",
      "Tailwind",
      "Three.js",
      "Framer Motion",
      "Valtio",
      "React Color",
    ],
    imageURL: projectModimisa,
    demo: "https://eltonjcs.github.io/modimisa",
    repository: "https://github.com/EltonJCS/modimisa",
  },
  {
    title: "MyLinks",
    description:
      "Site agregador de links que permite o compartilhamento de redes sociais, sites e outros links importantes em um único lugar.",
    tags: ["Java", "Spark"],
    imageURL: projectMyLinks,
    demo: "https://eltonjcs.github.io/MyLinks",
    repository: "https://github.com/EltonJCS/MyLinks",
  },
  {
    title: "java_restAPI",
    description:
      "API REST em Java com funcionalidades de CRUD, utilizando o microframework Spark.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageURL: projectJavaRestAPI,
    demo: "",
    repository: "https://github.com/EltonJCS/java_restAPI_clientCRUD",
  },
] as const;

const Projects = () => {
  return (
    <section>
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
