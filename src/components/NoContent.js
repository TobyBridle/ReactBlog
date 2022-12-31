import React from "React";

function NoContent({ children }) {
  return (
    <div className="no-content">
      <h1>{children}</h1>
      <span>
        Why not check out some other articles <a href="/explore">here</a>
      </span>
    </div>
  );
}

export default NoContent;
