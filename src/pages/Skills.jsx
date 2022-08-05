import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SkillBar2 = styled.div`
  .skillsArea {
    display: flex;
    flex-direction: column;
    // padding: 0 20%;

    @media only screen and (max-width: 750px) {
      // padding: 0 5%;
    }

    .skill {
      position: relative;
      margin-bottom: 40px;

      .skillTitle {
        font-size: 40px;
        margin-bottom: 10px;
      }

      .skillBar {
        width: 100%;
        background-color: red;
        height: 40px;
        border-radius: 100px;
        /* position: absolute; */
        /* z-index: 1; */
      }

      .skillFill {
        background-color: blue;
        height: 40px;
        /* border-radius: 100px; */
        /* display: flex; */
        /* justify-content: flex-end; */
        /* align-items: center; */
        // padding-right: 30px;
        /* overflow: hidden; */
        float: right;

        .skillPercent {
          font-size: 30px;
        }
      }

      .frontend {
        animation: frontend 2s;
        width: 90%;
      }

      .backend {
        animation: backend 2s;
        width: 60%;
      }

      .fullstack {
        animation: fullstack 2s;
        width: 70%;
      }

      @keyframes frontend {
        from {
          width: 0;
        }

        to {
          width: 90%;
        }
      }

      @keyframes backend {
        from {
          width: 0;
        }

        to {
          width: 60%;
        }
      }

      @keyframes fullstack {
        from {
          width: 0;
        }

        to {
          width: 70%;
        }
      }
    }

    h1 {
      text-align: center;
      margin-top: 40px;
      font-size: 80px;
    }
  }
`;

function SkillBar({ skillTitle, skillPercent, skill }) {
  return (
    <div className="skillsArea">
      <div className="skill">
        <div className="skillTitle">{skillTitle}</div>
        <div className="skillBar">
          <div className={`${skill} skillFill`}>
            <div className="skillPercent">{skillPercent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const { t } = useTranslation();
  return (
    <div className="Skills pages">
      <h1>{t('Habilidades')}</h1>
      <div className="main">
        <div className="test">
          <h2>Frontend</h2>
          <p>
            Adoro o Frontend, eu gosto de criar códigos do zero, e transformar
            Designs em coisas funcionais.
          </p>
        </div>
        <div className="skillsContainer">
          <div class="skill-bars">
            <div class="bar">
              <div class="info">
                <span>HTML</span>
              </div>
              <div class="progress-line html">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>CSS</span>
              </div>
              <div class="progress-line css">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>jQuery</span>
              </div>
              <div class="progress-line jquery">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>Python</span>
              </div>
              <div class="progress-line python">
                <span></span>
              </div>
            </div>
            <div class="bar">
              <div class="info">
                <span>MySQL</span>
              </div>
              <div class="progress-line mysql">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
