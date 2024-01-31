import React from 'react';

const TimelineContent = (props) => {
  return (
    <div className="timeline-content">
      <div className="timeline-content__title">{props.title}</div>
      <div className="timeline-content__role">{props.role}</div>
      <div className="timeline-content__dates">{props.dates}</div>
    </div>
  );
};

export default TimelineContent;
