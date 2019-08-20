import {createMenuTemplate} from './components/site-menu';
import {createSearchTemplate} from './components/search';
import {getFilters} from './components/filter';
import {getSortFilters, getFiltersCards} from './components/sort-filter';
import {renderComponent} from "./components/utils";
import {getCards, getFiltersNum} from "./components/data";

const TASK_NUM = 30;
const MAX_RENDER_CARDS = 8;
const CARDS = getCards(TASK_NUM);

const mainControlElement = document.querySelector(`.main__control`);
const mainNode = document.querySelector(`.main`);

renderComponent(mainControlElement, createMenuTemplate());
renderComponent(mainNode, createSearchTemplate());
renderComponent(mainNode, getFilters(getFiltersNum(CARDS)));
renderComponent(mainNode, getSortFilters(CARDS.slice(0, MAX_RENDER_CARDS)));

const loadMoreButton = mainNode.querySelector(`.load-more`);
const cardsBoardElement = mainNode.querySelector(`.board__tasks`);

let CARDS_ON_PAGE = MAX_RENDER_CARDS;
let LEFT_CARDS_TO_RENDER = CARDS.length - CARDS_ON_PAGE;

const renderLeftCards = () => {
  renderComponent(cardsBoardElement, getFiltersCards(CARDS.slice(CARDS_ON_PAGE, (CARDS_ON_PAGE + MAX_RENDER_CARDS))));

  CARDS_ON_PAGE = CARDS_ON_PAGE + MAX_RENDER_CARDS;
  LEFT_CARDS_TO_RENDER = CARDS.length - CARDS_ON_PAGE;

  if (LEFT_CARDS_TO_RENDER <= 0) {
    loadMoreButton.classList.add(`visually-hidden`);
    loadMoreButton.removeEventListener(`click`, onLoadMoreButtonClick);
  }
};
const onLoadMoreButtonClick = () => {
  renderLeftCards();
};

loadMoreButton.addEventListener(`click`, onLoadMoreButtonClick);

