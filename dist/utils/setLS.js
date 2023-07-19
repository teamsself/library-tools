var t = function t(_t, r) {
  if ("string" != typeof _t) throw new Error("key is not string");
  if ("string" != typeof r) throw new Error("value is not string");
  localStorage.setItem(_t, r);
};
export { t as ut_setLS };
