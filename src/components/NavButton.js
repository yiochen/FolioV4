import { styled } from 'linaria/react';
import { Link } from 'gatsby';
import theme from '../globalStyle';
import { css } from 'linaria';

const NavButton = styled(Link)`
  background: ${theme.accent};
  ${theme.addShadow(true)};
  box-sizing: border-box;
  color: ${theme.textInvertColor};
  min-width: 5em;
  height: 2em;
  line-height: 2em;
  display: block;
  padding: 0 0.5em;
  text-align: center;
  font-family: ${theme.secondaryFont};
  border-radius: ${theme.borderRadius};
`;

NavButton.Secondary = styled(NavButton)`
  background: ${theme.background};
  color: ${theme.accent};
`;

NavButton.FloatTopRight = styled(NavButton)`
  position: absolute;
  top: 1em;
  margin-right: 1em;
  right: 0;
`;

export default NavButton;
