import React from 'react';
import { useTranslation } from 'react-i18next';
import { skillsData } from '../data';
import { SkillBar } from '../components/index';

function Skills() {
  const { t } = useTranslation();

  const sections = [
    {
      className: 'frontEnd',
      title: 'Frontend',
      desc: t('skills.frontend.desc'),
      techs: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SASS', 'Tailwind CSS', 'GraphQL'],
    },
    {
      className: 'backEnd',
      title: 'Backend',
      desc: t('skills.backend.desc'),
      techs: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'MySQL', 'GraphQL'],
    },
    {
      className: 'aiia',
      title: 'IA & LLMs',
      desc: t('skills.ai.desc'),
      techs: ['Azure OpenAI', 'LangChain', 'RAG', 'MCP', 'LLM Agents', 'Pinecone', 'Weaviate', 'Python'],
    },
    {
      className: 'devops',
      title: 'DevOps & Cloud',
      desc: t('skills.devops.desc'),
      techs: ['Docker', 'Kubernetes', 'Azure', 'Git', 'CI/CD', 'Linux'],
    },
  ];

  return (
    <div className="Skills pages">
      <h1>{t('Habilidades')}</h1>
      <p className="skillsSubtitle">
        {t('Tecnologias e ferramentas que uso no dia a dia')}
      </p>
      <div className="main">
        <div className="techsContainer">
          {sections.map((s) => (
            <div key={s.className} className={`${s.className} techs`}>
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <h3>{t('Tecnologias/Linguagens')}</h3>
              <ul>
                {s.techs.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bottom">
          <SkillBar skills={skillsData} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
