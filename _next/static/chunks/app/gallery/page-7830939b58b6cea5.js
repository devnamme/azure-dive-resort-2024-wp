(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [928],
  {
    2158: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 3694)),
        Promise.resolve().then(r.t.bind(r, 231, 23));
    },
    3694: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var a = r(7437),
        s = r(2265);
      function l() {
        let [e, t] = (0, s.useState)("all"),
          [r, l] = (0, s.useState)([]);
        return (
          (0, s.useEffect)(() => {
            l(
              c
                .map((e) => ({ ...e, idx: Math.random() }))
                .sort((e, t) => e.idx - t.idx)
                .map((e) => ({
                  src: e.src,
                  label: e.label,
                  category: e.category,
                }))
            );
          }, []),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)("section", {
              className: "mb-16 px-6 py-8 sm:pb-23 sm:pt-16",
              children: (0, a.jsxs)("div", {
                className: "mx-auto max-w-content",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "mb-8 flex flex-row flex-wrap items-center justify-center sm:mb-10 sm:justify-start",
                    children: [
                      (0, a.jsx)(o, {
                        active: "all" === e,
                        onClick: () => t("all"),
                        children: "All",
                      }),
                      (0, a.jsx)(o, {
                        active: "resort" === e,
                        onClick: () => t("resort"),
                        children: "Resort",
                      }),
                      (0, a.jsx)(o, {
                        active: "food" === e,
                        onClick: () => t("food"),
                        children: "Food",
                      }),
                      (0, a.jsx)(o, {
                        active: "people" === e,
                        onClick: () => t("people"),
                        children: "People",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3",
                    children: r
                      .filter(
                        (t) => "all" === e || t.category.toLowerCase() === e
                      )
                      .map((e, t) =>
                        (0, a.jsx)(
                          i,
                          {
                            ...e,
                            className: ""
                              .concat(
                                t % 2 == 1
                                  ? "translate-y-16 sm:translate-y-0"
                                  : "",
                                " "
                              )
                              .concat(t % 3 == 1 ? "sm:!translate-y-16" : ""),
                          },
                          "gallery-image-".concat(t)
                        )
                      ),
                  }),
                ],
              }),
            }),
          })
        );
      }
      let o = (e) => {
          let { active: t, onClick: r, children: s } = e;
          return (0, a.jsx)("button", {
            className:
              "h3 rounded-2xl px-8 py-3 text-center text-lg font-bold transition-colors data-[active=true]:bg-pale-blue",
            "data-active": t,
            onClick: r,
            children: s,
          });
        },
        i = (e) => {
          let { className: t, src: r, label: s, category: l } = e;
          return (0, a.jsxs)("div", {
            className:
              "grid h-[275px] min-w-0 grid-cols-1 grid-rows-[1fr_auto] gap-2.5 overflow-clip sm:h-[425px] ".concat(
                t
              ),
            children: [
              (0, a.jsx)("img", {
                src: "<?php echo THEME_URI ?>/media/gallery/".concat(r, ".jpg"),
                alt: s,
                className:
                  "h-full min-h-0 w-full rounded-lg object-cover object-center",
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex min-h-0 flex-row flex-wrap justify-between gap-2",
                children: [
                  (0, a.jsx)("p", { className: "shrink grow", children: s }),
                  (0, a.jsx)("p", {
                    className:
                      "shrink-0 grow-0 items-center rounded bg-earth/20 px-2 py-1 text-sm font-medium uppercase",
                    children: l,
                  }),
                ],
              }),
            ],
          });
        },
        n = {
          Resort: [
            ["SUNRISE-24", "Sunset views"],
            ["SUNRISE-34", "Diving prep"],
            ["SUNRISE-12", "Golden Hour at Beatriz Restaurant"],
            ["SUNRISE-11", "Swimming pool"],
            ["SUNRISE-37", "Gear up and dive into adventure"],
            ["DAY 1-247", "Take a nightly dip in our pool"],
            ["DAY 1-293", "Divers ready to visit our dive spots"],
            ["DAY 1-311", "Soak up the sun and unwind by our poolside"],
            ["AERIAL-13-edited", "Azure Dive Resort from the sky"],
            ["Azure-8181", "Celebrate your big wins with us"],
          ],
          Food: [
            ["DAY 1-19", "Bruschetta"],
            ["DAY 1-24", "Tuscan Butter Chicken"],
            ["DAY 1-32", "Shrimp Scampi"],
            ["DAY 1-44", "Tofu Steak"],
            ["DAY 1-109", "Azure Cheeseburger"],
            ["DAY 1-124", "Grilled Tuna Steak"],
            ["DAY 1-134", "Lechon Kawali"],
            ["DAY 1-178", "Resort Lobby"],
            ["DAY 1-218", "Watermelon Shake"],
            ["DAY 1-224", "Mango Shake"],
            ["DAY 1-249", "Aperol Spritz"],
          ],
          People: [
            ["DAY 1-390", "Approach our friendly staff at Azure"],
            ["DAY 1-404", "Approach our friendly staff at Azure"],
            ["Azure-8239", "Make memories with your loved ones at Azure"],
          ],
        },
        c = Object.keys(n)
          .map((e) =>
            n[e].map((t) => ({ src: t[0], label: t[1], category: e }))
          )
          .flat(1);
    },
  },
  function (e) {
    e.O(0, [231, 971, 23, 744], function () {
      return e((e.s = 2158));
    }),
      (_N_E = e.O());
  },
]);
