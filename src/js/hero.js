// Hero main js
import { fetchDayTrends } from '../js/functions/movieApiService';
import { generateHeroMarkup } from './functions/generateHeroMarkup';
import { openModalMovieDetails } from './functions/openModalMovieDetails';

const refs = {
  heroSectionEl: document.querySelector('[data-hero-section]'),
  defaultHeroSectionEl: document.querySelector('[data-default-hero-section]'),
};

onHeroLoad();

async function onHeroLoad() {
  try {
    const response = await fetchDayTrends();
    const randomDayMovie = getRandomDayMovie(response.results.length);
    const heroFilm = response.results[randomDayMovie];
    refs.heroSectionEl.innerHTML = generateHeroMarkup(heroFilm);

    const modalMovieDetailsBtn = document.querySelector(
      '[data-modal-movie-details-btn]'
    );
    modalMovieDetailsBtn.addEventListener('click', () => {
      openModalMovieDetails(heroFilm);
    });
  } catch (error) {
    console.error(error.message);
    refs.defaultHeroSectionEl.classList.remove('is-hidden');
  }
}

function getRandomDayMovie(arrLength) {
  return Math.round(Math.random() * (arrLength - 1));
}
