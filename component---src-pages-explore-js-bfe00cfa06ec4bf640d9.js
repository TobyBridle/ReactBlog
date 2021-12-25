/*! For license information please see component---src-pages-explore-js-bfe00cfa06ec4bf640d9.js.LICENSE.txt */
"use strict";
(self.webpackChunkblog = self.webpackChunkblog || []).push([
  [87],
  {
    3682: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return rt;
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
        i = e(8014);
      function o(n) {
        return (
          (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          o(n)
        );
      }
      function s(n, t) {
        for (var e = 0; e < t.length; e++) {
          var r = t[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(n, r.key, r);
        }
      }
      function c(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function l(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(e);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (n) {
                return Object.getOwnPropertyDescriptor(e, n).enumerable;
              })
            )),
            r.forEach(function (t) {
              c(n, t, e[t]);
            });
        }
        return n;
      }
      function f(n, t) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, t) {
            var e = [],
              r = !0,
              a = !1,
              i = void 0;
            try {
              for (
                var o, s = n[Symbol.iterator]();
                !(r = (o = s.next()).done) &&
                (e.push(o.value), !t || e.length !== t);
                r = !0
              );
            } catch (c) {
              (a = !0), (i = c);
            } finally {
              try {
                r || null == s.return || s.return();
              } finally {
                if (a) throw i;
              }
            }
            return e;
          })(n, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
          })()
        );
      }
      var u = function () {},
        m = {},
        p = {},
        d = { mark: u, measure: u };
      try {
        "undefined" != typeof window && (m = window),
          "undefined" != typeof document && (p = document),
          "undefined" != typeof MutationObserver && MutationObserver,
          "undefined" != typeof performance && (d = performance);
      } catch (at) {}
      var h = (m.navigator || {}).userAgent,
        g = void 0 === h ? "" : h,
        y = m,
        b = p,
        v = d,
        w =
          (y.document,
          !!b.documentElement &&
            !!b.head &&
            "function" == typeof b.addEventListener &&
            "function" == typeof b.createElement),
        k = (~g.indexOf("MSIE") || g.indexOf("Trident/"), "svg-inline--fa"),
        x = "data-fa-i2svg",
        O =
          ((function () {
            try {
            } catch (at) {
              return !1;
            }
          })(),
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
        _ = O.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        E = {
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
            E.GROUP,
            E.SWAP_OPACITY,
            E.PRIMARY,
            E.SECONDARY,
          ]
            .concat(
              O.map(function (n) {
                return "".concat(n, "x");
              })
            )
            .concat(
              _.map(function (n) {
                return "w-".concat(n);
              })
            ),
          y.FontAwesomeConfig || {});
      if (b && "function" == typeof b.querySelector) {
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
        ].forEach(function (n) {
          var t = f(n, 2),
            e = t[0],
            r = t[1],
            a = (function (n) {
              return "" === n || ("false" !== n && ("true" === n || n));
            })(
              (function (n) {
                var t = b.querySelector("script[" + n + "]");
                if (t) return t.getAttribute(n);
              })(e)
            );
          null != a && (z[r] = a);
        });
      }
      var N = l(
        {},
        {
          familyPrefix: "fa",
          replacementClass: k,
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
      N.autoReplaceSvg || (N.observeMutations = !1);
      var P = l({}, N);
      y.FontAwesomeConfig = P;
      var j = y || {};
      j.___FONT_AWESOME___ || (j.___FONT_AWESOME___ = {}),
        j.___FONT_AWESOME___.styles || (j.___FONT_AWESOME___.styles = {}),
        j.___FONT_AWESOME___.hooks || (j.___FONT_AWESOME___.hooks = {}),
        j.___FONT_AWESOME___.shims || (j.___FONT_AWESOME___.shims = []);
      var A = j.___FONT_AWESOME___,
        M = [];
      w &&
        ((b.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
          b.readyState
        ) ||
          b.addEventListener("DOMContentLoaded", function n() {
            b.removeEventListener("DOMContentLoaded", n),
              1,
              M.map(function (n) {
                return n();
              });
          }));
      var S,
        C = "pending",
        I = "settled",
        T = "fulfilled",
        L = "rejected",
        W = function () {},
        R =
          void 0 !== e.g &&
          void 0 !== e.g.process &&
          "function" == typeof e.g.process.emit,
        F = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
        D = [];
      function Y() {
        for (var n = 0; n < D.length; n++) D[n][0](D[n][1]);
        (D = []), (S = !1);
      }
      function X(n, t) {
        D.push([n, t]), S || ((S = !0), F(Y, 0));
      }
      function U(n) {
        var t = n.owner,
          e = t._state,
          r = t._data,
          a = n[e],
          i = n.then;
        if ("function" == typeof a) {
          e = T;
          try {
            r = a(r);
          } catch (at) {
            q(i, at);
          }
        }
        B(i, r) || (e === T && H(i, r), e === L && q(i, r));
      }
      function B(n, t) {
        var e;
        try {
          if (n === t)
            throw new TypeError(
              "A promises callback cannot return that same promise."
            );
          if (t && ("function" == typeof t || "object" === o(t))) {
            var r = t.then;
            if ("function" == typeof r)
              return (
                r.call(
                  t,
                  function (r) {
                    e || ((e = !0), t === r ? V(n, r) : H(n, r));
                  },
                  function (t) {
                    e || ((e = !0), q(n, t));
                  }
                ),
                !0
              );
          }
        } catch (at) {
          return e || q(n, at), !0;
        }
        return !1;
      }
      function H(n, t) {
        (n !== t && B(n, t)) || V(n, t);
      }
      function V(n, t) {
        n._state === C && ((n._state = I), (n._data = t), X(K, n));
      }
      function q(n, t) {
        n._state === C && ((n._state = I), (n._data = t), X(Z, n));
      }
      function G(n) {
        n._then = n._then.forEach(U);
      }
      function K(n) {
        (n._state = T), G(n);
      }
      function Z(n) {
        (n._state = L),
          G(n),
          !n._handled &&
            R &&
            e.g.process.emit("unhandledRejection", n._data, n);
      }
      function J(n) {
        e.g.process.emit("rejectionHandled", n);
      }
      function Q(n) {
        if ("function" != typeof n)
          throw new TypeError("Promise resolver " + n + " is not a function");
        if (this instanceof Q == !1)
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        (this._then = []),
          (function (n, t) {
            function e(n) {
              q(t, n);
            }
            try {
              n(function (n) {
                H(t, n);
              }, e);
            } catch (at) {
              e(at);
            }
          })(n, this);
      }
      (Q.prototype = {
        constructor: Q,
        _state: C,
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (n, t) {
          var e = {
            owner: this,
            then: new this.constructor(W),
            fulfilled: n,
            rejected: t,
          };
          return (
            (!t && !n) ||
              this._handled ||
              ((this._handled = !0), this._state === L && R && X(J, this)),
            this._state === T || this._state === L
              ? X(U, e)
              : this._then.push(e),
            e.then
          );
        },
        catch: function (n) {
          return this.then(null, n);
        },
      }),
        (Q.all = function (n) {
          if (!Array.isArray(n))
            throw new TypeError("You must pass an array to Promise.all().");
          return new Q(function (t, e) {
            var r = [],
              a = 0;
            function i(n) {
              return (
                a++,
                function (e) {
                  (r[n] = e), --a || t(r);
                }
              );
            }
            for (var o, s = 0; s < n.length; s++)
              (o = n[s]) && "function" == typeof o.then
                ? o.then(i(s), e)
                : (r[s] = o);
            a || t(r);
          });
        }),
        (Q.race = function (n) {
          if (!Array.isArray(n))
            throw new TypeError("You must pass an array to Promise.race().");
          return new Q(function (t, e) {
            for (var r, a = 0; a < n.length; a++)
              (r = n[a]) && "function" == typeof r.then ? r.then(t, e) : t(r);
          });
        }),
        (Q.resolve = function (n) {
          return n && "object" === o(n) && n.constructor === Q
            ? n
            : new Q(function (t) {
                t(n);
              });
        }),
        (Q.reject = function (n) {
          return new Q(function (t, e) {
            e(n);
          });
        });
      var $ = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function nn(n) {
        if (n && w) {
          var t = b.createElement("style");
          t.setAttribute("type", "text/css"), (t.innerHTML = n);
          for (
            var e = b.head.childNodes, r = null, a = e.length - 1;
            a > -1;
            a--
          ) {
            var i = e[a],
              o = (i.tagName || "").toUpperCase();
            ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
          }
          return b.head.insertBefore(t, r), n;
        }
      }
      function tn() {
        for (var n = 12, t = ""; n-- > 0; )
          t += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
            (62 * Math.random()) | 0
          ];
        return t;
      }
      function en(n) {
        return ""
          .concat(n)
          .replace(/&/g, "&amp;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
      }
      function rn(n) {
        return Object.keys(n || {}).reduce(function (t, e) {
          return t + "".concat(e, ": ").concat(n[e], ";");
        }, "");
      }
      function an(n) {
        return (
          n.size !== $.size ||
          n.x !== $.x ||
          n.y !== $.y ||
          n.rotate !== $.rotate ||
          n.flipX ||
          n.flipY
        );
      }
      function on(n) {
        var t = n.transform,
          e = n.containerWidth,
          r = n.iconWidth,
          a = { transform: "translate(".concat(e / 2, " 256)") },
          i = "translate(".concat(32 * t.x, ", ").concat(32 * t.y, ") "),
          o = "scale("
            .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
            .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
          s = "rotate(".concat(t.rotate, " 0 0)");
        return {
          outer: a,
          inner: { transform: "".concat(i, " ").concat(o, " ").concat(s) },
          path: { transform: "translate(".concat((r / 2) * -1, " -256)") },
        };
      }
      var sn = { x: 0, y: 0, width: "100%", height: "100%" };
      function cn(n) {
        var t =
          !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return (
          n.attributes &&
            (n.attributes.fill || t) &&
            (n.attributes.fill = "black"),
          n
        );
      }
      function ln(n) {
        var t = n.icons,
          e = t.main,
          r = t.mask,
          a = n.prefix,
          i = n.iconName,
          o = n.transform,
          s = n.symbol,
          c = n.title,
          f = n.maskId,
          u = n.titleId,
          m = n.extra,
          p = n.watchable,
          d = void 0 !== p && p,
          h = r.found ? r : e,
          g = h.width,
          y = h.height,
          b = "fak" === a,
          v = b ? "" : "fa-w-".concat(Math.ceil((g / y) * 16)),
          w = [
            P.replacementClass,
            i ? "".concat(P.familyPrefix, "-").concat(i) : "",
            v,
          ]
            .filter(function (n) {
              return -1 === m.classes.indexOf(n);
            })
            .filter(function (n) {
              return "" !== n || !!n;
            })
            .concat(m.classes)
            .join(" "),
          k = {
            children: [],
            attributes: l({}, m.attributes, {
              "data-prefix": a,
              "data-icon": i,
              class: w,
              role: m.attributes.role || "img",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 ".concat(g, " ").concat(y),
            }),
          },
          O =
            b && !~m.classes.indexOf("fa-fw")
              ? { width: "".concat((g / y) * 16 * 0.0625, "em") }
              : {};
        d && (k.attributes[x] = ""),
          c &&
            k.children.push({
              tag: "title",
              attributes: {
                id:
                  k.attributes["aria-labelledby"] || "title-".concat(u || tn()),
              },
              children: [c],
            });
        var _ = l({}, k, {
            prefix: a,
            iconName: i,
            main: e,
            mask: r,
            maskId: f,
            transform: o,
            symbol: s,
            styles: l({}, O, m.styles),
          }),
          E =
            r.found && e.found
              ? (function (n) {
                  var t,
                    e = n.children,
                    r = n.attributes,
                    a = n.main,
                    i = n.mask,
                    o = n.maskId,
                    s = n.transform,
                    c = a.width,
                    f = a.icon,
                    u = i.width,
                    m = i.icon,
                    p = on({ transform: s, containerWidth: u, iconWidth: c }),
                    d = {
                      tag: "rect",
                      attributes: l({}, sn, { fill: "white" }),
                    },
                    h = f.children ? { children: f.children.map(cn) } : {},
                    g = {
                      tag: "g",
                      attributes: l({}, p.inner),
                      children: [
                        cn(
                          l(
                            {
                              tag: f.tag,
                              attributes: l({}, f.attributes, p.path),
                            },
                            h
                          )
                        ),
                      ],
                    },
                    y = { tag: "g", attributes: l({}, p.outer), children: [g] },
                    b = "mask-".concat(o || tn()),
                    v = "clip-".concat(o || tn()),
                    w = {
                      tag: "mask",
                      attributes: l({}, sn, {
                        id: b,
                        maskUnits: "userSpaceOnUse",
                        maskContentUnits: "userSpaceOnUse",
                      }),
                      children: [d, y],
                    },
                    k = {
                      tag: "defs",
                      children: [
                        {
                          tag: "clipPath",
                          attributes: { id: v },
                          children: ((t = m), "g" === t.tag ? t.children : [t]),
                        },
                        w,
                      ],
                    };
                  return (
                    e.push(k, {
                      tag: "rect",
                      attributes: l(
                        {
                          fill: "currentColor",
                          "clip-path": "url(#".concat(v, ")"),
                          mask: "url(#".concat(b, ")"),
                        },
                        sn
                      ),
                    }),
                    { children: e, attributes: r }
                  );
                })(_)
              : (function (n) {
                  var t = n.children,
                    e = n.attributes,
                    r = n.main,
                    a = n.transform,
                    i = rn(n.styles);
                  if ((i.length > 0 && (e.style = i), an(a))) {
                    var o = on({
                      transform: a,
                      containerWidth: r.width,
                      iconWidth: r.width,
                    });
                    t.push({
                      tag: "g",
                      attributes: l({}, o.outer),
                      children: [
                        {
                          tag: "g",
                          attributes: l({}, o.inner),
                          children: [
                            {
                              tag: r.icon.tag,
                              children: r.icon.children,
                              attributes: l({}, r.icon.attributes, o.path),
                            },
                          ],
                        },
                      ],
                    });
                  } else t.push(r.icon);
                  return { children: t, attributes: e };
                })(_),
          z = E.children,
          N = E.attributes;
        return (
          (_.children = z),
          (_.attributes = N),
          s
            ? (function (n) {
                var t = n.prefix,
                  e = n.iconName,
                  r = n.children,
                  a = n.attributes,
                  i = n.symbol;
                return [
                  {
                    tag: "svg",
                    attributes: { style: "display: none;" },
                    children: [
                      {
                        tag: "symbol",
                        attributes: l({}, a, {
                          id:
                            !0 === i
                              ? ""
                                  .concat(t, "-")
                                  .concat(P.familyPrefix, "-")
                                  .concat(e)
                              : i,
                        }),
                        children: r,
                      },
                    ],
                  },
                ];
              })(_)
            : (function (n) {
                var t = n.children,
                  e = n.main,
                  r = n.mask,
                  a = n.attributes,
                  i = n.styles,
                  o = n.transform;
                if (an(o) && e.found && !r.found) {
                  var s = { x: e.width / e.height / 2, y: 0.5 };
                  a.style = rn(
                    l({}, i, {
                      "transform-origin": ""
                        .concat(s.x + o.x / 16, "em ")
                        .concat(s.y + o.y / 16, "em"),
                    })
                  );
                }
                return [{ tag: "svg", attributes: a, children: t }];
              })(_)
        );
      }
      var fn = function () {},
        un =
          (P.measurePerformance && v && v.mark && v.measure,
          function (n, t, e, r) {
            var a,
              i,
              o,
              s = Object.keys(n),
              c = s.length,
              l =
                void 0 !== r
                  ? (function (n, t) {
                      return function (e, r, a, i) {
                        return n.call(t, e, r, a, i);
                      };
                    })(t, r)
                  : t;
            for (
              void 0 === e ? ((a = 1), (o = n[s[0]])) : ((a = 0), (o = e));
              a < c;
              a++
            )
              o = l(o, n[(i = s[a])], i, n);
            return o;
          });
      function mn(n, t) {
        var e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = e.skipHooks,
          a = void 0 !== r && r,
          i = Object.keys(t).reduce(function (n, e) {
            var r = t[e];
            return !!r.icon ? (n[r.iconName] = r.icon) : (n[e] = r), n;
          }, {});
        "function" != typeof A.hooks.addPack || a
          ? (A.styles[n] = l({}, A.styles[n] || {}, i))
          : A.hooks.addPack(n, i),
          "fas" === n && mn("fa", t);
      }
      var pn = A.styles,
        dn = A.shims,
        hn = function () {
          var n = function (n) {
            return un(
              pn,
              function (t, e, r) {
                return (t[r] = un(e, n, {})), t;
              },
              {}
            );
          };
          n(function (n, t, e) {
            return t[3] && (n[t[3]] = e), n;
          }),
            n(function (n, t, e) {
              var r = t[2];
              return (
                (n[e] = e),
                r.forEach(function (t) {
                  n[t] = e;
                }),
                n
              );
            });
          var t = "far" in pn;
          un(
            dn,
            function (n, e) {
              var r = e[0],
                a = e[1],
                i = e[2];
              return (
                "far" !== a || t || (a = "fas"),
                (n[r] = { prefix: a, iconName: i }),
                n
              );
            },
            {}
          );
        };
      hn();
      A.styles;
      function gn(n, t, e) {
        if (n && n[t] && n[t][e])
          return { prefix: t, iconName: e, icon: n[t][e] };
      }
      function yn(n) {
        var t = n.tag,
          e = n.attributes,
          r = void 0 === e ? {} : e,
          a = n.children,
          i = void 0 === a ? [] : a;
        return "string" == typeof n
          ? en(n)
          : "<"
              .concat(t, " ")
              .concat(
                (function (n) {
                  return Object.keys(n || {})
                    .reduce(function (t, e) {
                      return t + "".concat(e, '="').concat(en(n[e]), '" ');
                    }, "")
                    .trim();
                })(r),
                ">"
              )
              .concat(i.map(yn).join(""), "</")
              .concat(t, ">");
      }
      var bn = function (n) {
        var t = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
        return n
          ? n
              .toLowerCase()
              .split(" ")
              .reduce(function (n, t) {
                var e = t.toLowerCase().split("-"),
                  r = e[0],
                  a = e.slice(1).join("-");
                if (r && "h" === a) return (n.flipX = !0), n;
                if (r && "v" === a) return (n.flipY = !0), n;
                if (((a = parseFloat(a)), isNaN(a))) return n;
                switch (r) {
                  case "grow":
                    n.size = n.size + a;
                    break;
                  case "shrink":
                    n.size = n.size - a;
                    break;
                  case "left":
                    n.x = n.x - a;
                    break;
                  case "right":
                    n.x = n.x + a;
                    break;
                  case "up":
                    n.y = n.y - a;
                    break;
                  case "down":
                    n.y = n.y + a;
                    break;
                  case "rotate":
                    n.rotate = n.rotate + a;
                }
                return n;
              }, t)
          : t;
      };
      function vn(n) {
        (this.name = "MissingIcon"),
          (this.message = n || "Icon unavailable"),
          (this.stack = new Error().stack);
      }
      (vn.prototype = Object.create(Error.prototype)),
        (vn.prototype.constructor = vn);
      var wn = { fill: "currentColor" },
        kn = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
        xn = {
          tag: "path",
          attributes: l({}, wn, {
            d:
              "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
          }),
        },
        On = l({}, kn, { attributeName: "opacity" });
      l({}, wn, { cx: "256", cy: "364", r: "28" }),
        l({}, kn, { attributeName: "r", values: "28;14;28;28;14;28;" }),
        l({}, On, { values: "1;0;1;1;0;1;" }),
        l({}, wn, {
          opacity: "1",
          d:
            "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
        }),
        l({}, On, { values: "1;0;0;0;0;1;" }),
        l({}, wn, {
          opacity: "0",
          d:
            "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
        }),
        l({}, On, { values: "0;0;1;1;0;0;" }),
        A.styles;
      function _n(n) {
        var t = n[0],
          e = n[1],
          r = f(n.slice(4), 1)[0];
        return {
          found: !0,
          width: t,
          height: e,
          icon: Array.isArray(r)
            ? {
                tag: "g",
                attributes: {
                  class: "".concat(P.familyPrefix, "-").concat(E.GROUP),
                },
                children: [
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(P.familyPrefix, "-").concat(E.SECONDARY),
                      fill: "currentColor",
                      d: r[0],
                    },
                  },
                  {
                    tag: "path",
                    attributes: {
                      class: "".concat(P.familyPrefix, "-").concat(E.PRIMARY),
                      fill: "currentColor",
                      d: r[1],
                    },
                  },
                ],
              }
            : { tag: "path", attributes: { fill: "currentColor", d: r } },
        };
      }
      A.styles;
      function En() {
        var n = "fa",
          t = k,
          e = P.familyPrefix,
          r = P.replacementClass,
          a =
            'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
        if (e !== n || r !== t) {
          var i = new RegExp("\\.".concat(n, "\\-"), "g"),
            o = new RegExp("\\--".concat(n, "\\-"), "g"),
            s = new RegExp("\\.".concat(t), "g");
          a = a
            .replace(i, ".".concat(e, "-"))
            .replace(o, "--".concat(e, "-"))
            .replace(s, ".".concat(r));
        }
        return a;
      }
      var zn = (function () {
        function n() {
          !(function (n, t) {
            if (!(n instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, n),
            (this.definitions = {});
        }
        var t, e, r;
        return (
          (t = n),
          (e = [
            {
              key: "add",
              value: function () {
                for (
                  var n = this, t = arguments.length, e = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  e[r] = arguments[r];
                var a = e.reduce(this._pullDefinitions, {});
                Object.keys(a).forEach(function (t) {
                  (n.definitions[t] = l({}, n.definitions[t] || {}, a[t])),
                    mn(t, a[t]),
                    hn();
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
              value: function (n, t) {
                var e = t.prefix && t.iconName && t.icon ? { 0: t } : t;
                return (
                  Object.keys(e).map(function (t) {
                    var r = e[t],
                      a = r.prefix,
                      i = r.iconName,
                      o = r.icon;
                    n[a] || (n[a] = {}), (n[a][i] = o);
                  }),
                  n
                );
              },
            },
          ]),
          e && s(t.prototype, e),
          r && s(t, r),
          n
        );
      })();
      function Nn() {
        P.autoAddCss && !Sn && (nn(En()), (Sn = !0));
      }
      function Pn(n, t) {
        return (
          Object.defineProperty(n, "abstract", { get: t }),
          Object.defineProperty(n, "html", {
            get: function () {
              return n.abstract.map(function (n) {
                return yn(n);
              });
            },
          }),
          Object.defineProperty(n, "node", {
            get: function () {
              if (w) {
                var t = b.createElement("div");
                return (t.innerHTML = n.html), t.children;
              }
            },
          }),
          n
        );
      }
      function jn(n) {
        var t = n.prefix,
          e = void 0 === t ? "fa" : t,
          r = n.iconName;
        if (r) return gn(Mn.definitions, e, r) || gn(A.styles, e, r);
      }
      var An,
        Mn = new zn(),
        Sn = !1,
        Cn = {
          transform: function (n) {
            return bn(n);
          },
        },
        In =
          ((An = function (n) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = t.transform,
              r = void 0 === e ? $ : e,
              a = t.symbol,
              i = void 0 !== a && a,
              o = t.mask,
              s = void 0 === o ? null : o,
              c = t.maskId,
              f = void 0 === c ? null : c,
              u = t.title,
              m = void 0 === u ? null : u,
              p = t.titleId,
              d = void 0 === p ? null : p,
              h = t.classes,
              g = void 0 === h ? [] : h,
              y = t.attributes,
              b = void 0 === y ? {} : y,
              v = t.styles,
              w = void 0 === v ? {} : v;
            if (n) {
              var k = n.prefix,
                x = n.iconName,
                O = n.icon;
              return Pn(l({ type: "icon" }, n), function () {
                return (
                  Nn(),
                  P.autoA11y &&
                    (m
                      ? (b["aria-labelledby"] = ""
                          .concat(P.replacementClass, "-title-")
                          .concat(d || tn()))
                      : ((b["aria-hidden"] = "true"), (b.focusable = "false"))),
                  ln({
                    icons: {
                      main: _n(O),
                      mask: s
                        ? _n(s.icon)
                        : { found: !1, width: null, height: null, icon: {} },
                    },
                    prefix: k,
                    iconName: x,
                    transform: l({}, $, r),
                    symbol: i,
                    title: m,
                    maskId: f,
                    titleId: d,
                    extra: { attributes: b, styles: w, classes: g },
                  })
                );
              });
            }
          }),
          function (n) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              e = (n || {}).icon ? n : jn(n || {}),
              r = t.mask;
            return (
              r && (r = (r || {}).icon ? r : jn(r || {})),
              An(e, l({}, t, { mask: r }))
            );
          }),
        Tn = e(5697),
        Ln = e.n(Tn);
      function Wn(n) {
        return (
          (Wn =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          Wn(n)
        );
      }
      function Rn(n, t, e) {
        return (
          t in n
            ? Object.defineProperty(n, t, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[t] = e),
          n
        );
      }
      function Fn(n, t) {
        var e = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(n, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function Dn(n) {
        for (var t = 1; t < arguments.length; t++) {
          var e = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Fn(Object(e), !0).forEach(function (t) {
                Rn(n, t, e[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e))
            : Fn(Object(e)).forEach(function (t) {
                Object.defineProperty(
                  n,
                  t,
                  Object.getOwnPropertyDescriptor(e, t)
                );
              });
        }
        return n;
      }
      function Yn(n, t) {
        if (null == n) return {};
        var e,
          r,
          a = (function (n, t) {
            if (null == n) return {};
            var e,
              r,
              a = {},
              i = Object.keys(n);
            for (r = 0; r < i.length; r++)
              (e = i[r]), t.indexOf(e) >= 0 || (a[e] = n[e]);
            return a;
          })(n, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(n);
          for (r = 0; r < i.length; r++)
            (e = i[r]),
              t.indexOf(e) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(n, e) &&
                  (a[e] = n[e]));
        }
        return a;
      }
      function Xn(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) {
              for (var t = 0, e = new Array(n.length); t < n.length; t++)
                e[t] = n[t];
              return e;
            }
          })(n) ||
          (function (n) {
            if (
              Symbol.iterator in Object(n) ||
              "[object Arguments]" === Object.prototype.toString.call(n)
            )
              return Array.from(n);
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance"
            );
          })()
        );
      }
      function Un(n) {
        return (
          (t = n),
          (t -= 0) == t
            ? n
            : (n = n.replace(/[\-_\s]+(.)?/g, function (n, t) {
                return t ? t.toUpperCase() : "";
              }))
                .substr(0, 1)
                .toLowerCase() + n.substr(1)
        );
        var t;
      }
      function Bn(n) {
        return n
          .split(";")
          .map(function (n) {
            return n.trim();
          })
          .filter(function (n) {
            return n;
          })
          .reduce(function (n, t) {
            var e,
              r = t.indexOf(":"),
              a = Un(t.slice(0, r)),
              i = t.slice(r + 1).trim();
            return (
              a.startsWith("webkit")
                ? (n[((e = a), e.charAt(0).toUpperCase() + e.slice(1))] = i)
                : (n[a] = i),
              n
            );
          }, {});
      }
      var Hn = !1;
      try {
        Hn = !0;
      } catch (at) {}
      function Vn(n) {
        return n && "object" === Wn(n) && n.prefix && n.iconName && n.icon
          ? n
          : Cn.icon
          ? Cn.icon(n)
          : null === n
          ? null
          : n && "object" === Wn(n) && n.prefix && n.iconName
          ? n
          : Array.isArray(n) && 2 === n.length
          ? { prefix: n[0], iconName: n[1] }
          : "string" == typeof n
          ? { prefix: "fas", iconName: n }
          : void 0;
      }
      function qn(n, t) {
        return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
          ? Rn({}, n, t)
          : {};
      }
      function Gn(n) {
        var t = n.forwardedRef,
          e = Yn(n, ["forwardedRef"]),
          r = e.icon,
          a = e.mask,
          i = e.symbol,
          o = e.className,
          s = e.title,
          c = e.titleId,
          l = Vn(r),
          f = qn(
            "classes",
            [].concat(
              Xn(
                (function (n) {
                  var t,
                    e = n.spin,
                    r = n.pulse,
                    a = n.fixedWidth,
                    i = n.inverse,
                    o = n.border,
                    s = n.listItem,
                    c = n.flip,
                    l = n.size,
                    f = n.rotation,
                    u = n.pull,
                    m =
                      (Rn(
                        (t = {
                          "fa-spin": e,
                          "fa-pulse": r,
                          "fa-fw": a,
                          "fa-inverse": i,
                          "fa-border": o,
                          "fa-li": s,
                          "fa-flip-horizontal":
                            "horizontal" === c || "both" === c,
                          "fa-flip-vertical": "vertical" === c || "both" === c,
                        }),
                        "fa-".concat(l),
                        null != l
                      ),
                      Rn(t, "fa-rotate-".concat(f), null != f && 0 !== f),
                      Rn(t, "fa-pull-".concat(u), null != u),
                      Rn(t, "fa-swap-opacity", n.swapOpacity),
                      t);
                  return Object.keys(m)
                    .map(function (n) {
                      return m[n] ? n : null;
                    })
                    .filter(function (n) {
                      return n;
                    });
                })(e)
              ),
              Xn(o.split(" "))
            )
          ),
          u = qn(
            "transform",
            "string" == typeof e.transform
              ? Cn.transform(e.transform)
              : e.transform
          ),
          m = qn("mask", Vn(a)),
          p = In(
            l,
            Dn({}, f, {}, u, {}, m, { symbol: i, title: s, titleId: c })
          );
        if (!p)
          return (
            (function () {
              var n;
              !Hn &&
                console &&
                "function" == typeof console.error &&
                (n = console).error.apply(n, arguments);
            })("Could not find icon", l),
            null
          );
        var d = p.abstract,
          h = { ref: t };
        return (
          Object.keys(e).forEach(function (n) {
            Gn.defaultProps.hasOwnProperty(n) || (h[n] = e[n]);
          }),
          Kn(d[0], h)
        );
      }
      (Gn.displayName = "FontAwesomeIcon"),
        (Gn.propTypes = {
          border: Ln().bool,
          className: Ln().string,
          mask: Ln().oneOfType([Ln().object, Ln().array, Ln().string]),
          fixedWidth: Ln().bool,
          inverse: Ln().bool,
          flip: Ln().oneOf(["horizontal", "vertical", "both"]),
          icon: Ln().oneOfType([Ln().object, Ln().array, Ln().string]),
          listItem: Ln().bool,
          pull: Ln().oneOf(["right", "left"]),
          pulse: Ln().bool,
          rotation: Ln().oneOf([0, 90, 180, 270]),
          size: Ln().oneOf([
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
          spin: Ln().bool,
          symbol: Ln().oneOfType([Ln().bool, Ln().string]),
          title: Ln().string,
          transform: Ln().oneOfType([Ln().string, Ln().object]),
          swapOpacity: Ln().bool,
        }),
        (Gn.defaultProps = {
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
      var Kn = function n(t, e) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          if ("string" == typeof e) return e;
          var a = (e.children || []).map(function (e) {
              return n(t, e);
            }),
            i = Object.keys(e.attributes || {}).reduce(
              function (n, t) {
                var r = e.attributes[t];
                switch (t) {
                  case "class":
                    (n.attrs.className = r), delete e.attributes.class;
                    break;
                  case "style":
                    n.attrs.style = Bn(r);
                    break;
                  default:
                    0 === t.indexOf("aria-") || 0 === t.indexOf("data-")
                      ? (n.attrs[t.toLowerCase()] = r)
                      : (n.attrs[Un(t)] = r);
                }
                return n;
              },
              { attrs: {} }
            ),
            o = r.style,
            s = void 0 === o ? {} : o,
            c = Yn(r, ["style"]);
          return (
            (i.attrs.style = Dn({}, i.attrs.style, {}, s)),
            t.apply(void 0, [e.tag, Dn({}, i.attrs, {}, c)].concat(Xn(a)))
          );
        }.bind(null, r.createElement),
        Zn = e(5444),
        Jn = e(4310),
        Qn = e(8525);
      var $n = function () {
        var n = (0, Qn.useRecoilState)(Jn.Z),
          t = (n[0], n[1]);
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
              r.createElement(Gn, {
                className: "search-bar-icon",
                icon: i.wn1,
              }),
              r.createElement(
                "span",
                { className: "search-bar-placeholder" },
                "Search"
              )
            ),
            r.createElement(
              Zn.rU,
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
              r.createElement(Gn, { className: "bookmarks-icon", icon: a }),
              r.createElement("span", { className: "text" }, "Your Bookmarks")
            )
          )
        );
      };
      var nt = function (n) {
        var t = n.size,
          e = void 0 === t ? "narrow" : t,
          a = n.pos,
          i = void 0 === a ? "bottom" : a,
          o = n.thickness,
          s = void 0 === o ? "slim" : o,
          c = n.transform,
          l =
            void 0 === c ? { at: null, axis: null, pos: null, size: null } : c,
          f = (0, r.useState)(1 / 0),
          u = f[0],
          m = f[1];
        return (
          (0, r.useEffect)(function () {
            var n = function (n) {
              var t = n.target,
                e = "x" === l.axis.toLowerCase() ? t.innerWidth : t.innerHeight;
              m(e);
            };
            return (
              Math.max(window.innerHeight, window.innerWidth) &&
                Object.entries(l).length ===
                  Object.entries(l).filter(function (n) {
                    return (n[1] > 0 || n[1].length > 0) && null !== n[1];
                  }).length &&
                window.addEventListener("resize", n),
              function () {
                window.removeEventListener("resize", n);
              }
            );
          }, []),
          r.createElement(
            r.Fragment,
            null,
            u <= l.at
              ? r.createElement("hr", {
                  className: "pageSplit " + l.pos + " " + l.size + " " + s,
                })
              : r.createElement("hr", {
                  className: "pageSplit " + i + " " + e + " " + s,
                })
          )
        );
      };
      var tt = function () {
          var n = (0, r.useState)("Following"),
            t = n[0],
            e = n[1];
          return r.createElement(
            "section",
            { className: "filter-container" },
            r.createElement(nt, {
              size: "medium",
              pos: "bottom",
              thickness: "slim",
              transform: { at: 650, axis: "x", pos: "top", size: "medium" },
            }),
            r.createElement(
              "button",
              {
                className:
                  "Following" === t
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
                  "Popular" === t
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
                "Following" === t
                  ? "active-filter-slider"
                  : "active-filter-slider slide-right",
            })
          );
        },
        et = e(529);
      var rt = function () {
        return r.createElement(
          et.default,
          { documentTitle: "Explore" },
          r.createElement(
            "div",
            {
              className: "ExplorePage",
              style: { width: "100%", height: "100%" },
            },
            r.createElement($n, null),
            r.createElement(tt, null)
          )
        );
      };
    },
  },
]);
