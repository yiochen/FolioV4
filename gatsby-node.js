const path = require('path');
const chunk = require('lodash/chunk');
const utils = require('./src/utils');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const cover = `{
    image {
      title
      full: resize(width: 1200, height: 800, jpegProgressive: false) {
        src
      }
      thumbnail: resize(width: 360, height: 240, jpegProgressive: false) {
        src
      }
    }
    sourceLink
    credit
  }`;

  const relatedPost = `
  {
    title
    subtitle
    path
    cover ${cover}
  }`;

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
                previous ${relatedPost}
                next ${relatedPost}
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
                  cover ${cover}
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
