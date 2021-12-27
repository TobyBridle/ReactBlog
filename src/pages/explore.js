import React from "react";

//! Subcomponent Imports

//* PageMeta
import PageMeta from "../components/Explore/PageMeta/PageMeta";

//* PageFilter
import PageFilter from "../components/Explore/PageFilter/PageFilter";
import Layout from "../components/layout";
import Posts from "../components/Posts/Posts";

function Explore() {
  return (
    <Layout documentTitle={"Explore"}>
      <div className="ExplorePage" style={{ width: "100%", height: "100%" }}>
        <PageMeta />
        <PageFilter />
        <Posts postCount={Infinity} />
      </div>
    </Layout>
  );
}

export default Explore;
