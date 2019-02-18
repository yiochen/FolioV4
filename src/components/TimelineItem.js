import React from 'react';
import styled from 'astroturf';

export const TimelineAttribute = styled('p')`
  @import '../globalStyle';
  margin-bottom: 0;
  font-family: $secondaryFont;
`;

const Container = styled('div')`
  @import '../globalStyle';

  display: flex;
  position: relative;
  flex-direction: row;
  @media (max-width: $experienceSplitBreakpoint) {
    flex-direction: column;
  }
`;
const timelineWidth = 5;

const LeftPane = styled('div')`
  @import '../globalStyle';

  flex: 1;
  overflow-x: hidden;
  text-align: right;
  margin-right: 1.5em;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 5em;
  @media (max-width: $experienceSplitBreakpoint) {
    text-align: left;
    padding-bottom: 1em;
    padding-left: calc(${timelineWidth}px + 1.5em);
    border-left: ${timelineWidth}px dotted $accent;
  }
`;

const RightPane = styled('div')`
  @import '../globalStyle';

  flex: 2;
  position: relative;
  padding-left: calc(${timelineWidth}px + 1.5em);
  border-left: ${timelineWidth}px dotted $accent;
  box-sizing: border-box;
  padding-bottom: 5em;
`;

const dotSize = 30;

const Dot = styled('span')`
  @import '../globalStyle';

  display: none;
  @media (min-width: 650px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${dotSize}px;
    height: ${dotSize}px;
    margin-left: ${-dotSize / 2 - timelineWidth / 2}px;
    background-color: $accent;
    border-radius: 50%;
  }
`;

export default ({ leftChild, rightChild, ...props }) => {
  return (
    <Container {...props}>
      <LeftPane>{leftChild}</LeftPane>
      <RightPane>
        <Dot />
        {rightChild}
      </RightPane>
    </Container>
  );
};
