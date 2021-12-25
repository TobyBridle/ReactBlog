"use strict";
(self.webpackChunkblog = self.webpackChunkblog || []).push([
  [970],
  {
    8525: function (e, t, n) {
      n.r(t),
        n.d(t, {
          DefaultValue: function () {
            return Yi;
          },
          RecoilLoadable: function () {
            return tu;
          },
          RecoilRoot: function () {
            return nu;
          },
          atom: function () {
            return ou;
          },
          atomFamily: function () {
            return iu;
          },
          constSelector: function () {
            return cu;
          },
          errorSelector: function () {
            return lu;
          },
          isRecoilValue: function () {
            return eu;
          },
          noWait: function () {
            return fu;
          },
          readOnlySelector: function () {
            return su;
          },
          retentionZone: function () {
            return Zu;
          },
          selector: function () {
            return au;
          },
          selectorFamily: function () {
            return uu;
          },
          snapshot_UNSTABLE: function () {
            return Mu;
          },
          useGetRecoilValueInfo_UNSTABLE: function () {
            return wu;
          },
          useGotoRecoilSnapshot: function () {
            return Ru;
          },
          useRecoilBridgeAcrossReactRoots_UNSTABLE: function () {
            return ru;
          },
          useRecoilCallback: function () {
            return Tu;
          },
          useRecoilRefresher_UNSTABLE: function () {
            return ku;
          },
          useRecoilSnapshot: function () {
            return Eu;
          },
          useRecoilState: function () {
            return _u;
          },
          useRecoilStateLoadable: function () {
            return gu;
          },
          useRecoilTransactionObserver_UNSTABLE: function () {
            return Nu;
          },
          useRecoilTransaction_UNSTABLE: function () {
            return Au;
          },
          useRecoilValue: function () {
            return pu;
          },
          useRecoilValueLoadable: function () {
            return mu;
          },
          useResetRecoilState: function () {
            return bu;
          },
          useRetain: function () {
            return Cu;
          },
          useSetRecoilState: function () {
            return Su;
          },
          useSetUnvalidatedAtomValues_UNSTABLE: function () {
            return Lu;
          },
          useTransactionObservation_UNSTABLE: function () {
            return Vu;
          },
          waitForAll: function () {
            return hu;
          },
          waitForAllSettled: function () {
            return yu;
          },
          waitForAny: function () {
            return du;
          },
          waitForNone: function () {
            return vu;
          },
        });
      var r = n(4506),
        o = n(3433),
        a = n(4925),
        i = n(5861),
        u = n(9439),
        c = n(2407),
        l = n(4942),
        s = n(7326),
        f = n(136),
        v = n(2963),
        d = n(1120),
        h = n(5671),
        y = n(3144),
        p = (n(7727), n(7757)),
        m = n.n(p),
        _ = n(7294),
        g = n(3935),
        S = ["override"],
        b = ["default"],
        w = ["cachePolicyForParams_UNSTABLE"],
        k = m().mark(Qe),
        T = m().mark(en);
      function A(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (function (e, t) {
              if (!e) return;
              if ("string" == typeof e) return R(e, t);
              var n = Object.prototype.toString.call(e).slice(8, -1);
              "Object" === n && e.constructor && (n = e.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(e);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return R(e, t);
            })(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          i = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (u = !0), (a = e);
          },
          f: function () {
            try {
              i || null == n.return || n.return();
            } finally {
              if (u) throw a;
            }
          },
        };
      }
      function R(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function E(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function N(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? E(Object(n), !0).forEach(function (t) {
                (0, l.Z)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : E(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function V(e) {
        var t = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = (0, d.Z)(e);
          if (t) {
            var o = (0, d.Z)(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return (0, v.Z)(this, n);
        };
      }
      var L = function (e) {
        var t = new Error(e);
        if (void 0 === t.stack)
          try {
            throw t;
          } catch (n) {}
        return t;
      };
      var M = function (e) {
        return !!e && "function" == typeof e.then;
      };
      var C = function (e, t) {
        if (null != e) return e;
        throw L(null != t ? t : "Got unexpected null or undefined");
      };
      function Z(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var U = (function () {
          function e() {
            (0, h.Z)(this, e);
          }
          return (
            (0, y.Z)(e, [
              {
                key: "getValue",
                value: function () {
                  throw L("BaseLoadable");
                },
              },
              {
                key: "toPromise",
                value: function () {
                  throw L("BaseLoadable");
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  throw L("BaseLoadable");
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  throw L(
                    'Loadable expected value, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "promiseMaybe",
                value: function () {
                  throw L("BaseLoadable");
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  throw L(
                    'Loadable expected promise, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "errorMaybe",
                value: function () {
                  throw L("BaseLoadable");
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  throw L(
                    'Loadable expected error, but in "'.concat(
                      this.state,
                      '" state'
                    )
                  );
                },
              },
              {
                key: "is",
                value: function (e) {
                  return e.state === this.state && e.contents === this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  throw L("BaseLoadable");
                },
              },
            ]),
            e
          );
        })(),
        B = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n(e) {
            var r;
            return (
              (0, h.Z)(this, n),
              (r = t.call(this)),
              Z((0, s.Z)(r), "state", "hasValue"),
              Z((0, s.Z)(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            (0, y.Z)(n, [
              {
                key: "getValue",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.resolve(this.contents);
                },
              },
              {
                key: "valueMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "valueOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "promiseMaybe", value: function () {} },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  try {
                    var n = e(this.contents);
                    return M(n) ? F(n) : z(n) ? n : O(n);
                  } catch (r) {
                    return M(r)
                      ? F(
                          r.next(function () {
                            return t.map(e);
                          })
                        )
                      : I(r);
                  }
                },
              },
            ]),
            n
          );
        })(U),
        x = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n(e) {
            var r;
            return (
              (0, h.Z)(this, n),
              (r = t.call(this)),
              Z((0, s.Z)(r), "state", "hasError"),
              Z((0, s.Z)(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            (0, y.Z)(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return Promise.reject(this.contents);
                },
              },
              { key: "valueMaybe", value: function () {} },
              { key: "promiseMaybe", value: function () {} },
              {
                key: "errorMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "errorOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "map",
                value: function (e) {
                  return this;
                },
              },
            ]),
            n
          );
        })(U),
        D = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n(e) {
            var r;
            return (
              (0, h.Z)(this, n),
              (r = t.call(this)),
              Z((0, s.Z)(r), "state", "loading"),
              Z((0, s.Z)(r), "contents", void 0),
              (r.contents = e),
              r
            );
          }
          return (
            (0, y.Z)(n, [
              {
                key: "getValue",
                value: function () {
                  throw this.contents;
                },
              },
              {
                key: "toPromise",
                value: function () {
                  return this.contents;
                },
              },
              { key: "valueMaybe", value: function () {} },
              {
                key: "promiseMaybe",
                value: function () {
                  return this.contents;
                },
              },
              {
                key: "promiseOrThrow",
                value: function () {
                  return this.contents;
                },
              },
              { key: "errorMaybe", value: function () {} },
              {
                key: "map",
                value: function (e) {
                  var t = this;
                  return F(
                    this.contents
                      .then(function (t) {
                        var n = e(t);
                        if (z(n)) {
                          var r = n;
                          switch (r.state) {
                            case "hasValue":
                            case "loading":
                              return r.contents;
                            case "hasError":
                              throw r.contents;
                          }
                        }
                        return n;
                      })
                      .catch(function (n) {
                        if (M(n))
                          return n.then(function () {
                            return t.map(e).contents;
                          });
                        throw n;
                      })
                  );
                },
              },
            ]),
            n
          );
        })(U);
      function O(e) {
        return Object.freeze(new B(e));
      }
      function I(e) {
        return Object.freeze(new x(e));
      }
      function F(e) {
        return Object.freeze(new D(e));
      }
      function P(e) {
        var t = (function (e) {
          return e.every(function (e) {
            return "hasValue" === e.state;
          })
            ? O(
                e.map(function (e) {
                  return e.contents;
                })
              )
            : e.some(function (e) {
                return "hasError" === e.state;
              })
            ? I(
                C(
                  e.find(function (e) {
                    return "hasError" === e.state;
                  }),
                  "Invalid loadable passed to loadableAll"
                ).contents
              )
            : F(
                Promise.all(
                  e.map(function (e) {
                    return e.contents;
                  })
                )
              );
        })(
          Array.isArray(e)
            ? e
            : Object.getOwnPropertyNames(e).map(function (t) {
                return e[t];
              })
        );
        return Array.isArray(e)
          ? t
          : t.map(function (t) {
              return Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
                return N(N({}, e), {}, (0, l.Z)({}, n, t[r]));
              }, {});
            });
      }
      function z(e) {
        return e instanceof U;
      }
      var j = {
          of: function (e) {
            return M(e) ? F(e) : O(e);
          },
          error: function (e) {
            return I(e);
          },
          all: P,
          isLoadable: z,
        },
        W = {
          loadableWithValue: O,
          loadableWithError: I,
          loadableWithPromise: F,
          loadableLoading: function () {
            return Object.freeze(new D(new Promise(function () {})));
          },
          loadableAll: P,
          isLoadable: z,
          RecoilLoadable: j,
        },
        q = W.loadableWithValue,
        H = W.loadableWithError,
        K = W.loadableWithPromise,
        G = W.loadableLoading,
        J = W.loadableAll,
        $ = W.isLoadable,
        Q = W.RecoilLoadable,
        X = Object.freeze({
          __proto__: null,
          loadableWithValue: q,
          loadableWithError: H,
          loadableWithPromise: K,
          loadableLoading: G,
          loadableAll: J,
          isLoadable: $,
          RecoilLoadable: Q,
        });
      var Y,
        ee = function (e) {},
        te =
          null !== (Y = _.useMutableSource) && void 0 !== Y
            ? Y
            : _.unstable_useMutableSource;
      var ne = {
          mutableSourceExists: function () {
            return (
              te &&
              !(
                "undefined" != typeof window &&
                window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
              )
            );
          },
          useMutableSource: te,
        },
        re = ne.mutableSourceExists,
        oe = new Map()
          .set("recoil_hamt_2020", !0)
          .set("recoil_memory_managament_2020", !0)
          .set("recoil_suppress_rerender_in_callback", !0);
      function ae(e) {
        var t;
        return (
          !("recoil_early_rendering_2021" === e && !re()) &&
          null !== (t = oe.get(e)) &&
          void 0 !== t &&
          t
        );
      }
      (ae.setPass = function (e) {
        oe.set(e, !0);
      }),
        (ae.setFail = function (e) {
          oe.set(e, !1);
        });
      var ie = ae;
      var ue = function (e, t) {
        return m().mark(function n() {
          var r, o, a, i;
          return m().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    (r = 0), (o = A(e)), (n.prev = 2), o.s();
                  case 4:
                    if ((a = o.n()).done) {
                      n.next = 10;
                      break;
                    }
                    return (i = a.value), (n.next = 8), t(i, r++);
                  case 8:
                    n.next = 4;
                    break;
                  case 10:
                    n.next = 15;
                    break;
                  case 12:
                    (n.prev = 12), (n.t0 = n.catch(2)), o.e(n.t0);
                  case 15:
                    return (n.prev = 15), o.f(), n.finish(15);
                  case 18:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[2, 12, 15, 18]]
          );
        })();
      };
      var ce = function (e, t) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          return n.error, null;
        },
        le = ce,
        se = (0, y.Z)(function e(t) {
          (0, h.Z)(this, e), Z(this, "key", void 0), (this.key = t);
        }),
        fe = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n() {
            return (0, h.Z)(this, n), t.apply(this, arguments);
          }
          return (0, y.Z)(n);
        })(se),
        ve = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n() {
            return (0, h.Z)(this, n), t.apply(this, arguments);
          }
          return (0, y.Z)(n);
        })(se);
      var de = {
          AbstractRecoilValue: se,
          RecoilState: fe,
          RecoilValueReadOnly: ve,
          isRecoilValue: function (e) {
            return e instanceof fe || e instanceof ve;
          },
        },
        he = de.AbstractRecoilValue,
        ye = de.RecoilState,
        pe = de.RecoilValueReadOnly,
        me = de.isRecoilValue,
        _e = Object.freeze({
          __proto__: null,
          AbstractRecoilValue: he,
          RecoilState: ye,
          RecoilValueReadOnly: pe,
          isRecoilValue: me,
        }),
        ge = (0, y.Z)(function e() {
          (0, h.Z)(this, e);
        }),
        Se = new ge(),
        be = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n(e) {
            return (
              (0, h.Z)(this, n),
              t.call(
                this,
                "Tried to set the value of Recoil selector ".concat(
                  e,
                  " using an updater function, but it is an async selector in a pending or error state; this is not supported."
                )
              )
            );
          }
          return (0, y.Z)(n);
        })((0, c.Z)(Error)),
        we = new Map(),
        ke = new Map();
      var Te = (function (e) {
        (0, f.Z)(n, e);
        var t = V(n);
        function n() {
          return (0, h.Z)(this, n), t.apply(this, arguments);
        }
        return (0, y.Z)(n);
      })((0, c.Z)(Error));
      var Ae = new Map();
      function Re(e) {
        return Ae.get(e);
      }
      var Ee = {
        nodes: we,
        recoilValues: ke,
        registerNode: function (e) {
          if (we.has(e.key)) {
            var t = 'Duplicate atom key "'.concat(
              e.key,
              '". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement.'
            );
            console.warn(t);
          }
          we.set(e.key, e);
          var n =
            null == e.set
              ? new _e.RecoilValueReadOnly(e.key)
              : new _e.RecoilState(e.key);
          return ke.set(e.key, n), n;
        },
        getNode: function (e) {
          var t = we.get(e);
          if (null == t)
            throw new Te(
              'Missing definition for RecoilValue: "'.concat(e, '""')
            );
          return t;
        },
        getNodeMaybe: function (e) {
          return we.get(e);
        },
        deleteNodeConfigIfPossible: function (e) {
          var t;
          if (ie("recoil_memory_managament_2020")) {
            var n,
              r = we.get(e);
            if (
              null == r ||
              null === (t = r.shouldDeleteConfigOnRelease) ||
              void 0 === t
                ? void 0
                : t.call(r)
            )
              we.delete(e),
                null === (n = Re(e)) || void 0 === n || n(),
                Ae.delete(e);
          }
        },
        setConfigDeletionHandler: function (e, t) {
          ie("recoil_memory_managament_2020") &&
            (void 0 === t ? Ae.delete(e) : Ae.set(e, t));
        },
        getConfigDeletionHandler: Re,
        recoilValuesForKeys: function (e) {
          return ue(e, function (e) {
            return C(ke.get(e));
          });
        },
        NodeMissingError: Te,
        DefaultValue: ge,
        DEFAULT_VALUE: Se,
        RecoilValueNotReady: be,
      };
      var Ne = {
        enqueueExecution: function (e, t) {
          t();
        },
      };
      var Ve,
        Le,
        Me =
          ((Ve = function (e) {
            var t =
                "function" == typeof Symbol &&
                "symbol" == typeof Symbol.iterator
                  ? function (e) {
                      return typeof e;
                    }
                  : function (e) {
                      return e &&
                        "function" == typeof Symbol &&
                        e.constructor === Symbol &&
                        e !== Symbol.prototype
                        ? "symbol"
                        : typeof e;
                    },
              n = {},
              r = Math.pow(2, 5),
              o = r - 1,
              a = r / 2,
              i = r / 4,
              u = {},
              c = function (e) {
                return function () {
                  return e;
                };
              },
              l = (n.hash = function (e) {
                var n = void 0 === e ? "undefined" : t(e);
                if ("number" === n) return e;
                "string" !== n && (e += "");
                for (var r = 0, o = 0, a = e.length; o < a; ++o)
                  r = ((r << 5) - r + e.charCodeAt(o)) | 0;
                return r;
              }),
              s = function (e, t) {
                return (t >>> e) & o;
              },
              f = function (e) {
                return 1 << e;
              },
              v = function (e, t) {
                return (
                  (n = e & (t - 1)),
                  (n =
                    ((n =
                      (858993459 & (n -= (n >> 1) & 1431655765)) +
                      ((n >> 2) & 858993459)) +
                      (n >> 4)) &
                    252645135),
                  127 & ((n += n >> 8) + (n >> 16))
                );
                var n;
              },
              d = function (e, t, n, r) {
                var o = r;
                if (!e) {
                  var a = r.length;
                  o = new Array(a);
                  for (var i = 0; i < a; ++i) o[i] = r[i];
                }
                return (o[t] = n), o;
              },
              h = function (e, t, n) {
                var r = n.length - 1,
                  o = 0,
                  a = 0,
                  i = n;
                if (e) o = a = t;
                else for (i = new Array(r); o < t; ) i[a++] = n[o++];
                for (++o; o <= r; ) i[a++] = n[o++];
                return e && (i.length = r), i;
              },
              y = { __hamt_isEmpty: !0 },
              p = function (e) {
                return e === y || (e && e.__hamt_isEmpty);
              },
              m = function (e, t, n, r) {
                return {
                  type: 1,
                  edit: e,
                  hash: t,
                  key: n,
                  value: r,
                  _modify: k,
                };
              },
              _ = function (e, t, n) {
                return { type: 2, edit: e, hash: t, children: n, _modify: T };
              },
              g = function (e, t, n) {
                return { type: 3, edit: e, mask: t, children: n, _modify: A };
              },
              S = function (e, t, n) {
                return { type: 4, edit: e, size: t, children: n, _modify: R };
              },
              b = function e(t, n, r, o, a, i) {
                if (r === a) return _(t, r, [i, o]);
                var u = s(n, r),
                  c = s(n, a);
                return g(
                  t,
                  f(u) | f(c),
                  u === c ? [e(t, n + 5, r, o, a, i)] : u < c ? [o, i] : [i, o]
                );
              },
              w = function (e, t) {
                return e === t.edit;
              },
              k = function (e, t, n, r, o, a, i) {
                if (t(a, this.key)) {
                  var c = r(this.value);
                  return c === this.value
                    ? this
                    : c === u
                    ? (--i.value, y)
                    : w(e, this)
                    ? ((this.value = c), this)
                    : m(e, o, a, c);
                }
                var l = r();
                return l === u
                  ? this
                  : (++i.value, b(e, n, this.hash, this, o, m(e, o, a, l)));
              },
              T = function (e, t, n, r, o, a, i) {
                if (o === this.hash) {
                  var c = (function (e, t, n, r, o, a, i, c) {
                    for (var l = o.length, s = 0; s < l; ++s) {
                      var f = o[s];
                      if (n(i, f.key)) {
                        var v = f.value,
                          y = a(v);
                        return y === v
                          ? o
                          : y === u
                          ? (--c.value, h(e, s, o))
                          : d(e, s, m(t, r, i, y), o);
                      }
                    }
                    var p = a();
                    return p === u ? o : (++c.value, d(e, l, m(t, r, i, p), o));
                  })(w(e, this), e, t, this.hash, this.children, r, a, i);
                  return c === this.children
                    ? this
                    : c.length > 1
                    ? _(e, this.hash, c)
                    : c[0];
                }
                var l = r();
                return l === u
                  ? this
                  : (++i.value, b(e, n, this.hash, this, o, m(e, o, a, l)));
              },
              A = function (e, t, n, r, o, i, u) {
                var c = this.mask,
                  l = this.children,
                  m = s(n, o),
                  _ = f(m),
                  b = v(c, _),
                  k = c & _,
                  T = k ? l[b] : y,
                  A = T._modify(e, t, n + 5, r, o, i, u);
                if (T === A) return this;
                var R,
                  E = w(e, this),
                  N = c,
                  V = void 0;
                if (k && p(A)) {
                  if (!(N &= ~_)) return y;
                  if (
                    l.length <= 2 &&
                    ((R = l[1 ^ b]) === y || 1 === R.type || 2 === R.type)
                  )
                    return l[1 ^ b];
                  V = h(E, b, l);
                } else if (k || p(A)) V = d(E, b, A, l);
                else {
                  if (l.length >= a)
                    return (function (e, t, n, r, o) {
                      for (var a = [], i = r, u = 0, c = 0; i; ++c)
                        1 & i && (a[c] = o[u++]), (i >>>= 1);
                      return (a[t] = n), S(e, u + 1, a);
                    })(e, m, A, c, l);
                  (N |= _),
                    (V = (function (e, t, n, r) {
                      var o = r.length;
                      if (e) {
                        for (var a = o; a >= t; ) r[a--] = r[a];
                        return (r[t] = n), r;
                      }
                      for (var i = 0, u = 0, c = new Array(o + 1); i < t; )
                        c[u++] = r[i++];
                      for (c[t] = n; i < o; ) c[++u] = r[i++];
                      return c;
                    })(E, b, A, l));
                }
                return E
                  ? ((this.mask = N), (this.children = V), this)
                  : g(e, N, V);
              },
              R = function (e, t, n, r, o, a, u) {
                var c = this.size,
                  l = this.children,
                  f = s(n, o),
                  v = l[f],
                  h = (v || y)._modify(e, t, n + 5, r, o, a, u);
                if (v === h) return this;
                var m = w(e, this),
                  _ = void 0;
                if (p(v) && !p(h)) ++c, (_ = d(m, f, h, l));
                else if (!p(v) && p(h)) {
                  if (--c <= i)
                    return (function (e, t, n, r) {
                      for (
                        var o = new Array(t - 1),
                          a = 0,
                          i = 0,
                          u = 0,
                          c = r.length;
                        u < c;
                        ++u
                      )
                        if (u !== n) {
                          var l = r[u];
                          l && !p(l) && ((o[a++] = l), (i |= 1 << u));
                        }
                      return g(e, i, o);
                    })(e, c, f, l);
                  _ = d(m, f, y, l);
                } else _ = d(m, f, h, l);
                return m
                  ? ((this.size = c), (this.children = _), this)
                  : S(e, c, _);
              };
            function E(e, t, n, r, o) {
              (this._editable = e),
                (this._edit = t),
                (this._config = n),
                (this._root = r),
                (this._size = o);
            }
            (y._modify = function (e, t, n, r, o, a, i) {
              var c = r();
              return c === u ? y : (++i.value, m(e, o, a, c));
            }),
              (E.prototype.setTree = function (e, t) {
                return this._editable
                  ? ((this._root = e), (this._size = t), this)
                  : e === this._root
                  ? this
                  : new E(this._editable, this._edit, this._config, e, t);
              });
            var N = (n.tryGetHash = function (e, t, n, r) {
              for (var o = r._root, a = 0, i = r._config.keyEq; ; )
                switch (o.type) {
                  case 1:
                    return i(n, o.key) ? o.value : e;
                  case 2:
                    if (t === o.hash)
                      for (
                        var u = o.children, c = 0, l = u.length;
                        c < l;
                        ++c
                      ) {
                        var d = u[c];
                        if (i(n, d.key)) return d.value;
                      }
                    return e;
                  case 3:
                    var h = s(a, t),
                      y = f(h);
                    if (o.mask & y) {
                      (o = o.children[v(o.mask, y)]), (a += 5);
                      break;
                    }
                    return e;
                  case 4:
                    if ((o = o.children[s(a, t)])) {
                      a += 5;
                      break;
                    }
                    return e;
                  default:
                    return e;
                }
            });
            E.prototype.tryGetHash = function (e, t, n) {
              return N(e, t, n, this);
            };
            var V = (n.tryGet = function (e, t, n) {
              return N(e, n._config.hash(t), t, n);
            });
            E.prototype.tryGet = function (e, t) {
              return V(e, t, this);
            };
            var L = (n.getHash = function (e, t, n) {
              return N(void 0, e, t, n);
            });
            (E.prototype.getHash = function (e, t) {
              return L(e, t, this);
            }),
              (n.get = function (e, t) {
                return N(void 0, t._config.hash(e), e, t);
              }),
              (E.prototype.get = function (e, t) {
                return V(t, e, this);
              });
            var M = (n.has = function (e, t, n) {
              return N(u, e, t, n) !== u;
            });
            E.prototype.hasHash = function (e, t) {
              return M(e, t, this);
            };
            var C = (n.has = function (e, t) {
              return M(t._config.hash(e), e, t);
            });
            E.prototype.has = function (e) {
              return C(e, this);
            };
            var Z = function (e, t) {
              return e === t;
            };
            (n.make = function (e) {
              return new E(
                0,
                0,
                { keyEq: (e && e.keyEq) || Z, hash: (e && e.hash) || l },
                y,
                0
              );
            }),
              (n.empty = n.make());
            var U = (n.isEmpty = function (e) {
              return e && !!p(e._root);
            });
            E.prototype.isEmpty = function () {
              return U(this);
            };
            var B = (n.modifyHash = function (e, t, n, r) {
              var o = { value: r._size },
                a = r._root._modify(
                  r._editable ? r._edit : NaN,
                  r._config.keyEq,
                  0,
                  e,
                  t,
                  n,
                  o
                );
              return r.setTree(a, o.value);
            });
            E.prototype.modifyHash = function (e, t, n) {
              return B(n, e, t, this);
            };
            var x = (n.modify = function (e, t, n) {
              return B(e, n._config.hash(t), t, n);
            });
            E.prototype.modify = function (e, t) {
              return x(t, e, this);
            };
            var D = (n.setHash = function (e, t, n, r) {
              return B(c(n), e, t, r);
            });
            E.prototype.setHash = function (e, t, n) {
              return D(e, t, n, this);
            };
            var O = (n.set = function (e, t, n) {
              return D(n._config.hash(e), e, t, n);
            });
            E.prototype.set = function (e, t) {
              return O(e, t, this);
            };
            var I = c(u),
              F = (n.removeHash = function (e, t, n) {
                return B(I, e, t, n);
              });
            E.prototype.removeHash = E.prototype.deleteHash = function (e, t) {
              return F(e, t, this);
            };
            var P = (n.remove = function (e, t) {
              return F(t._config.hash(e), e, t);
            });
            E.prototype.remove = E.prototype.delete = function (e) {
              return P(e, this);
            };
            var z = (n.beginMutation = function (e) {
              return new E(
                e._editable + 1,
                e._edit + 1,
                e._config,
                e._root,
                e._size
              );
            });
            E.prototype.beginMutation = function () {
              return z(this);
            };
            var j = (n.endMutation = function (e) {
              return (e._editable = e._editable && e._editable - 1), e;
            });
            E.prototype.endMutation = function () {
              return j(this);
            };
            var W = (n.mutate = function (e, t) {
              var n = z(t);
              return e(n), j(n);
            });
            E.prototype.mutate = function (e) {
              return W(e, this);
            };
            var q = function (e) {
                return e && H(e[0], e[1], e[2], e[3], e[4]);
              },
              H = function (e, t, n, r, o) {
                for (; n < e; ) {
                  var a = t[n++];
                  if (a && !p(a)) return K(a, r, [e, t, n, r, o]);
                }
                return q(o);
              },
              K = function (e, t, n) {
                switch (e.type) {
                  case 1:
                    return { value: t(e), rest: n };
                  case 2:
                  case 4:
                  case 3:
                    var r = e.children;
                    return H(r.length, r, 0, t, n);
                  default:
                    return q(n);
                }
              },
              G = { done: !0 };
            function J(e) {
              this.v = e;
            }
            (J.prototype.next = function () {
              if (!this.v) return G;
              var e = this.v;
              return (this.v = q(e.rest)), e;
            }),
              (J.prototype[Symbol.iterator] = function () {
                return this;
              });
            var $ = function (e, t) {
                return new J(K(e._root, t));
              },
              Q = function (e) {
                return [e.key, e.value];
              },
              X = (n.entries = function (e) {
                return $(e, Q);
              });
            E.prototype.entries = E.prototype[Symbol.iterator] = function () {
              return X(this);
            };
            var Y = function (e) {
                return e.key;
              },
              ee = (n.keys = function (e) {
                return $(e, Y);
              });
            E.prototype.keys = function () {
              return ee(this);
            };
            var te = function (e) {
                return e.value;
              },
              ne = (n.values = E.prototype.values = function (e) {
                return $(e, te);
              });
            E.prototype.values = function () {
              return ne(this);
            };
            var re = (n.fold = function (e, t, n) {
              var r = n._root;
              if (1 === r.type) return e(t, r.value, r.key);
              for (var o = [r.children], a = void 0; (a = o.pop()); )
                for (var i = 0, u = a.length; i < u; ) {
                  var c = a[i++];
                  c &&
                    c.type &&
                    (1 === c.type
                      ? (t = e(t, c.value, c.key))
                      : o.push(c.children));
                }
              return t;
            });
            E.prototype.fold = function (e, t) {
              return re(e, t, this);
            };
            var oe = (n.forEach = function (e, t) {
              return re(
                function (n, r, o) {
                  return e(r, o, t);
                },
                null,
                t
              );
            });
            E.prototype.forEach = function (e) {
              return oe(e, this);
            };
            var ae = (n.count = function (e) {
              return e._size;
            });
            (E.prototype.count = function () {
              return ae(this);
            }),
              Object.defineProperty(E.prototype, "size", {
                get: E.prototype.count,
              }),
              e.exports ? (e.exports = n) : ((void 0).hamt = n);
          }),
          Ve((Le = { exports: {} }), Le.exports),
          Le.exports),
        Ce = (function () {
          function e(t) {
            (0, h.Z)(this, e),
              Z(this, "_map", void 0),
              (this._map = new Map(null == t ? void 0 : t.entries()));
          }
          return (
            (0, y.Z)(e, [
              {
                key: "keys",
                value: function () {
                  return this._map.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._map.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._map.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._map.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._map.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._map.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return Ue(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._map);
                },
              },
            ]),
            e
          );
        })(),
        Ze = (function () {
          function e(t) {
            if (
              ((0, h.Z)(this, e),
              Z(this, "_hamt", Me.empty.beginMutation()),
              t instanceof e)
            ) {
              var n = t._hamt.endMutation();
              (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
            } else if (t) {
              var r,
                o = A(t.entries());
              try {
                for (o.s(); !(r = o.n()).done; ) {
                  var a = (0, u.Z)(r.value, 2),
                    i = a[0],
                    c = a[1];
                  this._hamt.set(i, c);
                }
              } catch (l) {
                o.e(l);
              } finally {
                o.f();
              }
            }
          }
          return (
            (0, y.Z)(e, [
              {
                key: "keys",
                value: function () {
                  return this._hamt.keys();
                },
              },
              {
                key: "entries",
                value: function () {
                  return this._hamt.entries();
                },
              },
              {
                key: "get",
                value: function (e) {
                  return this._hamt.get(e);
                },
              },
              {
                key: "has",
                value: function (e) {
                  return this._hamt.has(e);
                },
              },
              {
                key: "set",
                value: function (e, t) {
                  return this._hamt.set(e, t), this;
                },
              },
              {
                key: "delete",
                value: function (e) {
                  return this._hamt.delete(e), this;
                },
              },
              {
                key: "clone",
                value: function () {
                  return Ue(this);
                },
              },
              {
                key: "toMap",
                value: function () {
                  return new Map(this._hamt);
                },
              },
            ]),
            e
          );
        })();
      function Ue(e) {
        return ie("recoil_hamt_2020") ? new Ze(e) : new Ce(e);
      }
      var Be = Ue;
      var xe = function (e) {
        for (
          var t = new Set(),
            n = arguments.length,
            r = new Array(n > 1 ? n - 1 : 0),
            o = 1;
          o < n;
          o++
        )
          r[o - 1] = arguments[o];
        var a,
          i = A(e);
        try {
          e: for (i.s(); !(a = i.n()).done; ) {
            var u,
              c = a.value,
              l = A(r);
            try {
              for (l.s(); !(u = l.n()).done; ) {
                var s = u.value;
                if (s.has(c)) continue e;
              }
            } catch (f) {
              l.e(f);
            } finally {
              l.f();
            }
            t.add(c);
          }
        } catch (f) {
          i.e(f);
        } finally {
          i.f();
        }
        return t;
      };
      var De = function (e, t) {
        var n = new Map();
        return (
          e.forEach(function (e, r) {
            n.set(r, t(e, r));
          }),
          n
        );
      };
      function Oe(e, t, n) {
        var r = t.nodeDeps,
          o = t.nodeToNodeSubscriptions;
        e.forEach(function (e, t) {
          var a = r.get(t);
          (a && n && a !== n.nodeDeps.get(t)) ||
            (r.set(t, new Set(e)),
            (null == a ? e : xe(e, a)).forEach(function (e) {
              o.has(e) || o.set(e, new Set()), C(o.get(e)).add(t);
            }),
            a &&
              xe(a, e).forEach(function (e) {
                if (o.has(e)) {
                  var n = C(o.get(e));
                  n.delete(t), 0 === n.size && o.delete(e);
                }
              }));
        });
      }
      var Ie = function (e) {
          return {
            nodeDeps: De(e.nodeDeps, function (e) {
              return new Set(e);
            }),
            nodeToNodeSubscriptions: De(
              e.nodeToNodeSubscriptions,
              function (e) {
                return new Set(e);
              }
            ),
          };
        },
        Fe = function () {
          return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
        },
        Pe = function (e, t, n) {
          var r,
            o,
            a,
            i,
            u = t.getState();
          n !== u.currentTree.version &&
            n !==
              (null === (r = u.nextTree) || void 0 === r
                ? void 0
                : r.version) &&
            n !==
              (null === (o = u.previousTree) || void 0 === o
                ? void 0
                : o.version) &&
            le("Tried to save dependencies to a discarded tree");
          var c = t.getGraph(n);
          if (
            (Oe(e, c),
            n ===
              (null === (a = u.previousTree) || void 0 === a
                ? void 0
                : a.version) && Oe(e, t.getGraph(u.currentTree.version), c),
            n ===
              (null === (i = u.previousTree) || void 0 === i
                ? void 0
                : i.version) || n === u.currentTree.version)
          ) {
            var l,
              s =
                null === (l = u.nextTree) || void 0 === l ? void 0 : l.version;
            if (void 0 !== s) Oe(e, t.getGraph(s), c);
          }
        },
        ze = Object.freeze({ __proto__: null, persistentMap: Be })
          .persistentMap,
        je = Fe,
        We = 0,
        qe = function () {
          return We++;
        };
      function He() {
        var e = qe();
        return {
          version: e,
          stateID: e,
          transactionMetadata: {},
          dirtyAtoms: new Set(),
          atomValues: ze(),
          nonvalidatedAtoms: ze(),
        };
      }
      var Ke = function () {
          var e = He();
          return {
            currentTree: e,
            nextTree: null,
            previousTree: null,
            commitDepth: 0,
            knownAtoms: new Set(),
            knownSelectors: new Set(),
            transactionSubscriptions: new Map(),
            nodeTransactionSubscriptions: new Map(),
            nodeToComponentSubscriptions: new Map(),
            queuedComponentCallbacks_DEPRECATED: [],
            suspendedComponentResolvers: new Set(),
            graphsByVersion: new Map().set(e.version, je()),
            versionsUsedByComponent: new Map(),
            retention: {
              referenceCounts: new Map(),
              nodesRetainedByZone: new Map(),
              retainablesToCheckForRelease: new Set(),
            },
            nodeCleanupFunctions: new Map(),
          };
        },
        Ge = qe;
      var Je = function () {
        for (
          var e = new Set(), t = arguments.length, n = new Array(t), r = 0;
          r < t;
          r++
        )
          n[r] = arguments[r];
        for (var o = 0, a = n; o < a.length; o++) {
          var i,
            u = a[o],
            c = A(u);
          try {
            for (c.s(); !(i = c.n()).done; ) {
              var l = i.value;
              e.add(l);
            }
          } catch (s) {
            c.e(s);
          } finally {
            c.f();
          }
        }
        return e;
      };
      var $e = function (e, t) {
        var n = new Set(e);
        return n.add(t), n;
      };
      function Qe(e, t) {
        var n, r, o, a;
        return m().wrap(
          function (i) {
            for (;;)
              switch ((i.prev = i.next)) {
                case 0:
                  (n = 0), (r = A(e)), (i.prev = 2), r.s();
                case 4:
                  if ((o = r.n()).done) {
                    i.next = 11;
                    break;
                  }
                  if (((a = o.value), !t(a, n++))) {
                    i.next = 9;
                    break;
                  }
                  return (i.next = 9), a;
                case 9:
                  i.next = 4;
                  break;
                case 11:
                  i.next = 16;
                  break;
                case 13:
                  (i.prev = 13), (i.t0 = i.catch(2)), r.e(i.t0);
                case 16:
                  return (i.prev = 16), r.f(), i.finish(16);
                case 19:
                case "end":
                  return i.stop();
              }
          },
          k,
          null,
          [[2, 13, 16, 19]]
        );
      }
      var Xe = Qe,
        Ye = (0, y.Z)(function e() {
          (0, h.Z)(this, e);
        });
      var et = {
          RetentionZone: Ye,
          retentionZone: function () {
            return new Ye();
          },
        },
        tt = $e,
        nt = Ee.getNode,
        rt = Ee.getNodeMaybe,
        ot = Ee.recoilValuesForKeys,
        at = et.RetentionZone,
        it = Object.freeze(new Set()),
        ut = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n() {
            return (0, h.Z)(this, n), t.apply(this, arguments);
          }
          return (0, y.Z)(n);
        })((0, c.Z)(Error));
      function ct(e, t, n, r) {
        var o = e.getState();
        if (!o.nodeCleanupFunctions.has(n)) {
          var a = nt(n),
            i = (function (e, t, n) {
              if (!ie("recoil_memory_managament_2020")) return function () {};
              var r = e.getState().retention.nodesRetainedByZone;
              function o(e) {
                var n = r.get(e);
                n || r.set(e, (n = new Set())), n.add(t);
              }
              if (n instanceof at) o(n);
              else if (Array.isArray(n)) {
                var a,
                  i = A(n);
                try {
                  for (i.s(); !(a = i.n()).done; ) o(a.value);
                } catch (u) {
                  i.e(u);
                } finally {
                  i.f();
                }
              }
              return function () {
                if (ie("recoil_memory_managament_2020")) {
                  var r = e.getState().retention.nodesRetainedByZone;
                  if (n instanceof at) i(n);
                  else if (Array.isArray(n)) {
                    var o,
                      a = A(n);
                    try {
                      for (a.s(); !(o = a.n()).done; ) i(o.value);
                    } catch (u) {
                      a.e(u);
                    } finally {
                      a.f();
                    }
                  }
                }
                function i(e) {
                  var n = r.get(e);
                  n && n.delete(t), n && 0 === n.size && r.delete(e);
                }
              };
            })(e, n, a.retainedBy),
            u = a.init(e, t, r);
          o.nodeCleanupFunctions.set(n, function () {
            u(), i();
          });
        }
      }
      function lt(e, t, n) {
        return nt(n).peek(e, t);
      }
      function st(e, t, n) {
        for (
          var r = new Set(),
            o = Array.from(n),
            a = e.getGraph(t.version),
            i = o.pop();
          i;
          i = o.pop()
        ) {
          var u;
          r.add(i);
          var c,
            l = A(
              null !== (u = a.nodeToNodeSubscriptions.get(i)) && void 0 !== u
                ? u
                : it
            );
          try {
            for (l.s(); !(c = l.n()).done; ) {
              var s = c.value;
              r.has(s) || o.push(s);
            }
          } catch (f) {
            l.e(f);
          } finally {
            l.f();
          }
        }
        return r;
      }
      var ft = function (e, t, n) {
          return ct(e, t, n, "get"), nt(n).get(e, t);
        },
        vt = lt,
        dt = function (e, t, n, r) {
          var o = nt(n);
          if (null == o.set)
            throw new ut("Attempt to set read-only RecoilValue: ".concat(n));
          var a = o.set;
          return ct(e, t, n, "set"), a(e, t, r);
        },
        ht = function (e, t) {
          var n,
            r = e.getState();
          null === (n = r.nodeCleanupFunctions.get(t)) || void 0 === n || n(),
            r.nodeCleanupFunctions.delete(t);
        },
        yt = function (e, t, n) {
          var r,
            o = rt(t);
          return (
            null == o ||
              null === (r = o.invalidate) ||
              void 0 === r ||
              r.call(o, e),
            N(
              N({}, e),
              {},
              {
                atomValues: e.atomValues.clone().delete(t),
                nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
                dirtyAtoms: tt(e.dirtyAtoms, t),
              }
            )
          );
        },
        pt = function (e, t, n) {
          var r,
            o,
            a,
            i = e.getState(),
            c = e.getGraph(t.version),
            l = i.knownAtoms.has(n)
              ? "atom"
              : i.knownSelectors.has(n)
              ? "selector"
              : void 0,
            s = Xe(st(e, t, new Set([n])), function (e) {
              return e !== n;
            });
          return {
            loadable: lt(e, t, n),
            isActive: i.knownAtoms.has(n) || i.knownSelectors.has(n),
            isSet: "selector" !== l && t.atomValues.has(n),
            isModified: t.dirtyAtoms.has(n),
            type: l,
            deps: ot(null !== (r = c.nodeDeps.get(n)) && void 0 !== r ? r : []),
            subscribers: {
              nodes: ot(s),
              components: ue(
                null !==
                  (o =
                    null === (a = i.nodeToComponentSubscriptions.get(n)) ||
                    void 0 === a
                      ? void 0
                      : a.values()) && void 0 !== o
                  ? o
                  : [],
                function (e) {
                  return { name: (0, u.Z)(e, 1)[0] };
                }
              ),
            },
          };
        },
        mt = st,
        _t = ct,
        gt = mt,
        St = ft,
        bt = dt,
        wt = Ee.getNodeMaybe,
        kt = Ee.DefaultValue,
        Tt = Ee.RecoilValueNotReady,
        At = _e.AbstractRecoilValue,
        Rt = _e.RecoilState,
        Et = _e.RecoilValueReadOnly,
        Nt = _e.isRecoilValue;
      function Vt(e, t, n) {
        if ("set" === n.type) {
          var r,
            o = n.recoilValue,
            a = (function (e, t, n, r) {
              var o = n.key;
              if ("function" == typeof r) {
                var a = St(e, t, o);
                if ("loading" === a.state) throw new Tt(o);
                if ("hasError" === a.state) throw a.contents;
                return r(a.contents);
              }
              return r;
            })(e, t, o, n.valueOrUpdater),
            i = A(bt(e, t, o.key, a).entries());
          try {
            for (i.s(); !(r = i.n()).done; ) {
              var c = (0, u.Z)(r.value, 2);
              Lt(t, c[0], c[1]);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
        } else if ("setLoadable" === n.type) {
          Lt(t, n.recoilValue.key, n.loadable);
        } else if ("markModified" === n.type) {
          var l = n.recoilValue.key;
          t.dirtyAtoms.add(l);
        } else if ("setUnvalidated" === n.type) {
          var s,
            f = n.recoilValue.key,
            v = n.unvalidatedValue,
            d = wt(f);
          null == d ||
            null === (s = d.invalidate) ||
            void 0 === s ||
            s.call(d, t),
            t.atomValues.delete(f),
            t.nonvalidatedAtoms.set(f, v),
            t.dirtyAtoms.add(f);
        } else le("Unknown action ".concat(n.type));
      }
      function Lt(e, t, n) {
        "hasValue" === n.state && n.contents instanceof kt
          ? e.atomValues.delete(t)
          : e.atomValues.set(t, n),
          e.dirtyAtoms.add(t),
          e.nonvalidatedAtoms.delete(t);
      }
      function Mt(e, t) {
        e.replaceState(function (n) {
          var r,
            o = Ut(n),
            a = A(t);
          try {
            for (a.s(); !(r = a.n()).done; ) {
              var i = r.value;
              Vt(e, o, i);
            }
          } catch (u) {
            a.e(u);
          } finally {
            a.f();
          }
          return Bt(e, o), o;
        });
      }
      function Ct(e, t) {
        if (Zt.length) {
          var n = Zt[Zt.length - 1],
            r = n.get(e);
          r || n.set(e, (r = [])), r.push(t);
        } else Mt(e, [t]);
      }
      var Zt = [];
      function Ut(e) {
        return N(
          N({}, e),
          {},
          {
            atomValues: e.atomValues.clone(),
            nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
            dirtyAtoms: new Set(e.dirtyAtoms),
          }
        );
      }
      function Bt(e, t) {
        var n,
          r = A(gt(e, t, t.dirtyAtoms));
        try {
          for (r.s(); !(n = r.n()).done; ) {
            var o,
              a,
              i = n.value;
            null === (o = wt(i)) ||
              void 0 === o ||
              null === (a = o.invalidate) ||
              void 0 === a ||
              a.call(o, t);
          }
        } catch (u) {
          r.e(u);
        } finally {
          r.f();
        }
      }
      function xt(e, t, n) {
        Ct(e, { type: "set", recoilValue: t, valueOrUpdater: n });
      }
      var Dt = 0;
      var Ot = {
        RecoilValueReadOnly: Et,
        AbstractRecoilValue: At,
        RecoilState: Rt,
        getRecoilValueAsLoadable: function (e, t) {
          var n,
            r,
            o = t.key,
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : e.getState().currentTree,
            i = e.getState();
          a.version !== i.currentTree.version &&
            a.version !==
              (null === (n = i.nextTree) || void 0 === n
                ? void 0
                : n.version) &&
            a.version !==
              (null === (r = i.previousTree) || void 0 === r
                ? void 0
                : r.version) &&
            le("Tried to read from a discarded tree");
          var u = St(e, a, o);
          return "loading" === u.state && u.contents.catch(function () {}), u;
        },
        setRecoilValue: xt,
        setRecoilValueLoadable: function (e, t, n) {
          if (n instanceof kt) return xt(e, t, n);
          Ct(e, { type: "setLoadable", recoilValue: t, loadable: n });
        },
        markRecoilValueModified: function (e, t) {
          Ct(e, { type: "markModified", recoilValue: t });
        },
        setUnvalidatedRecoilValue: function (e, t, n) {
          Ct(e, {
            type: "setUnvalidated",
            recoilValue: t,
            unvalidatedValue: n,
          });
        },
        subscribeToRecoilValue: function (e, t, n) {
          var r = t.key,
            o =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : null,
            a = Dt++,
            i = e.getState();
          if (
            (i.nodeToComponentSubscriptions.has(r) ||
              i.nodeToComponentSubscriptions.set(r, new Map()),
            C(i.nodeToComponentSubscriptions.get(r)).set(a, [
              null != o ? o : "<not captured>",
              n,
            ]),
            ie("recoil_early_rendering_2021"))
          ) {
            var u = e.getState().nextTree;
            u && u.dirtyAtoms.has(r) && n(u);
          }
          return {
            release: function () {
              var t = e.getState(),
                n = t.nodeToComponentSubscriptions.get(r);
              void 0 !== n && n.has(a)
                ? (n.delete(a),
                  0 === n.size && t.nodeToComponentSubscriptions.delete(r))
                : le(
                    "Subscription missing at release time for atom ".concat(
                      r,
                      ". This is a bug in Recoil."
                    )
                  );
            },
          };
        },
        isRecoilValue: Nt,
        applyAtomValueWrites: function (e, t) {
          var n = e.clone();
          return (
            t.forEach(function (e, t) {
              "hasValue" === e.state && e.contents instanceof kt
                ? n.delete(t)
                : n.set(t, e);
            }),
            n
          );
        },
        batchStart: function () {
          var e = new Map();
          return (
            Zt.push(e),
            function () {
              var t,
                n = A(e);
              try {
                for (n.s(); !(t = n.n()).done; ) {
                  var r = (0, u.Z)(t.value, 2);
                  Mt(r[0], r[1]);
                }
              } catch (o) {
                n.e(o);
              } finally {
                n.f();
              }
              Zt.pop() !== e && le("Incorrect order of batch popping");
            }
          );
        },
        writeLoadableToTreeState: Lt,
        invalidateDownstreams: Bt,
        copyTreeState: Ut,
        invalidateDownstreams_FOR_TESTING: Bt,
      };
      var It = function (e, t, n) {
          for (var r = e.entries(), o = r.next(); !o.done; ) {
            var a = o.value;
            if (t.call(n, a[1], a[0], e)) return !0;
            o = r.next();
          }
          return !1;
        },
        Ft = ht,
        Pt = Ee.deleteNodeConfigIfPossible,
        zt = Ee.getNode,
        jt = et.RetentionZone,
        Wt = new Set();
      function qt(e, t) {
        var n = e.getState(),
          r = n.currentTree;
        if (n.nextTree)
          le(
            "releaseNodesNowOnCurrentTree should only be called at the end of a batch"
          );
        else {
          var o,
            a = new Set(),
            i = A(t);
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var u = o.value;
              if (u instanceof jt) {
                var c,
                  l = A(Kt(n, u));
                try {
                  for (l.s(); !(c = l.n()).done; ) {
                    var s = c.value;
                    a.add(s);
                  }
                } catch (h) {
                  l.e(h);
                } finally {
                  l.f();
                }
              } else a.add(u);
            }
          } catch (h) {
            i.e(h);
          } finally {
            i.f();
          }
          var f,
            v = (function (e, t) {
              var n = e.getState(),
                r = n.currentTree,
                o = e.getGraph(r.version),
                a = new Set(),
                i = new Set();
              return u(t), a;
              function u(t) {
                var c,
                  l = new Set(),
                  s = (function (e, t, n, r, o) {
                    var a = e.getGraph(t.version),
                      i = [],
                      u = new Set();
                    for (; n.size > 0; ) c(C(n.values().next().value));
                    return i;
                    function c(e) {
                      if (r.has(e) || o.has(e)) n.delete(e);
                      else if (!u.has(e)) {
                        var t = a.nodeToNodeSubscriptions.get(e);
                        if (t) {
                          var l,
                            s = A(t);
                          try {
                            for (s.s(); !(l = s.n()).done; ) {
                              c(l.value);
                            }
                          } catch (h) {
                            s.e(h);
                          } finally {
                            s.f();
                          }
                        }
                        u.add(e), n.delete(e), i.push(e);
                      }
                    }
                  })(e, r, t, a, i),
                  f = A(s);
                try {
                  for (f.s(); !(c = f.n()).done; ) {
                    var v,
                      d = c.value;
                    if ("recoilRoot" !== zt(d).retainedBy)
                      if (
                        (null !== (v = n.retention.referenceCounts.get(d)) &&
                        void 0 !== v
                          ? v
                          : 0) > 0
                      )
                        i.add(d);
                      else if (
                        Gt(d).some(function (e) {
                          return n.retention.referenceCounts.get(e);
                        })
                      )
                        i.add(d);
                      else {
                        var y = o.nodeToNodeSubscriptions.get(d);
                        y &&
                        It(y, function (e) {
                          return i.has(e);
                        })
                          ? i.add(d)
                          : (a.add(d), l.add(d));
                      }
                    else i.add(d);
                  }
                } catch (h) {
                  f.e(h);
                } finally {
                  f.f();
                }
                var p,
                  m = new Set(),
                  _ = A(l);
                try {
                  for (_.s(); !(p = _.n()).done; ) {
                    var g,
                      S = p.value,
                      b = A(
                        null !== (w = o.nodeDeps.get(S)) && void 0 !== w
                          ? w
                          : Wt
                      );
                    try {
                      for (b.s(); !(g = b.n()).done; ) {
                        var w,
                          k = g.value;
                        a.has(k) || m.add(k);
                      }
                    } catch (h) {
                      b.e(h);
                    } finally {
                      b.f();
                    }
                  }
                } catch (h) {
                  _.e(h);
                } finally {
                  _.f();
                }
                m.size && u(m);
              }
            })(e, a),
            d = A(v);
          try {
            for (d.s(); !(f = d.n()).done; ) {
              Ht(e, r, f.value);
            }
          } catch (h) {
            d.e(h);
          } finally {
            d.f();
          }
        }
      }
      function Ht(e, t, n) {
        if (ie("recoil_memory_managament_2020")) {
          Ft(e, n);
          var r = e.getState();
          r.knownAtoms.delete(n),
            r.knownSelectors.delete(n),
            r.nodeTransactionSubscriptions.delete(n),
            r.retention.referenceCounts.delete(n);
          var o,
            a = A(Gt(n));
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var i,
                u = o.value;
              null === (i = r.retention.nodesRetainedByZone.get(u)) ||
                void 0 === i ||
                i.delete(n);
            }
          } catch (h) {
            a.e(h);
          } finally {
            a.f();
          }
          t.atomValues.delete(n),
            t.dirtyAtoms.delete(n),
            t.nonvalidatedAtoms.delete(n);
          var c = r.graphsByVersion.get(t.version);
          if (c) {
            var l = c.nodeDeps.get(n);
            if (void 0 !== l) {
              c.nodeDeps.delete(n);
              var s,
                f = A(l);
              try {
                for (f.s(); !(s = f.n()).done; ) {
                  var v,
                    d = s.value;
                  null === (v = c.nodeToNodeSubscriptions.get(d)) ||
                    void 0 === v ||
                    v.delete(n);
                }
              } catch (h) {
                f.e(h);
              } finally {
                f.f();
              }
            }
            c.nodeToNodeSubscriptions.delete(n);
          }
          Pt(n);
        }
      }
      function Kt(e, t) {
        var n;
        return null !== (n = e.retention.nodesRetainedByZone.get(t)) &&
          void 0 !== n
          ? n
          : Wt;
      }
      function Gt(e) {
        var t = zt(e).retainedBy;
        return void 0 === t || "components" === t || "recoilRoot" === t
          ? []
          : t instanceof jt
          ? [t]
          : t;
      }
      function Jt(e, t) {
        ie("recoil_memory_managament_2020") &&
          (e.getState().retention.referenceCounts.delete(t),
          (function (e, t) {
            var n = e.getState();
            n.nextTree
              ? n.retention.retainablesToCheckForRelease.add(t)
              : qt(e, new Set([t]));
          })(e, t));
      }
      var $t = 12e4,
        Qt = function (e, t, n) {
          var r;
          if (ie("recoil_memory_managament_2020")) {
            var o = e.getState().retention.referenceCounts,
              a = (null !== (r = o.get(t)) && void 0 !== r ? r : 0) + n;
            0 === a ? Jt(e, t) : o.set(t, a);
          }
        },
        Xt = function (e) {
          if (ie("recoil_memory_managament_2020")) {
            var t = e.getState();
            qt(e, t.retention.retainablesToCheckForRelease),
              t.retention.retainablesToCheckForRelease.clear();
          }
        },
        Yt = function (e) {
          return void 0 === e ? "recoilRoot" : e;
        };
      function en(e) {
        var t, n, r, o, a, i;
        return m().wrap(
          function (u) {
            for (;;)
              switch ((u.prev = u.next)) {
                case 0:
                  (t = A(e)), (u.prev = 1), t.s();
                case 3:
                  if ((n = t.n()).done) {
                    u.next = 24;
                    break;
                  }
                  (r = n.value), (o = A(r)), (u.prev = 6), o.s();
                case 8:
                  if ((a = o.n()).done) {
                    u.next = 14;
                    break;
                  }
                  return (i = a.value), (u.next = 12), i;
                case 12:
                  u.next = 8;
                  break;
                case 14:
                  u.next = 19;
                  break;
                case 16:
                  (u.prev = 16), (u.t0 = u.catch(6)), o.e(u.t0);
                case 19:
                  return (u.prev = 19), o.f(), u.finish(19);
                case 22:
                  u.next = 3;
                  break;
                case 24:
                  u.next = 29;
                  break;
                case 26:
                  (u.prev = 26), (u.t1 = u.catch(1)), t.e(u.t1);
                case 29:
                  return (u.prev = 29), t.f(), u.finish(29);
                case 32:
                case "end":
                  return u.stop();
              }
          },
          T,
          null,
          [
            [1, 26, 29, 32],
            [6, 16, 19, 22],
          ]
        );
      }
      var tn = en,
        nn = {
          isSSR: "undefined" == typeof window,
          isReactNative:
            "undefined" != typeof navigator &&
            "ReactNative" === navigator.product,
        },
        rn = g.unstable_batchedUpdates,
        on = Ot.batchStart,
        an = {
          unstable_batchedUpdates: { unstable_batchedUpdates: rn }
            .unstable_batchedUpdates,
        }.unstable_batchedUpdates,
        un = function (e) {
          an(function () {
            var t = function () {};
            try {
              (t = on()), e();
            } finally {
              t();
            }
          });
        },
        cn = nn.isSSR,
        ln = un,
        sn = _t,
        fn = pt,
        vn = Fe,
        dn = Ee.DEFAULT_VALUE,
        hn = Ee.recoilValues,
        yn = Ee.recoilValuesForKeys,
        pn = Ot.AbstractRecoilValue,
        mn = Ot.getRecoilValueAsLoadable,
        _n = Ot.setRecoilValue,
        gn = Ot.setUnvalidatedRecoilValue,
        Sn = Qt,
        bn = Ge,
        wn = Ke,
        kn = (function () {
          function e(t) {
            var n = this;
            (0, h.Z)(this, e),
              Z(this, "_store", void 0),
              Z(this, "_refCount", 0),
              Z(this, "getLoadable", function (e) {
                return n.checkRefCount_INTERNAL(), mn(n._store, e);
              }),
              Z(this, "getPromise", function (e) {
                return n.checkRefCount_INTERNAL(), n.getLoadable(e).toPromise();
              }),
              Z(this, "getNodes_UNSTABLE", function (e) {
                if (
                  (n.checkRefCount_INTERNAL(),
                  !0 === (null == e ? void 0 : e.isModified))
                ) {
                  if (!1 === (null == e ? void 0 : e.isInitialized)) return [];
                  var t = n._store.getState().currentTree;
                  return yn(t.dirtyAtoms);
                }
                var r = n._store.getState().knownAtoms,
                  o = n._store.getState().knownSelectors;
                return null == (null == e ? void 0 : e.isInitialized)
                  ? hn.values()
                  : !0 === e.isInitialized
                  ? yn(
                      tn([
                        n._store.getState().knownAtoms,
                        n._store.getState().knownSelectors,
                      ])
                    )
                  : Xe(hn.values(), function (e) {
                      var t = e.key;
                      return !r.has(t) && !o.has(t);
                    });
              }),
              Z(this, "getInfo_UNSTABLE", function (e) {
                var t = e.key;
                return (
                  n.checkRefCount_INTERNAL(),
                  fn(n._store, n._store.getState().currentTree, t)
                );
              }),
              Z(this, "map", function (e) {
                n.checkRefCount_INTERNAL();
                var t = new Rn(n, ln);
                return e(t), An(t.getStore_INTERNAL());
              }),
              Z(
                this,
                "asyncMap",
                (function () {
                  var e = (0, i.Z)(
                    m().mark(function e(t) {
                      var r;
                      return m().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                n.checkRefCount_INTERNAL(),
                                (r = new Rn(n, ln)),
                                (e.next = 4),
                                t(r)
                              );
                            case 4:
                              return e.abrupt(
                                "return",
                                An(r.getStore_INTERNAL())
                              );
                            case 5:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()
              ),
              (this._store = {
                getState: function () {
                  return t;
                },
                replaceState: function (e) {
                  t.currentTree = e(t.currentTree);
                },
                getGraph: function (e) {
                  var n = t.graphsByVersion;
                  if (n.has(e)) return C(n.get(e));
                  var r = vn();
                  return n.set(e, r), r;
                },
                subscribeToTransactions: function () {
                  return { release: function () {} };
                },
                addTransactionMetadata: function () {
                  throw L("Cannot subscribe to Snapshots");
                },
              });
            var r,
              o = A(this._store.getState().nodeCleanupFunctions.keys());
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var a = r.value;
                sn(this._store, t.currentTree, a, "get"), Sn(this._store, a, 1);
              }
            } catch (u) {
              o.e(u);
            } finally {
              o.f();
            }
            this.retain(), this.autorelease_INTERNAL();
          }
          return (
            (0, y.Z)(e, [
              {
                key: "retain",
                value: function () {
                  var e = this;
                  if (!ie("recoil_memory_managament_2020"))
                    return function () {};
                  this._refCount++;
                  var t = !1;
                  return function () {
                    t || ((t = !0), e.release_INTERNAL());
                  };
                },
              },
              {
                key: "autorelease_INTERNAL",
                value: function () {
                  var e = this;
                  ie("recoil_memory_managament_2020") &&
                    (cn ||
                      window.setTimeout(function () {
                        return e.release_INTERNAL();
                      }, 0));
                },
              },
              {
                key: "release_INTERNAL",
                value: function () {
                  ie("recoil_memory_managament_2020") &&
                    (this._refCount--, this._refCount);
                },
              },
              {
                key: "checkRefCount_INTERNAL",
                value: function () {
                  ie("recoil_memory_managament_2020") && this._refCount;
                },
              },
              {
                key: "getStore_INTERNAL",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this._store;
                },
              },
              {
                key: "getID",
                value: function () {
                  return this.checkRefCount_INTERNAL(), this.getID_INTERNAL();
                },
              },
              {
                key: "getID_INTERNAL",
                value: function () {
                  return (
                    this.checkRefCount_INTERNAL(),
                    this._store.getState().currentTree.stateID
                  );
                },
              },
            ]),
            e
          );
        })();
      function Tn(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = e.getState(),
          o = n ? bn() : t.version;
        return {
          currentTree: n
            ? {
                version: o,
                stateID: o,
                transactionMetadata: N({}, t.transactionMetadata),
                dirtyAtoms: new Set(t.dirtyAtoms),
                atomValues: t.atomValues.clone(),
                nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
              }
            : t,
          commitDepth: 0,
          nextTree: null,
          previousTree: null,
          knownAtoms: new Set(r.knownAtoms),
          knownSelectors: new Set(r.knownSelectors),
          transactionSubscriptions: new Map(),
          nodeTransactionSubscriptions: new Map(),
          nodeToComponentSubscriptions: new Map(),
          queuedComponentCallbacks_DEPRECATED: [],
          suspendedComponentResolvers: new Set(),
          graphsByVersion: new Map().set(o, e.getGraph(t.version)),
          versionsUsedByComponent: new Map(),
          retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set(),
          },
          nodeCleanupFunctions: new Map(),
        };
      }
      function An(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "current",
          n = e.getState(),
          r = "current" === t ? n.currentTree : C(n.previousTree);
        return new kn(Tn(e, r));
      }
      var Rn = (function (e) {
          (0, f.Z)(n, e);
          var t = V(n);
          function n(e, r) {
            var o;
            return (
              (0, h.Z)(this, n),
              (o = t.call(
                this,
                Tn(
                  e.getStore_INTERNAL(),
                  e.getStore_INTERNAL().getState().currentTree,
                  !0
                )
              )),
              Z((0, s.Z)(o), "_batch", void 0),
              Z((0, s.Z)(o), "set", function (e, t) {
                o.checkRefCount_INTERNAL();
                var n = o.getStore_INTERNAL();
                o._batch(function () {
                  Sn(n, e.key, 1), _n(o.getStore_INTERNAL(), e, t);
                });
              }),
              Z((0, s.Z)(o), "reset", function (e) {
                o.checkRefCount_INTERNAL();
                var t = o.getStore_INTERNAL();
                o._batch(function () {
                  Sn(t, e.key, 1), _n(o.getStore_INTERNAL(), e, dn);
                });
              }),
              Z(
                (0, s.Z)(o),
                "setUnvalidatedAtomValues_DEPRECATED",
                function (e) {
                  o.checkRefCount_INTERNAL();
                  var t = o.getStore_INTERNAL();
                  ln(function () {
                    var n,
                      r = A(e.entries());
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var o = (0, u.Z)(n.value, 2),
                          a = o[0],
                          i = o[1];
                        Sn(t, a, 1), gn(t, new pn(a), i);
                      }
                    } catch (c) {
                      r.e(c);
                    } finally {
                      r.f();
                    }
                  });
                }
              ),
              (o._batch = r),
              o
            );
          }
          return (0, y.Z)(n);
        })(kn),
        En = {
          Snapshot: kn,
          MutableSnapshot: Rn,
          freshSnapshot: function (e) {
            var t = new kn(wn());
            return null != e ? t.map(e) : t;
          },
          cloneSnapshot: An,
        },
        Nn = En.Snapshot,
        Vn = En.MutableSnapshot,
        Ln = En.freshSnapshot,
        Mn = En.cloneSnapshot,
        Cn = Object.freeze({
          __proto__: null,
          Snapshot: Nn,
          MutableSnapshot: Vn,
          freshSnapshot: Ln,
          cloneSnapshot: Mn,
        }),
        Zn = Ge,
        Un = Ke,
        Bn = ht,
        xn = mt,
        Dn = dt,
        On = yt,
        In = Fe,
        Fn = Ie,
        Pn = Ot.applyAtomValueWrites,
        zn = Xt,
        jn = Cn.freshSnapshot,
        Wn = _.useCallback,
        qn = _.useContext,
        Hn = _.useEffect,
        Kn = _.useMemo,
        Gn = _.useRef,
        Jn = _.useState;
      function $n() {
        throw L("This component must be used inside a <RecoilRoot> component.");
      }
      var Qn = Object.freeze({
          getState: $n,
          replaceState: $n,
          getGraph: $n,
          subscribeToTransactions: $n,
          addTransactionMetadata: $n,
        }),
        Xn = !1;
      function Yn(e) {
        if (Xn)
          throw L(
            "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
          );
        var t = e.getState();
        if (null === t.nextTree) {
          ie("recoil_memory_managament_2020") &&
            ie("recoil_release_on_cascading_update_killswitch_2021") &&
            t.commitDepth > 0 &&
            zn(e);
          var n = t.currentTree.version,
            r = Zn();
          (t.nextTree = N(
            N({}, t.currentTree),
            {},
            {
              version: r,
              stateID: r,
              dirtyAtoms: new Set(),
              transactionMetadata: {},
            }
          )),
            t.graphsByVersion.set(r, Fn(C(t.graphsByVersion.get(n))));
        }
      }
      var er = _.createContext({ current: Qn }),
        tr = function () {
          return qn(er);
        },
        nr = _.createContext(null);
      function rr(e, t, n) {
        var r,
          o = A(xn(e, n, n.dirtyAtoms));
        try {
          for (o.s(); !(r = o.n()).done; ) {
            var a = r.value,
              i = t.nodeToComponentSubscriptions.get(a);
            if (i) {
              var c,
                l = A(i);
              try {
                for (l.s(); !(c = l.n()).done; ) {
                  var s = (0, u.Z)(c.value, 2),
                    f = (s[0], (0, u.Z)(s[1], 2));
                  f[0];
                  (0, f[1])(n);
                }
              } catch (v) {
                l.e(v);
              } finally {
                l.f();
              }
            }
          }
        } catch (v) {
          o.e(v);
        } finally {
          o.f();
        }
      }
      function or(e) {
        var t = e.getState(),
          n = t.currentTree,
          r = n.dirtyAtoms;
        if (r.size) {
          var o,
            a = A(t.nodeTransactionSubscriptions);
          try {
            for (a.s(); !(o = a.n()).done; ) {
              var i = (0, u.Z)(o.value, 2),
                c = i[0],
                l = i[1];
              if (r.has(c)) {
                var s,
                  f = A(l);
                try {
                  for (f.s(); !(s = f.n()).done; ) {
                    var v = (0, u.Z)(s.value, 2);
                    v[0];
                    (0, v[1])(e);
                  }
                } catch (p) {
                  f.e(p);
                } finally {
                  f.f();
                }
              }
            }
          } catch (p) {
            a.e(p);
          } finally {
            a.f();
          }
          var d,
            h = A(t.transactionSubscriptions);
          try {
            for (h.s(); !(d = h.n()).done; ) {
              var y = (0, u.Z)(d.value, 2);
              y[0];
              (0, y[1])(e);
            }
          } catch (p) {
            h.e(p);
          } finally {
            h.f();
          }
          (ie("recoil_early_rendering_2021") &&
            !t.suspendedComponentResolvers.size) ||
            (rr(e, t, n),
            t.suspendedComponentResolvers.forEach(function (e) {
              return e();
            }),
            t.suspendedComponentResolvers.clear());
        }
        t.queuedComponentCallbacks_DEPRECATED.forEach(function (e) {
          return e(n);
        }),
          t.queuedComponentCallbacks_DEPRECATED.splice(
            0,
            t.queuedComponentCallbacks_DEPRECATED.length
          );
      }
      function ar(e) {
        var t = e.setNotifyBatcherOfChange,
          n = tr(),
          r = Jn([]),
          o = (0, u.Z)(r, 2),
          a = (o[0], o[1]);
        return (
          t(function () {
            return a({});
          }),
          Hn(function () {
            Ne.enqueueExecution("Batcher", function () {
              !(function (e) {
                var t = e.current.getState();
                t.commitDepth++;
                try {
                  var n = t.nextTree;
                  if (null === n) return;
                  (t.previousTree = t.currentTree),
                    (t.currentTree = n),
                    (t.nextTree = null),
                    or(e.current),
                    null != t.previousTree
                      ? t.graphsByVersion.delete(t.previousTree.version)
                      : le(
                          "Ended batch with no previous state, which is unexpected",
                          "recoil"
                        ),
                    (t.previousTree = null),
                    ie("recoil_memory_managament_2020") && zn(e.current);
                } finally {
                  t.commitDepth--;
                }
              })(n);
            });
          }),
          Hn(
            function () {
              return function () {
                t(function () {});
              };
            },
            [t]
          ),
          null
        );
      }
      var ir = 0;
      function ur(e) {
        var t,
          n,
          r = e.initializeState_DEPRECATED,
          o = e.initializeState,
          a = e.store_INTERNAL,
          i = e.children,
          u = Gn(null),
          c = Wn(
            function (e) {
              u.current = e;
            },
            [u]
          ),
          l =
            null !== (t = _.createMutableSource) && void 0 !== t
              ? t
              : _.unstable_createMutableSource,
          s =
            null != a
              ? a
              : {
                  getState: function () {
                    return n.current;
                  },
                  replaceState: function (e) {
                    var t = f.current.getState();
                    Yn(f.current);
                    var n,
                      r = C(t.nextTree);
                    try {
                      (Xn = !0), (n = e(r));
                    } finally {
                      Xn = !1;
                    }
                    n !== r &&
                      ((t.nextTree = n),
                      ie("recoil_early_rendering_2021") && rr(s, t, n),
                      C(u.current)());
                  },
                  getGraph: function (e) {
                    var t = n.current.graphsByVersion;
                    if (t.has(e)) return C(t.get(e));
                    var r = In();
                    return t.set(e, r), r;
                  },
                  subscribeToTransactions: function (e, t) {
                    if (null == t) {
                      var n = f.current.getState().transactionSubscriptions,
                        r = ir++;
                      return (
                        n.set(r, e),
                        {
                          release: function () {
                            n.delete(r);
                          },
                        }
                      );
                    }
                    var o = f.current.getState().nodeTransactionSubscriptions;
                    o.has(t) || o.set(t, new Map());
                    var a = ir++;
                    return (
                      C(o.get(t)).set(a, e),
                      {
                        release: function () {
                          var e = o.get(t);
                          e && (e.delete(a), 0 === e.size && o.delete(t));
                        },
                      }
                    );
                  },
                  addTransactionMetadata: function (e) {
                    Yn(f.current);
                    for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                      var r = n[t];
                      C(f.current.getState().nextTree).transactionMetadata[r] =
                        e[r];
                    }
                  },
                },
          f = Gn(s);
        n = Gn(
          null != r
            ? (function (e, t) {
                var n = Un();
                return (
                  t({
                    set: function (t, r) {
                      var o,
                        a = n.currentTree,
                        i = Dn(e, a, t.key, r),
                        u = new Set(i.keys()),
                        c = a.nonvalidatedAtoms.clone(),
                        l = A(u);
                      try {
                        for (l.s(); !(o = l.n()).done; ) {
                          var s = o.value;
                          c.delete(s);
                        }
                      } catch (f) {
                        l.e(f);
                      } finally {
                        l.f();
                      }
                      n.currentTree = N(
                        N({}, a),
                        {},
                        {
                          dirtyAtoms: Je(a.dirtyAtoms, u),
                          atomValues: Pn(a.atomValues, i),
                          nonvalidatedAtoms: c,
                        }
                      );
                    },
                    setUnvalidatedAtomValues: function (e) {
                      e.forEach(function (e, t) {
                        n.currentTree = On(n.currentTree, t, e);
                      });
                    },
                  }),
                  n
                );
              })(s, r)
            : null != o
            ? (function (e) {
                return jn().map(e).getStore_INTERNAL().getState();
              })(o)
            : Un()
        );
        var v = Kn(
          function () {
            return l
              ? l(n, function () {
                  return n.current.currentTree.version;
                })
              : null;
          },
          [l, n]
        );
        return (
          Hn(function () {
            return function () {
              var e,
                t = A(f.current.getState().knownAtoms);
              try {
                for (t.s(); !(e = t.n()).done; ) {
                  var n = e.value;
                  Bn(f.current, n);
                }
              } catch (r) {
                t.e(r);
              } finally {
                t.f();
              }
            };
          }, []),
          _.createElement(
            er.Provider,
            { value: f },
            _.createElement(
              nr.Provider,
              { value: v },
              _.createElement(ar, { setNotifyBatcherOfChange: c }),
              i
            )
          )
        );
      }
      var cr = tr,
        lr = function () {
          var e = qn(nr);
          return (
            null == e &&
              ee(
                "Attempted to use a Recoil hook outside of a <RecoilRoot>. <RecoilRoot> must be an ancestor of any component that uses Recoil hooks."
              ),
            e
          );
        },
        sr = function (e) {
          var t = e.override,
            n = (0, a.Z)(e, S),
            r = tr();
          return !1 === t && r.current !== Qn
            ? e.children
            : _.createElement(ur, n);
        };
      var fr = _.useRef;
      var vr = function () {
        return fr(), "<component name not available>";
      };
      var dr = function (e, t) {
          if (e === t) return !0;
          if (e.length !== t.length) return !1;
          for (var n = 0, r = e.length; n < r; n++)
            if (e[n] !== t[n]) return !1;
          return !0;
        },
        hr = _.useEffect,
        yr = _.useRef;
      var pr = function (e) {
          var t = yr();
          return (
            hr(function () {
              t.current = e;
            }),
            t.current
          );
        },
        mr = cr,
        _r = $t,
        gr = Qt,
        Sr = et.RetentionZone,
        br = nn.isSSR,
        wr = _.useEffect,
        kr = _.useRef;
      var Tr = function (e) {
          if (ie("recoil_memory_managament_2020"))
            return (function (e) {
              var t = (Array.isArray(e) ? e : [e]).map(function (e) {
                  return e instanceof Sr ? e : e.key;
                }),
                n = mr();
              wr(function () {
                if (ie("recoil_memory_managament_2020")) {
                  var e = n.current;
                  if (r.current && !br)
                    window.clearTimeout(r.current), (r.current = null);
                  else {
                    var o,
                      a = A(t);
                    try {
                      for (a.s(); !(o = a.n()).done; ) {
                        var i = o.value;
                        gr(e, i, 1);
                      }
                    } catch (u) {
                      a.e(u);
                    } finally {
                      a.f();
                    }
                  }
                  return function () {
                    var n,
                      r = A(t);
                    try {
                      for (r.s(); !(n = r.n()).done; ) {
                        var o = n.value;
                        gr(e, o, -1);
                      }
                    } catch (u) {
                      r.e(u);
                    } finally {
                      r.f();
                    }
                  };
                }
              }, [n].concat((0, o.Z)(t)));
              var r = kr(),
                a = pr(t);
              if (!(br || (void 0 !== a && dr(a, t)))) {
                var i,
                  u = n.current,
                  c = A(t);
                try {
                  for (c.s(); !(i = c.n()).done; ) {
                    var l = i.value;
                    gr(u, l, 1);
                  }
                } catch (d) {
                  c.e(d);
                } finally {
                  c.f();
                }
                if (a) {
                  var s,
                    f = A(a);
                  try {
                    for (f.s(); !(s = f.n()).done; ) {
                      var v = s.value;
                      gr(u, v, -1);
                    }
                  } catch (d) {
                    f.e(d);
                  } finally {
                    f.f();
                  }
                }
                r.current && window.clearTimeout(r.current),
                  (r.current = window.setTimeout(function () {
                    r.current = null;
                    var e,
                      n = A(t);
                    try {
                      for (n.s(); !(e = n.n()).done; ) {
                        var o = e.value;
                        gr(u, o, -1);
                      }
                    } catch (d) {
                      n.e(d);
                    } finally {
                      n.f();
                    }
                  }, _r));
              }
            })(e);
        },
        Ar = un,
        Rr = Ee.DEFAULT_VALUE,
        Er = lr,
        Nr = cr,
        Vr = (_e.isRecoilValue, Ot.AbstractRecoilValue),
        Lr = Ot.getRecoilValueAsLoadable,
        Mr = Ot.setRecoilValue,
        Cr = Ot.setUnvalidatedRecoilValue,
        Zr = Ot.subscribeToRecoilValue,
        Ur = ne.mutableSourceExists,
        Br = ne.useMutableSource,
        xr = _.useCallback,
        Dr = _.useEffect,
        Or = (_.useMemo, _.useRef),
        Ir = _.useState;
      function Fr(e, t, n) {
        if ("hasValue" === e.state) return e.contents;
        if ("loading" === e.state)
          throw new Promise(function (e) {
            n.current.getState().suspendedComponentResolvers.add(e);
          });
        throw "hasError" === e.state
          ? e.contents
          : L('Invalid value of loadable atom "'.concat(t.key, '"'));
      }
      function Pr(e) {
        return (
          ie("recoil_memory_managament_2020") && Tr(e),
          Ur()
            ? (function (e) {
                var t = Nr(),
                  n = xr(
                    function () {
                      var n,
                        r = t.current,
                        o = r.getState(),
                        a =
                          ie("recoil_early_rendering_2021") &&
                          null !== (n = o.nextTree) &&
                          void 0 !== n
                            ? n
                            : o.currentTree;
                      return Lr(r, e, a);
                    },
                    [t, e]
                  ),
                  r = xr(
                    function () {
                      return n();
                    },
                    [n]
                  ),
                  o = vr(),
                  a = xr(
                    function (r, a) {
                      var i = t.current;
                      return Zr(
                        i,
                        e,
                        function () {
                          if (!ie("recoil_suppress_rerender_in_callback"))
                            return a();
                          var e = n();
                          c.current.is(e) || a(), (c.current = e);
                        },
                        o
                      ).release;
                    },
                    [t, e, o, n]
                  ),
                  i = Er(),
                  u = Br(i, r, a),
                  c = Or(u);
                return (
                  Dr(function () {
                    c.current = u;
                  }),
                  u
                );
              })(e)
            : (function (e) {
                var t = Nr(),
                  n = Ir([]),
                  r = (0, u.Z)(n, 2),
                  o = (r[0], r[1]),
                  a = vr();
                Dr(
                  function () {
                    var n = t.current,
                      r = n.getState(),
                      i = Zr(
                        n,
                        e,
                        function (t) {
                          var r;
                          if (!ie("recoil_suppress_rerender_in_callback"))
                            return o([]);
                          var a = Lr(n, e, n.getState().currentTree);
                          (null === (r = c.current) || void 0 === r
                            ? void 0
                            : r.is(a)) || o(a),
                            (c.current = a);
                        },
                        a
                      );
                    if (r.nextTree)
                      n.getState().queuedComponentCallbacks_DEPRECATED.push(
                        function () {
                          (c.current = null), o([]);
                        }
                      );
                    else {
                      var u;
                      if (!ie("recoil_suppress_rerender_in_callback"))
                        return o([]);
                      var l = Lr(n, e, n.getState().currentTree);
                      (null === (u = c.current) || void 0 === u
                        ? void 0
                        : u.is(l)) || o(l),
                        (c.current = l);
                    }
                    return i.release;
                  },
                  [a, e, t]
                );
                var i = Lr(t.current, e),
                  c = Or(i);
                return (
                  Dr(function () {
                    c.current = i;
                  }),
                  i
                );
              })(e)
        );
      }
      function zr(e) {
        var t = Nr();
        return Fr(Pr(e), e, t);
      }
      function jr(e) {
        var t = Nr();
        return xr(
          function (n) {
            Mr(t.current, e, n);
          },
          [t, e]
        );
      }
      var Wr = function (e) {
          return [zr(e), jr(e)];
        },
        qr = function (e) {
          return [Pr(e), jr(e)];
        },
        Hr = zr,
        Kr = Pr,
        Gr = function (e) {
          var t = Nr();
          return xr(
            function () {
              Mr(t.current, e, Rr);
            },
            [t, e]
          );
        },
        Jr = jr,
        $r = function () {
          var e = Nr();
          return function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            Ar(function () {
              e.current.addTransactionMetadata(n),
                t.forEach(function (t, n) {
                  return Cr(e.current, new Vr(n), t);
                });
            });
          };
        };
      var Qr = function (e, t) {
        var n,
          r = new Map(),
          o = A(e);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = (0, u.Z)(n.value, 2),
              i = a[0],
              c = a[1];
            t(c, i) && r.set(i, c);
          }
        } catch (l) {
          o.e(l);
        } finally {
          o.f();
        }
        return r;
      };
      var Xr = function (e, t) {
        var n,
          r = new Set(),
          o = A(e);
        try {
          for (o.s(); !(n = o.n()).done; ) {
            var a = n.value;
            t(a) && r.add(a);
          }
        } catch (i) {
          o.e(i);
        } finally {
          o.f();
        }
        return r;
      };
      var Yr = function () {
          for (
            var e = new Map(), t = arguments.length, n = new Array(t), r = 0;
            r < t;
            r++
          )
            n[r] = arguments[r];
          for (var o = 0; o < n.length; o++)
            for (var a = n[o].keys(), i = void 0; !(i = a.next()).done; )
              e.set(i.value, n[o].get(i.value));
          return e;
        },
        eo = un,
        to = Ee.DEFAULT_VALUE,
        no = Ee.getNode,
        ro = Ee.nodes,
        oo = cr,
        ao = Ot.AbstractRecoilValue,
        io = Ot.setRecoilValueLoadable,
        uo = $t,
        co = (Cn.Snapshot, Cn.cloneSnapshot),
        lo = nn.isSSR,
        so = _.useCallback,
        fo = _.useEffect,
        vo = _.useRef,
        ho = _.useState;
      function yo(e) {
        var t = oo();
        fo(
          function () {
            return t.current.subscribeToTransactions(e).release;
          },
          [e, t]
        );
      }
      function po(e) {
        var t = e.atomValues.toMap(),
          n = De(
            Qr(t, function (e, t) {
              var n = no(t).persistence_UNSTABLE;
              return null != n && "none" !== n.type && "hasValue" === e.state;
            }),
            function (e) {
              return e.contents;
            }
          );
        return Yr(e.nonvalidatedAtoms.toMap(), n);
      }
      var mo = function () {
          var e = oo(),
            t = ho(function () {
              return co(e.current);
            }),
            n = (0, u.Z)(t, 2),
            r = n[0],
            o = n[1],
            a = pr(r),
            i = vo();
          return (
            fo(
              function () {
                return (
                  i.current && !lo && window.clearTimeout(i.current), r.retain()
                );
              },
              [r]
            ),
            yo(
              so(function (e) {
                return o(co(e));
              }, [])
            ),
            a === r ||
              lo ||
              (i.current &&
                (null == a || a.release_INTERNAL(),
                window.clearTimeout(i.current)),
              r.retain(),
              (i.current = window.setTimeout(function () {
                r.release_INTERNAL(), (i.current = null);
              }, uo))),
            r
          );
        },
        _o = function () {
          var e = oo();
          return so(
            function (t) {
              var n,
                r = e.current.getState(),
                o =
                  null !== (n = r.nextTree) && void 0 !== n ? n : r.currentTree,
                a = t.getStore_INTERNAL().getState().currentTree;
              eo(function () {
                for (
                  var n = new Set(),
                    r = 0,
                    i = [o.atomValues.keys(), a.atomValues.keys()];
                  r < i.length;
                  r++
                ) {
                  var u,
                    c = A(i[r]);
                  try {
                    for (c.s(); !(u = c.n()).done; ) {
                      var l,
                        s,
                        f = u.value;
                      (null === (l = o.atomValues.get(f)) || void 0 === l
                        ? void 0
                        : l.contents) !==
                        (null === (s = a.atomValues.get(f)) || void 0 === s
                          ? void 0
                          : s.contents) &&
                        no(f).shouldRestoreFromSnapshots &&
                        n.add(f);
                    }
                  } catch (v) {
                    c.e(v);
                  } finally {
                    c.f();
                  }
                }
                n.forEach(function (t) {
                  io(
                    e.current,
                    new ao(t),
                    a.atomValues.has(t) ? C(a.atomValues.get(t)) : to
                  );
                }),
                  e.current.replaceState(function (e) {
                    return N(N({}, e), {}, { stateID: t.getID_INTERNAL() });
                  });
              });
            },
            [e]
          );
        },
        go = function (e) {
          yo(
            so(
              function (t) {
                var n = co(t, "current"),
                  r = co(t, "previous");
                e({ snapshot: n, previousSnapshot: r });
              },
              [e]
            )
          );
        },
        So = function (e) {
          yo(
            so(
              function (t) {
                var n = t.getState().previousTree,
                  r = t.getState().currentTree;
                n ||
                  (le(
                    "Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil"
                  ),
                  (n = t.getState().currentTree));
                var o = po(r),
                  a = po(n),
                  i = De(ro, function (e) {
                    var t, n, r, o;
                    return {
                      persistence_UNSTABLE: {
                        type:
                          null !==
                            (t =
                              null === (n = e.persistence_UNSTABLE) ||
                              void 0 === n
                                ? void 0
                                : n.type) && void 0 !== t
                            ? t
                            : "none",
                        backButton:
                          null !==
                            (r =
                              null === (o = e.persistence_UNSTABLE) ||
                              void 0 === o
                                ? void 0
                                : o.backButton) &&
                          void 0 !== r &&
                          r,
                      },
                    };
                  }),
                  u = Xr(r.dirtyAtoms, function (e) {
                    return o.has(e) || a.has(e);
                  });
                e({
                  atomValues: o,
                  previousAtomValues: a,
                  atomInfo: i,
                  modifiedAtoms: u,
                  transactionMetadata: N({}, r.transactionMetadata),
                });
              },
              [e]
            )
          );
        },
        bo = pt,
        wo = cr;
      var ko = function () {
          var e = wo();
          return function (t) {
            var n = t.key;
            return bo(e.current, e.current.getState().currentTree, n);
          };
        },
        To = sr,
        Ao = cr,
        Ro = _.useMemo;
      var Eo = function () {
          var e = Ao().current;
          return Ro(
            function () {
              return function (t) {
                var n = t.children;
                return _.createElement(To, { store_INTERNAL: e }, n);
              };
            },
            [e]
          );
        },
        No = X.loadableWithValue,
        Vo = Ee.DEFAULT_VALUE,
        Lo = Ee.getNode,
        Mo = Ot.copyTreeState,
        Co = Ot.getRecoilValueAsLoadable,
        Zo = Ot.invalidateDownstreams,
        Uo = Ot.writeLoadableToTreeState;
      function Bo(e) {
        return "atom" === Lo(e.key).nodeType;
      }
      var xo = (function () {
        function e(t, n) {
          var r = this;
          (0, h.Z)(this, e),
            Z(this, "_store", void 0),
            Z(this, "_treeState", void 0),
            Z(this, "_changes", void 0),
            Z(this, "get", function (e) {
              if (r._changes.has(e.key)) return r._changes.get(e.key);
              if (!Bo(e))
                throw L(
                  "Reading selectors within atomicUpdate is not supported"
                );
              var t = Co(r._store, e, r._treeState);
              if ("hasValue" === t.state) return t.contents;
              throw "hasError" === t.state
                ? t.contents
                : L(
                    "Expected Recoil atom ".concat(
                      e.key,
                      " to have a value, but it is in a loading state."
                    )
                  );
            }),
            Z(this, "set", function (e, t) {
              if (!Bo(e))
                throw L(
                  "Setting selectors within atomicUpdate is not supported"
                );
              if ("function" == typeof t) {
                var n = r.get(e);
                r._changes.set(e.key, t(n));
              } else r._changes.set(e.key, t);
            }),
            Z(this, "reset", function (e) {
              r.set(e, Vo);
            }),
            (this._store = t),
            (this._treeState = n),
            (this._changes = new Map());
        }
        return (
          (0, y.Z)(e, [
            {
              key: "newTreeState_INTERNAL",
              value: function () {
                if (0 === this._changes.size) return this._treeState;
                var e,
                  t = Mo(this._treeState),
                  n = A(this._changes);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var r = (0, u.Z)(e.value, 2),
                      o = r[0],
                      a = r[1];
                    Uo(t, o, No(a));
                  }
                } catch (i) {
                  n.e(i);
                } finally {
                  n.f();
                }
                return Zo(this._store, t), t;
              },
            },
          ]),
          e
        );
      })();
      var Do = function (e) {
          return function (t) {
            e.replaceState(function (n) {
              var r = new xo(e, n);
              return t(r), r.newTreeState_INTERNAL();
            });
          };
        },
        Oo = Do,
        Io = Object.freeze({ __proto__: null, atomicUpdater: Oo });
      var Fo = function (e, t) {
          if (!e) throw new Error(t);
        },
        Po = Io.atomicUpdater,
        zo = un,
        jo = Ee.DEFAULT_VALUE,
        Wo = cr,
        qo = Ot.setRecoilValue,
        Ho = (Cn.Snapshot, Cn.cloneSnapshot),
        Ko = _o,
        Go = _.useCallback,
        Jo = (0, y.Z)(function e() {
          (0, h.Z)(this, e);
        }),
        $o = new Jo();
      var Qo = function (e, t) {
          var n = Wo(),
            r = Ko();
          return Go(
            function () {
              for (
                var t = arguments.length, o = new Array(t), a = 0;
                a < t;
                a++
              )
                o[a] = arguments[a];
              function i(e, t) {
                qo(n.current, e, t);
              }
              function u(e) {
                qo(n.current, e, jo);
              }
              var c = Ho(n.current),
                l = Po(n.current),
                s = $o;
              return (
                zo(function () {
                  var t =
                    "useRecoilCallback expects a function that returns a function: it accepts a function of the type (RecoilInterface) => T = R and returns a callback function T => R, where RecoilInterface is an object {snapshot, set, ...} and T and R are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
                  if ("function" != typeof e) throw L(t);
                  var n = e({
                    set: i,
                    reset: u,
                    snapshot: c,
                    gotoSnapshot: r,
                    transact_UNSTABLE: l,
                  });
                  if ("function" != typeof n) throw L(t);
                  s = n.apply(void 0, o);
                }),
                s instanceof Jo && Fo(!1),
                s
              );
            },
            null != t ? [].concat((0, o.Z)(t), [n]) : void 0
          );
        },
        Xo = Ee.getNode,
        Yo = cr,
        ea = _.useCallback;
      var ta = function (e) {
          var t = Yo();
          return ea(
            function () {
              var n,
                r = t.current,
                o = r.getState().currentTree,
                a = Xo(e.key);
              null === (n = a.clearCache) || void 0 === n || n.call(a, r, o);
            },
            [e, t]
          );
        },
        na = Io.atomicUpdater,
        ra = cr,
        oa = _.useMemo;
      var aa = function (e, t) {
        var n = ra();
        return oa(
          function () {
            return function () {
              for (
                var t = arguments.length, r = new Array(t), o = 0;
                o < t;
                o++
              )
                r[o] = arguments[o];
              var a = na(n.current);
              a(function (t) {
                e(t).apply(void 0, r);
              });
            };
          },
          null != t ? [].concat((0, o.Z)(t), [n]) : void 0
        );
      };
      function ia(e, t, n) {
        if ("string" == typeof e && !e.includes('"') && !e.includes("\\"))
          return '"'.concat(e, '"');
        switch (typeof e) {
          case "undefined":
            return "";
          case "boolean":
            return e ? "true" : "false";
          case "number":
          case "symbol":
            return String(e);
          case "string":
            return JSON.stringify(e);
          case "function":
            if (!0 !== (null == t ? void 0 : t.allowFunctions))
              throw L("Attempt to serialize function in a Recoil cache key");
            return "__FUNCTION(".concat(e.name, ")__");
        }
        if (null === e) return "null";
        var r;
        if ("object" != typeof e)
          return null !== (r = JSON.stringify(e)) && void 0 !== r ? r : "";
        if (M(e)) return "__PROMISE__";
        if (Array.isArray(e))
          return "[".concat(
            e.map(function (e, n) {
              return ia(e, t, n.toString());
            }),
            "]"
          );
        if ("function" == typeof e.toJSON) return ia(e.toJSON(n), t, n);
        if (e instanceof Map) {
          var o,
            a = {},
            i = A(e);
          try {
            for (i.s(); !(o = i.n()).done; ) {
              var c = (0, u.Z)(o.value, 2),
                l = c[0],
                s = c[1];
              a["string" == typeof l ? l : ia(l, t)] = s;
            }
          } catch (f) {
            i.e(f);
          } finally {
            i.f();
          }
          return ia(a, t, n);
        }
        return e instanceof Set
          ? ia(
              Array.from(e).sort(function (e, n) {
                return ia(e, t).localeCompare(ia(n, t));
              }),
              t,
              n
            )
          : void 0 !== Symbol &&
            null != e[Symbol.iterator] &&
            "function" == typeof e[Symbol.iterator]
          ? ia(Array.from(e), t, n)
          : "{".concat(
              Object.keys(e)
                .filter(function (t) {
                  return void 0 !== e[t];
                })
                .sort()
                .map(function (n) {
                  return "".concat(ia(n, t), ":").concat(ia(e[n], t, n));
                })
                .join(","),
              "}"
            );
      }
      var ua = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { allowFunctions: !1 };
          return ia(e, t);
        },
        ca = (function () {
          function e(t) {
            var n, r, o;
            (0, h.Z)(this, e),
              Z(this, "_numLeafs", void 0),
              Z(this, "_root", void 0),
              Z(this, "_onHit", void 0),
              Z(this, "_onSet", void 0),
              Z(this, "_mapNodeValue", void 0),
              (this._numLeafs = 0),
              (this._root = null),
              (this._onHit =
                null !== (n = null == t ? void 0 : t.onHit) && void 0 !== n
                  ? n
                  : function () {}),
              (this._onSet =
                null !== (r = null == t ? void 0 : t.onSet) && void 0 !== r
                  ? r
                  : function () {}),
              (this._mapNodeValue =
                null !== (o = null == t ? void 0 : t.mapNodeValue) &&
                void 0 !== o
                  ? o
                  : function (e) {
                      return e;
                    });
          }
          return (
            (0, y.Z)(e, [
              {
                key: "size",
                value: function () {
                  return this._numLeafs;
                },
              },
              {
                key: "root",
                value: function () {
                  return this._root;
                },
              },
              {
                key: "get",
                value: function (e, t) {
                  var n;
                  return null === (n = this.getLeafNode(e, t)) || void 0 === n
                    ? void 0
                    : n.value;
                },
              },
              {
                key: "getLeafNode",
                value: function (e, t) {
                  var n = this;
                  return la(
                    this.root(),
                    function (t) {
                      return n._mapNodeValue(e(t));
                    },
                    {
                      onNodeVisit: function (e) {
                        null == t || t.onNodeVisit(e),
                          "leaf" === e.type && n._onHit(e);
                      },
                    }
                  );
                },
              },
              {
                key: "set",
                value: function (e, t, n) {
                  var r,
                    o = this,
                    a = null;
                  !(function i() {
                    a = sa(
                      o.root(),
                      e.map(function (e) {
                        var t = (0, u.Z)(e, 2),
                          n = t[0],
                          r = t[1];
                        return [n, o._mapNodeValue(r)];
                      }),
                      null,
                      t,
                      null,
                      {
                        onNodeVisit: function (e) {
                          null == n || n.onNodeVisit(e),
                            "leaf" === e.type && (r = e);
                        },
                      },
                      function () {
                        o.clear(), i();
                      }
                    );
                  })(),
                    this.root() || (this._root = a),
                    this._numLeafs++,
                    this._onSet(C(r));
                },
              },
              {
                key: "delete",
                value: function (e) {
                  if (!this.root()) return !1;
                  var t = C(this.root());
                  return (
                    !!fa(t, e, e.parent) &&
                    (e === t || ("branch" === t.type && !t.branches.size)
                      ? ((this._root = null), (this._numLeafs = 0), !0)
                      : ((this._numLeafs -= da(e)), !0))
                  );
                },
              },
              {
                key: "clear",
                value: function () {
                  (this._numLeafs = 0), (this._root = null);
                },
              },
            ]),
            e
          );
        })(),
        la = function e(t, n, r) {
          var o;
          if (null != t) {
            if (
              (null == r ||
                null === (o = r.onNodeVisit) ||
                void 0 === o ||
                o.call(r, t),
              "leaf" === t.type)
            )
              return t;
            var a = n(t.nodeKey);
            return e(t.branches.get(a), n, r);
          }
        },
        sa = function e(t, n, o, a, i, c, l) {
          var s, f;
          if (null == t)
            if (0 === n.length)
              f = { type: "leaf", value: a, parent: o, branchKey: i };
            else {
              var v = (0, r.Z)(n),
                d = v[0],
                h = v.slice(1),
                y = (0, u.Z)(d, 2),
                p = y[0],
                m = y[1];
              (f = {
                type: "branch",
                nodeKey: p,
                parent: o,
                branches: new Map(),
                branchKey: i,
              }).branches.set(m, e(null, h, f, a, m, c, l));
            }
          else if (((f = t), n.length)) {
            var _ = (0, r.Z)(n),
              g = _[0],
              S = _.slice(1),
              b = (0, u.Z)(g, 2),
              w = b[0],
              k = b[1];
            if ("branch" !== t.type || t.nodeKey !== w)
              return (
                le(
                  "Existing cache must have a branch midway through the route with matching node key. Resetting cache."
                ),
                l(),
                f
              );
            t.branches.set(k, e(t.branches.get(k), S, t, a, k, c, l));
          }
          return (
            null == c ||
              null === (s = c.onNodeVisit) ||
              void 0 === s ||
              s.call(c, f),
            f
          );
        },
        fa = function (e, t, n) {
          return n
            ? (n.branches.delete(t.branchKey), va(e, n, n.parent))
            : e === t;
        },
        va = function e(t, n, r) {
          return r
            ? (0 === n.branches.size && r.branches.delete(n.branchKey),
              e(t, r, r.parent))
            : t === n;
        },
        da = function e(t) {
          return "leaf" === t.type
            ? 1
            : Array.from(t.branches.values()).reduce(function (t, n) {
                return t + e(n);
              }, 0);
        },
        ha = { TreeCache: ca }.TreeCache,
        ya = Object.freeze({ __proto__: null, TreeCache: ha }),
        pa = {
          LRUCache: (function () {
            function e(t) {
              var n;
              (0, h.Z)(this, e),
                Z(this, "_maxSize", void 0),
                Z(this, "_size", void 0),
                Z(this, "_head", void 0),
                Z(this, "_tail", void 0),
                Z(this, "_map", void 0),
                Z(this, "_keyMapper", void 0),
                (this._maxSize = t.maxSize),
                (this._size = 0),
                (this._head = null),
                (this._tail = null),
                (this._map = new Map()),
                (this._keyMapper =
                  null !== (n = t.mapKey) && void 0 !== n
                    ? n
                    : function (e) {
                        return e;
                      });
            }
            return (
              (0, y.Z)(e, [
                {
                  key: "head",
                  value: function () {
                    return this._head;
                  },
                },
                {
                  key: "tail",
                  value: function () {
                    return this._tail;
                  },
                },
                {
                  key: "size",
                  value: function () {
                    return this._size;
                  },
                },
                {
                  key: "maxSize",
                  value: function () {
                    return this._maxSize;
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(this._keyMapper(e));
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    var t = this._keyMapper(e),
                      n = this._map.get(t);
                    if (n) return this.set(e, n.value), n.value;
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    var n = this._keyMapper(e);
                    this._map.get(n) && this.delete(e);
                    var r = this.head(),
                      o = { key: e, right: r, left: null, value: t };
                    r ? (r.left = o) : (this._tail = o),
                      this._map.set(n, o),
                      (this._head = o),
                      this._size++,
                      this._maybeDeleteLRU();
                  },
                },
                {
                  key: "_maybeDeleteLRU",
                  value: function () {
                    this.size() > this.maxSize() && this.deleteLru();
                  },
                },
                {
                  key: "deleteLru",
                  value: function () {
                    var e = this.tail();
                    e && this.delete(e.key);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    var t = this._keyMapper(e);
                    if (this._size && this._map.has(t)) {
                      var n = C(this._map.get(t)),
                        r = n.right,
                        o = n.left;
                      r && (r.left = n.left),
                        o && (o.right = n.right),
                        n === this.head() && (this._head = r),
                        n === this.tail() && (this._tail = o),
                        this._map.delete(t),
                        this._size--;
                    }
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    (this._size = 0),
                      (this._head = null),
                      (this._tail = null),
                      (this._map = new Map());
                  },
                },
              ]),
              e
            );
          })(),
        }.LRUCache,
        ma = Object.freeze({ __proto__: null, LRUCache: pa }),
        _a = ma.LRUCache,
        ga = ya.TreeCache;
      var Sa = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : function (e) {
                    return e;
                  },
            n = new _a({ maxSize: e }),
            r = new ga({
              mapNodeValue: t,
              onHit: function (e) {
                n.set(e, !0);
              },
              onSet: function (t) {
                var o = n.tail();
                n.set(t, !0), o && r.size() > e && r.delete(o.key);
              },
            });
          return r;
        },
        ba = ya.TreeCache,
        wa = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
      function ka(e) {
        switch (e) {
          case "reference":
            return function (e) {
              return e;
            };
          case "value":
            return function (e) {
              return ua(e);
            };
        }
        throw L("Unrecognized equality policy ".concat(e));
      }
      function Ta(e, t, n) {
        switch (e) {
          case "keep-all":
            return new ba({ mapNodeValue: n });
          case "lru":
            return Sa(C(t), n);
          case "most-recent":
            return Sa(1, n);
        }
        throw L("Unrecognized eviction policy ".concat(e));
      }
      var Aa = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wa,
          t = e.equality,
          n = void 0 === t ? wa.equality : t,
          r = e.eviction,
          o = void 0 === r ? wa.eviction : r,
          a = e.maxSize,
          i = void 0 === a ? wa.maxSize : a,
          u = ka(n),
          c = Ta(o, i, u);
        return c;
      };
      var Ra,
        Ea = function (e) {
          return function () {
            return null;
          };
        },
        Na = X.loadableWithError,
        Va = X.loadableWithPromise,
        La = X.loadableWithValue,
        Ma = ft,
        Ca = vt,
        Za = dt,
        Ua = Pe,
        Ba = Ee.DEFAULT_VALUE,
        xa = Ee.RecoilValueNotReady,
        Da = Ee.getConfigDeletionHandler,
        Oa = Ee.getNode,
        Ia = Ee.registerNode,
        Fa = _e.isRecoilValue,
        Pa = _e.AbstractRecoilValue,
        za = Ot.markRecoilValueModified,
        ja = Ot.setRecoilValueLoadable,
        Wa = Yt,
        qa = Cn.cloneSnapshot,
        Ha = Ea,
        Ka = (0, y.Z)(function e() {
          (0, h.Z)(this, e);
        }),
        Ga = new Ka(),
        Ja = [],
        $a = new Map(),
        Qa =
          ((Ra = 0),
          function () {
            return Ra++;
          });
      var Xa = function (e) {
          var t = null,
            n = e.key,
            r = e.get,
            o = e.cachePolicy_UNSTABLE,
            a = null != e.set ? e.set : void 0,
            i = new Set(),
            c = Aa(
              null != o ? o : { equality: "reference", eviction: "keep-all" }
            ),
            l = Wa(e.retainedBy_UNSTABLE),
            s = new Map(),
            f = 0;
          function v() {
            return !ie("recoil_memory_managament_2020") || f > 0;
          }
          function d(e) {
            return (
              s.has(e) ||
                s.set(e, {
                  depValuesDiscoveredSoFarDuringAsyncWork: null,
                  latestLoadable: null,
                  latestExecutionId: null,
                  stateVersion: null,
                }),
              C(s.get(e))
            );
          }
          function h(e) {
            return (
              f++,
              e.getState().knownSelectors.add(n),
              function () {
                f--, e.getState().knownSelectors.delete(n), s.delete(e);
              }
            );
          }
          function y() {
            return void 0 !== Da(n) && !v();
          }
          function p(e, t, n) {
            if ("loading" === t.state) {
              var r = $a.get(n);
              null == r && $a.set(n, (r = new Set())), r.add(e);
            }
          }
          function m(e, t, n) {
            var r = e.getState().knownSelectors.has(n);
            if (r && t.atomValues.has(n)) return C(t.atomValues.get(n));
            var o = Ma(e, t, n);
            return "loading" !== o.state && r && t.atomValues.set(n, o), o;
          }
          function _(e, t, n, r, o, a) {
            return t
              .then(function (r) {
                if (!v()) throw (Z(e, o), Ga);
                null != a.loadingDepKey && a.loadingDepPromise === t
                  ? n.atomValues.set(a.loadingDepKey, La(r))
                  : e.getState().knownSelectors.forEach(function (e) {
                      n.atomValues.delete(e);
                    });
                var i = w(e, n);
                if (i && "hasValue" === i.state) return N(i, e), i.contents;
                if (!U(e, o)) {
                  var c,
                    l = R(n);
                  if (
                    "loading" ===
                    (null == l ||
                    null === (c = l.latestLoadable) ||
                    void 0 === c
                      ? void 0
                      : c.state)
                  )
                    return l.latestLoadable.contents;
                }
                var s = b(e, n, o),
                  f = (0, u.Z)(s, 2),
                  d = f[0],
                  h = f[1];
                if (
                  (U(e, o) && V(h, e, o),
                  "loading" !== d.state &&
                    (x(n, k(h), d), S(e, n, new Set(h.keys()), o), g(e, d, o)),
                  "hasError" === d.state)
                )
                  throw d.contents;
                return d.contents;
              })
              .catch(function (t) {
                if (t instanceof Ka)
                  throw (
                    (le("Selector was released while it had dependencies"), Ga)
                  );
                if (!v()) throw (Z(e, o), Ga);
                var a = Na(t);
                throw (
                  (B(t),
                  x(n, k(r), Na(t)),
                  S(e, n, new Set(r.keys()), o),
                  g(e, a, o),
                  t)
                );
              });
          }
          function g(e, t, r) {
            U(e, r) &&
              (N(t, e),
              (function (e, t) {
                var r = $a.get(t);
                if (void 0 !== r) {
                  var o,
                    a = A(r);
                  try {
                    for (a.s(); !(o = a.n()).done; ) {
                      var i = o.value;
                      ja(i, new Pa(n), e);
                    }
                  } catch (u) {
                    a.e(u);
                  } finally {
                    a.f();
                  }
                  $a.delete(t);
                }
              })(t, r));
          }
          function S(e, t, r, o) {
            var a, i, u, c, l, s, f;
            (U(e, o) ||
              t.version ===
                (null === (a = e.getState()) ||
                void 0 === a ||
                null === (i = a.currentTree) ||
                void 0 === i
                  ? void 0
                  : i.version) ||
              t.version ===
                (null === (u = e.getState()) ||
                void 0 === u ||
                null === (c = u.nextTree) ||
                void 0 === c
                  ? void 0
                  : c.version)) &&
              Ua(
                new Map([[n, r]]),
                e,
                null !==
                  (l =
                    null === (s = e.getState()) ||
                    void 0 === s ||
                    null === (f = s.nextTree) ||
                    void 0 === f
                      ? void 0
                      : f.version) && void 0 !== l
                  ? l
                  : e.getState().currentTree.version
              );
          }
          function b(e, t, o) {
            var a,
              i,
              u = Ha(n),
              c = !1,
              l = { loadingDepKey: null, loadingDepPromise: null },
              s = new Map(),
              f = new Set();
            function d(n) {
              var r = n.key;
              !(function (e, t, n, r, o) {
                n.add(r), S(e, t, n, o);
              })(e, t, f, r, o);
              var a = m(e, t, r);
              switch ((s.set(r, a), a.state)) {
                case "hasValue":
                  return a.contents;
                case "hasError":
                  throw a.contents;
                case "loading":
                  throw (
                    ((l.loadingDepKey = r),
                    (l.loadingDepPromise = a.contents),
                    a.contents)
                  );
              }
              throw L("Invalid Loadable state");
            }
            S(e, t, f, o);
            var h = !1;
            try {
              (a = r({
                get: d,
                getCallback: function (t) {
                  return function () {
                    if (!h)
                      throw L(
                        "getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can obtain the current Recoil state without a subscription."
                      );
                    var n = qa(e),
                      r = t({ snapshot: n });
                    if ("function" != typeof r)
                      throw L(
                        "getCallback() expects a function that returns a function."
                      );
                    return r.apply(void 0, arguments);
                  };
                },
              })),
                (a = Fa(a) ? d(a) : a),
                (h = !0),
                M(a)
                  ? (a = (function (e, t, n, r, o, a) {
                      return t
                        .then(function (t) {
                          if (!v()) throw (Z(e, o), Ga);
                          var a = La(t);
                          return (
                            B(t),
                            x(n, k(r), a),
                            S(e, n, new Set(r.keys()), o),
                            g(e, a, o),
                            t
                          );
                        })
                        .catch(function (t) {
                          if (!v()) throw (Z(e, o), Ga);
                          if ((U(e, o) && V(r, e, o), M(t)))
                            return _(e, t, n, r, o, a);
                          var i = Na(t);
                          throw (
                            (B(t),
                            x(n, k(r), i),
                            S(e, n, new Set(r.keys()), o),
                            g(e, i, o),
                            t)
                          );
                        });
                    })(e, a, t, s, o, l).finally(u))
                  : u();
            } catch (y) {
              M((a = y))
                ? (a = _(e, a, t, s, o, l).finally(u))
                : ((c = !0), u());
            }
            return (
              "loading" !== (i = c ? Na(a) : M(a) ? Va(a) : La(a)).state &&
                B(i.contents),
              [i, s]
            );
          }
          function w(e, t) {
            var r,
              o = new Set(),
              a = d(e);
            try {
              r = c.get(
                function (n) {
                  return "string" != typeof n && Fo(!1), m(e, t, n).contents;
                },
                {
                  onNodeVisit: function (e) {
                    "branch" === e.type &&
                      e.nodeKey !== n &&
                      "string" == typeof e.nodeKey &&
                      (o.add(e.nodeKey), i.add(e.nodeKey));
                  },
                }
              );
            } catch (u) {
              throw L(
                'Problem with cache lookup for selector "'
                  .concat(n, '": ')
                  .concat(u.message)
              );
            }
            return r && S(e, t, o, a.latestExecutionId), r;
          }
          function k(e) {
            return Array.from(e.entries()).map(function (e) {
              var t = (0, u.Z)(e, 2);
              return [t[0], t[1].contents];
            });
          }
          function T(e, t) {
            var n = Qa(),
              r = b(e, t, n),
              o = (0, u.Z)(r, 2),
              a = o[0],
              i = o[1];
            return (
              N(a, e, i, n, t),
              (function (e, t, n) {
                "loading" !== n.state && x(e, t, n);
              })(t, k(i), a),
              p(e, a, n),
              a
            );
          }
          function R(e) {
            var t,
              n =
                null !==
                  (t = Array.from(s.entries()).find(function (t) {
                    var n = (0, u.Z)(t, 2),
                      r = n[0],
                      o = n[1];
                    return (
                      null != o.latestLoadable &&
                      null != o.latestExecutionId &&
                      !(function (e, t) {
                        var n,
                          r,
                          o = d(e),
                          a =
                            null !==
                              (n = o.depValuesDiscoveredSoFarDuringAsyncWork) &&
                            void 0 !== n
                              ? n
                              : new Map(),
                          i = Array(
                            (null !== (r = E.get(t.version)) && void 0 !== r
                              ? r
                              : new Map()
                            ).entries()
                          ),
                          c =
                            E.has(t.version) &&
                            i.length === a.size &&
                            i.every(function (e) {
                              var t = (0, u.Z)(e, 2),
                                n = t[0],
                                r = t[1];
                              return a.get(n) === r;
                            });
                        if (null == a || t.version === o.stateVersion || c)
                          return !1;
                        return (
                          E.set(t.version, new Map(a)),
                          Array.from(a).some(function (n) {
                            var r = (0, u.Z)(n, 2),
                              o = r[0],
                              a = r[1];
                            return m(e, t, o).contents !== a.contents;
                          })
                        );
                      })(r, e)
                    );
                  })) && void 0 !== t
                  ? t
                  : [];
            return (0, u.Z)(n, 2)[1];
          }
          var E = new Map();
          function N(e, t, n, r, o) {
            var a = d(t);
            "loading" === e.state
              ? ((a.depValuesDiscoveredSoFarDuringAsyncWork = n),
                (a.latestExecutionId = r),
                (a.latestLoadable = e),
                (a.stateVersion = null == o ? void 0 : o.version))
              : ((a.depValuesDiscoveredSoFarDuringAsyncWork = null),
                (a.latestExecutionId = null),
                (a.latestLoadable = null),
                (a.stateVersion = null));
          }
          function V(e, t, n) {
            var r = d(t);
            U(t, n) && (r.depValuesDiscoveredSoFarDuringAsyncWork = e);
          }
          function Z(e, t) {
            U(e, t) && s.delete(e);
          }
          function U(e, t) {
            return t === d(e).latestExecutionId;
          }
          function B(e) {
            0;
          }
          function x(e, t, r) {
            e.atomValues.set(n, r);
            try {
              c.set(t, r);
            } catch (o) {
              throw L(
                'Problem with setting cache for selector "'
                  .concat(n, '": ')
                  .concat(o.message)
              );
            }
          }
          function D(e, t) {
            return c.get(function (n) {
              "string" != typeof n && Fo(!1);
              var r = Ca(e, t, n);
              return null == r ? void 0 : r.contents;
            });
          }
          function O(e, t) {
            return (function (e) {
              if (Ja.includes(n)) {
                var t = "Recoil selector has circular dependencies: ".concat(
                  Ja.slice(Ja.indexOf(n)).join(" → ")
                );
                return Na(L(t));
              }
              Ja.push(n);
              try {
                return e();
              } finally {
                Ja.pop();
              }
            })(function () {
              return (function (e, t) {
                var n = w(e, t);
                if (null != n) return N(n, e), n;
                var r = R(t);
                if (r) {
                  var o = r;
                  return (
                    p(e, C(o.latestLoadable), C(o.latestExecutionId)),
                    C(o.latestLoadable)
                  );
                }
                return T(e, t);
              })(e, t);
            });
          }
          function I(e) {
            e.atomValues.delete(n);
          }
          function F(e, n) {
            null == t && Fo(!1);
            var r,
              o = A(i);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var a,
                  u = r.value,
                  l = Oa(u);
                null === (a = l.clearCache) || void 0 === a || a.call(l, e, n);
              }
            } catch (s) {
              o.e(s);
            } finally {
              o.f();
            }
            I(n), c.clear(), za(e, t);
          }
          if (null != a) {
            return (t = Ia({
              key: n,
              nodeType: "selector",
              peek: D,
              get: O,
              set: function (e, t, n) {
                var r = !1,
                  o = new Map();
                function i(n) {
                  var o = n.key;
                  if (r)
                    throw L(
                      "Recoil: Async selector sets are not currently supported."
                    );
                  var a = m(e, t, o);
                  if ("hasValue" === a.state) return a.contents;
                  throw "loading" === a.state ? new xa(o) : a.contents;
                }
                function u(n, a) {
                  if (r)
                    throw L(
                      "Recoil: Async selector sets are not currently supported."
                    );
                  var u = "function" == typeof a ? a(i(n)) : a;
                  Za(e, t, n.key, u).forEach(function (e, t) {
                    return o.set(t, e);
                  });
                }
                var c = a(
                  {
                    set: u,
                    get: i,
                    reset: function (e) {
                      u(e, Ba);
                    },
                  },
                  n
                );
                if (void 0 !== c)
                  throw M(c)
                    ? L(
                        "Recoil: Async selector sets are not currently supported."
                      )
                    : L("Recoil: selector set should be a void function.");
                return (r = !0), o;
              },
              init: h,
              invalidate: I,
              clearCache: F,
              shouldDeleteConfigOnRelease: y,
              dangerouslyAllowMutability: e.dangerouslyAllowMutability,
              shouldRestoreFromSnapshots: !1,
              retainedBy: l,
            }));
          }
          return (t = Ia({
            key: n,
            nodeType: "selector",
            peek: D,
            get: O,
            init: h,
            invalidate: I,
            clearCache: F,
            shouldDeleteConfigOnRelease: y,
            dangerouslyAllowMutability: e.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: !1,
            retainedBy: l,
          }));
        },
        Ya = X.loadableWithError,
        ei = X.loadableWithPromise,
        ti = X.loadableWithValue,
        ni = pt,
        ri = Ee.DEFAULT_VALUE,
        oi = Ee.DefaultValue,
        ai = Ee.getConfigDeletionHandler,
        ii = Ee.registerNode,
        ui = Ee.setConfigDeletionHandler,
        ci = _e.isRecoilValue,
        li = Ot.getRecoilValueAsLoadable,
        si = Ot.markRecoilValueModified,
        fi = Ot.setRecoilValue,
        vi = Ot.setRecoilValueLoadable,
        di = Yt;
      function hi(e) {
        var t = e.key,
          n = e.persistence_UNSTABLE,
          r = di(e.retainedBy_UNSTABLE),
          a = 0,
          i = M(e.default)
            ? ei(
                e.default
                  .then(function (e) {
                    return (i = ti(e)), e;
                  })
                  .catch(function (e) {
                    throw ((i = Ya(e)), e);
                  })
              )
            : ti(e.default);
        l(e.default);
        var u = void 0,
          c = new Map();
        function l(e) {
          return e;
        }
        var s = ii({
          key: t,
          nodeType: "atom",
          peek: function (e, n) {
            var r, o;
            return null !==
              (r =
                null !== (o = n.atomValues.get(t)) && void 0 !== o ? o : u) &&
              void 0 !== r
              ? r
              : i;
          },
          get: function (e, r) {
            if (r.atomValues.has(t)) return C(r.atomValues.get(t));
            if (r.nonvalidatedAtoms.has(t)) {
              if (null != u) return u;
              if (null == n)
                return (
                  ee(
                    "Tried to restore a persisted value for atom ".concat(
                      t,
                      " but it has no persistence settings."
                    )
                  ),
                  i
                );
              var o = r.nonvalidatedAtoms.get(t),
                a = n.validator(o, ri),
                c = a instanceof oi ? i : ti(a);
              return (u = c);
            }
            return i;
          },
          set: function (e, n, r) {
            if (n.atomValues.has(t)) {
              var o = C(n.atomValues.get(t));
              if ("hasValue" === o.state && r === o.contents) return new Map();
            } else if (!n.nonvalidatedAtoms.has(t) && r instanceof oi)
              return new Map();
            return (u = void 0), new Map().set(t, ti(r));
          },
          init: function (n, r, u) {
            a++;
            var l = n.getState().knownAtoms.has(t);
            if ((n.getState().knownAtoms.add(t), "loading" === i.state)) {
              var f = function () {
                var e;
                (null !== (e = n.getState().nextTree) && void 0 !== e
                  ? e
                  : n.getState().currentTree
                ).atomValues.has(t) || si(n, s);
              };
              i.contents.then(f).catch(f);
            }
            var v = ri,
              d = null;
            if (null != e.effects_UNSTABLE && !l) {
              var h,
                y = function (e) {
                  if (_ && e.key === t && !(v instanceof oi)) {
                    var r = v;
                    return r instanceof oi
                      ? i
                      : M(r)
                      ? ei(
                          r.then(function (e) {
                            return e instanceof oi ? i.toPromise() : e;
                          })
                        )
                      : ti(r);
                  }
                  return li(n, e);
                },
                p = function (e) {
                  return y(e).toPromise();
                },
                m = function (e) {
                  var r,
                    o = ni(
                      n,
                      null !== (r = n.getState().nextTree) && void 0 !== r
                        ? r
                        : n.getState().currentTree,
                      e.key
                    );
                  return !_ || e.key !== t || v instanceof oi
                    ? o
                    : N(N({}, o), {}, { isSet: !0, loadable: y(e) });
                },
                _ = !0,
                g = function (e) {
                  return function (t) {
                    if (_) {
                      var r =
                        v instanceof oi || M(v)
                          ? "hasValue" === i.state
                            ? i.contents
                            : ri
                          : v;
                      (v = "function" == typeof t ? t(r) : t),
                        M(v) &&
                          (v = v.then(function (t) {
                            return (d = { effect: e, value: t }), t;
                          }));
                    } else {
                      if (M(t))
                        throw L(
                          "Setting atoms to async values is not implemented."
                        );
                      "function" != typeof t && (d = { effect: e, value: t }),
                        fi(
                          n,
                          s,
                          "function" == typeof t
                            ? function (n) {
                                var r = t(n);
                                return (d = { effect: e, value: r }), r;
                              }
                            : t
                        );
                    }
                  };
                },
                S = function (e) {
                  return function () {
                    return g(e)(ri);
                  };
                },
                b = function (e) {
                  return function (r) {
                    n.subscribeToTransactions(function (n) {
                      var o,
                        a = n.getState(),
                        u = a.currentTree,
                        c = a.previousTree;
                      c ||
                        (le(
                          "Transaction subscribers notified without a next tree being present -- this is a bug in Recoil"
                        ),
                        (c = u));
                      var l =
                        null !== (o = u.atomValues.get(t)) && void 0 !== o
                          ? o
                          : i;
                      if ("hasValue" === l.state) {
                        var s,
                          f,
                          v,
                          h,
                          y = l.contents,
                          p =
                            null !== (s = c.atomValues.get(t)) && void 0 !== s
                              ? s
                              : i,
                          m = "hasValue" === p.state ? p.contents : ri;
                        (null === (f = d) || void 0 === f
                          ? void 0
                          : f.effect) !== e ||
                        (null === (v = d) || void 0 === v
                          ? void 0
                          : v.value) !== y
                          ? r(y, m, !u.atomValues.has(t))
                          : (null === (h = d) || void 0 === h
                              ? void 0
                              : h.effect) === e && (d = null);
                      }
                    }, t);
                  };
                },
                w = A(
                  null !== (k = e.effects_UNSTABLE) && void 0 !== k ? k : []
                );
              try {
                for (w.s(); !(h = w.n()).done; ) {
                  var k,
                    T,
                    R = h.value,
                    E = R({
                      node: s,
                      trigger: u,
                      setSelf: g(R),
                      resetSelf: S(R),
                      onSet: b(R),
                      getPromise: p,
                      getLoadable: y,
                      getInfo_UNSTABLE: m,
                    });
                  if (null != E)
                    c.set(
                      n,
                      [].concat(
                        (0, o.Z)(
                          null !== (T = c.get(n)) && void 0 !== T ? T : []
                        ),
                        [E]
                      )
                    );
                }
              } catch (U) {
                w.e(U);
              } finally {
                w.f();
              }
              _ = !1;
            }
            if (!(v instanceof oi)) {
              var V,
                C = v,
                Z = M(C)
                  ? ei(
                      (function (e, n) {
                        var r = n
                          .then(function (n) {
                            var o, a;
                            return (
                              (null ===
                                (a = (null !== (o = e.getState().nextTree) &&
                                void 0 !== o
                                  ? o
                                  : e.getState().currentTree
                                ).atomValues.get(t)) || void 0 === a
                                ? void 0
                                : a.contents) === r && fi(e, s, n),
                              n
                            );
                          })
                          .catch(function (n) {
                            var o, a;
                            throw (
                              ((null ===
                                (a = (null !== (o = e.getState().nextTree) &&
                                void 0 !== o
                                  ? o
                                  : e.getState().currentTree
                                ).atomValues.get(t)) || void 0 === a
                                ? void 0
                                : a.contents) === r && vi(e, s, Ya(n)),
                              n)
                            );
                          });
                        return r;
                      })(n, C)
                    )
                  : ti(C);
              r.atomValues.set(t, Z),
                null === (V = n.getState().nextTree) ||
                  void 0 === V ||
                  V.atomValues.set(t, Z);
            }
            return function () {
              var e;
              a--,
                null === (e = c.get(n)) ||
                  void 0 === e ||
                  e.forEach(function (e) {
                    return e();
                  }),
                c.delete(n),
                n.getState().knownAtoms.delete(t);
            };
          },
          invalidate: function () {
            u = void 0;
          },
          shouldDeleteConfigOnRelease: function () {
            return void 0 !== ai(t) && a <= 0;
          },
          dangerouslyAllowMutability: e.dangerouslyAllowMutability,
          persistence_UNSTABLE: e.persistence_UNSTABLE
            ? {
                type: e.persistence_UNSTABLE.type,
                backButton: e.persistence_UNSTABLE.backButton,
              }
            : void 0,
          shouldRestoreFromSnapshots: !0,
          retainedBy: r,
        });
        return s;
      }
      function yi(e) {
        var t = e.default,
          n = (0, a.Z)(e, b);
        return ci(t)
          ? (function (e) {
              var t = yi(
                  N(
                    N({}, e),
                    {},
                    {
                      default: ri,
                      persistence_UNSTABLE:
                        void 0 === e.persistence_UNSTABLE
                          ? void 0
                          : N(
                              N({}, e.persistence_UNSTABLE),
                              {},
                              {
                                validator: function (t) {
                                  return t instanceof oi
                                    ? t
                                    : C(e.persistence_UNSTABLE).validator(
                                        t,
                                        ri
                                      );
                                },
                              }
                            ),
                      effects_UNSTABLE: e.effects_UNSTABLE,
                    }
                  )
                ),
                n = Xa({
                  key: "".concat(e.key, "__withFallback"),
                  get: function (n) {
                    var r = (0, n.get)(t);
                    return r instanceof oi ? e.default : r;
                  },
                  set: function (e, n) {
                    return (0, e.set)(t, n);
                  },
                  dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                });
              return ui(n.key, ai(e.key)), n;
            })(N(N({}, n), {}, { default: t }))
          : hi(N(N({}, n), {}, { default: t }));
      }
      var pi = yi,
        mi = {
          MapCache: (function () {
            function e(t) {
              var n;
              (0, h.Z)(this, e),
                Z(this, "_map", void 0),
                Z(this, "_keyMapper", void 0),
                (this._map = new Map()),
                (this._keyMapper =
                  null !== (n = null == t ? void 0 : t.mapKey) && void 0 !== n
                    ? n
                    : function (e) {
                        return e;
                      });
            }
            return (
              (0, y.Z)(e, [
                {
                  key: "size",
                  value: function () {
                    return this._map.size;
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return this._map.has(this._keyMapper(e));
                  },
                },
                {
                  key: "get",
                  value: function (e) {
                    return this._map.get(this._keyMapper(e));
                  },
                },
                {
                  key: "set",
                  value: function (e, t) {
                    this._map.set(this._keyMapper(e), t);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    this._map.delete(this._keyMapper(e));
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._map.clear();
                  },
                },
              ]),
              e
            );
          })(),
        }.MapCache,
        _i = Object.freeze({ __proto__: null, MapCache: mi }),
        gi = ma.LRUCache,
        Si = _i.MapCache,
        bi = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
      function wi(e) {
        switch (e) {
          case "reference":
            return function (e) {
              return e;
            };
          case "value":
            return function (e) {
              return ua(e);
            };
        }
        throw L("Unrecognized equality policy ".concat(e));
      }
      function ki(e, t, n) {
        switch (e) {
          case "keep-all":
            return new Si({ mapKey: n });
          case "lru":
            return new gi({ mapKey: n, maxSize: C(t) });
          case "most-recent":
            return new gi({ mapKey: n, maxSize: 1 });
        }
        throw L("Unrecognized eviction policy ".concat(e));
      }
      var Ti = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : bi,
            t = e.equality,
            n = void 0 === t ? bi.equality : t,
            r = e.eviction,
            o = void 0 === r ? bi.eviction : r,
            a = e.maxSize,
            i = void 0 === a ? bi.maxSize : a,
            u = wi(n),
            c = ki(o, i, u);
          return c;
        },
        Ai = Ee.setConfigDeletionHandler;
      var Ri = function (e) {
          var t,
            n,
            r = Ti({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n,
              o = r.get(t);
            if (null != o) return o;
            e.cachePolicyForParams_UNSTABLE;
            var i = (0, a.Z)(e, w),
              u = pi(
                N(
                  N({}, i),
                  {},
                  {
                    key: ""
                      .concat(e.key, "__")
                      .concat(
                        null !== (n = ua(t)) && void 0 !== n ? n : "void"
                      ),
                    default:
                      "function" == typeof e.default ? e.default(t) : e.default,
                    retainedBy_UNSTABLE:
                      "function" == typeof e.retainedBy_UNSTABLE
                        ? e.retainedBy_UNSTABLE(t)
                        : e.retainedBy_UNSTABLE,
                    effects_UNSTABLE:
                      "function" == typeof e.effects_UNSTABLE
                        ? e.effects_UNSTABLE(t)
                        : e.effects_UNSTABLE,
                  }
                )
              );
            return (
              r.set(t, u),
              Ai(u.key, function () {
                r.delete(t);
              }),
              u
            );
          };
        },
        Ei = Ee.setConfigDeletionHandler,
        Ni = 0;
      var Vi = function (e) {
          var t,
            n,
            r = Ti({
              equality:
                null !==
                  (t =
                    null === (n = e.cachePolicyForParams_UNSTABLE) ||
                    void 0 === n
                      ? void 0
                      : n.equality) && void 0 !== t
                  ? t
                  : "value",
              eviction: "keep-all",
            });
          return function (t) {
            var n,
              o = r.get(t);
            if (null != o) return o;
            var a,
              i = ""
                .concat(e.key, "__selectorFamily/")
                .concat(
                  null !== (n = ua(t, { allowFunctions: !0 })) && void 0 !== n
                    ? n
                    : "void",
                  "/"
                )
                .concat(Ni++),
              u = function (n) {
                return e.get(t)(n);
              },
              c = e.cachePolicy_UNSTABLE,
              l =
                "function" == typeof e.retainedBy_UNSTABLE
                  ? e.retainedBy_UNSTABLE(t)
                  : e.retainedBy_UNSTABLE;
            if (null != e.set) {
              var s = e.set;
              a = Xa({
                key: i,
                get: u,
                set: function (e, n) {
                  return s(t)(e, n);
                },
                cachePolicy_UNSTABLE: c,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: l,
              });
            } else
              a = Xa({
                key: i,
                get: u,
                cachePolicy_UNSTABLE: c,
                dangerouslyAllowMutability: e.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: l,
              });
            return (
              r.set(t, a),
              Ei(a.key, function () {
                r.delete(t);
              }),
              a
            );
          };
        },
        Li = Vi({
          key: "__constant",
          get: function (e) {
            return function () {
              return e;
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var Mi = function (e) {
          return Li(e);
        },
        Ci = Vi({
          key: "__error",
          get: function (e) {
            return function () {
              throw L(e);
            };
          },
          cachePolicyForParams_UNSTABLE: { equality: "reference" },
        });
      var Zi = function (e) {
        return Ci(e);
      };
      var Ui = function (e) {
          return e;
        },
        Bi = X.loadableWithError,
        xi = X.loadableWithPromise,
        Di = X.loadableWithValue;
      function Oi(e, t) {
        var n,
          r = Array(t.length).fill(void 0),
          o = Array(t.length).fill(void 0),
          a = A(t.entries());
        try {
          for (a.s(); !(n = a.n()).done; ) {
            var i = (0, u.Z)(n.value, 2),
              c = i[0],
              l = i[1];
            try {
              r[c] = e(l);
            } catch (s) {
              o[c] = s;
            }
          }
        } catch (f) {
          a.e(f);
        } finally {
          a.f();
        }
        return [r, o];
      }
      function Ii(e) {
        return null != e && !M(e);
      }
      function Fi(e) {
        return Array.isArray(e)
          ? e
          : Object.getOwnPropertyNames(e).map(function (t) {
              return e[t];
            });
      }
      function Pi(e, t) {
        return Array.isArray(e)
          ? t
          : Object.getOwnPropertyNames(e).reduce(function (e, n, r) {
              return N(N({}, e), {}, (0, l.Z)({}, n, t[r]));
            }, {});
      }
      function zi(e, t, n) {
        return Pi(
          e,
          n.map(function (e, n) {
            return null == e ? Di(t[n]) : M(e) ? xi(e) : Bi(e);
          })
        );
      }
      var ji = Vi({
          key: "__waitForNone",
          get: function (e) {
            return function (t) {
              var n = Oi(t.get, Fi(e)),
                r = (0, u.Z)(n, 2),
                o = r[0],
                a = r[1];
              return zi(e, o, a);
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        Wi = Vi({
          key: "__waitForAny",
          get: function (e) {
            return function (t) {
              var n = Oi(t.get, Fi(e)),
                r = (0, u.Z)(n, 2),
                o = r[0],
                a = r[1];
              return a.some(function (e) {
                return !M(e);
              })
                ? zi(e, o, a)
                : new Promise(function (t) {
                    var n,
                      r = A(a.entries());
                    try {
                      var i = function () {
                        var r = (0, u.Z)(n.value, 2),
                          i = r[0],
                          c = r[1];
                        M(c) &&
                          c
                            .then(function (n) {
                              (o[i] = n), (a[i] = void 0), t(zi(e, o, a));
                            })
                            .catch(function (n) {
                              (a[i] = n), t(zi(e, o, a));
                            });
                      };
                      for (r.s(); !(n = r.n()).done; ) i();
                    } catch (c) {
                      r.e(c);
                    } finally {
                      r.f();
                    }
                  });
            };
          },
          dangerouslyAllowMutability: !0,
        }),
        qi = {
          waitForNone: ji,
          waitForAny: Wi,
          waitForAll: Vi({
            key: "__waitForAll",
            get: function (e) {
              return function (t) {
                var n = Oi(t.get, Fi(e)),
                  r = (0, u.Z)(n, 2),
                  o = r[0],
                  a = r[1];
                if (
                  a.every(function (e) {
                    return null == e;
                  })
                )
                  return Pi(e, o);
                var i = a.find(Ii);
                if (null != i) throw i;
                return Promise.all(a).then(function (t) {
                  return Pi(
                    e,
                    ((n = o),
                    t.map(function (e, t) {
                      return void 0 === e ? n[t] : e;
                    }))
                  );
                  var n;
                });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          waitForAllSettled: Vi({
            key: "__waitForAllSettled",
            get: function (e) {
              return function (t) {
                var n = Oi(t.get, Fi(e)),
                  r = (0, u.Z)(n, 2),
                  o = r[0],
                  a = r[1];
                return a.every(function (e) {
                  return !M(e);
                })
                  ? zi(e, o, a)
                  : Promise.all(
                      a.map(function (e, t) {
                        return M(e)
                          ? e
                              .then(function (e) {
                                (o[t] = e), (a[t] = void 0);
                              })
                              .catch(function (e) {
                                (o[t] = void 0), (a[t] = e);
                              })
                          : null;
                      })
                    ).then(function () {
                      return zi(e, o, a);
                    });
              };
            },
            dangerouslyAllowMutability: !0,
          }),
          noWait: Vi({
            key: "__noWait",
            get: function (e) {
              return function (t) {
                var n = t.get;
                try {
                  return Di(n(e));
                } catch (r) {
                  return M(r) ? xi(r) : Bi(r);
                }
              };
            },
            dangerouslyAllowMutability: !0,
          }),
        },
        Hi = X.RecoilLoadable,
        Ki = Ee.DefaultValue,
        Gi = sr,
        Ji = _e.isRecoilValue,
        $i = et.retentionZone,
        Qi = Cn.freshSnapshot,
        Xi = {
          DefaultValue: Ki,
          isRecoilValue: Ji,
          RecoilLoadable: Hi,
          RecoilRoot: Gi,
          useRecoilBridgeAcrossReactRoots_UNSTABLE: Eo,
          atom: pi,
          selector: Xa,
          atomFamily: Ri,
          selectorFamily: Vi,
          constSelector: Mi,
          errorSelector: Zi,
          readOnlySelector: Ui,
          noWait: qi.noWait,
          waitForNone: qi.waitForNone,
          waitForAny: qi.waitForAny,
          waitForAll: qi.waitForAll,
          waitForAllSettled: qi.waitForAllSettled,
          useRecoilValue: Hr,
          useRecoilValueLoadable: Kr,
          useRecoilState: Wr,
          useRecoilStateLoadable: qr,
          useSetRecoilState: Jr,
          useResetRecoilState: Gr,
          useGetRecoilValueInfo_UNSTABLE: ko,
          useRecoilRefresher_UNSTABLE: ta,
          useRecoilCallback: Qo,
          useRecoilTransaction_UNSTABLE: aa,
          useGotoRecoilSnapshot: _o,
          useRecoilSnapshot: mo,
          useRecoilTransactionObserver_UNSTABLE: go,
          useTransactionObservation_UNSTABLE: So,
          useSetUnvalidatedAtomValues_UNSTABLE: $r,
          snapshot_UNSTABLE: Qi,
          useRetain: Tr,
          retentionZone: $i,
        },
        Yi = Xi.DefaultValue,
        eu = Xi.isRecoilValue,
        tu = Xi.RecoilLoadable,
        nu = Xi.RecoilRoot,
        ru = Xi.useRecoilBridgeAcrossReactRoots_UNSTABLE,
        ou = Xi.atom,
        au = Xi.selector,
        iu = Xi.atomFamily,
        uu = Xi.selectorFamily,
        cu = Xi.constSelector,
        lu = Xi.errorSelector,
        su = Xi.readOnlySelector,
        fu = Xi.noWait,
        vu = Xi.waitForNone,
        du = Xi.waitForAny,
        hu = Xi.waitForAll,
        yu = Xi.waitForAllSettled,
        pu = Xi.useRecoilValue,
        mu = Xi.useRecoilValueLoadable,
        _u = Xi.useRecoilState,
        gu = Xi.useRecoilStateLoadable,
        Su = Xi.useSetRecoilState,
        bu = Xi.useResetRecoilState,
        wu = Xi.useGetRecoilValueInfo_UNSTABLE,
        ku = Xi.useRecoilRefresher_UNSTABLE,
        Tu = Xi.useRecoilCallback,
        Au = Xi.useRecoilTransaction_UNSTABLE,
        Ru = Xi.useGotoRecoilSnapshot,
        Eu = Xi.useRecoilSnapshot,
        Nu = Xi.useRecoilTransactionObserver_UNSTABLE,
        Vu = Xi.useTransactionObservation_UNSTABLE,
        Lu = Xi.useSetUnvalidatedAtomValues_UNSTABLE,
        Mu = Xi.snapshot_UNSTABLE,
        Cu = Xi.useRetain,
        Zu = Xi.retentionZone;
      t.default = Xi;
    },
  },
]);
