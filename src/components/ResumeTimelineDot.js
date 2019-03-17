import React from 'react';
import { styled } from 'linaria/react';
import theme, { rem } from '../resumeTheme';

const Dot = styled.span`
  width: calc(${rem(2)} + 1pt);
  min-width: calc(${rem(2)} + 1pt);
  display: block;
  text-align: center;
  &::before {
    content: '';
    height: ${rem(0.5)};
    width: ${rem(0.5)};
    overflow: hidden;
    display: inline-block;
    vertical-align: baseline;
    transform: rotate(45deg);
    background: black;
  }
`;

export default Dot;
