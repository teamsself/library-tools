/*
 * @Author: W·S
 * @Date: 2023-11-14 10:56:12
 * @LastEditors: W·S
 * @LastEditTime: 2023-11-14 10:58:04
 * @Description: Description
 */
import { escape } from 'lodash';

/**
 * 转移Html字符串
 * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符
 *
 * Converts the characters "&", "<", ">", '"', "'", and "`" in string to their corresponding HTML entities.
 *
 * Note: No other characters are escaped. To escape additional characters use a third-party library like he.
 *
 * hough the ">" character is escaped for symmetry, characters like ">" and "/" don’t need escaping in HTML
 * and have no special meaning unless they're part of a tag or unquoted attribute value. See Mathias Bynens’s
 * article (under "semi-related fun fact") for more details.
 *
 * Backticks are escaped because in IE < 9, they can break out of attribute values or HTML comments. See #59,
 * #102, #108, and #133 of the HTML5 Security Cheatsheet for more details.
 *
 * When working with HTML you should always quote attribute values to reduce XSS vectors.
 *
 * @param string The string to escape.
 * @return Returns the escaped string.
 */
export const ut_escape = escape;
