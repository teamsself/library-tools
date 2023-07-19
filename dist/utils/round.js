import { _ as r, g as t } from "./isSymbol-c1ce1dca.js";
import { t as n } from "./toNumber-ef18ccbb.js";
import { t as i } from "./toString-39786259.js";
var o = n,
  e = 1 / 0;
var a = function a(r) {
  return r ? (r = o(r)) === e || r === -1 / 0 ? 17976931348623157e292 * (r < 0 ? -1 : 1) : r == r ? r : 0 : 0 === r ? r : 0;
};
var s = function s(r) {
    var t = a(r),
      n = t % 1;
    return t == t ? n ? t - n : t : 0;
  },
  u = n,
  m = i,
  f = r.isFinite,
  p = Math.min;
var v = t(function (r) {
  var t = Math[r];
  return function (r, n) {
    if (r = u(r), (n = null == n ? 0 : p(s(n), 292)) && f(r)) {
      var i = (m(r) + "e").split("e"),
        o = t(i[0] + "e" + (+i[1] + n));
      return +((i = (m(o) + "e").split("e"))[0] + "e" + (+i[1] - n));
    }
    return t(r);
  };
}("round"));
export { v as ut_round };
