const { expect, it } = require("@jest/globals");
const Model = require("../Model");
const testJson = require("../modelJson.json");
it("should be a class", () => {
  const model = new Model();

  expect(model).toBeInstanceOf(Model);
});

it("should ask for json fileName", () => {
  const model = new Model(testJson);
  expect(model.jsonFileName).toBe(testJson);
});

it("should have read method", () => {
  const model = new Model(testJson);
  expect(typeof model.read).toBe("function");
});
