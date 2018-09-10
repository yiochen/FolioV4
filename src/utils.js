module.exports = {
  toPostPath(postPath) {
    return `/blog/posts/${postPath}`;
  },
  toBlogPage(pageNumber) {
    return `/blog/${pageNumber}`;
  },
  defaultCover: {
    image: {
      title: 'nathan-van-egmond-1002715-unsplash',
      full: {
        src:
          '//images.ctfassets.net/s91a723891iw/4Oi6y2W2LC2S0wuaMu04w/db789d87e7b80771de8ee3775298563a/nathan-van-egmond-1002715-unsplash.jpg?w=1200&h=800&q=50&fit=fill',
      },
      thumbnail: {
        src:
          '//images.ctfassets.net/s91a723891iw/4Oi6y2W2LC2S0wuaMu04w/db789d87e7b80771de8ee3775298563a/nathan-van-egmond-1002715-unsplash.jpg?w=360&h=240&q=50&fit=fill',
      },
    },
    sourceLink: 'https://unsplash.com/photos/9LMRQdVv7hw',
    credit: 'Photo by Nathan Van Egmond on Unsplash',
  },
};
