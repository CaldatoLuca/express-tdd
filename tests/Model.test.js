const { expect, it } = require("@jest/globals");
const Model = require("../Model");

const dataJson = require("../modelJson.json");

it("should be a class", () => {
  const model = new Model("modelJson.json");

  expect(model).toBeInstanceOf(Model);
});

it("should ask for json fileName", () => {
  const model = new Model("modelJson.json");
  expect(model.jsonFileName).toBe("modelJson.json");
});

it("should have read method", () => {
  const model = new Model("modelJson.json");
  expect(typeof model.read).toBe("function");
});

it("should have add method", () => {
  const model = new Model("modelJson.json");
  expect(typeof model.add).toBe("function");
});

it("should have an array as return to read method", () => {
  const model = new Model("modelJson.json");

  expect(Array.isArray(model.read())).toBe(true);
});

test("add should push an element to the array and return a list", () => {
  const model = new Model("modelJson.json");
  const item = { id: 1, name: "test" };
  const data = model.add(item);
  expect(data).toContainEqual(item);
  expect(data).toEqual([...dataJson, item]);
});
