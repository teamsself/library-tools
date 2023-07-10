/**
 * 数字转千分位
 *
 * @param value string | number
 * @return string 123,456,789
 */
export const getThousands = (value: string | number) => {
  if (typeof value !== "string" || typeof value !== "number")
    throw new Error("key is not string or number");

  if (!value) {
    value = "0";
  }
  const str = value.toString().split(".");
  if (str.length == 1) {
    return value.toString().replace(/\B(?=(\d{3})+$)/g, ",");
  } else if (str.length == 2) {
    // 当有小数点时，拆分整数进行转换，并拼接小数点。
    return str[0].toString().replace(/\B(?=(\d{3})+$)/g, ",") + "." + str[1];
  } else {
    return "--";
  }
};
