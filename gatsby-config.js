module.exports = {
  siteMetadata: {
    title: `FelipeSuri`,
    siteUrl: `https://btcsite.felipesuri.com`,
    description: `Configurando o Gatsby`,
    social: [
      {
        name: `Github`,
        url: `https://github.com/felipesuri`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FelipeSuri`,
        short_name: `Suri`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#ffaa13`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ffaa13`,
        showSpinner: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-479479-10',
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://btcsite.felipesuri.com`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    `gatsby-plugin-offline`,
  ],
}
