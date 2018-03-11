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
        <h3>
          <a href={website} style={titleStyle} target="_blank">
            {company}
          </a>
        </h3>

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
