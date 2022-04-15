import React from 'react';
import Container from 'react-bootstrap/Container';
import TimelineContent from './TimelineContent';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Timeline = () => {
  return (
    <div className="timeline">
      <h2 className="timeline-text">A Brief Timeline</h2>
      <Container className="timeline-container">
        <Row className="timeline-container__row-five">
          <Col
            className="timeline-container__row-one--col"
            lg={{ span: 3, offset: 9 }}
          >
            <TimelineContent
              title="UBS"
              role="Software Engineer"
              dates="August 2020 - Present"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-one">
          <Col
            className="timeline-container__row-one--col"
            lg={{ span: 2, offset: 6 }}
          >
            <TimelineContent
              title="UBS"
              role="SWE Intern"
              dates="Summer 2019"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-two">
          <Col
            className="timeline-container__row-two--col"
            lg={{ span: 2, offset: 4 }}
          >
            <TimelineContent
              title="Cogni"
              role="Web Dev. Intern"
              dates="Summer 2018"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-three">
          <Col
            className="timeline-container__row-three--col"
            lg={{ span: 6, offset: 3 }}
          >
            <TimelineContent
              title="Cornell University"
              role="Student (Information Science)"
              dates="Fall 2017 - Spring 2020"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-four">
          <Col className="timeline-container__row-four--col" lg={{ span: 3 }}>
            <TimelineContent
              title="Queens College"
              role="Student (Undeclared)"
              dates="Fall 2016 - Spring 2017"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Timeline;
