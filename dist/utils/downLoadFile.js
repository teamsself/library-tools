var e = function e(_e, n) {
  if ("string" != typeof _e) throw new Error("url is not string");
  if ("string" != typeof n) throw new Error("name is not string");
  var t = navigator.userAgent,
    o = t.indexOf("Android") > -1 || t.indexOf("Adr") > -1,
    r = !!RegExp(/\(i[^;]+;( U;)? CPU.+Mac OS X/).exec(t);
  if (o) {
    var _n = document.createElement("iframe");
    _n.src = _e, _n.style.display = "none", document.body.appendChild(_n);
  } else if (r) location.href = _e;else {
    var _t = document.createElement("a");
    _t.download = n, _t.href = _e, _t.target = "_blank", document.body.append(_t), _t.click(), _t.remove();
  }
};
export { e as ut_downLoadFile };
