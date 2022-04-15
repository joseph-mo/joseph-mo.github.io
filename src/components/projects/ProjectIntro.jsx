import React from 'react';
import affinity from '../../images/affinity.png';
import affinityWhole from '../../images/affinity-whole.png';
import affinityBarriers from '../../images/affinity-barriers.png';
import affinityMotivations from '../../images/affinity-motivations.png';
import affinityMisc from '../../images/affinity-misc.png';
import personaCard from '../../images/persona.png';

const ProjectIntro = (props) => {
  const { projectName, context, interviews, problem, research, persona, app } =
    props.projectObj;

  const printMainProblems = () => {
    return (
      <>
        <ol>
          {problem.items.map((item, ind) => (
            <li className="project-intro__section-body" key={ind}>
              <u>{item[0]}</u> - {item[1]}
            </li>
          ))}
        </ol>
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
          {projectName === 'awareOfMe' ? (
            <p className="project-intro__section-body">
              Based off the above four issues, the problem I decided to address
              was the{' '}
              <b>
                lack of awareness and inexperience with regards to habit
                tracking, goal setting and continuous reflection.
              </b>
            </p>
          ) : projectName === 'Market Buddy' ? (
            <p className="project-intro__section-body">
              Initially, we set out to build an app focused solely on helping
              community members physically travel to the Farmers Market.
              However, after re-visiting our interviews, we realized that the
              underlying problem was not transportation. Instead, it was lack of
              motivation. We concluded that those who made it to the market must
              have had some intrinsic motivations to overcome the barriers of
              traveling there. Hence, the problem we decided to address was the{' '}
              <b>
                lack of motivation users experienced relative to their
                willingness to attend the Farmers Market.
              </b>
            </p>
          ) : (
            <p className="project-intro__section-body">{problem.statement}</p>
          )}
        </div>

        {/* Research Section */}
        {research && (
          <div className="project-intro__section">
            <h4 className="project-intro__section-title">Market Research</h4>
            <p className="project-intro__section-body">{research.body}</p>
            <div className="project-intro__section-body">
              <h6 className="text-decoration-underline">
                Main Insights / UI Inspiration:
              </h6>
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
            <h6 className="text-decoration-underline">Approach:</h6>
            <p>{app.approach}</p>
            <h6 className="text-decoration-underline">
              Behavior trying to influence:
            </h6>
            <p>{app.behaviors}</p>
            <h6 className="text-decoration-underline">
              Obstacles to target behavior:
            </h6>
            <p className="margin-bottom-0">{app.obstacles.body}</p>
            {printKeyObstacles()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectIntro;
