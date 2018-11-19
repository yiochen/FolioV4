import React from 'react';
import TimelineItem, { TimelineAttribute } from './TimelineItem';
import CompanyTitle from './CompanyTitle';

export default ({
  institution,
  area,
  startDate,
  endDate,
  gpa,
  schoolWebsite,
  summary,
}) => {
  return (
    <TimelineItem
      leftChild={
        <div>
          <a href={schoolWebsite} target="_blank" rel="noopener noreferrer">
            <CompanyTitle>{institution}</CompanyTitle>
          </a>
          <TimelineAttribute>{area}</TimelineAttribute>
          <TimelineAttribute>GPA {gpa}</TimelineAttribute>
          <TimelineAttribute>
            {startDate} - {endDate}
          </TimelineAttribute>
        </div>
      }
      rightChild={<div>{summary}</div>}
    />
  );
};
