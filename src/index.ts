/*
 * @Author: W·S
 * @Date: 2023-07-10 15:23:21
 * @LastEditors: huangyuexia
 * @LastEditTime: 2023-07-20 11:41:07
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
  // @ts-ignore
  window.DATAFORMAT = format;
};
