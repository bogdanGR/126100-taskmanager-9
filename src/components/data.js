import {getRandomBoolean, getRandomNumberInRange, getRandomItemFrom} from "./utils";

const MIN_NUM_OF_TASKS = 0;
const MAX_NUM_OF_TASKS = 3;

const tags = [
  `homework`,
  `theory`,
  `practice`,
  `intensive`,
  `keks`,
  `study js`,
  `study english`];

const descriptions = [
  `Study theory`,
  `To do homework`,
  `Pass the instensive with 100%`];
const colors = [
  `black`,
  `yellow`,
  `blue`,
  `green`,
  `pink`];
const getRandomTags = (tagsInsert) => {
  let j;
  let temp;
  for (let i = tagsInsert.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = tagsInsert[j];
    tagsInsert[j] = tagsInsert[i];
    tagsInsert[i] = temp;
  }
  return tagsInsert.slice(0, getRandomNumberInRange(MIN_NUM_OF_TASKS, MAX_NUM_OF_TASKS));
};

export const getTask = () => ({
  description: getRandomItemFrom(descriptions),
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  repeatingDays: {
    'mo': getRandomBoolean(),
    'tu': getRandomBoolean(),
    'we': getRandomBoolean(),
    'th': getRandomBoolean(),
    'fr': getRandomBoolean(),
    'sa': getRandomBoolean(),
    'su': getRandomBoolean(),
  },
  tags: new Set(getRandomTags(tags)),
  color: getRandomItemFrom(colors),
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean()
});
export const getCards = (count) => {
  return new Array(count).fill(``).map(getTask);
};
export const getFiltersNum = (cards) => {
  const counts = {
    all: cards.length,
    overdue: 0,
    today: 0,
    favorites: 0,
    repeating: 0,
    tags: 0,
    archive: 0
  };

  cards.forEach((card) => {
    const currentDate = new Date();
    const cardDate = new Date(card.dueDate);
    const isCardToday = (currentDate.getDay() === cardDate.getDay()) && (currentDate.getDate() === cardDate.getDate());


    counts.overdue = currentDate > cardDate ? counts.overdue += 1 : counts.overdue;
    counts.today = isCardToday ? counts.today += 1 : counts.today;
    counts.favorites = card.isFavorite ? counts.favorites += 1 : counts.favorites;
    counts.repeating = Object.keys(card.repeatingDays).some((day) => card.repeatingDays[day]) ? counts.repeating += 1 : counts.repeating;
    counts.tags = card.tags ? counts.tags += 1 : counts.tags;
    counts.archive = card.isArchive ? counts.archive += 1 : counts.archive;
  });
  const resultFilters = [];

  for (let [key, value] of Object.entries(counts)) {
    resultFilters.push({
      title: key,
      count: value
    });
  }

  return resultFilters;
};
