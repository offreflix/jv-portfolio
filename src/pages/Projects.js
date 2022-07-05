import React, { useState } from 'react';
import ProjectInfo from '../components/ProjectInfo';
import { useStateContext } from '../context/ContextProvider';
import { projects } from '../data';

function Projects() {
  const [currentProject, setCurrentProject] = useState([]);
  const { showProjectFunction, showProject } = useStateContext();

  return (
    <>
      <div className="Projects pages">
        <h2>Projetos</h2>
        <div className="container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project"
              onClick={() => {
                setCurrentProject(project);
                showProjectFunction(true);
              }}
            >
              <img src={project.image} alt={project.name} />

              <div className="details">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.technologies.map((technology, index) => (
                    <li key={index}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {showProject && <ProjectInfo project={currentProject} />}
        </div>
      </div>
      {showProject && (
        <div
          className="backgroundProjectInfo"
          onClick={() => showProjectFunction(false)}
        />
      )}
    </>
  );
}

export default Projects;
