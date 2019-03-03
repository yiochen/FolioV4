import { styled } from 'linaria/react';
import theme from '../globalStyle';
const ToolTag = styled('span')`
  border: 1px solid ${theme.accent};
  padding: 0 4px;
  border-radius: 4px;
  font-family: ${theme.secondaryFont};
  font-size: 0.75em;
  color: ${theme.accent};
  display: inline-block;
  font-weight: bold;
  margin: 0 2px 2px 2px;
`;

export default ToolTag;
