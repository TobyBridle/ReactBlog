import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blogposts.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const truncate = (str, maxlength=48) => {
  if(!str) return "..."
  return str.length > maxlength ? str.slice(0, maxlength).trim() + "..." : str;
}

export default function MarkdownTemplate({data: {markdownRemark: data}}) {

  React.useEffect(() => {
    let origin = window.origin;
  })

  const meta = {
    title: data.frontmatter.title,
    description: data.frontmatter.description,
    author: data.frontmatter.author,
    image: data.frontmatter.articleThumbnail
  }
  return (
    <Layout meta={meta} className="post-container">
      <div className="post-info">
        <h1 className="title">{truncate(data.frontmatter.title)}</h1>
        <div className="post-info-meta">
          <div className="post-meta-author"><p>Author:</p>{data.frontmatter.author}</div>
          <div className="post-meta-date"><p>Date:</p>{data.frontmatter.date}</div>
        </div>
        <div className="post-image">
          <img className={data.frontmatter.squishThumbnail ? "squish" : "no-squish"} src={`${origin}/assets/Banners/${data.frontmatter.articleThumbnail}`} alt="Thumbnail"></img>
        </div>
        </div>
        <div className="post-content" dangerouslySetInnerHTML={{__html: data.html}}></div>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!){
    markdownRemark(id: {eq: $id})
    {
      frontmatter {
        author
        authorPicture
        date(formatString: "MMMM DD YYYY")
        title
        description
        articleThumbnail
        squishThumbnail
      }
      html
    }
  }
`