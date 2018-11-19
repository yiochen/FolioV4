import React from 'react';
import TimelineItem, { TimelineAttribute } from './TimelineItem';
import globalStyle from '../globalStyle';
import CompanyTitle from './CompanyTitle';
import ToolTag from './ToolTag';

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
  toolset,
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
          <TimelineAttribute>{position}</TimelineAttribute>
          <TimelineAttribute>
            {startDate} - {endDate}
          </TimelineAttribute>
          {toolset.map(tool => (
            <ToolTag key={tool}>{tool}</ToolTag>
          ))}
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
