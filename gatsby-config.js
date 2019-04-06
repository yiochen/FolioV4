const accent = require('./src/accent');
module.exports = {
  siteMetadata: {
    title: `Yiou`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Yiou.me',
        short_name: 'Yiou',
        start_url: '/',
        background_color: accent,
        theme_color: accent,
        display: 'standalone',
        icon: 'src/static/favicon.png',
        crossOrigin: 'use-credentials',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
        ],
      },
    },
    'gatsby-plugin-linaria',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
  ],
};
