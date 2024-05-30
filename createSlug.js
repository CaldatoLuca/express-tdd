const createSlug = (title, posts) => {
  if (typeof title !== "string") {
    throw new Error("title must be a string");
  }

  const slugs = posts.map((post) => post.slug);
  const baseSlug = title.toLowerCase().replaceAll(" ", "-");
  let slug = baseSlug;

  let count = 1;
  while (slugs.includes(slug)) {
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
};

module.exports = {
  createSlug,
};
