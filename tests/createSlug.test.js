const { expect, it } = require("@jest/globals");
const { createSlug } = require("../createSlug");

it("should return a string", () => {
  expect(() => {
    createSlug(1);
  }).toThrow;
});
