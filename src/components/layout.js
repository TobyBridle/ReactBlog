import * as React from "react";
import Navbar from "./NavigationBar/NavigationBar.js";

import "./ThemeToggle/themes.css";
import "../index.css";
import { Helmet } from "react-helmet";

const Layout = ({ children, meta, className=""}) => {
  let origin = "https://bridle.ml";

  React.useEffect(() => {
    origin = window.location.origin;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches || window.localStorage.getItem("prefers-color-scheme") !== "light") {
      document.documentElement.className = "theme-dark";
    } else {
      document.documentElement.className = "theme-light";
    }
  });
  return (
    <>
      <Helmet>
        {/* Light Mode Favicon */}
        <link rel="icon" href={`${origin}//assets/favicon-light.svg`} />
        {/* Dark Mode Favicon */}
        <link
          rel="icon"
          href={`${origin}//assets/favicon-dark.svg`}
          media="(prefers-color-scheme: dark)"
        />
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
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${origin}//assets/apple-touch-dark.png`}
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          sizes="32x32"
          href={`${origin}//assets/favicon-light.ico`}
        />
        <link
          rel="icon"
          sizes="32x32"
          href={`${origin}//assets/favicon-dark.ico`}
          media="(prefers-color-scheme: dark)"
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

        <section className={`page-content ${className}`}>{children}</section>
      </div>
    </>
  );
};

export default Layout;
