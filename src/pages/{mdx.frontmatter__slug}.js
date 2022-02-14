import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "./blogposts.css"

import { MDXRenderer } from "gatsby-plugin-mdx";
import PageSplit from "../components/PageSplit/PageSplit";
import { PostEnd } from "../components/MDX/PostEnd";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as bookmarkChecked } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as bookmarkUnchecked } from "@fortawesome/free-regular-svg-icons";

import { useRecoilState } from "recoil";
import BookmarkAtom from "../state/bookmarkAtom";

const truncate = (str, maxlength=48) => {
  if(!str) return "..."
  return str.length > maxlength ? str.slice(0, maxlength).trim() + "..." : str;
}
export default function MarkdownTemplate({data}) {

  const { frontmatter, body } = data.mdx;
  const [bookmarks, setBookmarks] = useRecoilState(BookmarkAtom);

  const [bookmarkIcon, setBookmarkIcon] = React.useState(bookmarkUnchecked);
  let origin = process.env.GATSBY_PAGE_ORIGIN;

  const swapBookmarks = () => {

    // Wants to add
    if(bookmarkIcon === bookmarkUnchecked){
      setBookmarks([...bookmarks, frontmatter.slug]);
      setBookmarkIcon(bookmarkChecked);
    }

    // Wants to remove from bookmarks
    if(bookmarkIcon === bookmarkChecked)
    {
      setBookmarks(bookmarks.filter(bookmark => bookmark !== frontmatter.slug));
      setBookmarkIcon(bookmarkUnchecked);
    }
  }

  React.useEffect(() => {
    if(bookmarks.includes(frontmatter.slug))
    {
      setBookmarkIcon(bookmarkChecked);
    }
  }, [])

  const meta = {
    title: frontmatter.title,
    description: frontmatter.description,
    author: frontmatter.author,
    image: frontmatter.articleThumbnail
  }

  return (
    <>
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
        {/* Divider */}
        <PageSplit pos="bottom" absolute={false} />

        </div>
        <div className="post-content">
          <MDXRenderer>{body}</MDXRenderer>
          <PostEnd author={frontmatter.author}/>
        </div>
    </Layout>
    {/* Bookmark Button */}
    <div className="post-bookmark" onClick={swapBookmarks}>
      {/* If you like this article, why not bookmark it? */}
      <span>{bookmarkIcon === bookmarkUnchecked ? "Bookmark?" : "Remove from Bookmarks?"}</span>
      <FontAwesomeIcon icon={bookmarkIcon} />
    </div>
    </>
  );
}

export const query = graphql`
  query SlugFilter($id: String!){
    mdx(id: { eq: $id } ){
       frontmatter {
          slug
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