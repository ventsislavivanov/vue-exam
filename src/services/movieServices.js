import apiKey from '../config/apiKey.js';
import axiosTheMovieDb from '../config/axios.js';

const API_KEY = '&' + apiKey;
const API_KEY_ALT = '?' + apiKey;

const POPULAR = 'discover/movie?sort_by=popularity.desc';
const IN_THEATER = 'discover/movie?primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-01-31';
const KIDS = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
const BEST_DRAMA = 'discover/movie?with_genres=18&primary_release_year=2019';
const MOVIE = 'movie/';

export async function getPopularMovies() {
  try {
    const response = await axiosTheMovieDb.get(POPULAR + API_KEY);
    return response.data.results.slice(0, 6);
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}

export async function getInTheaterMovies() {
  try {
    const response = await axiosTheMovieDb.get(IN_THEATER + API_KEY);
    return response.data.results.slice(0, 6);
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}

export async function getKidsMovies() {
  try {
    const response = await axiosTheMovieDb.get(KIDS + API_KEY);
    return response.data.results.slice(0, 6);
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}

export async function getBestDramaMovies() {
  try {
    const response = await axiosTheMovieDb.get(BEST_DRAMA + API_KEY);
    return response.data.results.slice(0, 6);
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}

export async function getMovieDetails(id) {
  try {
    const response = await axiosTheMovieDb.get(MOVIE + id + API_KEY_ALT);
    return response.data;
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}