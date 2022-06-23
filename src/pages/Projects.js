import React from 'react';
import ProjectInfo from '../components/ProjectInfo';
import { projects } from '../data/data';

function Projects() {
  return (
    <div className="Projects pages">
      <div className="container">
        {projects.map((project) => (
          <div className="project" onClick={() => {}}>
            <img src={project.image} alt={project.name} />
            <div className="details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul>
                {project.technologies.map((technology) => (
                  <li>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
