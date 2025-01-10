export default [
  {
    name: 'home',
    path: '/',
    redirect: 'movies'
  },
  {
    name: 'movies',
    path: '/movies',
    component: () => import('../pages/Movies/Movies.vue'),
  },
  {
    name: 'movie-details',
    path: '/movie/:id',
    component: () => import('../pages/Movies/Details.vue'),
  },
  {
    name: 'search-movie',
    path: '/search-movie/:query?',
    component: () => import('../pages/SearchMovie/SearchMovie.vue'),
  },
  {
    name: 'about-us',
    path: '/about-us',
    component: () => import('./../pages/AboutUs.vue'),
  },
  {
    name: 'contact-us',
    path: '/contact-us',
    component: () => import('./../pages/ContactUs.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('./../pages/LoginPage.vue'),
  },
  {
    name: 'sign-up',
    path: '/sign-up',
    component: () => import('./../pages/SignUp.vue'),
  },
  {
    name: 'forgot-password',
    path: '/forgot-password',
    component: () => import('./../pages/ForgotPassword.vue'),
  },
];
