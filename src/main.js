import {createMenuTemplate} from './../src/components/site-menu.js';
import {createSearchTemplate} from './../src/components/search.js';
import {createFilterTemplate} from './../src/components/filter.js';
import {createSortFilterTemplate} from './../src/components/sort-filter.js';
import {createLoadMoreBtnTemplate} from './../src/components/load-more.js';
import {createCardTemplate} from './../src/components/card.js';

const renderComponent = (container, template) => {
  const domContainer = document.querySelector(container);
  domContainer.insertAdjacentHTML(`beforeEnd`, template);
};
const renderCards = (amoutOfCards) => {
  for (let i = 0; i < amoutOfCards; i++) {
    renderComponent(`.board__tasks`, createCardTemplate());
  }
};
const showComponent = () => {
  renderComponent(`.main__control`, createMenuTemplate());
  renderComponent(`.main`, createSearchTemplate());
  renderComponent(`.main`, createFilterTemplate());
  renderComponent(`.main`, `<section class="board container"></section>`);
  renderComponent(`.board`, createSortFilterTemplate());
  renderComponent(`.board`, `<div class="board__tasks"></div>`);
  renderComponent(`.board`, createLoadMoreBtnTemplate());
  renderCards(3);
};
showComponent();
