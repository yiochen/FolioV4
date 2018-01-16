const path = require('path');
const chunk = require('lodash/chunk');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulPost {
              edges {
                previous {
                  id
                  title
                  subtitle
                  path
                }
                next {
                  id
                  title
                  subtitle
                  path
                }
                node {
                  id
                  title
                  subtitle
                  path
                  publishDate(formatString: "M/D/YYYY")
                  draft
                  tags
                  content {
                    content
                  }
                  updatedAt(formatString: "M/D/YYYY")
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const postTemplate = path.resolve('./src/templates/post.js');

        const edges = result.data.allContentfulPost.edges;
        edges.forEach(edge => {
          createPage({
            path: `/blog/posts/${edge.node.path}/`,
            component: postTemplate,
            context: edge,
          });
        });

        const blogPageTemplate = path.resolve('./src/templates/blogPage.js');
        const chunks = chunk(edges, 10);
        chunks.forEach((chunk, page) => {
          createPage({
            path: `/blog/${page}/`,
            component: blogPageTemplate,
            context: { chunk, page, hasNext: page < chunks.length - 1 },
          });
        });
        return;
      })
    );
  });
};
