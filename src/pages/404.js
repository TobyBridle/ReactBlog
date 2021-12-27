import * as React from "react";
import Layout from "../components/layout";

const NotFoundPage = () => {
  const metaInfo = {
    title: "404 - Page not Found"
  }
  return (
    <Layout meta={metaInfo}>
      <h4>Sorry, Page not Found!</h4>
    </Layout>
  );
};

export default NotFoundPage;
