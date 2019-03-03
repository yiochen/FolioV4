import { styled } from 'linaria/react';
import theme from '../globalStyle';

const CompanyTitle = styled.h3`
  color: ${theme.textInvertColor};
  background-color: ${theme.accent};
  display: inline-block;
  position: relative;
  padding: 0 1rem;
  transform: translateX(-1rem);
  font-family: ${theme.secondaryFont};
  &::before {
    content: ' ';
    display: block;
    border-left: 1rem solid transparent;
    border-top: 1rem solid ${theme.accent};
    height: 100%;
    box-sizing: border-box;
    position: absolute;
    left: -10px;
    top: 0px;
  }
  @media (min-width: ${theme.experienceSplitBreakpoint}) {
    &::before {
      content: none;
    }
    transform: none;
    color: ${theme.accent};
    background: none;
    padding: 0;
  }
`;

export default CompanyTitle;
