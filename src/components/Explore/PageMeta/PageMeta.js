import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { Link } from "gatsby";
import "./PageMeta.css";

import NavigationAtom from "../../../state/navigationAtom";
import SearchAtom from "../../../state/searchAtom";

import { useRecoilState } from "recoil";
import fuzzySearch from "fuzzysearch";

const truncate = (str, maxlength = 48) => {
  if (!str) return "...";
  return str.length > maxlength ? str.slice(0, maxlength).trim() + "..." : str;
};

function PageMeta({
  title = "What's New?",
  description = "Trending Articles, or even ones from users you Follow",
  className = "",
  postsRef = {},
}) {
  const [, setURL] = useRecoilState(NavigationAtom);

  // const [, setSearchResults] = useRecoilState(SearchAtom);

  const searchBar = React.createRef(null);
  const [searchResults, setSearchResults] = React.useState([]);
  const keyWhitelist = [
    "Enter",
    "Shift",
    "Tab",
    "Escape",
    "Meta",
    "Control",
    "Alt",
    "ArrowLeft",
    "ArrowRight",
    "ArrowUp",
    "ArrowDown",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
  ];

  const handleSearch = ({ key }) => {
    // We need to get the current articles in the section.
    // If the current search result returns false for the criteria we can stop
    // searching for it
    if (Object.keys(postsRef).length == 0 || keyWhitelist.includes(key)) return;
    if (searchBar.current.value.length <= 1 && key == "Backspace")
      return setSearchResults([]);

    // NOTE: We need to handle backspace.
    if (key == "Backspace") {
      let criteria = searchBar.current.value;
      let filtered = postsRef.filter((post) =>
        fuzzySearch(
          criteria.trim().toLowerCase() + key.toLowerCase(),
          post.frontmatter.title.toLowerCase()
        )
      );
      setSearchResults(filtered);
    } else {
      let filtered = postsRef.filter((post) =>
        fuzzySearch(
          searchBar.current.value.trim().toLowerCase() + key.toLowerCase(),
          post.frontmatter.title.toLowerCase()
        )
      );
      setSearchResults(filtered);
    }
  };

  return (
    <section className={`page-content-top ${className}`}>
      <div className="page-meta">
        <h1 className="page-content-header">{title}</h1>
        <p className="page-content-description">{description}</p>
      </div>
      <div className="page-actions">
        <label className="search-bar">
          <div className="search-bar__widget">
            <input
              type="text"
              placeholder=" "
              onKeyDown={handleSearch}
              ref={searchBar}
            />
            <FontAwesomeIcon className="search-bar-icon" icon={faSearch} />
            <span className="search-bar-placeholder">Search</span>
          </div>
          <div className="search-bar__results">
            <ul>
              {searchResults.length > 0 &&
                searchResults.map(
                  ({
                    frontmatter: {
                      title,
                      author,
                      authorPicture,
                      description,
                      tags,
                      articleThumbnail,
                      slug,
                    },
                    timeToRead,
                  }) => (
                    <li className="search-result">
                      <Link
                        key={slug}
                        className="blog-route"
                        to={slug}
                        onClick={() =>
                          setURL({ routeTitle: title, routeSlug: slug })
                        }
                      >
                        <div className="blog-route-left">
                          <div className="blog-route-author-info">
                            <div className="blog-route-author-profile">
                              <img
                                src={authorPicture}
                                alt={`${author}'s Profile`}
                              />
                            </div>
                            <span>{author}</span>
                          </div>
                          <div className="blog-route-title">
                            {truncate(title)}
                          </div>
                          <p className="blog-route-description" data-nosnippet>
                            {description}
                          </p>
                          <div className="blog-route-tags" data-nosnippet>
                            {tags.length > 1 ? (
                              tags.map((tag) => {
                                return (
                                  <div
                                    key={slug + tag}
                                    className="blog-route-tag"
                                    data-nosnippet
                                  >
                                    {tag}
                                  </div>
                                );
                              })
                            ) : (
                              <div className="blog-route-tag" data-nosnippet>
                                {tags}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="blog-route-right">
                          <div className="blog-route-thumbnail">
                            <img
                              src={`${origin}/assets/Thumbnails/${articleThumbnail}`}
                              alt={"Article Thumbnail"}
                            />
                          </div>
                          <div className="blog-route-estimated" data-nosnippet>
                            <FontAwesomeIcon
                              className="blog-route-estimated-icon"
                              icon={faClock}
                            />
                            <span data-nosnippet>{timeToRead} min(s)</span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
                )}
            </ul>
          </div>
        </label>
        <Link
          to="/bookmarks"
          className="bookmarks-button"
          onClick={() =>
            setURL({ routeSlug: "/bookmarks", routeTitle: "Bookmarks" })
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
