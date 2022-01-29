import React from "react"

export function BlockImage({src, alt="", title=""}) {
  return (
      <div className="post-image">
        <img src={src} alt={alt} title={title} />
      </div>
  )
}