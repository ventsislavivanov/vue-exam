import { defineStore } from 'pinia'
import { ref } from "vue";

export const useFavoritesStore = defineStore('favoritesStore', () =>{
  const favorites = ref([]);

  function isFavorite(id) {
    return favorites.value.includes(id);
  }

  function addFavorite(id) {
    favorites.value.push(id);
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
    isFavorite,
    toggleFavorite,
    loadFavorites
  }
});