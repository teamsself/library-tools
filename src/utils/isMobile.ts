/**
 * @description: 判断是否是移动端
 *
 * @return boolean
 */
export const ut_isMobile = (): boolean => {
  return !!RegExp(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  ).exec(navigator.userAgent);
};
