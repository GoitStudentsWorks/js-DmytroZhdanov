import { generateUpcomingLibraryBtnMarkup } from './generateUpcomingLibraryBtnMarkup';
import { onUpcomingLibraryBtnRemoveClick } from './onUpcomingLibraryBtnRemoveClick';
import { addMovieToLibrary } from './addMovieToLibrary';

// /**
//  * Sets local storage item with key 'library' and value of Array of movie objects. Adds Item
//  * @param {Object} movieObject  Object with movie details
//  */

/**
 * Sets local storage item with key 'library' and value of Array of movie objects. Adds Item.
 * @param {*} classes
 * @param {*} id
 * @param {*} movieObject
 */
function onUpcomingLibraryBtnAddClick(classes, id, movieObject) {
  addMovieToLibrary(movieObject);

  const libraryBtnContainer = document.querySelector(
    '[data-library-btn-upcoming]'
  );

  // const libraryBtnAdd = document.querySelector('[data-add-to-library-btn]');
  // libraryBtnAdd.removeEventListener('click', () => {
  //   onLibraryBtnAddClick(btnClasses, id, movieObject);
  // });

  const changedlibraryBtn = generateUpcomingLibraryBtnMarkup(classes, id);
  libraryBtnContainer.innerHTML = changedlibraryBtn;
  const libraryBtnRemove = document.querySelector(
    '[data-remove-from-library-btn-upcoming]'
  );
  libraryBtnRemove.addEventListener(
    'click',
    () => {
      onUpcomingLibraryBtnRemoveClick(classes, id, movieObject);
    },
    { once: true }
  );
}

export { onUpcomingLibraryBtnAddClick };
