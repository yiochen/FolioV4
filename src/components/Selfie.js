import React from 'react';
import { styled } from 'linaria/react';
import me from '../static/me.png';
import theme from '../globalStyle';

const Selfie = styled.div`
  height: 40rem;
  width: 40rem;
  max-height: 80vw;
  max-width: 80vw;
  background-image: url(${me});
  background-size: cover;
  border-radius: 50%;
  border: 1rem solid white;
  box-sizing: border-box;
  margin: 5em auto 2em auto;
  ${theme.addShadow()};
`;

export default Selfie;
