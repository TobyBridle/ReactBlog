import { atom } from "recoil";

const isBrowser = typeof window !== "undefined";

const defaultRouteTitle = isBrowser
  ? window.location.pathname === "/" || window.location.pathname === "/explore/"
    ? "Explore"
    : document.title.split(" | ")[1]
  : "Explore"

const navigationAtom = atom({
  key: "navigation",
  default: {
    routeSlug: isBrowser
      ? window.location.pathname === "/"
        ? "/explore"
        : window.location.pathname
      : "/explore",
    routeTitle: defaultRouteTitle
  },
});

export default navigationAtom;
