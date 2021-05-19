const siteMetadata = {
  title: " paolo_deveb | Web Development",
  titleTemplate: "%s · Paolo Catalano deveb",
  description: "Web developing and music creation",
  siteUrl: "https://paolo-deveb.netlify.app", // No trailing slash allowed!
  image: "/paolo_deveb.png", // Path to your image you placed in the 'static' folder
  twitterUsername: "@PaoroCatarano",
  siteLanguage: `en`,
  siteLocale: `en`,
  authorName: `Paolo Catalano`,
  favicon: `./static/favicon.png`,
}
module.exports = {
  siteMetadata: siteMetadata,
  // flags: {
  //   PRESERVE_FILE_DOWNLOAD_CACHE: true,
  //   PRESERVE_WEBPACK_CACHE: true,
  //   FAST_DEV: true,
  //   DEV_SSR: true,
  // },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["VT323", "Roboto Slab"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paolo Catalano deveb - Web Developer`,
        short_name: `paolo_deveb`,
        start_url: `https://paolo-deveb.netlify.app`,
        background_color: `#1c1c35`,
        theme_color: `#00aa00`,
        display: `standalone`,
        icon: siteMetadata.favicon,
        icons: [
          {
            src: "./static/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "./static/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        cache_busting_mode: "none",
      },
    },
  ],
}
