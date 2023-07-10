/**
 * @description: 判断是否是移动端
 *
 * @return boolean
 */
export const isMobile = (): boolean => {
  return !!navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
};
