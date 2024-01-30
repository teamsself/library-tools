/**
 * 从 localStorage 获取数据
 *
 * @param key string
 * @return string
 */
export const ut_getLS = (key: string) => {
  if (typeof key !== 'string') throw new Error('key is not string');
  const Breadcrumbs = localStorage.getItem(key);
  return Breadcrumbs || '';
};
