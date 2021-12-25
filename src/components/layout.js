import * as React from "react";
import Navbar from "./NavigationBar/NavigationBar.js";

import "./ThemeToggle/themes.css";
import "../index.css";

const Layout = ({ children, documentTitle }) => {
  React.useEffect(() => {
    let t =
      document.title.split(" | ")[0].length > 0
        ? document.title.split(" | ")[0]
        : "Toby Bridle";
    document.title = `${t} | ${documentTitle}`;
    document.documentElement.className = "theme-dark";
  });
  return (
    <div className="App">
      <section className="navbar-wrapper">
        <Navbar />
      </section>

      <section className="page-content">{children}</section>
    </div>
  );
};

export default Layout;
