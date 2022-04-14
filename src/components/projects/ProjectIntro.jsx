import React from 'react';
import affinity from '../../images/affinity.png';
import affinityWhole from '../../images/affinity-whole.png';
import affinityBarriers from '../../images/affinity-barriers.png';
import affinityMotivations from '../../images/affinity-motivations.png';
import affinityMisc from '../../images/affinity-misc.png';
import personaCard from '../../images/persona.png';

const ProjectIntro = (props) => {
  const { context, interviews, problem, research, persona, app } =
    props.projectObj;

  const printMainProblems = () => {
    return (
      <>
        <ul>
          {problem.items.map((item, ind) => (
            <li className="project-intro__section-body" key={ind}>
              <b>{item[0]}</b> - {item[1]}
            </li>
          ))}
        </ul>
      </>
    );
  };

  const printResearchInsights = () => {
    return (
      <>
        <ul>
          {research.insights.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  const printKeyObstacles = () => {
    return (
      <>
        <ul>
          {app.obstacles.items.map((item, ind) => (
            <li key={ind}>{item}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="project-center">
      <div className="project-intro">
        <h2 className="project-intro__header">1. Understand 📖</h2>

        {/* Context Section */}
        <div className="project-intro__section">
          <h4 className="project-intro__section-title">Context</h4>
          <p className="project-intro__section-body">{context}</p>
        </div>

        {/* Information Gathering / Interview Section */}
        {interviews && (
          <>
            <div className="project-intro__section">
              <h4 className="project-intro__section-title">
                Information Gathering / Interview Process
              </h4>
              <p className="project-intro__section-body">
                {interviews.purpose}
              </p>
              <h5>Organizing Data</h5>
              <p className="project-intro__section-body">
                {interviews.process}
              </p>
            </div>
            <div className="project-intro__affinity">
              <img src={affinityBarriers} />
              <img src={affinityMotivations} />
              <img src={affinityMisc} />
            </div>
          </>
        )}

        {/* Problem Section */}
        <div className="project-intro__section">
          <h4 className="project-intro__section-title">Problem</h4>
          <p className="project-intro__section-body">{problem.body}</p>
          {printMainProblems()}
          <h5>Final Problem Statement: </h5>
          <p className="project-intro__section-body">{problem.statement}</p>
        </div>

        {/* Research Section */}
        {research && (
          <div className="project-intro__section">
            <h4 className="project-intro__section-title">Market Research</h4>
            <p className="project-intro__section-body">{research.body}</p>
            <div className="project-intro__section-body">
              <h6>Main Insights / UI Inspiration:</h6>
              {printResearchInsights()}
            </div>
          </div>
        )}

        {/* Persona Section */}
        {persona && (
          <div className="project-intro__section">
            <h4 className="project-intro__section-title">Persona</h4>
            <img className="project-intro__persona" src={personaCard} />
          </div>
        )}

        {/* App Section */}
        <div className="project-intro__section">
          <h4 className="project-intro__section-title margin-bottom-20">
            The App
          </h4>
          <div className="project-intro__section-body">
            <h6>Approach</h6>
            <p>{app.approach}</p>
            <h6>Behavior trying to influence</h6>
            <p>{app.behaviors}</p>
            <h6>Obstacles to target behavior</h6>
            <p className="margin-bottom-0">{app.obstacles.body}</p>
            {printKeyObstacles()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntro;
