import React from "react"

function BlockImage({src, alt="", title=""}) {
  return (
      <div className="post-image">
        <img src={src} alt={alt} title={title} />
      </div>
  )
}

export default BlockImage;
