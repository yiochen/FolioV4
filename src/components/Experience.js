import React from 'react';
import TimelineItem from './TimelineItem';
import globalStyle from '../globalStyle';

const titleStyle = {
  color: globalStyle.accent,
};

export default ({
  company,
  position,
  website,
  startDate,
  endDate,
  summary,
  highlights,
  ...props
}) => {
  return (
    <TimelineItem>
      <div>
        <a href={website} target="_blank">
          <h3 style={titleStyle}>{company}</h3>
        </a>
        <p>{position}</p>
        <p>
          {startDate} - {endDate}
        </p>
      </div>
      <div>
        <div>{summary}</div>
        <ul>{highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul>
      </div>
    </TimelineItem>
  );
};
