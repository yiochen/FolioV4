import React from 'react';
import styled from 'styled-components';
import Media from 'react-media';

const resolutionBreakpoint = '650px';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  @media (max-width: ${resolutionBreakpoint}) {
    flex-direction: column;
  }
`;
const timelineWidth = 5;

const LeftPane = styled.div`
  flex: 1;
  text-align: right;
  margin-right: 1.5em;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 5em;
  @media (max-width: ${resolutionBreakpoint}) {
    text-align: left;
    padding-bottom: inherit;
    padding-left: calc(${timelineWidth}px + 1.5em);
    border-left: ${timelineWidth}px dotted skyblue;
  }
`;

const RightPane = styled.div`
  flex: 2;
  position: relative;
  padding-left: calc(${timelineWidth}px + 1.5em);
  border-left: ${timelineWidth}px dotted skyblue;
  box-sizing: border-box;
  padding-bottom: 5em;
`;

const dotSize = 30;

const Dot = styled.span`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: ${dotSize}px;
  height: ${dotSize}px;
  margin-left: ${-dotSize / 2 - timelineWidth / 2}px;
  background-color: skyblue;
  border-radius: 50%;
`;

const mediaForBreakpoint = `(max-width: ${resolutionBreakpoint})`;
export default ({ children, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const [leftChild, rightChild] = childrenArray;
  return (
    <Container {...props}>
      <LeftPane>
        <Media query={mediaForBreakpoint} render={() => <Dot />} />
        {leftChild}
      </LeftPane>

      <RightPane>
        <Media query={mediaForBreakpoint}>{matches => !matches && <Dot />}</Media>
        {rightChild}
      </RightPane>
    </Container>
  );
};
