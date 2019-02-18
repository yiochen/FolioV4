import styled from 'astroturf';

const CompanyTitle = styled('h3')`
  @import '../globalStyle';
  color: $textInvertColor;
  background-color: $accent;
  display: inline-block;
  position: relative;
  padding: 0 1rem;
  transform: translateX(-1rem);
  font-family: $secondaryFont;
  &::before {
    content: ' ';
    display: block;
    border-left: 1rem solid transparent;
    border-top: 1rem solid $accent;
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    left: -10px;
    top: 0px;
  }
  @media (min-width: $experienceSplitBreakpoint) {
    &::before {
      content: none;
    }
    transform: none;
    color: $accent;
    background: none;
    padding: 0;
  }
`;

export default CompanyTitle;
