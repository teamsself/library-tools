import { g as t } from "./isSymbol-c1ce1dca.js";
import { t as o } from "./toString-39786259.js";
import { _ as r } from "./_basePropertyOf-d4258b06.js";
var s = r({
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }),
  e = o,
  m = s,
  p = /&(?:amp|lt|gt|quot|#39);/g,
  a = RegExp(p.source);
var g = t(function (t) {
  return (t = e(t)) && a.test(t) ? t.replace(p, m) : t;
});
export { g as ut_unescape };
