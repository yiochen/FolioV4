import React from 'react';
import { styled } from 'linaria/react';
import TimelineItem, { TimelineAttribute } from './TimelineItem';
import CompanyTitle from './CompanyTitle';
import ToolTag from './ToolTag';
import theme from '../globalStyle';

const Title = styled.a`
  color: ${theme.accent};
`;

const Experience = ({
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

export default Experience;
