/**
 * 打开新的'Tab'页
 *
 * @param _url 要打开的页面地址必须以 'http://'或'https://'为开始
 */
export const openNewWin = (_url: string): void => {
  if (typeof _url !== "string") {
    throw new Error("_url is not string");
  } else if (_url.indexOf("http://") !== 0 && _url.indexOf("https://") !== 0) {
    throw new Error("_url does not start with http:// or https://");
  }

  const u = navigator.userAgent;
  // var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; // android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
  if (isiOS) {
    window.location.href = _url;
  } else {
    const a: HTMLAnchorElement = window.document.createElement("a");
    a.id = "newWindow";
    a.href = "javascript:void(0)";
    a.target = "_blank";
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    a.onclick = window.open(_url);
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
};
