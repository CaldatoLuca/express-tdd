const { expect, it } = require("@jest/globals");
const { createSlug } = require("../createSlug");
const posts = require("../postsDb.json");

it("should return a string", () => {
  expect(typeof createSlug("ciao", posts)).toBe("string");
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

it("should throw an error if title is empty or badly formatted", () => {
  expect(() => {
    createSlug(1, posts);
  }).toThrow;

  expect(() => createSlug(undefined, posts)).toThrow;

  expect(() => createSlug(" ", posts)).toThrow;
});

it("should throw an error if array is missing", () => {
  expect(() => createSlug("ciao")).toThrow;
  expect(() => createSlug("ciao", null)).toThrow;
  expect(() => createSlug("ciao", "not an array")).toThrow;
});
