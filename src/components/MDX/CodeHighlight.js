import React from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
import "./CodeHighlight.css";

export const CodeHighlight = ({content, language}) => {
  return (
    <Highlight {...defaultProps} code={content} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <span className="line-number">{i+1}</span>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
  )
}
