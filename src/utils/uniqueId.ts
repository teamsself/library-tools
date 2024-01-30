/*
 * @Author: fx
 * @Date: 2024-01-08 15:00:06
 * @LastEditors: W·S
 * @LastEditTime: 2024-01-30 10:03:36
 * @Description: Description
 */
import { uniqueId } from 'lodash';

/*
生成唯一ID。 如果提供了 prefix ，会被添加到ID前缀上。

_.uniqueId('contact_');
// => 'contact_104'
_.uniqueId();
// => '105'

*/
export const ut_uniqueId = uniqueId;
