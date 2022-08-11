import { skillsData } from '../data';
import { SkillBarMap } from './index';

function SkillBar() {
  console.log(skillsData);
  return (
    <div className="skillsContainer">
      <div class="skill-bars">
        {skillsData.map((skill) => (
          <SkillBarMap skillData={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillBar;
