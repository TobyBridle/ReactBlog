import * as React from "react";
import Layout from "../components/layout";

const Redirect = (path) => {
  window.location = path;
};

const IndexPage = () => {
  React.useEffect(() => {
    Redirect("/explore/");
  });
  return <Layout meta={{robots: "noindex,follow"}}>
    <p>Please redirect to <a href="/explore">https://bridle.ml/explore</a></p>
  </Layout>;
};

export default IndexPage;
