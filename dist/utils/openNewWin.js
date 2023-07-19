var t = function t(_t) {
  if ("string" != typeof _t) throw new Error("_url is not string");
  if (!_t.startsWith("http://") && !_t.startsWith("https://")) throw new Error("_url does not start with http:// or https://");
  var o = navigator.userAgent;
  if (!!RegExp(/\(i[^;]+;( U;)? CPU.+Mac OS X/).exec(o)) window.location.href = _t;else {
    var _o = window.document.createElement("a");
    _o.id = "newWindow", _o.href = "javascript:void(0)", _o.target = "_blank", _o.onclick = window.open(_t), document.body.appendChild(_o), _o.click(), _o.remove();
  }
};
export { t as ut_openNewWin };
