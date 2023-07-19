import { _ as t, g as i } from "./isSymbol-c1ce1dca.js";
import { i as n, t as r } from "./toNumber-ef18ccbb.js";
var o = t,
  e = n,
  u = function u() {
    return o.Date.now();
  },
  a = r,
  f = Math.max,
  c = Math.min;
var v = function v(t, i, n) {
    var r,
      o,
      v,
      m,
      s,
      d,
      l = 0,
      p = !1,
      T = !1,
      h = !0;
    if ("function" != typeof t) throw new TypeError("Expected a function");
    function x(i) {
      var n = r,
        e = o;
      return r = o = void 0, l = i, m = t.apply(e, n);
    }
    function g(t) {
      var n = t - d;
      return void 0 === d || n >= i || n < 0 || T && t - l >= v;
    }
    function y() {
      var t = u();
      if (g(t)) return w(t);
      s = setTimeout(y, function (t) {
        var n = i - (t - d);
        return T ? c(n, v - (t - l)) : n;
      }(t));
    }
    function w(t) {
      return s = void 0, h && r ? x(t) : (r = o = void 0, m);
    }
    function b() {
      var t = u(),
        n = g(t);
      if (r = arguments, o = this, d = t, n) {
        if (void 0 === s) return function (t) {
          return l = t, s = setTimeout(y, i), p ? x(t) : m;
        }(d);
        if (T) return clearTimeout(s), s = setTimeout(y, i), x(d);
      }
      return void 0 === s && (s = setTimeout(y, i)), m;
    }
    return i = a(i) || 0, e(n) && (p = !!n.leading, v = (T = "maxWait" in n) ? f(a(n.maxWait) || 0, i) : v, h = "trailing" in n ? !!n.trailing : h), b.cancel = function () {
      void 0 !== s && clearTimeout(s), l = 0, r = d = o = s = void 0;
    }, b.flush = function () {
      return void 0 === s ? m : w(u());
    }, b;
  },
  m = i(v);
export { m as _, v as d };
