import { refs } from './refs';

function createGalleryMarkUp(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="photo-card">
<a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
          <b>Views: ${views}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${downloads}</b>
        </p>
      </div>
      </a>
    </li>`
    )
    .join('');
}

function renderGalleryMarkUp(images) {
  refs.galleryList.insertAdjacentHTML('beforeend', createGalleryMarkUp(images));
}

function clearGalleryMarkUp() {
  refs.galleryList.innerHTML = '';
}

export { renderGalleryMarkUp, clearGalleryMarkUp };
