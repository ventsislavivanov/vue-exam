import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favoritesStore', {
  state: () => ({
    favorites: [],
  }),
  actions: {
    isFavorite(id) {
      return this.favorites.includes(id);
    },
    addFavorite(id) {
      this.favorites.push(id);
    },
    removeFavorite(id) {
      const index = this.favorites.indexOf(id);
      this.favorites.splice(index, 1);
    },
    toggleFavorite(id) {
      if (this.isFavorite(id)) {
        this.removeFavorite(id);
      } else {
        this.addFavorite(id);
      }
    },
    loadFavorites() {

    }
  }
})