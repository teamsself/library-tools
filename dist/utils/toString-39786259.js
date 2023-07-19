import { a as r, i as t } from "./isSymbol-c1ce1dca.js";
var n = function n(r, t) {
    for (var n = -1, i = null == r ? 0 : r.length, o = Array(i); ++n < i;) o[n] = t(r[n], n, r);
    return o;
  },
  i = Array.isArray,
  o = n,
  a = i,
  u = t,
  e = r ? r.prototype : void 0,
  f = e ? e.toString : void 0;
var l = function r(t) {
    if ("string" == typeof t) return t;
    if (a(t)) return o(t, r) + "";
    if (u(t)) return f ? f.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  },
  s = l;
var v = function v(r) {
  return null == r ? "" : s(r);
};
export { v as t };
