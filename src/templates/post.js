import React from 'react';
import Link from 'gatsby-link';

class PostTemplate extends React.Component {
  render() {
    const { node } = this.props.pathContext;
    // const post = this.props.data.contentfulProduct;
    // const {
    //     productName: { productName }
    // }
    return (
      <div>
        <h1>{node.title}</h1>
        <h3>{node.subtitle}</h3>
        <div>{node.content.content}</div>
      </div>
    );
  }
}

export default PostTemplate;
