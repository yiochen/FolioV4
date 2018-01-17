import React from 'react';
import Link from 'gatsby-link';

class PostTemplate extends React.Component {
  render() {
    const { node } = this.props.pathContext;

    const { title, subtitle, publishDate, tags, updatedAt } = node;
    const { html, timeToRead } = node.content.childMarkdownRemark;
    return (
      <div>
        <h1>{node.title}</h1>
        <h3>{node.subtitle}</h3>
        <p>{publishDate || updatedAt}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    );
  }
}

export default PostTemplate;
