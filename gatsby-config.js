module.exports = {
  siteMetadata: {
    title: `Dispatches from the Quarantine Church`,
    description: `Notes from church members weekly home studies`,
    author: `@kylemathews`,
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
    `gatsby-transformer-remark`,
    "gatsby-plugin-theme-ui",
    `gatsby-theme-style-guide`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Dispatches from the Quarantine Church",
        short_name: "quarantine-dispatches",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png",
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        // You can find your read-only API token under the Settings > API tokens
        // section of your administrative area:
        apiToken: `4bebaf5f4788cdb8bf383082384a4e`,
        // If you are working on development/staging environment, you might want to
        // preview the latest version of records instead of the published one:
        previewMode: false,
        // Disable automatic reloading of content when some change occurs on DatoCMS:
        disableLiveReload: false,
        // Custom API base URL
        // apiUrl: "https://site-api.datocms.com/",
        // Setup locale fallbacks
        // In this example, if some field value is missing in Italian, fall back to English
        localeFallbacks: {
          it: ["en"],
        },
      },
    }, // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
