import styled from 'styled-components';

export const SkillBarContainer = styled.div`
  .progress-line.${(props) => props.skill} span {
    width: ${(props) => props.skillPercent};
  }
  .progress-line.${(props) => props.skill} span::after {
    content: '${(props) => props.skillPercent}';
  }
`;
