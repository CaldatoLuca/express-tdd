const { expect, it } = require("@jest/globals");
const Model = require("../Model");

it("should be a class", () => {
  const model = new Model();

  expect(model).toBeInstanceOf(Model);
});
