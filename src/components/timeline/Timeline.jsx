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
              role="Developer"
              dates="20 - Present"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-one">
          <Col
            className="timeline-container__row-one--col"
            lg={{ span: 2, offset: 6 }}
          >
            <TimelineContent title="UBS" role="Intern" dates="19" />
          </Col>
        </Row>
        <Row className="timeline-container__row-two">
          <Col
            className="timeline-container__row-two--col"
            lg={{ span: 2, offset: 4 }}
          >
            <TimelineContent title="Cogni" role="Intern" dates="18" />
          </Col>
        </Row>
        <Row className="timeline-container__row-three">
          <Col
            className="timeline-container__row-three--col"
            lg={{ span: 6, offset: 3 }}
          >
            <TimelineContent
              title="Cornell University"
              role="Student"
              dates="17-20"
            />
          </Col>
        </Row>
        <Row className="timeline-container__row-four">
          <Col className="timeline-container__row-four--col" lg={{ span: 3 }}>
            <TimelineContent
              title="Queens College"
              role="Student"
              dates="16-17"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Timeline;
