export const slugify = (text) =>
  text.toLowerCase().trim().replace(/&/g, "and").replace(/\s+/g, "-");
