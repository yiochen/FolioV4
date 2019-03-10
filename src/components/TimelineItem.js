import React from 'react';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import theme, { displayInLarger, displayInSmaller } from '../globalStyle';

export const TimelineAttribute = styled('p')`
  margin-bottom: 0;
  font-family: ${theme.secondaryFont};
`;

const Container = styled('div')`
  display: flex;
  position: relative;
  flex-direction: column;
  @media (min-width: ${theme.experienceSplitBreakpoint}) {
    flex-direction: row;
  }
`;

const timelineWidth = 1;
const timeLineBorder = `${timelineWidth}px solid ${theme.accent}`;
const LeftPane = styled('div')`
  flex: 1;
  margin-right: 1.5em;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 1em;
  text-align: left;
  padding-left: calc(${timelineWidth}px + 1.5em);
  border-left: ${timeLineBorder};
  @media (min-width: ${theme.experienceSplitBreakpoint}) {
    text-align: right;
    padding-bottom: 5em;
    padding-left: 0;
    border-left: none;
  }
`;

const RightPane = styled('div')`
  flex: 2;
  position: relative;
  padding-left: calc(${timelineWidth}px + 1.5em);
  border-left: ${timeLineBorder};
  box-sizing: border-box;
  padding-bottom: 5em;
`;

const dotSize = 15;

const Dot = styled('span')`
  position: absolute;
  top: 0;
  left: 0;
  width: ${dotSize}px;
  height: ${dotSize}px;
  margin-left: ${-dotSize / 2 - timelineWidth / 2}px;
  background-color: ${theme.accent};
  box-sizing: border-box;
  border-radius: 50%;
`;

export default ({ leftChild, rightChild, ...props }) => {
  return (
    <Container {...props}>
      <LeftPane>
        <Dot className={displayInSmaller} />
        {leftChild}
      </LeftPane>
      <RightPane>
        <Dot className={displayInLarger} />
        {rightChild}
      </RightPane>
    </Container>
  );
};
