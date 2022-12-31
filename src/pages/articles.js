import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { useRecoilState } from "recoil";
import navigationAtom from "../state/navigationAtom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import PageSplit from "../components/PageSplit/PageSplit";
import Layout from "../components/layout";
import PageMeta from "../components/Explore/PageMeta/PageMeta";

import "./articles.css";

const truncate = (str, maxlength = 48) => {
  if (!str) return "...";
  return str.length > maxlength ? str.slice(0, maxlength).trim() + "..." : str;
};

function Articles() {
  const [, setURL] = useRecoilState(navigationAtom);
  // let origin = process.env.GATSBY_PAGE_ORIGIN;

  React.useEffect(() => {
    setURL({ routeSlug: "/articles", routeTitle: "All Articles" });
  }, []);

  const {
    allMdx: { nodes: posts },
  } = useStaticQuery(BlogPostsMetaData);

  const meta = {
    title: "All Articles",
    description:
      new Date().toJSON().slice(0, 10).replace(/-/g, "/") +
      " - " +
      "Some of the most popular hobbyist articles on the site. Gatsby, React & other frameworks are the centrepiece of our articles.",
  };

  return (
    <Layout meta={meta} className="use-temp">
      <PageMeta
        title="All Articles"
        description="No trending or popular here, just all articles in one place."
      />
      <section className="PostsContainer AllArticles-Flow">
        {posts.map((post) => {
          const {
            frontmatter: {
              title,
              description,
              articleThumbnail,
              author,
              authorPicture,
              slug,
              tags,
            },
            timeToRead,
          } = post;

          return (
            <Link
              key={slug}
              className="blog-route"
              to={slug}
              onClick={() => setURL({ routeTitle: title, routeSlug: slug })}
            >
              <div className="blog-route-left">
                <div className="blog-route-author-info">
                  <div className="blog-route-author-profile">
                    <img src={authorPicture} alt={`${author}'s Profile`} />
                  </div>
                  <span>{author}</span>
                </div>
                <div className="blog-route-title">{truncate(title)}</div>
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
              <PageSplit size="large" />
            </Link>
          );
        })}
      </section>
    </Layout>
  );
}

const BlogPostsMetaData = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          description
          articleThumbnail
          author
          authorPicture
          slug
          tags
        }
        timeToRead
      }
    }
  }
`;

export default Articles;
