import { unescape } from 'lodash';

/**
 * 反转移Html字符串
 * 转换string字符串中的 HTML 实体 &amp;, &lt;, &gt;, &quot;, &#39;, 和 &#96; 为对应的字符
 *
 * The inverse of _.escape; this method converts the HTML entities &amp;, &lt;, &gt;, &quot;, &#39;, and &#96;
 * in string to their corresponding characters.
 *
 * Note: No other HTML entities are unescaped. To unescape additional HTML entities use a third-party library
 * like he.
 *
 * @param string The string to unescape.
 * @return Returns the unescaped string.
 */
export const ut_unescape = unescape;
