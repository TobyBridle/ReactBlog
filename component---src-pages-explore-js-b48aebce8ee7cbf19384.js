/*! For license information please see component---src-pages-explore-js-b48aebce8ee7cbf19384.js.LICENSE.txt */
"use strict";
(self.webpackChunkblog = self.webpackChunkblog || []).push([
  [87],
  {
    6119: function (t, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return ln;
          },
        });
      var r = e(7294),
        a = {
          prefix: "far",
          iconName: "bookmark",
          icon: [
            384,
            512,
            [],
            "f02e",
            "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z",
          ],
        },
        i = {
          prefix: "far",
          iconName: "clock",
          icon: [
            512,
            512,
            [],
            "f017",
            "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z",
          ],
        },
        o = e(8014);
      function s(t) {
        return (
          (s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          s(t)
        );
      }
      function l(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function c(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function f(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })
            )),
            r.forEach(function (n) {
              c(t, n, e[n]);
            });
        }
        return t;
      }
      function u(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e = [],
              r = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, s = t[Symbol.iterator]();
                !(r = (o = s.next()).done) &&
                (e.push(o.value), !n || e.length !== n);
                r = !0
              );
            } catch (l) {
              (a = !0), (i = l);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (a) throw i;
              }
            }
            return e;
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var m = function () {},
        p = {},
        d = {},
        h = { mark: m, measure: m };
      try {
        "undefined" != typeof window && (p = window),
          "undefined" != typeof document && (d = document),
          "undefined" != typeof MutationObserver && MutationObserver,
          "undefined" != typeof performance && (h = performance);
      } catch (cn) {}
      var g = (p.navigator || {}).userAgent,
        b = void 0 === g ? "" : g,
        y = p,
        v = d,
        w = h,
        k =
          (y.document,
          !!v.documentElement &&
            !!v.head &&
            "function" == typeof v.addEventListener &&
            "function" == typeof v.createElement),
        x = (~b.indexOf("MSIE") || b.indexOf("Trident/"), "svg-inline--fa"),
        E = "data-fa-i2svg",
        O =
          ((function () {
            try {
            } catch (cn) {
              return !1;
            }
          })(),
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        _ = O.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        N = {
          GROUP: "group",
          SWAP_OPACITY: "swap-opacity",
          PRIMARY: "primary",
          SECONDARY: "secondary",
        },
        z =
          ([
            "xs",
            "sm",
            "lg",
            "fw",
            "ul",
            "li",
            "border",
            "pull-left",
            "pull-right",
            "spin",
            "pulse",
            "rotate-90",
            "rotate-180",
            "rotate-270",
            "flip-horizontal",
            "flip-vertical",
            "flip-both",
            "stack",
            "stack-1x",
            "stack-2x",
            "inverse",
            "layers",
            "layers-text",
            "layers-counter",
            N.GROUP,
            N.SWAP_OPACITY,
            N.PRIMARY,
            N.SECONDARY,
          ]
            .concat(
              O.map(function (t) {
                return "".concat(t, "x");
              })
            )
            .concat(
              _.map(function (t) {
                return "w-".concat(t);
              })
            ),
          y.FontAwesomeConfig || {});
      if (v && "function" == typeof v.querySelector) {
        [
          ["data-family-prefix", "familyPrefix"],
          ["data-replacement-class", "replacementClass"],
          ["data-auto-replace-svg", "autoReplaceSvg"],
          ["data-auto-add-css", "autoAddCss"],
          ["data-auto-a11y", "autoA11y"],
          ["data-search-pseudo-elements", "searchPseudoElements"],
          ["data-observe-mutations", "observeMutations"],
          ["data-mutate-approach", "mutateApproach"],
          ["data-keep-original-source", "keepOriginalSource"],
          ["data-measure-performance", "measurePerformance"],
          ["data-show-missing-icons", "showMissingIcons"],
        ].forEach(function (t) {
          var n = u(t, 2),
            e = n[0],
            r = n[1],
            a = (function (t) {
              return "" === t || ("false" !== t && ("true" === t || t));
            })(
              (function (t) {
                var n = v.querySelector("script[" + t + "]");
                if (n) return n.getAttribute(t);
              })(e)
            );
          null != a && (z[r] = a);
        });
      }
      var P = f(
        {},
        {
          familyPrefix: "fa",
          replacementClass: x,
          autoReplaceSvg: !0,
          autoAddCss: !0,
          autoA11y: !0,
          searchPseudoElements: !1,
          observeMutations: !0,
          mutateApproach: "async",
          keepOriginalSource: !0,
          measurePerformance: !1,
          showMissingIcons: !0,
        },
        z
      );
      P.autoReplaceSvg || (P.observeMutations = !1);
      var A = f({}, P);
      y.FontAwesomeConfig = A;
      var j = y || {};
      j.___FONT_AWESOME___ || (j.___FONT_AWESOME___ = {}),
        j.___FONT_AWESOME___.styles || (j.___FONT_AWESOME___.styles = {}),
        j.___FONT_AWESOME___.hooks || (j.___FONT_AWESOME___.hooks = {}),
        j.___FONT_AWESOME___.shims || (j.___FONT_AWESOME___.shims = []);
      var M = j.___FONT_AWESOME___,
        S = [];
      k &&
        ((v.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          v.readyState
        ) ||
          v.addEventListener("DOMContentLoaded", function t() {
            v.removeEventListener("DOMContentLoaded", t),
              1,
              S.map(function (t) {
                return t();
              });
          }));
      var C,
        I = "pending",
        T = "settled",
        L = "fulfilled",
        R = "rejected",
        W = function () {},
        F =
          void 0 !== e.g &&
          void 0 !== e.g.process &&
          "function" == typeof e.g.process.emit,
        D = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        Y = [];
      function U() {
        for (var t = 0; t < Y.length; t++) Y[t][0](Y[t][1]);
        (Y = []), (C = !1);
      }
      function X(t, n) {
        Y.push([t, n]), C || ((C = !0), D(U, 0));
      }
      function B(t) {
        var n = t.owner,
          e = n._state,
          r = n._data,
          a = t[e],
          i = t.then;
        if ("function" == typeof a) {
          e = L;
          try {
            r = a(r);
          } catch (cn) {
            G(i, cn);
          }
        }
        H(i, r) || (e === L && V(i, r), e === R && G(i, r));
      }
      function H(t, n) {
        var e;
        try {
          if (t === n)
            throw new TypeError(
              "A promises callback cannot return that same promise."
            );
          if (n && ("function" == typeof n || "object" === s(n))) {
            var r = n.then;
            if ("function" == typeof r)
              return (
                r.call(
                  n,
                  function (r) {
                    e || ((e = !0), n === r ? q(t, r) : V(t, r));
                  },
                  function (n) {
                    e || ((e = !0), G(t, n));
                  }
                ),
                !0
              );
          }
        } catch (cn) {
          return e || G(t, cn), !0;
        }
        return !1;
      }
      function V(t, n) {
        (t !== n && H(t, n)) || q(t, n);
      }
      function q(t, n) {
        t._state === I && ((t._state = T), (t._data = n), X(Z, t));
      }
      function G(t, n) {
        t._state === I && ((t._state = T), (t._data = n), X(J, t));
      }
      function K(t) {
        t._then = t._then.forEach(B);
      }
      function Z(t) {
        (t._state = L), K(t);
      }
      function J(t) {
        (t._state = R),
          K(t),
          !t._handled &&
            F &&
            e.g.process.emit("unhandledRejection", t._data, t);
      }
      function Q(t) {
        e.g.process.emit("rejectionHandled", t);
      }
      function $(t) {
        if ("function" != typeof t)
          throw new TypeError("Promise resolver " + t + " is not a function");
        if (this instanceof $ == !1)
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        (this._then = []),
          (function (t, n) {
            function e(t) {
              G(n, t);
            }
            try {
              t(function (t) {
                V(n, t);
              }, e);
            } catch (cn) {
              e(cn);
            }
          })(t, this);
      }
      ($.prototype = {
        constructor: $,
        _state: I,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, n) {
          var e = {
            owner: this,
            then: new this.constructor(W),
            fulfilled: t,
            rejected: n,
          };
          return (
            (!n && !t) ||
              this._handled ||
              ((this._handled = !0), this._state === R && F && X(Q, this)),
            this._state === L || this._state === R
              ? X(B, e)
              : this._then.push(e),
            e.then
          );
        },
        catch: function (t) {
          return this.then(null, t);
        },
      }),
        ($.all = function (t) {
          if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.all().");
          return new $(function (n, e) {
            var r = [],
              a = 0;
            function i(t) {
              return (
                a++,
                function (e) {
                  (r[t] = e), --a || n(r);
                }
              );
            }
            for (var o, s = 0; s < t.length; s++)
              (o = t[s]) && "function" == typeof o.then
                ? o.then(i(s), e)
                : (r[s] = o);
            a || n(r);
          });
        }),
        ($.race = function (t) {
          if (!Array.isArray(t))
            throw new TypeError("You must pass an array to Promise.race().");
          return new $(function (n, e) {
            for (var r, a = 0; a < t.length; a++)
              (r = t[a]) && "function" == typeof r.then ? r.then(n, e) : n(r);
          });
        }),
        ($.resolve = function (t) {
          return t && "object" === s(t) && t.constructor === $
            ? t
            : new $(function (n) {
                n(t);
              });
        }),
        ($.reject = function (t) {
          return new $(function (n, e) {
            e(t);
          });
        });
      var tt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function nt(t) {
        if (t && k) {
          var n = v.createElement("style");
          n.setAttribute("type", "text/css"), (n.innerHTML = t);
          for (
            var e = v.head.childNodes, r = null, a = e.length - 1;
            a > -1;
            a--
          ) {
            var i = e[a],
              o = (i.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
          }
          return v.head.insertBefore(n, r), t;
        }
      }
      function et() {
        for (var t = 12, n = ""; t-- > 0; )
          n += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return n;
      }
      function rt(t) {
        return ""
          .concat(t)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function at(t) {
        return Object.keys(t || {}).reduce(function (n, e) {
          return n + "".concat(e, ": ").concat(t[e], ";");
        }, "");
      }
      function it(t) {
        return (
          t.size !== tt.size ||
          t.x !== tt.x ||
          t.y !== tt.y ||
          t.rotate !== tt.rotate ||
          t.flipX ||
          t.flipY
        );
      }
      function ot(t) {
        var n = t.transform,
          e = t.containerWidth,
          r = t.iconWidth,
          a = { transform: "translate(".concat(e / 2, " 256)") },
          i = "translate(".concat(32 * n.x, ", ").concat(32 * n.y, ") "),
          o = "scale("
            .concat((n.size / 16) * (n.flipX ? -1 : 1), ", ")
            .concat((n.size / 16) * (n.flipY ? -1 : 1), ") "),
          s = "rotate(".concat(n.rotate, " 0 0)");
        return {
          outer: a,
          inner: { transform: "".concat(i, " ").concat(o, " ").concat(s) },
          path: { transform: "translate(".concat((r / 2) * -1, " -256)") },
        };
      }
      var st = { x: 0, y: 0, width: "100%", height: "100%" };
      function lt(t) {
        var n =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          t.attributes &&
            (t.attributes.fill || n) &&
            (t.attributes.fill = "black"),
          t
        );
      }
      function ct(t) {
        var n = t.icons,
          e = n.main,
          r = n.mask,
          a = t.prefix,
          i = t.iconName,
          o = t.transform,
          s = t.symbol,
          l = t.title,
          c = t.maskId,
          u = t.titleId,
          m = t.extra,
          p = t.watchable,
          d = void 0 !== p && p,
          h = r.found ? r : e,
          g = h.width,
          b = h.height,
          y = "fak" === a,
          v = y ? "" : "fa-w-".concat(Math.ceil((g / b) * 16)),
          w = [
            A.replacementClass,
            i ? "".concat(A.familyPrefix, "-").concat(i) : "",
            v,
          ]
            .filter(function (t) {
              return -1 === m.classes.indexOf(t);
            })
            .filter(function (t) {
              return "" !== t || !!t;
            })
            .concat(m.classes)
            .join(" "),
          k = {
            children: [],
            attributes: f({}, m.attributes, {
              "data-prefix": a,
              "data-icon": i,
              class: w,
              role: m.attributes.role || "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 ".concat(g, " ").concat(b),
            }),
          },
          x =
            y && !~m.classes.indexOf("fa-fw")
              ? { width: "".concat((g / b) * 16 * 0.0625, "em") }
              : {};
        d && (k.attributes[E] = ""),
          l &&
            k.children.push({
              tag: "title",
              attributes: {
                id:
                  k.attributes["aria-labelledby"] || "title-".concat(u || et()),
              },
              children: [l],
            });
        var O = f({}, k, {
            prefix: a,
            iconName: i,
            main: e,
            mask: r,
            maskId: c,
            transform: o,
            symbol: s,
            styles: f({}, x, m.styles),
          }),
          _ =
            r.found && e.found
              ? (function (t) {
                  var n,
                    e = t.children,
                    r = t.attributes,
                    a = t.main,
                    i = t.mask,
                    o = t.maskId,
                    s = t.transform,
                    l = a.width,
                    c = a.icon,
                    u = i.width,
                    m = i.icon,
                    p = ot({ transform: s, containerWidth: u, iconWidth: l }),
                    d = {
                      tag: "rect",
                      attributes: f({}, st, { fill: "white" }),
                    },
                    h = c.children ? { children: c.children.map(lt) } : {},
                    g = {
                      tag: "g",
                      attributes: f({}, p.inner),
                      children: [
                        lt(
                          f(
                            {
                              tag: c.tag,
                              attributes: f({}, c.attributes, p.path),
                            },
                            h
                          )
                        ),
                      ],
                    },
                    b = { tag: "g", attributes: f({}, p.outer), children: [g] },
                    y = "mask-".concat(o || et()),
                    v = "clip-".concat(o || et()),
                    w = {
                      tag: "mask",
                      attributes: f({}, st, {
                        id: y,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse",
                      }),
                      children: [d, b],
                    },
                    k = {
                      tag: "defs",
                      children: [
                        {
                          tag: "clipPath",
                          attributes: { id: v },
                          children: ((n = m), "g" === n.tag ? n.children : [n]),
                        },
                        w,
                      ],
                    };
                  return (
                    e.push(k, {
                      tag: "rect",
                      attributes: f(
                        {
                          fill: "currentColor",
                          "clip-path": "url(#".concat(v, ")"),
                          mask: "url(#".concat(y, ")"),
                        },
                        st
                      ),
                    }),
                    { children: e, attributes: r }
                  );
                })(O)
              : (function (t) {
                  var n = t.children,
                    e = t.attributes,
                    r = t.main,
                    a = t.transform,
                    i = at(t.styles);
                  if ((i.length > 0 && (e.style = i), it(a))) {
                    var o = ot({
                      transform: a,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    });
                    n.push({
                      tag: "g",
                      attributes: f({}, o.outer),
                      children: [
                        {
                          tag: "g",
                          attributes: f({}, o.inner),
                          children: [
                            {
                              tag: r.icon.tag,
                              children: r.icon.children,
                              attributes: f({}, r.icon.attributes, o.path),
                            },
                          ],
                        },
                      ],
                    });
                  } else n.push(r.icon);
                  return { children: n, attributes: e };
                })(O),
          N = _.children,
          z = _.attributes;
        return (
          (O.children = N),
          (O.attributes = z),
          s
            ? (function (t) {
                var n = t.prefix,
                  e = t.iconName,
                  r = t.children,
                  a = t.attributes,
                  i = t.symbol;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: f({}, a, {
                          id:
                            !0 === i
                              ? ""
                                  .concat(n, "-")
                                  .concat(A.familyPrefix, "-")
                                  .concat(e)
                              : i,
                        }),
                        children: r,
                      },
                    ],
                  },
                ];
              })(O)
            : (function (t) {
                var n = t.children,
                  e = t.main,
                  r = t.mask,
                  a = t.attributes,
                  i = t.styles,
                  o = t.transform;
                if (it(o) && e.found && !r.found) {
                  var s = { x: e.width / e.height / 2, y: 0.5 };
                  a.style = at(
                    f({}, i, {
                      "transform-origin": ""
                        .concat(s.x + o.x / 16, "em ")
                        .concat(s.y + o.y / 16, "em"),
                    })
                  );
                }
                return [{ tag: "svg", attributes: a, children: n }];
              })(O)
        );
      }
      var ft = function () {},
        ut =
          (A.measurePerformance && w && w.mark && w.measure,
          function (t, n, e, r) {
            var a,
              i,
              o,
              s = Object.keys(t),
              l = s.length,
              c =
                void 0 !== r
                  ? (function (t, n) {
                      return function (e, r, a, i) {
                        return t.call(n, e, r, a, i);
                      };
                    })(n, r)
                  : n;
            for (
              void 0 === e ? ((a = 1), (o = t[s[0]])) : ((a = 0), (o = e));
              a < l;
              a++
            )
              o = c(o, t[(i = s[a])], i, t);
            return o;
          });
      function mt(t, n) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = e.skipHooks,
          a = void 0 !== r && r,
          i = Object.keys(n).reduce(function (t, e) {
            var r = n[e];
            return !!r.icon ? (t[r.iconName] = r.icon) : (t[e] = r), t;
          }, {});
        "function" != typeof M.hooks.addPack || a
          ? (M.styles[t] = f({}, M.styles[t] || {}, i))
          : M.hooks.addPack(t, i),
          "fas" === t && mt("fa", n);
      }
      var pt = M.styles,
        dt = M.shims,
        ht = function () {
          var t = function (t) {
            return ut(
              pt,
              function (n, e, r) {
                return (n[r] = ut(e, t, {})), n;
              },
              {}
            );
          };
          t(function (t, n, e) {
            return n[3] && (t[n[3]] = e), t;
          }),
            t(function (t, n, e) {
              var r = n[2];
              return (
                (t[e] = e),
                r.forEach(function (n) {
                  t[n] = e;
                }),
                t
              );
            });
          var n = "far" in pt;
          ut(
            dt,
            function (t, e) {
              var r = e[0],
                a = e[1],
                i = e[2];
              return (
                "far" !== a || n || (a = "fas"),
                (t[r] = { prefix: a, iconName: i }),
                t
              );
            },
            {}
          );
        };
      ht();
      M.styles;
      function gt(t, n, e) {
        if (t && t[n] && t[n][e])
          return { prefix: n, iconName: e, icon: t[n][e] };
      }
      function bt(t) {
        var n = t.tag,
          e = t.attributes,
          r = void 0 === e ? {} : e,
          a = t.children,
          i = void 0 === a ? [] : a;
        return "string" == typeof t
          ? rt(t)
          : "<"
              .concat(n, " ")
              .concat(
                (function (t) {
                  return Object.keys(t || {})
                    .reduce(function (n, e) {
                      return n + "".concat(e, '="').concat(rt(t[e]), '" ');
                    }, "")
                    .trim();
                })(r),
                ">"
              )
              .concat(i.map(bt).join(""), "</")
              .concat(n, ">");
      }
      var yt = function (t) {
        var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
        return t
          ? t
              .toLowerCase()
              .split(" ")
              .reduce(function (t, n) {
                var e = n.toLowerCase().split("-"),
                  r = e[0],
                  a = e.slice(1).join("-");
                if (r && "h" === a) return (t.flipX = !0), t;
                if (r && "v" === a) return (t.flipY = !0), t;
                if (((a = parseFloat(a)), isNaN(a))) return t;
                switch (r) {
                  case "grow":
                    t.size = t.size + a;
                    break;
                  case "shrink":
                    t.size = t.size - a;
                    break;
                  case "left":
                    t.x = t.x - a;
                    break;
                  case "right":
                    t.x = t.x + a;
                    break;
                  case "up":
                    t.y = t.y - a;
                    break;
                  case "down":
                    t.y = t.y + a;
                    break;
                  case "rotate":
                    t.rotate = t.rotate + a;
                }
                return t;
              }, n)
          : n;
      };
      function vt(t) {
        (this.name = "MissingIcon"),
          (this.message = t || "Icon unavailable"),
          (this.stack = new Error().stack);
      }
      (vt.prototype = Object.create(Error.prototype)),
        (vt.prototype.constructor = vt);
      var wt = { fill: "currentColor" },
        kt = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
        xt = {
          tag: "path",
          attributes: f({}, wt, {
            d:
              "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
          }),
        },
        Et = f({}, kt, { attributeName: "opacity" });
      f({}, wt, { cx: "256", cy: "364", r: "28" }),
        f({}, kt, { attributeName: "r", values: "28;14;28;28;14;28;" }),
        f({}, Et, { values: "1;0;1;1;0;1;" }),
        f({}, wt, {
          opacity: "1",
          d:
            "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
        }),
        f({}, Et, { values: "1;0;0;0;0;1;" }),
        f({}, wt, {
          opacity: "0",
          d:
            "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
        }),
        f({}, Et, { values: "0;0;1;1;0;0;" }),
        M.styles;
      function Ot(t) {
        var n = t[0],
          e = t[1],
          r = u(t.slice(4), 1)[0];
        return {
          found: !0,
          width: n,
          height: e,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(A.familyPrefix, "-").concat(N.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(A.familyPrefix, "-").concat(N.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(A.familyPrefix, "-").concat(N.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        };
      }
      M.styles;
      function _t() {
        var t = "fa",
          n = x,
          e = A.familyPrefix,
          r = A.replacementClass,
          a =
            'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
        if (e !== t || r !== n) {
          var i = new RegExp("\\.".concat(t, "\\-"), "g"),
            o = new RegExp("\\--".concat(t, "\\-"), "g"),
            s = new RegExp("\\.".concat(n), "g");
          a = a
            .replace(i, ".".concat(e, "-"))
            .replace(o, "--".concat(e, "-"))
            .replace(s, ".".concat(r));
        }
        return a;
      }
      var Nt = (function () {
        function t() {
          !(function (t, n) {
            if (!(t instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, t),
            (this.definitions = {});
        }
        var n, e, r;
        return (
          (n = t),
          (e = [
            {
              key: "add",
              value: function () {
                for (
                  var t = this, n = arguments.length, e = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  e[r] = arguments[r];
                var a = e.reduce(this._pullDefinitions, {});
                Object.keys(a).forEach(function (n) {
                  (t.definitions[n] = f({}, t.definitions[n] || {}, a[n])),
                    mt(n, a[n]),
                    ht();
                });
              },
            },
            {
              key: "reset",
              value: function () {
                this.definitions = {};
              },
            },
            {
              key: "_pullDefinitions",
              value: function (t, n) {
                var e = n.prefix && n.iconName && n.icon ? { 0: n } : n;
                return (
                  Object.keys(e).map(function (n) {
                    var r = e[n],
                      a = r.prefix,
                      i = r.iconName,
                      o = r.icon;
                    t[a] || (t[a] = {}), (t[a][i] = o);
                  }),
                  t
                );
              },
            },
          ]),
          e && l(n.prototype, e),
          r && l(n, r),
          t
        );
      })();
      function zt() {
        A.autoAddCss && !St && (nt(_t()), (St = !0));
      }
      function Pt(t, n) {
        return (
          Object.defineProperty(t, "abstract", { get: n }),
          Object.defineProperty(t, "html", {
            get: function () {
              return t.abstract.map(function (t) {
                return bt(t);
              });
            },
          }),
          Object.defineProperty(t, "node", {
            get: function () {
              if (k) {
                var n = v.createElement("div");
                return (n.innerHTML = t.html), n.children;
              }
            },
          }),
          t
        );
      }
      function At(t) {
        var n = t.prefix,
          e = void 0 === n ? "fa" : n,
          r = t.iconName;
        if (r) return gt(Mt.definitions, e, r) || gt(M.styles, e, r);
      }
      var jt,
        Mt = new Nt(),
        St = !1,
        Ct = {
          transform: function (t) {
            return yt(t);
          },
        },
        It =
          ((jt = function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = n.transform,
              r = void 0 === e ? tt : e,
              a = n.symbol,
              i = void 0 !== a && a,
              o = n.mask,
              s = void 0 === o ? null : o,
              l = n.maskId,
              c = void 0 === l ? null : l,
              u = n.title,
              m = void 0 === u ? null : u,
              p = n.titleId,
              d = void 0 === p ? null : p,
              h = n.classes,
              g = void 0 === h ? [] : h,
              b = n.attributes,
              y = void 0 === b ? {} : b,
              v = n.styles,
              w = void 0 === v ? {} : v;
            if (t) {
              var k = t.prefix,
                x = t.iconName,
                E = t.icon;
              return Pt(f({ type: "icon" }, t), function () {
                return (
                  zt(),
                  A.autoA11y &&
                    (m
                      ? (y["aria-labelledby"] = ""
                          .concat(A.replacementClass, "-title-")
                          .concat(d || et()))
                      : ((y["aria-hidden"] = "true"), (y.focusable = "false"))),
                  ct({
                    icons: {
                      main: Ot(E),
                      mask: s
                        ? Ot(s.icon)
                        : { found: !1, width: null, height: null, icon: {} },
                    },
                    prefix: k,
                    iconName: x,
                    transform: f({}, tt, r),
                    symbol: i,
                    title: m,
                    maskId: c,
                    titleId: d,
                    extra: { attributes: y, styles: w, classes: g },
                  })
                );
              });
            }
          }),
          function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = (t || {}).icon ? t : At(t || {}),
              r = n.mask;
            return (
              r && (r = (r || {}).icon ? r : At(r || {})),
              jt(e, f({}, n, { mask: r }))
            );
          }),
        Tt = e(5697),
        Lt = e.n(Tt);
      function Rt(t) {
        return (
          (Rt =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          Rt(t)
        );
      }
      function Wt(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function Ft(t, n) {
        var e = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n &&
            (r = r.filter(function (n) {
              return Object.getOwnPropertyDescriptor(t, n).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function Dt(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Ft(Object(e), !0).forEach(function (n) {
                Wt(t, n, e[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
            : Ft(Object(e)).forEach(function (n) {
                Object.defineProperty(
                  t,
                  n,
                  Object.getOwnPropertyDescriptor(e, n)
                );
              });
        }
        return t;
      }
      function Yt(t, n) {
        if (null == t) return {};
        var e,
          r,
          a = (function (t, n) {
            if (null == t) return {};
            var e,
              r,
              a = {},
              i = Object.keys(t);
            for (r = 0; r < i.length; r++)
              (e = i[r]), n.indexOf(e) >= 0 || (a[e] = t[e]);
            return a;
          })(t, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (e = i[r]),
              n.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, e) &&
                  (a[e] = t[e]));
        }
        return a;
      }
      function Ut(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) {
              for (var n = 0, e = new Array(t.length); n < t.length; n++)
                e[n] = t[n];
              return e;
            }
          })(t) ||
          (function (t) {
            if (
              Symbol.iterator in Object(t) ||
              "[object Arguments]" === Object.prototype.toString.call(t)
            )
              return Array.from(t);
          })(t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function Xt(t) {
        return (
          (n = t),
          (n -= 0) == n
            ? t
            : (t = t.replace(/[\-_\s]+(.)?/g, function (t, n) {
                return n ? n.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + t.substr(1)
        );
        var n;
      }
      function Bt(t) {
        return t
          .split(";")
          .map(function (t) {
            return t.trim();
          })
          .filter(function (t) {
            return t;
          })
          .reduce(function (t, n) {
            var e,
              r = n.indexOf(":"),
              a = Xt(n.slice(0, r)),
              i = n.slice(r + 1).trim();
            return (
              a.startsWith("webkit")
                ? (t[((e = a), e.charAt(0).toUpperCase() + e.slice(1))] = i)
                : (t[a] = i),
              t
            );
          }, {});
      }
      var Ht = !1;
      try {
        Ht = !0;
      } catch (cn) {}
      function Vt(t) {
        return t && "object" === Rt(t) && t.prefix && t.iconName && t.icon
          ? t
          : Ct.icon
          ? Ct.icon(t)
          : null === t
          ? null
          : t && "object" === Rt(t) && t.prefix && t.iconName
          ? t
          : Array.isArray(t) && 2 === t.length
          ? { prefix: t[0], iconName: t[1] }
          : "string" == typeof t
          ? { prefix: "fas", iconName: t }
          : void 0;
      }
      function qt(t, n) {
        return (Array.isArray(n) && n.length > 0) || (!Array.isArray(n) && n)
          ? Wt({}, t, n)
          : {};
      }
      function Gt(t) {
        var n = t.forwardedRef,
          e = Yt(t, ["forwardedRef"]),
          r = e.icon,
          a = e.mask,
          i = e.symbol,
          o = e.className,
          s = e.title,
          l = e.titleId,
          c = Vt(r),
          f = qt(
            "classes",
            [].concat(
              Ut(
                (function (t) {
                  var n,
                    e = t.spin,
                    r = t.pulse,
                    a = t.fixedWidth,
                    i = t.inverse,
                    o = t.border,
                    s = t.listItem,
                    l = t.flip,
                    c = t.size,
                    f = t.rotation,
                    u = t.pull,
                    m =
                      (Wt(
                        (n = {
                          "fa-spin": e,
                          "fa-pulse": r,
                          "fa-fw": a,
                          "fa-inverse": i,
                          "fa-border": o,
                          "fa-li": s,
                          "fa-flip-horizontal":
                            "horizontal" === l || "both" === l,
                          "fa-flip-vertical": "vertical" === l || "both" === l,
                        }),
                        "fa-".concat(c),
                        null != c
                      ),
                      Wt(n, "fa-rotate-".concat(f), null != f && 0 !== f),
                      Wt(n, "fa-pull-".concat(u), null != u),
                      Wt(n, "fa-swap-opacity", t.swapOpacity),
                      n);
                  return Object.keys(m)
                    .map(function (t) {
                      return m[t] ? t : null;
                    })
                    .filter(function (t) {
                      return t;
                    });
                })(e)
              ),
              Ut(o.split(" "))
            )
          ),
          u = qt(
            "transform",
            "string" == typeof e.transform
              ? Ct.transform(e.transform)
              : e.transform
          ),
          m = qt("mask", Vt(a)),
          p = It(
            c,
            Dt({}, f, {}, u, {}, m, { symbol: i, title: s, titleId: l })
          );
        if (!p)
          return (
            (function () {
              var t;
              !Ht &&
                console &&
                "function" == typeof console.error &&
                (t = console).error.apply(t, arguments);
            })("Could not find icon", c),
            null
          );
        var d = p.abstract,
          h = { ref: n };
        return (
          Object.keys(e).forEach(function (t) {
            Gt.defaultProps.hasOwnProperty(t) || (h[t] = e[t]);
          }),
          Kt(d[0], h)
        );
      }
      (Gt.displayName = "FontAwesomeIcon"),
        (Gt.propTypes = {
          border: Lt().bool,
          className: Lt().string,
          mask: Lt().oneOfType([Lt().object, Lt().array, Lt().string]),
          fixedWidth: Lt().bool,
          inverse: Lt().bool,
          flip: Lt().oneOf(["horizontal", "vertical", "both"]),
          icon: Lt().oneOfType([Lt().object, Lt().array, Lt().string]),
          listItem: Lt().bool,
          pull: Lt().oneOf(["right", "left"]),
          pulse: Lt().bool,
          rotation: Lt().oneOf([0, 90, 180, 270]),
          size: Lt().oneOf([
            "lg",
            "xs",
            "sm",
            "1x",
            "2x",
            "3x",
            "4x",
            "5x",
            "6x",
            "7x",
            "8x",
            "9x",
            "10x",
          ]),
          spin: Lt().bool,
          symbol: Lt().oneOfType([Lt().bool, Lt().string]),
          title: Lt().string,
          transform: Lt().oneOfType([Lt().string, Lt().object]),
          swapOpacity: Lt().bool,
        }),
        (Gt.defaultProps = {
          border: !1,
          className: "",
          mask: null,
          fixedWidth: !1,
          inverse: !1,
          flip: null,
          icon: null,
          listItem: !1,
          pull: null,
          pulse: !1,
          rotation: null,
          size: null,
          spin: !1,
          symbol: !1,
          title: "",
          transform: null,
          swapOpacity: !1,
        });
      var Kt = function t(n, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" == typeof e) return e;
          var a = (e.children || []).map(function (e) {
              return t(n, e);
            }),
            i = Object.keys(e.attributes || {}).reduce(
              function (t, n) {
                var r = e.attributes[n];
                switch (n) {
                  case "class":
                    (t.attrs.className = r), delete e.attributes.class;
                    break;
                  case "style":
                    t.attrs.style = Bt(r);
                    break;
                  default:
                    0 === n.indexOf("aria-") || 0 === n.indexOf("data-")
                      ? (t.attrs[n.toLowerCase()] = r)
                      : (t.attrs[Xt(n)] = r);
                }
                return t;
              },
              { attrs: {} }
            ),
            o = r.style,
            s = void 0 === o ? {} : o,
            l = Yt(r, ["style"]);
          return (
            (i.attrs.style = Dt({}, i.attrs.style, {}, s)),
            n.apply(void 0, [e.tag, Dt({}, i.attrs, {}, l)].concat(Ut(a)))
          );
        }.bind(null, r.createElement),
        Zt = e(5444),
        Jt = e(4310),
        Qt = e(8525);
      var $t = function () {
        var t = (0, Qt.useRecoilState)(Jt.Z),
          n = (t[0], t[1]);
        return r.createElement(
          "section",
          { className: "page-content-top" },
          r.createElement(
            "div",
            { className: "page-meta" },
            r.createElement(
              "h1",
              { className: "page-content-header" },
              "What's New?"
            ),
            r.createElement(
              "p",
              { className: "page-content-description" },
              "Trending Articles, or even ones from users you Follow"
            )
          ),
          r.createElement(
            "div",
            { className: "page-actions" },
            r.createElement(
              "label",
              { className: "search-bar" },
              r.createElement("input", { type: "text", placeholder: " " }),
              r.createElement(Gt, {
                className: "search-bar-icon",
                icon: o.wn1,
              }),
              r.createElement(
                "span",
                { className: "search-bar-placeholder" },
                "Search"
              )
            ),
            r.createElement(
              Zt.rU,
              {
                to: "/bookmarks",
                className: "bookmarks-button",
                onClick: function () {
                  return n({
                    routeSlug: "/bookmarks",
                    routeTitle: "Bookmarks",
                  });
                },
              },
              r.createElement(Gt, { className: "bookmarks-icon", icon: a }),
              r.createElement("span", { className: "text" }, "Your Bookmarks")
            )
          )
        );
      };
      var tn = function (t) {
          var n = t.size,
            e = void 0 === n ? "narrow" : n,
            a = t.pos,
            i = void 0 === a ? "bottom" : a,
            o = t.thickness,
            s = void 0 === o ? "slim" : o,
            l = t.transform,
            c =
              void 0 === l
                ? { at: null, axis: null, pos: null, size: null }
                : l,
            f = (0, r.useState)(1 / 0),
            u = f[0],
            m = f[1];
          return (
            (0, r.useEffect)(function () {
              var t = function (t) {
                var n = t.target,
                  e =
                    "x" === c.axis.toLowerCase() ? n.innerWidth : n.innerHeight;
                m(e);
              };
              return (
                Math.max(window.innerHeight, window.innerWidth) &&
                  Object.entries(c).length ===
                    Object.entries(c).filter(function (t) {
                      var n;
                      return (
                        (t[1] > 0 ||
                          (null === (n = t[1]) || void 0 === n
                            ? void 0
                            : n.length) > 0) &&
                        null !== t[1]
                      );
                    }).length &&
                  (window.addEventListener("resize", t), t({ target: window })),
                function () {
                  window.removeEventListener("resize", t);
                }
              );
            }, []),
            r.createElement(
              r.Fragment,
              null,
              u <= c.at
                ? r.createElement("hr", {
                    className: "pageSplit " + c.pos + " " + c.size + " " + s,
                  })
                : r.createElement("hr", {
                    className: "pageSplit " + i + " " + e + " " + s,
                  })
            )
          );
        },
        nn = (0, Qt.atom)({ key: "FilterAtom", default: "Following" });
      var en = function () {
          var t = (0, Qt.useRecoilState)(nn),
            n = t[0],
            e = t[1];
          return r.createElement(
            "section",
            { className: "filter-container" },
            r.createElement(tn, {
              size: "medium",
              pos: "bottom",
              thickness: "slim",
              transform: { at: 650, axis: "x", pos: "top", size: "medium" },
            }),
            r.createElement(
              "button",
              {
                className:
                  "Following" === n
                    ? "filter-following active-post-filter"
                    : "filter-following",
                onClick: function () {
                  return e("Following");
                },
              },
              "Following"
            ),
            r.createElement(
              "button",
              {
                className:
                  "Popular" === n
                    ? "filter-popular active-post-filter"
                    : "filter-popular",
                onClick: function () {
                  return e("Popular");
                },
              },
              "Popular"
            ),
            r.createElement("div", {
              className:
                "Following" === n
                  ? "active-filter-slider"
                  : "active-filter-slider slide-right",
            })
          );
        },
        rn = e(529),
        an = e(3433),
        on = "3334702500",
        sn = function (t) {
          var n = t.postCount,
            e = void 0 === n ? void 0 : n,
            a = (0, Zt.K2)(on).allMarkdownRemark.nodes,
            o = {
              following: a
                .filter(function (t) {
                  return "none" !== t.frontmatter.following;
                })
                .slice(0, e),
              popular: a
                .filter(function (t) {
                  return t.frontmatter.rank > 0;
                })
                .sort(function (t, n) {
                  return (
                    parseInt(t.frontmatter.rank) - parseInt(n.frontmatter.rank)
                  );
                })
                .slice(0, e),
            },
            s = (0, Qt.useRecoilState)(nn)[0];
          return r.createElement(
            "section",
            { className: "PostsContainer" },
            r.createElement(tn, {
              size: "medium",
              pos: "right",
              thickness: "slim",
              transform: { at: 650, axis: "x", pos: "none", size: "medium" },
            }),
            o[s.toLowerCase()].map(function (t) {
              var n = [],
                e = t.frontmatter,
                a = e.title,
                o = e.description,
                s = e.articleThumbnail,
                l = e.author,
                c = e.authorPicture,
                f = e.slug,
                u = e.tags,
                m = e.rank,
                p = t.timeToRead;
              return (
                m > 0 &&
                  n.push.apply(
                    n,
                    (0, an.Z)(u).concat(["#" + m + " on Trending 🔥"])
                  ),
                r.createElement(
                  Zt.rU,
                  { key: f, className: "blog-route", to: f },
                  r.createElement(
                    "div",
                    { className: "blog-route-left" },
                    r.createElement(
                      "div",
                      { className: "blog-route-author-info" },
                      r.createElement(
                        "div",
                        { className: "blog-route-author-profile" },
                        r.createElement("img", {
                          src: c,
                          alt: l + "'s Profile Picture}",
                        })
                      ),
                      r.createElement("span", null, l)
                    ),
                    r.createElement(
                      "div",
                      { className: "blog-route-title" },
                      a
                    ),
                    r.createElement(
                      "div",
                      { className: "blog-route-description" },
                      o
                    ),
                    r.createElement(
                      "div",
                      { className: "blog-route-tags" },
                      n.length > 1
                        ? n.map(function (t) {
                            return r.createElement(
                              "div",
                              { key: f + t, className: "blog-route-tag" },
                              t
                            );
                          })
                        : r.createElement(
                            "div",
                            { className: "blog-route-tag" },
                            u
                          )
                    )
                  ),
                  r.createElement(
                    "div",
                    { className: "blog-route-right" },
                    r.createElement(
                      "div",
                      { className: "blog-route-thumbnail" },
                      r.createElement("img", {
                        src: s,
                        alt: "Article Thumbnail",
                      })
                    ),
                    r.createElement(
                      "div",
                      { className: "blog-route-estimated" },
                      r.createElement(Gt, {
                        className: "blog-route-estimated-icon",
                        icon: i,
                      }),
                      r.createElement("span", null, p, " min(s)")
                    )
                  ),
                  r.createElement(tn, { size: "large" })
                )
              );
            })
          );
        };
      var ln = function () {
        return r.createElement(
          rn.default,
          { documentTitle: "Explore" },
          r.createElement(
            "div",
            {
              className: "ExplorePage",
              style: { width: "100%", height: "100%" },
            },
            r.createElement($t, null),
            r.createElement(en, null),
            r.createElement(sn, null)
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=component---src-pages-explore-js-b48aebce8ee7cbf19384.js.map