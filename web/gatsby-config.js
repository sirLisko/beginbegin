const {
  api: { projectId, dataset },
} = require('../studio/sanity.json');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: `https://beginbegin.co.uk/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
        saveImages: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Feast | begin:begin',
        short_name: 'Feast',
        start_url: '/',
        display: 'browser',
        theme_color: '#B2F87A',
        background_color: '#222222',
        icon: `static/imgs/logo.png`,
      },
    },
  ],
};
