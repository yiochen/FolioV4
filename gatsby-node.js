const path = require('path');
const chunk = require('lodash/chunk');
const utils = require('./src/utils');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulPost(
              filter: { draft: { eq: false } }
              sort: { fields: [publishDate], order: DESC }
            ) {
              edges {
                previous {
                  id
                  title
                  subtitle
                  path
                  cover {
                    sourceLink
                    credit
                  }
                }
                next {
                  id
                  title
                  subtitle
                  path
                  cover {
                    sourceLink
                    credit
                  }
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
                    childMarkdownRemark {
                      timeToRead
                      html
                      excerpt
                    }
                  }
                  cover {
                    sourceLink
                    credit
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const postTemplate = path.resolve('./src/templates/post.js');

        const edges = result.data.allContentfulPost.edges;

        const blogPageTemplate = path.resolve('./src/templates/blogPage.js');
        const chunks = chunk(edges, 10);
        chunks.forEach((chunk, page) => {
          const blogPagePath = utils.toBlogPage(page);
          createPage({
            path: blogPagePath,
            component: blogPageTemplate,
            context: { chunk, page, hasNext: page < chunks.length - 1 },
          });
          chunk.forEach(edge => {
            createPage({
              path: utils.toPostPath(edge.node.path),
              component: postTemplate,
              context: Object.assign({}, edge, { backLink: blogPagePath }),
            });
          });
        });
        return;
      }),
    );
  });
};
