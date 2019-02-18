import React from 'react';
import styled from 'astroturf';

const Section = styled('section')`
  @import '../globalStyle';
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
  margin-bottom: 2em;
  color: $textColor;
  position: relative;
`;

export default props => <Section {...props}>{props.children}</Section>;
