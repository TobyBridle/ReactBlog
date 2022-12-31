import React from "react";
import PageMeta from "../../components/Explore/PageMeta/PageMeta";
import PageSplit from "../../components/PageSplit/PageSplit";
import Layout from "../../components/layout";

import { useRecoilState } from "recoil";
import navigationAtom from "../../state/navigationAtom";

import { useStaticQuery, graphql, Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import "./temp.css";

const truncate = (str, maxlength = 48) => {
  if (!str) return "...";
  return str.length > maxlength ? str.slice(0, maxlength).trim() + "..." : str;
};

export default function FrontEnd() {
  const [, setURL] = useRecoilState(navigationAtom);

  {
    /* let origin = process.env.GATSBY_PAGE_ORIGIN; */
  }

  React.useEffect(() => {
    setURL({
      routeSlug: "/articles/front-end",
      routeTitle: "Front-End",
    });
  }, []);

  const meta = {
    title: "Articles about Front-End",
    description:
      new Date().toJSON().slice(0, 10).replace(/-/g, "/") +
      " - " +
      "Want to read some articles about Front-End Developoment? Look no further, here are some articles to release the CSS-hating monster inside you.",
  };

  let {
    allMdx: { nodes: posts },
  } = useStaticQuery(BlogPostsMetaData);

  posts = posts.filter((post) => post.frontmatter.tags.includes("Front End"));

  return (
    <Layout meta={meta} className="use-temp">
      <PageMeta
        title="Front-End Articles"
        description="Articles to release the CSS-hating monster inside you."
        postsRef={posts}
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
