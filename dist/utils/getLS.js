var t = function t(_t) {
  if ("string" != typeof _t) throw new Error("key is not string");
  return localStorage.getItem(_t) || "";
};
export { t as ut_getLS };
