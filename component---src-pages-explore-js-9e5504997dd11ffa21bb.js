/*! For license information please see component---src-pages-explore-js-9e5504997dd11ffa21bb.js.LICENSE.txt */
"use strict";
(self.webpackChunkblog = self.webpackChunkblog || []).push([
  [87],
  {
    5209: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return v;
          },
        });
      var n = a(7294),
        r = a(8167),
        l = a(8014),
        o = a(9519),
        i = a(5444),
        s = a(4310),
        c = a(8525);
      var m = function () {
        var e = (0, c.useRecoilState)(s.Z),
          t = (e[0], e[1]);
        return n.createElement(
          "section",
          { className: "page-content-top" },
          n.createElement(
            "div",
            { className: "page-meta" },
            n.createElement(
              "h1",
              { className: "page-content-header" },
              "What's New?"
            ),
            n.createElement(
              "p",
              { className: "page-content-description" },
              "Trending Articles, or even ones from users you Follow"
            )
          ),
          n.createElement(
            "div",
            { className: "page-actions" },
            n.createElement(
              "label",
              { className: "search-bar" },
              n.createElement("input", { type: "text", placeholder: " " }),
              n.createElement(o.G, {
                className: "search-bar-icon",
                icon: l.wn1,
              }),
              n.createElement(
                "span",
                { className: "search-bar-placeholder" },
                "Search"
              )
            ),
            n.createElement(
              i.rU,
              {
                to: "/bookmarks",
                className: "bookmarks-button",
                onClick: function () {
                  return t({
                    routeSlug: "/bookmarks",
                    routeTitle: "Bookmarks",
                  });
                },
              },
              n.createElement(o.G, { className: "bookmarks-icon", icon: r.xV }),
              n.createElement("span", { className: "text" }, "Your Bookmarks")
            )
          )
        );
      };
      var u = function (e) {
          var t = e.size,
            a = void 0 === t ? "narrow" : t,
            r = e.pos,
            l = void 0 === r ? "bottom" : r,
            o = e.thickness,
            i = void 0 === o ? "slim" : o,
            s = e.transform,
            c =
              void 0 === s
                ? { at: null, axis: null, pos: null, size: null }
                : s,
            m = (0, n.useState)(1 / 0),
            u = m[0],
            p = m[1];
          return (
            (0, n.useEffect)(function () {
              var e = function (e) {
                var t = e.target,
                  a =
                    "x" === c.axis.toLowerCase() ? t.innerWidth : t.innerHeight;
                p(a);
              };
              return (
                Math.max(window.innerHeight, window.innerWidth) &&
                  Object.entries(c).length ===
                    Object.entries(c).filter(function (e) {
                      var t;
                      return (
                        (e[1] > 0 ||
                          (null === (t = e[1]) || void 0 === t
                            ? void 0
                            : t.length) > 0) &&
                        null !== e[1]
                      );
                    }).length &&
                  (window.addEventListener("resize", e), e({ target: window })),
                function () {
                  window.removeEventListener("resize", e);
                }
              );
            }, []),
            n.createElement(
              n.Fragment,
              null,
              u <= c.at
                ? n.createElement("hr", {
                    className: "pageSplit " + c.pos + " " + c.size + " " + i,
                  })
                : n.createElement("hr", {
                    className: "pageSplit " + l + " " + a + " " + i,
                  })
            )
          );
        },
        p = (0, c.atom)({ key: "FilterAtom", default: "Following" });
      var d = function () {
          var e = (0, c.useRecoilState)(p),
            t = e[0],
            a = e[1];
          return n.createElement(
            "section",
            { className: "filter-container" },
            n.createElement(u, {
              size: "medium",
              pos: "bottom",
              thickness: "slim",
              transform: { at: 650, axis: "x", pos: "top", size: "medium" },
            }),
            n.createElement(
              "button",
              {
                className:
                  "Following" === t
                    ? "filter-following active-post-filter"
                    : "filter-following",
                onClick: function () {
                  return a("Following");
                },
              },
              "Following"
            ),
            n.createElement(
              "button",
              {
                className:
                  "Popular" === t
                    ? "filter-popular active-post-filter"
                    : "filter-popular",
                onClick: function () {
                  return a("Popular");
                },
              },
              "Popular"
            ),
            n.createElement("div", {
              className:
                "Following" === t
                  ? "active-filter-slider"
                  : "active-filter-slider slide-right",
            })
          );
        },
        f = a(6249),
        g = a(3433),
        E = "3334702500",
        h = function (e) {
          var t = e.postCount,
            a = void 0 === t ? void 0 : t,
            l = (0, i.K2)(E).allMarkdownRemark.nodes,
            s = {
              following: l
                .filter(function (e) {
                  return "none" !== e.frontmatter.following;
                })
                .slice(0, a),
              popular: l
                .filter(function (e) {
                  return e.frontmatter.rank > 0;
                })
                .sort(function (e, t) {
                  return e.frontmatter.rank - t.frontmatter.rank;
                })
                .slice(0, a),
            },
            m = (0, c.useRecoilState)(p)[0];
          return n.createElement(
            "section",
            { className: "PostsContainer" },
            n.createElement(u, {
              size: "medium",
              pos: "right",
              thickness: "slim",
              transform: { at: 650, axis: "x", pos: "none", size: "medium" },
            }),
            s[m.toLowerCase()].map(function (e) {
              var t,
                a,
                l = [],
                s = e.frontmatter,
                c = s.title,
                m = s.description,
                p = s.articleThumbnail,
                d = s.author,
                f = s.authorPicture,
                E = s.slug,
                h = s.tags,
                v = s.rank,
                b = e.timeToRead;
              return (
                v > 0 &&
                  l.push.apply(
                    l,
                    (0, g.Z)(h).concat(["#" + v + " on Trending 🔥"])
                  ),
                n.createElement(
                  i.rU,
                  { key: E, className: "blog-route", to: E },
                  n.createElement(
                    "div",
                    { className: "blog-route-left" },
                    n.createElement(
                      "div",
                      { className: "blog-route-author-info" },
                      n.createElement(
                        "div",
                        { className: "blog-route-author-profile" },
                        n.createElement("img", {
                          src: f,
                          alt: d + "'s Profile Picture",
                        })
                      ),
                      n.createElement("span", null, d)
                    ),
                    n.createElement(
                      "div",
                      { className: "blog-route-title" },
                      (void 0 === a && (a = 48),
                      (t = c)
                        ? t.length > a
                          ? t.slice(0, a).trim() + "..."
                          : t
                        : "...")
                    ),
                    n.createElement(
                      "p",
                      {
                        className: "blog-route-description",
                        "data-nosnippet": !0,
                      },
                      m
                    ),
                    n.createElement(
                      "div",
                      { className: "blog-route-tags", "data-nosnippet": !0 },
                      l.length > 1
                        ? l.map(function (e) {
                            return n.createElement(
                              "div",
                              {
                                key: E + e,
                                className: "blog-route-tag",
                                "data-nosnippet": !0,
                              },
                              e
                            );
                          })
                        : n.createElement(
                            "div",
                            {
                              className: "blog-route-tag",
                              "data-nosnippet": !0,
                            },
                            h
                          )
                    )
                  ),
                  n.createElement(
                    "div",
                    { className: "blog-route-right" },
                    n.createElement(
                      "div",
                      { className: "blog-route-thumbnail" },
                      n.createElement("img", {
                        src: p,
                        alt: "Article Thumbnail",
                      })
                    ),
                    n.createElement(
                      "div",
                      {
                        className: "blog-route-estimated",
                        "data-nosnippet": !0,
                      },
                      n.createElement(o.G, {
                        className: "blog-route-estimated-icon",
                        icon: r.SZ,
                      }),
                      n.createElement(
                        "span",
                        { "data-nosnippet": !0 },
                        b,
                        " min(s)"
                      )
                    )
                  ),
                  n.createElement(u, { size: "large" })
                )
              );
            })
          );
        };
      var v = function () {
        var e = {
          title: "Explore Articles",
          description:
            new Date().toJSON().slice(0, 10).replace(/-/g, "/") +
            " - Some of the most popular hobbyist articles on the site. Gatsby, React & other frameworks are the centrepiece of our articles.",
        };
        return n.createElement(
          f.default,
          { meta: e },
          n.createElement(
            "div",
            {
              className: "ExplorePage",
              style: { width: "100%", height: "100%" },
            },
            n.createElement(m, null),
            n.createElement(d, null),
            n.createElement(h, null)
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-explore-js-9e5504997dd11ffa21bb.js.map
