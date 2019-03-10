import { styled } from 'linaria/react';
import theme from '../globalStyle';

const CompanyTitle = styled.h3`
  color: ${theme.accent};
  display: inline-block;
  position: relative;
  padding: 0 1rem;
  font-size: 3rem;
  transform: translate(-1rem, -1.5rem);
  font-family: ${theme.secondaryFont};

  @media (min-width: ${theme.experienceSplitBreakpoint}) {
    font-size: 3.6rem;
    transform: translateY(-1.8rem);
    &::before {
      content: none;
    }
    color: ${theme.accent};
    background: none;
    padding: 0;
  }
`;

export default CompanyTitle;
