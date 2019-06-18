require('dotenv').config({
  path: `.env`,
});

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
        projectId: process.env.SANITY_ID,
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
        saveImages: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
      },
    },
    `gatsby-plugin-sitemap`,
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
    `gatsby-plugin-offline`,
  ],
};
