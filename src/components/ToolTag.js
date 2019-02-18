import styled from 'astroturf';

const ToolTag = styled('span')`
  @import '../globalStyle';

  border: 1px solid $accent;
  padding: 0 4px;
  border-radius: 4px;
  font-family: $secondaryFont;
  font-size: 0.75em;
  color: $accent;
  display: inline-block;
  font-weight: bold;
  margin: 0 2px 2px 2px;
`;

export default ToolTag;
