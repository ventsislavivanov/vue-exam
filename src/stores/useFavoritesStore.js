import { defineStore } from 'pinia'
import { ref } from "vue";
import {addFavoriteMovie} from "../services/accountServices.js";

export const useFavoritesStore = defineStore('favoritesStore', () =>{
  const favorites = ref([]);

  function isFavorite(id) {
    return favorites.value.includes(id);
  }

  async function addFavorite(id) {
    favorites.value.push(id);
    await addFavoriteMovie(id)
  }

  function removeFavorite(id) {
    const index = favorites.value.indexOf(id);
    favorites.value.splice(index, 1);
  }

  function toggleFavorite(id) {
    if (this.isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  function loadFavorites() {

  }

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    loadFavorites
  }
});