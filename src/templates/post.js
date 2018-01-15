import React from 'react';
import Link from 'gatsby-link';

class PostTemplate extends React.Component {
  render() {
    // const post = this.props.data.contentfulProduct;
    // const {
    //     productName: { productName }
    // }
    return <div>{JSON.stringify(this.props.pathContext, null, 2)}</div>;
  }
}

export default PostTemplate;
