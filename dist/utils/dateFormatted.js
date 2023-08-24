var e = function e(_e) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var a, c;
  if ("string" != typeof _e) throw new Error("date is not string");
  if ("" === _e.trim()) throw new Error("date is empty");
  var l = null !== (a = null !== (c = window.DATAFORMAT) && void 0 !== c ? c : global.DATAFORMAT) && void 0 !== a ? a : "YYYY-MM-DD HH:mm:ss",
    t = new Date(_e),
    p = t.getUTCFullYear(),
    s = t.getUTCMonth() + 1,
    Y = t.getDate(),
    n = t.getHours(),
    o = t.getMinutes(),
    i = t.getSeconds();
  var m = "";
  switch (r) {
    case 0:
      m = l.replace("YYYY", p + "").replace("MM", s > 9 ? s + "" : "0" + s).replace("DD", Y > 9 ? Y + "" : "0" + Y).replace("HH", n > 9 ? n + "" : "0" + n).replace("mm", o > 9 ? o + "" : "0" + o).replace("ss", i > 9 ? i + "" : "0" + i);
      break;
    case 1:
      m = l.replace("YYYY", p + "").replace("MM", s > 9 ? s + "" : "0" + s).replace("DD", Y > 9 ? Y + "" : "0" + Y);
      break;
    case 2:
      m = l.replace("HH", n > 9 ? n + "" : "0" + n).replace("mm", o > 9 ? o + "" : "0" + o).replace("ss", i > 9 ? i + "" : "0" + i);
      break;
    case 3:
      m = l.replace("YYYY", p + "").replace("MM", s > 9 ? s + "" : "0" + s).replace("DD", Y > 9 ? Y + "" : "0" + Y).replace("HH", n > 9 ? n + "" : "0" + n).replace("mm", o > 9 ? o + "" : "0" + o);
      break;
    case 4:
      m = l.replace("HH", n > 9 ? n + "" : "0" + n).replace("mm", o > 9 ? o + "" : "0" + o);
  }
  return m.indexOf("NaN") >= 0 ? "--" : m;
};
export { e as ut_dateFormatted };
