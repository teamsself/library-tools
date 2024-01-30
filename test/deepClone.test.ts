import { ut_cloneDeep } from "../src";

test("ut_cloneDeep 深拷贝", () => {
  const original = {
    a: 1,
    b: {
      c: 2,
      d: [3, 4, { e: 5 }],
      f: { g: 6 },
    },
  };

  const copy = ut_cloneDeep(original);

  // 验证拷贝对象和原对象是不是相等
  expect(copy).toEqual(original);

  // 验证拷贝对象和原对象不是同一个引用
  expect(copy).not.toBe(original);
  expect(copy.b).not.toBe(original.b);
  expect(copy.b.d).not.toBe(original.b.d);

  // 修改拷贝对象的属性，确保原对象不受影响
  copy.b.c = 99;
  expect(original.b.c).toBe(2);
});
