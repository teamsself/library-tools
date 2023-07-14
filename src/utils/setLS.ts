/**
 * 向 localStorage 存储数据
 *
 * @param key string
 * @param value string
 */
export const ut_setLS = (key: string, value: string) => {
  if (typeof key !== "string") throw new Error("key is not string");
  if (typeof value !== "string") throw new Error("value is not string");

  localStorage.setItem(key, value);
};
