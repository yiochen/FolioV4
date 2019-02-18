import styled from 'astroturf';
import { Link } from 'gatsby';

const NavButton = styled(Link)`
  @import '../globalStyle';
  background: $accent;
  border: 0;
  box-sizing: border-box;
  top: 2em;
  color: $textInvertColor;
  width: 5em;
  height: 2em;
  line-height: 2em;
  display: block;
  padding: 0 0.5em;
  text-align: center;
  font-family: $secondaryFont;
  position: absolute;
  top: 1em;
  margin-right: 1em;
  z-index: 10;
  right: 0;
  border-radius: 3px;
`;

export default NavButton;
