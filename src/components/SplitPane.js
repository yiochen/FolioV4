import React from 'react';
import styled from 'astroturf';

const Container = styled('div')`
  @import '../globalStyle';
  position: relative;
  display: flex;
  background-image: linear-gradient(
    0deg,
    $textDecorationColor 0%,
    $textDecorationColor 100%
  );
  background-size: 2px 100%;
  background-position: 50% 0;
  background-repeat: no-repeat;
  @media (max-width: 650px) {
    flex-direction: column;
    background: none;
  }
`;

const Pane = styled('div')`
  flex: 1;
  padding: 1em;
  position: relative;
`;

const LeftPane = styled(Pane)`
  text-align: right;
  @media (max-width: 650px) {
    text-align: left;
  }
`;

const RightPane = styled(Pane)`
  @import '../globalStyle';
  @media (max-width: 650px) {
    margin-top: 0;
    padding-top: 0;
    color: $textNoteColor;
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
