import { atom } from "recoil";

const isBrowser = typeof window !== "undefined"

const navigationAtom = atom({
key: "navigation",
default: {
    routeSlug: isBrowser ? (window.location.pathname === "/" ? "/explore" : window.location.pathname) : "/explore",
    routeTitle: isBrowser ? (!document.title.split(" | ")[1] ? "Explore" : document.title.split(" | ")[1]) : "Explore",
    }
});

export default navigationAtom;