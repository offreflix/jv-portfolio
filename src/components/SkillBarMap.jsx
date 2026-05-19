import { SkillBarContainer } from './SkillBarMap.styled';

function SkillBarMap({ skillData }) {
  return (
    <SkillBarContainer skill={skillData.name} skillPercent={skillData.percent}>
      <div className="bar">
        <div className="info">
          <span>{skillData.title}</span>
        </div>
        <div className={`progress-line ${skillData.name}`}>
          <span></span>
        </div>
      </div>
    </SkillBarContainer>
  );
}

export default SkillBarMap;
