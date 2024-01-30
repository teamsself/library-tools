/**
 * 下载文件
 *
 * @param url 下载地址
 * @param name 文件名
 */
export const ut_downLoadFile = (url: string, name: string): void => {
  if (typeof url !== 'string') throw new Error('url is not string');
  if (typeof name !== 'string') throw new Error('name is not string');

  const u = navigator.userAgent;
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
  const isiOS = !!RegExp(/\(i[^;]+;( U;)? CPU.+Mac OS X/).exec(u); // ios终端
  if (isAndroid) {
    const myFrame = document.createElement('iframe');
    myFrame.src = url; // 服务器路径
    myFrame.style.display = 'none';
    document.body.appendChild(myFrame);
  } else if (isiOS) {
    // iOS终端直接页面跳转
    location.href = url;
  } else {
    const a = document.createElement('a');
    a.download = name;
    a.href = url;
    a.target = '_blank';
    document.body.append(a); // 修复firefox中无法触发click
    a.click();
    a.remove();
  }
};
