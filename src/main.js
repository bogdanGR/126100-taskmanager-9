import {createMenuTemplate} from './../src/components/site-menu.js';
import {createSearchTemplate} from './../src/components/search.js';
import {createFilterTemplate} from './../src/components/filter.js';
import {createSortFilterTemplate} from './../src/components/sort-filter.js';
import {createLoadMoreBtnTemplate} from './../src/components/load-more.js';
import {createCardTemplate} from './../src/components/card.js';
import {getTask} from "./components/data";

const TASK_NUM = 3;

const renderComponent = (container, template) => {
  const domContainer = document.querySelector(container);
  domContainer.insertAdjacentHTML(`beforeEnd`, template);
};
const renderCards = (container, count) => {
  container.insertAdjacentHTML(`beforeend`, new Array(count)
  .fill(``)
  .map(getTask)
  .map(createCardTemplate)
  .join(``));
};
const showComponent = () => {
  renderComponent(`.main__control`, createMenuTemplate());
  renderComponent(`.main`, createSearchTemplate());
  renderComponent(`.main`, createFilterTemplate());
  renderComponent(`.main`, `<section class="board container"></section>`);
  renderComponent(`.board`, createSortFilterTemplate());
  renderComponent(`.board`, `<div class="board__tasks"></div>`);
  const tasksContainer = document.querySelector(`.board__tasks`);
  renderCards(tasksContainer, TASK_NUM);
  renderComponent(`.board`, createLoadMoreBtnTemplate());
};
showComponent();

