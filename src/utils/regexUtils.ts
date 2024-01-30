interface RegexUtils {
  // 验证手机号
  isValidPhone(phone: string): boolean;
  // 验证电子邮件
  isValidEmail(email: string): boolean;
  // 验证是否为银行卡号
  isValidBankCard(bankCard: string): boolean;
  // 验证日期（格式：YYYY-MM-DD）
  isValidDate(date: string): boolean;
  // 验证时间（格式：HH:MM:SS）
  isValidTime(time: string): boolean;
  // 验证身份证号
  isValidIDCard(id: string): boolean;
  // 验证邮政编码
  isValidPostalCode(code: string): boolean;
  // 验证仅包含字母
  isAlpha(str: string): boolean;
  // 验证仅包含数字
  isNumeric(str: string): boolean;
  // 验证仅包含字母和数字
  isAlphanumeric(str: string): boolean;
  // 验证仅包含小写字母
  isLowercase(str: string): boolean;
  // 验证仅包含大写字母
  isUppercase(str: string): boolean;
  // 验证是否为正整数
  isPositiveInteger(str: string): boolean;
  // 验证是否为负整数
  isNegativeInteger(str: string): boolean;
  // 验证是否为整数
  isInteger(str: string): boolean;
  // 验证是否为浮点数
  isFloat(str: string): boolean;
  // 验证是否为正浮点数
  isPositiveFloat(str: string): boolean;
  // 验证是否为负浮点数
  isNegativeFloat(str: string): boolean;
  // 验证是否为颜色十六进制代码
  isHexColor(str: string): boolean;
}
// 定义正则表达式对象
const regexPatterns = {
  phone: /^1[3-9]\d{9}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  bankCard: /^[1-9]\d{9,29}$/,
  date: /^\d{4}-\d{2}-\d{2}$/,
  time: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/,
  idCard: /^\d{17}(\d|x|X)$/,
  postalCode: /^[0-9]{6}$/,
  alpha: /^[a-zA-Z]+$/,
  numeric: /^[0-9]+$/,
  alphanumeric: /^[a-zA-Z0-9]+$/,
  lowercase: /^[a-z]+$/,
  uppercase: /^[A-Z]+$/,
  positiveInteger: /^\d+$/,
  negativeInteger: /^-\d+$/,
  integer: /^-?\d+$/,
  float: /^-?\d+(\.\d+)?$/,
  positiveFloat: /^\d+(\.\d+)?$/,
  negativeFloat: /^-\d+(\.\d+)?$/,
  hexColor: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
};

const regexUtils = (): RegexUtils => {
  return {
    isValidPhone: function (phone) {
      return regexPatterns.phone.test(phone);
    },
    isValidEmail: function (email) {
      return regexPatterns.email.test(email);
    },
    isValidBankCard: function (bankCard) {
      return regexPatterns.bankCard.test(bankCard);
    },
    isValidDate: function (date) {
      return regexPatterns.date.test(date);
    },
    isValidTime: function (time) {
      return regexPatterns.time.test(time);
    },
    isValidIDCard: function (id) {
      return regexPatterns.idCard.test(id);
    },
    isValidPostalCode: function (code) {
      return regexPatterns.postalCode.test(code);
    },
    isAlpha: function (str) {
      return regexPatterns.alpha.test(str);
    },
    isNumeric: function (str) {
      return regexPatterns.numeric.test(str);
    },
    isAlphanumeric: function (str) {
      return regexPatterns.alphanumeric.test(str);
    },
    isLowercase: function (str) {
      return regexPatterns.lowercase.test(str);
    },
    isUppercase: function (str) {
      return regexPatterns.uppercase.test(str);
    },
    isPositiveInteger: function (str) {
      return regexPatterns.positiveInteger.test(str);
    },
    isNegativeInteger: function (str) {
      return regexPatterns.negativeInteger.test(str);
    },
    isInteger: function (str) {
      return regexPatterns.integer.test(str);
    },
    isFloat: function (str) {
      return regexPatterns.float.test(str);
    },
    isPositiveFloat: function (str) {
      return regexPatterns.positiveFloat.test(str);
    },
    isNegativeFloat: function (str) {
      return regexPatterns.negativeFloat.test(str);
    },
    isHexColor: function (str: string) {
      return regexPatterns.hexColor.test(str);
    }
  };
};

const ut_reg = regexUtils;
const ut_reg_patterns = regexPatterns;
export { ut_reg_patterns, ut_reg };
