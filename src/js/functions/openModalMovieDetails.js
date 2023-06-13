// Modal window for movie details
import { generateModalMovieDetailsMarkup } from './generateModalMovieDetailsMarkup';
import { addAppropriateListenerModal } from './addAppropriateListenerModal';
import { onMovieDetailsBackdropClick } from './onMovieDetailsBackdropClick';
import { modalMovieDetailsClose } from './modalMovieDetailsClose';
import { fetchMovieById } from './movieApiService';
/**
 * Opens modal window with movie details
 * @param {String} id Movie id
 */
async function openModalMovieDetails(id) {
  const movieObject = await fetchMovieById(id);
  const modalMovieDetails = document.querySelector('[data-modal-details]');
  const btnClasses = 'btn btn-empty';
  modalMovieDetails.innerHTML = generateModalMovieDetailsMarkup(
    btnClasses,
    movieObject
  );
  const isAddBtn = modalMovieDetails.innerHTML.includes('Add to library');


  addAppropriateListenerModal(isAddBtn, btnClasses, id, movieObject);


  modalMovieDetails.classList.remove('is-hidden');
  modalMovieDetails.addEventListener('click', onMovieDetailsBackdropClick);
  document.body.classList.add('disabled-scroll')

  const modalDetailsCloseBtn = document.querySelector(
    '[data-modal-details-close]'
  );
  modalDetailsCloseBtn.addEventListener('click', modalMovieDetailsClose);
}

// export { isAddBtn, btnClasses, id, movieObject };
export { openModalMovieDetails };
