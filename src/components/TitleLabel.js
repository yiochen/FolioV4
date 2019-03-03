import { styled } from 'linaria/react';
import theme from '../globalStyle';
const TitleLabel = styled('h2')`
  color: ${theme.textDecorationColor};
  font-size: 3em;
  text-align: center;
  margin: 1.5em 0;
`;

export default TitleLabel;
