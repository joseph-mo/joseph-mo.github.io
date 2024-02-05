import React from 'react';
import TimelineContent from './TimelineContent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Timeline = () => {
  return (
    <div className="timeline">
      <h2 className="timeline-text">A Brief Timeline</h2>
      <div className="timeline-container">
        <Row className="timeline-container__row-six">
          <Col className="timeline-container__row-six--col">
            <TimelineContent
              title="Level"
              role="Frontend Engineer"
              dates="Aug 2022 - Present"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-five">
          <Col className="timeline-container__row-five--col">
            <TimelineContent
              title="UBS"
              role="Frontend Engineer"
              dates="Aug 2020 - Aug 2022"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-four">
          <Col className="timeline-container__row-four--col">
            <TimelineContent
              title="UBS"
              role="Software Engineering Intern"
              dates="Jun 2019 - Aug 2019"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-three">
          <Col className="timeline-container__row-three--col">
            <TimelineContent
              title="Cogni"
              role="Web Development Intern"
              dates="Jun 2018 - Aug 2018"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-two">
          <Col className="timeline-container__row-two--col">
            <TimelineContent
              title="Cornell University"
              role="Student (Information Science)"
              dates="Fall 2017 - Spring 2020"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-one">
          <Col className="timeline-container__row-one--col">
            <TimelineContent
              title="Queens College"
              role="Student"
              dates="Fall 2016 - Spring 2017"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Timeline;
