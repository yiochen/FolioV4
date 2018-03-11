import React from 'react';
import styled from 'styled-components';
import globalStyle from '../globalStyle';

const resolutionBreakpoint = '650px';

const Container = styled.div`
  position: relative;
  display: flex;
  background-image: linear-gradient(0deg, #000 0%, #000 100%);
  background-size: 2px 100%;
  background-position: 50% 0;
  background-repeat: no-repeat;
  @media (max-width: ${resolutionBreakpoint}) {
    flex-direction: column;
    background: none;
  }
`;

const Pane = styled.div`
  flex: 1;
  padding: 1em;
  position: relative;
`;

const LeftPane = Pane.extend`
  text-align: right;
  @media (max-width: ${resolutionBreakpoint}) {
    text-align: left;
  }
`;

const RightPane = Pane.extend`
  @media (max-width: ${resolutionBreakpoint}) {
    margin-top: 0;
    padding-top: 0;
    color: ${globalStyle.textNoteColor};
    font-size: 1.2em;
  }
`;

export default props => {
  const children = React.Children.toArray(props.children);
  const left = children[0] || null;
  const right = children[1] || null;
  return (
    <Container>
      <LeftPane>{left}</LeftPane>
      <RightPane>{right}</RightPane>
    </Container>
  );
};
