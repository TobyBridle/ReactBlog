import * as React from "react";
import { Link } from "gatsby";
import "./NavigationBar.css";

import NavigationAtom from "../../state/navigationAtom";
import { useRecoilState } from "recoil";

function NavigationBar() {
  const [activeURL, setActiveURL] = useRecoilState(NavigationAtom);
  const [routes, setRoutes] = React.useState([false, {}]);

  React.useEffect(() => {
    fetch("/links.json")
      .then((res) => {
        return res.json();
      })
      .then((routeList) => setRoutes(routeList));
    setRoutes([...routes]);
  }, []);

  return (
    <nav>
      <h3 className="logo">
        <Link
          to="/explore/"
          onClick={() =>
            setActiveURL({
              routeSlug: "/explore/",
              routeTitle: "Explore",
            })
          }
        >
          Bridle
        </Link>
      </h3>
      <ul className="navlinks">
        {!!routes[1] &&
          routes.map((route) => {
            console.log(routes, route, activeURL);
            if (route.navSlug === activeURL.routeSlug) {
              return (
                <li className="active-nav" key={route.navSlug}>
                  <Link to={route.navSlug}>{route.navTitle}</Link>
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
