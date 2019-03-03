import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';

const Section = styled('section')`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
  margin-bottom: 2em;
  color: ${theme.textColor};
  position: relative;
`;

export default props => <Section {...props}>{props.children}</Section>;
