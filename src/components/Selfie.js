import { styled } from 'linaria/react';
import me from '../static/me.png';

const Selfie = styled.div`
  height: 20em;
  width: 20em;
  max-height: 80vw;
  max-width: 80vw;
  background-image: url(${me});
  background-size: cover;
  border-radius: 50%;
  box-sizing: border-box;
  margin: 5em auto 2em auto;
`;

export default Selfie;
