/**
 * 是否是微信浏览器
 *
 * @return boolean
 */
export const isWXBrowser: () => boolean = () => {
  const ua = navigator.userAgent.toLowerCase();
  return /micromessenger/.test(ua) ? true : false;
};
