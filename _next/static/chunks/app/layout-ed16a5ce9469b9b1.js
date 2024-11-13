(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    7303: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 8877, 23)),
        Promise.resolve().then(r.bind(r, 5226)),
        Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.t.bind(r, 3256, 23));
    },
    9893: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = r(7437);
      function o(e) {
        let {
          color: t,
          disabled: r = !1,
          className: o = "",
          style: s = {},
          onClick: l,
          children: i,
        } = e;
        return (0, n.jsx)("button", {
          className:
            "rounded-full border px-6 py-2 text-center text-[20px] font-bold transition-colors "
              .concat(a.color[t], " ")
              .concat(o),
          style: s,
          disabled: r,
          onClick: l,
          children: i,
        });
      }
      let a = {
        color: {
          primary:
            "border-ocean-blue bg-ocean-blue text-white hover:border-pale-blue hover:bg-pale-blue hover:text-ocean-blue",
          secondary:
            "border-ocean-blue bg-sand text-ocean-blue hover:bg-pale-blue",
          tertiary:
            "border-pale-blue bg-pale-blue text-ocean-blue hover:border-sand hover:bg-sand",
        },
      };
    },
    5226: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return x;
        },
      });
      var n = r(7437),
        o = r(231),
        a = r.n(o),
        s = r(1169),
        l = r(2265),
        i = r(4887),
        c = r(6356),
        u = r(9893);
      function f(e) {
        let { active: t, handleClose: r } = e;
        return (0, n.jsxs)("div", {
          className:
            "absolute right-0 z-[41] h-full w-full max-w-[360px] translate-x-full bg-sand transition-transform data-[active=true]:translate-x-0",
          "data-active": t,
          children: [
            (0, n.jsxs)("div", {
              className: "flex flex-row items-center justify-between p-4",
              children: [
                (0, n.jsx)(a(), {
                  href: "/",
                  children: (0, n.jsx)("img", {
                    src: "<?php echo THEME_URI ?>/logos/full-black.svg",
                    alt: "Azure Dive Resort",
                    className: "h-12",
                  }),
                }),
                (0, n.jsx)("div", {
                  className:
                    "flex size-12 cursor-pointer items-center justify-center",
                  onClick: r,
                  children: (0, n.jsx)(c.FU5, { className: "size-6" }),
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "flex flex-col gap-4 px-6 py-1",
              children: d.map((e, t) =>
                (0, n.jsx)(
                  m,
                  { href: e.route, children: e.text },
                  "mobile-drawer-item-".concat(t)
                )
              ),
            }),
          ],
        });
      }
      let d = [
          { text: "Home", route: "/" },
          { text: "The Resort", route: "/the-resort" },
          { text: "Dive", route: "/dive-with-azure" },
          { text: "Rooms", route: "/the-azure-rooms" },
          { text: "Restaurant", route: "/beatriz-restaurant" },
          { text: "Gallery", route: "/gallery" },
          { text: "Events", route: "/events" },
          { text: "Contact", route: "/contact" },
        ],
        m = (e) => {
          let { href: t, children: r } = e;
          return (0, n.jsx)(a(), { href: t, className: "w-fit", children: r });
        };
      function h(e) {
        let { active: t, handleClose: r, children: o } = e;
        return (0, n.jsxs)("div", {
          className:
            "pointer-events-none fixed left-0 top-0 z-40 h-screen w-full opacity-0 transition-opacity data-[active=true]:pointer-events-auto data-[active=true]:opacity-100",
          "data-active": t,
          children: [
            (0, n.jsx)("div", {
              className: "absolute z-40 h-full w-full bg-black/25",
              onClick: r,
            }),
            o,
          ],
        });
      }
      function x() {
        let e = (0, s.usePathname)(),
          [t, r] = (0, l.useState)(!1),
          [o, d] = (0, l.useState)(!1),
          m = () => {
            d(!1);
          };
        return (
          (0, l.useEffect)(() => {
            r(!0);
          }, []),
          (0, n.jsxs)("header", {
            className:
              "sticky top-0 z-30 flex-row items-center bg-sand p-4 pb-0 text-earth sm:flex sm:h-header sm:p-4",
            children: [
              (0, n.jsxs)("div", {
                className: "mx-auto w-full max-w-content shrink grow",
                children: [
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-row items-center justify-between gap-12",
                    children: [
                      (0, n.jsxs)("div", {
                        className:
                          "flex min-w-0 shrink flex-row items-center gap-12",
                        children: [
                          (0, n.jsx)(a(), {
                            href: "/",
                            className: "shrink-0",
                            children: (0, n.jsx)("img", {
                              src: "<?php echo THEME_URI ?>/logos/full-black.svg",
                              alt: "Azure Dive Resort",
                              className: "h-12",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "hidden min-w-0 shrink flex-row gap-8 overflow-x-auto sm:flex",
                            children: b.map((t, r) =>
                              (0, n.jsx)(
                                p,
                                {
                                  href: t.route,
                                  active: e === t.route,
                                  children: t.text,
                                },
                                "nav-item-".concat(r)
                              )
                            ),
                          }),
                        ],
                      }),
                      (0, n.jsxs)("div", {
                        className:
                          "flex shrink-0 flex-row items-center gap-2 sm:gap-4",
                        children: [
                          (0, n.jsx)(p, {
                            href: "/contact",
                            active: "/contact" === e,
                            className: "hidden sm:block",
                            children: "Contact",
                          }),
                          (0, n.jsx)(a(), {
                            href: "https://www.agoda.com/azure-dive-resort/hotel/dumaguete-ph.html",
                            target: "_blank",
                            children: (0, n.jsx)(u.Z, {
                              color: "primary",
                              children: "Book now",
                            }),
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "flex size-12 cursor-pointer items-center justify-center sm:hidden",
                            onClick: () => {
                              d(!0);
                            },
                            children: (0, n.jsx)(c.xXU, {
                              className: "size-6",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className:
                      "-mx-4 mt-4 flex flex-row items-center justify-between gap-4 overflow-x-auto px-4 sm:hidden",
                    children: v.map((t, r) =>
                      (0, n.jsx)(
                        p,
                        {
                          href: t.route,
                          active: e === t.route,
                          children: t.text,
                        },
                        "mobile-nav-item-".concat(r)
                      )
                    ),
                  }),
                ],
              }),
              t &&
                (0, i.createPortal)(
                  (0, n.jsx)(h, {
                    active: o,
                    handleClose: m,
                    children: (0, n.jsx)(f, { active: o, handleClose: m }),
                  }),
                  document.body
                ),
            ],
          })
        );
      }
      let b = [
          { text: "Home", route: "/" },
          { text: "The Resort", route: "/the-resort" },
          { text: "Dive", route: "/dive-with-azure" },
          { text: "Rooms", route: "/the-azure-rooms" },
          { text: "Restaurant", route: "/beatriz-restaurant" },
          { text: "Gallery", route: "/gallery" },
          { text: "Events", route: "/events" },
        ],
        v = b.slice(0, 5),
        p = (e) => {
          let { className: t = "", href: r, active: o = !1, children: s } = e;
          return (0, n.jsx)(a(), {
            href: r,
            className:
              "flex shrink-0 flex-col justify-center border-b py-2 text-center text-lg transition-colors "
                .concat(
                  o ? "border-earth font-medium" : "border-transparent",
                  " hover:border-earth "
                )
                .concat(t),
            children: s,
          });
        };
    },
    8877: function () {},
    3256: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__kelvinch_41f3ce', '__kelvinch_Fallback_41f3ce'",
        },
        className: "__className_41f3ce",
        variable: "__variable_41f3ce",
      };
    },
    1810: function (e, t, r) {
      "use strict";
      r.d(t, {
        w_: function () {
          return u;
        },
      });
      var n = r(2265),
        o = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        a = n.createContext && n.createContext(o),
        s = ["attr", "size", "title"];
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function i(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? i(Object(r), !0).forEach(function (t) {
                var n, o;
                (n = t),
                  (o = r[t]),
                  (n = (function (e) {
                    var t = (function (e, t) {
                      if ("object" != typeof e || !e) return e;
                      var r = e[Symbol.toPrimitive];
                      if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != typeof n) return n;
                        throw TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === t ? String : Number)(e);
                    })(e, "string");
                    return "symbol" == typeof t ? t : t + "";
                  })(n)) in e
                    ? Object.defineProperty(e, n, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (e[n] = o);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : i(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      function u(e) {
        return (t) =>
          n.createElement(
            f,
            l({ attr: c({}, e.attr) }, t),
            (function e(t) {
              return (
                t &&
                t.map((t, r) =>
                  n.createElement(t.tag, c({ key: r }, t.attr), e(t.child))
                )
              );
            })(e.child)
          );
      }
      function f(e) {
        var t = (t) => {
          var r,
            { attr: o, size: a, title: i } = e,
            u = (function (e, t) {
              if (null == e) return {};
              var r,
                n,
                o = (function (e, t) {
                  if (null == e) return {};
                  var r = {};
                  for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                      if (t.indexOf(n) >= 0) continue;
                      r[n] = e[n];
                    }
                  return r;
                })(e, t);
              if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]),
                    !(t.indexOf(r) >= 0) &&
                      Object.prototype.propertyIsEnumerable.call(e, r) &&
                      (o[r] = e[r]);
              }
              return o;
            })(e, s),
            f = a || t.size || "1em";
          return (
            t.className && (r = t.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            n.createElement(
              "svg",
              l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                t.attr,
                o,
                u,
                {
                  className: r,
                  style: c(c({ color: e.color || t.color }, t.style), e.style),
                  height: f,
                  width: f,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && n.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== a
          ? n.createElement(a.Consumer, null, (e) => t(e))
          : t(o);
      }
    },
  },
  function (e) {
    e.O(0, [731, 51, 231, 971, 23, 744], function () {
      return e((e.s = 7303));
    }),
      (_N_E = e.O());
  },
]);
