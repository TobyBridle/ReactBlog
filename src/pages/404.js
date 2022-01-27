import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

import "./404.css";

import { useRecoilState } from "recoil";
import navigationAtom from "../state/navigationAtom";

const NotFoundPage = () => {

  const [, setPath ] = useRecoilState(navigationAtom);

  const metaInfo = {
    title: "404 - Page not Found",
    description: "Hmm. There doesn't seem to be an article at this URL.",
    robots: "noindex",
  };
  return (
    <Layout meta={metaInfo}>
      <h1 className="watermark-404">404</h1>
      <div className="content-404">
        <h2>Sorry, we couldn't find that page.</h2>
        <span>Whilst you're here, why not check out some <Link to="/explore"
          onClick={() => setPath({
            routeTitle: "Explore",
            routeSlug: "/explore/",
          })
          }
        >articles</Link></span>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
