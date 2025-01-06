import apiKey from '../config/apiKey.js';
import axiosThemoviedb from '../config/axios.js';

const ENDPOINT = 'movie';

export async function getPopularMovies() {
  try {
    const response = await axiosThemoviedb.get(`/${ENDPOINT}/popular${apiKey}`);
    return response.data.results.slice(0, 6);
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}
