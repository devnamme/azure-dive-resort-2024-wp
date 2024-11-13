(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7402: function (e, t, a) {
      Promise.resolve().then(a.bind(a, 9788)),
        Promise.resolve().then(a.bind(a, 4254)),
        Promise.resolve().then(a.t.bind(a, 231, 23));
    },
    9788: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return r;
        },
      });
      var s = a(7437),
        n = a(5758),
        o = a(2265);
      function r() {
        let [e, t] = (0, o.useState)(0);
        return (0, s.jsxs)("section", {
          className: "px-8 pb-10 pt-16 sm:pb-0 sm:pt-18",
          children: [
            (0, s.jsxs)("div", {
              className:
                "mx-auto mb-10 flex max-w-content flex-col items-center text-center sm:mb-20",
              children: [
                (0, s.jsx)("p", {
                  className: "mb-4 text-overline-big sm:mb-5 sm:text-overline",
                  children: "About Azure Dive Resort",
                }),
                (0, s.jsxs)("h2", {
                  className: "mb-6 max-w-[1000px]",
                  children: [
                    "A tropical haven tucked away neatly in the small, sleepy town of Dauin, ",
                    (0, s.jsx)("span", {
                      className: "whitespace-nowrap",
                      children: "Negros Oriental",
                    }),
                  ],
                }),
                (0, s.jsx)("p", {
                  className: "max-w-[1000px]",
                  children:
                    "Conscientiously built with the Filipino heritage in mind, the resort exudes an extraordinary touch of Filipino culture—from its unassuming spaces to the inviting blue waters of its private beach.",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "relative grid h-screen-noheader gap-10 sm:-mx-8 sm:h-screen-noheader sm:grid-cols-[3fr_2fr_3fr] sm:grid-rows-[5fr_4fr]",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-full overflow-clip rounded-tl-[96px] bg-cover bg-[70%_center] transition-opacity sm:relative sm:row-span-2 sm:h-auto sm:w-auto sm:rounded-tl-[120px] sm:opacity-100 ".concat(
                      0 === e ? "opacity-100" : "opacity-0"
                    ),
                  style: {
                    backgroundImage:
                      "url('<?php echo THEME_URI ?>/media/landing/about-1.jpg')",
                  },
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-full overflow-clip rounded-tl-[96px] bg-cover bg-center transition-opacity sm:relative sm:h-auto sm:w-auto sm:rounded-bl-[120px] sm:rounded-tl-none sm:rounded-tr-[120px] sm:opacity-100 ".concat(
                      1 === e ? "opacity-100" : "opacity-0"
                    ),
                  style: {
                    backgroundImage:
                      "url('<?php echo THEME_URI ?>/media/landing/about-2.jpg')",
                  },
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-full overflow-clip rounded-tl-[96px] bg-cover bg-center transition-opacity sm:relative sm:h-auto sm:w-auto sm:rounded-tl-none sm:rounded-tr-[120px] sm:opacity-100 ".concat(
                      2 === e ? "opacity-100" : "opacity-0"
                    ),
                  style: {
                    backgroundImage:
                      "url('<?php echo THEME_URI ?>/media/landing/about-3.jpg')",
                  },
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-full overflow-clip rounded-tl-[96px] bg-cover bg-[center_65%] transition-opacity sm:relative sm:col-span-2 sm:h-auto sm:w-auto sm:rounded-tl-[120px] sm:opacity-100 ".concat(
                      3 === e ? "opacity-100" : "opacity-0"
                    ),
                  style: {
                    backgroundImage:
                      "url('<?php echo THEME_URI ?>/media/landing/about-4.jpg')",
                  },
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute bottom-5 right-5 mt-4 flex flex-row items-center justify-center gap-5 sm:hidden",
                  children: [
                    (0, s.jsx)(n.Z, {
                      transparent: !0,
                      dir: "left",
                      onClick: () => {
                        e > 0 ? t((e) => e - 1) : t(3);
                      },
                    }),
                    (0, s.jsx)(n.Z, {
                      transparent: !0,
                      dir: "right",
                      onClick: () => {
                        e < 3 ? t((e) => e + 1) : t(0);
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    4254: function (e, t, a) {
      "use strict";
      a.d(t, {
        default: function () {
          return d;
        },
      });
      var s = a(7437),
        n = a(5758),
        o = a(9893);
      function r(e) {
        let {
          testimony: { headline: t, text: a, stars: n, name: o, location: r },
          customKey: l,
          pageVisible: c = !1,
          expandedVisible: d = !1,
          showLocation: u = !0,
        } = e;
        return (0, s.jsxs)("div", {
          className:
            "shrink-0 flex-col items-start rounded-[16px] bg-pale-blue p-8 "
              .concat(d ? "flex" : "hidden", " ")
              .concat(c ? "sm:flex" : "sm:hidden"),
          children: [
            t && (0, s.jsx)("h4", { className: "mb-2", children: t }),
            (0, s.jsx)("p", {
              className: "mb-6 grow ".concat(
                null == t ? "text-lg font-medium" : "text-sm"
              ),
              children: a,
            }),
            (0, s.jsx)(i, { customKey: l, stars: n }),
            (0, s.jsx)("p", {
              className: "mt-2 text-lg font-medium",
              children: o,
            }),
            u && (0, s.jsx)("p", { className: "text-lg", children: r }),
          ],
        });
      }
      let i = (e) => {
          let { customKey: t, stars: a } = e;
          return (0, s.jsx)("div", {
            className: "flex w-fit flex-row items-center text-[#F8B435]",
            children: [...Array(Math.floor(a))].map((e, a) =>
              (0, s.jsx)(
                l,
                { className: "size-6" },
                "".concat(t, "-star-").concat(a)
              )
            ),
          });
        },
        l = (e) => {
          let { className: t = "" } = e;
          return (0, s.jsx)("div", {
            className:
              "flex size-6 flex-col items-center justify-center p-0.5 ".concat(
                t
              ),
            children: (0, s.jsx)("svg", {
              width: "30",
              height: "29",
              className: "h-full w-full",
              viewBox: "0 0 30 29",
              fill: "currentColor",
              xmlns: "http://www.w3.org/2000/svg",
              children: (0, s.jsx)("path", {
                d: "M14.0877 0.80128C14.4411 0.013904 15.5589 0.0139023 15.9123 0.801278L19.4816 8.75391C19.627 9.0779 19.9334 9.30046 20.2864 9.33864L28.9528 10.2757C29.8108 10.3685 30.1563 11.4317 29.5167 12.0111L23.0562 17.8632C22.793 18.1016 22.676 18.4617 22.7488 18.8093L24.5356 27.3411C24.7125 28.1858 23.8082 28.8429 23.0595 28.4136L15.4974 24.0778C15.1893 23.9011 14.8107 23.9011 14.5026 24.0778L6.94054 28.4136C6.19184 28.8429 5.28746 28.1858 5.46437 27.3411L7.25119 18.8093C7.32399 18.4617 7.20698 18.1016 6.94378 17.8632L0.483351 12.0111C-0.156284 11.4317 0.189155 10.3685 1.0472 10.2757L9.71357 9.33864C10.0666 9.30046 10.373 9.0779 10.5184 8.75391L14.0877 0.80128Z",
              }),
            }),
          });
        };
      var c = a(2265);
      function d() {
        let [e, t] = (0, c.useState)(0),
          [a, i] = (0, c.useState)(!1);
        return (0, s.jsx)("section", {
          className: "px-8 py-10 sm:py-25",
          children: (0, s.jsxs)("div", {
            className: "mx-auto max-w-content",
            children: [
              (0, s.jsx)("p", {
                className:
                  "mb-4 text-center text-overline-big sm:mb-5 sm:text-left sm:text-overline",
                children: "Reviews",
              }),
              (0, s.jsxs)("div", {
                className:
                  "mb-8 flex flex-row items-center justify-between gap-4",
                children: [
                  (0, s.jsx)("h2", {
                    className: "shrink grow text-center sm:text-left",
                    children: "What our beloved guests have to say",
                  }),
                  (0, s.jsxs)("div", {
                    className: "hidden flex-row gap-5 sm:flex",
                    children: [
                      (0, s.jsx)(n.Z, {
                        dir: "left",
                        onClick: () => {
                          t((e) => e - 1);
                        },
                        disabled: 0 === e,
                      }),
                      (0, s.jsx)(n.Z, {
                        dir: "right",
                        onClick: () => {
                          t((e) => e + 1);
                        },
                        disabled: e === Math.ceil(u.length / 3) - 1,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "grid auto-rows-auto grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3",
                children: [
                  u.map((t, n) =>
                    (0, s.jsx)(
                      r,
                      {
                        customKey: "testimony-card-".concat(n),
                        testimony: t,
                        pageVisible: n >= 3 * e && n < (e + 1) * 3,
                        expandedVisible: n < 2 || (n >= 2 && a),
                      },
                      "testimony-card-".concat(n)
                    )
                  ),
                  (0, s.jsx)(o.Z, {
                    color: "secondary",
                    className: "col-span-full sm:hidden",
                    onClick: () => {
                      i((e) => !e);
                    },
                    children: a ? "Show less reviews" : "Show more reviews",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let u = [
        {
          headline: "I love it and I’ll be back!",
          text: "Walk into Azure and you’ve stepped into something from the pages of Elle Decor! Excellent food in the dining room—don’t skip the Cubano sandwich. The dive operation is a well-oiled machine, with access to all the local marine sanctuary sites. I love it and I’ll be back!",
          stars: 5,
          name: "Melanie",
          location: "San Francisco, USA",
        },
        {
          headline: "A great choice for your next dive vacation.",
          text: "Azure is one of the most beautiful and quaint resorts that I have ever visited. The diving near the resort is nice, with very easy entry and exit. The resort is just a 30-minute boat ride from Apo Island, one of the Philippines’ first marine reserves. There is also an option to do a day trip to Oslob to dive with whale sharks year round. Considering everything, Azure is a great choice for your next dive vacation whether you’re a beginner or a seasoned veteran.",
          stars: 5,
          name: "Ray",
          location: "Ohio, USA",
        },
        {
          headline: "A cozy but mighty operation!",
          text: "Azure is a cozy but mighty operation! The staff are friendly and professional. The owners are informative and ready to answer any questions. The food is well-seasoned and caters to various dietary needs. The rooms are comfortable and clean. The pool is beautiful and well maintained. The dive operation is great! Good visibility, very little current, and all the help from the staff putting on and removing your gear. I highly recommend this resort for a relaxing get away or a great diving trip!",
          stars: 5,
          name: "Lyne",
          location: "Ohio, USA",
        },
        {
          headline: "Great location, food, rooms, and diving!",
          text: "An extraordinary experience with my absolute favorite dive crew. The owners, Catherine and Glenn, and the whole staff are like one big family. Now I’m part of the family too. Great location, food, rooms, and diving!",
          stars: 5,
          name: "Brian",
          location: "Chicago, USA",
        },
        {
          headline: "Our every need was attended to above and beyond.",
          text: "My father and I spent two glorious weeks at Azure diving and relaxing! To say we enjoyed our time would be an understatement. The resort is beautiful and the staff are amazing! Our every need was attended to above and beyond.",
          stars: 5,
          name: "Korin Gower-Grieves",
          location: "San Jose, CA",
        },
        {
          headline: "A treat for the body and soul.",
          text: "5 stars! Staying at Azure is both a treat for the body and soul. The diving is mindblowing and so is the service in both the resort’s restaurant & accommodation!",
          stars: 5,
          name: "Erik",
          location: "Switzerland",
        },
      ];
    },
    5758: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = a(7437),
        n = (e) => {
          let { className: t = "" } = e;
          return (0, s.jsx)("svg", {
            width: "20",
            height: "15",
            viewBox: "0 0 20 15",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, s.jsx)("path", {
              d: "M4.52058 6.22548L17.9006 6.22547C18.2406 6.22547 18.5256 6.34047 18.7556 6.57047C18.9856 6.80047 19.1006 7.08547 19.1006 7.42547C19.1006 7.76547 18.9856 8.05047 18.7556 8.28047C18.5256 8.51047 18.2406 8.62547 17.9006 8.62547L4.52058 8.62548L7.94058 12.0455C8.18059 12.2855 8.29559 12.5655 8.28559 12.8855C8.27559 13.2055 8.16059 13.4855 7.94059 13.7255C7.70059 13.9655 7.41559 14.0905 7.08559 14.1005C6.75559 14.1105 6.47059 13.9955 6.23059 13.7555L0.740585 8.26548C0.620584 8.14548 0.535585 8.01548 0.485584 7.87548C0.435584 7.73548 0.410585 7.58548 0.410585 7.42548C0.410585 7.26548 0.435584 7.11548 0.485584 6.97548C0.535585 6.83548 0.620584 6.70548 0.740585 6.58548L6.23058 1.09548C6.47058 0.855476 6.75558 0.740476 7.08558 0.750476C7.41558 0.760476 7.70058 0.885476 7.94058 1.12548C8.16058 1.36548 8.27558 1.64548 8.28558 1.96548C8.29558 2.28548 8.18058 2.56548 7.94058 2.80548L4.52058 6.22548Z",
            }),
          });
        },
        o = (e) => {
          let { className: t = "" } = e;
          return (0, s.jsx)("svg", {
            width: "20",
            height: "14",
            viewBox: "0 0 20 14",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, s.jsx)("path", {
              d: "M15.4794 8.51769L2.09942 8.51769C1.75942 8.51769 1.47442 8.40269 1.24442 8.17269C1.01442 7.94269 0.899415 7.65769 0.899415 7.31769C0.899415 6.97769 1.01442 6.69269 1.24442 6.46269C1.47442 6.23269 1.75942 6.11769 2.09942 6.11769L15.4794 6.11769L12.0594 2.69769C11.8194 2.45769 11.7044 2.17769 11.7144 1.85769C11.7244 1.53769 11.8394 1.25769 12.0594 1.01769C12.2994 0.777688 12.5844 0.652688 12.9144 0.642688C13.2444 0.632688 13.5294 0.747688 13.7694 0.987688L19.2594 6.47769C19.3794 6.59769 19.4644 6.72769 19.5144 6.86769C19.5644 7.00769 19.5894 7.15769 19.5894 7.31769C19.5894 7.47769 19.5644 7.62769 19.5144 7.76769C19.4644 7.90769 19.3794 8.03769 19.2594 8.15769L13.7694 13.6477C13.5294 13.8877 13.2444 14.0027 12.9144 13.9927C12.5844 13.9827 12.2994 13.8577 12.0594 13.6177C11.8394 13.3777 11.7244 13.0977 11.7144 12.7777C11.7044 12.4577 11.8194 12.1777 12.0594 11.9377L15.4794 8.51769Z",
            }),
          });
        };
      function r(e) {
        let {
          dir: t,
          onClick: a = () => {},
          className:
            r = "bg-pale-blue data-[transparent]:bg-pale-blue/75 text-[#5F6368]",
          disabled: i = !1,
          transparent: l = !1,
        } = e;
        return (0, s.jsx)("button", {
          className:
            "flex size-12 items-center justify-center rounded-full transition-opacity disabled:opacity-50 ".concat(
              r
            ),
          onClick: a,
          disabled: i,
          "data-transparent": l,
          children: ("left" === t ? n : o)({ className: "size-5" }),
        });
      }
    },
    9893: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return n;
        },
      });
      var s = a(7437);
      function n(e) {
        let {
          color: t,
          disabled: a = !1,
          className: n = "",
          style: r = {},
          onClick: i,
          children: l,
        } = e;
        return (0, s.jsx)("button", {
          className:
            "rounded-full border px-6 py-2 text-center text-[20px] font-bold transition-colors "
              .concat(o.color[t], " ")
              .concat(n),
          style: r,
          disabled: a,
          onClick: i,
          children: l,
        });
      }
      let o = {
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
  },
  function (e) {
    e.O(0, [231, 971, 23, 744], function () {
      return e((e.s = 7402));
    }),
      (_N_E = e.O());
  },
]);
