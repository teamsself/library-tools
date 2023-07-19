var e = function e(_e, i) {
  if (window.FileReader) {
    var n = new FileReader();
    n.onload = function () {
      i(null == this ? void 0 : this.result);
    }, n.readAsText(_e);
  }
};
export { e as ut_readFile };
