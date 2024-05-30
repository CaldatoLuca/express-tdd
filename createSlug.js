const posts = require("./postsDb.json");

const createSlug = (title, posts) => {
  if (typeof title !== "string") {
    throw new Error("title must be a string");
  }
  return title.toLowerCase().replaceAll(" ", "-");
};

module.exports = {
  createSlug,
};
