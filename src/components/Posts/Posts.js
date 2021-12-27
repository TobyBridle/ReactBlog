import * as React from "react";
import PageSplit from "../PageSplit/PageSplit";
import { useStaticQuery, graphql, Link } from "gatsby";

import "./Posts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

import { useRecoilState } from "recoil";
import FilterAtom from "../../state/filterAtom";

// import useInternalPaths from '../../_helpers/useInternalPaths';

const Posts = ({postCount=undefined}) => {
  // For Searching
  // const blogRoutes = useInternalPaths().filter(path => path.startsWith("/blog"));

  const {
    allMarkdownRemark: { nodes }
  } = useStaticQuery(BlogPostsMetaData);

  const pages = ({
    "following": nodes
                .filter(post => post.frontmatter.following !== "none")
                .slice(0, postCount),
    "popular": nodes
              .filter(post => post.frontmatter.rank > 0)
              .sort((rank, rankAsc) => rank.frontmatter.rank - rankAsc.frontmatter.rank)
              .slice(0, postCount)
  })

  const [activeFilter] = useRecoilState(FilterAtom);

  return (
    <section className="PostsContainer">
      <PageSplit
        size={"medium"}
        pos={"right"}
        thickness={"slim"}
        transform={{ at: 650, axis: "x", pos: "none", size: "medium" }}
      />
      {pages[activeFilter.toLowerCase()].map((page) => {
        let modTags = [];
        const {
          frontmatter: {
            title,
            description,
            articleThumbnail,
            author,
            authorPicture,
            slug,
            tags,
            rank
          },
          timeToRead,
        } = page;
        if(rank > 0) modTags.push(...tags, `#${rank} on Trending 🔥`);
        return (
          <Link key={slug} className="blog-route" to={slug}>
            <div className="blog-route-left">
              <div className="blog-route-author-info">
                <div className="blog-route-author-profile">
                  <img
                    src={authorPicture}
                    alt={`${author}'s Profile Picture}`}
                  />
                </div>
                <span>{author}</span>
              </div>
              <div className="blog-route-title">{title}</div>
              <div className="blog-route-description">{description}</div>
              <div className="blog-route-tags">
                {modTags.length > 1 ? (
                  modTags.map((tag) => {
                    return <div key={slug + tag} className="blog-route-tag">{tag}</div>;
                  })
                ) : (
                  <div className="blog-route-tag">{tags}</div>
                )}
              </div>
            </div>
            <div className="blog-route-right">
              <div className="blog-route-thumbnail">
                <img src={articleThumbnail} alt={"Article Thumbnail"}/>
              </div>
              <div className="blog-route-estimated">
                <FontAwesomeIcon className="blog-route-estimated-icon" icon={faClock} />
                <span>{timeToRead} min(s)</span>
                </div>
            </div>
          <PageSplit size="large"/>
          </Link>
        );
      })}
    </section>
  );
};

const BlogPostsMetaData = graphql`
  query {
    allMarkdownRemark { #//! Need to add Limit using \`lim\`
      nodes{
        frontmatter {

          rank
          following

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

export default Posts;
