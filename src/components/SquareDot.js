import React from 'react';
import { styled } from 'linaria/react';
import theme, { rem } from '../resumeTheme';

const Square = styled.span`
  height: calc(${rem(2)} + 1pt);
  width: calc(${rem(2)} + 1pt);
  line-height: calc(${rem(2)} + 1pt);
  text-align: center;
  color: ${theme.resumeAccent};
  display: inline-block;
  font-size: ${theme.fontSize};
  position: relative;
  box-sizing: border-box;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    display: block;
    background: white;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 1pt solid ${theme.resumeAccent};
    left: 0;
    top: 0;
    z-index: -1;
    transform: rotate(45deg);
  }
`;
const SquareDot = ({ icon }) => (
  <Square>
    <span className={icon} />
  </Square>
);

export default SquareDot;
