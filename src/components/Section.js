import React from 'react';
import styled from 'styled-components';
import MainContent from './MainContent';
import globalStyle from '../globalStyle';

const Section = styled(MainContent.withComponent('section'))`
  margin-bottom: 2em;
  color: ${globalStyle.textColor};
  position: relative;
`;

export default props => <Section {...props}>{props.children}</Section>;
