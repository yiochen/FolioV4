import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import globalStyle from '../globalStyle';

import 'base.css/base.css';
import '../static/style.css';
import '../static/fonts/icomoon.ttf';
import '../static/fonts/icomoon.woff';
import './index.css';

const Header = props => (
  <div
    style={{
      width: '100%',
      height: '10px',
      background: globalStyle.accent,
    }}
  />
);
const TemplateWrapper = ({ children, location }) => (
  <div>
    <Helmet
      title="=Yiou="
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
      {children()}
    </div>
    <Footer full={location.pathname === '/'} />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
