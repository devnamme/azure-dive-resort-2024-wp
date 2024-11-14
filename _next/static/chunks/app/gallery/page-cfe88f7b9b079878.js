(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [928],
  {
    2158: function (t, e, r) {
      Promise.resolve().then(r.bind(r, 3694)),
        Promise.resolve().then(r.t.bind(r, 231, 23));
    },
    3694: function (t, e, r) {
      "use strict";
      r.d(e, {
        default: function () {
          return s;
        },
      });
      var n = r(7437),
        i = r(2265),
        o = r(6300).Buffer;
      function s() {
        let [t, e] = (0, i.useState)("overview");
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsx)("section", {
            className: "mb-16 px-6 py-8 sm:pb-23 sm:pt-16",
            children: (0, n.jsxs)("div", {
              className: "mx-auto max-w-content",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "mb-8 flex flex-row flex-wrap items-center justify-center sm:mb-10 sm:justify-start",
                  children: [
                    (0, n.jsx)(f, {
                      active: "overview" === t,
                      onClick: () => e("overview"),
                      children: "Overview",
                    }),
                    (0, n.jsx)(f, {
                      active: "resort" === t,
                      onClick: () => e("resort"),
                      children: "Resort",
                    }),
                    (0, n.jsx)(f, {
                      active: "food" === t,
                      onClick: () => e("food"),
                      children: "Food",
                    }),
                    (0, n.jsx)(f, {
                      active: "people" === t,
                      onClick: () => e("people"),
                      children: "People",
                    }),
                    (0, n.jsx)(f, {
                      active: "events" === t,
                      onClick: () => e("events"),
                      children: "Events",
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: "grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3",
                  children: h
                    .filter(
                      (e) => "overview" === t || e.category.toLowerCase() === t
                    )
                    .map((t) => ({
                      ...t,
                      idx: o.from(t.src.slice(-3) + t.src).toString("base64"),
                    }))
                    .sort((t, e) => t.idx.localeCompare(e.idx))
                    .map((t, e) =>
                      (0, n.jsx)(
                        a,
                        {
                          ...t,
                          className: ""
                            .concat(
                              e % 2 == 1
                                ? "translate-y-16 sm:translate-y-0"
                                : "",
                              " "
                            )
                            .concat(e % 3 == 1 ? "sm:!translate-y-16" : ""),
                        },
                        "gallery-image-".concat(e)
                      )
                    ),
                }),
              ],
            }),
          }),
        });
      }
      let f = (t) => {
          let { active: e, onClick: r, children: i } = t;
          return (0, n.jsx)("button", {
            className:
              "h3 rounded-2xl px-8 py-3 text-center text-lg font-bold transition-colors data-[active=true]:bg-pale-blue",
            "data-active": e,
            onClick: r,
            children: i,
          });
        },
        a = (t) => {
          let { className: e, src: r, label: i, category: o } = t;
          return (0, n.jsxs)("div", {
            className:
              "grid h-[275px] min-w-0 grid-cols-1 grid-rows-[1fr_auto] gap-2.5 overflow-clip sm:h-[425px] ".concat(
                e
              ),
            children: [
              (0, n.jsx)("img", {
                src: "https://azurediveresort.com/wp-content/themes/azure-dive-resort-2024/media/gallery/".concat(
                  r,
                  ".jpg"
                ),
                alt: i,
                className:
                  "h-full min-h-0 w-full rounded-lg object-cover object-center",
              }),
              (0, n.jsxs)("div", {
                className:
                  "flex min-h-0 flex-row flex-wrap justify-between gap-2",
                children: [
                  (0, n.jsx)("p", { className: "shrink grow", children: i }),
                  (0, n.jsx)("p", {
                    className:
                      "shrink-0 grow-0 items-center rounded bg-earth/20 px-2 py-1 text-sm font-medium uppercase",
                    children: o,
                  }),
                ],
              }),
            ],
          });
        },
        u = {
          Resort: [
            ["SUNRISE-24", "Sunset views"],
            ["SUNRISE-34", "Diving prep"],
            ["SUNRISE-12", "Golden Hour at Beatriz Restaurant"],
            ["SUNRISE-11", "Swimming pool"],
            ["SUNRISE-37", "Gear up and dive into adventure"],
            ["DAY 1-247", "Take a nightly dip in our pool"],
            ["DAY 1-293", "Divers ready to visit our dive spots"],
            ["DAY 1-311", "Soak up the sun and unwind by our poolside"],
            ["AERIAL-13-edited", "Azure from the sky"],
            ["Azure-8181", "Celebrate your big wins with us"],
            ["image00001", "A hidden paradise between sea and mountains"],
            ["image02186", "Wake up to serene views and gentle breezes"],
            ["image02187", "Where pool meets pure paradise"],
            ["image02188", "Soak up the sun and unwind by our poolside"],
            ["image02189", "Your perfect getaway spot"],
            ["image02190", "Soak up the sun and unwind by our poolside"],
            ["image02191", "Let comfort and relaxation take over"],
            ["image02192", "Cozy up in comfort with sunlit views"],
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
          Events: [
            ["image02193", "Say 'I do' with a view"],
            ["image02194", "Celebrate life in nature’s embrace"],
            ["image00002", "Flowers crafted with care for heartfelt moments"],
            ["image00003", "A bouquet as unique as your love story"],
            ["image00004", "Dine in elegance"],
            ["image00005", "A dreamy path to your dreamy wedding"],
            ["image00006", "Raise a glass to love, life, and laughter"],
            ["image00008", "Celebrate love with ocean views"],
          ],
        },
        h = Object.keys(u)
          .map((t) =>
            u[t].map((e) => ({ src: e[0], label: e[1], category: t }))
          )
          .flat(1);
    },
    6300: function (t) {
      !(function () {
        var e = {
            675: function (t, e) {
              "use strict";
              (e.byteLength = function (t) {
                var e = a(t),
                  r = e[0],
                  n = e[1];
                return ((r + n) * 3) / 4 - n;
              }),
                (e.toByteArray = function (t) {
                  var e,
                    r,
                    o = a(t),
                    s = o[0],
                    f = o[1],
                    u = new i(((s + f) * 3) / 4 - f),
                    h = 0,
                    l = f > 0 ? s - 4 : s;
                  for (r = 0; r < l; r += 4)
                    (e =
                      (n[t.charCodeAt(r)] << 18) |
                      (n[t.charCodeAt(r + 1)] << 12) |
                      (n[t.charCodeAt(r + 2)] << 6) |
                      n[t.charCodeAt(r + 3)]),
                      (u[h++] = (e >> 16) & 255),
                      (u[h++] = (e >> 8) & 255),
                      (u[h++] = 255 & e);
                  return (
                    2 === f &&
                      ((e =
                        (n[t.charCodeAt(r)] << 2) |
                        (n[t.charCodeAt(r + 1)] >> 4)),
                      (u[h++] = 255 & e)),
                    1 === f &&
                      ((e =
                        (n[t.charCodeAt(r)] << 10) |
                        (n[t.charCodeAt(r + 1)] << 4) |
                        (n[t.charCodeAt(r + 2)] >> 2)),
                      (u[h++] = (e >> 8) & 255),
                      (u[h++] = 255 & e)),
                    u
                  );
                }),
                (e.fromByteArray = function (t) {
                  for (
                    var e, n = t.length, i = n % 3, o = [], s = 0, f = n - i;
                    s < f;
                    s += 16383
                  )
                    o.push(
                      (function (t, e, n) {
                        for (var i, o = [], s = e; s < n; s += 3)
                          o.push(
                            r[
                              ((i =
                                ((t[s] << 16) & 16711680) +
                                ((t[s + 1] << 8) & 65280) +
                                (255 & t[s + 2])) >>
                                18) &
                                63
                            ] +
                              r[(i >> 12) & 63] +
                              r[(i >> 6) & 63] +
                              r[63 & i]
                          );
                        return o.join("");
                      })(t, s, s + 16383 > f ? f : s + 16383)
                    );
                  return (
                    1 === i
                      ? o.push(r[(e = t[n - 1]) >> 2] + r[(e << 4) & 63] + "==")
                      : 2 === i &&
                        o.push(
                          r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] +
                            r[(e >> 4) & 63] +
                            r[(e << 2) & 63] +
                            "="
                        ),
                    o.join("")
                  );
                });
              for (
                var r = [],
                  n = [],
                  i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
                  o =
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                  s = 0,
                  f = o.length;
                s < f;
                ++s
              )
                (r[s] = o[s]), (n[o.charCodeAt(s)] = s);
              function a(t) {
                var e = t.length;
                if (e % 4 > 0)
                  throw Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                -1 === r && (r = e);
                var n = r === e ? 0 : 4 - (r % 4);
                return [r, n];
              }
              (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
            },
            72: function (t, e, r) {
              "use strict";
              var n = r(675),
                i = r(783),
                o =
                  "function" == typeof Symbol && "function" == typeof Symbol.for
                    ? Symbol.for("nodejs.util.inspect.custom")
                    : null;
              function s(t) {
                if (t > 2147483647)
                  throw RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
                var e = new Uint8Array(t);
                return Object.setPrototypeOf(e, f.prototype), e;
              }
              function f(t, e, r) {
                if ("number" == typeof t) {
                  if ("string" == typeof e)
                    throw TypeError(
                      'The "string" argument must be of type string. Received type number'
                    );
                  return h(t);
                }
                return a(t, e, r);
              }
              function a(t, e, r) {
                if ("string" == typeof t)
                  return (function (t, e) {
                    if (
                      (("string" != typeof e || "" === e) && (e = "utf8"),
                      !f.isEncoding(e))
                    )
                      throw TypeError("Unknown encoding: " + e);
                    var r = 0 | p(t, e),
                      n = s(r),
                      i = n.write(t, e);
                    return i !== r && (n = n.slice(0, i)), n;
                  })(t, e);
                if (ArrayBuffer.isView(t)) return l(t);
                if (null == t)
                  throw TypeError(
                    "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                      typeof t
                  );
                if (
                  k(t, ArrayBuffer) ||
                  (t && k(t.buffer, ArrayBuffer)) ||
                  ("undefined" != typeof SharedArrayBuffer &&
                    (k(t, SharedArrayBuffer) ||
                      (t && k(t.buffer, SharedArrayBuffer))))
                )
                  return (function (t, e, r) {
                    var n;
                    if (e < 0 || t.byteLength < e)
                      throw RangeError('"offset" is outside of buffer bounds');
                    if (t.byteLength < e + (r || 0))
                      throw RangeError('"length" is outside of buffer bounds');
                    return (
                      Object.setPrototypeOf(
                        (n =
                          void 0 === e && void 0 === r
                            ? new Uint8Array(t)
                            : void 0 === r
                            ? new Uint8Array(t, e)
                            : new Uint8Array(t, e, r)),
                        f.prototype
                      ),
                      n
                    );
                  })(t, e, r);
                if ("number" == typeof t)
                  throw TypeError(
                    'The "value" argument must not be of type number. Received type number'
                  );
                var n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return f.from(n, e, r);
                var i = (function (t) {
                  if (f.isBuffer(t)) {
                    var e,
                      r = 0 | c(t.length),
                      n = s(r);
                    return 0 === n.length || t.copy(n, 0, 0, r), n;
                  }
                  return void 0 !== t.length
                    ? "number" != typeof t.length || (e = t.length) != e
                      ? s(0)
                      : l(t)
                    : "Buffer" === t.type && Array.isArray(t.data)
                    ? l(t.data)
                    : void 0;
                })(t);
                if (i) return i;
                if (
                  "undefined" != typeof Symbol &&
                  null != Symbol.toPrimitive &&
                  "function" == typeof t[Symbol.toPrimitive]
                )
                  return f.from(t[Symbol.toPrimitive]("string"), e, r);
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              }
              function u(t) {
                if ("number" != typeof t)
                  throw TypeError('"size" argument must be of type number');
                if (t < 0)
                  throw RangeError(
                    'The value "' + t + '" is invalid for option "size"'
                  );
              }
              function h(t) {
                return u(t), s(t < 0 ? 0 : 0 | c(t));
              }
              function l(t) {
                for (
                  var e = t.length < 0 ? 0 : 0 | c(t.length), r = s(e), n = 0;
                  n < e;
                  n += 1
                )
                  r[n] = 255 & t[n];
                return r;
              }
              function c(t) {
                if (t >= 2147483647)
                  throw RangeError(
                    "Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes"
                  );
                return 0 | t;
              }
              function p(t, e) {
                if (f.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || k(t, ArrayBuffer))
                  return t.byteLength;
                if ("string" != typeof t)
                  throw TypeError(
                    'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                      typeof t
                  );
                var r = t.length,
                  n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                for (var i = !1; ; )
                  switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                      return r;
                    case "utf8":
                    case "utf-8":
                      return S(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return 2 * r;
                    case "hex":
                      return r >>> 1;
                    case "base64":
                      return C(t).length;
                    default:
                      if (i) return n ? -1 : S(t).length;
                      (e = ("" + e).toLowerCase()), (i = !0);
                  }
              }
              function y(t, e, r) {
                var i,
                  o,
                  s = !1;
                if (
                  ((void 0 === e || e < 0) && (e = 0),
                  e > this.length ||
                    ((void 0 === r || r > this.length) && (r = this.length),
                    r <= 0 || (r >>>= 0) <= (e >>>= 0)))
                )
                  return "";
                for (t || (t = "utf8"); ; )
                  switch (t) {
                    case "hex":
                      return (function (t, e, r) {
                        var n = t.length;
                        (!e || e < 0) && (e = 0),
                          (!r || r < 0 || r > n) && (r = n);
                        for (var i = "", o = e; o < r; ++o) i += T[t[o]];
                        return i;
                      })(this, e, r);
                    case "utf8":
                    case "utf-8":
                      return m(this, e, r);
                    case "ascii":
                      return (function (t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i)
                          n += String.fromCharCode(127 & t[i]);
                        return n;
                      })(this, e, r);
                    case "latin1":
                    case "binary":
                      return (function (t, e, r) {
                        var n = "";
                        r = Math.min(t.length, r);
                        for (var i = e; i < r; ++i)
                          n += String.fromCharCode(t[i]);
                        return n;
                      })(this, e, r);
                    case "base64":
                      return (
                        (i = e),
                        (o = r),
                        0 === i && o === this.length
                          ? n.fromByteArray(this)
                          : n.fromByteArray(this.slice(i, o))
                      );
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return (function (t, e, r) {
                        for (
                          var n = t.slice(e, r), i = "", o = 0;
                          o < n.length;
                          o += 2
                        )
                          i += String.fromCharCode(n[o] + 256 * n[o + 1]);
                        return i;
                      })(this, e, r);
                    default:
                      if (s) throw TypeError("Unknown encoding: " + t);
                      (t = (t + "").toLowerCase()), (s = !0);
                  }
              }
              function g(t, e, r) {
                var n = t[e];
                (t[e] = t[r]), (t[r] = n);
              }
              function d(t, e, r, n, i) {
                var o;
                if (0 === t.length) return -1;
                if (
                  ("string" == typeof r
                    ? ((n = r), (r = 0))
                    : r > 2147483647
                    ? (r = 2147483647)
                    : r < -2147483648 && (r = -2147483648),
                  (o = r = +r) != o && (r = i ? 0 : t.length - 1),
                  r < 0 && (r = t.length + r),
                  r >= t.length)
                ) {
                  if (i) return -1;
                  r = t.length - 1;
                } else if (r < 0) {
                  if (!i) return -1;
                  r = 0;
                }
                if (("string" == typeof e && (e = f.from(e, n)), f.isBuffer(e)))
                  return 0 === e.length ? -1 : v(t, e, r, n, i);
                if ("number" == typeof e)
                  return ((e &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf)
                    ? i
                      ? Uint8Array.prototype.indexOf.call(t, e, r)
                      : Uint8Array.prototype.lastIndexOf.call(t, e, r)
                    : v(t, [e], r, n, i);
                throw TypeError("val must be string, number or Buffer");
              }
              function v(t, e, r, n, i) {
                var o,
                  s = 1,
                  f = t.length,
                  a = e.length;
                if (
                  void 0 !== n &&
                  ("ucs2" === (n = String(n).toLowerCase()) ||
                    "ucs-2" === n ||
                    "utf16le" === n ||
                    "utf-16le" === n)
                ) {
                  if (t.length < 2 || e.length < 2) return -1;
                  (s = 2), (f /= 2), (a /= 2), (r /= 2);
                }
                function u(t, e) {
                  return 1 === s ? t[e] : t.readUInt16BE(e * s);
                }
                if (i) {
                  var h = -1;
                  for (o = r; o < f; o++)
                    if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
                      if ((-1 === h && (h = o), o - h + 1 === a)) return h * s;
                    } else -1 !== h && (o -= o - h), (h = -1);
                } else
                  for (r + a > f && (r = f - a), o = r; o >= 0; o--) {
                    for (var l = !0, c = 0; c < a; c++)
                      if (u(t, o + c) !== u(e, c)) {
                        l = !1;
                        break;
                      }
                    if (l) return o;
                  }
                return -1;
              }
              function m(t, e, r) {
                r = Math.min(t.length, r);
                for (var n = [], i = e; i < r; ) {
                  var o,
                    s,
                    f,
                    a,
                    u = t[i],
                    h = null,
                    l = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                  if (i + l <= r)
                    switch (l) {
                      case 1:
                        u < 128 && (h = u);
                        break;
                      case 2:
                        (192 & (o = t[i + 1])) == 128 &&
                          (a = ((31 & u) << 6) | (63 & o)) > 127 &&
                          (h = a);
                        break;
                      case 3:
                        (o = t[i + 1]),
                          (s = t[i + 2]),
                          (192 & o) == 128 &&
                            (192 & s) == 128 &&
                            (a =
                              ((15 & u) << 12) | ((63 & o) << 6) | (63 & s)) >
                              2047 &&
                            (a < 55296 || a > 57343) &&
                            (h = a);
                        break;
                      case 4:
                        (o = t[i + 1]),
                          (s = t[i + 2]),
                          (f = t[i + 3]),
                          (192 & o) == 128 &&
                            (192 & s) == 128 &&
                            (192 & f) == 128 &&
                            (a =
                              ((15 & u) << 18) |
                              ((63 & o) << 12) |
                              ((63 & s) << 6) |
                              (63 & f)) > 65535 &&
                            a < 1114112 &&
                            (h = a);
                    }
                  null === h
                    ? ((h = 65533), (l = 1))
                    : h > 65535 &&
                      ((h -= 65536),
                      n.push(((h >>> 10) & 1023) | 55296),
                      (h = 56320 | (1023 & h))),
                    n.push(h),
                    (i += l);
                }
                return (function (t) {
                  var e = t.length;
                  if (e <= 4096) return String.fromCharCode.apply(String, t);
                  for (var r = "", n = 0; n < e; )
                    r += String.fromCharCode.apply(
                      String,
                      t.slice(n, (n += 4096))
                    );
                  return r;
                })(n);
              }
              function b(t, e, r) {
                if (t % 1 != 0 || t < 0) throw RangeError("offset is not uint");
                if (t + e > r)
                  throw RangeError("Trying to access beyond buffer length");
              }
              function w(t, e, r, n, i, o) {
                if (!f.isBuffer(t))
                  throw TypeError(
                    '"buffer" argument must be a Buffer instance'
                  );
                if (e > i || e < o)
                  throw RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw RangeError("Index out of range");
              }
              function A(t, e, r, n, i, o) {
                if (r + n > t.length || r < 0)
                  throw RangeError("Index out of range");
              }
              function E(t, e, r, n, o) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  o ||
                    A(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
                  i.write(t, e, r, n, 23, 4),
                  r + 4
                );
              }
              function B(t, e, r, n, o) {
                return (
                  (e = +e),
                  (r >>>= 0),
                  o ||
                    A(
                      t,
                      e,
                      r,
                      8,
                      17976931348623157e292,
                      -17976931348623157e292
                    ),
                  i.write(t, e, r, n, 52, 8),
                  r + 8
                );
              }
              (e.Buffer = f),
                (e.SlowBuffer = function (t) {
                  return +t != t && (t = 0), f.alloc(+t);
                }),
                (e.INSPECT_MAX_BYTES = 50),
                (e.kMaxLength = 2147483647),
                (f.TYPED_ARRAY_SUPPORT = (function () {
                  try {
                    var t = new Uint8Array(1),
                      e = {
                        foo: function () {
                          return 42;
                        },
                      };
                    return (
                      Object.setPrototypeOf(e, Uint8Array.prototype),
                      Object.setPrototypeOf(t, e),
                      42 === t.foo()
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
                f.TYPED_ARRAY_SUPPORT ||
                  "undefined" == typeof console ||
                  "function" != typeof console.error ||
                  console.error(
                    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                  ),
                Object.defineProperty(f.prototype, "parent", {
                  enumerable: !0,
                  get: function () {
                    if (f.isBuffer(this)) return this.buffer;
                  },
                }),
                Object.defineProperty(f.prototype, "offset", {
                  enumerable: !0,
                  get: function () {
                    if (f.isBuffer(this)) return this.byteOffset;
                  },
                }),
                (f.poolSize = 8192),
                (f.from = function (t, e, r) {
                  return a(t, e, r);
                }),
                Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
                Object.setPrototypeOf(f, Uint8Array),
                (f.alloc = function (t, e, r) {
                  return (u(t), t <= 0)
                    ? s(t)
                    : void 0 !== e
                    ? "string" == typeof r
                      ? s(t).fill(e, r)
                      : s(t).fill(e)
                    : s(t);
                }),
                (f.allocUnsafe = function (t) {
                  return h(t);
                }),
                (f.allocUnsafeSlow = function (t) {
                  return h(t);
                }),
                (f.isBuffer = function (t) {
                  return null != t && !0 === t._isBuffer && t !== f.prototype;
                }),
                (f.compare = function (t, e) {
                  if (
                    (k(t, Uint8Array) &&
                      (t = f.from(t, t.offset, t.byteLength)),
                    k(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
                    !f.isBuffer(t) || !f.isBuffer(e))
                  )
                    throw TypeError(
                      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                    );
                  if (t === e) return 0;
                  for (
                    var r = t.length, n = e.length, i = 0, o = Math.min(r, n);
                    i < o;
                    ++i
                  )
                    if (t[i] !== e[i]) {
                      (r = t[i]), (n = e[i]);
                      break;
                    }
                  return r < n ? -1 : n < r ? 1 : 0;
                }),
                (f.isEncoding = function (t) {
                  switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return !0;
                    default:
                      return !1;
                  }
                }),
                (f.concat = function (t, e) {
                  if (!Array.isArray(t))
                    throw TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  if (0 === t.length) return f.alloc(0);
                  if (void 0 === e)
                    for (r = 0, e = 0; r < t.length; ++r) e += t[r].length;
                  var r,
                    n = f.allocUnsafe(e),
                    i = 0;
                  for (r = 0; r < t.length; ++r) {
                    var o = t[r];
                    if ((k(o, Uint8Array) && (o = f.from(o)), !f.isBuffer(o)))
                      throw TypeError(
                        '"list" argument must be an Array of Buffers'
                      );
                    o.copy(n, i), (i += o.length);
                  }
                  return n;
                }),
                (f.byteLength = p),
                (f.prototype._isBuffer = !0),
                (f.prototype.swap16 = function () {
                  var t = this.length;
                  if (t % 2 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 16-bits"
                    );
                  for (var e = 0; e < t; e += 2) g(this, e, e + 1);
                  return this;
                }),
                (f.prototype.swap32 = function () {
                  var t = this.length;
                  if (t % 4 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 32-bits"
                    );
                  for (var e = 0; e < t; e += 4)
                    g(this, e, e + 3), g(this, e + 1, e + 2);
                  return this;
                }),
                (f.prototype.swap64 = function () {
                  var t = this.length;
                  if (t % 8 != 0)
                    throw RangeError(
                      "Buffer size must be a multiple of 64-bits"
                    );
                  for (var e = 0; e < t; e += 8)
                    g(this, e, e + 7),
                      g(this, e + 1, e + 6),
                      g(this, e + 2, e + 5),
                      g(this, e + 3, e + 4);
                  return this;
                }),
                (f.prototype.toString = function () {
                  var t = this.length;
                  return 0 === t
                    ? ""
                    : 0 == arguments.length
                    ? m(this, 0, t)
                    : y.apply(this, arguments);
                }),
                (f.prototype.toLocaleString = f.prototype.toString),
                (f.prototype.equals = function (t) {
                  if (!f.isBuffer(t))
                    throw TypeError("Argument must be a Buffer");
                  return this === t || 0 === f.compare(this, t);
                }),
                (f.prototype.inspect = function () {
                  var t = "",
                    r = e.INSPECT_MAX_BYTES;
                  return (
                    (t = this.toString("hex", 0, r)
                      .replace(/(.{2})/g, "$1 ")
                      .trim()),
                    this.length > r && (t += " ... "),
                    "<Buffer " + t + ">"
                  );
                }),
                o && (f.prototype[o] = f.prototype.inspect),
                (f.prototype.compare = function (t, e, r, n, i) {
                  if (
                    (k(t, Uint8Array) &&
                      (t = f.from(t, t.offset, t.byteLength)),
                    !f.isBuffer(t))
                  )
                    throw TypeError(
                      'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                        typeof t
                    );
                  if (
                    (void 0 === e && (e = 0),
                    void 0 === r && (r = t ? t.length : 0),
                    void 0 === n && (n = 0),
                    void 0 === i && (i = this.length),
                    e < 0 || r > t.length || n < 0 || i > this.length)
                  )
                    throw RangeError("out of range index");
                  if (n >= i && e >= r) return 0;
                  if (n >= i) return -1;
                  if (e >= r) return 1;
                  if (
                    ((e >>>= 0), (r >>>= 0), (n >>>= 0), (i >>>= 0), this === t)
                  )
                    return 0;
                  for (
                    var o = i - n,
                      s = r - e,
                      a = Math.min(o, s),
                      u = this.slice(n, i),
                      h = t.slice(e, r),
                      l = 0;
                    l < a;
                    ++l
                  )
                    if (u[l] !== h[l]) {
                      (o = u[l]), (s = h[l]);
                      break;
                    }
                  return o < s ? -1 : s < o ? 1 : 0;
                }),
                (f.prototype.includes = function (t, e, r) {
                  return -1 !== this.indexOf(t, e, r);
                }),
                (f.prototype.indexOf = function (t, e, r) {
                  return d(this, t, e, r, !0);
                }),
                (f.prototype.lastIndexOf = function (t, e, r) {
                  return d(this, t, e, r, !1);
                }),
                (f.prototype.write = function (t, e, r, n) {
                  if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                  else if (void 0 === r && "string" == typeof e)
                    (n = e), (r = this.length), (e = 0);
                  else if (isFinite(e))
                    (e >>>= 0),
                      isFinite(r)
                        ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                        : ((n = r), (r = void 0));
                  else
                    throw Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  var i,
                    o,
                    s,
                    f,
                    a,
                    u,
                    h,
                    l,
                    c,
                    p,
                    y,
                    g,
                    d = this.length - e;
                  if (
                    ((void 0 === r || r > d) && (r = d),
                    (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
                  )
                    throw RangeError("Attempt to write outside buffer bounds");
                  n || (n = "utf8");
                  for (var v = !1; ; )
                    switch (n) {
                      case "hex":
                        return (function (t, e, r, n) {
                          r = Number(r) || 0;
                          var i = t.length - r;
                          n ? (n = Number(n)) > i && (n = i) : (n = i);
                          var o = e.length;
                          n > o / 2 && (n = o / 2);
                          for (var s = 0; s < n; ++s) {
                            var f = parseInt(e.substr(2 * s, 2), 16);
                            if (f != f) break;
                            t[r + s] = f;
                          }
                          return s;
                        })(this, t, e, r);
                      case "utf8":
                      case "utf-8":
                        return (
                          (a = e), (u = r), I(S(t, this.length - a), this, a, u)
                        );
                      case "ascii":
                        return (h = e), (l = r), I(U(t), this, h, l);
                      case "latin1":
                      case "binary":
                        return (
                          (i = this),
                          (o = t),
                          (s = e),
                          (f = r),
                          I(U(o), i, s, f)
                        );
                      case "base64":
                        return (c = e), (p = r), I(C(t), this, c, p);
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return (
                          (y = e),
                          (g = r),
                          I(
                            (function (t, e) {
                              for (
                                var r, n, i = [], o = 0;
                                o < t.length && !((e -= 2) < 0);
                                ++o
                              )
                                (n = (r = t.charCodeAt(o)) >> 8),
                                  i.push(r % 256),
                                  i.push(n);
                              return i;
                            })(t, this.length - y),
                            this,
                            y,
                            g
                          )
                        );
                      default:
                        if (v) throw TypeError("Unknown encoding: " + n);
                        (n = ("" + n).toLowerCase()), (v = !0);
                    }
                }),
                (f.prototype.toJSON = function () {
                  return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0),
                  };
                }),
                (f.prototype.slice = function (t, e) {
                  var r = this.length;
                  (t = ~~t),
                    (e = void 0 === e ? r : ~~e),
                    t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
                    e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r),
                    e < t && (e = t);
                  var n = this.subarray(t, e);
                  return Object.setPrototypeOf(n, f.prototype), n;
                }),
                (f.prototype.readUIntLE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                  for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i;
                  return n;
                }),
                (f.prototype.readUIntBE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                  for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); )
                    n += this[t + --e] * i;
                  return n;
                }),
                (f.prototype.readUInt8 = function (t, e) {
                  return (t >>>= 0), e || b(t, 1, this.length), this[t];
                }),
                (f.prototype.readUInt16LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 2, this.length),
                    this[t] | (this[t + 1] << 8)
                  );
                }),
                (f.prototype.readUInt16BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 2, this.length),
                    (this[t] << 8) | this[t + 1]
                  );
                }),
                (f.prototype.readUInt32LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 4, this.length),
                    (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                      16777216 * this[t + 3]
                  );
                }),
                (f.prototype.readUInt32BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 4, this.length),
                    16777216 * this[t] +
                      ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                  );
                }),
                (f.prototype.readIntLE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                  for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
                    n += this[t + o] * i;
                  return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
                }),
                (f.prototype.readIntBE = function (t, e, r) {
                  (t >>>= 0), (e >>>= 0), r || b(t, e, this.length);
                  for (
                    var n = e, i = 1, o = this[t + --n];
                    n > 0 && (i *= 256);

                  )
                    o += this[t + --n] * i;
                  return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
                }),
                (f.prototype.readInt8 = function (t, e) {
                  return ((t >>>= 0), e || b(t, 1, this.length), 128 & this[t])
                    ? -((255 - this[t] + 1) * 1)
                    : this[t];
                }),
                (f.prototype.readInt16LE = function (t, e) {
                  (t >>>= 0), e || b(t, 2, this.length);
                  var r = this[t] | (this[t + 1] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (f.prototype.readInt16BE = function (t, e) {
                  (t >>>= 0), e || b(t, 2, this.length);
                  var r = this[t + 1] | (this[t] << 8);
                  return 32768 & r ? 4294901760 | r : r;
                }),
                (f.prototype.readInt32LE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 4, this.length),
                    this[t] |
                      (this[t + 1] << 8) |
                      (this[t + 2] << 16) |
                      (this[t + 3] << 24)
                  );
                }),
                (f.prototype.readInt32BE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 4, this.length),
                    (this[t] << 24) |
                      (this[t + 1] << 16) |
                      (this[t + 2] << 8) |
                      this[t + 3]
                  );
                }),
                (f.prototype.readFloatLE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 4, this.length),
                    i.read(this, t, !0, 23, 4)
                  );
                }),
                (f.prototype.readFloatBE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 4, this.length),
                    i.read(this, t, !1, 23, 4)
                  );
                }),
                (f.prototype.readDoubleLE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 8, this.length),
                    i.read(this, t, !0, 52, 8)
                  );
                }),
                (f.prototype.readDoubleBE = function (t, e) {
                  return (
                    (t >>>= 0),
                    e || b(t, 8, this.length),
                    i.read(this, t, !1, 52, 8)
                  );
                }),
                (f.prototype.writeUIntLE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    w(this, t, e, r, i, 0);
                  }
                  var o = 1,
                    s = 0;
                  for (this[e] = 255 & t; ++s < r && (o *= 256); )
                    this[e + s] = (t / o) & 255;
                  return e + r;
                }),
                (f.prototype.writeUIntBE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r) - 1;
                    w(this, t, e, r, i, 0);
                  }
                  var o = r - 1,
                    s = 1;
                  for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                    this[e + o] = (t / s) & 255;
                  return e + r;
                }),
                (f.prototype.writeUInt8 = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 1, 255, 0),
                    (this[e] = 255 & t),
                    e + 1
                  );
                }),
                (f.prototype.writeUInt16LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 2, 65535, 0),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  );
                }),
                (f.prototype.writeUInt16BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 2, 65535, 0),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  );
                }),
                (f.prototype.writeUInt32LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 4, 4294967295, 0),
                    (this[e + 3] = t >>> 24),
                    (this[e + 2] = t >>> 16),
                    (this[e + 1] = t >>> 8),
                    (this[e] = 255 & t),
                    e + 4
                  );
                }),
                (f.prototype.writeUInt32BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 4, 4294967295, 0),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  );
                }),
                (f.prototype.writeIntLE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    w(this, t, e, r, i - 1, -i);
                  }
                  var o = 0,
                    s = 1,
                    f = 0;
                  for (this[e] = 255 & t; ++o < r && (s *= 256); )
                    t < 0 && 0 === f && 0 !== this[e + o - 1] && (f = 1),
                      (this[e + o] = (((t / s) >> 0) - f) & 255);
                  return e + r;
                }),
                (f.prototype.writeIntBE = function (t, e, r, n) {
                  if (((t = +t), (e >>>= 0), !n)) {
                    var i = Math.pow(2, 8 * r - 1);
                    w(this, t, e, r, i - 1, -i);
                  }
                  var o = r - 1,
                    s = 1,
                    f = 0;
                  for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); )
                    t < 0 && 0 === f && 0 !== this[e + o + 1] && (f = 1),
                      (this[e + o] = (((t / s) >> 0) - f) & 255);
                  return e + r;
                }),
                (f.prototype.writeInt8 = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 1, 127, -128),
                    t < 0 && (t = 255 + t + 1),
                    (this[e] = 255 & t),
                    e + 1
                  );
                }),
                (f.prototype.writeInt16LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 2, 32767, -32768),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    e + 2
                  );
                }),
                (f.prototype.writeInt16BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 2, 32767, -32768),
                    (this[e] = t >>> 8),
                    (this[e + 1] = 255 & t),
                    e + 2
                  );
                }),
                (f.prototype.writeInt32LE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 4, 2147483647, -2147483648),
                    (this[e] = 255 & t),
                    (this[e + 1] = t >>> 8),
                    (this[e + 2] = t >>> 16),
                    (this[e + 3] = t >>> 24),
                    e + 4
                  );
                }),
                (f.prototype.writeInt32BE = function (t, e, r) {
                  return (
                    (t = +t),
                    (e >>>= 0),
                    r || w(this, t, e, 4, 2147483647, -2147483648),
                    t < 0 && (t = 4294967295 + t + 1),
                    (this[e] = t >>> 24),
                    (this[e + 1] = t >>> 16),
                    (this[e + 2] = t >>> 8),
                    (this[e + 3] = 255 & t),
                    e + 4
                  );
                }),
                (f.prototype.writeFloatLE = function (t, e, r) {
                  return E(this, t, e, !0, r);
                }),
                (f.prototype.writeFloatBE = function (t, e, r) {
                  return E(this, t, e, !1, r);
                }),
                (f.prototype.writeDoubleLE = function (t, e, r) {
                  return B(this, t, e, !0, r);
                }),
                (f.prototype.writeDoubleBE = function (t, e, r) {
                  return B(this, t, e, !1, r);
                }),
                (f.prototype.copy = function (t, e, r, n) {
                  if (!f.isBuffer(t))
                    throw TypeError("argument should be a Buffer");
                  if (
                    (r || (r = 0),
                    n || 0 === n || (n = this.length),
                    e >= t.length && (e = t.length),
                    e || (e = 0),
                    n > 0 && n < r && (n = r),
                    n === r || 0 === t.length || 0 === this.length)
                  )
                    return 0;
                  if (e < 0) throw RangeError("targetStart out of bounds");
                  if (r < 0 || r >= this.length)
                    throw RangeError("Index out of range");
                  if (n < 0) throw RangeError("sourceEnd out of bounds");
                  n > this.length && (n = this.length),
                    t.length - e < n - r && (n = t.length - e + r);
                  var i = n - r;
                  if (
                    this === t &&
                    "function" == typeof Uint8Array.prototype.copyWithin
                  )
                    this.copyWithin(e, r, n);
                  else if (this === t && r < e && e < n)
                    for (var o = i - 1; o >= 0; --o) t[o + e] = this[o + r];
                  else Uint8Array.prototype.set.call(t, this.subarray(r, n), e);
                  return i;
                }),
                (f.prototype.fill = function (t, e, r, n) {
                  if ("string" == typeof t) {
                    if (
                      ("string" == typeof e
                        ? ((n = e), (e = 0), (r = this.length))
                        : "string" == typeof r && ((n = r), (r = this.length)),
                      void 0 !== n && "string" != typeof n)
                    )
                      throw TypeError("encoding must be a string");
                    if ("string" == typeof n && !f.isEncoding(n))
                      throw TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                      var i,
                        o = t.charCodeAt(0);
                      (("utf8" === n && o < 128) || "latin1" === n) && (t = o);
                    }
                  } else
                    "number" == typeof t
                      ? (t &= 255)
                      : "boolean" == typeof t && (t = Number(t));
                  if (e < 0 || this.length < e || this.length < r)
                    throw RangeError("Out of range index");
                  if (r <= e) return this;
                  if (
                    ((e >>>= 0),
                    (r = void 0 === r ? this.length : r >>> 0),
                    t || (t = 0),
                    "number" == typeof t)
                  )
                    for (i = e; i < r; ++i) this[i] = t;
                  else {
                    var s = f.isBuffer(t) ? t : f.from(t, n),
                      a = s.length;
                    if (0 === a)
                      throw TypeError(
                        'The value "' + t + '" is invalid for argument "value"'
                      );
                    for (i = 0; i < r - e; ++i) this[i + e] = s[i % a];
                  }
                  return this;
                });
              var x = /[^+/0-9A-Za-z-_]/g;
              function S(t, e) {
                e = e || 1 / 0;
                for (var r, n = t.length, i = null, o = [], s = 0; s < n; ++s) {
                  if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
                    if (!i) {
                      if (r > 56319 || s + 1 === n) {
                        (e -= 3) > -1 && o.push(239, 191, 189);
                        continue;
                      }
                      i = r;
                      continue;
                    }
                    if (r < 56320) {
                      (e -= 3) > -1 && o.push(239, 191, 189), (i = r);
                      continue;
                    }
                    r = (((i - 55296) << 10) | (r - 56320)) + 65536;
                  } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                  if (((i = null), r < 128)) {
                    if ((e -= 1) < 0) break;
                    o.push(r);
                  } else if (r < 2048) {
                    if ((e -= 2) < 0) break;
                    o.push((r >> 6) | 192, (63 & r) | 128);
                  } else if (r < 65536) {
                    if ((e -= 3) < 0) break;
                    o.push(
                      (r >> 12) | 224,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else if (r < 1114112) {
                    if ((e -= 4) < 0) break;
                    o.push(
                      (r >> 18) | 240,
                      ((r >> 12) & 63) | 128,
                      ((r >> 6) & 63) | 128,
                      (63 & r) | 128
                    );
                  } else throw Error("Invalid code point");
                }
                return o;
              }
              function U(t) {
                for (var e = [], r = 0; r < t.length; ++r)
                  e.push(255 & t.charCodeAt(r));
                return e;
              }
              function C(t) {
                return n.toByteArray(
                  (function (t) {
                    if (
                      (t = (t = t.split("=")[0]).trim().replace(x, "")).length <
                      2
                    )
                      return "";
                    for (; t.length % 4 != 0; ) t += "=";
                    return t;
                  })(t)
                );
              }
              function I(t, e, r, n) {
                for (
                  var i = 0;
                  i < n && !(i + r >= e.length) && !(i >= t.length);
                  ++i
                )
                  e[i + r] = t[i];
                return i;
              }
              function k(t, e) {
                return (
                  t instanceof e ||
                  (null != t &&
                    null != t.constructor &&
                    null != t.constructor.name &&
                    t.constructor.name === e.name)
                );
              }
              var T = (function () {
                for (
                  var t = "0123456789abcdef", e = Array(256), r = 0;
                  r < 16;
                  ++r
                )
                  for (var n = 16 * r, i = 0; i < 16; ++i)
                    e[n + i] = t[r] + t[i];
                return e;
              })();
            },
            783: function (t, e) {
              (e.read = function (t, e, r, n, i) {
                var o,
                  s,
                  f = 8 * i - n - 1,
                  a = (1 << f) - 1,
                  u = a >> 1,
                  h = -7,
                  l = r ? i - 1 : 0,
                  c = r ? -1 : 1,
                  p = t[e + l];
                for (
                  l += c, o = p & ((1 << -h) - 1), p >>= -h, h += f;
                  h > 0;
                  o = 256 * o + t[e + l], l += c, h -= 8
                );
                for (
                  s = o & ((1 << -h) - 1), o >>= -h, h += n;
                  h > 0;
                  s = 256 * s + t[e + l], l += c, h -= 8
                );
                if (0 === o) o = 1 - u;
                else {
                  if (o === a) return s ? NaN : (1 / 0) * (p ? -1 : 1);
                  (s += Math.pow(2, n)), (o -= u);
                }
                return (p ? -1 : 1) * s * Math.pow(2, o - n);
              }),
                (e.write = function (t, e, r, n, i, o) {
                  var s,
                    f,
                    a,
                    u = 8 * o - i - 1,
                    h = (1 << u) - 1,
                    l = h >> 1,
                    c = 23 === i ? 5960464477539062e-23 : 0,
                    p = n ? 0 : o - 1,
                    y = n ? 1 : -1,
                    g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                  for (
                    isNaN((e = Math.abs(e))) || e === 1 / 0
                      ? ((f = isNaN(e) ? 1 : 0), (s = h))
                      : ((s = Math.floor(Math.log(e) / Math.LN2)),
                        e * (a = Math.pow(2, -s)) < 1 && (s--, (a *= 2)),
                        s + l >= 1
                          ? (e += c / a)
                          : (e += c * Math.pow(2, 1 - l)),
                        e * a >= 2 && (s++, (a /= 2)),
                        s + l >= h
                          ? ((f = 0), (s = h))
                          : s + l >= 1
                          ? ((f = (e * a - 1) * Math.pow(2, i)), (s += l))
                          : ((f = e * Math.pow(2, l - 1) * Math.pow(2, i)),
                            (s = 0)));
                    i >= 8;
                    t[r + p] = 255 & f, p += y, f /= 256, i -= 8
                  );
                  for (
                    s = (s << i) | f, u += i;
                    u > 0;
                    t[r + p] = 255 & s, p += y, s /= 256, u -= 8
                  );
                  t[r + p - y] |= 128 * g;
                });
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var o = (r[t] = { exports: {} }),
            s = !0;
          try {
            e[t](o, o.exports, n), (s = !1);
          } finally {
            s && delete r[t];
          }
          return o.exports;
        }
        n.ab = "//";
        var i = n(72);
        t.exports = i;
      })();
    },
  },
  function (t) {
    t.O(0, [231, 971, 23, 744], function () {
      return t((t.s = 2158));
    }),
      (_N_E = t.O());
  },
]);
