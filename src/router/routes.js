export default [
  {
    name: 'home',
    path: '/',
    component: () => import('../pages/Home/Home.vue'),
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
