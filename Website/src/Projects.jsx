import React from "react";
import "./scss/Projects.scss";
import ProjectsData from "./ProjectsData"; // Import the combined data file

const ProjectTile = ({ project }) => {
  return (
    <div className="projects-frame">
      <div className="projects-image">
        <span className="projects-image-right-info">{project.year}</span>
        <span className="projects-image-left-info">
          {/* {project.tech.map((tech, index) => (
            <span key={index}>
              {tech}
              <br />
            </span>
          ))} */}
        </span>
        <img src={project.image} alt={project.projectName} />
      </div>
      <div className="projects-info">
        <div className="projects-info-links">
          <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
            <img src="/github-icon-1.svg" alt="github" />
          </a>
          <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <img src="/code.svg" alt="demo" />
          </a>
        </div>
        <h4>{project.projectName}</h4>
      </div>
    </div>
  );
};

const ProjectLine = ({ project }) => {
  return (
    <div className="all-frame">
      <div className="all-frame-left">
        <img src="/Arrow.svg" alt="arrow" />
        <h6>{project.year}</h6>
        <span>{project.projectName}</span>
        <h5>{project.tech.join(", ")}</h5>
      </div>
      <div className="all-frame-right"></div>
      <div className="projects-info-links">
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          <img src="/code.svg" alt="demo" />
        </a>
        <a href={project.ghLink} target="_blank" rel="noopener noreferrer">
          <img src="/github-icon-1.svg" alt="github" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {ProjectsData.projectTileData.map((project, index) => (
          <ProjectTile key={index} project={project} />
        ))}
      </div>
      <h2 className="all">Everything Else</h2>
      <div className="all-container">
        {ProjectsData.projectLineData.map((project, index) => (
          <ProjectLine key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
