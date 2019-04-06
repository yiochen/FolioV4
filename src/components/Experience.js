import React from 'react';
import { styled } from 'linaria/react';
import concat from 'lodash/concat';
import TimelineItem, { TimelineAttribute } from './TimelineItem';
import CompanyTitle from './CompanyTitle';
import ToolTag from './ToolTag';
import theme from '../globalStyle';

const Title = styled.a`
  color: ${theme.accent};
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
          {typeof position === 'string' ? (
            <>
              <TimelineAttribute>{position}</TimelineAttribute>
              <TimelineAttribute>
                {startDate} - {endDate}
              </TimelineAttribute>
            </>
          ) : (
            position.map(singlePosition => (
              <>
                <TimelineAttribute>{singlePosition.name}</TimelineAttribute>
                <TimelineAttribute>
                  {singlePosition.startDate} - {singlePosition.endDate}
                </TimelineAttribute>
              </>
            ))
          )}
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
