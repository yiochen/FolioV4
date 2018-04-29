import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import globalStyle from '../globalStyle';

const NavButton = styled(Link)`
  background: ${globalStyle.accent};
  border: 0;
  box-sizing: border-box;
  top: 2em;
  color: ${globalStyle.textInvertColor};
  width: 5em;
  height: 2em;
  line-height: 2em;
  display: block;
  padding: 0 0.5em;
  text-align: center;
  font-family: ${globalStyle.secondaryFont};
  position: absolute;
  top: 1em;
  margin-right: 1em;
  z-index: 10;
  right: 0;
  border-radius: 3px;
`;

export default NavButton;
