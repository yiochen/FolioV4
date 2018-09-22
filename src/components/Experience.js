import React from 'react';
import TimelineItem from './TimelineItem';
import globalStyle from '../globalStyle';
import CompanyTitle from './CompanyTitle';

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
}) => {
  return (
    <TimelineItem
      leftChild={
        <div>
          <a
            href={website}
            style={titleStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CompanyTitle>{company}</CompanyTitle>
          </a>

          <p>{position}</p>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
      }
      rightChild={
        <div>
          <div>{summary}</div>
          <ul>
            {highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      }
    />
  );
};
