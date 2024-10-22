import React from "react";
import "./scss/Projects.scss";

const ProjectTile = () => {
  return (
    <div className="projects-frame">
      <div className="projects-image">
        <span class="projects-image-right-info">2023</span>
        <span class="projects-image-left-info">
          C <br />
          Unity <br />
          Blender <br />
        </span>
        <img src="/Realm-Rush.png" alt="project-1" />
      </div>
      <div className="projects-info">
        <div className="projects-info-links">
          <a href="https://github.com/Nailfighter" target="_blank">
            <img src="/github-icon-1.svg" alt="github" />
          </a>
          <a href="https://nailfighter.itch.io/realm-rush" target="_blank">
            <img src="/code.svg" alt="linkedin" />
          </a>
        </div>
        <h4>Realm Rush</h4>
      </div>
    </div>
  );
};

const ProjectLine = () => {
  return (
    <div className="all-frame">
      <div className="all-frame-left">
        <img src="/Arrow.svg" alt="arrow" />
        <h6>2023</h6>
        <span>SUBTOWORK</span>
        <h5>SELELIUM JAVASCRIPT HTML </h5>
      </div>
      <div className="all-frame-right"></div>
      <div className="projects-info-links">
        <a href="https://nailfighter.itch.io/realm-rush" target="_blank">
          <img src="/code.svg" alt="linkedin" />
        </a>
        <a href="https://github.com/Nailfighter" target="_blank">
          <img src="/github-icon-1.svg" alt="github" />
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
      <h2 className="all">Everything Else</h2>
      <div className="all-container">
        <ProjectLine />
      </div>
    </div>
  );
};

export default Projects;
