import React from 'react';
import styled from 'astroturf';
import TimelineItem, { TimelineAttribute } from './TimelineItem';
import CompanyTitle from './CompanyTitle';
import ToolTag from './ToolTag';

const Title = styled('a')`
  @import '../globalStyle';
  color: $accent;
`;

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
          <Title href={website} target="_blank" rel="noopener noreferrer">
            <CompanyTitle>{company}</CompanyTitle>
          </Title>
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
