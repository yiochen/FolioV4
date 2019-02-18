import React from 'react';
import Helmet from 'react-helmet';
import styled from 'astroturf';

import Footer from './Footer';
import globalStyle from '../globalStyle';
import me from '../static/me.png';

import 'yiou-css-base';

// icons
import '../static/style.css';
import '../static/fonts/icomoon.ttf';
import '../static/fonts/icomoon.woff';

const Header = styled('div')`
  @import '../globalStyle';
  width: 100%;
  height: 10px;
  background: $accent;
`;

const ContentContainer = styled('div')`
  margin-top: 7rem;
  margin-bottom: 1.5em;
`;

const MainPage = styled('div')`
  @import '../globalStyle';
  background: $background;
`;

const TemplateWrapper = ({ children, location }) => (
  <MainPage>
    <Helmet>
      <title> Yiou </title>
      <meta name="theme-color" content={globalStyle.accent} />
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
    <Footer full={location.pathname === '/'} />
  </MainPage>
);

export default TemplateWrapper;
