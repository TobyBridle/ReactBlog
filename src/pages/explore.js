import React from "react";

//! Subcomponent Imports

//* PageMeta
import PageMeta from "../components/Explore/PageMeta/PageMeta";

//* PageFilter
import PageFilter from "../components/Explore/PageFilter/PageFilter";
import Layout from "../components/layout";
import Posts from "../components/Posts/Posts";

function Explore() {

  const metaInfo = {
    title: "Explore Articles",
    description: new Date().toJSON().slice(0,10).replace(/-/g,'/')+"Some of the most popular hobbyist articles on the site. Gatsby, React & other frameworks are the centrepiece of our articles.",
  }

  return (
    <Layout meta={metaInfo}>
      <div className="ExplorePage" style={{ width: "100%", height: "100%" }}>
        <PageMeta />
        <PageFilter />
        <Posts />
      </div>
    </Layout>
  );
}

export default Explore;
