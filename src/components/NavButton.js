import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import theme from '../globalStyle';

const NavButton = styled(Link)`
  background: ${theme.accent};
  ${theme.addShadow(true)};
  box-sizing: border-box;
  top: 2em;
  color: ${theme.textInvertColor};
  width: 5em;
  height: 2em;
  line-height: 2em;
  display: block;
  padding: 0 0.5em;
  text-align: center;
  font-family: ${theme.secondaryFont};
  position: absolute;
  top: 1em;
  margin-right: 1em;
  z-index: 10;
  right: 0;
  border-radius: ${theme.borderRadius};
`;

export default NavButton;
