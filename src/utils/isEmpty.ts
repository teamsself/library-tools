/*
 * @Author: W·S
 * @Date: 2023-11-14 10:56:12
 * @LastEditors: W·S
 * @LastEditTime: 2023-11-14 10:57:59
 * @Description: Description
 */
/**
 * 判断值是否是无效值 undefined | null | '' 均为无效值
 *
 * @param _data string
 * @return boolean
 */
export const ut_isEmpty: (_data: string) => boolean = (_data) => {
  if (typeof _data !== 'string') throw new Error('_data is not string');

  if (_data === undefined || _data === null) return true;
  if (_data.trim() === '') return true;
  return false;
};
