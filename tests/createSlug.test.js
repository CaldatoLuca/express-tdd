const { expect, it } = require("@jest/globals");
const { createSlug } = require("../createSlug");
const posts = require("../postsDb.json");

it("should return a string", () => {
  expect(() => {
    createSlug(1, posts);
  }).toThrow;
});

it("should return a lowercase string", () => {
  expect(createSlug("CIAO", posts)).toBe("ciao");
});

it("should return a string with a dash instead of a space", () => {
  expect(createSlug("Ciao ciAo", posts)).toBe("ciao-ciao");
});

it("should increase slug by one if slug already exists", () => {
  expect(createSlug("ciambellone", posts)).toBe("ciambellone-1");
});
