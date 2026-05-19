import React, { useState, useEffect } from 'react';
import ProjectInfo from '../components/ProjectInfo';
import { useStateContext } from '../context/ContextProvider';
import { projects } from '../data';

import { useTranslation } from 'react-i18next';

function Projects() {
  const [currentProject, setCurrentProject] = useState(null);
  const { showProjectFunction, showProject } = useStateContext();

  useEffect(() => {
    return () => showProjectFunction(false);
  }, []);

  const { t } = useTranslation();

  return (
    <>
      <div className="Projects pages">
        <h2>{t('projects.title')}</h2>
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
              <img src={project.image} alt={project.name} onError={(e) => { e.target.style.opacity = '0' }} />
              {localStorage.getItem('lng') === 'pt' ? (
                <div className="details">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.technologies.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="details">
                  <h3>{project.name}</h3>
                  <p>{project.english.description}</p>
                  <ul>
                    {project.technologies.map((technology, index) => (
                      <li key={index}>{technology}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          {showProject && currentProject && <ProjectInfo project={currentProject} />}
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
