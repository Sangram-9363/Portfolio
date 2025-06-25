import React from "react";
import ProjextText from "./ProjextText";
import SingleProject from "./SingleProject";
import { projects } from "../../data/Data";

const ProjectsMain = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <div>
        <ProjextText />
      </div>
      <div
        id="projects"
        className=" flex flex-col gap-20 max-w-[900px] mx-auto mt-12"
      >
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              align={project.align}
              image={project.image}
              tech={project.tech}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
