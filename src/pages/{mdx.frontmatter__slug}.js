import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blogposts.css"

import { MDXRenderer } from "gatsby-plugin-mdx";
import PageSplit from "../components/PageSplit/PageSplit";
import { PostEnd } from "../components/MDX/PostEnd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as bookmarkUnchecked } from "@fortawesome/free-regular-svg-icons";
import { useRecoilState } from "recoil";

const truncate = (str, maxlength=48) => {
  if(!str) return "..."
  return str.length > maxlength ? str.slice(0, maxlength).trim() + "..." : str;
}

export default function MarkdownTemplate({data}) {

  React.useEffect(() => {
    const origin = window.origin;
  })

  const { frontmatter, body } = data.mdx;

  const meta = {
    title: frontmatter.title,
    description: frontmatter.description,
    author: frontmatter.author,
    image: frontmatter.articleThumbnail
  }

  return (
    <Layout meta={meta} className="post-container">
      <div className="post-info">
        <h1 className="title">{truncate(frontmatter.title)}</h1>
        <div className="post-info-meta">
          <div className="post-meta-author"><p>Author:</p>{frontmatter.author}</div>
          <div className="post-meta-date"><p>Date:</p>{frontmatter.date}</div>
        </div>
        <div className="post-image">
          <img className={frontmatter.squishThumbnail ? "squish" : "no-squish"} src={`${origin}/assets/Banners/${frontmatter.articleThumbnail}`} alt="Thumbnail"></img>
        </div>
        {/* Bookmark Button */}
        <FontAwesomeIcon icon={faBookmark} />

        {/* Divider */}
        <PageSplit pos="bottom" absolute={false} />

        </div>
        <div className="post-content">
          <MDXRenderer>{body}</MDXRenderer>
          <PostEnd author={frontmatter.author}/>
        </div>
    </Layout>
  );
}

export const query = graphql`
  query SlugFilter($id: String!){
    mdx(id: { eq: $id } ){
       frontmatter {
          author
          authorPicture
          date(formatString: "MMMM DD YYYY")
          title
          description
          articleThumbnail
        squishThumbnail
       }
        body
    }
  }
`