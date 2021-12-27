import * as React from 'react'
import PageSplit from "../PageSplit/PageSplit";
import { useStaticQuery, graphql, Link} from 'gatsby';

import "./Posts.css";

// import useInternalPaths from '../../_helpers/useInternalPaths';

const Posts = ({postCount=undefined}) => {

    // For Searching
    // const blogRoutes = useInternalPaths().filter(path => path.startsWith("/blog"));

    const pages = useStaticQuery(BlogPostsMetaData)['allMarkdownRemark'].nodes.reverse().slice(0, postCount);
    return (
        <section className="PostsContainer">
            <PageSplit size={"medium"} pos={"right"} thickness={"slim"} transform={{at: 650, axis: "x", pos: "none", size: "medium"}}/>
        { pages.map(page => {
            const { frontmatter: {title, description, articleThumbnail, author, authorPicture, slug, tags}, timeToRead} = page;
            return (
                <>
                <Link key={slug} className="blog-route" to={slug}>
                    <div className="blog-route-left">
                        <div className="blog-route-author-info">
                            <div className="blog-route-author-profile">
                                <img src={authorPicture} alt={`${author}'s Profile Picture}`} />
                            </div>
                            <span>{author}</span>
                        </div>
                        <div className="blog-route-title">{title}</div>
                        <div className="blog-route-description">{description}</div>
                        <div className="blog-route-tags">
                            { tags.length > 1
                                ? tags.map(tag => { return <div className="blog-route-tag">{tag}</div>})
                                : <div className="blog-route-tag">{tags}</div>
                            }
                        </div>
                    </div>
                    <div className="blog-route-right">
                        <div className="blog-route-thumbnail"><img src={articleThumbnail} /></div>
                        <div className="blog-route-estimated">{timeToRead} min(s)</div>
                    </div>
                    <PageSplit size={"large"} pos={"bottom"} thickness={"slim"} />
                </Link>
                </>
            )
        })}
        </section>
    )
}

const BlogPostsMetaData = graphql`
  query {
    allMarkdownRemark {
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
`

export default Posts