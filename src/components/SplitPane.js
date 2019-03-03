import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';

const Container = styled('div')`
  position: relative;
  display: flex;
  background-image: linear-gradient(
    0deg,
    ${theme.textDecorationColor} 0%,
    ${theme.textDecorationColor} 100%
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
  @media (max-width: 650px) {
    margin-top: 0;
    padding-top: 0;
    color: ${theme.textNoteColor};
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
