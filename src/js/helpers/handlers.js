import { imageApi } from '../galleryAPI';
import { renderGalleryMarkUp } from '../helpers/renderFunction';
import { clearGalleryMarkUp } from '../helpers/renderFunction';
import { Notify } from 'notiflix';
import { loadMoreBtn } from '../loadMoreBtn';
import { gallery } from './simpleLightBox';
import { scrollBy } from './scrollFunction';

export async function onFormSubmit(event) {
  event.preventDefault();
  clearGalleryMarkUp();
  imageApi.resetPage();
  const searchQuery = event.target.searchQuery.value.trim();
  if (!searchQuery) {
    Notify.warning('Please, enter valid value');
    return;
  }
  loadMoreBtn.hide();
  imageApi.searchQuery = searchQuery;
  try {
    const { hits, totalHits } = await imageApi.fetchImages();
    if (hits.length === 0) {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    Notify.success(`Hooray! We found ${totalHits} images.`);
    renderGalleryMarkUp(hits);
    gallery.refresh();
    loadMoreBtn.show();
    checkMaxHits(hits);
  } catch (error) {
    console.log(error);
  }
}

export async function onLoadMoreBtnClick() {
  try {
    loadMoreBtn.loading();
    const { hits } = await imageApi.fetchImages();
    renderGalleryMarkUp(hits);
    gallery.refresh();
    loadMoreBtn.endLoading();
    checkMaxHits(hits);
    scrollBy();
  } catch (error) {
    console.log(error);
  }
}

function checkMaxHits(hits) {
  if (hits.length < 40) {
    Notify.info("We're sorry, but you've reached the end of search results.");
    loadMoreBtn.hide();
  }
}
