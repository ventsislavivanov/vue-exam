import { useAuthStore } from '../stores/useAuthStore.js';

export default [
  {
    name: 'home',
    path: '/',
    redirect: 'movies',
  },
  {
    name: 'movies',
    path: '/movies',
    component: () => import('../pages/Movies/RecommendedMovies.vue'),
  },
  {
    name: 'movie-details',
    path: '/movie-details/:id',
    component: () => import('../pages/Movies/MovieDetails.vue'),
  },
  {
    name: 'search-movie',
    path: '/search-movie/:query?',
    component: () => import('../pages/SearchMovie.vue'),
  },
  {
    name: 'favorite-movies',
    path: '/favorite-movies',
    component: () => import('../pages/FavoriteMovies.vue'),
    beforeEnter: () => {
      const authStore = useAuthStore();
      if (!authStore.sessionId) {
        return { name: 'login' };
      }
    },
  },
  {
    name: 'about-us',
    path: '/about-us',
    component: () => import('../pages/AboutUs.vue'),
  },
  {
    name: 'contact-us',
    path: '/contact-us',
    component: () => import('../pages/ContactUs.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../pages/LoginPage.vue'),
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: () => import('../pages/SignUp.vue'),
  },
];
