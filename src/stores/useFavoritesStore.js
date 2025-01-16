import { defineStore } from 'pinia'
import { ref } from "vue";
import {addFavoriteMovie, loadFavoritesMovie} from "../services/accountServices.js";

export const useFavoritesStore = defineStore('favoritesStore', () =>{
  const favoriteIds = ref([]);
  const favorites = ref([]);

  function isFavorite(id) {
    return favoriteIds.value.includes(id);
  }

  async function addFavorite(id) {
    favoriteIds.value.push(id);
    await addFavoriteMovie(id)
  }


  return {
    favorites,
    isFavorite,
    addFavorite,
  }
});