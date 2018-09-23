import React from 'react';
import TimelineItem from './TimelineItem';
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
          <p>
            {area} - GPA {gpa}
          </p>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
      }
      rightChild={<div>{summary}</div>}
    />
  );
};
