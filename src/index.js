import { refs } from './js/helpers/refs';
import { onFormSubmit } from './js/helpers/handlers';
import { loadMoreBtn } from './js/loadMoreBtn';

refs.form.addEventListener('submit', onFormSubmit);
