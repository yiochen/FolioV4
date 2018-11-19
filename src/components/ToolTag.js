import styled from 'styled-components';
import globalStyle from '../globalStyle';

const ToolTag = styled.span`
  border: 1px solid ${globalStyle.accent};
  padding: 0 4px;
  border-radius: 4px;
  font-family: ${globalStyle.secondaryFont};
  font-size: 0.75em;
  color: ${globalStyle.accent};
  display: inline-block;
  font-weight: bold;
  margin: 0 2px 2px 2px;
`;

export default ToolTag;
