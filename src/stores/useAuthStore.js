import { defineStore } from 'pinia';
import {createSession, generationRequestToken, deleteSession} from "../services/authServices.js";

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    sessionId: null,
    success: false,
  }),
  actions: {
    async login(credentials) {
      // 1. get token
      const response = await generationRequestToken();

      const requestToken = response.request_token;

      // 2. confirm app from user
      // alert(`https://www.themoviedb.org/authenticate/${requestToken}`);

      // 3. login in site
      // allow
      // get header Authentication-Callback from response
      // {"success":true,"session_id":"cf1a055cd7ec689a01348eac08c4dd06e7927892"}
      this.sessionId = 'cf1a055cd7ec689a01348eac08c4dd06e7927892';
      this.success = true;
    },
    async logout() {
      await deleteSession(this.sessionId);
      localStorage.removeItem('tmdb_session_id');
      this.sessionId = null;
      this.success = false;
    }
  }
});