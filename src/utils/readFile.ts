/**
 * @description: 解析上传文件的内容
 *
 * @param file 上传的文件
 * @param fn 回调函数(el:文件内容)=>{}
 */
export const ut_readFile = (file: File, fn: () => void): void => {
  //支持chrome IE10
  if (window.FileReader) {
    const reader = new FileReader();
    reader.onload = function (): void {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      fn(this?.result); //这里的 this 指向 FileReader
    };
    reader.readAsText(file);
  }
};
