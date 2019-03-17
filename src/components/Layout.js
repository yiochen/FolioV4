import React from 'react';
import Helmet from 'react-helmet';
import { styled } from 'linaria/react';

import Footer from './Footer';
import theme from '../globalStyle';
import me from '../static/me.png';
import '../configureFontAwesome';

import 'yiou-css-base';

const Header = styled.div`
  width: 100%;
  height: 10px;
  background: ${theme.accent};
`;

const ContentContainer = styled.div`
  margin-top: 7rem;
  margin-bottom: 1.5em;
`;

const MainPage = styled('div')`
  background-color: ${theme.background};
  & *::selection {
    background: ${theme.accent};
    color: ${theme.textInvertColor};
  }
`;

const defaultFooter = <Footer />;

const TemplateWrapper = ({ children, location, footer = defaultFooter }) => (
  <MainPage>
    <Helmet>
      <title> Yiou </title>
      <meta name="theme-color" content={theme.accent} />
      <link
        rel="shortcut icon"
        href="https://github.com/yiochen/common/blob/master/favicon/favicon.png?raw=true"
      />
      <meta property="og:title" content="Yiou Chen" />
      <meta property="og:image" content={me} />
      <meta property="og:image:height" content="300" />
      <meta property="og:image:width" content="300" />
    </Helmet>
    <Header />
    <ContentContainer>{children}</ContentContainer>
    {footer}
  </MainPage>
);

export default TemplateWrapper;
