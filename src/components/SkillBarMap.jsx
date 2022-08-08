import { SkillBarContainer } from './SkillBarMap.styled';

function SkillBarMap({ skillData }) {
  return (
    <SkillBarContainer skill={skillData.name} skillPercent={skillData.percent}>
      <div class="bar">
        <div class="info">
          <span>{skillData.title}</span>
        </div>
        <div class={`progress-line ${skillData.name}`}>
          <span></span>
        </div>
      </div>
    </SkillBarContainer>
  );
}

export default SkillBarMap;
