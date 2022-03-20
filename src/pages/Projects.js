import React from "react";
import { details } from "../portfolio";
import Project from "./Project/Project";
import Fade from "react-reveal/Fade";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="project-title">
        <Fade bottom cascade>
          Projects
        </Fade>
      </h1>
      {details.map((prj) => (
        <Project
          key={prj.id}
          title={prj.title}
          desc={prj.desc}
          desc1={prj.desc1}
          img={prj.img}
          link={prj.link}
          github={prj.github}
          deploy={prj.deploy}
          techStack={prj.techStack}
        />
      ))}
    </section>
  );
};

export default Projects;
