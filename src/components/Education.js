import React from 'react';
import TimelineItem from './TimelineItem';
import globalStyle from '../globalStyle';

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
  ...props
}) => {
  return (
    <TimelineItem>
      <div>
        <a href={schoolWebsite} target="_blank" rel="noopener noreferrer">
          <h3 style={titleStyle}>{institution}</h3>
        </a>
        <p>
          {area} - GPA {gpa}
        </p>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div>{summary}</div>
    </TimelineItem>
  );
};
