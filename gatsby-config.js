console.log(require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}))


module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.bridle.ml",
    title: "Toby Bridle Blog",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Poppins:400,600,700", "Epilogue:500,600,700", "Noto Serif:400,600,700", "Open Sans:400,700", "Fira Code:400"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog-posts",
        path: `${__dirname}/src/blog-posts`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      excludes: ["/", "/404"],
      createLinkInHead: true,
    },
    "gatsby-plugin-meta-redirect",
  ],
};
