const { expect, it } = require("@jest/globals");
const { createSlug } = require("../createSlug");

it("should return a string", () => {
  expect(() => {
    createSlug(1);
  }).toThrow;
});

it("should return a lowercase string", () => {
  expect(createSlug("CIAO")).toBe("ciao");
});

it("should return a string with a dash instead of a space", () => {
  expect(createSlug("Ciao ciAo")).toBe("ciao-ciao");
});
