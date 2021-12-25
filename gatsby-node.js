exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "/",
    toPath: "/explore/",
    redirectInBrowser: true,
    isPermanent: true,
  });
};
