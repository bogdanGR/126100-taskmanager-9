const tags = [`homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `study js`,
  `study english`];
export const getTask = () => ({
  description: [
    `Study theory`,
    `To do homework`,
    `Pass the instensive with 100%`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'mo': false,
    'tu': false,
    'we': Boolean(Math.round(Math.random())),
    'th': false,
    'fr': false,
    'sa': false,
    'su': false,
  },
  tags: new Set(getRandomTags(tags, Math.floor(Math.random() * (Math.floor(3) - Math.ceil(0) + 1)) + Math.ceil(0))),
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`,
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random()))
});
const getRandomItemFrom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const getRandomTags = (tagsInsert, count) => {
  const resultArray = [];

  for (let i = 0; i < count; i++) {
    resultArray.push(getRandomItemFrom(tagsInsert));
  }

  return resultArray;
};
