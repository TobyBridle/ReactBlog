import React, { useState } from "react";
import "./PageFilter.css";
import PageSplit from "../../PageSplit/PageSplit";

import { useRecoilState } from "recoil";
import FilterAtom from "../../../state/filterAtom";

function PageFilter() {
  const [postFilter, setFilter] = useRecoilState(FilterAtom);

  return (
    <section className="filter-container">
      <PageSplit
        size="medium"
        pos="bottom"
        thickness="slim"
        transform={{ at: 650, axis: "x", pos: "top", size: "medium" }}
      />
      <button
        className={
          postFilter === "Following"
            ? "filter-following active-post-filter"
            : "filter-following"
        }
        onClick={() => setFilter("Following")}
      >
        Following
      </button>
      <button
        className={
          postFilter === "Popular"
            ? "filter-popular active-post-filter"
            : "filter-popular"
        }
        onClick={() => setFilter("Popular")}
      >
        Popular
      </button>
      <div
        className={
          postFilter === "Following"
            ? "active-filter-slider"
            : "active-filter-slider slide-right"
        }
      ></div>
    </section>
  );
}

export default PageFilter;
