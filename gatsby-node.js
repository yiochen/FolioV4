const path = require('path');
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

        result.data.allContentfulPost.edges.forEach(edge => {
          createPage({
            path: `/posts/${edge.node.path}/`,
            component: postTemplate,
            context: edge,
          });
        });
        return;
      })
    );
  });
};
