module.exports = {
  toPostPath(postPath) {
    return `/blog/posts/${postPath}`;
  },
  toBlogPage(pageNumber) {
    return `/blog/${pageNumber}`;
  },
};
