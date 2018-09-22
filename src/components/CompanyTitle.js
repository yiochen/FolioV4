import styled from 'styled-components';
import globalStyle from '../globalStyle';

const CompanyTitle = styled.h3`
  color: ${globalStyle.textInvertColor};
  background-color: ${globalStyle.accent};
  display: inline-block;
  position: relative;
  padding: 0 1rem;
  transform: translateX(-1rem);
  &::before {
    content: ' ';
    display: block;
    border-left: 1rem solid transparent;
    border-top: 1rem solid ${globalStyle.accent};
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    left: -10px;
    top: 0px;
  }
  @media (min-width: ${globalStyle.experienceSplitBreakpoint}) {
    &::before {
      content: none;
    }
    color: ${globalStyle.accent};
    background: none;
  }
`;

export default CompanyTitle;
