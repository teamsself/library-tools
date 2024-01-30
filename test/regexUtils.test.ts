import { ut_reg } from "../src";

describe("ut_reg 正则工具", () => {
  test("isValidPhone", () => {
    expect(ut_reg().isValidPhone("13812345678")).toBeTruthy();
    expect(ut_reg().isValidPhone("23812345678")).toBeFalsy();
  });

  test("isValidEmail", () => {
    expect(ut_reg().isValidEmail("test@example.com")).toBeTruthy();
    expect(ut_reg().isValidEmail("invalid-email")).toBeFalsy();
  });

  test("isValidBankCrad", () => {
    expect(ut_reg().isValidBankCard("6222020202020202020")).toBeTruthy();
    expect(ut_reg().isValidBankCard("123")).toBeFalsy();
  });

  test("isValidDate", () => {
    expect(ut_reg().isValidDate("2023-10-17")).toBeTruthy();
    expect(ut_reg().isValidDate("20231017")).toBeFalsy();
  });

  test("isValidTime", () => {
    expect(ut_reg().isValidTime("13:45:30")).toBeTruthy();
    expect(ut_reg().isValidTime("25:45:30")).toBeFalsy();
  });

  test("isValidIDCard", () => {
    expect(ut_reg().isValidIDCard("11010119900307777X")).toBeTruthy();
    expect(ut_reg().isValidIDCard("11010119900307777Y")).toBeFalsy();
  });

  test("isValidPostalCode", () => {
    expect(ut_reg().isValidPostalCode("100000")).toBeTruthy();
    expect(ut_reg().isValidPostalCode("10000a")).toBeFalsy();
  });

  test("isAlpha", () => {
    expect(ut_reg().isAlpha("abc")).toBeTruthy();
    expect(ut_reg().isAlpha("abc123")).toBeFalsy();
  });

  test("isNumeric", () => {
    expect(ut_reg().isNumeric("123")).toBeTruthy();
    expect(ut_reg().isNumeric("123abc")).toBeFalsy();
  });

  test("isAlphanumeric", () => {
    expect(ut_reg().isAlphanumeric("abc123")).toBeTruthy();
    expect(ut_reg().isAlphanumeric("abc 123")).toBeFalsy();
  });

  test("isLowercase", () => {
    expect(ut_reg().isLowercase("abc")).toBeTruthy();
    expect(ut_reg().isLowercase("Abc")).toBeFalsy();
  });

  test("isUppercase", () => {
    expect(ut_reg().isUppercase("ABC")).toBeTruthy();
    expect(ut_reg().isUppercase("AbC")).toBeFalsy();
  });

  test("isPositiveInteger", () => {
    expect(ut_reg().isPositiveInteger("123")).toBeTruthy();
    expect(ut_reg().isPositiveInteger("-123")).toBeFalsy();
  });

  test("isNegativeInteger", () => {
    expect(ut_reg().isNegativeInteger("-123")).toBeTruthy();
    expect(ut_reg().isNegativeInteger("123")).toBeFalsy();
  });

  test("isInteger", () => {
    expect(ut_reg().isInteger("123")).toBeTruthy();
    expect(ut_reg().isInteger("-123")).toBeTruthy();
    expect(ut_reg().isInteger("123.456")).toBeFalsy();
  });

  test("isFloat", () => {
    expect(ut_reg().isFloat("123.456")).toBeTruthy();
    expect(ut_reg().isFloat("-123.456")).toBeTruthy();
    expect(ut_reg().isFloat("123")).toBeTruthy();
    expect(ut_reg().isFloat("abc")).toBeFalsy();
  });

  test("isPositiveFloat", () => {
    expect(ut_reg().isPositiveFloat("123.456")).toBeTruthy();
    expect(ut_reg().isPositiveFloat("123")).toBeTruthy();
    expect(ut_reg().isPositiveFloat("-123.456")).toBeFalsy();
  });

  test("isNegativeFloat", () => {
    expect(ut_reg().isNegativeFloat("-123.456")).toBeTruthy();
    expect(ut_reg().isNegativeFloat("123.456")).toBeFalsy();
  });

  test("isHexColor", () => {
    expect(ut_reg().isHexColor("#ffffff")).toBeTruthy();
    expect(ut_reg().isHexColor("#abc")).toBeTruthy();
    expect(ut_reg().isHexColor("#gggggg")).toBeFalsy();
  });
});
