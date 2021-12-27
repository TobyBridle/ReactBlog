import * as React from "react";
import Navbar from "./NavigationBar/NavigationBar.js";

import "./ThemeToggle/themes.css";
import "../index.css";
import { Helmet } from "react-helmet";

const Layout = ({ children, meta }) => {
  let origin = "https://bridle.ml";

  React.useEffect(() => {
    origin = window.location.origin;
    if(window.matchMedia('(prefers-color-scheme: light)').matches) 
    {
      document.documentElement.className = "theme-light";
    } else {
      document.documentElement.className = "theme-dark";
    }
  });
  return (
    <>
      <Helmet>
        <link rel="icon" href={`${origin}//assets/favicon-light.svg`} />
        <title>{`Toby Bridle | ${
          meta.title ? meta.title : "Portfolio Blog"
        }`}</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content={
            meta.description
              ? meta.description
              : "A Blog Page made for display on Toby Bridle's Portfolio"
          }
        />
        <meta
          name="author"
          content={meta.author ? meta.author : "Toby Bridle"}
        />
        <link
          rel="manifest"
          href={`${origin}//assets/manifest.json`}
          crossOrigin="use-credentials"
        />
        <meta name="theme-color" content="#f4f4f4" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${origin}//assets/apple-touch.png`}
        />
        <link
          rel="icon"
          sizes="32x32"
          href={`${origin}//assets/favicon-light.ico`}
        />
        <meta
          name="msapplication-square"
          content={`${origin}//assets/apple-touch.png`}
        />
        <meta
          name="robots"
          content={meta.robots ? meta.robots : "index,nofollow"}
        />
        <meta http-equiv="content-language" content="en-us" />
        <meta property="og:site_name" content="Toby Bridle | Portfolio" />
        <meta
          property="og:title"
          content={`Toby Bridle | ${
            meta.title ? meta.title : "Portfolio Blog"
          }`}
        />
        <meta
          name="twitter:title"
          content={`Toby Bridle | ${
            meta.title ? meta.title : "Portfolio Blog"
          }`}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content={
            meta.description
              ? meta.description
              : "A Blog Page made for display on Toby Bridle's Portfolio"
          }
        />
        <meta
          name="twitter-description"
          content={
            meta.description
              ? meta.description
              : "A Blog Page made for display on Toby Bridle's Portfolio"
          }
        />
        <meta
          property="og:image"
          content={
            meta.image ? meta.image : `${origin}//assets/page-preview-light.jpg`
          }
        />
        <meta
          property="twitter:card"
          content={
            meta.twitter_card ? meta.twitter_card : "summary_large_image"
          }
        />
        <meta
          property="twitter:url"
          content={`${meta.url ? meta.url : "https://bridle.ml/"}`}
        />
        <meta
          property="twitter:image"
          content={`${
            meta.image ? meta.image : `${origin}//assets/page-preview-light.svg`
          }`}
        />
        )
      </Helmet>
      <div className="App">
        <section className="navbar-wrapper">
          <Navbar />
        </section>

        <section className="page-content">{children}</section>
      </div>
    </>
  );
};

export default Layout;
