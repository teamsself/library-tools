var e = function e(_e) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var a;
  if ("string" != typeof _e) throw new Error("date is not string");
  if ("" === _e.trim()) throw new Error("date is empty");
  console.log("UT_DATAFORMAT", process.env.UT_DATAFORMAT);
  var c = null !== (a = process.env.UT_DATAFORMAT) && void 0 !== a ? a : "YYYY-MM-DD HH:mm:ss",
    l = new Date(_e),
    s = l.getUTCFullYear(),
    t = l.getUTCMonth() + 1,
    p = l.getDate(),
    o = l.getHours(),
    n = l.getMinutes(),
    Y = l.getSeconds();
  var D = "";
  switch (r) {
    case 0:
      D = c.replace("YYYY", s + "").replace("MM", t > 9 ? t + "" : "0" + t).replace("DD", p > 9 ? p + "" : "0" + p).replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n).replace("ss", Y > 9 ? Y + "" : "0" + Y);
      break;
    case 1:
      D = c.replace("YYYY", s + "").replace("MM", t > 9 ? t + "" : "0" + t).replace("DD", p > 9 ? p + "" : "0" + p);
      break;
    case 2:
      D = c.replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n).replace("ss", Y > 9 ? Y + "" : "0" + Y);
      break;
    case 3:
      D = c.replace("YYYY", s + "").replace("MM", t > 9 ? t + "" : "0" + t).replace("DD", p > 9 ? p + "" : "0" + p).replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n);
      break;
    case 4:
      D = c.replace("HH", o > 9 ? o + "" : "0" + o).replace("mm", n > 9 ? n + "" : "0" + n);
  }
  return D.indexOf("NaN") >= 0 ? "--" : D;
};
export { e as ut_dateFormatted };
