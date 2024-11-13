(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [766],
  {
    610: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 3827)),
        Promise.resolve().then(i.bind(i, 7674)),
        Promise.resolve().then(i.t.bind(i, 231, 23));
    },
    3827: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return r;
        },
      });
      var a = i(7437),
        s = i(2265);
      function r() {
        let [e, t] = (0, s.useState)("beginner");
        return (0, a.jsx)("section", {
          className: "px-8 py-10 sm:py-25",
          children: (0, a.jsxs)("div", {
            className:
              "mx-auto flex max-w-content flex-col items-stretch gap-10 sm:gap-16",
            children: [
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col items-stretch gap-4 sm:gap-5 sm:text-center",
                children: [
                  (0, a.jsx)("p", {
                    className: "text-overline-big sm:text-overline",
                    children: "Dive Courses",
                  }),
                  (0, a.jsx)("h2", {
                    children: "Azure offers both PADI and SSI Courses",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "min-w-0 grid-cols-3 overflow-clip rounded-br-[2rem] rounded-tl-[2rem] bg-pale-blue xs:flex sm:rounded-2xl md:grid md:grid-cols-3",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col items-stretch gap-4 px-4 py-4 xs:gap-5 xs:py-14 sm:px-10",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-center text-overline",
                        children: "Select your level",
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "grid grid-cols-2 gap-y-2 xs:grid-cols-[1fr] xs:gap-8",
                        children: [
                          ["beginner", "Beginner"],
                          ["intermediate", "Intermediate"],
                          ["advanced", "Advanced"],
                          ["professional", "Professional"],
                        ].map((i) =>
                          (0, a.jsx)(
                            n,
                            {
                              active: e === i[0],
                              onClick: () => t(i[0]),
                              children: i[1],
                            },
                            "level-button-".concat(i[0])
                          )
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className:
                      "col-span-2 flex flex-col gap-14 bg-cover bg-[center_90%] px-10 py-12 text-white xs:py-14 sm:py-22.5",
                    style: {
                      backgroundImage:
                        "linear-gradient(#04628DB3,#04628DB3),url('https://mrwallpaper.com/images/file/travel-4k-beach-dive-3p09m7t8ynis8gxz.jpg')",
                    },
                    children: l[e].map((e, t) =>
                      (0, a.jsx)(o, { course: e }, "course-".concat(e.title))
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let n = (e) => {
          let { active: t, onClick: i, children: s } = e;
          return (0, a.jsx)("button", {
            className:
              "h3 rounded-lg px-4 py-3 text-center text-lg transition-colors data-[active=true]:bg-white/50 xs:text-left sm:rounded-2xl sm:p-4 sm:text-center sm:text-h3",
            "data-active": t,
            onClick: i,
            children: s,
          });
        },
        o = (e) => {
          let {
            course: { title: t, text: i },
          } = e;
          return (0, a.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [
              (0, a.jsx)("h2", {
                style: { wordBreak: "break-word" },
                children: t,
              }),
              (0, a.jsx)("p", { children: i }),
            ],
          });
        },
        l = {
          beginner: [
            {
              title: "Bubblemaker",
              text: "For children aged 8-9, allowing them to experience scuba diving in shallow waters.",
            },
            {
              title: "Discover Scuba Diving",
              text: "An introductory program for ages 10 and up, covering basic skills and a first open water dive.",
            },
          ],
          intermediate: [
            {
              title: "PADI Scuba Diver",
              text: "For ages 10 and up, this course includes confined water training and open water dives, allowing dives to a maximum depth of 12 meters.",
            },
            {
              title: "PADI Open Water Diver Course",
              text: "Designed for ages 10 and up, this popular course involves more in-depth training, allowing independent diving to a maximum depth of 18 meters.",
            },
          ],
          advanced: [
            {
              title: "PADI Advanced Open Water Diver Course",
              text: "For ages 12 and up, this course includes specialized dives and expands diving knowledge, allowing dives to a maximum depth of 30 meters for those 15 and older.",
            },
            {
              title: "PADI Rescue Diver Course",
              text: "For ages 12 and up, this course focuses on diver safety and rescue skills, requiring prior certification as an advanced diver.",
            },
          ],
          professional: [
            {
              title: "PADI Divemaster Course",
              text: "For ages 18 and up, this course trains aspiring dive professionals, requiring prior certifications and logged dive experience.",
            },
          ],
        };
    },
    7674: function (e, t, i) {
      "use strict";
      i.d(t, {
        default: function () {
          return n;
        },
      });
      var a = i(7437),
        s = i(5758),
        r = i(2265);
      function n() {
        let [e, t] = (0, r.useState)(0);
        return (0, a.jsxs)("section", {
          className: "relative bg-pale-blue px-8 py-25 sm:p-25",
          children: [
            (0, a.jsxs)("div", {
              className: "z-[2] mx-auto max-w-content",
              children: [
                (0, a.jsx)("p", {
                  className: "mb-4 text-overline-big sm:mb-5 sm:text-overline",
                  children: "Dive Sites",
                }),
                (0, a.jsxs)("div", {
                  className:
                    "mb-6 flex flex-row items-center justify-between gap-4 sm:mb-14",
                  children: [
                    (0, a.jsx)("h1", { children: "Here’s where you can dive" }),
                    (0, a.jsxs)("div", {
                      className: "flex flex-row gap-5",
                      children: [
                        (0, a.jsx)(s.Z, {
                          dir: "left",
                          className:
                            "bg-ocean-blue text-white data-[transparent=true]:bg-ocean-blue/75",
                          onClick: () => {
                            t((e) => e - 1);
                          },
                          disabled: 0 === e,
                        }),
                        (0, a.jsx)(s.Z, {
                          dir: "right",
                          className:
                            "bg-ocean-blue text-white data-[transparent=true]:bg-ocean-blue/75",
                          onClick: () => {
                            t((e) => e + 1);
                          },
                          disabled: e === Math.ceil(l.length / 4) - 1,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className:
                    "relative z-[2] grid grid-cols-1 gap-x-6 gap-y-12 rounded-2xl bg-sand p-10 sm:grid-cols-2",
                  children: l.map((t, i) =>
                    (0, a.jsxs)(
                      "div",
                      {
                        className:
                          "flex flex-col gap-6 data-[visible=false]:hidden",
                        "data-visible": i >= 4 * e && i < (e + 1) * 4,
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-row items-center gap-3",
                            children: [
                              (0, a.jsx)(o, {}),
                              (0, a.jsx)("h3", { children: t.location }),
                            ],
                          }),
                          (0, a.jsx)("hr", {
                            className: "border-t-2 opacity-30",
                          }),
                          (0, a.jsx)("div", {
                            className: "",
                            children: t.text,
                          }),
                        ],
                      },
                      "dive-site-".concat(i)
                    )
                  ),
                }),
              ],
            }),
            (0, a.jsx)("img", {
              src: "<?php echo THEME_URI ?>/media/topographic-3.svg",
              className:
                "pointer-events-none absolute left-0 top-0 z-[1] size-full object-cover object-center opacity-10",
            }),
          ],
        });
      }
      let o = () =>
          (0, a.jsx)("svg", {
            width: "16",
            height: "30",
            viewBox: "0 0 16 30",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, a.jsxs)("g", {
              opacity: "0.9",
              children: [
                (0, a.jsx)("circle", {
                  cx: "7.68293",
                  cy: "7.68293",
                  r: "7.68293",
                }),
                (0, a.jsx)("rect", {
                  x: "7",
                  y: "11.7075",
                  width: "2",
                  height: "18.2927",
                }),
              ],
            }),
          }),
        l = [
          {
            location: "Apo Island",
            text: "A 30-minute boat ride from the resort, Apo Island is a protected marine sanctuary renowned for its vibrant coral reefs and diverse marine life. Apo is also ideal for snorkeling and diving, with sightings of turtles and colorful tropical fish. Most notably, the reef exhibit at the Shedd Aquarium in Chicago is patterned after Apo Island.",
          },
          {
            location: "Sumilon",
            text: "Sumilon Island is the first marine sanctuary established in 1973. Sumilon offers stunning wall dives and a variety of marine ecosystems, from coral gardens to sandy bottoms. Divers can explore rich biodiversity, including large schools of fish and the occasional reef shark.",
          },
          {
            location: "Oslob Whale Shark",
            text: "Dive with gentle giants at Oslob, where you can encounter whale sharks up close. This unique experience allows divers to observe these magnificent creatures in their natural habitat.",
          },
          {
            location: "Masaplod Norte",
            text: "Masaplod Norte features an artificial reef created from old tires, attracting a plethora of macro life. Divers can discover schools of Yellow Snappers, Bluefin Trevally, and even Green Turtles, alongside fascinating macro critters.",
          },
          {
            location: "Masaplod Sur",
            text: "At Masaplod Sur, divers can explore two reef patches separated by sandy gullies. The site is home to diverse macro subjects, including robust Ghost Pipefish and elusive Frogfish, making it an excellent location for macro enthusiasts.",
          },
          {
            location: "San Miguel Point",
            text: "San Miguel Point is famous for its sandy bottom and rich macro life, including the stunning stiliger and ship Nudibranchs. Divers may also encounter cuttlefish and flamboyant cuttlefish, making it a must-visit for macro photography.",
          },
          {
            location: "Talisay Point",
            text: "Just a three-minute boat ride from the resort, Talisay Point features a sandy slope adorned with corals. Here, divers can spot Harlequin Shrimp, Nudibranchs, and Frogfish in a vibrant underwater environment.",
          },
          {
            location: "Pyramid",
            text: "Pyramid is an artificial reef known for its macro diving opportunities. Discover Thorny Seahorses, Sawblade Shrimp hiding in black corals, and a variety of Nudibranchs, making it a captivating site for underwater exploration.",
          },
          {
            location: "Dauin Sur",
            text: "Dauin South boasts thriving coral reefs teeming with marine life. Divers can encounter Garden Eels, turtles, giant clams, and blue ribbon eels, all thriving in this diverse underwater ecosystem.",
          },
          {
            location: "Ginama-an",
            text: "Meaning “man-made” in the local language, Ginama-an features an artificial reef made from old tires. This site attracts a variety of reef fish and crustaceans, with vibrant sponges and corals creating a colorful underwater habitat.",
          },
          {
            location: "Dauin Norte",
            text: "Dauin Norte is the most popular dive site for good reason. With a sandy slope leading to a healthy reef, divers can see Ghost Pipefish, Frogfish, and a multitude of reef fish, including regular sightings of Green and Hawksbill Turtles.",
          },
          {
            location: "Punta",
            text: "Punta, meaning “Corner,” is located at the southern end of the beach and features a sandy slope home to unique species like Pink-Eared Mantis Shrimp and various octopuses. Divers appreciate the potential for current and the opportunity to photograph rare cephalopods.",
          },
        ];
    },
    5758: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = i(7437),
        s = (e) => {
          let { className: t = "" } = e;
          return (0, a.jsx)("svg", {
            width: "20",
            height: "15",
            viewBox: "0 0 20 15",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, a.jsx)("path", {
              d: "M4.52058 6.22548L17.9006 6.22547C18.2406 6.22547 18.5256 6.34047 18.7556 6.57047C18.9856 6.80047 19.1006 7.08547 19.1006 7.42547C19.1006 7.76547 18.9856 8.05047 18.7556 8.28047C18.5256 8.51047 18.2406 8.62547 17.9006 8.62547L4.52058 8.62548L7.94058 12.0455C8.18059 12.2855 8.29559 12.5655 8.28559 12.8855C8.27559 13.2055 8.16059 13.4855 7.94059 13.7255C7.70059 13.9655 7.41559 14.0905 7.08559 14.1005C6.75559 14.1105 6.47059 13.9955 6.23059 13.7555L0.740585 8.26548C0.620584 8.14548 0.535585 8.01548 0.485584 7.87548C0.435584 7.73548 0.410585 7.58548 0.410585 7.42548C0.410585 7.26548 0.435584 7.11548 0.485584 6.97548C0.535585 6.83548 0.620584 6.70548 0.740585 6.58548L6.23058 1.09548C6.47058 0.855476 6.75558 0.740476 7.08558 0.750476C7.41558 0.760476 7.70058 0.885476 7.94058 1.12548C8.16058 1.36548 8.27558 1.64548 8.28558 1.96548C8.29558 2.28548 8.18058 2.56548 7.94058 2.80548L4.52058 6.22548Z",
            }),
          });
        },
        r = (e) => {
          let { className: t = "" } = e;
          return (0, a.jsx)("svg", {
            width: "20",
            height: "14",
            viewBox: "0 0 20 14",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            children: (0, a.jsx)("path", {
              d: "M15.4794 8.51769L2.09942 8.51769C1.75942 8.51769 1.47442 8.40269 1.24442 8.17269C1.01442 7.94269 0.899415 7.65769 0.899415 7.31769C0.899415 6.97769 1.01442 6.69269 1.24442 6.46269C1.47442 6.23269 1.75942 6.11769 2.09942 6.11769L15.4794 6.11769L12.0594 2.69769C11.8194 2.45769 11.7044 2.17769 11.7144 1.85769C11.7244 1.53769 11.8394 1.25769 12.0594 1.01769C12.2994 0.777688 12.5844 0.652688 12.9144 0.642688C13.2444 0.632688 13.5294 0.747688 13.7694 0.987688L19.2594 6.47769C19.3794 6.59769 19.4644 6.72769 19.5144 6.86769C19.5644 7.00769 19.5894 7.15769 19.5894 7.31769C19.5894 7.47769 19.5644 7.62769 19.5144 7.76769C19.4644 7.90769 19.3794 8.03769 19.2594 8.15769L13.7694 13.6477C13.5294 13.8877 13.2444 14.0027 12.9144 13.9927C12.5844 13.9827 12.2994 13.8577 12.0594 13.6177C11.8394 13.3777 11.7244 13.0977 11.7144 12.7777C11.7044 12.4577 11.8194 12.1777 12.0594 11.9377L15.4794 8.51769Z",
            }),
          });
        };
      function n(e) {
        let {
          dir: t,
          onClick: i = () => {},
          className:
            n = "bg-pale-blue data-[transparent]:bg-pale-blue/75 text-[#5F6368]",
          disabled: o = !1,
          transparent: l = !1,
        } = e;
        return (0, a.jsx)("button", {
          className:
            "flex size-12 items-center justify-center rounded-full transition-opacity disabled:opacity-50 ".concat(
              n
            ),
          onClick: i,
          disabled: o,
          "data-transparent": l,
          children: ("left" === t ? s : r)({ className: "size-5" }),
        });
      }
    },
  },
  function (e) {
    e.O(0, [231, 971, 23, 744], function () {
      return e((e.s = 610));
    }),
      (_N_E = e.O());
  },
]);
