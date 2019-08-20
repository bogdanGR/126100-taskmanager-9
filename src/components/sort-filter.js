import {createCardTemplate} from "./card";
import {getCardEdit} from "./card-edit";
import {createLoadMoreBtnTemplate} from "./load-more";

export const getFiltersCards = (cards) => {
  return cards.map((card) => createCardTemplate(card)).join(``);
};
export const getSortFilters = (cards) => {
  return `
      <section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>
        
        <div class="board__tasks">
          ${getCardEdit(cards[0])}
          ${getFiltersCards(cards.slice(1))}
        </div>
        
        ${createLoadMoreBtnTemplate()}
      </section>
  `.trim();
};
