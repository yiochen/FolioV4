import React from 'react';
import { styled } from 'linaria/react';
import theme from '../globalStyle';

const Footer = styled.footer`
  background: ${theme.accent};
  color: ${theme.textInvertColor};
  padding: 2rem 0 1rem 0;
`;

const Legal = styled.p`
  margin: 0;
  text-align: center;
  font-size: 1.5rem;
`;

const SimpleFooter = ({ children }) => (
  <Footer>
    {children}
    <Legal>@ 2019 Yiou Chen.</Legal>
  </Footer>
);

export default SimpleFooter;
