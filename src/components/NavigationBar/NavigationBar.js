import * as React from "react";
import { Link } from "gatsby";
import "./NavigationBar.css";

import NavigationAtom from "../../state/navigationAtom";
import { useRecoilState } from "recoil";

function NavigationBar() {
  const [activeURL, setActiveURL] = useRecoilState(NavigationAtom);
  const [routes, setRoutes] = React.useState([]);

  React.useEffect(() => {
    fetch("/links.json")
      .then((res) => {
        return res.json();
      })
      .then((routeList) => setRoutes(routeList));
  }, []);

  return (
    <nav>
      <h3 className="logo">
        <Link to="/explore">Bridle</Link>
      </h3>
      <ul className="navlinks">
        {routes.map((route) => {
          if (route.navSlug === activeURL.routeSlug) {
            return (
              <li className="active-nav" key={route.navSlug}>
                <Link to="">{route.navTitle}</Link>
              </li>
            );
          }
          return (
            <li key={route.navSlug}>
              <Link
                to={route.navSlug}
                onClick={() =>
                  setActiveURL({
                    routeSlug: route.navSlug,
                    routeTitle: route.navTitle,
                  })
                }
              >
                {route.navTitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavigationBar;
