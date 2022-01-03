"use strict";
(self.webpackChunkblog = self.webpackChunkblog || []).push([
  [647],
  {
    5631: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return o;
          },
        });
      var r = a(7294),
        n = a(6249),
        l = a(9519),
        m = a(8167);
      function o(t) {
        var e,
          a,
          o = t.data.markdownRemark,
          c = {
            title: o.frontmatter.title,
            description: o.frontmatter.description,
            author: o.frontmatter.author,
            image: o.frontmatter.articleThumbnail,
          };
        return r.createElement(
          n.default,
          { meta: c },
          r.createElement(
            "div",
            { className: "post-info" },
            r.createElement(
              "h1",
              { className: "title" },
              ((e = o.frontmatter.title),
              void 0 === a && (a = 48),
              e ? (e.length > a ? e.slice(0, a).trim() + "..." : e) : "...")
            ),
            r.createElement(
              "div",
              { className: "post-info-meta" },
              r.createElement(
                "div",
                { className: "post-meta-date" },
                r.createElement(l.G, { icon: m.SZ }),
                r.createElement("p", null, o.frontmatter.date)
              ),
              r.createElement(
                "div",
                { className: "post-meta-author" },
                r.createElement("img", {
                  src: o.frontmatter.authorPicture,
                  alt: "Author Profile Picture",
                }),
                r.createElement("p", null, o.frontmatter.author)
              )
            )
          ),
          r.createElement("div", {
            className: "post-content",
            dangerouslySetInnerHTML: { __html: o.html },
          })
        );
      }
    },
  },
]);
//# sourceMappingURL=component---src-pages-markdown-remark-frontmatter-slug-js-23f4e1dbab8552be461b.js.map
