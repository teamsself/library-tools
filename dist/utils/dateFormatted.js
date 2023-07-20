var e = function e(_e) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var a;
  if ("string" != typeof _e) throw new Error("date is not string");
  if ("" === _e.trim()) throw new Error("date is empty");
  console.log("window.DATAFORMAT", window.DATAFORMAT);
  var c = null !== (a = window.DATAFORMAT) && void 0 !== a ? a : "YYYY-MM-DD HH:mm:ss",
    l = new Date(_e),
    t = l.getUTCFullYear(),
    p = l.getUTCMonth() + 1,
    s = l.getDate(),
    o = l.getHours(),
    n = l.getMinutes(),
    Y = l.getSeconds();
  var i = "";
  switch (r) {
    case 0:
      i = c.replace("YYYY", t + "").replace("MM", p > 9 ? p + "" : "0" + p).replace("DD", s > 9 ? s + "" : "0" + s).replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n).replace("ss", Y > 9 ? Y + "" : "0" + Y);
      break;
    case 1:
      i = c.replace("YYYY", t + "").replace("MM", p > 9 ? p + "" : "0" + p).replace("DD", s > 9 ? s + "" : "0" + s);
      break;
    case 2:
      i = c.replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n).replace("ss", Y > 9 ? Y + "" : "0" + Y);
      break;
    case 3:
      i = c.replace("YYYY", t + "").replace("MM", p > 9 ? p + "" : "0" + p).replace("DD", s > 9 ? s + "" : "0" + s).replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n);
      break;
    case 4:
      i = c.replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n);
  }
  return i.indexOf("NaN") >= 0 ? "--" : i;
};
export { e as ut_dateFormatted };
