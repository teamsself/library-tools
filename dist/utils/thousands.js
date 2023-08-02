var t = function t(_t) {
  if ("string" != typeof _t && "number" != typeof _t)
    throw new Error("key is not string or number");
  _t || (_t = "0");
  var r = _t.toString().split(".");
  return 1 == r.length
    ? _t.toString().replace(/\B(?=(\d{3})+$)/g, ",")
    : 2 == r.length
    ? r[0].toString().replace(/\B(?=(\d{3})+$)/g, ",") + "." + r[1]
    : "--";
};
export { t as ut_thousands };
