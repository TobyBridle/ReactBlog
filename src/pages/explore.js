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
    title: "Explore",
    description: "Looking for a Programming Article? BRIDLE is the home of Toby Bridle's articles, used primarily as examples his portfolio; however, you may just find something useful in there that you didn't know before. If you've got some spare time - why not peep through some of our content?",
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
