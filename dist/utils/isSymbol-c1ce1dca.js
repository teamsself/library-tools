function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function e(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t["default"] : t;
}
var o = "object" == _typeof(t) && t && t.Object === Object && t,
  n = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
  r = o || n || Function("return this")(),
  l = r.Symbol,
  a = l,
  c = Object.prototype,
  f = c.hasOwnProperty,
  i = c.toString,
  u = a ? a.toStringTag : void 0;
var b = function b(t) {
    var e = f.call(t, u),
      o = t[u];
    try {
      t[u] = void 0;
      var n = !0;
    } catch (t) {}
    var r = i.call(t);
    return n && (e ? t[u] = o : delete t[u]), r;
  },
  d = Object.prototype.toString;
var p = b,
  s = function s(t) {
    return d.call(t);
  },
  y = l ? l.toStringTag : void 0;
var j = function j(t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : y && y in Object(t) ? p(t) : s(t);
  },
  v = function v(t) {
    return null != t && "object" == _typeof(t);
  };
var g = function g(t) {
  return "symbol" == _typeof(t) || v(t) && "[object Symbol]" == j(t);
};
export { r as _, l as a, e as g, g as i };
