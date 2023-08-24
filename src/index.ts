/*
 * @Author: W·S
 * @Date: 2023-07-10 15:23:21
 * @LastEditors: W·S
 * @LastEditTime: 2023-08-24 11:30:33
 * @Description: Description
 */
export * from "./utils/dateFormatted";
export * from "./utils/downLoadFile";
export * from "./utils/round";
export * from "./utils/thousands";
export * from "./utils/isEmpty";
export * from "./utils/isMobile";
export * from "./utils/isWXBrowser";
export * from "./utils/openNewWin";
export * from "./utils/readFile";
export * from "./utils/setLS";
export * from "./utils/getLS";
export * from "./utils/debounce";
export * from "./utils/throttle";
export * from "./utils/escape";
export * from "./utils/unescape";

export const setUTENV = (format: string) => {
  if (window) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.DATAFORMAT = format;
  } else if (global) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    global.DATAFORMAT = format;
  }
};
