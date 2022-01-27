import React from 'react';
import "./PostEnd.css"

export function PostEnd({author}) {
  return (
    <section className="post-end-mention">
        <p>Thanks for reading,</p>
        <p>- {author}</p>
    </section>
  );
}