import * as React from "react";
import Navbar from "./NavigationBar/NavigationBar.js";

import "./ThemeToggle/themes.css";
import "../index.css";
import { Helmet } from "react-helmet";

const Layout = ({ children, meta}) => {
  React.useEffect(() => {
    document.documentElement.className = "theme-light";
  });
  return (
    <>
    <Helmet>
      <link rel="icon" href="/assets/favicon-light.svg"/>
      <title>{`Toby Bridle | ${meta.title ? meta.title : "Portfolio Blog"}`}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={meta.description ? meta.description : "A Blog Page made for display on Toby Bridle's Portfolio"}/>
      <meta name="keywords" content={meta.keywords ? meta.keywords.join(", ") : "Blog, Portfolio, React, Gatsby, Articles"}/>
      <meta name="author" content={meta.author ? meta.author : "Toby Bridle"}/>

      <meta http-equiv="Content-Type" content={ meta.http_equiv ? meta.http_equiv : "text/html;charset=ISO-8859-1"} />
      <meta name="robots" content={ meta.robots ? meta.robots : "index,nofollow" } />

      <meta property="og:site_name" content="Toby Bridle | Portfolio" />
      <meta property="og:title" content={meta?.title} />
      <meta name="twitter:title" content={meta?.title} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={meta.description ? meta.description : "A Blog Page made for display on Toby Bridle's Portfolio"} />
      <meta name="twitter-description" content={meta.description ? meta.description : "A Blog Page made for display on Toby Bridle's Portfolio"} />
      <meta property="og:image" content={meta.image ? meta.image : "/assets/poster-light.svg"} />
      <meta name="twitter:card" content={meta.image ? meta.image : "/assets/poster-light.svg"} />)
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
