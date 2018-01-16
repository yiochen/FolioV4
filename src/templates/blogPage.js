import React from 'react';
import Link from 'gatsby-link';

class BlogPageTemplate extends React.Component {
  render() {
    const { chunk, page, hasNext } = this.props.pathContext;
    return (
      <div>
        <h1>Site is still in development</h1>
        {chunk.map(blog => (
          <ul key={blog.node.id}>
            <Link to={`/blog/posts/${blog.node.path}`}>{blog.node.title}</Link>
          </ul>
        ))}
        {page > 0 && <Link to={`/blog/${page - 1}/`}>Newer posts</Link>}
        {hasNext && <Link to={`/blog/${page + 1}/`}>Older posts</Link>}
      </div>
    );
  }
}

export default BlogPageTemplate;
