import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "gatsby";
import "./PageMeta.css";

import NavigationAtom from "../../../state/navigationAtom";
import { useRecoilState } from "recoil";

function PageMeta() {
  const [_, setActiveURL] = useRecoilState(NavigationAtom);

  return (
    <section className="page-content-top">
      <div className="page-meta">
        <h1 className="page-content-header">What's New?</h1>
        <p className="page-content-description">
          Trending Articles, or even ones from users you Follow
        </p>
      </div>
      <div className="page-actions">
        <label className="search-bar">
          <input type="text" placeholder=" " />
          <FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
          <span className="search-bar-placeholder">Search</span>
        </label>
        <Link
          to="/bookmarks"
          className="bookmarks-button"
          onClick={() =>
            setActiveURL({ routeSlug: "/bookmarks", routeTitle: "Bookmarks" })
          }
        >
          <FontAwesomeIcon className="bookmarks-icon" icon={faBookmark} />
          <span className="text">Your Bookmarks</span>
        </Link>
      </div>
    </section>
  );
}

export default PageMeta;
