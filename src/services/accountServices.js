import axiosTheMovieDb from "../config/axios.js";
import apiKey from "../config/apiKey.js";
import {useAuthStore} from "../stores/useAuthStore.js";

const API_KEY_ALT = '?' + apiKey;
const accountId = 21732660;

const authStore = useAuthStore();


const ADD_FAVORITE = `account/${accountId}/favorite`;
const LOAD_FAVORITE = `account/${accountId}/favorite/movies`;
export async function addFavoriteMovie(movieId) {
  try {

    const response = await axiosTheMovieDb.post(ADD_FAVORITE + API_KEY_ALT + '&session_id=' + authStore.sessionId, {
      'media_type': 'movie',
      'media_id': movieId,
      'favorite': true
    });
    return response.data.results;
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}

export async function loadFavoritesMovie(movieId) {
  try {
    const response = await axiosTheMovieDb.get(LOAD_FAVORITE + API_KEY_ALT + SESSION_ID);
    return response.data.results;
  }
  catch (e) {
    console.error('Oops unexpected', e);
    return [];
  }
}