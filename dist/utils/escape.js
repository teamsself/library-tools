import { g as t } from "./isSymbol-c1ce1dca.js";
import { _ as r } from "./_basePropertyOf-d4258b06.js";
import { t as o } from "./toString-39786259.js";
var s = r({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }),
  e = o,
  m = /[&<>"']/g,
  p = RegExp(m.source);
var a = t(function (t) {
  return (t = e(t)) && p.test(t) ? t.replace(m, s) : t;
});
export { a as ut_escape };
