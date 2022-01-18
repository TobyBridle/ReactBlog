import * as React from "react";
import Layout from "../components/layout";

const Redirect = (path) => {
  window.location = path;
};

const IndexPage = () => {
  React.useEffect(() => {
    Redirect("/explore/");
  });
  return (
    <Layout meta={{ robots: "index,follow" }}>
      <p>
        If you're seeing this, please redirect to{" "}
        <a href="/explore">https://bridle.ml/explore</a>
      </p>
    </Layout>
  );
};

export default IndexPage;
