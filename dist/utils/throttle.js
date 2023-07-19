import { g as i } from "./isSymbol-c1ce1dca.js";
import { d as r } from "./debounce-8133fcce.js";
import { i as n } from "./toNumber-ef18ccbb.js";
var o = r,
  t = n;
var a = i(function (i, r, n) {
  var a = !0,
    e = !0;
  if ("function" != typeof i) throw new TypeError("Expected a function");
  return t(n) && (a = "leading" in n ? !!n.leading : a, e = "trailing" in n ? !!n.trailing : e), o(i, r, {
    leading: a,
    maxWait: r,
    trailing: e
  });
});
export { a as ut_throttle };
