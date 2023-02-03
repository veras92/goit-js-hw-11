import { onLoadMoreBtnClick } from './helpers/handlers';

class LoadMoreBtn {
  constructor(className, onClick) {
    document.body.insertAdjacentHTML(
      'beforeend',
      `<button type="button" class="${className}">Load more</button>`
    );
    this.loaddMoreRef = document.querySelector(`.${className}`);
    this.loaddMoreRef.addEventListener('click', onClick);
    this.hide();
  }
  hide() {
    this.loaddMoreRef.style.display = 'none';
  }
  show() {
    this.loaddMoreRef.style.display = 'block';
  }
  loading() {
    this.loaddMoreRef.textContent = 'loading...';
  }
  endLoading() {
    this.loaddMoreRef.textContent = 'load more';
  }
}

export const loadMoreBtn = new LoadMoreBtn('load-more', onLoadMoreBtnClick);
