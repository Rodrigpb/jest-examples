export const URLSlug = (words) => (
  words
    .replace(/\s+/g, '-')
    .toLowerCase()
);