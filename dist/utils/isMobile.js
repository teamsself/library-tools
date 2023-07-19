var e = function e() {
  return !!RegExp(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i).exec(navigator.userAgent);
};
export { e as ut_isMobile };
