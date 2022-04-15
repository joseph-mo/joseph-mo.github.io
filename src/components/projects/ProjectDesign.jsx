import React from 'react';
import mockup from '../../images/mockup-placeholder.png';
import wireframeOne from '../../images/wireframe1_big.png';
import wireframeTwo from '../../images/wireframe2.png';
import habitFlow from '../../images/habits_flow.JPG';
import progressFlow from '../../images/progress_flow.JPG';
import goalsFlow from '../../images/goals_flow.JPG';
import reflectionsFlow from '../../images/reflections_flow.JPG';

const ProjectDesign = (props) => {
  const { projectName, sketching, wireframes, mockups } = props.projectObj;

  return (
    // <div className="project-center">
    <div className="project-design">
      <h2 className="project-design__header">2. Design ✏️</h2>

      {/* Sketching Section */}
      <div className="project-design__section">
        <h4 className="project-design__section-title">Sketching</h4>
        <p className="project-design__section-body">
          <u>Process:</u> {sketching.body}
        </p>
      </div>

      {/* Sketch Images */}
      {sketching && projectName === 'awareOfMe' && (
        <div className="project-design__sketches">
          <div className="project-design__sketches-row">
            <img
              className="project-design__sketches-img"
              src={habitFlow}
              alt="Habits Flow"
            />
            <img
              className="project-design__sketches-img"
              src={progressFlow}
              alt="Habits Flow"
            />
          </div>
          <div className="project-design__sketches-row">
            <img
              className="project-design__sketches-img"
              src={goalsFlow}
              alt="Habits Flow"
            />
            <img
              className="project-design__sketches-img"
              src={reflectionsFlow}
              alt="Habits Flow"
            />
          </div>
          <h6 className="project-design__sketches-img--caption">
            ☝️ Initial sketches & flows of the four main sections to be included
          </h6>
        </div>
      )}

      {/* Wireframing Section */}
      <div className="project-design__section">
        <h4 className="project-design__section-title">Wireframes</h4>
        <p className="project-design__section-body">{wireframes.body}</p>
      </div>

      {/* Wireframe Images */}
      {wireframes && projectName === 'Market Buddy' && (
        <div className="project-design__wireframes">
          <div className="project-design__wireframes-row">
            <img
              src={wireframeOne}
              className="project-design__wireframes-img"
            />
            <span className="project-design__wireframes-img--caption">
              ☝️ Finalized wireframe of flow between all screens
            </span>
          </div>
          <div className="project-design__wireframes-row">
            <img
              src={wireframeTwo}
              className="project-design__wireframes-img"
            />
            <span className="project-design__wireframes-img--caption">
              ☝️ Finalized wireframe of all pop-up notifications
            </span>
          </div>
        </div>
      )}

      {/* Mockups Section */}
      {mockups && (
        <div className="project-design__section">
          <h4 className="project-design__section-title">Mockups</h4>
          <p className="project-design__section-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            nunc sed blandit libero volutpat sed cras ornare arcu. Nisi porta
            lorem mollis aliquam ut porttitor leo a. Scelerisque eleifend donec
            pretium vulputate sapien nec sagittis. Est velit egestas dui id
            ornare arcu. Tortor aliquam nulla facilisi cras fermentum.
          </p>
        </div>
      )}

      {/* Mockup Images */}
      {mockups && (
        <div className="project-design__mockups">
          <div className="project-design__mockups-row">
            <img src={mockup} className="project-design__mockups-img" />
          </div>
          <div className="project-design__mockups-row">
            <img src={mockup} className="project-design__mockups-img" />
          </div>
        </div>
      )}
    </div>
    // </div>
  );
};

export default ProjectDesign;
