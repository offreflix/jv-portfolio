import { skillsData } from '../data';
import { SkillBarMap } from './index';

function SkillBar() {
  return (
    <div className="skillsContainer">
      <div className="skill-bars">
        {skillsData.map((skill) => (
          <SkillBarMap key={skill.name} skillData={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillBar;
