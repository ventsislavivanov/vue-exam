import apiKey from '../config/apiKey.js';
import axiosThemoviedb from '../config/axios.js';

const ENDPOINT = 'discover';

export async function getDiscoverMovies() {
  try {
    const response = await axiosThemoviedb.get(`/${ENDPOINT}/movie${apiKey}`);
    return response.data.results.slice(6, 12);
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}
