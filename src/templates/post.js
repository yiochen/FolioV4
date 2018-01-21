import React from 'react';
import Link from 'gatsby-link';
import NavButton from '../components/NavButton';

import { titleStyle, subtitleStyle, dateStyle } from '../components/PostCard';

const timeToReadStyle = {
  float: 'right',
};

const clearFix = {
  clear: 'both',
};

const containerStyle = {
  paddingTop: '3em',
};
class PostTemplate extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { node, backLink, previous, next } = this.props.pathContext;
    const { title, subtitle, publishDate, tags } = node;
    const { html, timeToRead } = node.content.childMarkdownRemark;

    let olderPostLink;
    let newerPostLink;

    if (previous) {
      const { title, subtitle, path } = previous;
      const style = {
        width: '40%',
        display: 'block',
        float: 'right',
      };
      newerPostLink = (
        <Link to={path} style={style}>
          <h5 style={titleStyle}>{title}</h5>
          {subtitle && <h6 style={subtitleStyle}>{subtitle}</h6>}
        </Link>
      );
    }
    if (next) {
      const { title, subtitle, path } = next;
      const style = {
        width: '40%',
        display: 'block',
        float: 'left',
      };
      olderPostLink = (
        <Link to={path} style={style}>
          <h5 style={titleStyle}>{title}</h5>
          {subtitle && <h6 style={subtitleStyle}>{subtitle}</h6>}
        </Link>
      );
    }

    return (
      <section style={containerStyle}>
        <NavButton link={backLink} text="BLOG" direction="start" />
        <h1 style={titleStyle}>{node.title}</h1>
        {subtitle && <h5 style={subtitleStyle}>{node.subtitle}</h5>}
        <p style={dateStyle}>
          {publishDate}
          <span style={timeToReadStyle}>Time to read: {timeToRead} min</span>
        </p>

        <div className="post" dangerouslySetInnerHTML={{ __html: html }} />
        {newerPostLink}
        {olderPostLink}
        <div style={clearFix} />
      </section>
    );
  }
}

export default PostTemplate;
