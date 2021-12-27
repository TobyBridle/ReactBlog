module.exports = {
  siteMetadata: {
    siteUrl: "https://bridle.ml",
    title: "Toby Bridle Blog",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Poppins:400,600,700", "Epilogue:500,600", "Domine"],
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
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-meta-redirect",
  ],
};
