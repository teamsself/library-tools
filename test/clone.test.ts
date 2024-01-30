import { ut_clone } from "../src/index";

test("ut_clone 浅拷贝", () => {
  const original = { a: 1, b: { c: 2 } };
  const copy = ut_clone(original);

  // 检查原始对象和副本是否有相同的键值
  expect(copy).toEqual(original);

  // 检查原始对象和副本是否不是同一个对象（浅拷贝应创建一个新对象）
  expect(copy).not.toBe(original);

  // 检查嵌套对象是否是同一个对象（浅拷贝不应创建嵌套对象的新副本）
  expect(copy.b).toBe(original.b);
});
