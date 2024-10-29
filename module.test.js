import mut from "./module.js";

test("testing sum -- success", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test("testing div -- basic division", () => {
  const expected = 5;
  const got = mut.div(10, 2);
  expect(got).toBe(expected);
});

test("testing div -- division by zero", () => {
  const got = mut.div(10, 0);
  expect(got).toBe(Infinity);
});

test("testing containsNumbers -- contains numbers", () => {
  const text = "hello123";
  const result = mut.containsNumbers(text);
  expect(result).toBe(true);
});

test("testing containsNumbers -- no numbers", () => {
  const text = "hello";
  const result = mut.containsNumbers(text);
  expect(result).toBe(false);
});
