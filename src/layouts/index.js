import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Footer from '../components/Footer';
import globalStyle from '../globalStyle';

import 'base.css/base.css';

// icons
import '../static/style.css';
import '../static/fonts/icomoon.ttf';
import '../static/fonts/icomoon.woff';

const Header = styled.div`
  width: 100%;
  height: 10px;
  background: ${globalStyle.accent};
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1.0875rem;
  margin-bottom: 1.5em;
`;

const MainPage = styled.div`
  background: ${globalStyle.background};
`;

const TemplateWrapper = ({ children, location }) => (
  <MainPage>
    <Helmet>
      <title> Yiou </title>
      <meta name="theme-color" content="#87CEEB" />
      <link
        rel="shortcut icon"
        href="https://github.com/yiochen/common/blob/master/favicon/favicon.png?raw=true"
      />
    </Helmet>
    <Header />
    <ContentContainer>{children()}</ContentContainer>
    <Footer full={location.pathname === '/'} />
  </MainPage>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
