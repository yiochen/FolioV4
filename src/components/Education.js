import React from 'react';
import TimelineItem from './TimelineItem';
import globalStyle from '../globalStyle';
import CompanyTitle from './CompanyTitle';

const titleStyle = {
  color: globalStyle.accent,
};

export default ({
  institution,
  area,
  studyType,
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
