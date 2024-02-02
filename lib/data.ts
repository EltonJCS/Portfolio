import projectModimisa from "../public/images/project-Modimisa.jpg";
import projectMyLinks from "../public/images/project-MyLinks.jpg";
import projectJavaRestAPI from "../public/images/project-java_restAPI.jpg";

export const links = [
  {
    name: "Início",
    hash: "#início",
  },
  {
    name: "Sobre",
    hash: "#sobre",
  },
  {
    name: "Projetos",
    hash: "#projetos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiência",
    hash: "#experiência",
  },
  {
    name: "Contato",
    hash: "#contato",
  },
] as const;

export const projectsData = [
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
    tags: ["JavaScript", "CSS", "HTML"],
    imageURL: projectMyLinks,
    demo: "https://eltonjcs.github.io/MyLinks",
    repository: "https://github.com/EltonJCS/MyLinks",
  },
  {
    title: "java_restAPI",
    description:
      "API REST em Java com funcionalidades de CRUD, utilizando o microframework Spark.",
    tags: ["Java", "Spark"],
    imageURL: projectJavaRestAPI,
    demo: "",
    repository: "https://github.com/EltonJCS/java_restAPI_clientCRUD",
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind",
  "Node.js",
  "MySQL",
  "Styled Components",
  "CSS",
  "HTML",
  "Git/Github",
  "Figma",
  "Framer Motion",
] as const;
