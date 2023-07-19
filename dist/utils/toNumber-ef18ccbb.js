function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
import { i as t } from "./isSymbol-c1ce1dca.js";
var r = /\s/;
var e = function e(t) {
    for (var e = t.length; e-- && r.test(t.charAt(e)););
    return e;
  },
  n = /^\s+/;
var i = function i(t) {
    var r = _typeof(t);
    return null != t && ("object" == r || "function" == r);
  },
  a = function a(t) {
    return t ? t.slice(0, e(t) + 1).replace(n, "") : t;
  },
  f = i,
  o = t,
  u = /^[-+]0x[0-9a-f]+$/i,
  s = /^0b[01]+$/i,
  c = /^0o[0-7]+$/i,
  v = parseInt;
var l = function l(t) {
  if ("number" == typeof t) return t;
  if (o(t)) return NaN;
  if (f(t)) {
    var r = "function" == typeof t.valueOf ? t.valueOf() : t;
    t = f(r) ? r + "" : r;
  }
  if ("string" != typeof t) return 0 === t ? t : +t;
  t = a(t);
  var e = s.test(t);
  return e || c.test(t) ? v(t.slice(2), e ? 2 : 8) : u.test(t) ? NaN : +t;
};
export { i, l as t };
