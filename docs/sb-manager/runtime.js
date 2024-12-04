var Id = Object.create;
var Xr = Object.defineProperty;
var Sd = Object.getOwnPropertyDescriptor;
var wd = Object.getOwnPropertyNames;
var Ed = Object.getPrototypeOf, Cd = Object.prototype.hasOwnProperty;
var a = (e, t) => Xr(e, "name", { value: t, configurable: !0 }), ro = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, o) => (typeof require < "u" ? require : t)[o]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var Se = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var _d = (e, t, o, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of wd(t))
      !Cd.call(e, n) && n !== o && Xr(e, n, { get: () => t[n], enumerable: !(i = Sd(t, n)) || i.enumerable });
  return e;
};
var Be = (e, t, o) => (o = e != null ? Id(Ed(e)) : {}, _d(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Xr(o, "default", { value: e, enumerable: !0 }) : o,
  e
));

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var Ts = Se((Lx, _s) => {
  "use strict";
  var kd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  _s.exports = kd;
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var As = Se((Nx, Ps) => {
  "use strict";
  var Od = Ts();
  function ks() {
  }
  a(ks, "emptyFunction");
  function Os() {
  }
  a(Os, "emptyFunctionWithReset");
  Os.resetWarningCache = ks;
  Ps.exports = function() {
    function e(i, n, r, l, u, c) {
      if (c !== Od) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. \
Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    a(e, "shim"), e.isRequired = e;
    function t() {
      return e;
    }
    a(t, "getShim");
    var o = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: Os,
      resetWarningCache: ks
    };
    return o.PropTypes = o, o;
  };
});

// ../node_modules/prop-types/index.js
var nn = Se((zx, Ms) => {
  Ms.exports = As()();
  var Bx, Hx;
});

// ../node_modules/react-fast-compare/index.js
var Ls = Se((Rx, Ds) => {
  var Pd = typeof Element < "u", Ad = typeof Map == "function", Md = typeof Set == "function", Dd = typeof ArrayBuffer == "function" && !!ArrayBuffer.
  isView;
  function Mo(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return !1;
      var o, i, n;
      if (Array.isArray(e)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (!Mo(e[i], t[i])) return !1;
        return !0;
      }
      var r;
      if (Ad && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!Mo(i.value[1], t.get(i.value[0]))) return !1;
        return !0;
      }
      if (Md && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        return !0;
      }
      if (Dd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (e[i] !== t[i]) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() ===
      t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() ===
      t.toString();
      if (n = Object.keys(e), o = n.length, o !== Object.keys(t).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
      if (Pd && e instanceof Element) return !1;
      for (i = o; i-- !== 0; )
        if (!((n[i] === "_owner" || n[i] === "__v" || n[i] === "__o") && e.$$typeof) && !Mo(e[n[i]], t[n[i]]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  a(Mo, "equal");
  Ds.exports = /* @__PURE__ */ a(function(t, o) {
    try {
      return Mo(t, o);
    } catch (i) {
      if ((i.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw i;
    }
  }, "isEqual");
});

// ../node_modules/invariant/browser.js
var Fs = Se((Wx, Ns) => {
  "use strict";
  var Ld = /* @__PURE__ */ a(function(e, t, o, i, n, r, l, u) {
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var d = [o, i, n, r, l, u], p = 0;
        c = new Error(
          t.replace(/%s/g, function() {
            return d[p++];
          })
        ), c.name = "Invariant Violation";
      }
      throw c.framesToPop = 1, c;
    }
  }, "invariant");
  Ns.exports = Ld;
});

// ../node_modules/shallowequal/index.js
var Hs = Se(($x, Bs) => {
  Bs.exports = /* @__PURE__ */ a(function(t, o, i, n) {
    var r = i ? i.call(n, t, o) : void 0;
    if (r !== void 0)
      return !!r;
    if (t === o)
      return !0;
    if (typeof t != "object" || !t || typeof o != "object" || !o)
      return !1;
    var l = Object.keys(t), u = Object.keys(o);
    if (l.length !== u.length)
      return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(o), d = 0; d < l.length; d++) {
      var p = l[d];
      if (!c(p))
        return !1;
      var g = t[p], h = o[p];
      if (r = i ? i.call(n, g, h, p) : void 0, r === !1 || r === void 0 && g !== h)
        return !1;
    }
    return !0;
  }, "shallowEqual");
});

// ../node_modules/memoizerific/memoizerific.js
var ir = Se((al, kn) => {
  (function(e) {
    if (typeof al == "object" && typeof kn < "u")
      kn.exports = e();
    else if (typeof define == "function" && define.amd)
      define([], e);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e();
    }
  })(function() {
    var e, t, o;
    return (/* @__PURE__ */ a(function i(n, r, l) {
      function u(p, g) {
        if (!r[p]) {
          if (!n[p]) {
            var h = typeof ro == "function" && ro;
            if (!g && h) return h(p, !0);
            if (c) return c(p, !0);
            var y = new Error("Cannot find module '" + p + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var f = r[p] = { exports: {} };
          n[p][0].call(f.exports, function(b) {
            var S = n[p][1][b];
            return u(S || b);
          }, f, f.exports, i, n, r, l);
        }
        return r[p].exports;
      }
      a(u, "s");
      for (var c = typeof ro == "function" && ro, d = 0; d < l.length; d++) u(l[d]);
      return u;
    }, "e"))({ 1: [function(i, n, r) {
      n.exports = function(l) {
        if (typeof Map != "function" || l) {
          var u = i("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(i, n, r) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(l, "Similar"), l.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(u, c) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (d = this.indexOf(u), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? !0 : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, l.prototype.forEach = function(u, c) {
        var d;
        for (d = 0; d < this.size; d++)
          u.call(c || this, this.list[d].val, this.list[d].key, this);
      }, l.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, l.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, n.exports = l;
    }, {}], 3: [function(i, n, r) {
      var l = i("map-or-similar");
      n.exports = function(p) {
        var g = new l(!1), h = [];
        return function(y) {
          var f = /* @__PURE__ */ a(function() {
            var b = g, S, E, m = arguments.length - 1, v = Array(m + 1), I = !0, w;
            if ((f.numArgs || f.numArgs === 0) && f.numArgs !== m + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (w = 0; w < m; w++) {
              if (v[w] = {
                cacheItem: b,
                arg: arguments[w]
              }, b.has(arguments[w])) {
                b = b.get(arguments[w]);
                continue;
              }
              I = !1, S = new l(!1), b.set(arguments[w], S), b = S;
            }
            return I && (b.has(arguments[m]) ? E = b.get(arguments[m]) : I = !1), I || (E = y.apply(null, arguments), b.set(arguments[m], E)),
            p > 0 && (v[m] = {
              cacheItem: b,
              arg: arguments[m]
            }, I ? u(h, v) : h.push(v), h.length > p && c(h.shift())), f.wasMemoized = I, f.numArgs = m + 1, E;
          }, "memoizerific");
          return f.limit = p, f.wasMemoized = !1, f.cache = g, f.lru = h, f;
        };
      };
      function u(p, g) {
        var h = p.length, y = g.length, f, b, S;
        for (b = 0; b < h; b++) {
          for (f = !0, S = 0; S < y; S++)
            if (!d(p[b][S].arg, g[S].arg)) {
              f = !1;
              break;
            }
          if (f)
            break;
        }
        p.push(p.splice(b, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(p) {
        var g = p.length, h = p[g - 1], y, f;
        for (h.cacheItem.delete(h.arg), f = g - 2; f >= 0 && (h = p[f], y = h.cacheItem.get(h.arg), !y || !y.size); f--)
          h.cacheItem.delete(h.arg);
      }
      a(c, "removeCachedResult");
      function d(p, g) {
        return p === g || p !== p && g !== g;
      }
      a(d, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/picoquery/lib/string-util.js
var Dn = Se((Mn) => {
  "use strict";
  Object.defineProperty(Mn, "__esModule", { value: !0 });
  Mn.encodeString = Jf;
  var Je = Array.from({ length: 256 }, (e, t) => "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()), Zf = new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
  function Jf(e) {
    let t = e.length;
    if (t === 0)
      return "";
    let o = "", i = 0, n = 0;
    e: for (; n < t; n++) {
      let r = e.charCodeAt(n);
      for (; r < 128; ) {
        if (Zf[r] !== 1 && (i < n && (o += e.slice(i, n)), i = n + 1, o += Je[r]), ++n === t)
          break e;
        r = e.charCodeAt(n);
      }
      if (i < n && (o += e.slice(i, n)), r < 2048) {
        i = n + 1, o += Je[192 | r >> 6] + Je[128 | r & 63];
        continue;
      }
      if (r < 55296 || r >= 57344) {
        i = n + 1, o += Je[224 | r >> 12] + Je[128 | r >> 6 & 63] + Je[128 | r & 63];
        continue;
      }
      if (++n, n >= t)
        throw new Error("URI malformed");
      let l = e.charCodeAt(n) & 1023;
      i = n + 1, r = 65536 + ((r & 1023) << 10 | l), o += Je[240 | r >> 18] + Je[128 | r >> 12 & 63] + Je[128 | r >> 6 & 63] + Je[128 | r & 63];
    }
    return i === 0 ? e : i < t ? o + e.slice(i) : o;
  }
  a(Jf, "encodeString");
});

// ../node_modules/picoquery/lib/shared.js
var sr = Se((et) => {
  "use strict";
  Object.defineProperty(et, "__esModule", { value: !0 });
  et.defaultOptions = et.defaultShouldSerializeObject = et.defaultValueSerializer = void 0;
  var Ln = Dn(), em = /* @__PURE__ */ a((e) => {
    switch (typeof e) {
      case "string":
        return (0, Ln.encodeString)(e);
      case "bigint":
      case "boolean":
        return "" + e;
      case "number":
        if (Number.isFinite(e))
          return e < 1e21 ? "" + e : (0, Ln.encodeString)("" + e);
        break;
    }
    return e instanceof Date ? (0, Ln.encodeString)(e.toISOString()) : "";
  }, "defaultValueSerializer");
  et.defaultValueSerializer = em;
  var tm = /* @__PURE__ */ a((e) => e instanceof Date, "defaultShouldSerializeObject");
  et.defaultShouldSerializeObject = tm;
  var pl = /* @__PURE__ */ a((e) => e, "identityFunc");
  et.defaultOptions = {
    nesting: !0,
    nestingSyntax: "dot",
    arrayRepeat: !1,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
    valueDeserializer: pl,
    valueSerializer: et.defaultValueSerializer,
    keyDeserializer: pl,
    shouldSerializeObject: et.defaultShouldSerializeObject
  };
});

// ../node_modules/picoquery/lib/object-util.js
var Nn = Se((ar) => {
  "use strict";
  Object.defineProperty(ar, "__esModule", { value: !0 });
  ar.getDeepObject = nm;
  ar.stringifyObject = dl;
  var _t = sr(), om = Dn();
  function rm(e) {
    return e === "__proto__" || e === "constructor" || e === "prototype";
  }
  a(rm, "isPrototypeKey");
  function nm(e, t, o, i, n) {
    if (rm(t))
      return e;
    let r = e[t];
    return typeof r == "object" && r !== null ? r : !i && (n || typeof o == "number" || typeof o == "string" && o * 0 === 0 && o.indexOf(".") ===
    -1) ? e[t] = [] : e[t] = {};
  }
  a(nm, "getDeepObject");
  var im = 20, sm = "[]", am = "[", lm = "]", um = ".";
  function dl(e, t, o = 0, i, n) {
    let { nestingSyntax: r = _t.defaultOptions.nestingSyntax, arrayRepeat: l = _t.defaultOptions.arrayRepeat, arrayRepeatSyntax: u = _t.defaultOptions.
    arrayRepeatSyntax, nesting: c = _t.defaultOptions.nesting, delimiter: d = _t.defaultOptions.delimiter, valueSerializer: p = _t.defaultOptions.
    valueSerializer, shouldSerializeObject: g = _t.defaultOptions.shouldSerializeObject } = t, h = typeof d == "number" ? String.fromCharCode(
    d) : d, y = n === !0 && l, f = r === "dot" || r === "js" && !n;
    if (o > im)
      return "";
    let b = "", S = !0, E = !1;
    for (let m in e) {
      let v = e[m], I;
      i ? (I = i, y ? u === "bracket" && (I += sm) : f ? (I += um, I += m) : (I += am, I += m, I += lm)) : I = m, S || (b += h), typeof v ==
      "object" && v !== null && !g(v) ? (E = v.pop !== void 0, (c || l && E) && (b += dl(v, t, o + 1, I, E))) : (b += (0, om.encodeString)(I),
      b += "=", b += p(v, m)), S && (S = !1);
    }
    return b;
  }
  a(dl, "stringifyObject");
});

// ../node_modules/fast-decode-uri-component/index.js
var gl = Se((AT, hl) => {
  "use strict";
  var fl = 12, cm = 0, Fn = [
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function pm(e) {
    var t = e.indexOf("%");
    if (t === -1) return e;
    for (var o = e.length, i = "", n = 0, r = 0, l = t, u = fl; t > -1 && t < o; ) {
      var c = ml(e[t + 1], 4), d = ml(e[t + 2], 0), p = c | d, g = Fn[p];
      if (u = Fn[256 + u + g], r = r << 6 | p & Fn[364 + g], u === fl)
        i += e.slice(n, l), i += r <= 65535 ? String.fromCharCode(r) : String.fromCharCode(
          55232 + (r >> 10),
          56320 + (r & 1023)
        ), r = 0, n = t + 3, t = l = e.indexOf("%", n);
      else {
        if (u === cm)
          return null;
        if (t += 3, t < o && e.charCodeAt(t) === 37) continue;
        return null;
      }
    }
    return i + e.slice(n);
  }
  a(pm, "decodeURIComponent");
  var dm = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function ml(e, t) {
    var o = dm[e];
    return o === void 0 ? 255 : o << t;
  }
  a(ml, "hexCodeToInt");
  hl.exports = pm;
});

// ../node_modules/picoquery/lib/parse.js
var xl = Se((at) => {
  "use strict";
  var fm = at && at.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(at, "__esModule", { value: !0 });
  at.numberValueDeserializer = at.numberKeyDeserializer = void 0;
  at.parse = gm;
  var lr = Nn(), Tt = sr(), yl = fm(gl()), mm = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberKeyDeserializer");
  at.numberKeyDeserializer = mm;
  var hm = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberValueDeserializer");
  at.numberValueDeserializer = hm;
  var bl = /\+/g, vl = /* @__PURE__ */ a(function() {
  }, "Empty");
  vl.prototype = /* @__PURE__ */ Object.create(null);
  function ur(e, t, o, i, n) {
    let r = e.substring(t, o);
    return i && (r = r.replace(bl, " ")), n && (r = (0, yl.default)(r) || r), r;
  }
  a(ur, "computeKeySlice");
  function gm(e, t) {
    let { valueDeserializer: o = Tt.defaultOptions.valueDeserializer, keyDeserializer: i = Tt.defaultOptions.keyDeserializer, arrayRepeatSyntax: n = Tt.
    defaultOptions.arrayRepeatSyntax, nesting: r = Tt.defaultOptions.nesting, arrayRepeat: l = Tt.defaultOptions.arrayRepeat, nestingSyntax: u = Tt.
    defaultOptions.nestingSyntax, delimiter: c = Tt.defaultOptions.delimiter } = t ?? {}, d = typeof c == "string" ? c.charCodeAt(0) : c, p = u ===
    "js", g = new vl();
    if (typeof e != "string")
      return g;
    let h = e.length, y = "", f = -1, b = -1, S = -1, E = g, m, v = "", I = "", w = !1, k = !1, _ = !1, T = !1, C = !1, O = !1, P = !1, M = 0,
    D = -1, N = -1, Y = -1;
    for (let W = 0; W < h + 1; W++) {
      if (M = W !== h ? e.charCodeAt(W) : d, M === d) {
        if (P = b > f, P || (b = W), S !== b - 1 && (I = ur(e, S + 1, D > -1 ? D : b, _, w), v = i(I), m !== void 0 && (E = (0, lr.getDeepObject)(
        E, m, v, p && C, p && O))), P || v !== "") {
          P && (y = e.slice(b + 1, W), T && (y = y.replace(bl, " ")), k && (y = (0, yl.default)(y) || y));
          let Q = o(y, v);
          if (l) {
            let H = E[v];
            H === void 0 ? D > -1 ? E[v] = [Q] : E[v] = Q : H.pop ? H.push(Q) : E[v] = [H, Q];
          } else
            E[v] = Q;
        }
        y = "", f = W, b = W, w = !1, k = !1, _ = !1, T = !1, C = !1, O = !1, D = -1, S = W, E = g, m = void 0, v = "";
      } else M === 93 ? (l && n === "bracket" && Y === 91 && (D = N), r && (u === "index" || p) && b <= f && (S !== N && (I = ur(e, S + 1, W,
      _, w), v = i(I), m !== void 0 && (E = (0, lr.getDeepObject)(E, m, v, void 0, p)), m = v, _ = !1, w = !1), S = W, O = !0, C = !1)) : M ===
      46 ? r && (u === "dot" || p) && b <= f && (S !== N && (I = ur(e, S + 1, W, _, w), v = i(I), m !== void 0 && (E = (0, lr.getDeepObject)(
      E, m, v, p)), m = v, _ = !1, w = !1), C = !0, O = !1, S = W) : M === 91 ? r && (u === "index" || p) && b <= f && (S !== N && (I = ur(e,
      S + 1, W, _, w), v = i(I), p && m !== void 0 && (E = (0, lr.getDeepObject)(E, m, v, p)), m = v, _ = !1, w = !1, C = !1, O = !0), S = W) :
      M === 61 ? b <= f ? b = W : k = !0 : M === 43 ? b > f ? T = !0 : _ = !0 : M === 37 && (b > f ? k = !0 : w = !0);
      N = W, Y = M;
    }
    return g;
  }
  a(gm, "parse");
});

// ../node_modules/picoquery/lib/stringify.js
var Il = Se((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: !0 });
  Bn.stringify = bm;
  var ym = Nn();
  function bm(e, t) {
    if (e === null || typeof e != "object")
      return "";
    let o = t ?? {};
    return (0, ym.stringifyObject)(e, o);
  }
  a(bm, "stringify");
});

// ../node_modules/picoquery/lib/main.js
var Sl = Se((Ye) => {
  "use strict";
  var vm = Ye && Ye.__createBinding || (Object.create ? function(e, t, o, i) {
    i === void 0 && (i = o);
    var n = Object.getOwnPropertyDescriptor(t, o);
    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return t[o];
    }, "get") }), Object.defineProperty(e, i, n);
  } : function(e, t, o, i) {
    i === void 0 && (i = o), e[i] = t[o];
  }), xm = Ye && Ye.__exportStar || function(e, t) {
    for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && vm(t, e, o);
  };
  Object.defineProperty(Ye, "__esModule", { value: !0 });
  Ye.stringify = Ye.parse = void 0;
  var Im = xl();
  Object.defineProperty(Ye, "parse", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Im.parse;
  }, "get") });
  var Sm = Il();
  Object.defineProperty(Ye, "stringify", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Sm.stringify;
  }, "get") });
  xm(sr(), Ye);
});

// ../node_modules/toggle-selection/index.js
var kl = Se((tk, Tl) => {
  Tl.exports = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, o = [], i = 0; i < e.rangeCount; i++)
      o.push(e.getRangeAt(i));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(n) {
        e.addRange(n);
      }), t && t.focus();
    };
  };
});

// ../node_modules/copy-to-clipboard/index.js
var Al = Se((ok, Pl) => {
  "use strict";
  var km = kl(), Ol = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, Om = "Copy to clipboard: #{key}, Enter";
  function Pm(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  a(Pm, "format");
  function Am(e, t) {
    var o, i, n, r, l, u, c = !1;
    t || (t = {}), o = t.debug || !1;
    try {
      n = km(), r = document.createRange(), l = document.getSelection(), u = document.createElement("span"), u.textContent = e, u.ariaHidden =
      "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "p\
re", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener(
      "copy", function(p) {
        if (p.stopPropagation(), t.format)
          if (p.preventDefault(), typeof p.clipboardData > "u") {
            o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var g = Ol[t.format] || Ol.default;
            window.clipboardData.setData(g, e);
          } else
            p.clipboardData.clearData(), p.clipboardData.setData(t.format, e);
        t.onCopy && (p.preventDefault(), t.onCopy(p.clipboardData));
      }), document.body.appendChild(u), r.selectNodeContents(u), l.addRange(r);
      var d = document.execCommand("copy");
      if (!d)
        throw new Error("copy command was unsuccessful");
      c = !0;
    } catch (p) {
      o && console.error("unable to copy using execCommand: ", p), o && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
      } catch (g) {
        o && console.error("unable to copy using clipboardData: ", g), o && console.error("falling back to prompt"), i = Pm("message" in t ?
        t.message : Om), window.prompt(i, e);
      }
    } finally {
      l && (typeof l.removeRange == "function" ? l.removeRange(r) : l.removeAllRanges()), u && document.body.removeChild(u), n();
    }
    return c;
  }
  a(Am, "copy");
  Pl.exports = Am;
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var Mc = Se((ce) => {
  "use strict";
  var Yn = Symbol.for("react.element"), Qn = Symbol.for("react.portal"), Sr = Symbol.for("react.fragment"), wr = Symbol.for("react.strict_mo\
de"), Er = Symbol.for("react.profiler"), Cr = Symbol.for("react.provider"), _r = Symbol.for("react.context"), kg = Symbol.for("react.server_\
context"), Tr = Symbol.for("react.forward_ref"), kr = Symbol.for("react.suspense"), Or = Symbol.for("react.suspense_list"), Pr = Symbol.for(
  "react.memo"), Ar = Symbol.for("react.lazy"), Og = Symbol.for("react.offscreen"), Ac;
  Ac = Symbol.for("react.module.reference");
  function Ve(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Yn:
          switch (e = e.type, e) {
            case Sr:
            case Er:
            case wr:
            case kr:
            case Or:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case kg:
                case _r:
                case Tr:
                case Ar:
                case Pr:
                case Cr:
                  return e;
                default:
                  return t;
              }
          }
        case Qn:
          return t;
      }
    }
  }
  a(Ve, "v");
  ce.ContextConsumer = _r;
  ce.ContextProvider = Cr;
  ce.Element = Yn;
  ce.ForwardRef = Tr;
  ce.Fragment = Sr;
  ce.Lazy = Ar;
  ce.Memo = Pr;
  ce.Portal = Qn;
  ce.Profiler = Er;
  ce.StrictMode = wr;
  ce.Suspense = kr;
  ce.SuspenseList = Or;
  ce.isAsyncMode = function() {
    return !1;
  };
  ce.isConcurrentMode = function() {
    return !1;
  };
  ce.isContextConsumer = function(e) {
    return Ve(e) === _r;
  };
  ce.isContextProvider = function(e) {
    return Ve(e) === Cr;
  };
  ce.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yn;
  };
  ce.isForwardRef = function(e) {
    return Ve(e) === Tr;
  };
  ce.isFragment = function(e) {
    return Ve(e) === Sr;
  };
  ce.isLazy = function(e) {
    return Ve(e) === Ar;
  };
  ce.isMemo = function(e) {
    return Ve(e) === Pr;
  };
  ce.isPortal = function(e) {
    return Ve(e) === Qn;
  };
  ce.isProfiler = function(e) {
    return Ve(e) === Er;
  };
  ce.isStrictMode = function(e) {
    return Ve(e) === wr;
  };
  ce.isSuspense = function(e) {
    return Ve(e) === kr;
  };
  ce.isSuspenseList = function(e) {
    return Ve(e) === Or;
  };
  ce.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Sr || e === Er || e === wr || e === kr || e === Or || e === Og || typeof e ==
    "object" && e !== null && (e.$$typeof === Ar || e.$$typeof === Pr || e.$$typeof === Cr || e.$$typeof === _r || e.$$typeof === Tr || e.$$typeof ===
    Ac || e.getModuleId !== void 0);
  };
  ce.typeOf = Ve;
});

// ../node_modules/downshift/node_modules/react-is/index.js
var Lc = Se((MD, Dc) => {
  "use strict";
  Dc.exports = Mc();
});

// ../node_modules/fuse.js/dist/fuse.js
var Wp = Se((wo, ji) => {
  (function(e, t) {
    typeof wo == "object" && typeof ji == "object" ? ji.exports = t() : typeof define == "function" && define.amd ? define("Fuse", [], t) : typeof wo ==
    "object" ? wo.Fuse = t() : e.Fuse = t();
  })(wo, function() {
    return function(e) {
      var t = {};
      function o(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = { i, l: !1, exports: {} };
        return e[i].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
      }
      return a(o, "r"), o.m = e, o.c = t, o.d = function(i, n, r) {
        o.o(i, n) || Object.defineProperty(i, n, { enumerable: !0, get: r });
      }, o.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(
        i, "__esModule", { value: !0 });
      }, o.t = function(i, n) {
        if (1 & n && (i = o(i)), 8 & n || 4 & n && typeof i == "object" && i && i.__esModule) return i;
        var r = /* @__PURE__ */ Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: i }), 2 & n && typeof i != "string") for (var l in i) o.d(r,
        l, (function(u) {
          return i[u];
        }).bind(null, l));
        return r;
      }, o.n = function(i) {
        var n = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return o.d(n, "a", n), n;
      }, o.o = function(i, n) {
        return Object.prototype.hasOwnProperty.call(i, n);
      }, o.p = "", o(o.s = 0);
    }([function(e, t, o) {
      function i(p) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
          return typeof g;
        } : function(g) {
          return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
        })(p);
      }
      a(i, "n");
      function n(p, g) {
        for (var h = 0; h < g.length; h++) {
          var y = g[h];
          y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(p, y.key, y);
        }
      }
      a(n, "o");
      var r = o(1), l = o(7), u = l.get, c = (l.deepValue, l.isArray), d = function() {
        function p(f, b) {
          var S = b.location, E = S === void 0 ? 0 : S, m = b.distance, v = m === void 0 ? 100 : m, I = b.threshold, w = I === void 0 ? 0.6 :
          I, k = b.maxPatternLength, _ = k === void 0 ? 32 : k, T = b.caseSensitive, C = T !== void 0 && T, O = b.tokenSeparator, P = O === void 0 ?
          / +/g : O, M = b.findAllMatches, D = M !== void 0 && M, N = b.minMatchCharLength, Y = N === void 0 ? 1 : N, W = b.id, Q = W === void 0 ?
          null : W, H = b.keys, V = H === void 0 ? [] : H, z = b.shouldSort, te = z === void 0 || z, F = b.getFn, B = F === void 0 ? u : F, L = b.
          sortFn, j = L === void 0 ? function(de, Ie) {
            return de.score - Ie.score;
          } : L, Z = b.tokenize, re = Z !== void 0 && Z, J = b.matchAllTokens, pe = J !== void 0 && J, se = b.includeMatches, ue = se !== void 0 &&
          se, le = b.includeScore, xe = le !== void 0 && le, ge = b.verbose, ke = ge !== void 0 && ge;
          (function(de, Ie) {
            if (!(de instanceof Ie)) throw new TypeError("Cannot call a class as a function");
          })(this, p), this.options = { location: E, distance: v, threshold: w, maxPatternLength: _, isCaseSensitive: C, tokenSeparator: P, findAllMatches: D,
          minMatchCharLength: Y, id: Q, keys: V, includeMatches: ue, includeScore: xe, shouldSort: te, getFn: B, sortFn: j, verbose: ke, tokenize: re,
          matchAllTokens: pe }, this.setCollection(f), this._processKeys(V);
        }
        a(p, "e");
        var g, h, y;
        return g = p, (h = [{ key: "setCollection", value: /* @__PURE__ */ a(function(f) {
          return this.list = f, f;
        }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ a(function(f) {
          if (this._keyWeights = {}, this._keyNames = [], f.length && typeof f[0] == "string") for (var b = 0, S = f.length; b < S; b += 1) {
            var E = f[b];
            this._keyWeights[E] = 1, this._keyNames.push(E);
          }
          else {
            for (var m = null, v = null, I = 0, w = 0, k = f.length; w < k; w += 1) {
              var _ = f[w];
              if (!_.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
              var T = _.name;
              if (this._keyNames.push(T), !_.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
              var C = _.weight;
              if (C < 0 || C > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
              v = v == null ? C : Math.max(v, C), m = m == null ? C : Math.min(m, C), this._keyWeights[T] = C, I += C;
            }
            if (I > 1) throw new Error("Total of weights cannot exceed 1");
          }
        }, "value") }, { key: "search", value: /* @__PURE__ */ a(function(f) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { limit: !1 };
          this._log(`---------
Search pattern: "`.concat(f, '"'));
          var S = this._prepareSearchers(f), E = S.tokenSearchers, m = S.fullSearcher, v = this._search(E, m);
          return this._computeScore(v), this.options.shouldSort && this._sort(v), b.limit && typeof b.limit == "number" && (v = v.slice(0, b.
          limit)), this._format(v);
        }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", b = [];
          if (this.options.tokenize) for (var S = f.split(this.options.tokenSeparator), E = 0, m = S.length; E < m; E += 1) b.push(new r(S[E],
          this.options));
          return { tokenSearchers: b, fullSearcher: new r(f, this.options) };
        }, "value") }, { key: "_search", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], b = arguments.length > 1 ? arguments[1] : void 0, S = this.
          list, E = {}, m = [];
          if (typeof S[0] == "string") {
            for (var v = 0, I = S.length; v < I; v += 1) this._analyze({ key: "", value: S[v], record: v, index: v }, { resultMap: E, results: m,
            tokenSearchers: f, fullSearcher: b });
            return m;
          }
          for (var w = 0, k = S.length; w < k; w += 1) for (var _ = S[w], T = 0, C = this._keyNames.length; T < C; T += 1) {
            var O = this._keyNames[T];
            this._analyze({ key: O, value: this.options.getFn(_, O), record: _, index: w }, { resultMap: E, results: m, tokenSearchers: f, fullSearcher: b });
          }
          return m;
        }, "value") }, { key: "_analyze", value: /* @__PURE__ */ a(function(f, b) {
          var S = this, E = f.key, m = f.arrayIndex, v = m === void 0 ? -1 : m, I = f.value, w = f.record, k = f.index, _ = b.tokenSearchers,
          T = _ === void 0 ? [] : _, C = b.fullSearcher, O = b.resultMap, P = O === void 0 ? {} : O, M = b.results, D = M === void 0 ? [] : M;
          (/* @__PURE__ */ a(function N(Y, W, Q, H) {
            if (W != null) {
              if (typeof W == "string") {
                var V = !1, z = -1, te = 0;
                S._log(`
Key: `.concat(E === "" ? "--" : E));
                var F = C.search(W);
                if (S._log('Full text: "'.concat(W, '", score: ').concat(F.score)), S.options.tokenize) {
                  for (var B = W.split(S.options.tokenSeparator), L = B.length, j = [], Z = 0, re = T.length; Z < re; Z += 1) {
                    var J = T[Z];
                    S._log(`
Pattern: "`.concat(J.pattern, '"'));
                    for (var pe = !1, se = 0; se < L; se += 1) {
                      var ue = B[se], le = J.search(ue), xe = {};
                      le.isMatch ? (xe[ue] = le.score, V = !0, pe = !0, j.push(le.score)) : (xe[ue] = 1, S.options.matchAllTokens || j.push(
                      1)), S._log('Token: "'.concat(ue, '", score: ').concat(xe[ue]));
                    }
                    pe && (te += 1);
                  }
                  z = j[0];
                  for (var ge = j.length, ke = 1; ke < ge; ke += 1) z += j[ke];
                  z /= ge, S._log("Token score average:", z);
                }
                var de = F.score;
                z > -1 && (de = (de + z) / 2), S._log("Score average:", de);
                var Ie = !S.options.tokenize || !S.options.matchAllTokens || te >= T.length;
                if (S._log(`
Check Matches: `.concat(Ie)), (V || F.isMatch) && Ie) {
                  var Ce = { key: E, arrayIndex: Y, value: W, score: de };
                  S.options.includeMatches && (Ce.matchedIndices = F.matchedIndices);
                  var Me = P[H];
                  Me ? Me.output.push(Ce) : (P[H] = { item: Q, output: [Ce] }, D.push(P[H]));
                }
              } else if (c(W)) for (var Ze = 0, Pe = W.length; Ze < Pe; Ze += 1) N(Ze, W[Ze], Q, H);
            }
          }, "e"))(v, I, w, k);
        }, "value") }, { key: "_computeScore", value: /* @__PURE__ */ a(function(f) {
          this._log(`

Computing score:
`);
          for (var b = this._keyWeights, S = !!Object.keys(b).length, E = 0, m = f.length; E < m; E += 1) {
            for (var v = f[E], I = v.output, w = I.length, k = 1, _ = 0; _ < w; _ += 1) {
              var T = I[_], C = T.key, O = S ? b[C] : 1, P = T.score === 0 && b && b[C] > 0 ? Number.EPSILON : T.score;
              k *= Math.pow(P, O);
            }
            v.score = k, this._log(v);
          }
        }, "value") }, { key: "_sort", value: /* @__PURE__ */ a(function(f) {
          this._log(`

Sorting....`), f.sort(this.options.sortFn);
        }, "value") }, { key: "_format", value: /* @__PURE__ */ a(function(f) {
          var b = [];
          if (this.options.verbose) {
            var S = [];
            this._log(`

Output:

`, JSON.stringify(f, function(T, C) {
              if (i(C) === "object" && C !== null) {
                if (S.indexOf(C) !== -1) return;
                S.push(C);
              }
              return C;
            }, 2)), S = null;
          }
          var E = [];
          this.options.includeMatches && E.push(function(T, C) {
            var O = T.output;
            C.matches = [];
            for (var P = 0, M = O.length; P < M; P += 1) {
              var D = O[P];
              if (D.matchedIndices.length !== 0) {
                var N = { indices: D.matchedIndices, value: D.value };
                D.key && (N.key = D.key), D.hasOwnProperty("arrayIndex") && D.arrayIndex > -1 && (N.arrayIndex = D.arrayIndex), C.matches.push(
                N);
              }
            }
          }), this.options.includeScore && E.push(function(T, C) {
            C.score = T.score;
          });
          for (var m = 0, v = f.length; m < v; m += 1) {
            var I = f[m];
            if (this.options.id && (I.item = this.options.getFn(I.item, this.options.id)[0]), E.length) {
              for (var w = { item: I.item }, k = 0, _ = E.length; k < _; k += 1) E[k](I, w);
              b.push(w);
            } else b.push(I.item);
          }
          return b;
        }, "value") }, { key: "_log", value: /* @__PURE__ */ a(function() {
          var f;
          this.options.verbose && (f = console).log.apply(f, arguments);
        }, "value") }]) && n(g.prototype, h), y && n(g, y), p;
      }();
      e.exports = d;
    }, function(e, t, o) {
      function i(c, d) {
        for (var p = 0; p < d.length; p++) {
          var g = d[p];
          g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, g.key, g);
        }
      }
      a(i, "n");
      var n = o(2), r = o(3), l = o(6), u = function() {
        function c(h, y) {
          var f = y.location, b = f === void 0 ? 0 : f, S = y.distance, E = S === void 0 ? 100 : S, m = y.threshold, v = m === void 0 ? 0.6 :
          m, I = y.maxPatternLength, w = I === void 0 ? 32 : I, k = y.isCaseSensitive, _ = k !== void 0 && k, T = y.tokenSeparator, C = T ===
          void 0 ? / +/g : T, O = y.findAllMatches, P = O !== void 0 && O, M = y.minMatchCharLength, D = M === void 0 ? 1 : M, N = y.includeMatches,
          Y = N !== void 0 && N;
          (function(W, Q) {
            if (!(W instanceof Q)) throw new TypeError("Cannot call a class as a function");
          })(this, c), this.options = { location: b, distance: E, threshold: v, maxPatternLength: w, isCaseSensitive: _, tokenSeparator: C, findAllMatches: P,
          includeMatches: Y, minMatchCharLength: D }, this.pattern = _ ? h : h.toLowerCase(), this.pattern.length <= w && (this.patternAlphabet =
          l(this.pattern));
        }
        a(c, "e");
        var d, p, g;
        return d = c, (p = [{ key: "search", value: /* @__PURE__ */ a(function(h) {
          var y = this.options, f = y.isCaseSensitive, b = y.includeMatches;
          if (f || (h = h.toLowerCase()), this.pattern === h) {
            var S = { isMatch: !0, score: 0 };
            return b && (S.matchedIndices = [[0, h.length - 1]]), S;
          }
          var E = this.options, m = E.maxPatternLength, v = E.tokenSeparator;
          if (this.pattern.length > m) return n(h, this.pattern, v);
          var I = this.options, w = I.location, k = I.distance, _ = I.threshold, T = I.findAllMatches, C = I.minMatchCharLength;
          return r(h, this.pattern, this.patternAlphabet, { location: w, distance: k, threshold: _, findAllMatches: T, minMatchCharLength: C,
          includeMatches: b });
        }, "value") }]) && i(d.prototype, p), g && i(d, g), c;
      }();
      e.exports = u;
    }, function(e, t) {
      var o = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
      e.exports = function(i, n) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g, l = new RegExp(n.replace(o, "\\$&").replace(r, "|")),
        u = i.match(l), c = !!u, d = [];
        if (c) for (var p = 0, g = u.length; p < g; p += 1) {
          var h = u[p];
          d.push([i.indexOf(h), h.length - 1]);
        }
        return { score: c ? 0.5 : 1, isMatch: c, matchedIndices: d };
      };
    }, function(e, t, o) {
      var i = o(4), n = o(5);
      e.exports = function(r, l, u, c) {
        for (var d = c.location, p = d === void 0 ? 0 : d, g = c.distance, h = g === void 0 ? 100 : g, y = c.threshold, f = y === void 0 ? 0.6 :
        y, b = c.findAllMatches, S = b !== void 0 && b, E = c.minMatchCharLength, m = E === void 0 ? 1 : E, v = c.includeMatches, I = v !== void 0 &&
        v, w = p, k = r.length, _ = f, T = r.indexOf(l, w), C = l.length, O = [], P = 0; P < k; P += 1) O[P] = 0;
        if (T !== -1) {
          var M = i(l, { errors: 0, currentLocation: T, expectedLocation: w, distance: h });
          if (_ = Math.min(M, _), (T = r.lastIndexOf(l, w + C)) !== -1) {
            var D = i(l, { errors: 0, currentLocation: T, expectedLocation: w, distance: h });
            _ = Math.min(D, _);
          }
        }
        T = -1;
        for (var N = [], Y = 1, W = C + k, Q = 1 << (C <= 31 ? C - 1 : 30), H = 0; H < C; H += 1) {
          for (var V = 0, z = W; V < z; )
            i(l, { errors: H, currentLocation: w + z, expectedLocation: w, distance: h }) <= _ ? V = z : W = z, z = Math.floor((W - V) / 2 +
            V);
          W = z;
          var te = Math.max(1, w - z + 1), F = S ? k : Math.min(w + z, k) + C, B = Array(F + 2);
          B[F + 1] = (1 << H) - 1;
          for (var L = F; L >= te; L -= 1) {
            var j = L - 1, Z = u[r.charAt(j)];
            if (Z && (O[j] = 1), B[L] = (B[L + 1] << 1 | 1) & Z, H !== 0 && (B[L] |= (N[L + 1] | N[L]) << 1 | 1 | N[L + 1]), B[L] & Q && (Y =
            i(l, { errors: H, currentLocation: j, expectedLocation: w, distance: h })) <= _) {
              if (_ = Y, (T = j) <= w) break;
              te = Math.max(1, 2 * w - T);
            }
          }
          if (i(l, { errors: H + 1, currentLocation: w, expectedLocation: w, distance: h }) > _) break;
          N = B;
        }
        var re = { isMatch: T >= 0, score: Y === 0 ? 1e-3 : Y };
        return I && (re.matchedIndices = n(O, m)), re;
      };
    }, function(e, t) {
      e.exports = function(o, i) {
        var n = i.errors, r = n === void 0 ? 0 : n, l = i.currentLocation, u = l === void 0 ? 0 : l, c = i.expectedLocation, d = c === void 0 ?
        0 : c, p = i.distance, g = p === void 0 ? 100 : p, h = r / o.length, y = Math.abs(d - u);
        return g ? h + y / g : y ? 1 : h;
      };
    }, function(e, t) {
      e.exports = function() {
        for (var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 && arguments[1] !== void 0 ?
        arguments[1] : 1, n = [], r = -1, l = -1, u = 0, c = o.length; u < c; u += 1) {
          var d = o[u];
          d && r === -1 ? r = u : d || r === -1 || ((l = u - 1) - r + 1 >= i && n.push([r, l]), r = -1);
        }
        return o[u - 1] && u - r >= i && n.push([r, u - 1]), n;
      };
    }, function(e, t) {
      e.exports = function(o) {
        for (var i = {}, n = o.length, r = 0; r < n; r += 1) i[o.charAt(r)] = 0;
        for (var l = 0; l < n; l += 1) i[o.charAt(l)] |= 1 << n - l - 1;
        return i;
      };
    }, function(e, t) {
      var o = /* @__PURE__ */ a(function(l) {
        return Array.isArray ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
      }, "r"), i = /* @__PURE__ */ a(function(l) {
        return l == null ? "" : function(u) {
          if (typeof u == "string") return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }(l);
      }, "n"), n = /* @__PURE__ */ a(function(l) {
        return typeof l == "string";
      }, "o"), r = /* @__PURE__ */ a(function(l) {
        return typeof l == "number";
      }, "i");
      e.exports = { get: /* @__PURE__ */ a(function(l, u) {
        var c = [];
        return (/* @__PURE__ */ a(function d(p, g) {
          if (g) {
            var h = g.indexOf("."), y = g, f = null;
            h !== -1 && (y = g.slice(0, h), f = g.slice(h + 1));
            var b = p[y];
            if (b != null) if (f || !n(b) && !r(b)) if (o(b)) for (var S = 0, E = b.length; S < E; S += 1) d(b[S], f);
            else f && d(b, f);
            else c.push(i(b));
          } else c.push(p);
        }, "e"))(l, u), c;
      }, "get"), isArray: o, isString: n, isNum: r, toString: i };
    }]);
  });
});

// ../node_modules/store2/dist/store2.js
var ed = Se((qr, Gr) => {
  (function(e, t) {
    var o = {
      version: "2.14.2",
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
      inherit: /* @__PURE__ */ a(function(n, r) {
        for (var l in n)
          r.hasOwnProperty(l) || Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(n, l));
        return r;
      }, "inherit"),
      stringify: /* @__PURE__ */ a(function(n, r) {
        return n === void 0 || typeof n == "function" ? n + "" : JSON.stringify(n, r || o.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ a(function(n, r) {
        try {
          return JSON.parse(n, r || o.revive);
        } catch {
          return n;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ a(function(n, r) {
        o.storeAPI[n] = r;
        for (var l in o.apis)
          o.apis[l][n] = r;
      }, "fn"),
      get: /* @__PURE__ */ a(function(n, r) {
        return n.getItem(r);
      }, "get"),
      set: /* @__PURE__ */ a(function(n, r, l) {
        n.setItem(r, l);
      }, "set"),
      remove: /* @__PURE__ */ a(function(n, r) {
        n.removeItem(r);
      }, "remove"),
      key: /* @__PURE__ */ a(function(n, r) {
        return n.key(r);
      }, "key"),
      length: /* @__PURE__ */ a(function(n) {
        return n.length;
      }, "length"),
      clear: /* @__PURE__ */ a(function(n) {
        n.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ a(function(n, r, l) {
        var u = o.inherit(o.storeAPI, function(d, p, g) {
          return arguments.length === 0 ? u.getAll() : typeof p == "function" ? u.transact(d, p, g) : p !== void 0 ? u.set(d, p, g) : typeof d ==
          "string" || typeof d == "number" ? u.get(d) : typeof d == "function" ? u.each(d) : d ? u.setAll(d, p) : u.clear();
        });
        u._id = n;
        try {
          var c = "__store2_test";
          r.setItem(c, "ok"), u._area = r, r.removeItem(c);
        } catch {
          u._area = o.storage("fake");
        }
        return u._ns = l || "", o.areas[n] || (o.areas[n] = u._area), o.apis[u._ns + u._id] || (o.apis[u._ns + u._id] = u), u;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ a(function(n, r) {
          var l = this[n];
          return (!l || !l.area) && (l = o.Store(n, r, this._ns), this[n] || (this[n] = l)), l;
        }, "area"),
        namespace: /* @__PURE__ */ a(function(n, r, l) {
          if (l = l || this._delim || o.nsdelim, !n)
            return this._ns ? this._ns.substring(0, this._ns.length - l.length) : "";
          var u = n, c = this[u];
          if ((!c || !c.namespace) && (c = o.Store(this._id, this._area, this._ns + u + l), c._delim = l, this[u] || (this[u] = c), !r))
            for (var d in o.areas)
              c.area(d, o.areas[d]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ a(function(n) {
          return n ? (this._real = this._area, this._area = o.storage("fake")) : n === !1 && (this._area = this._real || this._area), this._area.
          name === "fake";
        }, "isFake"),
        toString: /* @__PURE__ */ a(function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        }, "toString"),
        // storage functions
        has: /* @__PURE__ */ a(function(n) {
          return this._area.has ? this._area.has(this._in(n)) : this._in(n) in this._area;
        }, "has"),
        size: /* @__PURE__ */ a(function() {
          return this.keys().length;
        }, "size"),
        each: /* @__PURE__ */ a(function(n, r) {
          for (var l = 0, u = o.length(this._area); l < u; l++) {
            var c = this._out(o.key(this._area, l));
            if (c !== void 0 && n.call(this, c, this.get(c), r) === !1)
              break;
            u > o.length(this._area) && (u--, l--);
          }
          return r || this;
        }, "each"),
        keys: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u.push(r);
          }, n || []);
        }, "keys"),
        get: /* @__PURE__ */ a(function(n, r) {
          var l = o.get(this._area, this._in(n)), u;
          return typeof r == "function" && (u = r, r = null), l !== null ? o.parse(l, u) : r ?? l;
        }, "get"),
        getAll: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u[r] = l;
          }, n || {});
        }, "getAll"),
        transact: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n, l), c = r(u);
          return this.set(n, c === void 0 ? u : c), this;
        }, "transact"),
        set: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n), c;
          return u != null && l === !1 ? r : (typeof l == "function" && (c = l, l = void 0), o.set(this._area, this._in(n), o.stringify(r, c),
          l) || u);
        }, "set"),
        setAll: /* @__PURE__ */ a(function(n, r) {
          var l, u;
          for (var c in n)
            u = n[c], this.set(c, u, r) !== u && (l = !0);
          return l;
        }, "setAll"),
        add: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n);
          if (u instanceof Array)
            r = u.concat(r);
          else if (u !== null) {
            var c = typeof u;
            if (c === typeof r && c === "object") {
              for (var d in r)
                u[d] = r[d];
              r = u;
            } else
              r = u + r;
          }
          return o.set(this._area, this._in(n), o.stringify(r, l)), r;
        }, "add"),
        remove: /* @__PURE__ */ a(function(n, r) {
          var l = this.get(n, r);
          return o.remove(this._area, this._in(n)), l;
        }, "remove"),
        clear: /* @__PURE__ */ a(function() {
          return this._ns ? this.each(function(n) {
            o.remove(this._area, this._in(n));
          }, 1) : o.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ a(function() {
          var n = this._area;
          for (var r in o.areas)
            o.areas.hasOwnProperty(r) && (this._area = o.areas[r], this.clear());
          return this._area = n, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ a(function(n) {
          return typeof n != "string" && (n = o.stringify(n)), this._ns ? this._ns + n : n;
        }, "_in"),
        _out: /* @__PURE__ */ a(function(n) {
          return this._ns ? n && n.indexOf(this._ns) === 0 ? n.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            n
          );
        }, "_out")
      },
      // end _.storeAPI
      storage: /* @__PURE__ */ a(function(n) {
        return o.inherit(o.storageAPI, { items: {}, name: n });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ a(function(n) {
          return this.items.hasOwnProperty(n);
        }, "has"),
        key: /* @__PURE__ */ a(function(n) {
          var r = 0;
          for (var l in this.items)
            if (this.has(l) && n === r++)
              return l;
        }, "key"),
        setItem: /* @__PURE__ */ a(function(n, r) {
          this.has(n) || this.length++, this.items[n] = r;
        }, "setItem"),
        removeItem: /* @__PURE__ */ a(function(n) {
          this.has(n) && (delete this.items[n], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ a(function(n) {
          return this.has(n) ? this.items[n] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ a(function() {
          for (var n in this.items)
            this.removeItem(n);
        }, "clear")
      }
      // end _.storageAPI
    }, i = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      o.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    i.local = i, i._ = o, i.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), i.area("page", o.storage("page")), typeof t == "function" && t.amd !== void 0 ? t("store2", [], function() {
      return i;
    }) : typeof Gr < "u" && Gr.exports ? Gr.exports = i : (e.store && (o.conflict = e.store), e.store = i);
  })(qr, qr && qr.define);
});

// global-externals:@storybook/core/channels
var d0 = __STORYBOOK_CHANNELS__, { Channel: f0, PostMessageTransport: m0, WebsocketTransport: h0, createBrowserChannel: es } = __STORYBOOK_CHANNELS__;

// ../node_modules/@storybook/global/dist/index.mjs
var ie = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// global-externals:@storybook/core/core-events
var b0 = __STORYBOOK_CORE_EVENTS__, { ARGTYPES_INFO_REQUEST: ts, ARGTYPES_INFO_RESPONSE: os, CHANNEL_CREATED: rs, CHANNEL_WS_DISCONNECT: v0,
CONFIG_ERROR: x0, CREATE_NEW_STORYFILE_REQUEST: ns, CREATE_NEW_STORYFILE_RESPONSE: is, CURRENT_STORY_WAS_SET: I0, DOCS_PREPARED: S0, DOCS_RENDERED: w0,
FILE_COMPONENT_SEARCH_REQUEST: ss, FILE_COMPONENT_SEARCH_RESPONSE: _o, FORCE_REMOUNT: Zr, FORCE_RE_RENDER: E0, GLOBALS_UPDATED: C0, NAVIGATE_URL: _0,
PLAY_FUNCTION_THREW_EXCEPTION: T0, PRELOAD_ENTRIES: bt, PREVIEW_BUILDER_PROGRESS: as, PREVIEW_KEYDOWN: k0, REGISTER_SUBSCRIPTION: O0, REQUEST_WHATS_NEW_DATA: P0,
RESET_STORY_ARGS: A0, RESULT_WHATS_NEW_DATA: M0, SAVE_STORY_REQUEST: ls, SAVE_STORY_RESPONSE: us, SELECT_STORY: D0, SET_CONFIG: L0, SET_CURRENT_STORY: cs,
SET_FILTER: N0, SET_GLOBALS: F0, SET_INDEX: B0, SET_STORIES: H0, SET_WHATS_NEW_CACHE: z0, SHARED_STATE_CHANGED: R0, SHARED_STATE_SET: j0, STORIES_COLLAPSE_ALL: no,
STORIES_EXPAND_ALL: Jr, STORY_ARGS_UPDATED: W0, STORY_CHANGED: V0, STORY_ERRORED: $0, STORY_INDEX_INVALIDATED: K0, STORY_MISSING: U0, STORY_PREPARED: q0,
STORY_RENDERED: G0, STORY_RENDER_PHASE_CHANGED: Y0, STORY_SPECIFIED: Q0, STORY_THREW_EXCEPTION: X0, STORY_UNCHANGED: Z0, TELEMETRY_ERROR: J0,
TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: ev, TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: tv, TESTING_MODULE_CONFIG_CHANGE: en, TESTING_MODULE_CRASH_REPORT: tn,
TESTING_MODULE_PROGRESS_REPORT: on, TESTING_MODULE_RUN_ALL_REQUEST: ov, TESTING_MODULE_RUN_REQUEST: rv, TESTING_MODULE_WATCH_MODE_REQUEST: nv,
TOGGLE_WHATS_NEW_NOTIFICATIONS: iv, UNHANDLED_ERRORS_WHILE_PLAYING: sv, UPDATE_GLOBALS: av, UPDATE_QUERY_PARAMS: lv, UPDATE_STORY_ARGS: uv } = __STORYBOOK_CORE_EVENTS__;

// global-externals:@storybook/core/manager-api
var pv = __STORYBOOK_API__, { ActiveTabs: dv, Consumer: me, ManagerContext: fv, Provider: ps, RequestResponseError: mv, addons: Ue, combineParameters: hv,
controlOrMetaKey: gv, controlOrMetaSymbol: yv, eventMatchesShortcut: bv, eventToShortcut: ds, experimental_requestResponse: To, isMacLike: vv,
isShortcutTaken: xv, keyToSymbol: Iv, merge: ko, mockChannel: Sv, optionOrAltSymbol: wv, shortcutMatchesShortcut: fs, shortcutToHumanString: qe,
types: be, useAddonState: Ev, useArgTypes: Cv, useArgs: _v, useChannel: Tv, useGlobalTypes: kv, useGlobals: Ov, useParameter: Pv, useSharedState: Av,
useStoryPrepared: Mv, useStorybookApi: ne, useStorybookState: De } = __STORYBOOK_API__;

// global-externals:react
var s = __REACT__, { Children: Lv, Component: Ne, Fragment: we, Profiler: Nv, PureComponent: Fv, StrictMode: Bv, Suspense: Hv, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: zv,
cloneElement: ms, createContext: zt, createElement: Rv, createFactory: jv, createRef: Wv, forwardRef: hs, isValidElement: Vv, lazy: $v, memo: io,
startTransition: Kv, unstable_act: Uv, useCallback: A, useContext: Oo, useDebugValue: qv, useDeferredValue: gs, useEffect: R, useId: Gv, useImperativeHandle: Yv,
useInsertionEffect: Qv, useLayoutEffect: Rt, useMemo: K, useReducer: jt, useRef: U, useState: $, useSyncExternalStore: Xv, useTransition: ys,
version: Zv } = __REACT__;

// global-externals:react-dom/client
var Jv = __REACT_DOM_CLIENT__, { createRoot: bs, hydrateRoot: ex } = __REACT_DOM_CLIENT__;

// global-externals:@storybook/core/router
var ox = __STORYBOOK_ROUTER__, { BaseLocationProvider: rx, DEEPLY_EQUAL: nx, Link: Po, Location: Ao, LocationProvider: vs, Match: xs, Route: so,
buildArgsParam: ix, deepDiff: sx, getMatch: ax, parsePath: lx, queryFromLocation: ux, stringifyQuery: cx, useNavigate: Is } = __STORYBOOK_ROUTER__;

// global-externals:@storybook/core/theming
var dx = __STORYBOOK_THEMING__, { CacheProvider: fx, ClassNames: mx, Global: Wt, ThemeProvider: rn, background: hx, color: gx, convert: yx, create: bx,
createCache: vx, createGlobal: Ss, createReset: xx, css: Ix, darken: Sx, ensure: ws, ignoreSsrWarning: wx, isPropValid: Ex, jsx: Cx, keyframes: vt,
lighten: _x, styled: x, themes: Tx, typography: kx, useTheme: Oe, withTheme: Es } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/manager-errors
var Px = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__, { Category: Ax, ProviderDoesNotExtendBaseProviderError: Cs, UncaughtManagerError: Mx } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// ../node_modules/react-helmet-async/lib/index.module.js
var oe = Be(nn()), Ks = Be(Ls()), cn = Be(Fs()), Us = Be(Hs());
function ve() {
  return ve = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, ve.apply(this, arguments);
}
a(ve, "a");
function mn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, pn(e, t);
}
a(mn, "s");
function pn(e, t) {
  return pn = Object.setPrototypeOf || function(o, i) {
    return o.__proto__ = i, o;
  }, pn(e, t);
}
a(pn, "c");
function zs(e, t) {
  if (e == null) return {};
  var o, i, n = {}, r = Object.keys(e);
  for (i = 0; i < r.length; i++) t.indexOf(o = r[i]) >= 0 || (n[o] = e[o]);
  return n;
}
a(zs, "u");
var X = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "\
style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, Nd = { rel: ["amphtml", "canonical", "alternate"] }, Fd = { type: ["applicatio\
n/ld+json"] }, Bd = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "\
og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
Rs = Object.keys(X).map(function(e) {
  return X[e];
}), No = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "\
http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, Hd = Object.keys(No).reduce(function(e, t) {
  return e[No[t]] = t, e;
}, {}), $t = /* @__PURE__ */ a(function(e, t) {
  for (var o = e.length - 1; o >= 0; o -= 1) {
    var i = e[o];
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  }
  return null;
}, "T"), zd = /* @__PURE__ */ a(function(e) {
  var t = $t(e, X.TITLE), o = $t(e, "titleTemplate");
  if (Array.isArray(t) && (t = t.join("")), o && t) return o.replace(/%s/g, function() {
    return t;
  });
  var i = $t(e, "defaultTitle");
  return t || i || void 0;
}, "g"), Rd = /* @__PURE__ */ a(function(e) {
  return $t(e, "onChangeClientState") || function() {
  };
}, "b"), sn = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[e] !== void 0;
  }).map(function(o) {
    return o[e];
  }).reduce(function(o, i) {
    return ve({}, o, i);
  }, {});
}, "v"), jd = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[X.BASE] !== void 0;
  }).map(function(o) {
    return o[X.BASE];
  }).reverse().reduce(function(o, i) {
    if (!o.length) for (var n = Object.keys(i), r = 0; r < n.length; r += 1) {
      var l = n[r].toLowerCase();
      if (e.indexOf(l) !== -1 && i[l]) return o.concat(i);
    }
    return o;
  }, []);
}, "A"), ao = /* @__PURE__ */ a(function(e, t, o) {
  var i = {};
  return o.filter(function(n) {
    return !!Array.isArray(n[e]) || (n[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' shou\
ld be of type "Array". Instead found type "' + typeof n[e] + '"'), !1);
  }).map(function(n) {
    return n[e];
  }).reverse().reduce(function(n, r) {
    var l = {};
    r.filter(function(g) {
      for (var h, y = Object.keys(g), f = 0; f < y.length; f += 1) {
        var b = y[f], S = b.toLowerCase();
        t.indexOf(S) === -1 || h === "rel" && g[h].toLowerCase() === "canonical" || S === "rel" && g[S].toLowerCase() === "stylesheet" || (h =
        S), t.indexOf(b) === -1 || b !== "innerHTML" && b !== "cssText" && b !== "itemprop" || (h = b);
      }
      if (!h || !g[h]) return !1;
      var E = g[h].toLowerCase();
      return i[h] || (i[h] = {}), l[h] || (l[h] = {}), !i[h][E] && (l[h][E] = !0, !0);
    }).reverse().forEach(function(g) {
      return n.push(g);
    });
    for (var u = Object.keys(l), c = 0; c < u.length; c += 1) {
      var d = u[c], p = ve({}, i[d], l[d]);
      i[d] = p;
    }
    return n;
  }, []).reverse();
}, "C"), Wd = /* @__PURE__ */ a(function(e, t) {
  if (Array.isArray(e) && e.length) {
    for (var o = 0; o < e.length; o += 1) if (e[o][t]) return !0;
  }
  return !1;
}, "O"), qs = /* @__PURE__ */ a(function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, "S"), an = /* @__PURE__ */ a(function(e, t) {
  return Array.isArray(e) ? e.reduce(function(o, i) {
    return function(n, r) {
      for (var l = Object.keys(n), u = 0; u < l.length; u += 1) if (r[l[u]] && r[l[u]].includes(n[l[u]])) return !0;
      return !1;
    }(i, t) ? o.priority.push(i) : o.default.push(i), o;
  }, { priority: [], default: [] }) : { default: e };
}, "E"), js = /* @__PURE__ */ a(function(e, t) {
  var o;
  return ve({}, e, ((o = {})[t] = void 0, o));
}, "I"), Vd = [X.NOSCRIPT, X.SCRIPT, X.STYLE], ln = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
  /"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w"), Ws = /* @__PURE__ */ a(function(e) {
  return Object.keys(e).reduce(function(t, o) {
    var i = e[o] !== void 0 ? o + '="' + e[o] + '"' : "" + o;
    return t ? t + " " + i : i;
  }, "");
}, "x"), Vs = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = {}), Object.keys(e).reduce(function(o, i) {
    return o[No[i] || i] = e[i], o;
  }, t);
}, "L"), Lo = /* @__PURE__ */ a(function(e, t) {
  return t.map(function(o, i) {
    var n, r = ((n = { key: i })["data-rh"] = !0, n);
    return Object.keys(o).forEach(function(l) {
      var u = No[l] || l;
      u === "innerHTML" || u === "cssText" ? r.dangerouslySetInnerHTML = { __html: o.innerHTML || o.cssText } : r[u] = o[l];
    }), s.createElement(e, r);
  });
}, "j"), Re = /* @__PURE__ */ a(function(e, t, o) {
  switch (e) {
    case X.TITLE:
      return { toComponent: /* @__PURE__ */ a(function() {
        return n = t.titleAttributes, (r = { key: i = t.title })["data-rh"] = !0, l = Vs(n, r), [s.createElement(X.TITLE, l, i)];
        var i, n, r, l;
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r, l) {
          var u = Ws(r), c = qs(n);
          return u ? "<" + i + ' data-rh="true" ' + u + ">" + ln(c, l) + "</" + i + ">" : "<" + i + ' data-rh="true">' + ln(c, l) + "</" + i +
          ">";
        }(e, t.title, t.titleAttributes, o);
      }, "toString") };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: /* @__PURE__ */ a(function() {
        return Vs(t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Ws(t);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ a(function() {
        return Lo(e, t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r) {
          return n.reduce(function(l, u) {
            var c = Object.keys(u).filter(function(g) {
              return !(g === "innerHTML" || g === "cssText");
            }).reduce(function(g, h) {
              var y = u[h] === void 0 ? h : h + '="' + ln(u[h], r) + '"';
              return g ? g + " " + y : y;
            }, ""), d = u.innerHTML || u.cssText || "", p = Vd.indexOf(i) === -1;
            return l + "<" + i + ' data-rh="true" ' + c + (p ? "/>" : ">" + d + "</" + i + ">");
          }, "");
        }(e, t, o);
      }, "toString") };
  }
}, "M"), dn = /* @__PURE__ */ a(function(e) {
  var t = e.baseTag, o = e.bodyAttributes, i = e.encode, n = e.htmlAttributes, r = e.noscriptTags, l = e.styleTags, u = e.title, c = u === void 0 ?
  "" : u, d = e.titleAttributes, p = e.linkTags, g = e.metaTags, h = e.scriptTags, y = { toComponent: /* @__PURE__ */ a(function() {
  }, "toComponent"), toString: /* @__PURE__ */ a(function() {
    return "";
  }, "toString") };
  if (e.prioritizeSeoTags) {
    var f = function(b) {
      var S = b.linkTags, E = b.scriptTags, m = b.encode, v = an(b.metaTags, Bd), I = an(S, Nd), w = an(E, Fd);
      return { priorityMethods: { toComponent: /* @__PURE__ */ a(function() {
        return [].concat(Lo(X.META, v.priority), Lo(X.LINK, I.priority), Lo(X.SCRIPT, w.priority));
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Re(X.META, v.priority, m) + " " + Re(X.LINK, I.priority, m) + " " + Re(X.SCRIPT, w.priority, m);
      }, "toString") }, metaTags: v.default, linkTags: I.default, scriptTags: w.default };
    }(e);
    y = f.priorityMethods, p = f.linkTags, g = f.metaTags, h = f.scriptTags;
  }
  return { priority: y, base: Re(X.BASE, t, i), bodyAttributes: Re("bodyAttributes", o, i), htmlAttributes: Re("htmlAttributes", n, i), link: Re(
  X.LINK, p, i), meta: Re(X.META, g, i), noscript: Re(X.NOSCRIPT, r, i), script: Re(X.SCRIPT, h, i), style: Re(X.STYLE, l, i), title: Re(X.TITLE,
  { title: c, titleAttributes: d }, i) };
}, "k"), Do = [], fn = /* @__PURE__ */ a(function(e, t) {
  var o = this;
  t === void 0 && (t = typeof document < "u"), this.instances = [], this.value = { setHelmet: /* @__PURE__ */ a(function(i) {
    o.context.helmet = i;
  }, "setHelmet"), helmetInstances: { get: /* @__PURE__ */ a(function() {
    return o.canUseDOM ? Do : o.instances;
  }, "get"), add: /* @__PURE__ */ a(function(i) {
    (o.canUseDOM ? Do : o.instances).push(i);
  }, "add"), remove: /* @__PURE__ */ a(function(i) {
    var n = (o.canUseDOM ? Do : o.instances).indexOf(i);
    (o.canUseDOM ? Do : o.instances).splice(n, 1);
  }, "remove") } }, this.context = e, this.canUseDOM = t, t || (e.helmet = dn({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0,
  htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N"), Gs = s.createContext({}), $d = oe.default.shape({ setHelmet: oe.default.func, helmetInstances: oe.default.shape({ get: oe.default.func,
add: oe.default.func, remove: oe.default.func }) }), Kd = typeof document < "u", ct = /* @__PURE__ */ function(e) {
  function t(o) {
    var i;
    return (i = e.call(this, o) || this).helmetData = new fn(i.props.context, t.canUseDOM), i;
  }
  return a(t, "r"), mn(t, e), t.prototype.render = function() {
    return s.createElement(Gs.Provider, { value: this.helmetData.value }, this.props.children);
  }, t;
}(Ne);
ct.canUseDOM = Kd, ct.propTypes = { context: oe.default.shape({ helmet: oe.default.shape() }), children: oe.default.node.isRequired }, ct.defaultProps =
{ context: {} }, ct.displayName = "HelmetProvider";
var Vt = /* @__PURE__ */ a(function(e, t) {
  var o, i = document.head || document.querySelector(X.HEAD), n = i.querySelectorAll(e + "[data-rh]"), r = [].slice.call(n), l = [];
  return t && t.length && t.forEach(function(u) {
    var c = document.createElement(e);
    for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (d === "innerHTML" ? c.innerHTML = u.innerHTML : d === "cssText" ? c.styleSheet ?
    c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText)) : c.setAttribute(d, u[d] === void 0 ? "" : u[d]));
    c.setAttribute("data-rh", "true"), r.some(function(p, g) {
      return o = g, c.isEqualNode(p);
    }) ? r.splice(o, 1) : l.push(c);
  }), r.forEach(function(u) {
    return u.parentNode.removeChild(u);
  }), l.forEach(function(u) {
    return i.appendChild(u);
  }), { oldTags: r, newTags: l };
}, "Y"), un = /* @__PURE__ */ a(function(e, t) {
  var o = document.getElementsByTagName(e)[0];
  if (o) {
    for (var i = o.getAttribute("data-rh"), n = i ? i.split(",") : [], r = [].concat(n), l = Object.keys(t), u = 0; u < l.length; u += 1) {
      var c = l[u], d = t[c] || "";
      o.getAttribute(c) !== d && o.setAttribute(c, d), n.indexOf(c) === -1 && n.push(c);
      var p = r.indexOf(c);
      p !== -1 && r.splice(p, 1);
    }
    for (var g = r.length - 1; g >= 0; g -= 1) o.removeAttribute(r[g]);
    n.length === r.length ? o.removeAttribute("data-rh") : o.getAttribute("data-rh") !== l.join(",") && o.setAttribute("data-rh", l.join(","));
  }
}, "B"), $s = /* @__PURE__ */ a(function(e, t) {
  var o = e.baseTag, i = e.htmlAttributes, n = e.linkTags, r = e.metaTags, l = e.noscriptTags, u = e.onChangeClientState, c = e.scriptTags, d = e.
  styleTags, p = e.title, g = e.titleAttributes;
  un(X.BODY, e.bodyAttributes), un(X.HTML, i), function(b, S) {
    b !== void 0 && document.title !== b && (document.title = qs(b)), un(X.TITLE, S);
  }(p, g);
  var h = { baseTag: Vt(X.BASE, o), linkTags: Vt(X.LINK, n), metaTags: Vt(X.META, r), noscriptTags: Vt(X.NOSCRIPT, l), scriptTags: Vt(X.SCRIPT,
  c), styleTags: Vt(X.STYLE, d) }, y = {}, f = {};
  Object.keys(h).forEach(function(b) {
    var S = h[b], E = S.newTags, m = S.oldTags;
    E.length && (y[b] = E), m.length && (f[b] = h[b].oldTags);
  }), t && t(), u(e, y, f);
}, "K"), lo = null, Fo = /* @__PURE__ */ function(e) {
  function t() {
    for (var i, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
    return (i = e.call.apply(e, [this].concat(r)) || this).rendered = !1, i;
  }
  a(t, "e"), mn(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Us.default)(i, this.props);
  }, o.componentDidUpdate = function() {
    this.emitChange();
  }, o.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, o.emitChange = function() {
    var i, n, r = this.props.context, l = r.setHelmet, u = null, c = (i = r.helmetInstances.get().map(function(d) {
      var p = ve({}, d.props);
      return delete p.context, p;
    }), { baseTag: jd(["href"], i), bodyAttributes: sn("bodyAttributes", i), defer: $t(i, "defer"), encode: $t(i, "encodeSpecialCharacters"),
    htmlAttributes: sn("htmlAttributes", i), linkTags: ao(X.LINK, ["rel", "href"], i), metaTags: ao(X.META, ["name", "charset", "http-equiv",
    "property", "itemprop"], i), noscriptTags: ao(X.NOSCRIPT, ["innerHTML"], i), onChangeClientState: Rd(i), scriptTags: ao(X.SCRIPT, ["src",
    "innerHTML"], i), styleTags: ao(X.STYLE, ["cssText"], i), title: zd(i), titleAttributes: sn("titleAttributes", i), prioritizeSeoTags: Wd(
    i, "prioritizeSeoTags") });
    ct.canUseDOM ? (n = c, lo && cancelAnimationFrame(lo), n.defer ? lo = requestAnimationFrame(function() {
      $s(n, function() {
        lo = null;
      });
    }) : ($s(n), lo = null)) : dn && (u = dn(c)), l(u);
  }, o.init = function() {
    this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange());
  }, o.render = function() {
    return this.init(), null;
  }, t;
}(Ne);
Fo.propTypes = { context: $d.isRequired }, Fo.displayName = "HelmetDispatcher";
var Ud = ["children"], qd = ["children"], uo = /* @__PURE__ */ function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  a(t, "r"), mn(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Ks.default)(js(this.props, "helmetData"), js(i, "helmetData"));
  }, o.mapNestedChildrenToProps = function(i, n) {
    if (!n) return null;
    switch (i.type) {
      case X.SCRIPT:
      case X.NOSCRIPT:
        return { innerHTML: n };
      case X.STYLE:
        return { cssText: n };
      default:
        throw new Error("<" + i.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o.flattenArrayTypeChildren = function(i) {
    var n, r = i.child, l = i.arrayTypeChildren;
    return ve({}, l, ((n = {})[r.type] = [].concat(l[r.type] || [], [ve({}, i.newChildProps, this.mapNestedChildrenToProps(r, i.nestedChildren))]),
    n));
  }, o.mapObjectTypeChildren = function(i) {
    var n, r, l = i.child, u = i.newProps, c = i.newChildProps, d = i.nestedChildren;
    switch (l.type) {
      case X.TITLE:
        return ve({}, u, ((n = {})[l.type] = d, n.titleAttributes = ve({}, c), n));
      case X.BODY:
        return ve({}, u, { bodyAttributes: ve({}, c) });
      case X.HTML:
        return ve({}, u, { htmlAttributes: ve({}, c) });
      default:
        return ve({}, u, ((r = {})[l.type] = ve({}, c), r));
    }
  }, o.mapArrayTypeChildrenToProps = function(i, n) {
    var r = ve({}, n);
    return Object.keys(i).forEach(function(l) {
      var u;
      r = ve({}, r, ((u = {})[l] = i[l], u));
    }), r;
  }, o.warnOnInvalidChildren = function(i, n) {
    return (0, cn.default)(Rs.some(function(r) {
      return i.type === r;
    }), typeof i.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to o\
ur API for more information." : "Only elements types " + Rs.join(", ") + " are allowed. Helmet does not support rendering <" + i.type + "> e\
lements. Refer to our API for more information."), (0, cn.default)(!n || typeof n == "string" || Array.isArray(n) && !n.some(function(r) {
      return typeof r != "string";
    }), "Helmet expects a string as a child of <" + i.type + ">. Did you forget to wrap your children in braces? ( <" + i.type + ">{``}</" +
    i.type + "> ) Refer to our API for more information."), !0;
  }, o.mapChildrenToProps = function(i, n) {
    var r = this, l = {};
    return s.Children.forEach(i, function(u) {
      if (u && u.props) {
        var c = u.props, d = c.children, p = zs(c, Ud), g = Object.keys(p).reduce(function(y, f) {
          return y[Hd[f] || f] = p[f], y;
        }, {}), h = u.type;
        switch (typeof h == "symbol" ? h = h.toString() : r.warnOnInvalidChildren(u, d), h) {
          case X.FRAGMENT:
            n = r.mapChildrenToProps(d, n);
            break;
          case X.LINK:
          case X.META:
          case X.NOSCRIPT:
          case X.SCRIPT:
          case X.STYLE:
            l = r.flattenArrayTypeChildren({ child: u, arrayTypeChildren: l, newChildProps: g, nestedChildren: d });
            break;
          default:
            n = r.mapObjectTypeChildren({ child: u, newProps: n, newChildProps: g, nestedChildren: d });
        }
      }
    }), this.mapArrayTypeChildrenToProps(l, n);
  }, o.render = function() {
    var i = this.props, n = i.children, r = zs(i, qd), l = ve({}, r), u = r.helmetData;
    return n && (l = this.mapChildrenToProps(n, l)), !u || u instanceof fn || (u = new fn(u.context, u.instances)), u ? /* @__PURE__ */ s.createElement(
    Fo, ve({}, l, { context: u.value, helmetData: void 0 })) : /* @__PURE__ */ s.createElement(Gs.Consumer, null, function(c) {
      return s.createElement(Fo, ve({}, l, { context: c }));
    });
  }, t;
}(Ne);
uo.propTypes = { base: oe.default.object, bodyAttributes: oe.default.object, children: oe.default.oneOfType([oe.default.arrayOf(oe.default.node),
oe.default.node]), defaultTitle: oe.default.string, defer: oe.default.bool, encodeSpecialCharacters: oe.default.bool, htmlAttributes: oe.default.
object, link: oe.default.arrayOf(oe.default.object), meta: oe.default.arrayOf(oe.default.object), noscript: oe.default.arrayOf(oe.default.object),
onChangeClientState: oe.default.func, script: oe.default.arrayOf(oe.default.object), style: oe.default.arrayOf(oe.default.object), title: oe.default.
string, titleAttributes: oe.default.object, titleTemplate: oe.default.string, prioritizeSeoTags: oe.default.bool, helmetData: oe.default.object },
uo.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }, uo.displayName = "Helmet";

// src/manager/constants.ts
var rt = "@media (min-width: 600px)";

// src/manager/components/hooks/useMedia.tsx
function Ys(e) {
  let t = /* @__PURE__ */ a((r) => typeof window < "u" ? window.matchMedia(r).matches : !1, "getMatches"), [o, i] = $(t(e));
  function n() {
    i(t(e));
  }
  return a(n, "handleChange"), R(() => {
    let r = window.matchMedia(e);
    return n(), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, [e]), o;
}
a(Ys, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var Qs = zt({
  isMobileMenuOpen: !1,
  setMobileMenuOpen: /* @__PURE__ */ a(() => {
  }, "setMobileMenuOpen"),
  isMobileAboutOpen: !1,
  setMobileAboutOpen: /* @__PURE__ */ a(() => {
  }, "setMobileAboutOpen"),
  isMobilePanelOpen: !1,
  setMobilePanelOpen: /* @__PURE__ */ a(() => {
  }, "setMobilePanelOpen"),
  isDesktop: !1,
  isMobile: !1
}), Xs = /* @__PURE__ */ a(({ children: e }) => {
  let [t, o] = $(!1), [i, n] = $(!1), [r, l] = $(!1), u = Ys(`(min-width: ${600}px)`), c = !u, d = K(
    () => ({
      isMobileMenuOpen: t,
      setMobileMenuOpen: o,
      isMobileAboutOpen: i,
      setMobileAboutOpen: n,
      isMobilePanelOpen: r,
      setMobilePanelOpen: l,
      isDesktop: u,
      isMobile: c
    }),
    [
      t,
      o,
      i,
      n,
      r,
      l,
      u,
      c
    ]
  );
  return /* @__PURE__ */ s.createElement(Qs.Provider, { value: d }, e);
}, "LayoutProvider"), he = /* @__PURE__ */ a(() => Oo(Qs), "useLayout");

// global-externals:@storybook/core/components
var nI = __STORYBOOK_COMPONENTS__, { A: iI, ActionBar: sI, AddonPanel: aI, Badge: Bo, Bar: lI, Blockquote: uI, Button: fe, ClipboardCode: cI,
Code: pI, DL: dI, Div: fI, DocumentWrapper: mI, EmptyTabContent: Zs, ErrorFormatter: Js, FlexBar: hI, Form: Ho, H1: gI, H2: yI, H3: bI, H4: vI,
H5: xI, H6: II, HR: SI, IconButton: ee, IconButtonSkeleton: wI, Icons: ea, Img: EI, LI: CI, Link: Ae, ListItem: Gd, Loader: zo, Modal: xt, OL: _I,
P: TI, Placeholder: kI, Pre: OI, ResetWrapper: PI, ScrollArea: Ro, Separator: Kt, Spaced: nt, Span: AI, StorybookIcon: MI, StorybookLogo: jo,
Symbols: DI, SyntaxHighlighter: LI, TT: NI, TabBar: Wo, TabButton: Vo, TabWrapper: FI, Table: BI, Tabs: ta, TabsState: HI, TooltipLinkList: pt,
TooltipMessage: zI, TooltipNote: It, UL: RI, WithTooltip: _e, WithTooltipPure: jI, Zoom: oa, codeCommon: WI, components: VI, createCopyToClipboardFunction: $I,
getStoryHref: Ut, icons: KI, interleaveSeparators: UI, nameSpaceClassNames: qI, resetComponents: GI, withReset: YI } = __STORYBOOK_COMPONENTS__;

// global-externals:@storybook/icons
var XI = __STORYBOOK_ICONS__, { AccessibilityAltIcon: ZI, AccessibilityIcon: JI, AddIcon: eS, AdminIcon: tS, AlertAltIcon: oS, AlertIcon: $o,
AlignLeftIcon: rS, AlignRightIcon: nS, AppleIcon: iS, ArrowBottomLeftIcon: sS, ArrowBottomRightIcon: aS, ArrowDownIcon: lS, ArrowLeftIcon: ra,
ArrowRightIcon: uS, ArrowSolidDownIcon: cS, ArrowSolidLeftIcon: pS, ArrowSolidRightIcon: dS, ArrowSolidUpIcon: fS, ArrowTopLeftIcon: mS, ArrowTopRightIcon: hS,
ArrowUpIcon: gS, AzureDevOpsIcon: yS, BackIcon: bS, BasketIcon: vS, BatchAcceptIcon: xS, BatchDenyIcon: IS, BeakerIcon: SS, BellIcon: wS, BitbucketIcon: ES,
BoldIcon: CS, BookIcon: _S, BookmarkHollowIcon: TS, BookmarkIcon: kS, BottomBarIcon: Ko, BottomBarToggleIcon: na, BoxIcon: OS, BranchIcon: PS,
BrowserIcon: AS, ButtonIcon: MS, CPUIcon: DS, CalendarIcon: LS, CameraIcon: NS, CategoryIcon: FS, CertificateIcon: BS, ChangedIcon: HS, ChatIcon: zS,
CheckIcon: je, ChevronDownIcon: qt, ChevronLeftIcon: RS, ChevronRightIcon: ia, ChevronSmallDownIcon: jS, ChevronSmallLeftIcon: WS, ChevronSmallRightIcon: VS,
ChevronSmallUpIcon: sa, ChevronUpIcon: $S, ChromaticIcon: KS, ChromeIcon: US, CircleHollowIcon: qS, CircleIcon: aa, ClearIcon: GS, CloseAltIcon: Uo,
CloseIcon: Ge, CloudHollowIcon: YS, CloudIcon: QS, CogIcon: hn, CollapseIcon: la, CommandIcon: XS, CommentAddIcon: ZS, CommentIcon: JS, CommentsIcon: ew,
CommitIcon: tw, CompassIcon: ow, ComponentDrivenIcon: rw, ComponentIcon: gn, ContrastIcon: nw, ControlsIcon: iw, CopyIcon: sw, CreditIcon: aw,
CrossIcon: lw, DashboardIcon: uw, DatabaseIcon: cw, DeleteIcon: pw, DiamondIcon: dw, DirectionIcon: fw, DiscordIcon: mw, DocChartIcon: hw, DocListIcon: gw,
DocumentIcon: Gt, DownloadIcon: yw, DragIcon: bw, EditIcon: vw, EllipsisIcon: ua, EmailIcon: xw, ExpandAltIcon: ca, ExpandIcon: pa, EyeCloseIcon: da,
EyeIcon: qo, FaceHappyIcon: Iw, FaceNeutralIcon: Sw, FaceSadIcon: ww, FacebookIcon: Ew, FailedIcon: Cw, FastForwardIcon: _w, FigmaIcon: Tw, FilterIcon: fa,
FlagIcon: kw, FolderIcon: Ow, FormIcon: Pw, GDriveIcon: Aw, GithubIcon: Go, GitlabIcon: Mw, GlobeIcon: yn, GoogleIcon: Dw, GraphBarIcon: Lw,
GraphLineIcon: Nw, GraphqlIcon: Fw, GridAltIcon: Bw, GridIcon: Hw, GrowIcon: zw, HeartHollowIcon: Rw, HeartIcon: ma, HomeIcon: jw, HourglassIcon: Ww,
InfoIcon: ha, ItalicIcon: Vw, JumpToIcon: $w, KeyIcon: Kw, LightningIcon: ga, LightningOffIcon: Uw, LinkBrokenIcon: qw, LinkIcon: ya, LinkedinIcon: Gw,
LinuxIcon: Yw, ListOrderedIcon: Qw, ListUnorderedIcon: Xw, LocationIcon: Zw, LockIcon: Yo, MarkdownIcon: Jw, MarkupIcon: ba, MediumIcon: eE,
MemoryIcon: tE, MenuIcon: Qo, MergeIcon: oE, MirrorIcon: rE, MobileIcon: nE, MoonIcon: iE, NutIcon: sE, OutboxIcon: aE, OutlineIcon: lE, PaintBrushIcon: uE,
PaperClipIcon: cE, ParagraphIcon: pE, PassedIcon: dE, PhoneIcon: fE, PhotoDragIcon: mE, PhotoIcon: hE, PinAltIcon: gE, PinIcon: yE, PlayAllHollowIcon: va,
PlayBackIcon: bE, PlayHollowIcon: xa, PlayIcon: vE, PlayNextIcon: xE, PlusIcon: Ia, PointerDefaultIcon: IE, PointerHandIcon: SE, PowerIcon: wE,
PrintIcon: EE, ProceedIcon: CE, ProfileIcon: _E, PullRequestIcon: TE, QuestionIcon: kE, RSSIcon: OE, RedirectIcon: PE, ReduxIcon: AE, RefreshIcon: ME,
ReplyIcon: DE, RepoIcon: LE, RequestChangeIcon: NE, RewindIcon: FE, RulerIcon: BE, SaveIcon: HE, SearchIcon: Xo, ShareAltIcon: it, ShareIcon: zE,
ShieldIcon: RE, SideBySideIcon: jE, SidebarAltIcon: Zo, SidebarAltToggleIcon: WE, SidebarIcon: VE, SidebarToggleIcon: $E, SpeakerIcon: KE, StackedIcon: UE,
StarHollowIcon: qE, StarIcon: GE, StatusFailIcon: Sa, StatusPassIcon: wa, StatusWarnIcon: Ea, StickerIcon: YE, StopAltHollowIcon: Ca, StopAltIcon: QE,
StopIcon: XE, StorybookIcon: _a, StructureIcon: ZE, SubtractIcon: JE, SunIcon: eC, SupportIcon: tC, SwitchAltIcon: oC, SyncIcon: dt, TabletIcon: rC,
ThumbsUpIcon: nC, TimeIcon: Ta, TimerIcon: iC, TransferIcon: sC, TrashIcon: ka, TwitterIcon: aC, TypeIcon: lC, UbuntuIcon: uC, UndoIcon: cC,
UnfoldIcon: pC, UnlockIcon: dC, UnpinIcon: fC, UploadIcon: mC, UserAddIcon: hC, UserAltIcon: gC, UserIcon: yC, UsersIcon: bC, VSCodeIcon: vC,
VerifiedIcon: xC, VideoIcon: IC, WandIcon: Oa, WatchIcon: SC, WindowsIcon: wC, WrenchIcon: EC, XIcon: CC, YoutubeIcon: _C, ZoomIcon: Pa, ZoomOutIcon: Aa,
ZoomResetIcon: Ma, iconList: TC } = __STORYBOOK_ICONS__;

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function q() {
  return q = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, q.apply(null, arguments);
}
a(q, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Da(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(Da, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function ft(e, t) {
  return ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, ft(e, t);
}
a(ft, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Yt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ft(e, t);
}
a(Yt, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function Jo(e) {
  return Jo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Jo(e);
}
a(Jo, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function La(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
a(La, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function bn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bn = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(bn, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function Na(e, t, o) {
  if (bn()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, t);
  var n = new (e.bind.apply(e, i))();
  return o && ft(n, o.prototype), n;
}
a(Na, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function er(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return er = /* @__PURE__ */ a(function(i) {
    if (i === null || !La(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(i)) return t.get(i);
      t.set(i, n);
    }
    function n() {
      return Na(i, arguments, Jo(this).constructor);
    }
    return a(n, "Wrapper"), n.prototype = Object.create(i.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ft(n, i);
  }, "_wrapNativeSuper"), er(e);
}
a(er, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var Xt = /* @__PURE__ */ function(e) {
  Yt(t, e);
  function t(o) {
    var i;
    if (1)
      i = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o +
      " for more information.") || this;
    else
      for (var n, r, l; l < n; l++)
        ;
    return Da(i);
  }
  return a(t, "PolishedError"), t;
}(/* @__PURE__ */ er(Error));
function vn(e) {
  return Math.round(e * 255);
}
a(vn, "colorToInt");
function Yd(e, t, o) {
  return vn(e) + "," + vn(t) + "," + vn(o);
}
a(Yd, "convertToInt");
function Fa(e, t, o, i) {
  if (i === void 0 && (i = Yd), t === 0)
    return i(o, o, o);
  var n = (e % 360 + 360) % 360 / 60, r = (1 - Math.abs(2 * o - 1)) * t, l = r * (1 - Math.abs(n % 2 - 1)), u = 0, c = 0, d = 0;
  n >= 0 && n < 1 ? (u = r, c = l) : n >= 1 && n < 2 ? (u = l, c = r) : n >= 2 && n < 3 ? (c = r, d = l) : n >= 3 && n < 4 ? (c = l, d = r) :
  n >= 4 && n < 5 ? (u = l, d = r) : n >= 5 && n < 6 && (u = r, d = l);
  var p = o - r / 2, g = u + p, h = c + p, y = d + p;
  return i(g, h, y);
}
a(Fa, "hslToRgb");
var Ba = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Qd(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Ba[t] ? "#" + Ba[t] : e;
}
a(Qd, "nameToHex");
var Xd = /^#[a-fA-F0-9]{6}$/, Zd = /^#[a-fA-F0-9]{8}$/, Jd = /^#[a-fA-F0-9]{3}$/, ef = /^#[a-fA-F0-9]{4}$/, xn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
tf = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, of = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
rf = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ra(e) {
  if (typeof e != "string")
    throw new Xt(3);
  var t = Qd(e);
  if (t.match(Xd))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Zd)) {
    var o = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: o
    };
  }
  if (t.match(Jd))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(ef)) {
    var i = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: i
    };
  }
  var n = xn.exec(t);
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10)
    };
  var r = tf.exec(t.substring(0, 50));
  if (r)
    return {
      red: parseInt("" + r[1], 10),
      green: parseInt("" + r[2], 10),
      blue: parseInt("" + r[3], 10),
      alpha: parseFloat("" + r[4]) > 1 ? parseFloat("" + r[4]) / 100 : parseFloat("" + r[4])
    };
  var l = of.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, d = parseInt("" + l[3], 10) / 100, p = "rgb(" + Fa(u, c, d) + ")", g = xn.
    exec(p);
    if (!g)
      throw new Xt(4, t, p);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10)
    };
  }
  var h = rf.exec(t.substring(0, 50));
  if (h) {
    var y = parseInt("" + h[1], 10), f = parseInt("" + h[2], 10) / 100, b = parseInt("" + h[3], 10) / 100, S = "rgb(" + Fa(y, f, b) + ")", E = xn.
    exec(S);
    if (!E)
      throw new Xt(4, t, S);
    return {
      red: parseInt("" + E[1], 10),
      green: parseInt("" + E[2], 10),
      blue: parseInt("" + E[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new Xt(5);
}
a(Ra, "parseToRgb");
var nf = /* @__PURE__ */ a(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue"), Ha = nf;
function Qt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a(Qt, "numberToHex");
function za(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return Ha("#" + Qt(e) + Qt(t) + Qt(o));
  if (typeof e == "object" && t === void 0 && o === void 0)
    return Ha("#" + Qt(e.red) + Qt(e.green) + Qt(e.blue));
  throw new Xt(6);
}
a(za, "rgb");
function In(e, t, o, i) {
  if (typeof e == "string" && typeof t == "number") {
    var n = Ra(e);
    return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
      return i >= 1 ? za(e, t, o) : "rgba(" + e + "," + t + "," + o + "," + i + ")";
    if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
      return e.alpha >= 1 ? za(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Xt(7);
}
a(In, "rgba");
function ja(e, t, o) {
  return /* @__PURE__ */ a(function() {
    var n = o.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : ja(e, t, n);
  }, "fn");
}
a(ja, "curried");
function sf(e) {
  return ja(e, e.length, []);
}
a(sf, "curry");
function af(e, t, o) {
  return Math.max(e, Math.min(t, o));
}
a(af, "guard");
function lf(e, t) {
  if (t === "transparent") return t;
  var o = Ra(t), i = typeof o.alpha == "number" ? o.alpha : 1, n = q({}, o, {
    alpha: af(0, 1, +(i * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return In(n);
}
a(lf, "transparentize");
var uf = /* @__PURE__ */ sf(lf), ye = uf;

// src/manager/components/notifications/NotificationItem.tsx
var cf = vt({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
}), pf = vt({
  "0%": {
    width: "0%"
  },
  "100%": {
    width: "100%"
  }
}), Wa = x.div(
  ({ theme: e }) => ({
    position: "relative",
    display: "flex",
    border: `1px solid ${e.appBorderColor}`,
    padding: "12px 6px 12px 12px",
    borderRadius: e.appBorderRadius + 1,
    alignItems: "center",
    animation: `${cf} 500ms`,
    background: e.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1)",
    color: e.color.inverseText,
    textDecoration: "none",
    overflow: "hidden",
    [rt]: {
      boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${e.background.app}`
    }
  }),
  ({ duration: e, theme: t }) => e && {
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      background: t.color.secondary,
      animation: `${pf} ${e}ms linear forwards reverse`
    }
  }
), Va = x(Wa)({
  cursor: "pointer",
  border: "none",
  outline: "none",
  textAlign: "left",
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0\
.1)"
  }
}), df = Va.withComponent("div"), ff = Va.withComponent(Po), mf = x.div(() => ({
  display: "flex",
  marginRight: 10,
  alignItems: "center",
  svg: {
    width: 16,
    height: 16
  }
})), hf = x.div(({ theme: e }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: e.base === "dark" ? e.color.mediumdark : e.color.mediumlight
})), gf = x.div(({ theme: e, hasIcon: t }) => ({
  height: "100%",
  alignItems: "center",
  whiteSpace: "balance",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: e.typography.size.s1,
  lineHeight: "16px",
  fontWeight: e.typography.weight.bold
})), yf = x.div(({ theme: e }) => ({
  color: ye(0.25, e.color.inverseText),
  fontSize: e.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2,
  whiteSpace: "balance"
})), Sn = /* @__PURE__ */ a(({
  icon: e,
  content: { headline: t, subHeadline: o }
}) => {
  let i = Oe(), n = i.base === "dark" ? i.color.mediumdark : i.color.mediumlight;
  return /* @__PURE__ */ s.createElement(s.Fragment, null, !e || /* @__PURE__ */ s.createElement(mf, null, s.isValidElement(e) ? e : typeof e ==
  "object" && "name" in e && /* @__PURE__ */ s.createElement(ea, { icon: e.name, color: e.color || n })), /* @__PURE__ */ s.createElement(hf,
  null, /* @__PURE__ */ s.createElement(gf, { title: t, hasIcon: !!e }, t), o && /* @__PURE__ */ s.createElement(yf, null, o)));
}, "ItemContent"), bf = x(ee)(({ theme: e }) => ({
  width: 28,
  alignSelf: "center",
  marginTop: 0,
  color: e.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
})), wn = /* @__PURE__ */ a(({ onDismiss: e }) => /* @__PURE__ */ s.createElement(
  bf,
  {
    title: "Dismiss notification",
    onClick: (t) => {
      t.preventDefault(), t.stopPropagation(), e();
    }
  },
  /* @__PURE__ */ s.createElement(Uo, { size: 12 })
), "DismissNotificationItem"), y1 = x.div({
  height: 48
}), vf = /* @__PURE__ */ a(({
  notification: { content: e, duration: t, link: o, onClear: i, onClick: n, id: r, icon: l },
  onDismissNotification: u,
  zIndex: c
}) => {
  let d = A(() => {
    u(r), i && i({ dismissed: !1, timeout: !0 });
  }, [r, u, i]), p = U(null);
  R(() => {
    if (t)
      return p.current = setTimeout(d, t), () => clearTimeout(p.current);
  }, [t, d]);
  let g = A(() => {
    clearTimeout(p.current), u(r), i && i({ dismissed: !0, timeout: !1 });
  }, [r, u, i]);
  return o ? /* @__PURE__ */ s.createElement(ff, { to: o, duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(Sn, { icon: l,
  content: e }), /* @__PURE__ */ s.createElement(wn, { onDismiss: g })) : n ? /* @__PURE__ */ s.createElement(
    df,
    {
      duration: t,
      onClick: () => n({ onDismiss: g }),
      style: { zIndex: c }
    },
    /* @__PURE__ */ s.createElement(Sn, { icon: l, content: e }),
    /* @__PURE__ */ s.createElement(wn, { onDismiss: g })
  ) : /* @__PURE__ */ s.createElement(Wa, { duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(Sn, { icon: l, content: e }),
  /* @__PURE__ */ s.createElement(wn, { onDismiss: g }));
}, "NotificationItem"), $a = vf;

// src/manager/components/notifications/NotificationList.tsx
var tr = /* @__PURE__ */ a(({
  notifications: e,
  clearNotification: t
}) => {
  let { isMobile: o } = he();
  return /* @__PURE__ */ s.createElement(xf, { isMobile: o }, e && e.map((i, n) => /* @__PURE__ */ s.createElement(
    $a,
    {
      key: i.id,
      onDismissNotification: (r) => t(r),
      notification: i,
      zIndex: e.length - n
    }
  )));
}, "NotificationList"), xf = x.div(
  {
    zIndex: 200,
    "> * + *": {
      marginTop: 12
    },
    "&:empty": {
      display: "none"
    }
  },
  ({ isMobile: e }) => e && {
    position: "fixed",
    bottom: 40,
    margin: 20
  }
);

// src/manager/container/Notifications.tsx
var If = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  notifications: e.notifications,
  clearNotification: t.clearNotification
}), "mapper"), Ka = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(me, { filter: If }, (t) => /* @__PURE__ */ s.createElement(tr, {
...e, ...t })), "Notifications");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var Sf = x.div(({ theme: e }) => ({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "42vh",
  zIndex: 11,
  overflow: "hidden"
})), Ua = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(Sf, null, e), "MobileAddonsDrawer");

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Te(e, t) {
  if (e == null) return {};
  var o = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) >= 0) continue;
    o[i] = e[i];
  }
  return o;
}
a(Te, "_objectWithoutPropertiesLoose");

// global-externals:react-dom
var co = __REACT_DOM__, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: B1, createPortal: H1, createRoot: z1, findDOMNode: R1, flushSync: po,
hydrate: j1, hydrateRoot: W1, render: V1, unmountComponentAtNode: $1, unstable_batchedUpdates: K1, unstable_renderSubtreeIntoContainer: U1, version: q1 } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var En = {
  disabled: !1
};

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
var Cn = s.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var qa = /* @__PURE__ */ a(function(t) {
  return t.scrollTop;
}, "forceReflow");

// ../node_modules/react-transition-group/esm/Transition.js
var fo = "unmounted", St = "exited", wt = "entering", Jt = "entered", _n = "exiting", st = /* @__PURE__ */ function(e) {
  Yt(t, e);
  function t(i, n) {
    var r;
    r = e.call(this, i, n) || this;
    var l = n, u = l && !l.isMounting ? i.enter : i.appear, c;
    return r.appearStatus = null, i.in ? u ? (c = St, r.appearStatus = wt) : c = Jt : i.unmountOnExit || i.mountOnEnter ? c = fo : c = St, r.
    state = {
      status: c
    }, r.nextCallback = null, r;
  }
  a(t, "Transition"), t.getDerivedStateFromProps = /* @__PURE__ */ a(function(n, r) {
    var l = n.in;
    return l && r.status === fo ? {
      status: St
    } : null;
  }, "getDerivedStateFromProps");
  var o = t.prototype;
  return o.componentDidMount = /* @__PURE__ */ a(function() {
    this.updateStatus(!0, this.appearStatus);
  }, "componentDidMount"), o.componentDidUpdate = /* @__PURE__ */ a(function(n) {
    var r = null;
    if (n !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== wt && l !== Jt && (r = wt) : (l === wt || l === Jt) && (r = _n);
    }
    this.updateStatus(!1, r);
  }, "componentDidUpdate"), o.componentWillUnmount = /* @__PURE__ */ a(function() {
    this.cancelNextCallback();
  }, "componentWillUnmount"), o.getTimeouts = /* @__PURE__ */ a(function() {
    var n = this.props.timeout, r, l, u;
    return r = l = u = n, n != null && typeof n != "number" && (r = n.exit, l = n.enter, u = n.appear !== void 0 ? n.appear : l), {
      exit: r,
      enter: l,
      appear: u
    };
  }, "getTimeouts"), o.updateStatus = /* @__PURE__ */ a(function(n, r) {
    if (n === void 0 && (n = !1), r !== null)
      if (this.cancelNextCallback(), r === wt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : co.findDOMNode(this);
          l && qa(l);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === St && this.setState({
      status: fo
    });
  }, "updateStatus"), o.performEnter = /* @__PURE__ */ a(function(n) {
    var r = this, l = this.props.enter, u = this.context ? this.context.isMounting : n, c = this.props.nodeRef ? [u] : [co.findDOMNode(this),
    u], d = c[0], p = c[1], g = this.getTimeouts(), h = u ? g.appear : g.enter;
    if (!n && !l || En.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        r.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, p), this.safeSetState({
      status: wt
    }, function() {
      r.props.onEntering(d, p), r.onTransitionEnd(h, function() {
        r.safeSetState({
          status: Jt
        }, function() {
          r.props.onEntered(d, p);
        });
      });
    });
  }, "performEnter"), o.performExit = /* @__PURE__ */ a(function() {
    var n = this, r = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : co.findDOMNode(this);
    if (!r || En.disabled) {
      this.safeSetState({
        status: St
      }, function() {
        n.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: _n
    }, function() {
      n.props.onExiting(u), n.onTransitionEnd(l.exit, function() {
        n.safeSetState({
          status: St
        }, function() {
          n.props.onExited(u);
        });
      });
    });
  }, "performExit"), o.cancelNextCallback = /* @__PURE__ */ a(function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, "cancelNextCallback"), o.safeSetState = /* @__PURE__ */ a(function(n, r) {
    r = this.setNextCallback(r), this.setState(n, r);
  }, "safeSetState"), o.setNextCallback = /* @__PURE__ */ a(function(n) {
    var r = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, r.nextCallback = null, n(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, "setNextCallback"), o.onTransitionEnd = /* @__PURE__ */ a(function(n, r) {
    this.setNextCallback(r);
    var l = this.props.nodeRef ? this.props.nodeRef.current : co.findDOMNode(this), u = n == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], d = c[0], p = c[1];
      this.props.addEndListener(d, p);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, "onTransitionEnd"), o.render = /* @__PURE__ */ a(function() {
    var n = this.state.status;
    if (n === fo)
      return null;
    var r = this.props, l = r.children, u = r.in, c = r.mountOnEnter, d = r.unmountOnExit, p = r.appear, g = r.enter, h = r.exit, y = r.timeout,
    f = r.addEndListener, b = r.onEnter, S = r.onEntering, E = r.onEntered, m = r.onExit, v = r.onExiting, I = r.onExited, w = r.nodeRef, k = Te(
    r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "\
onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ s.createElement(Cn.Provider, {
        value: null
      }, typeof l == "function" ? l(n, k) : s.cloneElement(s.Children.only(l), k))
    );
  }, "render"), t;
}(s.Component);
st.contextType = Cn;
st.propTypes = {};
function Zt() {
}
a(Zt, "noop");
st.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Zt,
  onEntering: Zt,
  onEntered: Zt,
  onExit: Zt,
  onExiting: Zt,
  onExited: Zt
};
st.UNMOUNTED = fo;
st.EXITED = St;
st.ENTERING = wt;
st.ENTERED = Jt;
st.EXITING = _n;
var Et = st;

// src/manager/components/upgrade/UpgradeBlock.tsx
var or = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => {
  let t = ne(), [o, i] = $("npm");
  return /* @__PURE__ */ s.createElement(wf, null, /* @__PURE__ */ s.createElement("strong", null, "You are on Storybook ", t.getCurrentVersion().
  version), /* @__PURE__ */ s.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ s.
  createElement(Ef, null, /* @__PURE__ */ s.createElement(Tn, { active: o === "npm", onClick: () => i("npm") }, "npm"), /* @__PURE__ */ s.createElement(
  Tn, { active: o === "yarn", onClick: () => i("yarn") }, "yarn"), /* @__PURE__ */ s.createElement(Tn, { active: o === "pnpm", onClick: () => i(
  "pnpm") }, "pnpm")), /* @__PURE__ */ s.createElement(Cf, null, o === "npm" ? "npx storybook@latest upgrade" : `${o} dlx storybook@latest u\
pgrade`), e && // eslint-disable-next-line jsx-a11y/anchor-is-valid
  /* @__PURE__ */ s.createElement(Ae, { onClick: e }, "See what's new in Storybook"));
}, "UpgradeBlock"), wf = x.div(({ theme: e }) => ({
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: e.appBorderColor,
  fontSize: e.typography.size.s2,
  width: "100%",
  [rt]: {
    maxWidth: 400
  }
})), Ef = x.div({
  display: "flex",
  gap: 2
}), Cf = x.pre(({ theme: e }) => ({
  background: e.base === "light" ? "rgba(0, 0, 0, 0.05)" : e.appBorderColor,
  fontSize: e.typography.size.s2 - 1,
  margin: "4px 0 16px"
})), Tn = x.button(({ theme: e, active: t }) => ({
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: e.color.defaultText,
  fontSize: e.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: t ? e.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/manager/components/mobile/about/MobileAbout.tsx
var Qa = /* @__PURE__ */ a(() => {
  let { isMobileAboutOpen: e, setMobileAboutOpen: t } = he(), o = U(null);
  return /* @__PURE__ */ s.createElement(
    Et,
    {
      nodeRef: o,
      in: e,
      timeout: 300,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (i) => /* @__PURE__ */ s.createElement(_f, { ref: o, state: i, transitionDuration: 300 }, /* @__PURE__ */ s.createElement(Of, { onClick: () => t(
    !1), title: "Close about section" }, /* @__PURE__ */ s.createElement(ra, null), "Back"), /* @__PURE__ */ s.createElement(Tf, null, /* @__PURE__ */ s.
    createElement(Ga, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ s.createElement(Ya, null, /* @__PURE__ */ s.
    createElement(Go, null), /* @__PURE__ */ s.createElement("span", null, "Github")), /* @__PURE__ */ s.createElement(it, { width: 12 })), /* @__PURE__ */ s.
    createElement(
      Ga,
      {
        href: "https://storybook.js.org/docs/react/get-started/install/",
        target: "_blank"
      },
      /* @__PURE__ */ s.createElement(Ya, null, /* @__PURE__ */ s.createElement(_a, null), /* @__PURE__ */ s.createElement("span", null, "Do\
cumentation")),
      /* @__PURE__ */ s.createElement(it, { width: 12 })
    )), /* @__PURE__ */ s.createElement(or, null), /* @__PURE__ */ s.createElement(kf, null, "Open source software maintained by", " ", /* @__PURE__ */ s.
    createElement(Ae, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ s.createElement(
    Ae, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout"), _f = x.div(
  ({ theme: e, state: t, transitionDuration: o }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${o}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: e.color.defaultText,
    background: e.background.content,
    opacity: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
), Tf = x.div({
  marginTop: 20,
  marginBottom: 20
}), Ga = x.a(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: e.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${e.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
})), Ya = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s2 - 1,
  height: 40,
  gap: 5
})), kf = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2 - 1,
  marginTop: 30
})), Of = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: e.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
var Xa = /* @__PURE__ */ a(({ children: e }) => {
  let t = U(null), o = U(null), i = U(null), { isMobileMenuOpen: n, setMobileMenuOpen: r, isMobileAboutOpen: l, setMobileAboutOpen: u } = he();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Et,
    {
      nodeRef: t,
      in: n,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0,
      onExited: () => u(!1)
    },
    (c) => /* @__PURE__ */ s.createElement(Pf, { ref: t, state: c }, /* @__PURE__ */ s.createElement(
      Et,
      {
        nodeRef: o,
        in: !l,
        timeout: 300
      },
      (d) => /* @__PURE__ */ s.createElement(Af, { ref: o, state: d }, e)
    ), /* @__PURE__ */ s.createElement(Qa, null))
  ), /* @__PURE__ */ s.createElement(
    Et,
    {
      nodeRef: i,
      in: n,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (c) => /* @__PURE__ */ s.createElement(
      Mf,
      {
        ref: i,
        state: c,
        onClick: () => r(!1),
        "aria-label": "Close navigation menu"
      }
    )
  ));
}, "MobileMenuDrawer"), Pf = x.div(({ theme: e, state: t }) => ({
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "80%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  transform: `${t === "entering" || t === "entered" ? "translateY(0)" : t === "exiting" || t === "exited" ? "translateY(100%)" : "translateY\
(0)"}`
})), Af = x.div(({ theme: e, state: t }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${t === "entered" || t === "entering" ? 1 : t === "exiting" || t === "exited" ? 0 : 1}`,
  transform: `${(() => {
    switch (t) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
})), Mf = x.div(({ state: e }) => ({
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${300}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (e) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/manager/components/mobile/navigation/MobileNavigation.tsx
function Df(e, t) {
  let o = { ...e || {} };
  return Object.values(t).forEach((i) => {
    i.index && Object.assign(o, i.index);
  }), o;
}
a(Df, "combineIndexes");
var Lf = /* @__PURE__ */ a(() => {
  let { index: e, refs: t } = De(), o = ne(), i = o.getCurrentStoryData();
  if (!i)
    return "";
  let n = Df(e, t || {}), r = i.renderLabel?.(i, o) || i.name, l = n[i.id];
  for (; l && "parent" in l && l.parent && n[l.parent] && r.length < 24; )
    l = n[l.parent], r = `${l.renderLabel?.(l, o) || l.name}/${r}`;
  return r;
}, "useFullStoryName"), Za = /* @__PURE__ */ a(({ menu: e, panel: t, showPanel: o }) => {
  let { isMobileMenuOpen: i, isMobilePanelOpen: n, setMobileMenuOpen: r, setMobilePanelOpen: l } = he(), u = Lf();
  return /* @__PURE__ */ s.createElement(Nf, null, /* @__PURE__ */ s.createElement(Xa, null, e), n ? /* @__PURE__ */ s.createElement(Ua, null,
  t) : /* @__PURE__ */ s.createElement(Ff, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(Bf, { onClick: () => r(!i), title: "Open\
 navigation menu" }, /* @__PURE__ */ s.createElement(Qo, null), /* @__PURE__ */ s.createElement(Hf, null, u)), o && /* @__PURE__ */ s.createElement(
  ee, { onClick: () => l(!0), title: "Open addon panel" }, /* @__PURE__ */ s.createElement(na, null))));
}, "MobileNavigation"), Nf = x.div(({ theme: e }) => ({
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  background: e.barBg,
  borderTop: `1px solid ${e.appBorderColor}`
})), Ff = x.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  padding: "0 6px"
}), Bf = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: e.barTextColor,
  fontSize: `${e.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: e.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  }
})), Hf = x.p({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/manager/components/layout/useDragging.ts
var Ja = 30, rr = 240, nr = 270, el = 0.9;
function tl(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
a(tl, "clamp");
function ol(e, t, o) {
  return t + (o - t) * e;
}
a(ol, "interpolate");
function rl({
  setState: e,
  isPanelShown: t,
  isDesktop: o
}) {
  let i = U(null), n = U(null);
  return R(() => {
    let r = i.current, l = n.current, u = document.querySelector("#storybook-preview-wrapper"), c = null, d = /* @__PURE__ */ a((h) => {
      h.preventDefault(), e((y) => ({
        ...y,
        isDragging: !0
      })), h.currentTarget === r ? c = r : h.currentTarget === l && (c = l), window.addEventListener("mousemove", g), window.addEventListener(
      "mouseup", p), u && (u.style.pointerEvents = "none");
    }, "onDragStart"), p = /* @__PURE__ */ a((h) => {
      e((y) => c === l && y.navSize < rr && y.navSize > 0 ? {
        ...y,
        isDragging: !1,
        navSize: rr
      } : c === r && y.panelPosition === "right" && y.rightPanelWidth < nr && y.rightPanelWidth > 0 ? {
        ...y,
        isDragging: !1,
        rightPanelWidth: nr
      } : {
        ...y,
        isDragging: !1
      }), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", p), u?.removeAttribute("style"), c = null;
    }, "onDragEnd"), g = /* @__PURE__ */ a((h) => {
      if (h.buttons === 0) {
        p(h);
        return;
      }
      e((y) => {
        if (c === l) {
          let f = h.clientX;
          return f === y.navSize ? y : f <= Ja ? {
            ...y,
            navSize: 0
          } : f <= rr ? {
            ...y,
            navSize: ol(el, f, rr)
          } : {
            ...y,
            // @ts-expect-error (non strict)
            navSize: tl(f, 0, h.view.innerWidth)
          };
        }
        if (c === r) {
          let f = y.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", b = y.panelPosition === "bottom" ? (
            // @ts-expect-error (non strict)
            h.view.innerHeight - h.clientY
          ) : (
            // @ts-expect-error (non strict)
            h.view.innerWidth - h.clientX
          );
          if (b === y[f])
            return y;
          if (b <= Ja)
            return {
              ...y,
              [f]: 0
            };
          if (y.panelPosition === "right" && b <= nr)
            return {
              ...y,
              [f]: ol(
                el,
                b,
                nr
              )
            };
          let S = (
            // @ts-expect-error (non strict)
            y.panelPosition === "bottom" ? h.view.innerHeight : h.view.innerWidth
          );
          return {
            ...y,
            [f]: tl(b, 0, S)
          };
        }
        return y;
      });
    }, "onDrag");
    return r?.addEventListener("mousedown", d), l?.addEventListener("mousedown", d), () => {
      r?.removeEventListener("mousedown", d), l?.removeEventListener("mousedown", d), u?.removeAttribute("style");
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    t,
    o,
    e
  ]), { panelResizerRef: i, sidebarResizerRef: n };
}
a(rl, "useDragging");

// src/manager/components/layout/Layout.tsx
var zf = 100, nl = /* @__PURE__ */ a((e, t) => e.navSize === t.navSize && e.bottomPanelHeight === t.bottomPanelHeight && e.rightPanelWidth ===
t.rightPanelWidth && e.panelPosition === t.panelPosition, "layoutStateIsEqual"), Rf = /* @__PURE__ */ a(({
  managerLayoutState: e,
  setManagerLayoutState: t,
  isDesktop: o,
  hasTab: i
}) => {
  let n = s.useRef(e), [r, l] = $({
    ...e,
    isDragging: !1
  });
  R(() => {
    r.isDragging || // don't interrupt user's drag
    nl(e, n.current) || (n.current = e, l((f) => ({ ...f, ...e })));
  }, [r.isDragging, e, l]), Rt(() => {
    if (r.isDragging || // wait with syncing managerLayoutState until user is done dragging
    nl(e, r))
      return;
    let f = {
      navSize: r.navSize,
      bottomPanelHeight: r.bottomPanelHeight,
      rightPanelWidth: r.rightPanelWidth
    };
    n.current = {
      ...n.current,
      ...f
    }, t(f);
  }, [r, t]);
  let u = e.viewMode !== "story" && e.viewMode !== "docs", c = e.viewMode === "story" && !i, { panelResizerRef: d, sidebarResizerRef: p } = rl(
  {
    setState: l,
    isPanelShown: c,
    isDesktop: o
  }), { navSize: g, rightPanelWidth: h, bottomPanelHeight: y } = r.isDragging ? r : e;
  return {
    navSize: g,
    rightPanelWidth: h,
    bottomPanelHeight: y,
    panelPosition: e.panelPosition,
    panelResizerRef: d,
    sidebarResizerRef: p,
    showPages: u,
    showPanel: c,
    isDragging: r.isDragging
  };
}, "useLayoutSyncingState"), sl = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, hasTab: o, ...i }) => {
  let { isDesktop: n, isMobile: r } = he(), {
    navSize: l,
    rightPanelWidth: u,
    bottomPanelHeight: c,
    panelPosition: d,
    panelResizerRef: p,
    sidebarResizerRef: g,
    showPages: h,
    showPanel: y,
    isDragging: f
  } = Rf({ managerLayoutState: e, setManagerLayoutState: t, isDesktop: n, hasTab: o });
  return /* @__PURE__ */ s.createElement(
    jf,
    {
      navSize: l,
      rightPanelWidth: u,
      bottomPanelHeight: c,
      panelPosition: e.panelPosition,
      isDragging: f,
      viewMode: e.viewMode,
      showPanel: y
    },
    h && /* @__PURE__ */ s.createElement($f, null, i.slotPages),
    /* @__PURE__ */ s.createElement(xs, { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 }, ({ match: b }) => /* @__PURE__ */ s.createElement(
    Vf, { shown: !!b }, i.slotMain)),
    n && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Wf, null, /* @__PURE__ */ s.createElement(il, { ref: g }),
    i.slotSidebar), y && /* @__PURE__ */ s.createElement(Kf, { position: d }, /* @__PURE__ */ s.createElement(
      il,
      {
        orientation: d === "bottom" ? "horizontal" : "vertical",
        position: d === "bottom" ? "left" : "right",
        ref: p
      }
    ), i.slotPanel)),
    r && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ka, null), /* @__PURE__ */ s.createElement(
      Za,
      {
        menu: i.slotSidebar,
        panel: i.slotPanel,
        showPanel: y
      }
    ))
  );
}, "Layout"), jf = x.div(
  ({ navSize: e, rightPanelWidth: t, bottomPanelHeight: o, viewMode: i, panelPosition: n, showPanel: r }) => ({
    width: "100%",
    height: ["100vh", "100dvh"],
    // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [rt]: {
      display: "grid",
      gap: 0,
      gridTemplateColumns: `minmax(0, ${e}px) minmax(${zf}px, 1fr) minmax(0, ${t}px)`,
      gridTemplateRows: `1fr minmax(0, ${o}px)`,
      gridTemplateAreas: i === "docs" || !r ? `"sidebar content content"
                  "sidebar content content"` : n === "right" ? `"sidebar content panel"
                  "sidebar content panel"` : `"sidebar content content"
                "sidebar panel   panel"`
    }
  })
), Wf = x.div(({ theme: e }) => ({
  backgroundColor: e.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${e.color.border}`
})), Vf = x.div(({ theme: e, shown: t }) => ({
  flex: 1,
  position: "relative",
  backgroundColor: e.background.content,
  display: t ? "grid" : "none",
  // This is needed to make the content container fill the available space
  overflow: "auto",
  [rt]: {
    flex: "auto",
    gridArea: "content"
  }
})), $f = x.div(({ theme: e }) => ({
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: e.background.content,
  zIndex: 1
})), Kf = x.div(
  ({ theme: e, position: t }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: e.background.content,
    borderTop: t === "bottom" ? `1px solid ${e.color.border}` : void 0,
    borderLeft: t === "right" ? `1px solid ${e.color.border}` : void 0
  })
), il = x.div(
  ({ theme: e }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: e.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation: e = "vertical", position: t = "left" }) => e === "vertical" ? {
    width: t === "left" ? 10 : 13,
    height: "100%",
    top: 0,
    right: t === "left" ? "-7px" : void 0,
    left: t === "right" ? "-7px" : void 0,
    "&:after": {
      width: 1,
      height: "100%",
      marginLeft: t === "left" ? 3 : 6
    },
    "&:hover": {
      cursor: "col-resize"
    }
  } : {
    width: "100%",
    height: "13px",
    top: "-7px",
    left: 0,
    "&:after": {
      width: "100%",
      height: 1,
      marginTop: 6
    },
    "&:hover": {
      cursor: "row-resize"
    }
  }
);

// global-externals:@storybook/core/types
var rT = __STORYBOOK_TYPES__, { Addon_TypesEnum: Ee } = __STORYBOOK_TYPES__;

// src/manager/container/Panel.tsx
var ll = Be(ir(), 1);

// src/manager/components/panel/Panel.tsx
var An = class An extends Ne {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  componentDidCatch(t, o) {
    this.setState({ hasError: !0 }), console.error(t, o);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    let { hasError: t } = this.state, { children: o } = this.props;
    return t ? /* @__PURE__ */ s.createElement("h1", null, "Something went wrong.") : o;
  }
};
a(An, "SafeTab");
var On = An, Pn = s.memo(
  ({
    panels: e,
    shortcuts: t,
    actions: o,
    selectedPanel: i = null,
    panelPosition: n = "right",
    absolute: r = !0
  }) => {
    let { isDesktop: l, setMobilePanelOpen: u } = he();
    return /* @__PURE__ */ s.createElement(
      ta,
      {
        absolute: r,
        ...i ? { selected: i } : {},
        menuName: "Addons",
        actions: o,
        showToolsWhenEmpty: !0,
        emptyState: /* @__PURE__ */ s.createElement(
          Zs,
          {
            title: "Storybook add-ons",
            description: /* @__PURE__ */ s.createElement(s.Fragment, null, "Integrate your tools with Storybook to connect workflows and unl\
ock advanced features."),
            footer: /* @__PURE__ */ s.createElement(Ae, { href: "https://storybook.js.org/integrations", target: "_blank", withArrow: !0 }, /* @__PURE__ */ s.
            createElement(Gt, null), " Explore integrations catalog")
          }
        ),
        tools: /* @__PURE__ */ s.createElement(Uf, null, l ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          ee,
          {
            key: "position",
            onClick: o.togglePosition,
            title: `Change addon orientation [${qe(
              t.panelPosition
            )}]`
          },
          n === "bottom" ? /* @__PURE__ */ s.createElement(Zo, null) : /* @__PURE__ */ s.createElement(Ko, null)
        ), /* @__PURE__ */ s.createElement(
          ee,
          {
            key: "visibility",
            onClick: o.toggleVisibility,
            title: `Hide addons [${qe(t.togglePanel)}]`
          },
          /* @__PURE__ */ s.createElement(Ge, null)
        )) : /* @__PURE__ */ s.createElement(ee, { onClick: () => u(!1), title: "Close addon panel" }, /* @__PURE__ */ s.createElement(Ge, null))),
        id: "storybook-panel-root"
      },
      Object.entries(e).map(([c, d]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ s.createElement(On, { key: c, id: c, title: typeof d.title == "function" ? /* @__PURE__ */ s.createElement(d.title, null) :
        d.title }, d.render)
      ))
    );
  }
);
Pn.displayName = "AddonPanel";
var Uf = x.div({
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/manager/container/Panel.tsx
var qf = (0, ll.default)(1)((e) => ({
  onSelect: /* @__PURE__ */ a((t) => e.setSelectedPanel(t), "onSelect"),
  toggleVisibility: /* @__PURE__ */ a(() => e.togglePanel(), "toggleVisibility"),
  togglePosition: /* @__PURE__ */ a(() => e.togglePanelPosition(), "togglePosition")
})), Gf = /* @__PURE__ */ a((e) => {
  let t = e.getElements(Ee.PANEL), o = e.getCurrentStoryData();
  if (!t || !o || o.type !== "story")
    return t;
  let { parameters: i } = o, n = {};
  return Object.entries(t).forEach(([r, l]) => {
    let { paramKey: u } = l;
    u && i && i[u] && i[u].disable || (n[r] = l);
  }), n;
}, "getPanels"), Yf = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  panels: Gf(t),
  selectedPanel: t.getSelectedPanel(),
  panelPosition: e.layout.panelPosition,
  actions: qf(t),
  shortcuts: t.getShortcutKeys()
}), "mapper"), Qf = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(me, { filter: Yf }, (t) => /* @__PURE__ */ s.createElement(Pn, {
...e, ...t })), "Panel"), ul = Qf;

// src/manager/container/Preview.tsx
var ho = Be(ir(), 1);

// src/manager/components/preview/Iframe.tsx
var Xf = x.iframe(({ theme: e }) => ({
  backgroundColor: e.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: "auto",
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
function cl(e) {
  let { active: t, id: o, title: i, src: n, allowFullScreen: r, scale: l, ...u } = e, c = s.useRef(null);
  return /* @__PURE__ */ s.createElement(oa.IFrame, { scale: l, active: t, iFrameRef: c }, /* @__PURE__ */ s.createElement(
    Xf,
    {
      "data-is-storybook": t ? "true" : "false",
      onLoad: (d) => d.currentTarget.setAttribute("data-is-loaded", "true"),
      id: o,
      title: i,
      src: n,
      allow: "clipboard-write;",
      allowFullScreen: r,
      ref: c,
      ...u
    }
  ));
}
a(cl, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var wl = Be(Sl(), 1);
var El = /* @__PURE__ */ a((e) => {
  let t = (0, wl.stringify)(e);
  return t === "" ? "" : `&${t}`;
}, "stringifyQueryParams");

// src/manager/components/preview/FramesRenderer.tsx
var wm = /* @__PURE__ */ a((e, t) => e && t[e] ? `storybook-ref-${e}` : "storybook-preview-iframe", "getActive"), Em = x(fe)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: e.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
})), Cm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isFullscreen: e.getIsFullscreen(),
  isNavShown: e.getIsNavShown(),
  selectedStoryId: t.storyId
}), "whenSidebarIsVisible"), _m = {
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
}, Cl = /* @__PURE__ */ a(({
  refs: e,
  scale: t,
  viewMode: o = "story",
  refId: i,
  queryParams: n = {},
  baseUrl: r,
  storyId: l = "*"
}) => {
  let u = e[i]?.version, c = El({
    ...n,
    ...u && { version: u }
  }), d = wm(i, e), { current: p } = U({}), g = Object.values(e).filter((h) => h.type === "auto-inject" || h.id === i, {});
  return p["storybook-preview-iframe"] || (p["storybook-preview-iframe"] = Ut(r, l, {
    ...n,
    ...u && { version: u },
    viewMode: o
  })), g.forEach((h) => {
    let y = `storybook-ref-${h.id}`, f = p[y]?.split("/iframe.html")[0];
    if (!f || h.url !== f) {
      let b = `${h.url}/iframe.html?id=${l}&viewMode=${o}&refId=${h.id}${c}`;
      p[y] = b;
    }
  }), /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(Wt, { styles: _m }), /* @__PURE__ */ s.createElement(me, { filter: Cm },
  ({ isFullscreen: h, isNavShown: y, selectedStoryId: f }) => h || !y || !f ? null : /* @__PURE__ */ s.createElement(Em, { asChild: !0 }, /* @__PURE__ */ s.
  createElement("a", { href: `#${f}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"))), Object.entries(p).map(([h, y]) => /* @__PURE__ */ s.
  createElement(we, { key: h }, /* @__PURE__ */ s.createElement(
    cl,
    {
      active: h === d,
      key: h,
      id: h,
      title: h,
      src: y,
      allowFullScreen: !0,
      scale: t
    }
  ))));
}, "FramesRenderer");

// src/manager/components/preview/tools/addons.tsx
var Tm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsPanelShown(),
  singleStory: t.singleStory,
  panelPosition: t.layout.panelPosition,
  toggle: /* @__PURE__ */ a(() => e.togglePanel(), "toggle")
}), "menuMapper"), _l = {
  title: "addons",
  id: "addons",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Tm }, ({ isVisible: e, toggle: t, singleStory: o, panelPosition: i }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { "aria-label": "Show addons", key: "addons", onClick: t,
  title: "Show addons" }, i === "bottom" ? /* @__PURE__ */ s.createElement(Ko, null) : /* @__PURE__ */ s.createElement(Zo, null)))), "render")
};

// src/manager/components/preview/tools/copy.tsx
var Ml = Be(Al(), 1);
var { PREVIEW_URL: Mm, document: Dm } = ie, Lm = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, { location: n } = Dm, r = i[o], l = `${n.origin}${n.pathname}`;
  return l.endsWith("/") || (l += "/"), {
    refId: o,
    baseUrl: r ? `${r.url}/iframe.html` : Mm || `${l}iframe.html`,
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "copyMapper"), Dl = {
  title: "copy",
  id: "copy",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Lm }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(
    ee,
    {
      key: "copy",
      onClick: () => (0, Ml.default)(Ut(e, t, o)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ s.createElement(ya, null)
  ) : null), "render")
};

// src/manager/components/preview/tools/eject.tsx
var { PREVIEW_URL: Nm } = ie, Fm = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, n = i[o];
  return {
    refId: o,
    baseUrl: n ? `${n.url}/iframe.html` : Nm || "iframe.html",
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "ejectMapper"), Ll = {
  title: "eject",
  id: "eject",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Fm }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(ee, { key: "opener", asChild: !0 }, /* @__PURE__ */ s.createElement(
    "a",
    {
      href: Ut(e, t, o),
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Open canvas in new tab"
    },
    /* @__PURE__ */ s.createElement(it, null)
  )) : null), "render")
};

// src/manager/components/preview/tools/remount.tsx
var Bm = x(ee)(({ theme: e, animating: t, disabled: o }) => ({
  opacity: o ? 0.5 : 1,
  svg: {
    animation: t ? `${e.animation.rotate360} 1000ms ease-out` : void 0
  }
})), Hm = /* @__PURE__ */ a(({ api: e, state: t }) => {
  let { storyId: o } = t;
  return {
    storyId: o,
    remount: /* @__PURE__ */ a(() => e.emit(Zr, { storyId: t.storyId }), "remount"),
    api: e
  };
}, "menuMapper"), Nl = {
  title: "remount",
  id: "remount",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Hm }, ({ remount: e, storyId: t, api: o }) => {
    let [i, n] = $(!1), r = /* @__PURE__ */ a(() => {
      t && e();
    }, "remountComponent");
    return o.on(Zr, () => {
      n(!0);
    }), /* @__PURE__ */ s.createElement(
      Bm,
      {
        key: "remount",
        title: "Remount component",
        onClick: r,
        onAnimationEnd: () => n(!1),
        animating: i,
        disabled: !t
      },
      /* @__PURE__ */ s.createElement(dt, null)
    );
  }), "render")
};

// src/manager/components/preview/tools/zoom.tsx
var mo = 1, Fl = zt({ value: mo, set: /* @__PURE__ */ a((e) => {
}, "set") }), zn = class zn extends Ne {
  constructor() {
    super(...arguments);
    this.state = {
      value: mo
    };
    this.set = /* @__PURE__ */ a((o) => this.setState({ value: o }), "set");
  }
  render() {
    let { children: o, shouldScale: i } = this.props, { set: n } = this, { value: r } = this.state;
    return /* @__PURE__ */ s.createElement(Fl.Provider, { value: { value: i ? r : mo, set: n } }, o);
  }
};
a(zn, "ZoomProvider");
var cr = zn, { Consumer: Hn } = Fl, zm = io(/* @__PURE__ */ a(function({ zoomIn: t, zoomOut: o, reset: i }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { key: "zoomin", onClick: t, title: "Zoom in" },
  /* @__PURE__ */ s.createElement(Pa, null)), /* @__PURE__ */ s.createElement(ee, { key: "zoomout", onClick: o, title: "Zoom out" }, /* @__PURE__ */ s.
  createElement(Aa, null)), /* @__PURE__ */ s.createElement(ee, { key: "zoomreset", onClick: i, title: "Reset zoom" }, /* @__PURE__ */ s.createElement(
  Ma, null)));
}, "Zoom"));
var Rm = io(/* @__PURE__ */ a(function({
  set: t,
  value: o
}) {
  let i = A(
    (l) => {
      l.preventDefault(), t(0.8 * o);
    },
    [t, o]
  ), n = A(
    (l) => {
      l.preventDefault(), t(1.25 * o);
    },
    [t, o]
  ), r = A(
    (l) => {
      l.preventDefault(), t(mo);
    },
    [t, mo]
  );
  return /* @__PURE__ */ s.createElement(zm, { key: "zoom", zoomIn: i, zoomOut: n, reset: r });
}, "ZoomWrapper"));
function jm() {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Hn, null, ({ set: e, value: t }) => /* @__PURE__ */ s.
  createElement(Rm, { set: e, value: t })), /* @__PURE__ */ s.createElement(Kt, null));
}
a(jm, "ZoomToolRenderer");
var Bl = {
  title: "zoom",
  id: "zoom",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: jm
};

// src/manager/components/preview/Toolbar.tsx
var Wm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  toggle: e.toggleFullscreen,
  isFullscreen: e.getIsFullscreen(),
  shortcut: qe(e.getShortcutKeys().fullScreen),
  hasPanel: Object.keys(e.getElements(Ee.PANEL)).length > 0,
  singleStory: t.singleStory
}), "fullScreenMapper"), zl = {
  title: "fullscreen",
  id: "fullscreen",
  type: be.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a((e) => ["story", "docs"].includes(e.viewMode), "match"),
  render: /* @__PURE__ */ a(() => {
    let { isMobile: e } = he();
    return e ? null : /* @__PURE__ */ s.createElement(me, { filter: Wm }, ({ toggle: t, isFullscreen: o, shortcut: i, hasPanel: n, singleStory: r }) => (!r ||
    r && n) && /* @__PURE__ */ s.createElement(
      ee,
      {
        key: "full",
        onClick: t,
        title: `${o ? "Exit full screen" : "Go full screen"} [${i}]`,
        "aria-label": o ? "Exit full screen" : "Go full screen"
      },
      o ? /* @__PURE__ */ s.createElement(Ge, null) : /* @__PURE__ */ s.createElement(pa, null)
    ));
  }, "render")
};
var Rl = s.memo(/* @__PURE__ */ a(function({
  isShown: t,
  tools: o,
  toolsExtra: i,
  tabs: n,
  tabId: r,
  api: l
}) {
  return n || o || i ? /* @__PURE__ */ s.createElement($m, { className: "sb-bar", key: "toolbar", shown: t, "data-test-id": "sb-preview-tool\
bar" }, /* @__PURE__ */ s.createElement(Km, null, /* @__PURE__ */ s.createElement(jl, null, n.length > 1 ? /* @__PURE__ */ s.createElement(we,
  null, /* @__PURE__ */ s.createElement(Wo, { key: "tabs" }, n.map((u, c) => /* @__PURE__ */ s.createElement(
    Vo,
    {
      disabled: u.disabled,
      active: u.id === r || u.id === "canvas" && !r,
      onClick: () => {
        l.applyQueryParams({ tab: u.id === "canvas" ? void 0 : u.id });
      },
      key: u.id || `tab-${c}`
    },
    u.title
  ))), /* @__PURE__ */ s.createElement(Kt, null)) : null, /* @__PURE__ */ s.createElement(Hl, { key: "left", list: o })), /* @__PURE__ */ s.
  createElement(Um, null, /* @__PURE__ */ s.createElement(Hl, { key: "right", list: i })))) : null;
}, "ToolbarComp")), Hl = s.memo(/* @__PURE__ */ a(function({ list: t }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, t.filter(Boolean).map(({ render: o, id: i, ...n }, r) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ s.createElement(o, { key: i || n.key || `f-${r}` })
  )));
}, "Tools"));
function Vm(e, t) {
  let o = t?.type === "story" && t?.prepared ? t?.parameters : {}, i = "toolbar" in o ? o.toolbar : void 0, { toolbar: n } = Ue.getConfig(),
  r = ko(
    n || {},
    i || {}
  );
  return r ? !!r[e?.id]?.hidden : !1;
}
a(Vm, "toolbarItemHasBeenExcluded");
function Rn(e, t, o, i, n, r) {
  let l = /* @__PURE__ */ a((u) => u && (!u.match || u.match({
    storyId: t?.id,
    refId: t?.refId,
    viewMode: o,
    location: i,
    path: n,
    tabId: r
  })) && !Vm(u, t), "filter");
  return e.filter(l);
}
a(Rn, "filterToolsSide");
var $m = x.div(({ theme: e, shown: t }) => ({
  position: "relative",
  color: e.barTextColor,
  width: "100%",
  height: 40,
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: t ? 0 : -40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  zIndex: 4
})), Km = x.div({
  position: "absolute",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
}), jl = x.div({
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
}), Um = x(jl)({
  marginLeft: 30
});

// src/manager/components/preview/utils/components.ts
var Wl = x.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
}), Vl = x.div({
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
}), $l = x.div(
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  ({ show: e }) => ({ display: e ? "grid" : "none" })
), Vk = x(Po)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
}), $k = x.span({
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
}), pr = x.div(({ theme: e }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
})), Kl = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: e.background.preview,
  zIndex: 1
}));

// src/manager/components/preview/Wrappers.tsx
var Ul = /* @__PURE__ */ a(({
  wrappers: e,
  id: t,
  storyId: o,
  children: i
}) => /* @__PURE__ */ s.createElement(we, null, e.reduceRight(
  (n, r, l) => /* @__PURE__ */ s.createElement(r.render, { index: l, children: n, id: t, storyId: o }),
  i
)), "ApplyWrappers"), ql = [
  {
    id: "iframe-wrapper",
    type: Ee.PREVIEW,
    render: /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(pr, { id: "storybook-preview-wrapper" }, e.children), "render")
  }
];

// src/manager/components/preview/Preview.tsx
var Gm = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  storyId: e.storyId,
  refId: e.refId,
  viewMode: e.viewMode,
  customCanvas: t.renderPreview,
  queryParams: e.customQueryParams,
  getElements: t.getElements,
  entry: t.getData(e.storyId, e.refId),
  previewInitialized: e.previewInitialized,
  refs: e.refs
}), "canvasMapper"), Gl = /* @__PURE__ */ a(() => ({
  id: "canvas",
  type: be.TAB,
  title: "Canvas",
  route: /* @__PURE__ */ a(({ storyId: e, refId: t }) => t ? `/story/${t}_${e}` : `/story/${e}`, "route"),
  match: /* @__PURE__ */ a(({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)), "match"),
  render: /* @__PURE__ */ a(() => null, "render")
}), "createCanvasTab"), Yl = s.memo(/* @__PURE__ */ a(function(t) {
  let {
    api: o,
    id: i,
    options: n,
    viewMode: r,
    storyId: l,
    entry: u = void 0,
    description: c,
    baseUrl: d,
    withLoader: p = !0,
    tools: g,
    toolsExtra: h,
    tabs: y,
    wrappers: f,
    tabId: b
  } = t, S = y.find((I) => I.id === b)?.render, E = r === "story", { showToolbar: m } = n, v = U(l);
  return R(() => {
    if (u && r) {
      if (l === v.current)
        return;
      if (v.current = l, r.match(/docs|story/)) {
        let { refId: I, id: w } = u;
        o.emit(cs, {
          storyId: w,
          viewMode: r,
          options: { target: I }
        });
      }
    }
  }, [u, r, l, o]), /* @__PURE__ */ s.createElement(we, null, i === "main" && /* @__PURE__ */ s.createElement(uo, { key: "description" }, /* @__PURE__ */ s.
  createElement("title", null, c)), /* @__PURE__ */ s.createElement(cr, { shouldScale: E }, /* @__PURE__ */ s.createElement(Wl, null, /* @__PURE__ */ s.
  createElement(
    Rl,
    {
      key: "tools",
      isShown: m,
      tabId: b,
      tabs: y,
      tools: g,
      toolsExtra: h,
      api: o
    }
  ), /* @__PURE__ */ s.createElement(Vl, { key: "frame" }, S && /* @__PURE__ */ s.createElement(pr, null, S({ active: !0 })), /* @__PURE__ */ s.
  createElement($l, { show: !b }, /* @__PURE__ */ s.createElement(Ym, { withLoader: p, baseUrl: d, wrappers: f }))))));
}, "Preview"));
var Ym = /* @__PURE__ */ a(({ baseUrl: e, withLoader: t, wrappers: o }) => /* @__PURE__ */ s.createElement(me, { filter: Gm }, ({
  entry: i,
  refs: n,
  customCanvas: r,
  storyId: l,
  refId: u,
  viewMode: c,
  queryParams: d,
  previewInitialized: p
}) => {
  let g = "canvas", [h, y] = $(void 0);
  R(() => {
    if (ie.CONFIG_TYPE === "DEVELOPMENT")
      try {
        Ue.getChannel().on(as, (v) => {
          y(v);
        });
      } catch {
      }
  }, []);
  let f = !!n[u] && !n[u].previewInitialized, b = !(h?.value === 1 || h === void 0), S = !u && (!p || b), E = i && f || S;
  return /* @__PURE__ */ s.createElement(Hn, null, ({ value: m }) => /* @__PURE__ */ s.createElement(s.Fragment, null, t && E && /* @__PURE__ */ s.
  createElement(Kl, null, /* @__PURE__ */ s.createElement(zo, { id: "preview-loader", role: "progressbar", progress: h })), /* @__PURE__ */ s.
  createElement(Ul, { id: g, storyId: l, viewMode: c, wrappers: o }, r ? r(l, c, g, e, m, d) : /* @__PURE__ */ s.createElement(
    Cl,
    {
      baseUrl: e,
      refs: n,
      scale: m,
      entry: i,
      viewMode: c,
      refId: u,
      queryParams: d,
      storyId: l
    }
  ))));
}), "Canvas");
function Ql(e, t) {
  let { previewTabs: o } = Ue.getConfig(), i = t ? t.previewTabs : void 0;
  if (o || i) {
    let n = ko(o || {}, i || {}), r = Object.keys(n).map((l, u) => ({
      index: u,
      ...typeof n[l] == "string" ? { title: n[l] } : n[l],
      id: l
    }));
    return e.filter((l) => {
      let u = r.find((c) => c.id === l.id);
      return u === void 0 || u.id === "canvas" || !u.hidden;
    }).map((l, u) => ({ ...l, index: u })).sort((l, u) => {
      let c = r.find((h) => h.id === l.id), d = c ? c.index : r.length + l.index, p = r.find((h) => h.id === u.id), g = p ? p.index : r.length +
      u.index;
      return d - g;
    }).map((l) => {
      let u = r.find((c) => c.id === l.id);
      return u ? {
        ...l,
        title: u.title || l.title,
        disabled: u.disabled,
        hidden: u.hidden
      } : l;
    });
  }
  return e;
}
a(Ql, "filterTabs");

// src/manager/components/preview/tools/menu.tsx
var Qm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsNavShown(),
  singleStory: t.singleStory,
  toggle: /* @__PURE__ */ a(() => e.toggleNav(), "toggle")
}), "menuMapper"), Xl = {
  title: "menu",
  id: "menu",
  type: be.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a(({ viewMode: e }) => ["story", "docs"].includes(e), "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Qm }, ({ isVisible: e, toggle: t, singleStory: o }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { "aria-label": "Show sidebar", key: "menu", onClick: t,
  title: "Show sidebar" }, /* @__PURE__ */ s.createElement(Qo, null)), /* @__PURE__ */ s.createElement(Kt, null))), "render")
};

// src/manager/container/Preview.tsx
var Xm = [Gl()], Zm = [Xl, Nl, Bl], Jm = [_l, zl, Ll, Dl], eh = [], th = (0, ho.default)(1)(
  (e, t, o, i) => i ? Ql([...Xm, ...Object.values(t)], o) : eh
), oh = (0, ho.default)(1)(
  (e, t, o) => Rn([...Zm, ...Object.values(t)], ...o)
), rh = (0, ho.default)(1)(
  (e, t, o) => Rn([...Jm, ...Object.values(t)], ...o)
), nh = (0, ho.default)(1)((e, t) => [
  ...ql,
  ...Object.values(t)
]), { PREVIEW_URL: ih } = ie, sh = /* @__PURE__ */ a((e) => e.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace"), ah = /* @__PURE__ */ a(
(e) => {
  if (e?.type === "story" || e?.type === "docs") {
    let { title: t, name: o } = e;
    return t && o ? sh(`${t} - ${o} \u22C5 Storybook`) : "Storybook";
  }
  return e?.name ? `${e.name} \u22C5 Storybook` : "Storybook";
}, "getDescription"), lh = /* @__PURE__ */ a(({
  api: e,
  state: t
  // @ts-expect-error (non strict)
}) => {
  let { layout: o, location: i, customQueryParams: n, storyId: r, refs: l, viewMode: u, path: c, refId: d } = t, p = e.getData(r, d), g = Object.
  values(e.getElements(Ee.TAB)), h = Object.values(e.getElements(Ee.PREVIEW)), y = Object.values(e.getElements(Ee.TOOL)), f = Object.values(
  e.getElements(Ee.TOOLEXTRA)), b = e.getQueryParam("tab"), S = oh(y.length, e.getElements(Ee.TOOL), [
    p,
    u,
    i,
    c,
    // @ts-expect-error (non strict)
    b
  ]), E = rh(
    f.length,
    e.getElements(Ee.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [p, u, i, c, b]
  );
  return {
    api: e,
    entry: p,
    options: o,
    description: ah(p),
    viewMode: u,
    refs: l,
    storyId: r,
    baseUrl: ih || "iframe.html",
    queryParams: n,
    tools: S,
    toolsExtra: E,
    tabs: th(
      g.length,
      e.getElements(Ee.TAB),
      p ? p.parameters : void 0,
      o.showTabs
    ),
    wrappers: nh(
      h.length,
      e.getElements(Ee.PREVIEW)
    ),
    tabId: b
  };
}, "mapper"), uh = s.memo(/* @__PURE__ */ a(function(t) {
  return /* @__PURE__ */ s.createElement(me, { filter: lh }, (o) => /* @__PURE__ */ s.createElement(Yl, { ...t, ...o }));
}, "PreviewConnected")), Zl = uh;

// src/manager/hooks/useDebounce.ts
function Jl(e, t) {
  let [o, i] = $(e);
  return R(() => {
    let n = setTimeout(() => {
      i(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), o;
}
a(Jl, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function eu() {
  let [e, t] = s.useState({
    width: null,
    height: null
  }), o = s.useRef(null);
  return [s.useCallback((n) => {
    if (o.current && (o.current.disconnect(), o.current = null), n?.nodeType === Node.ELEMENT_NODE) {
      let r = new ResizeObserver(([l]) => {
        if (l && l.borderBoxSize) {
          let { inlineSize: u, blockSize: c } = l.borderBoxSize[0];
          t({ width: u, height: c });
        }
      });
      r.observe(n), o.current = r;
    }
  }, []), e];
}
a(eu, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function kt(e, t, o) {
  let i = o.initialDeps ?? [], n;
  return () => {
    var r, l, u, c;
    let d;
    o.key && ((r = o.debug) != null && r.call(o)) && (d = Date.now());
    let p = e();
    if (!(p.length !== i.length || p.some((y, f) => i[f] !== y)))
      return n;
    i = p;
    let h;
    if (o.key && ((l = o.debug) != null && l.call(o)) && (h = Date.now()), n = t(...p), o.key && ((u = o.debug) != null && u.call(o))) {
      let y = Math.round((Date.now() - d) * 100) / 100, f = Math.round((Date.now() - h) * 100) / 100, b = f / 16, S = /* @__PURE__ */ a((E, m) => {
        for (E = String(E); E.length < m; )
          E = " " + E;
        return E;
      }, "pad");
      console.info(
        `%c\u23F1 ${S(f, 5)} /${S(y, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * b, 120)
        )}deg 100% 31%);`,
        o?.key
      );
    }
    return (c = o?.onChange) == null || c.call(o, n), n;
  };
}
a(kt, "memo");
function dr(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
a(dr, "notUndefined");
var tu = /* @__PURE__ */ a((e, t) => Math.abs(e - t) < 1, "approxEqual");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var ch = /* @__PURE__ */ a((e) => e, "defaultKeyExtractor"), ph = /* @__PURE__ */ a((e) => {
  let t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), i = [];
  for (let n = t; n <= o; n++)
    i.push(n);
  return i;
}, "defaultRangeExtractor"), ou = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a((r) => {
    let { width: l, height: u } = r;
    t({ width: Math.round(l), height: Math.round(u) });
  }, "handler");
  if (i(o.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  let n = new ResizeObserver((r) => {
    let l = r[0];
    if (l?.borderBoxSize) {
      let u = l.borderBoxSize[0];
      if (u) {
        i({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    i(o.getBoundingClientRect());
  });
  return n.observe(o, { box: "border-box" }), () => {
    n.unobserve(o);
  };
}, "observeElementRect");
var ru = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a(() => {
    t(o[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
  }, "handler");
  return i(), o.addEventListener("scroll", i, {
    passive: !0
  }), () => {
    o.removeEventListener("scroll", i);
  };
}, "observeElementOffset");
var dh = /* @__PURE__ */ a((e, t, o) => {
  if (t?.borderBoxSize) {
    let i = t.borderBoxSize[0];
    if (i)
      return Math.round(
        i[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[o.options.horizontal ? "width" : "height"]
  );
}, "measureElement");
var nu = /* @__PURE__ */ a((e, {
  adjustments: t = 0,
  behavior: o
}, i) => {
  var n, r;
  let l = e + t;
  (r = (n = i.scrollElement) == null ? void 0 : n.scrollTo) == null || r.call(n, {
    [i.options.horizontal ? "left" : "top"]: l,
    behavior: o
  });
}, "elementScroll"), jn = class jn {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null,
    this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection =
    null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let o = null, i = /* @__PURE__ */ a(() => o || (typeof ResizeObserver < "u" ? o = new ResizeObserver((n) => {
        n.forEach((r) => {
          this._measureElement(r.target, r);
        });
      }) : null), "get");
      return {
        disconnect: /* @__PURE__ */ a(() => {
          var n;
          return (n = i()) == null ? void 0 : n.disconnect();
        }, "disconnect"),
        observe: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.observe(n, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.unobserve(n);
        }, "unobserve")
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([i, n]) => {
        typeof n > "u" && delete o[i];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: ch,
        rangeExtractor: ph,
        onChange: /* @__PURE__ */ a(() => {
        }, "onChange"),
        measureElement: dh,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...o
      };
    }, this.notify = (o) => {
      var i, n;
      (n = (i = this.options).onChange) == null || n.call(i, this, o);
    }, this.maybeNotify = kt(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (o) => {
        this.notify(o);
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug"),
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((o) => o()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      let o = this.options.getScrollElement();
      this.scrollElement !== o && (this.cleanup(), this.scrollElement = o, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (i) => {
          this.scrollRect = i, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (i) => {
          this.scrollAdjustments = 0, this.scrollOffset !== i && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId),
          this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < i ? "forward" : "backward", this.
          scrollOffset = i, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = kt(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (o, i, n, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: i,
        scrollMargin: n,
        getItemKey: r
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (o, i) => {
      let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let l = i - 1; l >= 0; l--) {
        let u = o[l];
        if (n.has(u.lane))
          continue;
        let c = r.get(
          u.lane
        );
        if (c == null || u.end > c.end ? r.set(u.lane, u) : u.end < c.end && n.set(u.lane, !0), n.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((l, u) => l.end === u.end ? l.index - u.index : l.end - u.end)[0] :
      void 0;
    }, this.getMeasurements = kt(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: i, scrollMargin: n, getItemKey: r }, l) => {
        let u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        let c = this.measurementsCache.slice(0, u);
        for (let d = u; d < o; d++) {
          let p = r(d), g = this.options.lanes === 1 ? c[d - 1] : this.getFurthestMeasurement(c, d), h = g ? g.end + this.options.gap : i + n,
          y = l.get(p), f = typeof y == "number" ? y : this.options.estimateSize(d), b = h + f, S = g ? g.lane : d % this.options.lanes;
          c[d] = {
            index: d,
            start: h,
            size: f,
            end: b,
            key: p,
            lane: S
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.calculateRange = kt(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (o, i, n) => this.range = o.length > 0 && i > 0 ? fh({
        measurements: o,
        outerSize: i,
        scrollOffset: n
      }) : null,
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getIndexes = kt(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (o, i, n, r) => i === null ? [] : o({
        ...i,
        overscan: n,
        count: r
      }),
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.indexFromElement = (o) => {
      let i = this.options.indexAttribute, n = o.getAttribute(i);
      return n ? parseInt(n, 10) : (console.warn(
        `Missing attribute name '${i}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (o, i) => {
      let n = this.measurementsCache[this.indexFromElement(o)];
      if (!n || !o.isConnected) {
        this.measureElementCache.forEach((u, c) => {
          u === o && (this.observer.unobserve(o), this.measureElementCache.delete(c));
        });
        return;
      }
      let r = this.measureElementCache.get(n.key);
      r !== o && (r && this.observer.unobserve(r), this.observer.observe(o), this.measureElementCache.set(n.key, o));
      let l = this.options.measureElement(o, i, this);
      this.resizeItem(n, l);
    }, this.resizeItem = (o, i) => {
      let n = this.itemSizeCache.get(o.key) ?? o.size, r = i - n;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, r, this) :
      o.start < this.scrollOffset + this.scrollAdjustments) && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, i)), this.notify(!1));
    }, this.measureElement = (o) => {
      o && this._measureElement(o, void 0);
    }, this.getVirtualItems = kt(
      () => [this.getIndexes(), this.getMeasurements()],
      (o, i) => {
        let n = [];
        for (let r = 0, l = o.length; r < l; r++) {
          let u = o[r], c = i[u];
          n.push(c);
        }
        return n;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getVirtualItemForOffset = (o) => {
      let i = this.getMeasurements();
      return dr(
        i[iu(
          0,
          i.length - 1,
          (n) => dr(i[n]).start,
          o
        )]
      );
    }, this.getOffsetForAlignment = (o, i) => {
      let n = this.getSize();
      i === "auto" && (o <= this.scrollOffset ? i = "start" : o >= this.scrollOffset + n ? i = "end" : i = "start"), i === "start" ? o = o :
      i === "end" ? o = o - n : i === "center" && (o = o - n / 2);
      let r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.
      document.documentElement[r] : this.scrollElement[r] : 0) - this.getSize();
      return Math.max(Math.min(u, o), 0);
    }, this.getOffsetForIndex = (o, i = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      let n = dr(this.getMeasurements()[o]);
      if (i === "auto")
        if (n.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          i = "end";
        else if (n.start <= this.scrollOffset + this.options.scrollPaddingStart)
          i = "start";
        else
          return [this.scrollOffset, i];
      let r = i === "end" ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(r, i), i];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (o, { align: i = "start", behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(o, i), {
        adjustments: void 0,
        behavior: n
      });
    }, this.scrollToIndex = (o, { align: i = "auto", behavior: n } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1)), this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      let [r, l] = this.getOffsetForIndex(o, i);
      this._scrollToOffset(r, { adjustments: void 0, behavior: n }), n !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId =
      setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(o)
        )) {
          let [c] = this.getOffsetForIndex(o, l);
          tu(c, this.scrollOffset) || this.scrollToIndex(o, { align: l, behavior: n });
        } else
          this.scrollToIndex(o, { align: l, behavior: n });
      }));
    }, this.scrollBy = (o, { behavior: i } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + o, {
        adjustments: void 0,
        behavior: i
      });
    }, this.getTotalSize = () => {
      var o;
      let i = this.getMeasurements(), n;
      return i.length === 0 ? n = this.options.paddingStart : n = this.options.lanes === 1 ? ((o = i[i.length - 1]) == null ? void 0 : o.end) ??
      0 : Math.max(
        ...i.slice(-this.options.lanes).map((r) => r.end)
      ), n - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (o, {
      adjustments: i,
      behavior: n
    }) => {
      this.options.scrollToFn(o, { behavior: n, adjustments: i }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ?
    this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.
    forEach((o) => {
      this.itemSizeCache.set(o.key, o.size);
    }), this.maybeNotify();
  }
};
a(jn, "Virtualizer");
var fr = jn, iu = /* @__PURE__ */ a((e, t, o, i) => {
  for (; e <= t; ) {
    let n = (e + t) / 2 | 0, r = o(n);
    if (r < i)
      e = n + 1;
    else if (r > i)
      t = n - 1;
    else
      return n;
  }
  return e > 0 ? e - 1 : 0;
}, "findNearestBinarySearch");
function fh({
  measurements: e,
  outerSize: t,
  scrollOffset: o
}) {
  let i = e.length - 1, r = iu(0, i, /* @__PURE__ */ a((u) => e[u].start, "getOffset"), o), l = r;
  for (; l < i && e[l].end < o + t; )
    l++;
  return { startIndex: r, endIndex: l };
}
a(fh, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var mh = typeof document < "u" ? Rt : R;
function hh(e) {
  let t = jt(() => ({}), {})[1], o = {
    ...e,
    onChange: /* @__PURE__ */ a((n, r) => {
      var l;
      r ? po(t) : t(), (l = e.onChange) == null || l.call(e, n, r);
    }, "onChange")
  }, [i] = $(
    () => new fr(o)
  );
  return i.setOptions(o), R(() => i._didMount(), []), mh(() => i._willUpdate()), i;
}
a(hh, "useVirtualizerBase");
function su(e) {
  return hh({
    observeElementRect: ou,
    observeElementOffset: ru,
    scrollToFn: nu,
    ...e
  });
}
a(su, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var au = /* @__PURE__ */ a(({
  parentRef: e,
  rowVirtualizer: t,
  selectedItem: o
}) => {
  R(() => {
    let i = /* @__PURE__ */ a((n) => {
      if (!e.current)
        return;
      let r = t.options.count, l = document.activeElement, u = parseInt(l.getAttribute("data-index") || "-1", 10), c = l.tagName === "INPUT",
      d = /* @__PURE__ */ a(() => document.querySelector('[data-index="0"]'), "getFirstElement"), p = /* @__PURE__ */ a(() => document.querySelector(
      `[data-index="${r - 1}"]`), "getLastElement");
      if (n.code === "ArrowDown" && l) {
        if (n.stopPropagation(), c) {
          d()?.focus();
          return;
        }
        if (u === r - 1) {
          po(() => {
            t.scrollToIndex(0, { align: "start" });
          }), setTimeout(() => {
            d()?.focus();
          }, 100);
          return;
        }
        if (o === u) {
          document.querySelector(
            `[data-index-position="${o}_first"]`
          )?.focus();
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("last")) {
          document.querySelector(
            `[data-index="${o + 1}"]`
          )?.focus();
          return;
        }
        l.nextElementSibling?.focus();
      }
      if (n.code === "ArrowUp" && l) {
        if (c) {
          po(() => {
            t.scrollToIndex(r - 1, { align: "start" });
          }), setTimeout(() => {
            p()?.focus();
          }, 100);
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("first")) {
          document.querySelector(
            `[data-index="${o}"]`
          )?.focus();
          return;
        }
        l.previousElementSibling?.focus();
      }
    }, "handleArrowKeys");
    return document.addEventListener("keydown", i, { capture: !0 }), () => {
      document.removeEventListener("keydown", i, { capture: !0 });
    };
  }, [t, o, e]);
}, "useArrowKeyNavigation");

// src/manager/components/sidebar/FileList.tsx
var lu = x("div")(({ theme: e }) => ({
  marginTop: "-16px",
  // after element which fades out the list
  "&::after": {
    content: '""',
    position: "fixed",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80px",
    background: `linear-gradient(${In(e.barBg, 0)} 10%, ${e.barBg} 80%)`
  }
})), mr = x("div")(({ theme: e }) => ({
  height: "280px",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  position: "relative",
  "::-webkit-scrollbar": {
    display: "none"
  }
})), uu = x("li")(({ theme: e }) => ({
  ":focus-visible": {
    outline: "none",
    ".file-list-item": {
      borderRadius: "4px",
      background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
      "> svg": {
        display: "flex"
      }
    }
  }
})), hr = x("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
})), cu = x.div(({ theme: e, selected: t, disabled: o, error: i }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "4px",
  ...t && {
    borderRadius: "4px",
    background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  ...o && {
    cursor: "not-allowed",
    div: {
      color: `${e.color.mediumdark} !important`
    }
  },
  ...i && {
    background: e.base === "light" ? "#00000011" : "#00000033"
  },
  "&:hover": {
    background: i ? "#00000022" : e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  }
})), pu = x("ul")({
  margin: 0,
  padding: "0 0 0 0",
  width: "100%",
  position: "relative"
}), du = x("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "calc(100% - 50px)"
}), fu = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.color.secondary
})), mu = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.base === "dark" ? e.color.lighter : e.color.darkest,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), hu = x("div")(({ theme: e }) => ({
  color: e.color.mediumdark,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), gu = x("ul")(({ theme: e }) => ({
  margin: 0,
  padding: 0
})), yu = x("li")(({ theme: e, error: t }) => ({
  padding: "8px 16px 8px 16px",
  marginLeft: "30px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "4px",
  ":focus-visible": {
    outline: "none"
  },
  ...t && {
    background: "#F9ECEC",
    color: e.color.negativeText
  },
  "&:hover,:focus-visible": {
    background: t ? "#F9ECEC" : e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  "> div > svg": {
    color: t ? e.color.negativeText : e.color.secondary
  }
})), bu = x("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "calc(100% - 20px)"
})), vu = x("span")(({ theme: e }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "calc(100% - 160px)",
  display: "inline-block"
})), xu = x("span")(({ theme: e }) => ({
  display: "inline-block",
  padding: `1px ${e.appBorderRadius}px`,
  borderRadius: "2px",
  fontSize: "10px",
  color: e.base === "dark" ? e.color.lightest : "#727272",
  backgroundColor: e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5"
})), Iu = x("div")(({ theme: e }) => ({
  textAlign: "center",
  maxWidth: "334px",
  margin: "16px auto 50px auto",
  fontSize: "14px",
  color: e.base === "dark" ? e.color.lightest : "#000"
})), Su = x("p")(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.defaultText : e.color.mediumdark
}));

// src/manager/components/sidebar/FileSearchListSkeleton.tsx
var gh = x("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px"
})), yh = x("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderRadius: "3px"
}), bh = x.div(({ theme: e }) => ({
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginTop: "1px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`
})), wu = x.div(({ theme: e }) => ({
  height: "16px",
  borderRadius: "3px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  width: "100%",
  maxWidth: "100%",
  "+ div": {
    marginTop: "6px"
  }
})), Eu = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(mr, null, [1, 2, 3].map((e) => /* @__PURE__ */ s.createElement(hr, { key: e },
/* @__PURE__ */ s.createElement(gh, null, /* @__PURE__ */ s.createElement(bh, null), /* @__PURE__ */ s.createElement(yh, null, /* @__PURE__ */ s.
createElement(wu, { style: { width: "90px" } }), /* @__PURE__ */ s.createElement(wu, { style: { width: "300px" } })))))), "FileSearchListLoa\
dingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var Cu = x(ia)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), vh = x(qt)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), _u = io(/* @__PURE__ */ a(function({
  isLoading: t,
  searchResults: o,
  onNewStory: i,
  errorItemId: n
}) {
  let [r, l] = $(null), u = s.useRef(), c = K(() => [...o ?? []].sort((f, b) => {
    let S = f.exportedComponents === null || f.exportedComponents?.length === 0, E = f.storyFileExists, m = b.exportedComponents === null ||
    b.exportedComponents?.length === 0, v = b.storyFileExists;
    return E && !v ? -1 : v && !E || S && !m ? 1 : !S && m ? -1 : 0;
  }), [o]), d = o?.length || 0, p = su({
    count: d,
    // @ts-expect-error (non strict)
    getScrollElement: /* @__PURE__ */ a(() => u.current, "getScrollElement"),
    paddingStart: 16,
    paddingEnd: 40,
    estimateSize: /* @__PURE__ */ a(() => 54, "estimateSize"),
    overscan: 2
  });
  au({ rowVirtualizer: p, parentRef: u, selectedItem: r });
  let g = A(
    ({ virtualItem: f, searchResult: b, itemId: S }) => {
      b?.exportedComponents?.length > 1 ? l((E) => E === f.index ? null : f.index) : b?.exportedComponents?.length === 1 && i({
        componentExportName: b.exportedComponents[0].name,
        componentFilePath: b.filepath,
        componentIsDefaultExport: b.exportedComponents[0].default,
        selectedItemId: S,
        componentExportCount: 1
      });
    },
    [i]
  ), h = A(
    ({ searchResult: f, component: b, id: S }) => {
      i({
        componentExportName: b.name,
        componentFilePath: f.filepath,
        componentIsDefaultExport: b.default,
        selectedItemId: S,
        // @ts-expect-error (non strict)
        componentExportCount: f.exportedComponents.length
      });
    },
    [i]
  ), y = A(
    ({ virtualItem: f, selected: b, searchResult: S }) => {
      let E = n === S.filepath, m = b === f.index;
      return /* @__PURE__ */ s.createElement(
        hr,
        {
          "aria-expanded": m,
          "aria-controls": `file-list-export-${f.index}`,
          id: `file-list-item-wrapper-${f.index}`
        },
        /* @__PURE__ */ s.createElement(
          cu,
          {
            className: "file-list-item",
            selected: m,
            error: E,
            disabled: S.exportedComponents === null || S.exportedComponents?.length === 0
          },
          /* @__PURE__ */ s.createElement(fu, { error: E }, /* @__PURE__ */ s.createElement(gn, null)),
          /* @__PURE__ */ s.createElement(du, null, /* @__PURE__ */ s.createElement(mu, { error: E }, S.filepath.split("/").at(-1)), /* @__PURE__ */ s.
          createElement(hu, null, S.filepath)),
          m ? /* @__PURE__ */ s.createElement(vh, null) : /* @__PURE__ */ s.createElement(Cu, null)
        ),
        S?.exportedComponents?.length > 1 && m && /* @__PURE__ */ s.createElement(
          gu,
          {
            role: "region",
            id: `file-list-export-${f.index}`,
            "aria-labelledby": `file-list-item-wrapper-${f.index}`,
            onClick: (v) => {
              v.stopPropagation();
            },
            onKeyUp: (v) => {
              v.key === "Enter" && v.stopPropagation();
            }
          },
          S.exportedComponents?.map((v, I) => {
            let w = n === `${S.filepath}_${I}`, k = I === 0 ? "first" : (
              // @ts-expect-error (non strict)
              I === S.exportedComponents.length - 1 ? "last" : "middle"
            );
            return /* @__PURE__ */ s.createElement(
              yu,
              {
                tabIndex: 0,
                "data-index-position": `${f.index}_${k}`,
                key: v.name,
                error: w,
                onClick: () => {
                  h({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${I}`
                  });
                },
                onKeyUp: (_) => {
                  _.key === "Enter" && h({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${I}`
                  });
                }
              },
              /* @__PURE__ */ s.createElement(bu, null, /* @__PURE__ */ s.createElement(gn, null), v.default ? /* @__PURE__ */ s.createElement(
              s.Fragment, null, /* @__PURE__ */ s.createElement(vu, null, S.filepath.split("/").at(-1)?.split(".")?.at(0)), /* @__PURE__ */ s.
              createElement(xu, null, "Default export")) : v.name),
              /* @__PURE__ */ s.createElement(Cu, null)
            );
          })
        )
      );
    },
    [h, n]
  );
  return t && (o === null || o?.length === 0) ? /* @__PURE__ */ s.createElement(Eu, null) : o?.length === 0 ? /* @__PURE__ */ s.createElement(
  Iu, null, /* @__PURE__ */ s.createElement("p", null, "We could not find any file with that name"), /* @__PURE__ */ s.createElement(Su, null,
  "You may want to try using different keywords, check for typos, and adjust your filters")) : c?.length > 0 ? /* @__PURE__ */ s.createElement(
  lu, null, /* @__PURE__ */ s.createElement(mr, { ref: u }, /* @__PURE__ */ s.createElement(
    pu,
    {
      style: {
        height: `${p.getTotalSize()}px`
      }
    },
    p.getVirtualItems().map((f) => {
      let b = c[f.index], S = b.exportedComponents === null || b.exportedComponents?.length === 0, E = {};
      return /* @__PURE__ */ s.createElement(
        uu,
        {
          key: f.key,
          "data-index": f.index,
          ref: p.measureElement,
          onClick: () => {
            g({
              virtualItem: f,
              itemId: b.filepath,
              searchResult: b
            });
          },
          onKeyUp: (m) => {
            m.key === "Enter" && g({
              virtualItem: f,
              itemId: b.filepath,
              searchResult: b
            });
          },
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${f.start}px)`
          },
          tabIndex: 0
        },
        S ? /* @__PURE__ */ s.createElement(
          _e,
          {
            ...E,
            style: { width: "100%" },
            hasChrome: !1,
            closeOnOutsideClick: !0,
            tooltip: /* @__PURE__ */ s.createElement(
              It,
              {
                note: S ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
              }
            )
          },
          /* @__PURE__ */ s.createElement(
            y,
            {
              searchResult: b,
              selected: r,
              virtualItem: f
            }
          )
        ) : /* @__PURE__ */ s.createElement(
          y,
          {
            ...E,
            key: f.index,
            searchResult: b,
            selected: r,
            virtualItem: f
          }
        )
      );
    })
  ))) : null;
}, "FileSearchList"));

// src/manager/components/sidebar/FileSearchModal.tsx
var xh = 418, Ih = x(xt)(() => ({
  boxShadow: "none",
  background: "transparent",
  overflow: "visible"
})), Sh = x.div(({ theme: e, height: t }) => ({
  backgroundColor: e.background.bar,
  borderRadius: 6,
  boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px",
  padding: "16px",
  transition: "height 0.3s",
  height: t ? `${t + 32}px` : "auto",
  overflow: "hidden"
})), wh = x(xt.Content)(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.lighter : e.color.mediumdark
})), Eh = x(Ho.Input)(({ theme: e }) => ({
  paddingLeft: 40,
  paddingRight: 28,
  fontSize: 14,
  height: 40,
  ...e.base === "light" && {
    color: e.color.darkest
  },
  "::placeholder": {
    color: e.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${e.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), Ch = x.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
}), _h = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 16,
  zIndex: 1,
  pointerEvents: "none",
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%"
})), Th = x.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  right: 16,
  zIndex: 1,
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  animation: "spin 1s linear infinite"
})), kh = x(xt.Error)({
  position: "absolute",
  padding: "8px 40px 8px 16px",
  bottom: 0,
  maxHeight: "initial",
  width: "100%",
  div: {
    wordBreak: "break-word"
  },
  "> div": {
    padding: 0
  }
}), Oh = x(Uo)({
  position: "absolute",
  top: 4,
  right: -24,
  cursor: "pointer"
}), Tu = /* @__PURE__ */ a(({
  open: e,
  onOpenChange: t,
  fileSearchQuery: o,
  setFileSearchQuery: i,
  isLoading: n,
  error: r,
  searchResults: l,
  onCreateNewStory: u,
  setError: c,
  container: d
}) => {
  let [p, g] = eu(), [h, y] = $(g.height), [, f] = ys(), [b, S] = $(o);
  return R(() => {
    h < g.height && y(g.height);
  }, [g.height, h]), /* @__PURE__ */ s.createElement(
    Ih,
    {
      height: xh,
      width: 440,
      open: e,
      onOpenChange: t,
      onEscapeKeyDown: () => {
        t(!1);
      },
      onInteractOutside: () => {
        t(!1);
      },
      container: d
    },
    /* @__PURE__ */ s.createElement(Sh, { height: o === "" ? g.height : h }, /* @__PURE__ */ s.createElement(wh, { ref: p }, /* @__PURE__ */ s.
    createElement(xt.Header, null, /* @__PURE__ */ s.createElement(xt.Title, null, "Add a new story"), /* @__PURE__ */ s.createElement(xt.Description,
    null, "We will create a new story for your component")), /* @__PURE__ */ s.createElement(Ch, null, /* @__PURE__ */ s.createElement(_h, null,
    /* @__PURE__ */ s.createElement(Xo, null)), /* @__PURE__ */ s.createElement(
      Eh,
      {
        placeholder: "./components/**/*.tsx",
        type: "search",
        required: !0,
        autoFocus: !0,
        value: b,
        onChange: (E) => {
          let m = E.target.value;
          S(m), f(() => {
            i(m);
          });
        }
      }
    ), n && /* @__PURE__ */ s.createElement(Th, null, /* @__PURE__ */ s.createElement(dt, null))), /* @__PURE__ */ s.createElement(
      _u,
      {
        errorItemId: r?.selectedItemId,
        isLoading: n,
        searchResults: l,
        onNewStory: u
      }
    ))),
    r && o !== "" && /* @__PURE__ */ s.createElement(kh, null, /* @__PURE__ */ s.createElement("div", null, r.error), /* @__PURE__ */ s.createElement(
      Oh,
      {
        onClick: () => {
          c(null);
        }
      }
    ))
  );
}, "FileSearchModal");

// src/manager/components/sidebar/FileSearchModal.utils.tsx
function ku(e) {
  return Object.keys(e).reduce(
    (o, i) => {
      let n = e[i];
      if (typeof n.control == "object" && "type" in n.control)
        switch (n.control.type) {
          case "object":
            o[i] = {};
            break;
          case "inline-radio":
          case "radio":
          case "inline-check":
          case "check":
          case "select":
          case "multi-select":
            o[i] = n.control.options?.[0];
            break;
          case "color":
            o[i] = "#000000";
            break;
          default:
            break;
        }
      return gr(n.type, o, i), o;
    },
    {}
  );
}
a(ku, "extractSeededRequiredArgs");
function gr(e, t, o) {
  if (!(typeof e == "string" || !e.required))
    switch (e.name) {
      case "boolean":
        t[o] = !0;
        break;
      case "number":
        t[o] = 0;
        break;
      case "string":
        t[o] = o;
        break;
      case "array":
        t[o] = [];
        break;
      case "object":
        t[o] = {}, Object.entries(e.value ?? {}).forEach(([i, n]) => {
          gr(n, t[o], i);
        });
        break;
      case "function":
        t[o] = () => {
        };
        break;
      case "intersection":
        e.value?.every((i) => i.name === "object") && (t[o] = {}, e.value?.forEach((i) => {
          i.name === "object" && Object.entries(i.value ?? {}).forEach(([n, r]) => {
            gr(r, t[o], n);
          });
        }));
        break;
      case "union":
        e.value?.[0] !== void 0 && gr(e.value[0], t, o);
        break;
      case "enum":
        e.value?.[0] !== void 0 && (t[o] = e.value?.[0]);
        break;
      case "other":
        typeof e.value == "string" && e.value === "tuple" && (t[o] = []);
        break;
      default:
        break;
    }
}
a(gr, "setArgType");
async function yr(e, t, o = 1) {
  if (o > 10)
    throw new Error("We could not select the new story. Please try again.");
  try {
    await e(t);
  } catch {
    return await new Promise((n) => setTimeout(n, 500)), yr(e, t, o + 1);
  }
}
a(yr, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var Ph = /* @__PURE__ */ a((e) => JSON.stringify(e, (t, o) => typeof o == "function" ? "__sb_empty_function_arg__" : o), "stringifyArgs"), Ou = /* @__PURE__ */ a(
({ open: e, onOpenChange: t }) => {
  let [o, i] = $(!1), [n, r] = $(""), l = Jl(n, 600), u = gs(l), c = U(null), [d, p] = $(
    null
  ), g = ne(), [h, y] = $(null), f = A(
    (m) => {
      g.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${m} was created`
        },
        duration: 8e3,
        icon: /* @__PURE__ */ s.createElement(je, null)
      }), t(!1);
    },
    [g, t]
  ), b = A(() => {
    g.addNotification({
      id: "create-new-story-file-error",
      content: {
        headline: "Story already exists",
        subHeadline: "Successfully navigated to existing story"
      },
      duration: 8e3,
      icon: /* @__PURE__ */ s.createElement(je, null)
    }), t(!1);
  }, [g, t]), S = A(() => {
    i(!0);
    let m = Ue.getChannel(), v = /* @__PURE__ */ a((I) => {
      I.id === u && (I.success ? y(I.payload.files) : p({ error: I.error }), m.off(_o, v), i(!1), c.current = null);
    }, "set");
    return m.on(_o, v), u !== "" && c.current !== u ? (c.current = u, m.emit(ss, {
      id: u,
      payload: {}
    })) : (y(null), i(!1)), () => {
      m.off(_o, v);
    };
  }, [u]), E = A(
    async ({
      componentExportName: m,
      componentFilePath: v,
      componentIsDefaultExport: I,
      componentExportCount: w,
      selectedItemId: k
    }) => {
      try {
        let _ = Ue.getChannel(), T = await To(_, ns, is, {
          componentExportName: m,
          componentFilePath: v,
          componentIsDefaultExport: I,
          componentExportCount: w
        });
        p(null);
        let C = T.storyId;
        await yr(g.selectStory, C);
        try {
          let P = (await To(_, ts, os, {
            storyId: C
          })).argTypes, M = ku(P);
          await To(
            _,
            ls,
            us,
            {
              args: Ph(M),
              importPath: T.storyFilePath,
              csfId: C
            }
          );
        } catch {
        }
        f(m), S();
      } catch (_) {
        switch (_?.payload?.type) {
          case "STORY_FILE_EXISTS":
            let T = _;
            await yr(g.selectStory, T.payload.kind), b();
            break;
          default:
            p({ selectedItemId: k, error: _?.message });
            break;
        }
      }
    },
    [g?.selectStory, f, S, b]
  );
  return R(() => {
    p(null);
  }, [u]), R(() => S(), [S]), /* @__PURE__ */ s.createElement(
    Tu,
    {
      error: d,
      fileSearchQuery: n,
      fileSearchQueryDeferred: u,
      onCreateNewStory: E,
      isLoading: o,
      onOpenChange: t,
      open: e,
      searchResults: h,
      setError: p,
      setFileSearchQuery: r
    }
  );
}, "CreateNewStoryFileModal");

// src/manager/components/sidebar/HighlightStyles.tsx
var Pu = /* @__PURE__ */ a(({ refId: e, itemId: t }) => /* @__PURE__ */ s.createElement(
  Wt,
  {
    styles: ({ color: o }) => {
      let i = ye(0.85, o.secondary);
      return {
        [`[data-ref-id="${e}"][data-item-id="${t}"]:not([data-selected="true"])`]: {
          '&[data-nodetype="component"], &[data-nodetype="group"]': {
            background: i,
            "&:hover, &:focus": { background: i }
          },
          '&[data-nodetype="story"], &[data-nodetype="document"]': {
            color: o.defaultText,
            background: i,
            "&:hover, &:focus": { background: i }
          }
        }
      };
    }
  }
), "HighlightStyles");

// src/manager/utils/tree.ts
var eo = Be(ir(), 1);
var { document: Du, window: Ah } = ie, br = /* @__PURE__ */ a((e, t) => !t || t === ot ? e : `${t}_${e}`, "createId"), Lu = /* @__PURE__ */ a(
(e, t) => `${Du.location.pathname}?path=/${e.type}/${br(e.id, t)}`, "getLink");
var Au = (0, eo.default)(1e3)((e, t) => t[e]), Mh = (0, eo.default)(1e3)((e, t) => {
  let o = Au(e, t);
  return o && o.type !== "root" ? Au(o.parent, t) : void 0;
}), Nu = (0, eo.default)(1e3)((e, t) => {
  let o = Mh(e, t);
  return o ? [o, ...Nu(o.id, t)] : [];
}), go = (0, eo.default)(1e3)(
  (e, t) => Nu(t, e).map((o) => o.id)
), tt = (0, eo.default)(1e3)((e, t, o) => {
  let i = e[t];
  return (i.type === "story" || i.type === "docs" ? [] : i.children).reduce((r, l) => {
    let u = e[l];
    return !u || o && (u.type === "story" || u.type === "docs") || r.push(l, ...tt(e, l, o)), r;
  }, []);
});
function Fu(e, t) {
  let o = e.type !== "root" && e.parent ? t.index[e.parent] : null;
  return o ? [...Fu(o, t), o.name] : t.id === ot ? [] : [t.title || t.id];
}
a(Fu, "getPath");
var Wn = /* @__PURE__ */ a((e, t) => ({ ...e, refId: t.id, path: Fu(e, t) }), "searchItem");
function Bu(e, t, o) {
  let i = t + o % e.length;
  return i < 0 && (i = e.length + i), i >= e.length && (i -= e.length), i;
}
a(Bu, "cycle");
var Ot = /* @__PURE__ */ a((e, t = !1) => {
  if (!e)
    return;
  let { top: o, bottom: i } = e.getBoundingClientRect();
  o >= 0 && i <= (Ah.innerHeight || Du.documentElement.clientHeight) || e.scrollIntoView({ block: t ? "center" : "nearest" });
}, "scrollIntoView"), Hu = /* @__PURE__ */ a((e, t, o, i) => {
  switch (!0) {
    case t:
      return "auth";
    case o:
      return "error";
    case e:
      return "loading";
    case i:
      return "empty";
    default:
      return "ready";
  }
}, "getStateType"), Pt = /* @__PURE__ */ a((e, t) => !e || !t ? !1 : e === t ? !0 : Pt(e.parentElement || void 0, t), "isAncestor"), Mu = /* @__PURE__ */ a(
(e) => e.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName"), zu = /* @__PURE__ */ a((e, t) => Mu(e) === Mu(t), "isStoryHoistable");

// global-externals:@storybook/core/client-logger
var $P = __STORYBOOK_CLIENT_LOGGER__, { deprecate: KP, logger: Ru, once: UP, pretty: qP } = __STORYBOOK_CLIENT_LOGGER__;

// src/manager/components/sidebar/Loader.tsx
var ju = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3], Dh = x.div(
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth: e = 0 }) => ({
    marginLeft: e * 15,
    maxWidth: 85 - e * 5
  }),
  ({ theme: e }) => e.animation.inlineGlow,
  ({ theme: e }) => ({
    background: e.appBorderColor
  })
), yo = x.div({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
}), Wu = /* @__PURE__ */ a(({ size: e }) => {
  let t = Math.ceil(e / ju.length), o = Array.from(Array(t)).fill(ju).flat().slice(0, e);
  return /* @__PURE__ */ s.createElement(we, null, o.map((i, n) => /* @__PURE__ */ s.createElement(Dh, { depth: i, key: n })));
}, "Loader");

// src/manager/components/sidebar/RefBlocks.tsx
var { window: Vu } = ie, Lh = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0
})), Vn = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: e.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
})), Nh = x.pre(
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme: e }) => ({
    color: e.color.dark
  })
), $u = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let [o, i] = $(!1), n = A(() => {
    Vu.document.location.reload();
  }, []), r = A((l) => {
    l.preventDefault();
    let u = Vu.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), c = setInterval(() => {
      u ? u.closed && (clearInterval(c), i(!0)) : (Ru.error("unable to access loginUrl window"), clearInterval(c));
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(yo, null, /* @__PURE__ */ s.createElement(nt, null, o ? /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.
  createElement(Vn, null, "Authentication on ", /* @__PURE__ */ s.createElement("strong", null, e), " concluded. Refresh the page to fetch t\
his Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(fe, { small: !0, gray: !0, onClick: n }, /* @__PURE__ */ s.
  createElement(dt, null), "Refresh now"))) : /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(Vn, null, "Sign in t\
o browse this Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(fe, { small: !0, gray: !0, onClick: r },
  /* @__PURE__ */ s.createElement(Yo, null), "Sign in")))));
}, "AuthBlock"), Ku = /* @__PURE__ */ a(({ error: e }) => /* @__PURE__ */ s.createElement(yo, null, /* @__PURE__ */ s.createElement(nt, null,
/* @__PURE__ */ s.createElement(Lh, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ s.createElement("br", null),
/* @__PURE__ */ s.createElement(
  _e,
  {
    tooltip: /* @__PURE__ */ s.createElement(Nh, null, /* @__PURE__ */ s.createElement(Js, { error: e }))
  },
  /* @__PURE__ */ s.createElement(Ae, { isButton: !0 }, "View error ", /* @__PURE__ */ s.createElement(qt, null))
), " ", /* @__PURE__ */ s.createElement(Ae, { withArrow: !0, href: "https://storybook.js.org/docs", cancel: !1, target: "_blank" }, "View do\
cs")))), "ErrorBlock"), Fh = x(nt)({
  display: "flex"
}), Bh = x(nt)({
  flex: 1
}), Uu = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(yo, null, /* @__PURE__ */ s.createElement(Fh, { col: 1 }, /* @__PURE__ */ s.
createElement(Bh, null, /* @__PURE__ */ s.createElement(Vn, null, e ? /* @__PURE__ */ s.createElement(s.Fragment, null, "Oh no! Your Storybo\
ok is empty. Possible reasons why:", /* @__PURE__ */ s.createElement("ul", null, /* @__PURE__ */ s.createElement("li", null, "The glob speci\
fied in ", /* @__PURE__ */ s.createElement("code", null, "main.js"), " isn't correct."), /* @__PURE__ */ s.createElement("li", null, "No sto\
ries are defined in your story files."), /* @__PURE__ */ s.createElement("li", null, "You're using filter-functions, and all stories are fil\
tered away.")), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null, "This composed storybook is empty, maybe you're using filter-functi\
ons, and all stories are filtered away."))))), "EmptyBlock"), qu = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(yo, null,
/* @__PURE__ */ s.createElement(Wu, { size: e ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: Hh, window: zh } = ie, Rh = x.aside(({ theme: e }) => ({
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: e.layoutMargin
  }
})), jh = x.button(({ theme: e }) => ({
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
  color: e.base === "light" ? ye(0.3, e.color.defaultText) : ye(0.6, e.color.defaultText),
  "&:hover": {
    color: e.barSelectedColor
  },
  "&:focus": {
    color: e.barSelectedColor,
    borderColor: e.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
})), At = x.span(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Mt = x.a(({ theme: e }) => ({
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: e.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${e.appBorderColor}`
  },
  "&:hover": {
    background: e.background.hoverable,
    color: e.color.darker
  },
  "&:link": {
    color: e.color.darker
  },
  "&:active": {
    color: e.color.darker
  },
  "&:focus": {
    color: e.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
})), Wh = x.div({
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
}), Vh = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s1,
  fontWeight: e.typography.weight.regular,
  color: e.base === "light" ? ye(0.3, e.color.defaultText) : ye(0.6, e.color.defaultText),
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
})), $h = /* @__PURE__ */ a(({ url: e, versions: t }) => {
  let o = K(() => {
    let i = Object.entries(t).find(([n, r]) => r === e);
    return i && i[0] ? i[0] : "current";
  }, [e, t]);
  return /* @__PURE__ */ s.createElement(Vh, null, /* @__PURE__ */ s.createElement("span", null, o), /* @__PURE__ */ s.createElement(qt, null));
}, "CurrentVersion"), Gu = s.memo(
  hs(
    ({ state: e, ...t }, o) => {
      let i = ne(), n = K(() => Object.values(t.index || {}), [t.index]), r = K(
        () => n.filter((u) => u.type === "component").length,
        [n]
      ), l = K(
        () => n.filter((u) => u.type === "docs" || u.type === "story").length,
        [n]
      );
      return /* @__PURE__ */ s.createElement(Rh, { ref: o }, /* @__PURE__ */ s.createElement(
        _e,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: /* @__PURE__ */ s.createElement(Wh, null, /* @__PURE__ */ s.createElement(nt, { row: 0 }, e === "loading" && /* @__PURE__ */ s.
          createElement(Qh, { url: t.url }), (e === "error" || e === "empty") && /* @__PURE__ */ s.createElement(Yh, { url: t.url }), e === "\
ready" && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Kh, { url: t.url, componentCount: r, leafCount: l }),
          t.sourceUrl && /* @__PURE__ */ s.createElement(Uh, { url: t.sourceUrl })), e === "auth" && /* @__PURE__ */ s.createElement(qh, { ...t }),
          t.type === "auto-inject" && e !== "error" && /* @__PURE__ */ s.createElement(Xh, null), e !== "loading" && /* @__PURE__ */ s.createElement(
          Gh, null)))
        },
        /* @__PURE__ */ s.createElement(jh, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ s.createElement(
        yn, null))
      ), t.versions && Object.keys(t.versions).length ? /* @__PURE__ */ s.createElement(
        _e,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: (u) => /* @__PURE__ */ s.createElement(
            pt,
            {
              links: Object.entries(t.versions).map(([c, d]) => ({
                icon: d === t.url ? /* @__PURE__ */ s.createElement(je, null) : void 0,
                id: c,
                title: c,
                href: d,
                onClick: /* @__PURE__ */ a((p, g) => {
                  p.preventDefault(), i.changeRefVersion(t.id, g.href), u.onHide();
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ s.createElement($h, { url: t.url, versions: t.versions })
      ) : null);
    }
  )
), Kh = /* @__PURE__ */ a(({ url: e, componentCount: t, leafCount: o }) => {
  let i = Oe();
  return /* @__PURE__ */ s.createElement(Mt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(yn,
  { color: i.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "View external Story\
book"), /* @__PURE__ */ s.createElement("div", null, "Explore ", t, " components and ", o, " stories in a new browser tab.")));
}, "ReadyMessage"), Uh = /* @__PURE__ */ a(({ url: e }) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Mt, { href: e, target: "_blank" }, /* @__PURE__ */ s.createElement(ba, { color: t.color.secondary }),
  /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "View source code")));
}, "SourceCodeMessage"), qh = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let o = Oe(), i = A((n) => {
    n.preventDefault();
    let r = zh.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), l = setInterval(() => {
      r ? r.closed && (clearInterval(l), Hh.location.reload()) : clearInterval(l);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Mt, { onClick: i }, /* @__PURE__ */ s.createElement(Yo, { color: o.color.gold }), /* @__PURE__ */ s.
  createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "Log in required"), /* @__PURE__ */ s.createElement("div", null, "You\
 need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage"), Gh = /* @__PURE__ */ a(() => {
  let e = Oe();
  return /* @__PURE__ */ s.createElement(Mt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(Gt, { color: e.color.green }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "Read \
Composition docs"), /* @__PURE__ */ s.createElement("div", null, "Learn how to combine multiple Storybooks into one.")));
}, "ReadDocsMessage"), Yh = /* @__PURE__ */ a(({ url: e }) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Mt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement($o,
  { color: t.color.negative }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "Something went wrong"),
  /* @__PURE__ */ s.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage"), Qh = /* @__PURE__ */ a(({ url: e }) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Mt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(Ta,
  { color: t.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "Please wait"), /* @__PURE__ */ s.
  createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage"), Xh = /* @__PURE__ */ a(() => {
  let e = Oe();
  return /* @__PURE__ */ s.createElement(Mt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(ga, { color: e.color.gold }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(At, null, "Reduce\
 lag"), /* @__PURE__ */ s.createElement("div", null, "Learn how to speed up Composition performance.")));
}, "PerformanceDegradedMessage");

// src/manager/components/sidebar/IconSymbols.tsx
var Zh = x.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`, Yu = "icon--group", Qu = "icon--component", Xu = "icon--document", Zu = "icon--story", Ju = "icon--success", ec = "icon--error", tc = "ic\
on--warning", oc = "icon--dot", rc = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Zh, { "data-chromatic": "ignore" }, /* @__PURE__ */ s.
createElement("symbol", { id: Yu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v\
-8.5a.5.5 0 00-.5-.5H7z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Qu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0\
 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Xu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 \
1h-5a.5.5 0 01-.5-.5z",
    fill: "currentColor"
  }
), /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0\
 00.5.5h2V13H2V1z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Zu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.\
5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Ju }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: ec }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: tc }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.4\
97.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: oc }, /* @__PURE__ */ s.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "curre\
ntColor" }))), "IconSymbols"), Le = /* @__PURE__ */ a(({ type: e }) => e === "group" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${Yu}` }) : e === "component" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Qu}` }) : e === "document" ? /* @__PURE__ */ s.createElement(
"use", { xlinkHref: `#${Xu}` }) : e === "story" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Zu}` }) : e === "success" ? /* @__PURE__ */ s.
createElement("use", { xlinkHref: `#${Ju}` }) : e === "error" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${ec}` }) : e === "war\
ning" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${tc}` }) : e === "dot" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${oc}` }) : null, "UseSymbol");

// src/manager/utils/status.tsx
var Jh = x(aa)({
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
}), eg = x(Jh)(({ theme: { animation: e, color: t, base: o } }) => ({
  // specificity hack
  animation: `${e.glow} 1.5s ease-in-out infinite`,
  color: o === "light" ? t.mediumdark : t.darker
})), tg = ["unknown", "pending", "success", "warn", "error"], bo = {
  unknown: [null, null],
  pending: [/* @__PURE__ */ s.createElement(eg, { key: "icon" }), "currentColor"],
  success: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Le, { type: "success" })),
    "currentColor"
  ],
  warn: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Le, { type: "warning" })),
    "#A15C20"
  ],
  error: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Le, { type: "error" })),
    "brown"
  ]
}, vo = /* @__PURE__ */ a((e) => tg.reduce(
  (t, o) => e.includes(o) ? o : t,
  "unknown"
), "getHighestStatus");
function vr(e, t) {
  return Object.values(e).reduce((o, i) => {
    if (i.type === "group" || i.type === "component") {
      let n = tt(e, i.id, !1).map((l) => e[l]).filter((l) => l.type === "story"), r = vo(
        // @ts-expect-error (non strict)
        n.flatMap((l) => Object.values(t?.[l.id] || {})).map((l) => l.status)
      );
      r && (o[i.id] = r);
    }
    return o;
  }, {});
}
a(vr, "getGroupStatus");

// src/manager/components/sidebar/StatusButton.tsx
var nc = /* @__PURE__ */ a(({ theme: e, status: t }) => {
  let o = e.base === "light" ? ye(0.3, e.color.defaultText) : ye(0.6, e.color.defaultText);
  return {
    color: {
      pending: o,
      success: e.color.positive,
      error: e.color.negative,
      warn: e.color.warning,
      unknown: o
    }[t]
  };
}, "withStatusColor"), ic = x.div(nc, {
  margin: 3
}), xo = x(ee)(
  nc,
  ({ theme: e, height: t, width: o }) => ({
    transition: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: o || 28,
    height: t || 28,
    "&:hover": {
      color: e.color.secondary
    },
    "&:focus": {
      color: e.color.secondary,
      borderColor: e.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    }
  }),
  ({ theme: e, selectedItem: t }) => t && {
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${e.color.secondary}`,
      background: "rgba(255, 255, 255, 0.2)"
    }
  }
);

// src/manager/components/sidebar/ContextMenu.tsx
var og = {
  onMouseEnter: /* @__PURE__ */ a(() => {
  }, "onMouseEnter"),
  node: null
}, sc = /* @__PURE__ */ a((e, t, o) => {
  let [i, n] = $(0), [r, l] = $(!1), u = K(() => ({
    onMouseEnter: /* @__PURE__ */ a(() => {
      n((p) => p + 1);
    }, "onMouseEnter"),
    onOpen: /* @__PURE__ */ a((p) => {
      p.stopPropagation(), l(!0);
    }, "onOpen"),
    onClose: /* @__PURE__ */ a(() => {
      l(!1);
    }, "onClose")
  }), []), d = K(() => {
    let p = o.getElements(
      Ee.experimental_TEST_PROVIDER
    );
    return i ? ac(p, e) : [];
  }, [o, e, i]).length > 0 || t.length > 0;
  return K(() => globalThis.CONFIG_TYPE !== "DEVELOPMENT" ? og : {
    onMouseEnter: u.onMouseEnter,
    node: d ? /* @__PURE__ */ s.createElement(
      _e,
      {
        "data-displayed": r ? "on" : "off",
        closeOnOutsideClick: !0,
        placement: "bottom-end",
        "data-testid": "context-menu",
        onVisibleChange: (p) => {
          p ? l(!0) : u.onClose();
        },
        tooltip: /* @__PURE__ */ s.createElement(rg, { context: e, links: t })
      },
      /* @__PURE__ */ s.createElement(xo, { type: "button", status: "pending" }, /* @__PURE__ */ s.createElement(ua, null))
    ) : null
  }, [e, u, r, d, t]);
}, "useContextMenu"), rg = /* @__PURE__ */ a(({
  context: e,
  links: t,
  ...o
}) => {
  let { testProviders: i } = De(), n = ac(i, e), l = (Array.isArray(t[0]) ? t : [t]).concat([n]);
  return /* @__PURE__ */ s.createElement(pt, { ...o, links: l });
}, "LiveContextMenu");
function ac(e, t) {
  return Object.entries(e).map(([o, i]) => {
    if (!i)
      return null;
    let n = i.sidebarContextMenu?.({ context: t, state: i });
    return n ? {
      id: o,
      content: n
    } : null;
  }).filter(Boolean);
}
a(ac, "generateTestProviderLinks");

// src/manager/components/sidebar/StatusContext.tsx
var $n = zt({}), lc = /* @__PURE__ */ a((e) => {
  let { data: t, status: o, groupStatus: i } = Oo($n), n = {
    counts: { pending: 0, success: 0, error: 0, warn: 0, unknown: 0 },
    statuses: { pending: {}, success: {}, error: {}, warn: {}, unknown: {} }
  };
  if (t && o && i && ["pending", "warn", "error"].includes(i[e.id]))
    for (let r of tt(t, e.id, !1))
      for (let l of Object.values(o[r] || {}))
        n.counts[l.status]++, n.statuses[l.status][r] = n.statuses[l.status][r] || [], n.statuses[l.status][r].push(l);
  return n;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var ng = x.div(({ theme: e, isExpanded: t }) => ({
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: ye(0.4, e.textMutedColor),
  transform: t ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
})), Dt = /* @__PURE__ */ a(({ isExpanded: e }) => /* @__PURE__ */ s.createElement(ng, { isExpanded: e }, /* @__PURE__ */ s.createElement("s\
vg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fill: "#73828C",
    fillRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
    clipRule: "evenodd"
  }
))), "CollapseIcon");

// src/manager/components/sidebar/TreeNode.tsx
var mt = x.svg(
  ({ theme: e, type: t }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: t === "group" ? e.base === "dark" ? e.color.primary : e.color.ultraviolet : t === "component" ? e.color.secondary : t === "docume\
nt" ? e.base === "dark" ? e.color.gold : "#ff8300" : t === "story" ? e.color.seafoam : "currentColor"
  })
), uc = x.button(({ theme: e, depth: t = 0, isExpandable: o = !1 }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  paddingLeft: `${(o ? 8 : 22) + t * 18}px`,
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 5,
  paddingBottom: 4
})), cc = x.a(({ theme: e, depth: t = 0 }) => ({
  width: "100%",
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  gap: 6,
  flex: 1,
  alignItems: "start",
  paddingLeft: `${22 + t * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  fontSize: `${e.typography.size.s2}px`,
  textDecoration: "none",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
})), pc = x.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor
})), xr = x.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
}), dc = s.memo(/* @__PURE__ */ a(function({
  children: t,
  isExpanded: o = !1,
  isExpandable: i = !1,
  ...n
}) {
  return /* @__PURE__ */ s.createElement(uc, { isExpandable: i, tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(xr, null, i && /* @__PURE__ */ s.
  createElement(Dt, { isExpanded: o }), /* @__PURE__ */ s.createElement(mt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
  /* @__PURE__ */ s.createElement(Le, { type: "group" }))), t);
}, "GroupNode")), fc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, isExpanded: i, isExpandable: n, isSelected: r, ...l }) {
    return /* @__PURE__ */ s.createElement(uc, { isExpandable: n, tabIndex: -1, ...l }, /* @__PURE__ */ s.createElement(xr, null, n && /* @__PURE__ */ s.
    createElement(Dt, { isExpanded: i }), /* @__PURE__ */ s.createElement(mt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "comp\
onent" }, /* @__PURE__ */ s.createElement(Le, { type: "component" }))), o);
  }, "ComponentNode")
), mc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, docsMode: i, ...n }) {
    return /* @__PURE__ */ s.createElement(cc, { tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(xr, null, /* @__PURE__ */ s.createElement(
    mt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ s.createElement(Le, { type: "document" }))), o);
  }, "DocumentNode")
), hc = s.memo(/* @__PURE__ */ a(function({
  theme: t,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ s.createElement(cc, { tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(xr, null, /* @__PURE__ */ s.createElement(
  mt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ s.createElement(Le, { type: "story" }))), o);
}, "StoryNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function Ir(e, t, { signal: o, edges: i } = {}) {
  let n, r = null, l = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), c = /* @__PURE__ */ a(() => {
    r !== null && (e.apply(n, r), n = void 0, r = null);
  }, "invoke"), d = /* @__PURE__ */ a(() => {
    u && c(), y();
  }, "onTimerEnd"), p = null, g = /* @__PURE__ */ a(() => {
    p != null && clearTimeout(p), p = setTimeout(() => {
      p = null, d();
    }, t);
  }, "schedule"), h = /* @__PURE__ */ a(() => {
    p !== null && (clearTimeout(p), p = null);
  }, "cancelTimer"), y = /* @__PURE__ */ a(() => {
    h(), n = void 0, r = null;
  }, "cancel"), f = /* @__PURE__ */ a(() => {
    h(), c();
  }, "flush"), b = /* @__PURE__ */ a(function(...S) {
    if (o?.aborted)
      return;
    n = this, r = S;
    let E = p == null;
    g(), l && E && c();
  }, "debounced");
  return b.schedule = g, b.cancel = y, b.flush = f, o?.addEventListener("abort", y, { once: !0 }), b;
}
a(Ir, "debounce");

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function Kn(e, t, { signal: o, edges: i = ["leading", "trailing"] } = {}) {
  let n = null, r = Ir(e, t, { signal: o, edges: i }), l = /* @__PURE__ */ a(function(...u) {
    n == null ? n = Date.now() : Date.now() - n >= t && (n = Date.now(), r.cancel(), r(...u)), r(...u);
  }, "throttled");
  return l.cancel = r.cancel, l.flush = r.flush, l;
}
a(Kn, "throttle");

// src/manager/keybinding.ts
var ig = {
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
}, sg = { alt: !1, ctrl: !1, meta: !1, shift: !1 }, ht = /* @__PURE__ */ a((e, t) => {
  let { alt: o, ctrl: i, meta: n, shift: r } = e === !1 ? sg : e;
  return !(typeof o == "boolean" && o !== t.altKey || typeof i == "boolean" && i !== t.ctrlKey || typeof n == "boolean" && n !== t.metaKey ||
  typeof r == "boolean" && r !== t.shiftKey);
}, "matchesModifiers"), We = /* @__PURE__ */ a((e, t) => t.code ? t.code === e : t.key === ig[e], "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: Un } = ie, ag = /* @__PURE__ */ a(({
  refId: e,
  data: t,
  initialExpanded: o,
  highlightedRef: i,
  rootIds: n
}) => {
  let r = i.current?.refId === e ? go(t, i.current?.itemId) : [];
  return [...n, ...r].reduce(
    // @ts-expect-error (non strict)
    (l, u) => Object.assign(l, { [u]: u in o ? o[u] : !0 }),
    {}
  );
}, "initializeExpanded"), lg = /* @__PURE__ */ a(() => {
}, "noop"), gc = /* @__PURE__ */ a(({
  containerRef: e,
  isBrowsing: t,
  refId: o,
  data: i,
  initialExpanded: n,
  rootIds: r,
  highlightedRef: l,
  setHighlightedItemId: u,
  selectedStoryId: c,
  onSelectStoryId: d
}) => {
  let p = ne(), [g, h] = jt(
    (m, { ids: v, value: I }) => v.reduce((w, k) => Object.assign(w, { [k]: I }), { ...m }),
    // @ts-expect-error (non strict)
    { refId: o, data: i, highlightedRef: l, rootIds: r, initialExpanded: n },
    ag
  ), y = A(
    (m) => e.current?.querySelector(`[data-item-id="${m}"]`),
    [e]
  ), f = A(
    (m) => {
      u(m.getAttribute("data-item-id")), Ot(m);
    },
    [u]
  ), b = A(
    ({ ids: m, value: v }) => {
      if (h({ ids: m, value: v }), m.length === 1) {
        let I = e.current?.querySelector(
          `[data-item-id="${m[0]}"][data-ref-id="${o}"]`
        );
        I && f(I);
      }
    },
    [e, f, o]
  );
  R(() => {
    h({ ids: go(i, c), value: !0 });
  }, [i, c]);
  let S = A(() => {
    let m = Object.keys(i).filter((v) => !r.includes(v));
    h({ ids: m, value: !1 });
  }, [i, r]), E = A(() => {
    h({ ids: Object.keys(i), value: !0 });
  }, [i]);
  return R(() => p ? (p.on(no, S), p.on(Jr, E), () => {
    p.off(no, S), p.off(Jr, E);
  }) : lg, [p, S, E]), R(() => {
    let m = Un.getElementById("storybook-explorer-menu"), v = Kn((I) => {
      let w = l.current?.refId === o && l.current?.itemId;
      if (!t || !e.current || !w || I.repeat || !ht(!1, I))
        return;
      let k = We("Enter", I), _ = We("Space", I), T = We("ArrowLeft", I), C = We("ArrowRight", I);
      if (!(k || _ || T || C))
        return;
      let O = y(w);
      if (!O || O.getAttribute("data-ref-id") !== o)
        return;
      let P = I.target;
      if (!Pt(m, P) && !Pt(P, m))
        return;
      if (P.hasAttribute("data-action")) {
        if (k || _)
          return;
        P.blur();
      }
      let M = O.getAttribute("data-nodetype");
      (k || _) && ["component", "story", "document"].includes(M) && d(w);
      let D = O.getAttribute("aria-expanded");
      if (T) {
        if (D === "true") {
          h({ ids: [w], value: !1 });
          return;
        }
        let N = O.getAttribute("data-parent-id"), Y = N && y(N);
        if (Y && Y.getAttribute("data-highlightable") === "true") {
          f(Y);
          return;
        }
        h({ ids: tt(i, w, !0), value: !1 });
        return;
      }
      C && (D === "false" ? b({ ids: [w], value: !0 }) : D === "true" && b({ ids: tt(i, w, !0), value: !0 }));
    }, 60);
    return Un.addEventListener("keydown", v), () => Un.removeEventListener("keydown", v);
  }, [
    e,
    t,
    o,
    i,
    l,
    u,
    d
  ]), [g, b];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var ug = x.div((e) => ({
  marginTop: e.hasOrphans ? 20 : 0,
  marginBottom: 20
})), cg = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: ye(0.93, e.color.secondary)
  }
})), yc = x.div(({ theme: e }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: e.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  "&:hover, &:focus": {
    background: ye(0.93, e.color.secondary),
    outline: "none"
  },
  '& [data-displayed="off"]': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"]': {
    visibility: "visible"
  },
  '& [data-displayed="on"] + *': {
    display: "none"
  },
  '&:hover [data-displayed="off"] + *': {
    display: "none"
  },
  '&[data-selected="true"]': {
    color: e.color.lightest,
    background: e.color.secondary,
    fontWeight: e.typography.weight.bold,
    "&&:hover, &&:focus": {
      background: e.color.secondary
    },
    svg: { color: e.color.lightest }
  },
  a: { color: "currentColor" }
})), pg = x(fe)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: e.color.secondary,
      width: "auto"
    }
  }
})), dg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(wa, { ...e, color: t.color.positive });
}, "SuccessStatusIcon"), fg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Sa, { ...e, color: t.color.negative });
}, "ErrorStatusIcon"), mg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(Ea, { ...e, color: t.color.warning });
}, "WarnStatusIcon"), hg = /* @__PURE__ */ a((e) => {
  let t = Oe();
  return /* @__PURE__ */ s.createElement(dt, { ...e, size: 12, color: t.color.defaultText });
}, "PendingStatusIcon"), qn = {
  success: /* @__PURE__ */ s.createElement(dg, null),
  error: /* @__PURE__ */ s.createElement(fg, null),
  warn: /* @__PURE__ */ s.createElement(mg, null),
  pending: /* @__PURE__ */ s.createElement(hg, null),
  unknown: null
};
var bc = ["success", "error", "warn", "pending", "unknown"], vc = s.memo(/* @__PURE__ */ a(function({
  item: t,
  status: o,
  groupStatus: i,
  refId: n,
  docsMode: r,
  isOrphan: l,
  isDisplayed: u,
  isSelected: c,
  isFullyExpanded: d,
  setFullyExpanded: p,
  isExpanded: g,
  setExpanded: h,
  onSelectStoryId: y,
  api: f
}) {
  let { isDesktop: b, isMobile: S, setMobileMenuOpen: E } = he(), { counts: m, statuses: v } = lc(t);
  if (!u)
    return null;
  let I = K(() => {
    if (t.type === "story" || t.type === "docs")
      return Object.entries(o || {}).filter(([, _]) => _.sidebarContextMenu !== !1).sort((_, T) => bc.indexOf(_[1].status) - bc.indexOf(T[1].
      status)).map(([_, T]) => ({
        id: _,
        title: T.title,
        description: T.description,
        "aria-label": `Test status for ${T.title}: ${T.status}`,
        icon: qn[T.status],
        onClick: /* @__PURE__ */ a(() => {
          y(t.id), T.onClick?.();
        }, "onClick")
      }));
    if (t.type === "component" || t.type === "group") {
      let _ = [];
      return m.error && _.push({
        id: "errors",
        icon: qn.error,
        title: `${m.error} ${m.error === 1 ? "story" : "stories"} with errors`,
        onClick: /* @__PURE__ */ a(() => {
          let [T, [C]] = Object.entries(v.error)[0];
          y(T), C.onClick?.();
        }, "onClick")
      }), m.warn && _.push({
        id: "warnings",
        icon: qn.warn,
        title: `${m.warn} ${m.warn === 1 ? "story" : "stories"} with warnings`,
        onClick: /* @__PURE__ */ a(() => {
          let [T, [C]] = Object.entries(v.warn)[0];
          y(T), C.onClick?.();
        }, "onClick")
      }), _;
    }
    return [];
  }, [
    m.error,
    m.warn,
    t.id,
    t.type,
    y,
    o,
    v.error,
    v.warn
  ]), w = br(t.id, n), k = sc(t, I, f);
  if (t.type === "story" || t.type === "docs") {
    let _ = t.type === "docs" ? mc : hc, T = vo(Object.values(o || {}).map((P) => P.status)), [C, O] = bo[T];
    return /* @__PURE__ */ s.createElement(
      yc,
      {
        key: w,
        className: "sidebar-item",
        "data-selected": c,
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "docs" ? "document" : "story",
        "data-highlightable": u,
        onMouseEnter: k.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        _,
        {
          style: c ? {} : { color: O },
          href: Lu(t, n),
          id: w,
          depth: l ? t.depth : t.depth - 1,
          onClick: (P) => {
            P.preventDefault(), y(t.id), S && E(!1);
          },
          ...t.type === "docs" && { docsMode: r }
        },
        t.renderLabel?.(t, f) || t.name
      ),
      c && /* @__PURE__ */ s.createElement(pg, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "#storybook-preview-wrapper" },
      "Skip to canvas")),
      k.node,
      C ? /* @__PURE__ */ s.createElement(
        xo,
        {
          "aria-label": `Test status: ${T}`,
          role: "status",
          type: "button",
          status: T,
          selectedItem: c
        },
        C
      ) : null
    );
  }
  if (t.type === "root")
    return /* @__PURE__ */ s.createElement(
      pc,
      {
        key: w,
        id: w,
        className: "sidebar-subheading",
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-nodetype": "root"
      },
      /* @__PURE__ */ s.createElement(
        cg,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (_) => {
            _.preventDefault(), h({ ids: [t.id], value: !g });
          },
          "aria-expanded": g
        },
        /* @__PURE__ */ s.createElement(Dt, { isExpanded: g }),
        t.renderLabel?.(t, f) || t.name
      ),
      g && /* @__PURE__ */ s.createElement(
        ee,
        {
          className: "sidebar-subheading-action",
          "aria-label": d ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": d,
          onClick: (_) => {
            _.preventDefault(), p();
          }
        },
        d ? /* @__PURE__ */ s.createElement(la, null) : /* @__PURE__ */ s.createElement(ca, null)
      )
    );
  if (t.type === "component" || t.type === "group") {
    let _ = i?.[t.id], T = _ ? bo[_][1] : null, C = t.type === "component" ? fc : dc;
    return /* @__PURE__ */ s.createElement(
      yc,
      {
        key: w,
        className: "sidebar-item",
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type,
        "data-highlightable": u,
        onMouseEnter: k.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        C,
        {
          id: w,
          style: T ? { color: T } : {},
          "aria-controls": t.children && t.children[0],
          "aria-expanded": g,
          depth: l ? t.depth : t.depth - 1,
          isComponent: t.type === "component",
          isExpandable: t.children && t.children.length > 0,
          isExpanded: g,
          onClick: (O) => {
            O.preventDefault(), h({ ids: [t.id], value: !g }), t.type === "component" && !g && b && y(t.id);
          },
          onMouseEnter: () => {
            t.type === "component" && f.emit(bt, {
              ids: [t.children[0]],
              options: { target: n }
            });
          }
        },
        t.renderLabel?.(t, f) || t.name
      ),
      k.node,
      ["error", "warn"].includes(_) && /* @__PURE__ */ s.createElement(xo, { type: "button", status: _ }, /* @__PURE__ */ s.createElement("s\
vg", { key: "icon", viewBox: "0 0 6 6", width: "6", height: "6", type: "dot" }, /* @__PURE__ */ s.createElement(Le, { type: "dot" })))
    );
  }
  return null;
}, "Node")), gg = s.memo(/* @__PURE__ */ a(function({
  setExpanded: t,
  isFullyExpanded: o,
  expandableDescendants: i,
  ...n
}) {
  let r = A(
    () => t({ ids: i, value: !o }),
    [t, o, i]
  );
  return /* @__PURE__ */ s.createElement(
    vc,
    {
      ...n,
      setExpanded: t,
      isFullyExpanded: o,
      setFullyExpanded: r
    }
  );
}, "Root")), xc = s.memo(/* @__PURE__ */ a(function({
  isBrowsing: t,
  isMain: o,
  refId: i,
  data: n,
  status: r,
  docsMode: l,
  highlightedRef: u,
  setHighlightedItemId: c,
  selectedStoryId: d,
  onSelectStoryId: p
}) {
  let g = U(null), h = ne(), [y, f, b] = K(
    () => Object.keys(n).reduce(
      (C, O) => {
        let P = n[O];
        return P.type === "root" ? C[0].push(O) : P.parent || C[1].push(O), P.type === "root" && P.startCollapsed && (C[2][O] = !1), C;
      },
      [[], [], {}]
    ),
    [n]
  ), { expandableDescendants: S } = K(() => [...f, ...y].reduce(
    (C, O) => (C.expandableDescendants[O] = tt(n, O, !1).filter(
      (P) => !["story", "docs"].includes(n[P].type)
    ), C),
    { orphansFirst: [], expandableDescendants: {} }
  ), [n, y, f]), E = K(() => Object.keys(n).filter((C) => {
    let O = n[C];
    if (O.type !== "component")
      return !1;
    let { children: P = [], name: M } = O;
    if (P.length !== 1)
      return !1;
    let D = n[P[0]];
    return D.type === "docs" ? !0 : D.type === "story" ? zu(D.name, M) : !1;
  }), [n]), m = K(
    () => Object.keys(n).filter((C) => !E.includes(C)),
    [E]
  ), v = K(() => E.reduce(
    (C, O) => {
      let { children: P, parent: M, name: D } = n[O], [N] = P;
      if (M) {
        let Y = [...n[M].children];
        Y[Y.indexOf(O)] = N, C[M] = { ...n[M], children: Y };
      }
      return C[N] = {
        ...n[N],
        name: D,
        parent: M,
        depth: n[N].depth - 1
      }, C;
    },
    { ...n }
  ), [n]), I = K(() => m.reduce(
    (C, O) => Object.assign(C, { [O]: go(v, O) }),
    {}
  ), [m, v]), [w, k] = gc({
    // @ts-expect-error (non strict)
    containerRef: g,
    isBrowsing: t,
    refId: i,
    data: v,
    initialExpanded: b,
    rootIds: y,
    highlightedRef: u,
    setHighlightedItemId: c,
    selectedStoryId: d,
    onSelectStoryId: p
  }), _ = K(() => vr(v, r), [v, r]), T = K(() => m.map((C) => {
    let O = v[C], P = br(C, i);
    if (O.type === "root") {
      let D = S[O.id], N = D.every((Y) => w[Y]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ s.createElement(
          gg,
          {
            api: h,
            key: P,
            item: O,
            refId: i,
            collapsedData: v,
            isOrphan: !1,
            isDisplayed: !0,
            isSelected: d === C,
            isExpanded: !!w[C],
            setExpanded: k,
            isFullyExpanded: N,
            expandableDescendants: D,
            onSelectStoryId: p
          }
        )
      );
    }
    let M = !O.parent || I[C].every((D) => w[D]);
    return M === !1 ? null : /* @__PURE__ */ s.createElement(
      vc,
      {
        api: h,
        collapsedData: v,
        key: P,
        item: O,
        status: r?.[C],
        groupStatus: _,
        refId: i,
        docsMode: l,
        isOrphan: f.some((D) => C === D || C.startsWith(`${D}-`)),
        isDisplayed: M,
        isSelected: d === C,
        isExpanded: !!w[C],
        setExpanded: k,
        onSelectStoryId: p
      }
    );
  }), [
    I,
    h,
    v,
    m,
    l,
    S,
    w,
    _,
    p,
    f,
    i,
    d,
    k,
    r
  ]);
  return /* @__PURE__ */ s.createElement($n.Provider, { value: { data: n, status: r, groupStatus: _ } }, /* @__PURE__ */ s.createElement(ug,
  { ref: g, hasOrphans: o && f.length > 0 }, /* @__PURE__ */ s.createElement(rc, null), T));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var yg = x.div(({ isMain: e }) => ({
  position: "relative",
  marginTop: e ? void 0 : 0
})), bg = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${e.appBorderColor}`,
  color: e.base === "light" ? e.color.defaultText : ye(0.2, e.color.defaultText)
})), vg = x.div({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
}), xg = x.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  "&:focus": {
    borderColor: e.color.secondary,
    "span:first-of-type": {
      borderLeftColor: e.color.secondary
    }
  }
})), Ic = s.memo(
  /* @__PURE__ */ a(function(t) {
    let { docsOptions: o } = De(), i = ne(), {
      index: n,
      id: r,
      title: l = r,
      isLoading: u,
      isBrowsing: c,
      selectedStoryId: d,
      highlightedRef: p,
      setHighlighted: g,
      loginUrl: h,
      type: y,
      expanded: f = !0,
      indexError: b,
      previewInitialized: S
    } = t, E = K(() => n ? Object.keys(n).length : 0, [n]), m = U(null), v = r === ot, w = u || (y === "auto-inject" && !S || y === "server-\
checked") || y === "unknown", C = Hu(w, !!h && E === 0, !!b, !w && E === 0), [O, P] = $(f);
    R(() => {
      n && d && n[d] && P(!0);
    }, [P, n, d]);
    let M = A(() => P((Y) => !Y), [P]), D = A(
      (Y) => g({ itemId: Y, refId: r }),
      [g]
    ), N = A(
      // @ts-expect-error (non strict)
      (Y) => i && i.selectStory(Y, void 0, { ref: !v && r }),
      [i, v, r]
    );
    return /* @__PURE__ */ s.createElement(s.Fragment, null, v || /* @__PURE__ */ s.createElement(
      bg,
      {
        "aria-label": `${O ? "Hide" : "Show"} ${l} stories`,
        "aria-expanded": O
      },
      /* @__PURE__ */ s.createElement(xg, { "data-action": "collapse-ref", onClick: M }, /* @__PURE__ */ s.createElement(Dt, { isExpanded: O }),
      /* @__PURE__ */ s.createElement(vg, { title: l }, l)),
      /* @__PURE__ */ s.createElement(Gu, { ...t, state: C, ref: m })
    ), O && /* @__PURE__ */ s.createElement(yg, { "data-title": l, isMain: v }, C === "auth" && /* @__PURE__ */ s.createElement($u, { id: r,
    loginUrl: h }), C === "error" && /* @__PURE__ */ s.createElement(Ku, { error: b }), C === "loading" && /* @__PURE__ */ s.createElement(qu,
    { isMain: v }), C === "empty" && /* @__PURE__ */ s.createElement(Uu, { isMain: v }), C === "ready" && /* @__PURE__ */ s.createElement(
      xc,
      {
        status: t.status,
        isBrowsing: c,
        isMain: v,
        refId: r,
        data: n,
        docsMode: o.docsMode,
        selectedStoryId: d,
        onSelectStoryId: N,
        highlightedRef: p,
        setHighlightedItemId: D
      }
    )));
  }, "Ref")
);

// src/manager/components/sidebar/useHighlighted.ts
var { document: Gn, window: Sc } = ie, wc = /* @__PURE__ */ a((e) => e ? { itemId: e.storyId, refId: e.refId } : null, "fromSelection"), Ec = /* @__PURE__ */ a(
({
  containerRef: e,
  isLoading: t,
  isBrowsing: o,
  selected: i
}) => {
  let n = wc(i), r = U(n), [l, u] = $(n), c = ne(), d = A(
    (g) => {
      r.current = g, u(g);
    },
    [r]
  ), p = A(
    (g, h = !1) => {
      let y = g.getAttribute("data-item-id"), f = g.getAttribute("data-ref-id");
      !y || !f || (d({ itemId: y, refId: f }), Ot(g, h));
    },
    [d]
  );
  return R(() => {
    let g = wc(i);
    if (d(g), g) {
      let { itemId: h, refId: y } = g;
      setTimeout(() => {
        Ot(
          // @ts-expect-error (non strict)
          e.current?.querySelector(`[data-item-id="${h}"][data-ref-id="${y}"]`),
          !0
          // make sure it's clearly visible by centering it
        );
      }, 0);
    }
  }, [e, i, d]), R(() => {
    let g = Gn.getElementById("storybook-explorer-menu"), h, y = /* @__PURE__ */ a((f) => {
      if (t || !o || !e.current || !ht(!1, f))
        return;
      let b = We("ArrowUp", f), S = We("ArrowDown", f);
      if (!(b || S))
        return;
      let E = Sc.requestAnimationFrame(() => {
        Sc.cancelAnimationFrame(h), h = E;
        let m = f.target;
        if (!Pt(g, m) && !Pt(m, g))
          return;
        m.hasAttribute("data-action") && m.blur();
        let v = Array.from(
          e.current?.querySelectorAll("[data-highlightable=true]") || []
        ), I = v.findIndex(
          (_) => _.getAttribute("data-item-id") === r.current?.itemId && _.getAttribute("data-ref-id") === r.current?.refId
        ), w = Bu(v, I, b ? -1 : 1), k = b ? w === v.length - 1 : w === 0;
        if (p(v[w], k), v[w].getAttribute("data-nodetype") === "component") {
          let { itemId: _, refId: T } = r.current, C = c.resolveStory(_, T === "storybook_internal" ? void 0 : T);
          C.type === "component" && c.emit(bt, {
            // @ts-expect-error (non strict)
            ids: [C.children[0]],
            options: { target: T }
          });
        }
      });
    }, "navigateTree");
    return Gn.addEventListener("keydown", y), () => Gn.removeEventListener("keydown", y);
  }, [t, o, r, p]), [l, d, r];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var Cc = s.memo(/* @__PURE__ */ a(function({
  isLoading: t,
  isBrowsing: o,
  dataset: i,
  selected: n
}) {
  let r = U(null), [l, u, c] = Ec({
    containerRef: r,
    isLoading: t,
    isBrowsing: o,
    selected: n
  });
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: r,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": l?.refId,
      "data-highlighted-item-id": l?.itemId
    },
    l && /* @__PURE__ */ s.createElement(Pu, { ...l }),
    i.entries.map(([d, p]) => /* @__PURE__ */ s.createElement(
      Ic,
      {
        ...p,
        key: d,
        isLoading: t,
        isBrowsing: o,
        selectedStoryId: n?.refId === p.id ? n.storyId : null,
        highlightedRef: c,
        setHighlighted: u
      }
    ))
  );
}, "Explorer"));

// src/manager/components/sidebar/Brand.tsx
var Ig = x(jo)(({ theme: e }) => ({
  width: "auto",
  height: "22px !important",
  display: "block",
  color: e.base === "light" ? e.color.defaultText : e.color.lightest
})), Sg = x.img({
  display: "block",
  maxWidth: "150px !important",
  maxHeight: "100px"
}), _c = x.a(({ theme: e }) => ({
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: e.color.secondary
  }
})), Tc = Es(({ theme: e }) => {
  let { title: t = "Storybook", url: o = "./", image: i, target: n } = e.brand, r = n || (o === "./" ? "" : "_blank");
  if (i === null)
    return t === null ? null : o ? /* @__PURE__ */ s.createElement(_c, { href: o, target: r, dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ s.
    createElement("div", { dangerouslySetInnerHTML: { __html: t } });
  let l = i ? /* @__PURE__ */ s.createElement(Sg, { src: i, alt: t }) : /* @__PURE__ */ s.createElement(Ig, { alt: t });
  return o ? /* @__PURE__ */ s.createElement(_c, { title: t, href: o, target: r }, l) : /* @__PURE__ */ s.createElement("div", null, l);
});

// src/manager/components/sidebar/Menu.tsx
var kc = x(ee)(({ highlighted: e, theme: t }) => ({
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
  ...e && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: t.background.app,
      border: `1px solid ${t.background.app}`,
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:after": {
      background: t.color.positive,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
      boxShadow: `0 0 0 2px ${ye(0.88, t.color.secondary)}`
    }
  }
})), wg = x.div({
  display: "flex",
  gap: 4
}), Eg = /* @__PURE__ */ a(({ menu: e, onClick: t }) => /* @__PURE__ */ s.createElement(pt, { links: e, onClick: t }), "SidebarMenuList"), Oc = /* @__PURE__ */ a(
({ menu: e, isHighlighted: t, onClick: o }) => {
  let [i, n] = $(!1), { isMobile: r, setMobileMenuOpen: l } = he();
  return r ? /* @__PURE__ */ s.createElement(wg, null, /* @__PURE__ */ s.createElement(
    kc,
    {
      title: "About Storybook",
      "aria-label": "About Storybook",
      highlighted: t,
      active: !1,
      onClick: o
    },
    /* @__PURE__ */ s.createElement(hn, null)
  ), /* @__PURE__ */ s.createElement(
    ee,
    {
      title: "Close menu",
      "aria-label": "Close menu",
      onClick: () => l(!1)
    },
    /* @__PURE__ */ s.createElement(Ge, null)
  )) : /* @__PURE__ */ s.createElement(
    _e,
    {
      placement: "top",
      closeOnOutsideClick: !0,
      tooltip: ({ onHide: u }) => /* @__PURE__ */ s.createElement(Eg, { onClick: u, menu: e }),
      onVisibleChange: n
    },
    /* @__PURE__ */ s.createElement(
      kc,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: t,
        active: i
      },
      /* @__PURE__ */ s.createElement(hn, null)
    )
  );
}, "SidebarMenu");

// src/manager/components/sidebar/Heading.tsx
var Cg = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
})), _g = x.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
}), Tg = x(fe)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: e.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
})), Pc = /* @__PURE__ */ a(({
  menuHighlighted: e = !1,
  menu: t,
  skipLinkHref: o,
  extra: i,
  isLoading: n,
  onMenuClick: r,
  ...l
}) => /* @__PURE__ */ s.createElement(_g, { ...l }, o && /* @__PURE__ */ s.createElement(Tg, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: o, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ s.createElement(Cg, null, /* @__PURE__ */ s.createElement(Tc, null)), n ?
null : i.map(({ id: u, render: c }) => /* @__PURE__ */ s.createElement(c, { key: u })), /* @__PURE__ */ s.createElement(Oc, { menu: t, isHighlighted: e,
onClick: r })), "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var G = Be(nn());
var Ag = Be(Lc());

// ../node_modules/compute-scroll-into-view/dist/index.js
var Nc = /* @__PURE__ */ a((e) => typeof e == "object" && e != null && e.nodeType === 1, "t"), Fc = /* @__PURE__ */ a((e, t) => (!t || e !==
"hidden") && e !== "visible" && e !== "clip", "e"), Xn = /* @__PURE__ */ a((e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let o = getComputedStyle(e, null);
    return Fc(o.overflowY, t) || Fc(o.overflowX, t) || ((i) => {
      let n = ((r) => {
        if (!r.ownerDocument || !r.ownerDocument.defaultView) return null;
        try {
          return r.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!n && (n.clientHeight < i.scrollHeight || n.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, "n"), Mr = /* @__PURE__ */ a((e, t, o, i, n, r, l, u) => r < e && l > t || r > e && l < t ? 0 : r <= e && u <= o || l >= t && u >= o ? r -
e - i : l > t && u < o || r < e && u > o ? l - t + n : 0, "o"), Pg = /* @__PURE__ */ a((e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, "l"), Bc = /* @__PURE__ */ a((e, t) => {
  var o, i, n, r;
  if (typeof document > "u") return [];
  let { scrollMode: l, block: u, inline: c, boundary: d, skipOverflowHiddenElements: p } = t, g = typeof d == "function" ? d : (W) => W !== d;
  if (!Nc(e)) throw new TypeError("Invalid target");
  let h = document.scrollingElement || document.documentElement, y = [], f = e;
  for (; Nc(f) && g(f); ) {
    if (f = Pg(f), f === h) {
      y.push(f);
      break;
    }
    f != null && f === document.body && Xn(f) && !Xn(document.documentElement) || f != null && Xn(f, p) && y.push(f);
  }
  let b = (i = (o = window.visualViewport) == null ? void 0 : o.width) != null ? i : innerWidth, S = (r = (n = window.visualViewport) == null ?
  void 0 : n.height) != null ? r : innerHeight, { scrollX: E, scrollY: m } = window, { height: v, width: I, top: w, right: k, bottom: _, left: T } = e.
  getBoundingClientRect(), { top: C, right: O, bottom: P, left: M } = ((W) => {
    let Q = window.getComputedStyle(W);
    return { top: parseFloat(Q.scrollMarginTop) || 0, right: parseFloat(Q.scrollMarginRight) || 0, bottom: parseFloat(Q.scrollMarginBottom) ||
    0, left: parseFloat(Q.scrollMarginLeft) || 0 };
  })(e), D = u === "start" || u === "nearest" ? w - C : u === "end" ? _ + P : w + v / 2 - C + P, N = c === "center" ? T + I / 2 - M + O : c ===
  "end" ? k + O : T - M, Y = [];
  for (let W = 0; W < y.length; W++) {
    let Q = y[W], { height: H, width: V, top: z, right: te, bottom: F, left: B } = Q.getBoundingClientRect();
    if (l === "if-needed" && w >= 0 && T >= 0 && _ <= S && k <= b && w >= z && _ <= F && T >= B && k <= te) return Y;
    let L = getComputedStyle(Q), j = parseInt(L.borderLeftWidth, 10), Z = parseInt(L.borderTopWidth, 10), re = parseInt(L.borderRightWidth, 10),
    J = parseInt(L.borderBottomWidth, 10), pe = 0, se = 0, ue = "offsetWidth" in Q ? Q.offsetWidth - Q.clientWidth - j - re : 0, le = "offse\
tHeight" in Q ? Q.offsetHeight - Q.clientHeight - Z - J : 0, xe = "offsetWidth" in Q ? Q.offsetWidth === 0 ? 0 : V / Q.offsetWidth : 0, ge = "\
offsetHeight" in Q ? Q.offsetHeight === 0 ? 0 : H / Q.offsetHeight : 0;
    if (h === Q) pe = u === "start" ? D : u === "end" ? D - S : u === "nearest" ? Mr(m, m + S, S, Z, J, m + D, m + D + v, v) : D - S / 2, se =
    c === "start" ? N : c === "center" ? N - b / 2 : c === "end" ? N - b : Mr(E, E + b, b, j, re, E + N, E + N + I, I), pe = Math.max(0, pe +
    m), se = Math.max(0, se + E);
    else {
      pe = u === "start" ? D - z - Z : u === "end" ? D - F + J + le : u === "nearest" ? Mr(z, F, H, Z, J + le, D, D + v, v) : D - (z + H / 2) +
      le / 2, se = c === "start" ? N - B - j : c === "center" ? N - (B + V / 2) + ue / 2 : c === "end" ? N - te + re + ue : Mr(B, te, V, j, re +
      ue, N, N + I, I);
      let { scrollLeft: ke, scrollTop: de } = Q;
      pe = ge === 0 ? 0 : Math.max(0, Math.min(de + pe / ge, Q.scrollHeight - H / ge + le)), se = xe === 0 ? 0 : Math.max(0, Math.min(ke + se /
      xe, Q.scrollWidth - V / xe + ue)), D += de - pe, N += ke - se;
    }
    Y.push({ el: Q, top: pe, left: se });
  }
  return Y;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var Lt = /* @__PURE__ */ a(function() {
  return Lt = Object.assign || /* @__PURE__ */ a(function(t) {
    for (var o, i = 1, n = arguments.length; i < n; i++) {
      o = arguments[i];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
    }
    return t;
  }, "__assign"), Lt.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var Mg = 0;
function Hc(e) {
  return typeof e == "function" ? e : Fe;
}
a(Hc, "cbToCb");
function Fe() {
}
a(Fe, "noop");
function Kc(e, t) {
  if (e) {
    var o = Bc(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    o.forEach(function(i) {
      var n = i.el, r = i.top, l = i.left;
      n.scrollTop = r, n.scrollLeft = l;
    });
  }
}
a(Kc, "scrollIntoView");
function zc(e, t, o) {
  var i = e === t || t instanceof o.Node && e.contains && e.contains(t);
  return i;
}
a(zc, "isOrContainsNode");
function $r(e, t) {
  var o;
  function i() {
    o && clearTimeout(o);
  }
  a(i, "cancel");
  function n() {
    for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++)
      l[u] = arguments[u];
    i(), o = setTimeout(function() {
      o = null, e.apply(void 0, l);
    }, t);
  }
  return a(n, "wrapper"), n.cancel = i, n;
}
a($r, "debounce");
function ae() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [i].concat(r)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
    });
  };
}
a(ae, "callAllEventHandlers");
function Qe() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    t.forEach(function(n) {
      typeof n == "function" ? n(i) : n && (n.current = i);
    });
  };
}
a(Qe, "handleRefs");
function Uc() {
  return String(Mg++);
}
a(Uc, "generateId");
function Dg(e) {
  var t = e.isOpen, o = e.resultCount, i = e.previousResultCount;
  return t ? o ? o !== i ? o + " result" + (o === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter ke\
y to select." : "" : "No results are available." : "";
}
a(Dg, "getA11yStatusMessage");
function Rc(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
a(Rc, "unwrapArray");
function Lg(e) {
  return typeof e.type == "string";
}
a(Lg, "isDOMElement");
function Ng(e) {
  return e.props;
}
a(Ng, "getElementProps");
var Fg = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function Dr(e) {
  e === void 0 && (e = {});
  var t = {};
  return Fg.forEach(function(o) {
    e.hasOwnProperty(o) && (t[o] = e[o]);
  }), t;
}
a(Dr, "pickState");
function So(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(o, i) {
    return o[i] = Hr(t, i) ? t[i] : e[i], o;
  }, {});
}
a(So, "getState");
function Hr(e, t) {
  return e[t] !== void 0;
}
a(Hr, "isControlledProp");
function to(e) {
  var t = e.key, o = e.keyCode;
  return o >= 37 && o <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
a(to, "normalizeArrowKey");
function Xe(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (r === 0)
    return -1;
  var l = r - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = n ? l : 0 : u > l && (u = n ? 0 : l);
  var c = gt(u, t < 0, o, i, n);
  return c === -1 ? e >= r ? -1 : e : c;
}
a(Xe, "getHighlightedIndex");
function gt(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!i(o[l], l))
        return l;
  } else
    for (var u = e; u < r; u++)
      if (!i(o[u], u))
        return u;
  return n ? gt(t ? r - 1 : 0, t, o, i) : -1;
}
a(gt, "getNonDisabledIndex");
function zr(e, t, o, i) {
  return i === void 0 && (i = !0), o && t.some(function(n) {
    return n && (zc(n, e, o) || i && zc(n, o.document.activeElement, o));
  });
}
a(zr, "targetWithinDownshift");
var Bg = $r(function(e) {
  qc(e).textContent = "";
}, 500);
function qc(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("ar\
ia-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
a(qc, "getStatusDiv");
function Gc(e, t) {
  if (!(!e || !t)) {
    var o = qc(t);
    o.textContent = e, Bg(t);
  }
}
a(Gc, "setStatus");
function Hg(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
a(Hg, "cleanupStatusDiv");
var Yc = 0, Qc = 1, Xc = 2, Lr = 3, Nr = 4, Zc = 5, Jc = 6, ep = 7, tp = 8, op = 9, rp = 10, np = 11, ip = 12, sp = 13, ap = 14, lp = 15, up = 16,
zg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown: Yc,
  mouseUp: Qc,
  itemMouseEnter: Xc,
  keyDownArrowUp: Lr,
  keyDownArrowDown: Nr,
  keyDownEscape: Zc,
  keyDownEnter: Jc,
  keyDownHome: ep,
  keyDownEnd: tp,
  clickItem: op,
  blurInput: rp,
  changeInput: np,
  keyDownSpaceButton: ip,
  clickButton: sp,
  blurButton: ap,
  controlledPropUpdatedSelectedItem: lp,
  touchEnd: up
}), Rg = ["refKey", "ref"], jg = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], Wg = ["onKeyDown", "onBlur", "onChange", "onInput",
"onChangeText"], Vg = ["refKey", "ref"], $g = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], Kg = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function o(n) {
      var r;
      r = t.call(this, n) || this, r.id = r.props.id || "downshift-" + Uc(), r.menuId = r.props.menuId || r.id + "-menu", r.labelId = r.props.
      labelId || r.id + "-label", r.inputId = r.props.inputId || r.id + "-input", r.getItemId = r.props.getItemId || function(m) {
        return r.id + "-item-" + m;
      }, r.items = [], r.itemCount = null, r.previousResultCount = 0, r.timeoutIds = [], r.internalSetTimeout = function(m, v) {
        var I = setTimeout(function() {
          r.timeoutIds = r.timeoutIds.filter(function(w) {
            return w !== I;
          }), m();
        }, v);
        r.timeoutIds.push(I);
      }, r.setItemCount = function(m) {
        r.itemCount = m;
      }, r.unsetItemCount = function() {
        r.itemCount = null;
      }, r.isItemDisabled = function(m, v) {
        var I = r.getItemNodeFromIndex(v);
        return I && I.hasAttribute("disabled");
      }, r.setHighlightedIndex = function(m, v) {
        m === void 0 && (m = r.props.defaultHighlightedIndex), v === void 0 && (v = {}), v = Dr(v), r.internalSetState(q({
          highlightedIndex: m
        }, v));
      }, r.clearSelection = function(m) {
        r.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: r.props.defaultHighlightedIndex,
          isOpen: r.props.defaultIsOpen
        }, m);
      }, r.selectItem = function(m, v, I) {
        v = Dr(v), r.internalSetState(q({
          isOpen: r.props.defaultIsOpen,
          highlightedIndex: r.props.defaultHighlightedIndex,
          selectedItem: m,
          inputValue: r.props.itemToString(m)
        }, v), I);
      }, r.selectItemAtIndex = function(m, v, I) {
        var w = r.items[m];
        w != null && r.selectItem(w, v, I);
      }, r.selectHighlightedItem = function(m, v) {
        return r.selectItemAtIndex(r.getState().highlightedIndex, m, v);
      }, r.internalSetState = function(m, v) {
        var I, w, k = {}, _ = typeof m == "function";
        return !_ && m.hasOwnProperty("inputValue") && r.props.onInputValueChange(m.inputValue, q({}, r.getStateAndHelpers(), m)), r.setState(
        function(T) {
          var C;
          T = r.getState(T);
          var O = _ ? m(T) : m;
          O = r.props.stateReducer(T, O), I = O.hasOwnProperty("selectedItem");
          var P = {};
          return I && O.selectedItem !== T.selectedItem && (w = O.selectedItem), (C = O).type || (C.type = Yc), Object.keys(O).forEach(function(M) {
            T[M] !== O[M] && (k[M] = O[M]), M !== "type" && (O[M], Hr(r.props, M) || (P[M] = O[M]));
          }), _ && O.hasOwnProperty("inputValue") && r.props.onInputValueChange(O.inputValue, q({}, r.getStateAndHelpers(), O)), P;
        }, function() {
          Hc(v)();
          var T = Object.keys(k).length > 1;
          T && r.props.onStateChange(k, r.getStateAndHelpers()), I && r.props.onSelect(m.selectedItem, r.getStateAndHelpers()), w !== void 0 &&
          r.props.onChange(w, r.getStateAndHelpers()), r.props.onUserAction(k, r.getStateAndHelpers());
        });
      }, r.rootRef = function(m) {
        return r._rootNode = m;
      }, r.getRootProps = function(m, v) {
        var I, w = m === void 0 ? {} : m, k = w.refKey, _ = k === void 0 ? "ref" : k, T = w.ref, C = Te(w, Rg), O = v === void 0 ? {} : v, P = O.
        suppressRefError, M = P === void 0 ? !1 : P;
        r.getRootProps.called = !0, r.getRootProps.refKey = _, r.getRootProps.suppressRefError = M;
        var D = r.getState(), N = D.isOpen;
        return q((I = {}, I[_] = Qe(T, r.rootRef), I.role = "combobox", I["aria-expanded"] = N, I["aria-haspopup"] = "listbox", I["aria-owns"] =
        N ? r.menuId : void 0, I["aria-labelledby"] = r.labelId, I), C);
      }, r.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ a(function(v) {
          var I = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(w, {
              type: Nr
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Nr
            }, function() {
              var k = I.getItemCount();
              if (k > 0) {
                var _ = I.getState(), T = _.highlightedIndex, C = Xe(T, 1, {
                  length: k
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(C, {
                  type: Nr
                });
              }
            });
        }, "ArrowDown"),
        ArrowUp: /* @__PURE__ */ a(function(v) {
          var I = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(w, {
              type: Lr
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Lr
            }, function() {
              var k = I.getItemCount();
              if (k > 0) {
                var _ = I.getState(), T = _.highlightedIndex, C = Xe(T, -1, {
                  length: k
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(C, {
                  type: Lr
                });
              }
            });
        }, "ArrowUp"),
        Enter: /* @__PURE__ */ a(function(v) {
          if (v.which !== 229) {
            var I = this.getState(), w = I.isOpen, k = I.highlightedIndex;
            if (w && k != null) {
              v.preventDefault();
              var _ = this.items[k], T = this.getItemNodeFromIndex(k);
              if (_ == null || T && T.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Jc
              });
            }
          }
        }, "Enter"),
        Escape: /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.reset(q({
            type: Zc
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }, "Escape")
      }, r.buttonKeyDownHandlers = q({}, r.keyDownHandlers, {
        " ": /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.toggleMenu({
            type: ip
          });
        }, "_")
      }), r.inputKeyDownHandlers = q({}, r.keyDownHandlers, {
        Home: /* @__PURE__ */ a(function(v) {
          var I = this.getState(), w = I.isOpen;
          if (w) {
            v.preventDefault();
            var k = this.getItemCount();
            if (!(k <= 0 || !w)) {
              var _ = gt(0, !1, {
                length: k
              }, this.isItemDisabled);
              this.setHighlightedIndex(_, {
                type: ep
              });
            }
          }
        }, "Home"),
        End: /* @__PURE__ */ a(function(v) {
          var I = this.getState(), w = I.isOpen;
          if (w) {
            v.preventDefault();
            var k = this.getItemCount();
            if (!(k <= 0 || !w)) {
              var _ = gt(k - 1, !0, {
                length: k
              }, this.isItemDisabled);
              this.setHighlightedIndex(_, {
                type: tp
              });
            }
          }
        }, "End")
      }), r.getToggleButtonProps = function(m) {
        var v = m === void 0 ? {} : m, I = v.onClick;
        v.onPress;
        var w = v.onKeyDown, k = v.onKeyUp, _ = v.onBlur, T = Te(v, jg), C = r.getState(), O = C.isOpen, P = {
          onClick: ae(I, r.buttonHandleClick),
          onKeyDown: ae(w, r.buttonHandleKeyDown),
          onKeyUp: ae(k, r.buttonHandleKeyUp),
          onBlur: ae(_, r.buttonHandleBlur)
        }, M = T.disabled ? {} : P;
        return q({
          type: "button",
          role: "button",
          "aria-label": O ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, M, T);
      }, r.buttonHandleKeyUp = function(m) {
        m.preventDefault();
      }, r.buttonHandleKeyDown = function(m) {
        var v = to(m);
        r.buttonKeyDownHandlers[v] && r.buttonKeyDownHandlers[v].call(r, m);
      }, r.buttonHandleClick = function(m) {
        if (m.preventDefault(), r.props.environment) {
          var v = r.props.environment.document, I = v.body, w = v.activeElement;
          I && I === w && m.target.focus();
        }
        r.internalSetTimeout(function() {
          return r.toggleMenu({
            type: sp
          });
        });
      }, r.buttonHandleBlur = function(m) {
        var v = m.target;
        r.internalSetTimeout(function() {
          if (!(r.isMouseDown || !r.props.environment)) {
            var I = r.props.environment.document.activeElement;
            (I == null || I.id !== r.inputId) && I !== v && r.reset({
              type: ap
            });
          }
        });
      }, r.getLabelProps = function(m) {
        return q({
          htmlFor: r.inputId,
          id: r.labelId
        }, m);
      }, r.getInputProps = function(m) {
        var v = m === void 0 ? {} : m, I = v.onKeyDown, w = v.onBlur, k = v.onChange, _ = v.onInput;
        v.onChangeText;
        var T = Te(v, Wg), C, O = {};
        C = "onChange";
        var P = r.getState(), M = P.inputValue, D = P.isOpen, N = P.highlightedIndex;
        if (!T.disabled) {
          var Y;
          O = (Y = {}, Y[C] = ae(k, _, r.inputHandleChange), Y.onKeyDown = ae(I, r.inputHandleKeyDown), Y.onBlur = ae(w, r.inputHandleBlur),
          Y);
        }
        return q({
          "aria-autocomplete": "list",
          "aria-activedescendant": D && typeof N == "number" && N >= 0 ? r.getItemId(N) : void 0,
          "aria-controls": D ? r.menuId : void 0,
          "aria-labelledby": T && T["aria-label"] ? void 0 : r.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: M,
          id: r.inputId
        }, O, T);
      }, r.inputHandleKeyDown = function(m) {
        var v = to(m);
        v && r.inputKeyDownHandlers[v] && r.inputKeyDownHandlers[v].call(r, m);
      }, r.inputHandleChange = function(m) {
        r.internalSetState({
          type: np,
          isOpen: !0,
          inputValue: m.target.value,
          highlightedIndex: r.props.defaultHighlightedIndex
        });
      }, r.inputHandleBlur = function() {
        r.internalSetTimeout(function() {
          var m;
          if (!(r.isMouseDown || !r.props.environment)) {
            var v = r.props.environment.document.activeElement, I = (v == null || (m = v.dataset) == null ? void 0 : m.toggle) && r._rootNode &&
            r._rootNode.contains(v);
            I || r.reset({
              type: rp
            });
          }
        });
      }, r.menuRef = function(m) {
        r._menuNode = m;
      }, r.getMenuProps = function(m, v) {
        var I, w = m === void 0 ? {} : m, k = w.refKey, _ = k === void 0 ? "ref" : k, T = w.ref, C = Te(w, Vg), O = v === void 0 ? {} : v, P = O.
        suppressRefError, M = P === void 0 ? !1 : P;
        return r.getMenuProps.called = !0, r.getMenuProps.refKey = _, r.getMenuProps.suppressRefError = M, q((I = {}, I[_] = Qe(T, r.menuRef),
        I.role = "listbox", I["aria-labelledby"] = C && C["aria-label"] ? void 0 : r.labelId, I.id = r.menuId, I), C);
      }, r.getItemProps = function(m) {
        var v, I = m === void 0 ? {} : m, w = I.onMouseMove, k = I.onMouseDown, _ = I.onClick;
        I.onPress;
        var T = I.index, C = I.item, O = C === void 0 ? (
          /* istanbul ignore next */
          void 0
        ) : C, P = Te(I, $g);
        T === void 0 ? (r.items.push(O), T = r.items.indexOf(O)) : r.items[T] = O;
        var M = "onClick", D = _, N = (v = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: ae(w, function() {
            T !== r.getState().highlightedIndex && (r.setHighlightedIndex(T, {
              type: Xc
            }), r.avoidScrolling = !0, r.internalSetTimeout(function() {
              return r.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: ae(k, function(W) {
            W.preventDefault();
          })
        }, v[M] = ae(D, function() {
          r.selectItemAtIndex(T, {
            type: op
          });
        }), v), Y = P.disabled ? {
          onMouseDown: N.onMouseDown
        } : N;
        return q({
          id: r.getItemId(T),
          role: "option",
          "aria-selected": r.getState().highlightedIndex === T
        }, Y, P);
      }, r.clearItems = function() {
        r.items = [];
      }, r.reset = function(m, v) {
        m === void 0 && (m = {}), m = Dr(m), r.internalSetState(function(I) {
          var w = I.selectedItem;
          return q({
            isOpen: r.props.defaultIsOpen,
            highlightedIndex: r.props.defaultHighlightedIndex,
            inputValue: r.props.itemToString(w)
          }, m);
        }, v);
      }, r.toggleMenu = function(m, v) {
        m === void 0 && (m = {}), m = Dr(m), r.internalSetState(function(I) {
          var w = I.isOpen;
          return q({
            isOpen: !w
          }, w && {
            highlightedIndex: r.props.defaultHighlightedIndex
          }, m);
        }, function() {
          var I = r.getState(), w = I.isOpen, k = I.highlightedIndex;
          w && r.getItemCount() > 0 && typeof k == "number" && r.setHighlightedIndex(k, m), Hc(v)();
        });
      }, r.openMenu = function(m) {
        r.internalSetState({
          isOpen: !0
        }, m);
      }, r.closeMenu = function(m) {
        r.internalSetState({
          isOpen: !1
        }, m);
      }, r.updateStatus = $r(function() {
        var m;
        if ((m = r.props) != null && (m = m.environment) != null && m.document) {
          var v = r.getState(), I = r.items[v.highlightedIndex], w = r.getItemCount(), k = r.props.getA11yStatusMessage(q({
            itemToString: r.props.itemToString,
            previousResultCount: r.previousResultCount,
            resultCount: w,
            highlightedItem: I
          }, v));
          r.previousResultCount = w, Gc(k, r.props.environment.document);
        }
      }, 200);
      var l = r.props, u = l.defaultHighlightedIndex, c = l.initialHighlightedIndex, d = c === void 0 ? u : c, p = l.defaultIsOpen, g = l.initialIsOpen,
      h = g === void 0 ? p : g, y = l.initialInputValue, f = y === void 0 ? "" : y, b = l.initialSelectedItem, S = b === void 0 ? null : b, E = r.
      getState({
        highlightedIndex: d,
        isOpen: h,
        inputValue: f,
        selectedItem: S
      });
      return E.selectedItem != null && r.props.initialInputValue === void 0 && (E.inputValue = r.props.itemToString(E.selectedItem)), r.state =
      E, r;
    }
    a(o, "Downshift"), Yt(o, t);
    var i = o.prototype;
    return i.internalClearTimeouts = /* @__PURE__ */ a(function() {
      this.timeoutIds.forEach(function(r) {
        clearTimeout(r);
      }), this.timeoutIds = [];
    }, "internalClearTimeouts"), i.getState = /* @__PURE__ */ a(function(r) {
      return r === void 0 && (r = this.state), So(r, this.props);
    }, "getState$1"), i.getItemCount = /* @__PURE__ */ a(function() {
      var r = this.items.length;
      return this.itemCount != null ? r = this.itemCount : this.props.itemCount !== void 0 && (r = this.props.itemCount), r;
    }, "getItemCount"), i.getItemNodeFromIndex = /* @__PURE__ */ a(function(r) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(r)) : null;
    }, "getItemNodeFromIndex"), i.scrollHighlightedItemIntoView = /* @__PURE__ */ a(function() {
      {
        var r = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(r, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView"), i.moveHighlightedIndex = /* @__PURE__ */ a(function(r, l) {
      var u = this.getItemCount(), c = this.getState(), d = c.highlightedIndex;
      if (u > 0) {
        var p = Xe(d, r, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(p, l);
      }
    }, "moveHighlightedIndex"), i.getStateAndHelpers = /* @__PURE__ */ a(function() {
      var r = this.getState(), l = r.highlightedIndex, u = r.inputValue, c = r.selectedItem, d = r.isOpen, p = this.props.itemToString, g = this.
      id, h = this.getRootProps, y = this.getToggleButtonProps, f = this.getLabelProps, b = this.getMenuProps, S = this.getInputProps, E = this.
      getItemProps, m = this.openMenu, v = this.closeMenu, I = this.toggleMenu, w = this.selectItem, k = this.selectItemAtIndex, _ = this.selectHighlightedItem,
      T = this.setHighlightedIndex, C = this.clearSelection, O = this.clearItems, P = this.reset, M = this.setItemCount, D = this.unsetItemCount,
      N = this.internalSetState;
      return {
        // prop getters
        getRootProps: h,
        getToggleButtonProps: y,
        getLabelProps: f,
        getMenuProps: b,
        getInputProps: S,
        getItemProps: E,
        // actions
        reset: P,
        openMenu: m,
        closeMenu: v,
        toggleMenu: I,
        selectItem: w,
        selectItemAtIndex: k,
        selectHighlightedItem: _,
        setHighlightedIndex: T,
        clearSelection: C,
        clearItems: O,
        setItemCount: M,
        unsetItemCount: D,
        setState: N,
        // props
        itemToString: p,
        // derived
        id: g,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: d,
        selectedItem: c
      };
    }, "getStateAndHelpers"), i.componentDidMount = /* @__PURE__ */ a(function() {
      var r = this;
      if (!this.props.environment)
        this.cleanup = function() {
          r.internalClearTimeouts();
        };
      else {
        var l = /* @__PURE__ */ a(function() {
          r.isMouseDown = !0;
        }, "onMouseDown"), u = /* @__PURE__ */ a(function(y) {
          r.isMouseDown = !1;
          var f = zr(y.target, [r._rootNode, r._menuNode], r.props.environment);
          !f && r.getState().isOpen && r.reset({
            type: Qc
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onMouseUp"), c = /* @__PURE__ */ a(function() {
          r.isTouchMove = !1;
        }, "onTouchStart"), d = /* @__PURE__ */ a(function() {
          r.isTouchMove = !0;
        }, "onTouchMove"), p = /* @__PURE__ */ a(function(y) {
          var f = zr(y.target, [r._rootNode, r._menuNode], r.props.environment, !1);
          !r.isTouchMove && !f && r.getState().isOpen && r.reset({
            type: up
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onTouchEnd"), g = this.props.environment;
        g.addEventListener("mousedown", l), g.addEventListener("mouseup", u), g.addEventListener("touchstart", c), g.addEventListener("touch\
move", d), g.addEventListener("touchend", p), this.cleanup = function() {
          r.internalClearTimeouts(), r.updateStatus.cancel(), g.removeEventListener("mousedown", l), g.removeEventListener("mouseup", u), g.
          removeEventListener("touchstart", c), g.removeEventListener("touchmove", d), g.removeEventListener("touchend", p);
        };
      }
    }, "componentDidMount"), i.shouldScroll = /* @__PURE__ */ a(function(r, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, c = u.highlightedIndex, d = l.highlightedIndex === void 0 ?
      r : l, p = d.highlightedIndex, g = c && this.getState().isOpen && !r.isOpen, h = c !== p;
      return g || h;
    }, "shouldScroll"), i.componentDidUpdate = /* @__PURE__ */ a(function(r, l) {
      Hr(this.props, "selectedItem") && this.props.selectedItemChanged(r.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: lp,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, r) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, "componentDidUpdate"), i.componentWillUnmount = /* @__PURE__ */ a(function() {
      this.cleanup();
    }, "componentWillUnmount"), i.render = /* @__PURE__ */ a(function() {
      var r = Rc(this.props.children, Fe);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.
      getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1,
      this.getInputProps.called = !1;
      var l = Rc(r(this.getStateAndHelpers()));
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return l;
      if (Lg(l))
        return /* @__PURE__ */ ms(l, this.getRootProps(Ng(l)));
    }, "render"), o;
  }(Ne);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: Dg,
    itemToString: /* @__PURE__ */ a(function(o) {
      return o == null ? "" : String(o);
    }, "itemToString"),
    onStateChange: Fe,
    onInputValueChange: Fe,
    onUserAction: Fe,
    onChange: Fe,
    onSelect: Fe,
    onOuterClick: Fe,
    selectedItemChanged: /* @__PURE__ */ a(function(o, i) {
      return o !== i;
    }, "selectedItemChanged"),
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: /* @__PURE__ */ a(function(o, i) {
      return i;
    }, "stateReducer"),
    suppressRefError: !1,
    scrollIntoView: Kc
  }, e.stateChangeTypes = zg, e;
}(), Bt = Kg;
var cp = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function Ug(e, t, o) {
  var i = e.props, n = e.type, r = {};
  Object.keys(t).forEach(function(l) {
    qg(l, e, t, o), o[l] !== t[l] && (r[l] = o[l]);
  }), i.onStateChange && Object.keys(r).length && i.onStateChange(q({
    type: n
  }, r));
}
a(Ug, "callOnChangeProps");
function qg(e, t, o, i) {
  var n = t.props, r = t.type, l = "on" + ei(e) + "Change";
  n[l] && i[e] !== void 0 && i[e] !== o[e] && n[l](q({
    type: r
  }, i));
}
a(qg, "invokeOnChangeHandler");
function Gg(e, t) {
  return t.changes;
}
a(Gg, "stateReducer");
var jc = $r(function(e, t) {
  Gc(e, t);
}, 200), Yg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Rt : R, pp = "useId" in s ?
/* @__PURE__ */ a(function(t) {
  var o = t.id, i = t.labelId, n = t.menuId, r = t.getItemId, l = t.toggleButtonId, u = t.inputId, c = "downshift-" + s.useId();
  o || (o = c);
  var d = U({
    labelId: i || o + "-label",
    menuId: n || o + "-menu",
    getItemId: r || function(p) {
      return o + "-item-" + p;
    },
    toggleButtonId: l || o + "-toggle-button",
    inputId: u || o + "-input"
  });
  return d.current;
}, "useElementIds") : /* @__PURE__ */ a(function(t) {
  var o = t.id, i = o === void 0 ? "downshift-" + Uc() : o, n = t.labelId, r = t.menuId, l = t.getItemId, u = t.toggleButtonId, c = t.inputId,
  d = U({
    labelId: n || i + "-label",
    menuId: r || i + "-menu",
    getItemId: l || function(p) {
      return i + "-item-" + p;
    },
    toggleButtonId: u || i + "-toggle-button",
    inputId: c || i + "-input"
  });
  return d.current;
}, "useElementIds");
function Jn(e, t, o, i) {
  var n, r;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = o[t], r = t;
  } else
    r = t === void 0 ? o.indexOf(e) : t, n = e;
  return [n, r];
}
a(Jn, "getItemAndIndex");
function Qg(e) {
  return /^\S{1}$/.test(e);
}
a(Qg, "isAcceptedCharacterKey");
function ei(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
a(ei, "capitalizeString");
function Kr(e) {
  var t = U(e);
  return t.current = e, t;
}
a(Kr, "useLatestRef");
function dp(e, t, o, i) {
  var n = U(), r = U(), l = A(function(y, f) {
    r.current = f, y = So(y, f.props);
    var b = e(y, f), S = f.props.stateReducer(y, q({}, f, {
      changes: b
    }));
    return S;
  }, [e]), u = jt(l, t, o), c = u[0], d = u[1], p = Kr(t), g = A(function(y) {
    return d(q({
      props: p.current
    }, y));
  }, [p]), h = r.current;
  return R(function() {
    var y = So(n.current, h?.props), f = h && n.current && !i(y, c);
    f && Ug(h, y, c), n.current = c;
  }, [c, h, i]), [c, g];
}
a(dp, "useEnhancedReducer");
function fp(e, t, o, i) {
  var n = dp(e, t, o, i), r = n[0], l = n[1];
  return [So(r, t), l];
}
a(fp, "useControlledReducer$1");
var Io = {
  itemToString: /* @__PURE__ */ a(function(t) {
    return t ? String(t) : "";
  }, "itemToString"),
  itemToKey: /* @__PURE__ */ a(function(t) {
    return t;
  }, "itemToKey"),
  stateReducer: Gg,
  scrollIntoView: Kc,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function He(e, t, o) {
  o === void 0 && (o = cp);
  var i = e["default" + ei(t)];
  return i !== void 0 ? i : o[t];
}
a(He, "getDefaultValue$1");
function Nt(e, t, o) {
  o === void 0 && (o = cp);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + ei(t)];
  return n !== void 0 ? n : He(e, t, o);
}
a(Nt, "getInitialValue$1");
function mp(e) {
  var t = Nt(e, "selectedItem"), o = Nt(e, "isOpen"), i = Nt(e, "highlightedIndex"), n = Nt(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && o ? e.items.findIndex(function(r) {
      return e.itemToKey(r) === e.itemToKey(t);
    }) : i,
    isOpen: o,
    selectedItem: t,
    inputValue: n
  };
}
a(mp, "getInitialState$2");
function Ft(e, t, o) {
  var i = e.items, n = e.initialHighlightedIndex, r = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, c = t.selectedItem, d = t.
  highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && d === n && !l(i[n]) ? n : r !== void 0 && !l(i[r]) ? r : c ? i.findIndex(function(p) {
    return u(c) === u(p);
  }) : o < 0 && !l(i[i.length - 1]) ? i.length - 1 : o > 0 && !l(i[0]) ? 0 : -1;
}
a(Ft, "getHighlightedIndexOnOpen");
function hp(e, t, o) {
  var i = U({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return R(function() {
    if (!e)
      return Fe;
    var n = t.map(function(p) {
      return p.current;
    });
    function r() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    a(r, "onMouseDown");
    function l(p) {
      i.current.isMouseDown = !1, zr(p.target, n, e) || o();
    }
    a(l, "onMouseUp");
    function u() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    a(u, "onTouchStart");
    function c() {
      i.current.isTouchMove = !0;
    }
    a(c, "onTouchMove");
    function d(p) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !zr(p.target, n, e, !1) && o();
    }
    return a(d, "onTouchEnd"), e.addEventListener("mousedown", r), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.
    addEventListener("touchmove", c), e.addEventListener("touchend", d), /* @__PURE__ */ a(function() {
      e.removeEventListener("mousedown", r), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener(
      "touchmove", c), e.removeEventListener("touchend", d);
    }, "cleanup");
  }, [e, o]), i.current;
}
a(hp, "useMouseAndTouchTracker");
var ti = /* @__PURE__ */ a(function() {
  return Fe;
}, "useGetterPropsCalledChecker");
function oi(e, t, o, i) {
  i === void 0 && (i = {});
  var n = i.document, r = Ur();
  R(function() {
    if (!(!e || r || !n)) {
      var l = e(t);
      jc(l, n);
    }
  }, o), R(function() {
    return function() {
      jc.cancel(), Hg(n);
    };
  }, [n]);
}
a(oi, "useA11yMessageStatus");
function gp(e) {
  var t = e.highlightedIndex, o = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, r = e.menuElement, l = e.scrollIntoView, u = U(!0);
  return Yg(function() {
    t < 0 || !o || !Object.keys(i.current).length || (u.current === !1 ? u.current = !0 : l(n(t), r));
  }, [t]), u;
}
a(gp, "useScrollIntoView");
var ri = Fe;
function Rr(e, t, o) {
  var i;
  o === void 0 && (o = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return q({
    isOpen: !1,
    highlightedIndex: -1
  }, n && q({
    selectedItem: e.items[t],
    isOpen: He(e, "isOpen"),
    highlightedIndex: He(e, "highlightedIndex")
  }, o && {
    inputValue: e.itemToString(e.items[t])
  }));
}
a(Rr, "getChangesOnSelection");
function yp(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
a(yp, "isDropdownsStateEqual");
function Ur() {
  var e = s.useRef(!0);
  return s.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
a(Ur, "useIsInitialMount");
var Fr = {
  environment: G.default.shape({
    addEventListener: G.default.func.isRequired,
    removeEventListener: G.default.func.isRequired,
    document: G.default.shape({
      createElement: G.default.func.isRequired,
      getElementById: G.default.func.isRequired,
      activeElement: G.default.any.isRequired,
      body: G.default.any.isRequired
    }).isRequired,
    Node: G.default.func.isRequired
  }),
  itemToString: G.default.func,
  itemToKey: G.default.func,
  stateReducer: G.default.func
}, bp = q({}, Fr, {
  getA11yStatusMessage: G.default.func,
  highlightedIndex: G.default.number,
  defaultHighlightedIndex: G.default.number,
  initialHighlightedIndex: G.default.number,
  isOpen: G.default.bool,
  defaultIsOpen: G.default.bool,
  initialIsOpen: G.default.bool,
  selectedItem: G.default.any,
  initialSelectedItem: G.default.any,
  defaultSelectedItem: G.default.any,
  id: G.default.string,
  labelId: G.default.string,
  menuId: G.default.string,
  getItemId: G.default.func,
  toggleButtonId: G.default.string,
  onSelectedItemChange: G.default.func,
  onHighlightedIndexChange: G.default.func,
  onStateChange: G.default.func,
  onIsOpenChange: G.default.func,
  scrollIntoView: G.default.func
});
function vp(e, t, o) {
  var i = t.type, n = t.props, r;
  switch (i) {
    case o.ItemMouseMove:
      r = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case o.MenuMouseLeave:
      r = {
        highlightedIndex: -1
      };
      break;
    case o.ToggleButtonClick:
    case o.FunctionToggleMenu:
      r = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ft(n, e, 0)
      };
      break;
    case o.FunctionOpenMenu:
      r = {
        isOpen: !0,
        highlightedIndex: Ft(n, e, 0)
      };
      break;
    case o.FunctionCloseMenu:
      r = {
        isOpen: !1
      };
      break;
    case o.FunctionSetHighlightedIndex:
      r = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case o.FunctionSetInputValue:
      r = {
        inputValue: t.inputValue
      };
      break;
    case o.FunctionReset:
      r = {
        highlightedIndex: He(n, "highlightedIndex"),
        isOpen: He(n, "isOpen"),
        selectedItem: He(n, "selectedItem"),
        inputValue: He(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return q({}, e, r);
}
a(vp, "downshiftCommonReducer");
function Xg(e) {
  for (var t = e.keysSoFar, o = e.highlightedIndex, i = e.items, n = e.itemToString, r = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < i.
  length; u++) {
    var c = (u + o + (t.length < 2 ? 1 : 0)) % i.length, d = i[c];
    if (d !== void 0 && n(d).toLowerCase().startsWith(l) && !r(d, c))
      return c;
  }
  return o;
}
a(Xg, "getItemIndexByCharacterKey");
var VD = Lt(Lt({}, bp), { items: G.default.array.isRequired, isItemDisabled: G.default.func }), Zg = Lt(Lt({}, Io), { isItemDisabled: /* @__PURE__ */ a(
function() {
  return !1;
}, "isItemDisabled") }), Jg = Fe, Br = 0, ni = 1, ii = 2, jr = 3, si = 4, ai = 5, li = 6, ui = 7, ci = 8, pi = 9, di = 10, Wr = 11, xp = 12,
Ip = 13, fi = 14, Sp = 15, wp = 16, Ep = 17, Cp = 18, mi = 19, Zn = 20, _p = 21, Tp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Br,
  ToggleButtonKeyDownArrowDown: ni,
  ToggleButtonKeyDownArrowUp: ii,
  ToggleButtonKeyDownCharacter: jr,
  ToggleButtonKeyDownEscape: si,
  ToggleButtonKeyDownHome: ai,
  ToggleButtonKeyDownEnd: li,
  ToggleButtonKeyDownEnter: ui,
  ToggleButtonKeyDownSpaceButton: ci,
  ToggleButtonKeyDownPageUp: pi,
  ToggleButtonKeyDownPageDown: di,
  ToggleButtonBlur: Wr,
  MenuMouseLeave: xp,
  ItemMouseMove: Ip,
  ItemClick: fi,
  FunctionToggleMenu: Sp,
  FunctionOpenMenu: wp,
  FunctionCloseMenu: Ep,
  FunctionSetHighlightedIndex: Cp,
  FunctionSelectItem: mi,
  FunctionSetInputValue: Zn,
  FunctionReset: _p
});
function ey(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case fi:
      l = {
        isOpen: He(n, "isOpen"),
        highlightedIndex: He(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case jr:
      {
        var u = t.key, c = "" + e.inputValue + u, d = !e.isOpen && e.selectedItem ? n.items.findIndex(function(y) {
          return n.itemToKey(y) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, p = Xg({
          keysSoFar: c,
          highlightedIndex: d,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        l = {
          inputValue: c,
          highlightedIndex: p,
          isOpen: !0
        };
      }
      break;
    case ni:
      {
        var g = e.isOpen ? Xe(e.highlightedIndex, 1, n.items, n.isItemDisabled) : r && e.selectedItem == null ? -1 : Ft(n, e, 1);
        l = {
          highlightedIndex: g,
          isOpen: !0
        };
      }
      break;
    case ii:
      if (e.isOpen && r)
        l = Rr(n, e.highlightedIndex, !1);
      else {
        var h = e.isOpen ? Xe(e.highlightedIndex, -1, n.items, n.isItemDisabled) : Ft(n, e, -1);
        l = {
          highlightedIndex: h,
          isOpen: !0
        };
      }
      break;
    // only triggered when menu is open.
    case ui:
    case ci:
      l = Rr(n, e.highlightedIndex, !1);
      break;
    case ai:
      l = {
        highlightedIndex: gt(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case li:
      l = {
        highlightedIndex: gt(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case pi:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case di:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case si:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case Wr:
      l = q({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case mi:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return vp(e, t, Tp);
  }
  return q({}, e, l);
}
a(ey, "downshiftSelectReducer");
var ty = ["onClick"], oy = ["onMouseLeave", "refKey", "ref"], ry = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], ny = ["it\
em", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
kp.stateChangeTypes = Tp;
function kp(e) {
  e === void 0 && (e = {}), Jg(e, kp);
  var t = q({}, Zg, e), o = t.scrollIntoView, i = t.environment, n = t.getA11yStatusMessage, r = fp(ey, t, mp, yp), l = r[0], u = r[1], c = l.
  isOpen, d = l.highlightedIndex, p = l.selectedItem, g = l.inputValue, h = U(null), y = U(null), f = U({}), b = U(null), S = pp(t), E = Kr(
  {
    state: l,
    props: t
  }), m = A(function(H) {
    return f.current[S.getItemId(H)];
  }, [S]);
  oi(n, l, [c, d, p, g], i);
  var v = gp({
    menuElement: y.current,
    highlightedIndex: d,
    isOpen: c,
    itemRefs: f,
    scrollIntoView: o,
    getItemNodeFromIndex: m
  });
  R(function() {
    return b.current = $r(function(H) {
      H({
        type: Zn,
        inputValue: ""
      });
    }, 500), function() {
      b.current.cancel();
    };
  }, []), R(function() {
    g && b.current(u);
  }, [u, g]), ri({
    props: t,
    state: l
  }), R(function() {
    var H = Nt(t, "isOpen");
    H && h.current && h.current.focus();
  }, []);
  var I = hp(i, [h, y], A(/* @__PURE__ */ a(function() {
    E.current.state.isOpen && u({
      type: Wr
    });
  }, "handleBlur"), [u, E])), w = ti("getMenuProps", "getToggleButtonProps");
  R(function() {
    c || (f.current = {});
  }, [c]);
  var k = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: ni,
          altKey: V.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: ii,
          altKey: V.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: ai
        });
      }, "Home"),
      End: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: li
        });
      }, "End"),
      Escape: /* @__PURE__ */ a(function() {
        E.current.state.isOpen && u({
          type: si
        });
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(V) {
        V.preventDefault(), u({
          type: E.current.state.isOpen ? ui : Br
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(V) {
        E.current.state.isOpen && (V.preventDefault(), u({
          type: pi
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(V) {
        E.current.state.isOpen && (V.preventDefault(), u({
          type: di
        }));
      }, "PageDown"),
      " ": /* @__PURE__ */ a(function(V) {
        V.preventDefault();
        var z = E.current.state;
        if (!z.isOpen) {
          u({
            type: Br
          });
          return;
        }
        z.inputValue ? u({
          type: jr,
          key: " "
        }) : u({
          type: ci
        });
      }, "_")
    };
  }, [u, E]), _ = A(function() {
    u({
      type: Sp
    });
  }, [u]), T = A(function() {
    u({
      type: Ep
    });
  }, [u]), C = A(function() {
    u({
      type: wp
    });
  }, [u]), O = A(function(H) {
    u({
      type: Cp,
      highlightedIndex: H
    });
  }, [u]), P = A(function(H) {
    u({
      type: mi,
      selectedItem: H
    });
  }, [u]), M = A(function() {
    u({
      type: _p
    });
  }, [u]), D = A(function(H) {
    u({
      type: Zn,
      inputValue: H
    });
  }, [u]), N = A(function(H) {
    var V = H === void 0 ? {} : H, z = V.onClick, te = Te(V, ty), F = /* @__PURE__ */ a(function() {
      var L;
      (L = h.current) == null || L.focus();
    }, "labelHandleClick");
    return q({
      id: S.labelId,
      htmlFor: S.toggleButtonId,
      onClick: ae(z, F)
    }, te);
  }, [S]), Y = A(function(H, V) {
    var z, te = H === void 0 ? {} : H, F = te.onMouseLeave, B = te.refKey, L = B === void 0 ? "ref" : B, j = te.ref, Z = Te(te, oy), re = V ===
    void 0 ? {} : V, J = re.suppressRefError, pe = J === void 0 ? !1 : J, se = /* @__PURE__ */ a(function() {
      u({
        type: xp
      });
    }, "menuHandleMouseLeave");
    return w("getMenuProps", pe, L, y), q((z = {}, z[L] = Qe(j, function(ue) {
      y.current = ue;
    }), z.id = S.menuId, z.role = "listbox", z["aria-labelledby"] = Z && Z["aria-label"] ? void 0 : "" + S.labelId, z.onMouseLeave = ae(F, se),
    z), Z);
  }, [u, w, S]), W = A(function(H, V) {
    var z, te = H === void 0 ? {} : H, F = te.onBlur, B = te.onClick;
    te.onPress;
    var L = te.onKeyDown, j = te.refKey, Z = j === void 0 ? "ref" : j, re = te.ref, J = Te(te, ry), pe = V === void 0 ? {} : V, se = pe.suppressRefError,
    ue = se === void 0 ? !1 : se, le = E.current.state, xe = /* @__PURE__ */ a(function() {
      u({
        type: Br
      });
    }, "toggleButtonHandleClick"), ge = /* @__PURE__ */ a(function() {
      le.isOpen && !I.isMouseDown && u({
        type: Wr
      });
    }, "toggleButtonHandleBlur"), ke = /* @__PURE__ */ a(function(Ce) {
      var Me = to(Ce);
      Me && k[Me] ? k[Me](Ce) : Qg(Me) && u({
        type: jr,
        key: Me
      });
    }, "toggleButtonHandleKeyDown"), de = q((z = {}, z[Z] = Qe(re, function(Ie) {
      h.current = Ie;
    }), z["aria-activedescendant"] = le.isOpen && le.highlightedIndex > -1 ? S.getItemId(le.highlightedIndex) : "", z["aria-controls"] = S.menuId,
    z["aria-expanded"] = E.current.state.isOpen, z["aria-haspopup"] = "listbox", z["aria-labelledby"] = J && J["aria-label"] ? void 0 : "" +
    S.labelId, z.id = S.toggleButtonId, z.role = "combobox", z.tabIndex = 0, z.onBlur = ae(F, ge), z), J);
    return J.disabled || (de.onClick = ae(B, xe), de.onKeyDown = ae(L, ke)), w("getToggleButtonProps", ue, Z, h), de;
  }, [u, S, E, I, w, k]), Q = A(function(H) {
    var V, z = H === void 0 ? {} : H, te = z.item, F = z.index, B = z.onMouseMove, L = z.onClick, j = z.onMouseDown;
    z.onPress;
    var Z = z.refKey, re = Z === void 0 ? "ref" : Z, J = z.disabled, pe = z.ref, se = Te(z, ny);
    J !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled \
prop from useSelect.');
    var ue = E.current, le = ue.state, xe = ue.props, ge = Jn(te, F, xe.items, "Pass either item or index to getItemProps!"), ke = ge[0], de = ge[1],
    Ie = xe.isItemDisabled(ke, de), Ce = /* @__PURE__ */ a(function() {
      I.isTouchEnd || de === le.highlightedIndex || (v.current = !1, u({
        type: Ip,
        index: de,
        disabled: Ie
      }));
    }, "itemHandleMouseMove"), Me = /* @__PURE__ */ a(function() {
      u({
        type: fi,
        index: de
      });
    }, "itemHandleClick"), Ze = /* @__PURE__ */ a(function(oo) {
      return oo.preventDefault();
    }, "itemHandleMouseDown"), Pe = q((V = {}, V[re] = Qe(pe, function($e) {
      $e && (f.current[S.getItemId(de)] = $e);
    }), V["aria-disabled"] = Ie, V["aria-selected"] = "" + (ke === le.selectedItem), V.id = S.getItemId(de), V.role = "option", V), se);
    return Ie || (Pe.onClick = ae(L, Me)), Pe.onMouseMove = ae(B, Ce), Pe.onMouseDown = ae(j, Ze), Pe;
  }, [E, S, I, v, u]);
  return {
    // prop getters.
    getToggleButtonProps: W,
    getLabelProps: N,
    getMenuProps: Y,
    getItemProps: Q,
    // actions.
    toggleMenu: _,
    openMenu: C,
    closeMenu: T,
    setHighlightedIndex: O,
    selectItem: P,
    reset: M,
    setInputValue: D,
    // state.
    highlightedIndex: d,
    isOpen: c,
    selectedItem: p,
    inputValue: g
  };
}
a(kp, "useSelect");
var hi = 0, gi = 1, yi = 2, bi = 3, vi = 4, xi = 5, Ii = 6, Si = 7, wi = 8, Vr = 9, Ei = 10, Op = 11, Pp = 12, Ci = 13, Ap = 14, Mp = 15, Dp = 16,
Lp = 17, Np = 18, _i = 19, Fp = 20, Bp = 21, Ti = 22, Hp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: hi,
  InputKeyDownArrowUp: gi,
  InputKeyDownEscape: yi,
  InputKeyDownHome: bi,
  InputKeyDownEnd: vi,
  InputKeyDownPageUp: xi,
  InputKeyDownPageDown: Ii,
  InputKeyDownEnter: Si,
  InputChange: wi,
  InputBlur: Vr,
  InputClick: Ei,
  MenuMouseLeave: Op,
  ItemMouseMove: Pp,
  ItemClick: Ci,
  ToggleButtonClick: Ap,
  FunctionToggleMenu: Mp,
  FunctionOpenMenu: Dp,
  FunctionCloseMenu: Lp,
  FunctionSetHighlightedIndex: Np,
  FunctionSelectItem: _i,
  FunctionSetInputValue: Fp,
  FunctionReset: Bp,
  ControlledPropUpdatedSelectedItem: Ti
});
function iy(e) {
  var t = mp(e), o = t.selectedItem, i = t.inputValue;
  return i === "" && o && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(
  o)), q({}, t, {
    inputValue: i
  });
}
a(iy, "getInitialState$1");
var $D = q({}, bp, {
  items: G.default.array.isRequired,
  isItemDisabled: G.default.func,
  inputValue: G.default.string,
  defaultInputValue: G.default.string,
  initialInputValue: G.default.string,
  inputId: G.default.string,
  onInputValueChange: G.default.func
});
function sy(e, t, o, i) {
  var n = U(), r = dp(e, t, o, i), l = r[0], u = r[1], c = Ur();
  return R(function() {
    if (Hr(t, "selectedItem")) {
      if (!c) {
        var d = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current);
        d && u({
          type: Ti,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = l.selectedItem === n.current ? t.selectedItem : l.selectedItem;
    }
  }, [l.selectedItem, t.selectedItem]), [So(l, t), u];
}
a(sy, "useControlledReducer");
var ay = Fe, ly = q({}, Io, {
  isItemDisabled: /* @__PURE__ */ a(function() {
    return !1;
  }, "isItemDisabled")
});
function uy(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case Ci:
      l = {
        isOpen: He(n, "isOpen"),
        highlightedIndex: He(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case hi:
      e.isOpen ? l = {
        highlightedIndex: Xe(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: r && e.selectedItem == null ? -1 : Ft(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case gi:
      e.isOpen ? r ? l = Rr(n, e.highlightedIndex) : l = {
        highlightedIndex: Xe(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: Ft(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case Si:
      l = Rr(n, e.highlightedIndex);
      break;
    case yi:
      l = q({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case xi:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case Ii:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case bi:
      l = {
        highlightedIndex: gt(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case vi:
      l = {
        highlightedIndex: gt(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Vr:
      l = q({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case wi:
      l = {
        isOpen: !0,
        highlightedIndex: He(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case Ei:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Ft(n, e, 0)
      };
      break;
    case _i:
      l = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case Ti:
      l = {
        inputValue: t.inputValue
      };
      break;
    default:
      return vp(e, t, Hp);
  }
  return q({}, e, l);
}
a(uy, "downshiftUseComboboxReducer");
var cy = ["onMouseLeave", "refKey", "ref"], py = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "dis\
abled"], dy = ["onClick", "onPress", "refKey", "ref"], fy = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKe\
y", "ref"];
zp.stateChangeTypes = Hp;
function zp(e) {
  e === void 0 && (e = {}), ay(e, zp);
  var t = q({}, ly, e), o = t.items, i = t.scrollIntoView, n = t.environment, r = t.getA11yStatusMessage, l = sy(uy, t, iy, yp), u = l[0], c = l[1],
  d = u.isOpen, p = u.highlightedIndex, g = u.selectedItem, h = u.inputValue, y = U(null), f = U({}), b = U(null), S = U(null), E = Ur(), m = pp(
  t), v = U(), I = Kr({
    state: u,
    props: t
  }), w = A(function(F) {
    return f.current[m.getItemId(F)];
  }, [m]);
  oi(r, u, [d, p, g, h], n);
  var k = gp({
    menuElement: y.current,
    highlightedIndex: p,
    isOpen: d,
    itemRefs: f,
    scrollIntoView: i,
    getItemNodeFromIndex: w
  });
  ri({
    props: t,
    state: u
  }), R(function() {
    var F = Nt(t, "isOpen");
    F && b.current && b.current.focus();
  }, []), R(function() {
    E || (v.current = o.length);
  });
  var _ = hp(n, [S, y, b], A(/* @__PURE__ */ a(function() {
    I.current.state.isOpen && c({
      type: Vr,
      selectItem: !1
    });
  }, "handleBlur"), [c, I])), T = ti("getInputProps", "getMenuProps");
  R(function() {
    d || (f.current = {});
  }, [d]), R(function() {
    var F;
    !d || !(n != null && n.document) || !(b != null && (F = b.current) != null && F.focus) || n.document.activeElement !== b.current && b.current.
    focus();
  }, [d, n]);
  var C = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: hi,
          altKey: B.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: gi,
          altKey: B.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: bi
        }));
      }, "Home"),
      End: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: vi
        }));
      }, "End"),
      Escape: /* @__PURE__ */ a(function(B) {
        var L = I.current.state;
        (L.isOpen || L.inputValue || L.selectedItem || L.highlightedIndex > -1) && (B.preventDefault(), c({
          type: yi
        }));
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(B) {
        var L = I.current.state;
        !L.isOpen || B.which === 229 || (B.preventDefault(), c({
          type: Si
        }));
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: xi
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: Ii
        }));
      }, "PageDown")
    };
  }, [c, I]), O = A(function(F) {
    return q({
      id: m.labelId,
      htmlFor: m.inputId
    }, F);
  }, [m]), P = A(function(F, B) {
    var L, j = F === void 0 ? {} : F, Z = j.onMouseLeave, re = j.refKey, J = re === void 0 ? "ref" : re, pe = j.ref, se = Te(j, cy), ue = B ===
    void 0 ? {} : B, le = ue.suppressRefError, xe = le === void 0 ? !1 : le;
    return T("getMenuProps", xe, J, y), q((L = {}, L[J] = Qe(pe, function(ge) {
      y.current = ge;
    }), L.id = m.menuId, L.role = "listbox", L["aria-labelledby"] = se && se["aria-label"] ? void 0 : "" + m.labelId, L.onMouseLeave = ae(Z,
    function() {
      c({
        type: Op
      });
    }), L), se);
  }, [c, T, m]), M = A(function(F) {
    var B, L, j = F === void 0 ? {} : F, Z = j.item, re = j.index, J = j.refKey, pe = J === void 0 ? "ref" : J, se = j.ref, ue = j.onMouseMove,
    le = j.onMouseDown, xe = j.onClick;
    j.onPress;
    var ge = j.disabled, ke = Te(j, py);
    ge !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useCombobox.');
    var de = I.current, Ie = de.props, Ce = de.state, Me = Jn(Z, re, Ie.items, "Pass either item or index to getItemProps!"), Ze = Me[0], Pe = Me[1],
    $e = Ie.isItemDisabled(Ze, Pe), oo = "onClick", Co = xe, lt = /* @__PURE__ */ a(function() {
      _.isTouchEnd || Pe === Ce.highlightedIndex || (k.current = !1, c({
        type: Pp,
        index: Pe,
        disabled: $e
      }));
    }, "itemHandleMouseMove"), yt = /* @__PURE__ */ a(function() {
      c({
        type: Ci,
        index: Pe
      });
    }, "itemHandleClick"), ut = /* @__PURE__ */ a(function(xd) {
      return xd.preventDefault();
    }, "itemHandleMouseDown");
    return q((B = {}, B[pe] = Qe(se, function(Ke) {
      Ke && (f.current[m.getItemId(Pe)] = Ke);
    }), B["aria-disabled"] = $e, B["aria-selected"] = "" + (Pe === Ce.highlightedIndex), B.id = m.getItemId(Pe), B.role = "option", B), !$e &&
    (L = {}, L[oo] = ae(Co, yt), L), {
      onMouseMove: ae(ue, lt),
      onMouseDown: ae(le, ut)
    }, ke);
  }, [c, m, I, _, k]), D = A(function(F) {
    var B, L = F === void 0 ? {} : F, j = L.onClick;
    L.onPress;
    var Z = L.refKey, re = Z === void 0 ? "ref" : Z, J = L.ref, pe = Te(L, dy), se = I.current.state, ue = /* @__PURE__ */ a(function() {
      c({
        type: Ap
      });
    }, "toggleButtonHandleClick");
    return q((B = {}, B[re] = Qe(J, function(le) {
      S.current = le;
    }), B["aria-controls"] = m.menuId, B["aria-expanded"] = se.isOpen, B.id = m.toggleButtonId, B.tabIndex = -1, B), !pe.disabled && q({}, {
      onClick: ae(j, ue)
    }), pe);
  }, [c, I, m]), N = A(function(F, B) {
    var L, j = F === void 0 ? {} : F, Z = j.onKeyDown, re = j.onChange, J = j.onInput, pe = j.onBlur;
    j.onChangeText;
    var se = j.onClick, ue = j.refKey, le = ue === void 0 ? "ref" : ue, xe = j.ref, ge = Te(j, fy), ke = B === void 0 ? {} : B, de = ke.suppressRefError,
    Ie = de === void 0 ? !1 : de;
    T("getInputProps", Ie, le, b);
    var Ce = I.current.state, Me = /* @__PURE__ */ a(function(ut) {
      var Ke = to(ut);
      Ke && C[Ke] && C[Ke](ut);
    }, "inputHandleKeyDown"), Ze = /* @__PURE__ */ a(function(ut) {
      c({
        type: wi,
        inputValue: ut.target.value
      });
    }, "inputHandleChange"), Pe = /* @__PURE__ */ a(function(ut) {
      if (n != null && n.document && Ce.isOpen && !_.isMouseDown) {
        var Ke = ut.relatedTarget === null && n.document.activeElement !== n.document.body;
        c({
          type: Vr,
          selectItem: !Ke
        });
      }
    }, "inputHandleBlur"), $e = /* @__PURE__ */ a(function() {
      c({
        type: Ei
      });
    }, "inputHandleClick"), oo = "onChange", Co = {};
    if (!ge.disabled) {
      var lt;
      Co = (lt = {}, lt[oo] = ae(re, J, Ze), lt.onKeyDown = ae(Z, Me), lt.onBlur = ae(pe, Pe), lt.onClick = ae(se, $e), lt);
    }
    return q((L = {}, L[le] = Qe(xe, function(yt) {
      b.current = yt;
    }), L["aria-activedescendant"] = Ce.isOpen && Ce.highlightedIndex > -1 ? m.getItemId(Ce.highlightedIndex) : "", L["aria-autocomplete"] =
    "list", L["aria-controls"] = m.menuId, L["aria-expanded"] = Ce.isOpen, L["aria-labelledby"] = ge && ge["aria-label"] ? void 0 : m.labelId,
    L.autoComplete = "off", L.id = m.inputId, L.role = "combobox", L.value = Ce.inputValue, L), Co, ge);
  }, [c, m, n, C, I, _, T]), Y = A(function() {
    c({
      type: Mp
    });
  }, [c]), W = A(function() {
    c({
      type: Lp
    });
  }, [c]), Q = A(function() {
    c({
      type: Dp
    });
  }, [c]), H = A(function(F) {
    c({
      type: Np,
      highlightedIndex: F
    });
  }, [c]), V = A(function(F) {
    c({
      type: _i,
      selectedItem: F
    });
  }, [c]), z = A(function(F) {
    c({
      type: Fp,
      inputValue: F
    });
  }, [c]), te = A(function() {
    c({
      type: Bp
    });
  }, [c]);
  return {
    // prop getters.
    getItemProps: M,
    getLabelProps: O,
    getMenuProps: P,
    getInputProps: N,
    getToggleButtonProps: D,
    // actions.
    toggleMenu: Y,
    openMenu: Q,
    closeMenu: W,
    setHighlightedIndex: H,
    setInputValue: z,
    selectItem: V,
    reset: te,
    // state.
    highlightedIndex: p,
    isOpen: d,
    selectedItem: g,
    inputValue: h
  };
}
a(zp, "useCombobox");
var Rp = {
  activeIndex: -1,
  selectedItems: []
};
function Wc(e, t) {
  return Nt(e, t, Rp);
}
a(Wc, "getInitialValue");
function Vc(e, t) {
  return He(e, t, Rp);
}
a(Vc, "getDefaultValue");
function my(e) {
  var t = Wc(e, "activeIndex"), o = Wc(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: o
  };
}
a(my, "getInitialState");
function $c(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
a($c, "isKeyDownOperationPermitted");
function hy(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
a(hy, "isStateEqual");
var KD = {
  stateReducer: Fr.stateReducer,
  itemToKey: Fr.itemToKey,
  environment: Fr.environment,
  selectedItems: G.default.array,
  initialSelectedItems: G.default.array,
  defaultSelectedItems: G.default.array,
  getA11yStatusMessage: G.default.func,
  activeIndex: G.default.number,
  initialActiveIndex: G.default.number,
  defaultActiveIndex: G.default.number,
  onActiveIndexChange: G.default.func,
  onSelectedItemsChange: G.default.func,
  keyNavigationNext: G.default.string,
  keyNavigationPrevious: G.default.string
}, gy = {
  itemToKey: Io.itemToKey,
  stateReducer: Io.stateReducer,
  environment: Io.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, yy = Fe, ki = 0, Oi = 1, Pi = 2, Ai = 3, Mi = 4, Di = 5, Li = 6, Ni = 7, Fi = 8, Bi = 9, Hi = 10, zi = 11, Ri = 12, by = /* @__PURE__ */ Object.
freeze({
  __proto__: null,
  SelectedItemClick: ki,
  SelectedItemKeyDownDelete: Oi,
  SelectedItemKeyDownBackspace: Pi,
  SelectedItemKeyDownNavigationNext: Ai,
  SelectedItemKeyDownNavigationPrevious: Mi,
  DropdownKeyDownNavigationPrevious: Di,
  DropdownKeyDownBackspace: Li,
  DropdownClick: Ni,
  FunctionAddSelectedItem: Fi,
  FunctionRemoveSelectedItem: Bi,
  FunctionSetSelectedItems: Hi,
  FunctionSetActiveIndex: zi,
  FunctionReset: Ri
});
function vy(e, t) {
  var o = t.type, i = t.index, n = t.props, r = t.selectedItem, l = e.activeIndex, u = e.selectedItems, c;
  switch (o) {
    case ki:
      c = {
        activeIndex: i
      };
      break;
    case Mi:
      c = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
    case Ai:
      c = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
    case Pi:
    case Oi: {
      if (l < 0)
        break;
      var d = l;
      u.length === 1 ? d = -1 : l === u.length - 1 && (d = u.length - 2), c = q({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: d
      });
      break;
    }
    case Di:
      c = {
        activeIndex: u.length - 1
      };
      break;
    case Li:
      c = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case Fi:
      c = {
        selectedItems: [].concat(u, [r])
      };
      break;
    case Ni:
      c = {
        activeIndex: -1
      };
      break;
    case Bi: {
      var p = l, g = u.findIndex(function(f) {
        return n.itemToKey(f) === n.itemToKey(r);
      });
      if (g < 0)
        break;
      u.length === 1 ? p = -1 : g === u.length - 1 && (p = u.length - 2), c = {
        selectedItems: [].concat(u.slice(0, g), u.slice(g + 1)),
        activeIndex: p
      };
      break;
    }
    case Hi: {
      var h = t.selectedItems;
      c = {
        selectedItems: h
      };
      break;
    }
    case zi: {
      var y = t.activeIndex;
      c = {
        activeIndex: y
      };
      break;
    }
    case Ri:
      c = {
        activeIndex: Vc(n, "activeIndex"),
        selectedItems: Vc(n, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return q({}, e, c);
}
a(vy, "downshiftMultipleSelectionReducer");
var xy = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], Iy = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyActio\
n"];
jp.stateChangeTypes = by;
function jp(e) {
  e === void 0 && (e = {}), yy(e, jp);
  var t = q({}, gy, e), o = t.getA11yStatusMessage, i = t.environment, n = t.keyNavigationNext, r = t.keyNavigationPrevious, l = fp(vy, t, my,
  hy), u = l[0], c = l[1], d = u.activeIndex, p = u.selectedItems, g = Ur(), h = U(null), y = U();
  y.current = [];
  var f = Kr({
    state: u,
    props: t
  });
  oi(o, u, [d, p], i), R(function() {
    g || (d === -1 && h.current ? h.current.focus() : y.current[d] && y.current[d].focus());
  }, [d]), ri({
    props: t,
    state: u
  });
  var b = ti("getDropdownProps"), S = K(function() {
    var C;
    return C = {}, C[r] = function() {
      c({
        type: Mi
      });
    }, C[n] = function() {
      c({
        type: Ai
      });
    }, C.Delete = /* @__PURE__ */ a(function() {
      c({
        type: Oi
      });
    }, "Delete"), C.Backspace = /* @__PURE__ */ a(function() {
      c({
        type: Pi
      });
    }, "Backspace"), C;
  }, [c, n, r]), E = K(function() {
    var C;
    return C = {}, C[r] = function(O) {
      $c(O) && c({
        type: Di
      });
    }, C.Backspace = /* @__PURE__ */ a(function(P) {
      $c(P) && c({
        type: Li
      });
    }, "Backspace"), C;
  }, [c, r]), m = A(function(C) {
    var O, P = C === void 0 ? {} : C, M = P.refKey, D = M === void 0 ? "ref" : M, N = P.ref, Y = P.onClick, W = P.onKeyDown, Q = P.selectedItem,
    H = P.index, V = Te(P, xy), z = f.current.state, te = Jn(Q, H, z.selectedItems, "Pass either item or index to getSelectedItemProps!"), F = te[1],
    B = F > -1 && F === z.activeIndex, L = /* @__PURE__ */ a(function() {
      c({
        type: ki,
        index: F
      });
    }, "selectedItemHandleClick"), j = /* @__PURE__ */ a(function(re) {
      var J = to(re);
      J && S[J] && S[J](re);
    }, "selectedItemHandleKeyDown");
    return q((O = {}, O[D] = Qe(N, function(Z) {
      Z && y.current.push(Z);
    }), O.tabIndex = B ? 0 : -1, O.onClick = ae(Y, L), O.onKeyDown = ae(W, j), O), V);
  }, [c, f, S]), v = A(function(C, O) {
    var P, M = C === void 0 ? {} : C, D = M.refKey, N = D === void 0 ? "ref" : D, Y = M.ref, W = M.onKeyDown, Q = M.onClick, H = M.preventKeyAction,
    V = H === void 0 ? !1 : H, z = Te(M, Iy), te = O === void 0 ? {} : O, F = te.suppressRefError, B = F === void 0 ? !1 : F;
    b("getDropdownProps", B, N, h);
    var L = /* @__PURE__ */ a(function(re) {
      var J = to(re);
      J && E[J] && E[J](re);
    }, "dropdownHandleKeyDown"), j = /* @__PURE__ */ a(function() {
      c({
        type: Ni
      });
    }, "dropdownHandleClick");
    return q((P = {}, P[N] = Qe(Y, function(Z) {
      Z && (h.current = Z);
    }), P), !V && {
      onKeyDown: ae(W, L),
      onClick: ae(Q, j)
    }, z);
  }, [c, E, b]), I = A(function(C) {
    c({
      type: Fi,
      selectedItem: C
    });
  }, [c]), w = A(function(C) {
    c({
      type: Bi,
      selectedItem: C
    });
  }, [c]), k = A(function(C) {
    c({
      type: Hi,
      selectedItems: C
    });
  }, [c]), _ = A(function(C) {
    c({
      type: zi,
      activeIndex: C
    });
  }, [c]), T = A(function() {
    c({
      type: Ri
    });
  }, [c]);
  return {
    getSelectedItemProps: m,
    getDropdownProps: v,
    addSelectedItem: I,
    removeSelectedItem: w,
    setSelectedItems: k,
    setActiveIndex: _,
    reset: T,
    selectedItems: p,
    activeIndex: d
  };
}
a(jp, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var Vp = Be(Wp(), 1);

// src/manager/components/sidebar/types.ts
function Eo(e) {
  return !!(e && e.showAll);
}
a(Eo, "isExpandType");
function Wi(e) {
  return !!(e && e.item);
}
a(Wi, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: Sy } = ie, Vi = 50, wy = {
  shouldSort: !0,
  tokenize: !0,
  findAllMatches: !0,
  includeScore: !0,
  includeMatches: !0,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
}, Ey = x.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
}), Cy = x.label({
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
}), _y = x.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 2,
  flexGrow: 1,
  height: 32,
  width: "100%",
  boxShadow: `${e.button.border} 0 0 0 1px inset`,
  borderRadius: e.appBorderRadius + 2,
  "&:has(input:focus), &:has(input:active)": {
    boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
    background: e.background.app
  }
})), Ty = x.div(({ theme: e, onClick: t }) => ({
  cursor: t ? "pointer" : "default",
  flex: "0 0 28px",
  height: "100%",
  pointerEvents: t ? "auto" : "none",
  color: e.textMutedColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), ky = x.input(({ theme: e }) => ({
  appearance: "none",
  height: 28,
  width: "100%",
  padding: 0,
  border: 0,
  background: "transparent",
  fontSize: `${e.typography.size.s1 + 1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  color: e.color.defaultText,
  outline: 0,
  "&::placeholder": {
    color: e.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), Oy = x.code(({ theme: e }) => ({
  margin: 5,
  marginTop: 6,
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4,
  flexShrink: 0
})), Py = x.span({
  fontSize: "14px"
}), Ay = x.div({
  display: "flex",
  alignItems: "center",
  gap: 2
}), My = x.div({ outline: 0 }), $p = s.memo(/* @__PURE__ */ a(function({
  children: t,
  dataset: o,
  enableShortcuts: i = !0,
  getLastViewed: n,
  initialQuery: r = "",
  searchBarContent: l,
  searchFieldContent: u
}) {
  let c = ne(), d = U(null), [p, g] = $("Find components"), [h, y] = $(!1), f = c ? qe(c.getShortcutKeys().search) : "/", b = A(() => {
    let w = o.entries.reduce((k, [_, { index: T, status: C }]) => {
      let O = vr(T || {}, C);
      return T && k.push(
        ...Object.values(T).map((P) => {
          let M = C && C[P.id] ? vo(Object.values(C[P.id] || {}).map((D) => D.status)) : null;
          return {
            ...Wn(P, o.hash[_]),
            status: M || O[P.id] || null
          };
        })
      ), k;
    }, []);
    return new Vp.default(w, wy);
  }, [o]), S = A(
    (w) => {
      let k = b();
      if (!w)
        return [];
      let _ = [], T = /* @__PURE__ */ new Set(), C = k.search(w).filter(({ item: O }) => !(O.type === "component" || O.type === "docs" || O.
      type === "story") || // @ts-expect-error (non strict)
      T.has(O.parent) ? !1 : (T.add(O.id), !0));
      return C.length && (_ = C.slice(0, h ? 1e3 : Vi), C.length > Vi && !h && _.push({
        showAll: /* @__PURE__ */ a(() => y(!0), "showAll"),
        totalCount: C.length,
        moreCount: C.length - Vi
      })), _;
    },
    [h, b]
  ), E = A(
    (w) => {
      if (Wi(w)) {
        let { id: k, refId: _ } = w.item;
        c?.selectStory(k, void 0, { ref: _ !== ot && _ }), d.current.blur(), y(!1);
        return;
      }
      Eo(w) && w.showAll();
    },
    [c]
  ), m = A((w, k) => {
    y(!1);
  }, []), v = A(
    (w, k) => {
      switch (k.type) {
        case Bt.stateChangeTypes.blurInput:
          return {
            ...k,
            // Prevent clearing the input on blur
            inputValue: w.inputValue,
            // Return to the tree view after selecting an item
            isOpen: w.inputValue && !w.selectedItem
          };
        case Bt.stateChangeTypes.mouseUp:
          return w;
        case Bt.stateChangeTypes.keyDownEscape:
          return w.inputValue ? { ...k, inputValue: "", isOpen: !0, selectedItem: null } : { ...k, isOpen: !1, selectedItem: null };
        case Bt.stateChangeTypes.clickItem:
        case Bt.stateChangeTypes.keyDownEnter:
          return Wi(k.selectedItem) ? { ...k, inputValue: w.inputValue } : Eo(k.selectedItem) ? w : k;
        default:
          return k;
      }
    },
    []
  ), { isMobile: I } = he();
  return (
    // @ts-expect-error (non strict)
    /* @__PURE__ */ s.createElement(
      Bt,
      {
        initialInputValue: r,
        stateReducer: v,
        itemToString: (w) => w?.item?.name || "",
        scrollIntoView: (w) => Ot(w),
        onSelect: E,
        onInputValueChange: m
      },
      ({
        isOpen: w,
        openMenu: k,
        closeMenu: _,
        inputValue: T,
        clearSelection: C,
        getInputProps: O,
        getItemProps: P,
        getLabelProps: M,
        getMenuProps: D,
        getRootProps: N,
        highlightedIndex: Y
      }) => {
        let W = T ? T.trim() : "", Q = W ? S(W) : [], H = !W && n();
        H && H.length && (Q = H.reduce((F, { storyId: B, refId: L }) => {
          let j = o.hash[L];
          if (j && j.index && j.index[B]) {
            let Z = j.index[B], re = Z.type === "story" ? j.index[Z.parent] : Z;
            F.some((J) => J.item.refId === L && J.item.id === re.id) || F.push({ item: Wn(re, o.hash[L]), matches: [], score: 0 });
          }
          return F;
        }, []));
        let V = "storybook-explorer-searchfield", z = O({
          id: V,
          ref: d,
          required: !0,
          type: "search",
          placeholder: p,
          onFocus: /* @__PURE__ */ a(() => {
            k(), g("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ a(() => g("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ a((F) => {
            F.key === "Escape" && T.length === 0 && d.current.blur();
          }, "onKeyDown")
        }), te = M({
          htmlFor: V
        });
        return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Cy, { ...te }, "Search for components"), /* @__PURE__ */ s.
        createElement(Ey, null, /* @__PURE__ */ s.createElement(
          _y,
          {
            ...N({ refKey: "" }, { suppressRefError: !0 }),
            className: "search-field"
          },
          /* @__PURE__ */ s.createElement(Ty, null, /* @__PURE__ */ s.createElement(Xo, null)),
          /* @__PURE__ */ s.createElement(ky, { ...z }),
          !I && i && !w && /* @__PURE__ */ s.createElement(Oy, null, f === "\u2318 K" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.
          createElement(Py, null, "\u2318"), "K") : f),
          /* @__PURE__ */ s.createElement(Ay, null, w && /* @__PURE__ */ s.createElement(ee, { onClick: () => C() }, /* @__PURE__ */ s.createElement(
          Ge, null)), u)
        ), l), /* @__PURE__ */ s.createElement(My, { tabIndex: 0, id: "storybook-explorer-menu" }, t({
          query: W,
          results: Q,
          isBrowsing: !w && Sy.activeElement !== d.current,
          closeMenu: _,
          getMenuProps: D,
          getItemProps: P,
          highlightedIndex: Y
        })));
      }
    )
  );
}, "Search"));

// src/manager/components/sidebar/SearchResults.tsx
var { document: Kp } = ie, Dy = x.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
}), Ly = x.li(({ theme: e, isHighlighted: t }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "left",
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: t ? e.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
    background: ye(0.93, e.color.secondary),
    outline: "none"
  }
})), Ny = x.div({
  marginTop: 2
}), Fy = x.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), By = x.div(({ theme: e }) => ({
  marginTop: 20,
  textAlign: "center",
  fontSize: `${e.typography.size.s2}px`,
  lineHeight: "18px",
  color: e.color.defaultText,
  small: {
    color: e.barTextColor,
    fontSize: `${e.typography.size.s1}px`
  }
})), Hy = x.mark(({ theme: e }) => ({
  background: "transparent",
  color: e.color.secondary
})), zy = x.div({
  marginTop: 8
}), Ry = x.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
})), Up = s.memo(/* @__PURE__ */ a(function({
  children: t,
  match: o
}) {
  if (!o)
    return t;
  let { value: i, indices: n } = o, { nodes: r } = n.reduce(
    ({ cursor: l, nodes: u }, [c, d], p, { length: g }) => (u.push(/* @__PURE__ */ s.createElement("span", { key: `${p}-1` }, i.slice(l, c))),
    u.push(/* @__PURE__ */ s.createElement(Hy, { key: `${p}-2` }, i.slice(c, d + 1))), p === g - 1 && u.push(/* @__PURE__ */ s.createElement(
    "span", { key: `${p}-3` }, i.slice(d + 1))), { cursor: d + 1, nodes: u }),
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ s.createElement("span", null, r);
}, "Highlight")), jy = x.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
})), Wy = x.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  fontSize: `${e.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
})), Vy = s.memo(/* @__PURE__ */ a(function({ item: t, matches: o, onClick: i, ...n }) {
  let r = A(
    (p) => {
      p.preventDefault(), i?.(p);
    },
    [i]
  ), l = ne();
  R(() => {
    l && n.isHighlighted && t.type === "component" && l.emit(bt, { ids: [t.children[0]] }, { options: { target: t.refId } });
  }, [n.isHighlighted, t]);
  let u = o.find((p) => p.key === "name"), c = o.filter((p) => p.key === "path"), [d] = t.status ? bo[t.status] : [];
  return /* @__PURE__ */ s.createElement(Ly, { ...n, onClick: r }, /* @__PURE__ */ s.createElement(Ny, null, t.type === "component" && /* @__PURE__ */ s.
  createElement(mt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ s.createElement(Le, { type: "com\
ponent" })), t.type === "story" && /* @__PURE__ */ s.createElement(mt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ s.
  createElement(Le, { type: "story" })), !(t.type === "component" || t.type === "story") && /* @__PURE__ */ s.createElement(mt, { viewBox: "\
0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ s.createElement(Le, { type: "document" }))), /* @__PURE__ */ s.createElement(
  Fy, { className: "search-result-item--label" }, /* @__PURE__ */ s.createElement(jy, null, /* @__PURE__ */ s.createElement(Up, { match: u },
  t.name)), /* @__PURE__ */ s.createElement(Wy, null, t.path.map((p, g) => /* @__PURE__ */ s.createElement("span", { key: g }, /* @__PURE__ */ s.
  createElement(Up, { match: c.find((h) => h.arrayIndex === g) }, p))))), t.status ? /* @__PURE__ */ s.createElement(ic, { status: t.status },
  d) : null);
}, "Result")), qp = s.memo(/* @__PURE__ */ a(function({
  query: t,
  results: o,
  closeMenu: i,
  getMenuProps: n,
  getItemProps: r,
  highlightedIndex: l,
  isLoading: u = !1,
  enableShortcuts: c = !0,
  clearLastViewed: d
}) {
  let p = ne();
  R(() => {
    let y = /* @__PURE__ */ a((f) => {
      if (!(!c || u || f.repeat) && ht(!1, f) && We("Escape", f)) {
        if (f.target?.id === "storybook-explorer-searchfield")
          return;
        f.preventDefault(), i();
      }
    }, "handleEscape");
    return Kp.addEventListener("keydown", y), () => Kp.removeEventListener("keydown", y);
  }, [i, c, u]);
  let g = A((y) => {
    if (!p)
      return;
    let f = y.currentTarget, b = f.getAttribute("data-id"), S = f.getAttribute("data-refid"), E = p.resolveStory(b, S === "storybook_interna\
l" ? void 0 : S);
    E?.type === "component" && p.emit(bt, {
      // @ts-expect-error (TODO)
      ids: [E.isLeaf ? E.id : E.children[0]],
      options: { target: S }
    });
  }, []), h = /* @__PURE__ */ a(() => {
    d(), i();
  }, "handleClearLastViewed");
  return /* @__PURE__ */ s.createElement(Dy, { ...n() }, o.length > 0 && !t && /* @__PURE__ */ s.createElement(Ry, { className: "search-resu\
lt-recentlyOpened" }, "Recently opened", /* @__PURE__ */ s.createElement(
    ee,
    {
      className: "search-result-recentlyOpened-clear",
      onClick: h
    },
    /* @__PURE__ */ s.createElement(ka, null)
  )), o.length === 0 && t && /* @__PURE__ */ s.createElement("li", null, /* @__PURE__ */ s.createElement(By, null, /* @__PURE__ */ s.createElement(
  "strong", null, "No components found"), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("small", null, "Find \
components by name or path."))), o.map((y, f) => {
    if (Eo(y))
      return /* @__PURE__ */ s.createElement(zy, { key: "search-result-expand" }, /* @__PURE__ */ s.createElement(
        fe,
        {
          ...y,
          ...r({ key: f, index: f, item: y }),
          size: "small"
        },
        "Show ",
        y.moreCount,
        " more results"
      ));
    let { item: b } = y, S = `${b.refId}::${b.id}`;
    return /* @__PURE__ */ s.createElement(
      Vy,
      {
        key: b.id,
        ...y,
        ...r({ key: S, index: f, item: y }),
        isHighlighted: l === f,
        "data-id": y.item.id,
        "data-refid": y.item.refId,
        onMouseOver: g,
        className: "search-result-item"
      }
    );
  }));
}, "SearchResults"));

// src/manager/components/sidebar/LegacyRender.tsx
var $y = x.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 2px"
}), Ky = x.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: 6
}), Uy = x.div({
  display: "flex",
  gap: 6
}), qy = x.div(({ crashed: e, theme: t }) => ({
  fontSize: t.typography.size.s1,
  fontWeight: e ? "bold" : "normal",
  color: e ? t.color.negativeText : t.color.defaultText
})), Gy = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s1,
  color: e.barTextColor
})), Gp = /* @__PURE__ */ a(({ ...e }) => {
  let t = e.description, o = e.title, i = ne();
  return /* @__PURE__ */ s.createElement($y, null, /* @__PURE__ */ s.createElement(Ky, null, /* @__PURE__ */ s.createElement(qy, { crashed: e.
  crashed, id: "testing-module-title" }, /* @__PURE__ */ s.createElement(o, { ...e })), /* @__PURE__ */ s.createElement(Gy, { id: "testing-m\
odule-description" }, /* @__PURE__ */ s.createElement(t, { ...e }))), /* @__PURE__ */ s.createElement(Uy, null, e.watchable && /* @__PURE__ */ s.
  createElement(
    fe,
    {
      "aria-label": `${e.watching ? "Disable" : "Enable"} watch mode for ${name}`,
      variant: "ghost",
      padding: "small",
      active: e.watching,
      onClick: () => i.setTestProviderWatchMode(e.id, !e.watching),
      disabled: e.crashed || e.running
    },
    /* @__PURE__ */ s.createElement(qo, null)
  ), e.runnable && /* @__PURE__ */ s.createElement(s.Fragment, null, e.running && e.cancellable ? /* @__PURE__ */ s.createElement(
    fe,
    {
      "aria-label": `Stop ${name}`,
      variant: "ghost",
      padding: "small",
      onClick: () => i.cancelTestProvider(e.id),
      disabled: e.cancelling
    },
    /* @__PURE__ */ s.createElement(Ca, null)
  ) : /* @__PURE__ */ s.createElement(
    fe,
    {
      "aria-label": `Start ${e.name}`,
      variant: "ghost",
      padding: "small",
      onClick: () => i.runTestProvider(e.id),
      disabled: e.crashed || e.running
    },
    /* @__PURE__ */ s.createElement(xa, null)
  ))));
}, "LegacyRender");

// src/manager/components/sidebar/TestingModule.tsx
var $i = 500, Yy = vt({
  "0%": { transform: "rotate(0deg)" },
  "10%": { transform: "rotate(10deg)" },
  "40%": { transform: "rotate(170deg)" },
  "50%": { transform: "rotate(180deg)" },
  "60%": { transform: "rotate(190deg)" },
  "90%": { transform: "rotate(350deg)" },
  "100%": { transform: "rotate(360deg)" }
}), Qy = x.div(({ crashed: e, failed: t, running: o, theme: i, updated: n }) => ({
  position: "relative",
  lineHeight: "20px",
  width: "100%",
  padding: 1,
  overflow: "hidden",
  backgroundColor: `var(--sb-sidebar-bottom-card-background, ${i.background.content})`,
  borderRadius: `var(--sb-sidebar-bottom-card-border-radius, ${i.appBorderRadius + 1}px)`,
  boxShadow: `inset 0 0 0 1px ${e && !o ? i.color.negative : n ? i.color.positive : i.appBorderColor}, var(--sb-sidebar-bottom-card-box-shad\
ow, 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${i.background.app})`,
  transition: "box-shadow 1s",
  "&:after": {
    content: '""',
    display: o ? "block" : "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: "calc(max(100vw, 100vh) * -0.5)",
    marginTop: "calc(max(100vw, 100vh) * -0.5)",
    height: "max(100vw, 100vh)",
    width: "max(100vw, 100vh)",
    animation: `${Yy} 3s linear infinite`,
    background: t ? (
      // Hardcoded colors to prevent themes from messing with them (orange+gold, secondary+seafoam)
      "conic-gradient(transparent 90deg, #FC521F 150deg, #FFAE00 210deg, transparent 270deg)"
    ) : "conic-gradient(transparent 90deg, #029CFD 150deg, #37D5D3 210deg, transparent 270deg)",
    opacity: 1,
    willChange: "auto"
  }
})), Xy = x.div(({ theme: e }) => ({
  position: "relative",
  zIndex: 1,
  borderRadius: e.appBorderRadius,
  backgroundColor: e.background.content,
  "&:hover #testing-module-collapse-toggle": {
    opacity: 1
  }
})), Zy = x.div(({ theme: e }) => ({
  overflow: "hidden",
  willChange: "auto",
  boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
})), Jy = x.div({
  display: "flex",
  flexDirection: "column"
}), eb = x.div(({ onClick: e }) => ({
  display: "flex",
  width: "100%",
  cursor: e ? "pointer" : "default",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
  padding: "6px"
})), tb = x.div({
  display: "flex",
  flexBasis: "100%",
  justifyContent: "flex-end",
  gap: 6
}), ob = x(fe)({
  opacity: 0,
  transition: "opacity 250ms",
  willChange: "auto",
  "&:focus, &:hover": {
    opacity: 1
  }
}), Yp = x(fe)(
  { minWidth: 28 },
  ({ active: e, status: t, theme: o }) => !e && (o.base === "light" ? {
    background: {
      negative: o.background.negative,
      warning: o.background.warning
    }[t],
    color: {
      negative: o.color.negativeText,
      warning: o.color.warningText
    }[t]
  } : {
    background: {
      negative: `${o.color.negative}22`,
      warning: `${o.color.warning}22`
    }[t],
    color: {
      negative: o.color.negative,
      warning: o.color.warning
    }[t]
  })
), rb = x.div(({ theme: e }) => ({
  padding: 4,
  "&:not(:last-child)": {
    boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
  }
})), Qp = /* @__PURE__ */ a(({
  testProviders: e,
  errorCount: t,
  errorsActive: o,
  setErrorsActive: i,
  warningCount: n,
  warningsActive: r,
  setWarningsActive: l
}) => {
  let u = ne(), c = U(null), d = U(null), [p, g] = $($i), [h, y] = $(!1), [f, b] = $(!0), [S, E] = $(!1);
  R(() => {
    if (d.current) {
      g(d.current?.getBoundingClientRect().height || $i);
      let _ = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (d.current && !f) {
            let T = d.current?.getBoundingClientRect().height || $i;
            g(T);
          }
        });
      });
      return _.observe(d.current), () => _.disconnect();
    }
  }, [f]), R(() => {
    let _, T = /* @__PURE__ */ a(() => {
      y(!0), _ = setTimeout(y, 1e3, !1);
    }, "handler");
    return u.on(en, T), () => {
      u.off(en, T), clearTimeout(_);
    };
  }, [u]);
  let m = A((_) => {
    _.stopPropagation(), E(!0), b((T) => !T), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      E(!1);
    }, 250);
  }, []), v = e.some((_) => _.running), I = e.some((_) => _.crashed), w = e.some((_) => _.failed), k = e.length > 0;
  return !k && (!t || !n) ? null : /* @__PURE__ */ s.createElement(
    Qy,
    {
      id: "storybook-testing-module",
      running: v,
      crashed: I,
      failed: w || t > 0,
      updated: h
    },
    /* @__PURE__ */ s.createElement(Xy, null, k && /* @__PURE__ */ s.createElement(
      Zy,
      {
        "data-testid": "collapse",
        style: {
          transition: S ? "max-height 250ms" : "max-height 0ms",
          display: k ? "block" : "none",
          maxHeight: f ? 0 : p
        }
      },
      /* @__PURE__ */ s.createElement(Jy, { ref: d }, e.map((_) => {
        let { render: T } = _;
        return /* @__PURE__ */ s.createElement(rb, { key: _.id, "data-module-id": _.id }, T ? /* @__PURE__ */ s.createElement(T, { ..._ }) :
        /* @__PURE__ */ s.createElement(Gp, { ..._ }));
      }))
    ), /* @__PURE__ */ s.createElement(eb, { ...k ? { onClick: m } : {} }, k && /* @__PURE__ */ s.createElement(
      fe,
      {
        variant: "ghost",
        padding: "small",
        onClick: (_) => {
          _.stopPropagation(), e.filter((T) => !T.running && T.runnable).forEach(({ id: T }) => u.runTestProvider(T));
        },
        disabled: v
      },
      /* @__PURE__ */ s.createElement(va, null),
      v ? "Running..." : "Run tests"
    ), /* @__PURE__ */ s.createElement(tb, null, k && /* @__PURE__ */ s.createElement(
      ob,
      {
        variant: "ghost",
        padding: "small",
        onClick: m,
        id: "testing-module-collapse-toggle",
        "aria-label": f ? "Expand testing module" : "Collapse testing module"
      },
      /* @__PURE__ */ s.createElement(
        sa,
        {
          style: {
            transform: f ? "none" : "rotate(180deg)",
            transition: "transform 250ms",
            willChange: "auto"
          }
        }
      )
    ), t > 0 && /* @__PURE__ */ s.createElement(
      _e,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(It, { note: "Toggle errors" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        Yp,
        {
          id: "errors-found-filter",
          variant: "ghost",
          padding: t < 10 ? "medium" : "small",
          status: "negative",
          active: o,
          onClick: (_) => {
            _.stopPropagation(), i(!o);
          },
          "aria-label": "Toggle errors"
        },
        t < 100 ? t : "99+"
      )
    ), n > 0 && /* @__PURE__ */ s.createElement(
      _e,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(It, { note: "Toggle warnings" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        Yp,
        {
          id: "warnings-found-filter",
          variant: "ghost",
          padding: n < 10 ? "medium" : "small",
          status: "warning",
          active: r,
          onClick: (_) => {
            _.stopPropagation(), l(!r);
          },
          "aria-label": "Toggle warnings"
        },
        n < 100 ? n : "99+"
      )
    ))))
  );
}, "TestingModule");

// src/manager/components/sidebar/SidebarBottom.tsx
var nb = "sidebar-bottom-spacer", ib = "sidebar-bottom-wrapper", sb = /* @__PURE__ */ a(() => !0, "filterNone"), ab = /* @__PURE__ */ a(({ status: e = {} }) => Object.
values(e).some((t) => t?.status === "warn"), "filterWarn"), lb = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status ===
"error"), "filterError"), ub = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status === "warn" || t?.status === "\
error"), "filterBoth"), cb = /* @__PURE__ */ a((e = !1, t = !1) => e && t ? ub : e ? ab : t ? lb : sb, "getFilter"), pb = x.div({
  pointerEvents: "none"
}), db = x.div(({ theme: e }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: 12,
  display: "flex",
  flexDirection: "column",
  gap: 12,
  color: e.color.defaultText,
  fontSize: e.typography.size.s1,
  "&:empty": {
    display: "none"
  },
  // Integrators can use these to style their custom additions
  "--sb-sidebar-bottom-card-background": e.background.content,
  "--sb-sidebar-bottom-card-border": `1px solid ${e.appBorderColor}`,
  "--sb-sidebar-bottom-card-border-radius": `${e.appBorderRadius + 1}px`,
  "--sb-sidebar-bottom-card-box-shadow": `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${e.background.app}`
})), fb = /* @__PURE__ */ a(({
  api: e,
  notifications: t = [],
  status: o = {},
  isDevelopment: i
}) => {
  let n = U(null), r = U(null), [l, u] = $(!1), [c, d] = $(!1), { testProviders: p } = De(), g = Object.values(o).filter(
    (S) => Object.values(S).some((E) => E?.status === "warn")
  ), h = Object.values(o).filter(
    (S) => Object.values(S).some((E) => E?.status === "error")
  ), y = g.length > 0, f = h.length > 0;
  R(() => {
    if (n.current && r.current) {
      let S = new ResizeObserver(() => {
        n.current && r.current && (n.current.style.height = `${r.current.scrollHeight}px`);
      });
      return S.observe(r.current), () => S.disconnect();
    }
  }, []), R(() => {
    let S = cb(y && l, f && c);
    e.experimental_setFilter("sidebar-bottom-filter", S);
  }, [e, y, f, l, c]), R(() => {
    let S = /* @__PURE__ */ a(({ providerId: m, ...v }) => {
      e.updateTestProviderState(m, {
        error: { name: "Crashed!", message: v.error.message },
        running: !1,
        crashed: !0,
        watching: !1
      });
    }, "onCrashReport"), E = /* @__PURE__ */ a(({ providerId: m, ...v }) => {
      let I = "status" in v ? v.status : void 0;
      e.updateTestProviderState(
        m,
        I === "failed" ? { ...v, running: !1, failed: !0 } : { ...v, running: I === "pending" }
      );
    }, "onProgressReport");
    return e.on(tn, S), e.on(on, E), () => {
      e.off(tn, S), e.off(on, E);
    };
  }, [e, p]);
  let b = Object.values(p || {});
  return !y && !f && !b.length && !t.length ? null : /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(pb, { id: nb,
  ref: n }), /* @__PURE__ */ s.createElement(db, { id: ib, ref: r }, /* @__PURE__ */ s.createElement(tr, { notifications: t, clearNotification: e.
  clearNotification }), i && /* @__PURE__ */ s.createElement(
    Qp,
    {
      testProviders: b,
      errorCount: h.length,
      errorsActive: c,
      setErrorsActive: d,
      warningCount: g.length,
      warningsActive: l,
      setWarningsActive: u
    }
  )));
}, "SidebarBottomBase"), Xp = /* @__PURE__ */ a(({ isDevelopment: e }) => {
  let t = ne(), { notifications: o, status: i } = De();
  return /* @__PURE__ */ s.createElement(
    fb,
    {
      api: t,
      notifications: o,
      status: i,
      isDevelopment: e
    }
  );
}, "SidebarBottom");

// src/manager/components/sidebar/TagsFilterPanel.tsx
var mb = /* @__PURE__ */ new Set(["play-fn"]), hb = x.div({
  minWidth: 180,
  maxWidth: 220
}), Zp = /* @__PURE__ */ a(({
  api: e,
  allTags: t,
  selectedTags: o,
  toggleTag: i,
  isDevelopment: n
}) => {
  let r = t.filter((c) => !mb.has(c)), l = e.getDocsUrl({ subpath: "writing-stories/tags#filtering-by-custom-tags" }), u = [
    t.map((c) => {
      let d = o.includes(c), p = `tag-${c}`;
      return {
        id: p,
        title: c,
        right: /* @__PURE__ */ s.createElement(
          "input",
          {
            type: "checkbox",
            id: p,
            name: p,
            value: c,
            checked: d,
            onChange: () => {
            }
          }
        ),
        onClick: /* @__PURE__ */ a(() => i(c), "onClick")
      };
    })
  ];
  return t.length === 0 && u.push([
    {
      id: "no-tags",
      title: "There are no tags. Use tags to organize and filter your Storybook.",
      isIndented: !1
    }
  ]), r.length === 0 && n && u.push([
    {
      id: "tags-docs",
      title: "Learn how to add tags",
      icon: /* @__PURE__ */ s.createElement(it, null),
      href: l
    }
  ]), /* @__PURE__ */ s.createElement(hb, null, /* @__PURE__ */ s.createElement(pt, { links: u }));
}, "TagsFilterPanel");

// src/manager/components/sidebar/TagsFilter.tsx
var gb = "tags-filter", yb = /* @__PURE__ */ new Set([
  "dev",
  "docs-only",
  "test-only",
  "autodocs",
  "test",
  "attached-mdx",
  "unattached-mdx"
]), bb = x.div({
  position: "relative"
}), vb = x(Bo)(({ theme: e }) => ({
  position: "absolute",
  top: 7,
  right: 7,
  transform: "translate(50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 3,
  height: 6,
  minWidth: 6,
  lineHeight: "px",
  boxShadow: `${e.barSelectedColor} 0 0 0 1px inset`,
  fontSize: e.typography.size.s1 - 1,
  background: e.color.secondary,
  color: e.color.lightest
})), Jp = /* @__PURE__ */ a(({
  api: e,
  indexJson: t,
  initialSelectedTags: o = [],
  isDevelopment: i
}) => {
  let [n, r] = $(o), [l, u] = $(!1), c = n.length > 0;
  R(() => {
    e.experimental_setFilter(gb, (h) => n.length === 0 ? !0 : n.some((y) => h.tags?.includes(y)));
  }, [e, n]);
  let d = Object.values(t.entries).reduce((h, y) => (y.tags?.forEach((f) => {
    yb.has(f) || h.add(f);
  }), h), /* @__PURE__ */ new Set()), p = A(
    (h) => {
      n.includes(h) ? r(n.filter((y) => y !== h)) : r([...n, h]);
    },
    [n, r]
  ), g = A(
    (h) => {
      h.preventDefault(), u(!l);
    },
    [l, u]
  );
  return d.size === 0 && !i ? null : /* @__PURE__ */ s.createElement(
    _e,
    {
      placement: "bottom",
      trigger: "click",
      onVisibleChange: u,
      tooltip: () => /* @__PURE__ */ s.createElement(
        Zp,
        {
          api: e,
          allTags: Array.from(d).toSorted(),
          selectedTags: n,
          toggleTag: p,
          isDevelopment: i
        }
      ),
      closeOnOutsideClick: !0
    },
    /* @__PURE__ */ s.createElement(bb, null, /* @__PURE__ */ s.createElement(ee, { key: "tags", title: "Tag filters", active: c, onClick: g },
    /* @__PURE__ */ s.createElement(fa, null)), n.length > 0 && /* @__PURE__ */ s.createElement(vb, null))
  );
}, "TagsFilter");

// ../node_modules/es-toolkit/dist/compat/function/debounce.mjs
function Ki(e, t = 0, o = {}) {
  typeof o != "object" && (o = {});
  let { signal: i, leading: n = !1, trailing: r = !0, maxWait: l } = o, u = Array(2);
  n && (u[0] = "leading"), r && (u[1] = "trailing");
  let c, d = null, p = Ir(function(...y) {
    c = e.apply(this, y), d = null;
  }, t, { signal: i, edges: u }), g = /* @__PURE__ */ a(function(...y) {
    if (l != null) {
      if (d === null)
        d = Date.now();
      else if (Date.now() - d >= l)
        return c = e.apply(this, y), d = Date.now(), p.cancel(), p.schedule(), c;
    }
    return p.apply(this, y), c;
  }, "debounced"), h = /* @__PURE__ */ a(() => (p.flush(), c), "flush");
  return g.cancel = p.cancel, g.flush = h, g;
}
a(Ki, "debounce");

// src/manager/components/sidebar/useLastViewed.ts
var Yr = Be(ed(), 1);
var td = Ki((e) => Yr.default.set("lastViewedStoryIds", e), 1e3), od = /* @__PURE__ */ a((e) => {
  let t = K(() => {
    let n = Yr.default.get("lastViewedStoryIds");
    return !n || !Array.isArray(n) ? [] : n.some((r) => typeof r == "object" && r.storyId && r.refId) ? n : [];
  }, [Yr.default]), o = U(t), i = A(
    (n) => {
      let r = o.current, l = r.findIndex(
        ({ storyId: u, refId: c }) => u === n.storyId && c === n.refId
      );
      l !== 0 && (l === -1 ? o.current = [n, ...r] : o.current = [n, ...r.slice(0, l), ...r.slice(l + 1)], td(o.current));
    },
    [o]
  );
  return R(() => {
    e && i(e);
  }, [e]), {
    getLastViewed: A(() => o.current, [o]),
    clearLastViewed: A(() => {
      o.current = o.current.slice(0, 1), td(o.current);
    }, [o])
  };
}, "useLastViewed");

// src/manager/components/sidebar/Sidebar.tsx
var ot = "storybook_internal", xb = x.nav(({ theme: e }) => ({
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: e.background.content,
  [rt]: {
    background: e.background.app
  }
})), Ib = x(nt)({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
}), Sb = x(It)({
  margin: 0
}), wb = x(ee)(({ theme: e }) => ({
  color: e.color.mediumdark,
  width: 32,
  height: 32,
  borderRadius: e.appBorderRadius + 2
})), Eb = s.memo(/* @__PURE__ */ a(function({
  children: t,
  condition: o
}) {
  let [i, n] = s.Children.toArray(t);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { style: { display: o ? "block" : "none" } },
  i), /* @__PURE__ */ s.createElement("div", { style: { display: o ? "none" : "block" } }, n));
}, "Swap")), Cb = /* @__PURE__ */ a((e, t, o, i, n) => {
  let r = K(
    () => ({
      [ot]: {
        index: e,
        indexError: t,
        previewInitialized: o,
        status: i,
        title: null,
        id: ot,
        url: "iframe.html"
      },
      ...n
    }),
    [n, e, t, o, i]
  );
  return K(() => ({ hash: r, entries: Object.entries(r) }), [r]);
}, "useCombination"), _b = ie.STORYBOOK_RENDERER === "react", rd = s.memo(/* @__PURE__ */ a(function({
  // @ts-expect-error (non strict)
  storyId: t = null,
  refId: o = ot,
  index: i,
  indexJson: n,
  indexError: r,
  status: l,
  previewInitialized: u,
  menu: c,
  extra: d,
  menuHighlighted: p = !1,
  enableShortcuts: g = !0,
  isDevelopment: h = ie.CONFIG_TYPE === "DEVELOPMENT",
  refs: y = {},
  onMenuClick: f,
  showCreateStoryButton: b = h && _b
}) {
  let [S, E] = $(!1), m = K(() => t && { storyId: t, refId: o }, [t, o]), v = Cb(i, r, u, l, y), I = !i && !r, w = od(m), { isMobile: k } = he(),
  _ = ne();
  return /* @__PURE__ */ s.createElement(xb, { className: "container sidebar-container" }, /* @__PURE__ */ s.createElement(Ro, { vertical: !0,
  offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ s.createElement(Ib, { row: 1.6 }, /* @__PURE__ */ s.createElement(
    Pc,
    {
      className: "sidebar-header",
      menuHighlighted: p,
      menu: c,
      extra: d,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading: I,
      onMenuClick: f
    }
  ), /* @__PURE__ */ s.createElement(
    $p,
    {
      dataset: v,
      enableShortcuts: g,
      searchBarContent: b && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
        _e,
        {
          trigger: "hover",
          hasChrome: !1,
          tooltip: /* @__PURE__ */ s.createElement(Sb, { note: "Create a new story" })
        },
        /* @__PURE__ */ s.createElement(
          wb,
          {
            onClick: () => {
              E(!0);
            },
            variant: "outline"
          },
          /* @__PURE__ */ s.createElement(Ia, null)
        )
      ), /* @__PURE__ */ s.createElement(
        Ou,
        {
          open: S,
          onOpenChange: E
        }
      )),
      searchFieldContent: n && /* @__PURE__ */ s.createElement(Jp, { api: _, indexJson: n, isDevelopment: h }),
      ...w
    },
    ({
      query: T,
      results: C,
      isBrowsing: O,
      closeMenu: P,
      getMenuProps: M,
      getItemProps: D,
      highlightedIndex: N
    }) => /* @__PURE__ */ s.createElement(Eb, { condition: O }, /* @__PURE__ */ s.createElement(
      Cc,
      {
        dataset: v,
        selected: m,
        isLoading: I,
        isBrowsing: O
      }
    ), /* @__PURE__ */ s.createElement(
      qp,
      {
        query: T,
        results: C,
        closeMenu: P,
        getMenuProps: M,
        getItemProps: D,
        highlightedIndex: N,
        enableShortcuts: g,
        isLoading: I,
        clearLastViewed: w.clearLastViewed
      }
    ))
  )), k || I ? null : /* @__PURE__ */ s.createElement(Xp, { isDevelopment: h })));
}, "Sidebar"));

// src/manager/container/Menu.tsx
var Tb = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, kb = x.span(({ theme: e }) => ({
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: e.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
})), Ob = x.code(
  ({ theme: e }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`
), ze = /* @__PURE__ */ a(({ keys: e }) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(kb, null, e.map(
(t, o) => /* @__PURE__ */ s.createElement(Ob, { key: t }, qe([t]))))), "Shortcut"), nd = /* @__PURE__ */ a((e, t, o, i, n, r, l) => {
  let u = t.getShortcutKeys(), c = K(
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("about"), "onClick"),
      icon: /* @__PURE__ */ s.createElement(ha, null)
    }),
    [t]
  ), d = K(() => ({
    id: "documentation",
    title: "Documentation",
    href: t.getDocsUrl({ versioned: !0, renderer: !0 }),
    icon: /* @__PURE__ */ s.createElement(it, null)
  }), [t]), p = e.whatsNewData?.status === "SUCCESS" && !e.disableWhatsNewNotifications, g = t.isWhatsNewUnread(), h = K(
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("whats-new"), "onClick"),
      right: p && g && /* @__PURE__ */ s.createElement(Bo, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ s.createElement(Oa, null)
    }),
    [t, p, g]
  ), y = K(
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("shortcuts"), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.shortcutsPage }) : null
    }),
    [t, l, u.shortcutsPage]
  ), f = K(
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: /* @__PURE__ */ a(() => t.toggleNav(), "onClick"),
      active: r,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.toggleNav }) : null,
      icon: r ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, u, r]
  ), b = K(
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: /* @__PURE__ */ a(() => t.toggleToolbar(), "onClick"),
      active: o,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.toolbar }) : null,
      icon: o ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, u, o]
  ), S = K(
    () => ({
      id: "A",
      title: "Show addons",
      onClick: /* @__PURE__ */ a(() => t.togglePanel(), "onClick"),
      active: n,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.togglePanel }) : null,
      icon: n ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, u, n]
  ), E = K(
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: /* @__PURE__ */ a(() => t.togglePanelPosition(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.panelPosition }) : null
    }),
    [t, l, u]
  ), m = K(
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: /* @__PURE__ */ a(() => t.toggleFullscreen(), "onClick"),
      active: i,
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.fullScreen }) : null,
      icon: i ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, u, i]
  ), v = K(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ a(() => t.focusOnUIElement(Tb.storySearchField), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.search }) : null
    }),
    [t, l, u]
  ), I = K(
    () => ({
      id: "up",
      title: "Previous component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.prevComponent }) : null
    }),
    [t, l, u]
  ), w = K(
    () => ({
      id: "down",
      title: "Next component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.nextComponent }) : null
    }),
    [t, l, u]
  ), k = K(
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.prevStory }) : null
    }),
    [t, l, u]
  ), _ = K(
    () => ({
      id: "next",
      title: "Next story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.nextStory }) : null
    }),
    [t, l, u]
  ), T = K(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ a(() => t.emit(no), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: u.collapseAll }) : null
    }),
    [t, l, u]
  ), C = A(() => {
    let O = t.getAddonsShortcuts(), P = u;
    return Object.entries(O).filter(([M, { showInMenu: D }]) => D).map(([M, { label: D, action: N }]) => ({
      id: M,
      title: D,
      onClick: /* @__PURE__ */ a(() => N(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(ze, { keys: P[M] }) : null
    }));
  }, [t, l, u]);
  return K(
    () => [
      [
        c,
        ...e.whatsNewData?.status === "SUCCESS" ? [h] : [],
        d,
        y
      ],
      [
        f,
        b,
        S,
        E,
        m,
        v,
        I,
        w,
        k,
        _,
        T
      ],
      C()
    ],
    [
      c,
      e,
      h,
      d,
      y,
      f,
      b,
      S,
      E,
      m,
      v,
      I,
      w,
      k,
      _,
      T,
      C
    ]
  );
}, "useMenu");

// src/manager/container/Sidebar.tsx
var Pb = s.memo(/* @__PURE__ */ a(function({ onMenuClick: t }) {
  return /* @__PURE__ */ s.createElement(me, { filter: /* @__PURE__ */ a(({ state: i, api: n }) => {
    let {
      ui: { name: r, url: l, enableShortcuts: u },
      viewMode: c,
      storyId: d,
      refId: p,
      layout: { showToolbar: g },
      // FIXME: This is the actual `index.json` index where the `index` below
      // is actually the stories hash. We should fix this up and make it consistent.
      // eslint-disable-next-line @typescript-eslint/naming-convention
      internal_index: h,
      index: y,
      status: f,
      indexError: b,
      previewInitialized: S,
      refs: E
    } = i, m = nd(
      i,
      n,
      g,
      n.getIsFullscreen(),
      n.getIsPanelShown(),
      n.getIsNavShown(),
      u
    ), v = i.whatsNewData?.status === "SUCCESS" && !i.disableWhatsNewNotifications, I = n.getElements(Ee.experimental_SIDEBAR_TOP), w = K(() => Object.
    values(I), [Object.keys(I).join("")]);
    return {
      title: r,
      url: l,
      indexJson: h,
      index: y,
      indexError: b,
      status: f,
      previewInitialized: S,
      refs: E,
      storyId: d,
      refId: p,
      viewMode: c,
      menu: m,
      menuHighlighted: v && n.isWhatsNewUnread(),
      enableShortcuts: u,
      extra: w
    };
  }, "mapper") }, (i) => /* @__PURE__ */ s.createElement(rd, { ...i, onMenuClick: t }));
}, "Sideber")), id = Pb;

// src/manager/App.tsx
var sd = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, pages: o, hasTab: i }) => {
  let { setMobileAboutOpen: n } = he();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Wt, { styles: Ss }), /* @__PURE__ */ s.createElement(
    sl,
    {
      hasTab: i,
      managerLayoutState: e,
      setManagerLayoutState: t,
      slotMain: /* @__PURE__ */ s.createElement(Zl, { id: "main", withLoader: !0 }),
      slotSidebar: /* @__PURE__ */ s.createElement(id, { onMenuClick: () => n((r) => !r) }),
      slotPanel: /* @__PURE__ */ s.createElement(ul, null),
      slotPages: o.map(({ id: r, render: l }) => /* @__PURE__ */ s.createElement(l, { key: r }))
    }
  ));
}, "App");

// src/manager/provider.ts
var Ui = class Ui {
  getElements(t) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(t) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    return console.error("Provider.getConfig() is not implemented!"), {};
  }
};
a(Ui, "Provider");
var Ht = Ui;

// src/manager/settings/About.tsx
var Ab = x.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
}), Mb = x.header({
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
}), Db = x.div(({ theme: e }) => ({
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: e.base === "light" ? e.color.dark : e.color.lightest,
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2
})), Lb = x.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
}), ad = x(Ae)(({ theme: e }) => ({
  "&&": {
    fontWeight: e.typography.weight.bold,
    color: e.base === "light" ? e.color.dark : e.color.light
  },
  "&:hover": {
    color: e.base === "light" ? e.color.darkest : e.color.lightest
  }
})), ld = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => /* @__PURE__ */ s.createElement(Ab, null, /* @__PURE__ */ s.createElement(Mb, null,
/* @__PURE__ */ s.createElement(jo, { alt: "Storybook" })), /* @__PURE__ */ s.createElement(or, { onNavigateToWhatsNew: e }), /* @__PURE__ */ s.
createElement(Db, null, /* @__PURE__ */ s.createElement(Lb, null, /* @__PURE__ */ s.createElement(fe, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ s.createElement(Go, null), "GitHub")), /* @__PURE__ */ s.createElement(
fe, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ s.createElement(Gt, { style: {
display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ s.createElement("div", null, "Open source software maintained by",
" ", /* @__PURE__ */ s.createElement(ad, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ s.createElement(
ad, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))), "AboutScreen");

// src/manager/settings/AboutPage.tsx
var Gi = class Gi extends Ne {
  componentDidMount() {
    let { api: t, notificationId: o } = this.props;
    t.clearNotification(o);
  }
  render() {
    let { children: t } = this.props;
    return t;
  }
};
a(Gi, "NotificationClearer");
var qi = Gi, ud = /* @__PURE__ */ a(() => {
  let e = ne(), t = De(), o = A(() => {
    e.changeSettingsTab("whats-new");
  }, [e]);
  return /* @__PURE__ */ s.createElement(qi, { api: e, notificationId: "update" }, /* @__PURE__ */ s.createElement(
    ld,
    {
      onNavigateToWhatsNew: t.whatsNewData?.status === "SUCCESS" ? o : void 0
    }
  ));
}, "AboutPage");

// src/manager/settings/SettingsFooter.tsx
var Nb = x.div(({ theme: e }) => ({
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${e.appBorderColor}`,
  fontWeight: e.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
})), Fb = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(Nb, { ...e }, /* @__PURE__ */ s.createElement(Ae, { secondary: !0, href: "\
https://storybook.js.org", cancel: !1, target: "_blank" }, "Docs"), /* @__PURE__ */ s.createElement(Ae, { secondary: !0, href: "https://gith\
ub.com/storybookjs/storybook", cancel: !1, target: "_blank" }, "GitHub"), /* @__PURE__ */ s.createElement(
  Ae,
  {
    secondary: !0,
    href: "https://storybook.js.org/community#support",
    cancel: !1,
    target: "_blank"
  },
  "Support"
)), "SettingsFooter"), cd = Fb;

// src/manager/settings/shortcuts.tsx
var Bb = x.header(({ theme: e }) => ({
  marginBottom: 20,
  fontSize: e.typography.size.m3,
  fontWeight: e.typography.weight.bold,
  alignItems: "center",
  display: "flex"
})), pd = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Hb = x.div({
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
}), zb = x.div(({ theme: e }) => ({
  padding: "6px 0",
  borderTop: `1px solid ${e.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
})), Rb = x.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
}), jb = x.div({
  alignSelf: "center"
}), Wb = x(Ho.Input)(
  ({ valid: e, theme: t }) => e === "error" ? {
    animation: `${t.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
), Vb = vt`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`, $b = x(je)(
  ({ valid: e, theme: t }) => e === "valid" ? {
    color: t.color.positive,
    animation: `${Vb} 2s ease forwards`
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
), Kb = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  padding: "3rem 20px",
  maxWidth: 600,
  margin: "0 auto"
})), Ub = {
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component"
}, qb = ["escape"];
function Yi(e) {
  return Object.entries(e).reduce(
    // @ts-expect-error (non strict)
    (t, [o, i]) => qb.includes(o) ? t : { ...t, [o]: { shortcut: i, error: !1 } },
    {}
  );
}
a(Yi, "toShortcutState");
var Qi = class Qi extends Ne {
  constructor(o) {
    super(o);
    this.onKeyDown = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      if (o.key === "Backspace")
        return this.restoreDefault();
      let r = ds(o);
      if (!r)
        return !1;
      let l = !!Object.entries(n).find(
        ([u, { shortcut: c }]) => u !== i && c && fs(r, c)
      );
      return this.setState({
        shortcutKeys: { ...n, [i]: { shortcut: r, error: l } }
      });
    }, "onKeyDown");
    this.onFocus = /* @__PURE__ */ a((o) => () => {
      let { shortcutKeys: i } = this.state;
      this.setState({
        activeFeature: o,
        shortcutKeys: {
          ...i,
          [o]: { shortcut: null, error: !1 }
        }
      });
    }, "onFocus");
    this.onBlur = /* @__PURE__ */ a(async () => {
      let { shortcutKeys: o, activeFeature: i } = this.state;
      if (o[i]) {
        let { shortcut: n, error: r } = o[i];
        return !n || r ? this.restoreDefault() : this.saveShortcut();
      }
      return !1;
    }, "onBlur");
    this.saveShortcut = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { setShortcut: n } = this.props;
      await n(o, i[o].shortcut), this.setState({ successField: o });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ a(async () => {
      let { restoreAllDefaultShortcuts: o } = this.props, i = await o();
      return this.setState({ shortcutKeys: Yi(i) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { restoreDefaultShortcut: n } = this.props, r = await n(o);
      return this.setState({
        shortcutKeys: {
          ...i,
          ...Yi({ [o]: r })
        }
      });
    }, "restoreDefault");
    this.displaySuccessMessage = /* @__PURE__ */ a((o) => {
      let { successField: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !1 ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !0 ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ a(() => {
      let { shortcutKeys: o, addonsShortcutLabels: i } = this.state;
      return Object.entries(o).map(([r, { shortcut: l }]) => /* @__PURE__ */ s.createElement(zb, { key: r }, /* @__PURE__ */ s.createElement(
      jb, null, Ub[r] || i[r]), /* @__PURE__ */ s.createElement(
        Wb,
        {
          spellCheck: "false",
          valid: this.displayError(r),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(r),
          onKeyDown: this.onKeyDown,
          value: l ? qe(l) : "",
          placeholder: "Type keys",
          readOnly: !0
        }
      ), /* @__PURE__ */ s.createElement($b, { valid: this.displaySuccessMessage(r) })));
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Rb, null, /* @__PURE__ */ s.createElement(Hb, null, /* @__PURE__ */ s.
    createElement(pd, null, "Commands"), /* @__PURE__ */ s.createElement(pd, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
    this.state = {
      // @ts-expect-error (non strict)
      activeFeature: void 0,
      // @ts-expect-error (non strict)
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      // @ts-expect-error (non strict)
      shortcutKeys: Yi(o.shortcutKeys),
      addonsShortcutLabels: o.addonsShortcutLabels
    };
  }
  render() {
    let o = this.renderKeyForm();
    return /* @__PURE__ */ s.createElement(Kb, null, /* @__PURE__ */ s.createElement(Bb, null, "Keyboard shortcuts"), o, /* @__PURE__ */ s.createElement(
      fe,
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
    ), /* @__PURE__ */ s.createElement(cd, null));
  }
};
a(Qi, "ShortcutsScreen");
var Qr = Qi;

// src/manager/settings/ShortcutsPage.tsx
var dd = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, null, ({
  api: {
    getShortcutKeys: e,
    getAddonsShortcutLabels: t,
    setShortcut: o,
    restoreDefaultShortcut: i,
    restoreAllDefaultShortcuts: n
  }
}) => /* @__PURE__ */ s.createElement(
  Qr,
  {
    shortcutKeys: e(),
    addonsShortcutLabels: t(),
    setShortcut: o,
    restoreDefaultShortcut: i,
    restoreAllDefaultShortcuts: n
  }
)), "ShortcutsPage");

// src/manager/settings/whats_new.tsx
var fd = x.div({
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
}), Gb = x.div({
  position: "relative",
  height: "32px"
}), md = x.div(({ theme: e }) => ({
  paddingTop: "12px",
  color: e.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${e.typography.size.s1}px`,
  lineHeight: "16px"
})), Yb = x.div(({ theme: e }) => ({
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: e.background.bar,
  fontSize: "13px",
  borderTop: "1px solid",
  borderColor: e.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})), Qb = /* @__PURE__ */ a(({
  isNotificationsEnabled: e,
  onToggleNotifications: t,
  onCopyLink: o
}) => {
  let i = Oe(), [n, r] = $("Copy Link"), l = /* @__PURE__ */ a(() => {
    o(), r("Copied!"), setTimeout(() => r("Copy Link"), 4e3);
  }, "copyLink");
  return /* @__PURE__ */ s.createElement(Yb, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
  /* @__PURE__ */ s.createElement(ma, { color: i.color.mediumdark }), /* @__PURE__ */ s.createElement("div", null, "Share this with your tea\
m."), /* @__PURE__ */ s.createElement(fe, { onClick: l, size: "small", variant: "ghost" }, n)), e ? /* @__PURE__ */ s.createElement(fe, { size: "\
small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(da, null), "Hide notifications") : /* @__PURE__ */ s.createElement(fe,
  { size: "small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(qo, null), "Show notifications"));
}, "WhatsNewFooter"), Xb = x.iframe(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded: e }) => ({ visibility: e ? "visible" : "hidden" })
), Zb = x((e) => /* @__PURE__ */ s.createElement($o, { ...e }))(({ theme: e }) => ({
  color: e.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
})), Jb = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fd, null, /* @__PURE__ */ s.createElement(Gb, null, /* @__PURE__ */ s.createElement(
zo, null)), /* @__PURE__ */ s.createElement(md, null, "Loading...")), "WhatsNewLoader"), e0 = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(
fd, null, /* @__PURE__ */ s.createElement(Zb, null), /* @__PURE__ */ s.createElement(md, null, "The page couldn't be loaded. Check your inte\
rnet connection and try again.")), "MaxWaitTimeMessaging"), t0 = /* @__PURE__ */ a(({
  didHitMaxWaitTime: e,
  isLoaded: t,
  onLoad: o,
  url: i,
  onCopyLink: n,
  onToggleNotifications: r,
  isNotificationsEnabled: l
}) => /* @__PURE__ */ s.createElement(we, null, !t && !e && /* @__PURE__ */ s.createElement(Jb, null), e ? /* @__PURE__ */ s.createElement(e0,
null) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Xb, { isLoaded: t, onLoad: o, src: i, title: "What\
's new?" }), /* @__PURE__ */ s.createElement(
  Qb,
  {
    isNotificationsEnabled: l,
    onToggleNotifications: r,
    onCopyLink: n
  }
))), "PureWhatsNewScreen"), o0 = 1e4, hd = /* @__PURE__ */ a(() => {
  let e = ne(), t = De(), { whatsNewData: o } = t, [i, n] = $(!1), [r, l] = $(!1);
  if (R(() => {
    let c = setTimeout(() => !i && l(!0), o0);
    return () => clearTimeout(c);
  }, [i]), o?.status !== "SUCCESS")
    return null;
  let u = !o.disableWhatsNewNotifications;
  return /* @__PURE__ */ s.createElement(
    t0,
    {
      didHitMaxWaitTime: r,
      isLoaded: i,
      onLoad: () => {
        e.whatsNewHasBeenRead(), n(!0);
      },
      url: o.url,
      isNotificationsEnabled: u,
      onCopyLink: () => {
        navigator.clipboard?.writeText(o.blogUrl ?? o.url);
      },
      onToggleNotifications: () => {
        u ? ie.confirm("All update notifications will no longer be shown. Are you sure?") && e.toggleWhatsNewNotifications() : e.toggleWhatsNewNotifications();
      }
    }
  );
}, "WhatsNewScreen");

// src/manager/settings/whats_new_page.tsx
var gd = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(hd, null), "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: yd } = ie, r0 = x.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  paddingRight: 8
})), Xi = s.memo(/* @__PURE__ */ a(function({
  changeTab: t,
  id: o,
  title: i
}) {
  return /* @__PURE__ */ s.createElement(Ao, null, ({ path: n }) => {
    let r = n.includes(`settings/${o}`);
    return /* @__PURE__ */ s.createElement(
      Vo,
      {
        id: `tabbutton-${o}`,
        className: ["tabbutton"].concat(r ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active: r,
        onClick: () => t(o),
        role: "tab"
      },
      i
    );
  });
}, "TabBarButton")), n0 = x(Ro)(({ theme: e }) => ({
  background: e.background.content
})), i0 = /* @__PURE__ */ a(({ changeTab: e, onClose: t, enableShortcuts: o = !0, enableWhatsNew: i }) => (s.useEffect(() => {
  let n = /* @__PURE__ */ a((r) => {
    !o || r.repeat || ht(!1, r) && We("Escape", r) && (r.preventDefault(), t());
  }, "handleEscape");
  return yd.addEventListener("keydown", n), () => yd.removeEventListener("keydown", n);
}, [o, t]), /* @__PURE__ */ s.createElement(we, null, /* @__PURE__ */ s.createElement(r0, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(
Wo, { role: "tablist" }, /* @__PURE__ */ s.createElement(Xi, { id: "about", title: "About", changeTab: e }), i && /* @__PURE__ */ s.createElement(
Xi, { id: "whats-new", title: "What's new?", changeTab: e }), /* @__PURE__ */ s.createElement(Xi, { id: "shortcuts", title: "Keyboard shortc\
uts", changeTab: e })), /* @__PURE__ */ s.createElement(
  ee,
  {
    onClick: (n) => (n.preventDefault(), t()),
    title: "Close settings page"
  },
  /* @__PURE__ */ s.createElement(Ge, null)
)), /* @__PURE__ */ s.createElement(n0, { vertical: !0, horizontal: !1 }, /* @__PURE__ */ s.createElement(so, { path: "about" }, /* @__PURE__ */ s.
createElement(ud, { key: "about" })), /* @__PURE__ */ s.createElement(so, { path: "whats-new" }, /* @__PURE__ */ s.createElement(gd, { key: "\
whats-new" })), /* @__PURE__ */ s.createElement(so, { path: "shortcuts" }, /* @__PURE__ */ s.createElement(dd, { key: "shortcuts" }))))), "P\
ages"), s0 = /* @__PURE__ */ a(() => {
  let e = ne(), t = De(), o = /* @__PURE__ */ a((i) => e.changeSettingsTab(i), "changeTab");
  return /* @__PURE__ */ s.createElement(
    i0,
    {
      enableWhatsNew: t.whatsNewData?.status === "SUCCESS",
      enableShortcuts: t.ui.enableShortcuts,
      changeTab: o,
      onClose: e.closeSettings
    }
  );
}, "SettingsPages"), bd = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: be.experimental_PAGE,
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(so, { path: "/settings/", startsWith: !0 }, /* @__PURE__ */ s.createElement(
  s0, null)), "render")
};

// src/manager/index.tsx
rn.displayName = "ThemeProvider";
ct.displayName = "HelmetProvider";
var a0 = /* @__PURE__ */ a(({ provider: e }) => /* @__PURE__ */ s.createElement(ct, { key: "helmet.Provider" }, /* @__PURE__ */ s.createElement(
vs, { key: "location.provider" }, /* @__PURE__ */ s.createElement(l0, { provider: e }))), "Root"), l0 = /* @__PURE__ */ a(({ provider: e }) => {
  let t = Is();
  return /* @__PURE__ */ s.createElement(Ao, { key: "location.consumer" }, (o) => /* @__PURE__ */ s.createElement(
    ps,
    {
      key: "manager",
      provider: e,
      ...o,
      navigate: t,
      docsOptions: ie?.DOCS_OPTIONS || {}
    },
    (i) => {
      let { state: n, api: r } = i, l = A(
        (c) => {
          r.setSizes(c);
        },
        [r]
      ), u = K(
        () => [bd, ...Object.values(r.getElements(be.experimental_PAGE))],
        [Object.keys(r.getElements(be.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ s.createElement(rn, { key: "theme.provider", theme: ws(n.theme) }, /* @__PURE__ */ s.createElement(Xs, null, /* @__PURE__ */ s.
      createElement(
        sd,
        {
          key: "app",
          pages: u,
          managerLayoutState: {
            ...n.layout,
            viewMode: n.viewMode
          },
          hasTab: !!r.getQueryParam("tab"),
          setManagerLayoutState: l
        }
      )));
    }
  ));
}, "Main");
function vd(e, t) {
  if (!(t instanceof Ht))
    throw new Cs();
  bs(e).render(/* @__PURE__ */ s.createElement(a0, { key: "root", provider: t }));
}
a(vd, "renderStorybookUI");

// src/manager/runtime.ts
var Ji = class Ji extends Ht {
  constructor() {
    super();
    let t = es({ page: "manager" });
    Ue.setChannel(t), t.emit(rs), this.addons = Ue, this.channel = t, ie.__STORYBOOK_ADDONS_CHANNEL__ = t;
  }
  getElements(t) {
    return this.addons.getElements(t);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(t) {
    this.addons.loadAddons(t);
  }
};
a(Ji, "ReactProvider");
var Zi = Ji, { document: u0 } = ie, c0 = u0.getElementById("root");
setTimeout(() => {
  vd(c0, new Zi());
}, 0);
