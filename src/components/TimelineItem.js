import React from 'react';
import styled from 'styled-components';
import globalStyle from '../globalStyle';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  @media (max-width: ${globalStyle.experienceSplitBreakpoint}) {
    flex-direction: column;
  }
`;
const timelineWidth = 5;

const LeftPane = styled.div`
  flex: 1;
  overflow-x: hidden;
  text-align: right;
  margin-right: 1.5em;
  box-sizing: border-box;
  position: relative;
  padding-bottom: 5em;
  @media (max-width: ${globalStyle.experienceSplitBreakpoint}) {
    text-align: left;
    padding-bottom: inherit;
    padding-left: calc(${timelineWidth}px + 1.5em);
    border-left: ${timelineWidth}px dotted ${globalStyle.accent};
  }
`;

const RightPane = styled.div`
  flex: 2;
  position: relative;
  padding-left: calc(${timelineWidth}px + 1.5em);
  border-left: ${timelineWidth}px dotted ${globalStyle.accent};
  box-sizing: border-box;
  padding-bottom: 5em;
`;

const dotSize = 30;

const Dot = styled.span`
  display: none;
  @media (min-width: 650px) {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: ${dotSize}px;
    height: ${dotSize}px;
    margin-left: ${-dotSize / 2 - timelineWidth / 2}px;
    background-color: ${globalStyle.accent};
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
