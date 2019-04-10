module.exports = {
  siteMetadata: {
    title: `Cache Valley Nursery`,
    menuLinks:[
      {
        name: `home`,
        link: `/`
      },
      {
        name: `about`,
        link: `/about`
      },
      {
        name: `trees`,
        link: `/trees`
      },
      {
        name: `shrubs`,
        link: `/shrubs`
      },
      {
        name: `perennials`,
        link: `/perennials`
      },
      {
        name: `grasses`,
        link: `/grasses`
      },
      {
        name: `contact`,
        link: `/contact`
      }
    ],
    description: `Cache Valley Nursery is Northern Utah’s newest source for ornamental trees, shrubs, and perennials. We offer more than 200 varieties, specializing in unusual, hard-to-find, and native selections.`,
    author: `@jimbler`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
