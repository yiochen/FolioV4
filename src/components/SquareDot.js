import React from 'react';
import styled from 'astroturf';

const SIZE = '2rem';
const Square = styled.span`
  @import '../pages/resume';

  height: calc(${SIZE} + 1pt);
  width: calc(${SIZE} + 1pt);
  line-height: calc(${SIZE} + 1pt);
  text-align: center;
  color: $resumeAccent;
  display: inline-block;
  font-size: 1rem;
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
    border: 1pt solid $resumeAccent;
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
