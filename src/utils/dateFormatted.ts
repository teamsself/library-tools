/*
 * @Author: Feix
 * @Date: 2022-11-18 14:00:52
 * @LastEditors: W·S
 * @LastEditTime: 2023-07-14 17:36:48
 * @Description:
 */

/**
 * @description: 日期格式化(凡日期, 统一调用此方法, 不论是否需要)，使用统一 process.env.DATAFORMAT 格式
 * @param date 日期字符串
 * @param type 日期显示字段：0：年月日时分秒、1：年月日、2：时分秒、3：年月日时分、4：时分
 * @returns
 */
export const ut_dateFormatted = (date: string, type = 0): string => {
  if (typeof date !== "string") throw new Error("date is not string");
  if (date.trim() === "") throw new Error("date is empty");

  console.log("UT_DATAFORMAT", process.env.UT_DATAFORMAT);

  // const format = "YYYY-MM-DD HH:mm:ss";
  const format = process.env.UT_DATAFORMAT ?? "YYYY-MM-DD HH:mm:ss";
  const days = new Date(date);
  const year = days.getUTCFullYear();
  const month = days.getUTCMonth() + 1;
  const day = days.getDate();
  const hours = days.getHours();
  const minutes = days.getMinutes();
  const seconds = days.getSeconds();

  let data_date = "";
  switch (type) {
    // 显示 年月日 时分秒
    case 0:
      data_date = format
        .replace("YYYY", year + "")
        .replace("MM", month > 9 ? month + "" : "0" + month)
        .replace("DD", day > 9 ? day + "" : "0" + day)
        .replace("HH", hours > 9 ? hours + "" : "0" + hours)
        .replace("mm", minutes > 9 ? minutes + "" : "0" + minutes)
        .replace("ss", seconds > 9 ? seconds + "" : "0" + seconds);
      break;
    // 显示 年月日
    case 1:
      data_date = format
        .replace("YYYY", year + "")
        .replace("MM", month > 9 ? month + "" : "0" + month)
        .replace("DD", day > 9 ? day + "" : "0" + day);
      break;
    // 显示 时分秒
    case 2:
      data_date = format
        .replace("HH", hours > 9 ? hours + "" : "0" + hours)
        .replace("mm", minutes > 9 ? minutes + "" : "0" + minutes)
        .replace("ss", seconds > 9 ? seconds + "" : "0" + seconds);
      break;
    // 显示 年月日时分
    case 3:
      data_date = format
        .replace("YYYY", year + "")
        .replace("MM", month > 9 ? month + "" : "0" + month)
        .replace("DD", day > 9 ? day + "" : "0" + day)
        .replace("HH", hours > 9 ? hours + "" : "0" + hours)
        .replace("mm", minutes > 9 ? minutes + "" : "0" + minutes);
      break;
    // 显示 时分
    case 4:
      data_date = format
        .replace("HH", hours > 9 ? hours + "" : "0" + hours)
        .replace("mm", minutes > 9 ? minutes + "" : "0" + minutes);
      break;
  }

  return data_date.indexOf("NaN") >= 0 ? "--" : data_date;
};
