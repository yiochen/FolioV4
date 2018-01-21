import React from 'react';
import Link from 'gatsby-link';
import globalStyle from '../globalStyle';

export const titleStyle = {
  color: '#777',
  fontFamily: 'Arial, Helvetica, sans-serif',
  margin: 0,
};

export const subtitleStyle = {
  color: '#777',
  margin: 0,
};

export const dateStyle = {
  color: '#AAA',
};

const excerptStyle = {
  margin: 0,
};

const moarLink = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  textAlign: 'right',
};

const moarLinkLink = {
  color: globalStyle.accent,
};

const cardStyle = {
  borderBottom: '1px solid #DDD',
  margin: '2em 0 0 0',
  paddingBottom: '2em',
};

export default ({ title, subtitle, date, excerpt, href }) => (
  <section style={cardStyle}>
    <Link to={href}>
      <h3 style={titleStyle}>{title}</h3>
      {subtitle && <h5 style={subtitleStyle}>{subtitle}</h5>}
    </Link>
    <p style={dateStyle}>Posted on {date}</p>
    <p style={excerptStyle}>{excerpt}</p>
    <section style={moarLink}>
      <Link style={moarLinkLink} to={href}>
        [ Read Moar ]
      </Link>
    </section>
  </section>
);
