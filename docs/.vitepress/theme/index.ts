import DefaultTheme from 'vitepress/theme';
import HomeLayout from './home-layout.vue';
import './custom.css';

export default {
  ...DefaultTheme,
  Layout: HomeLayout,
  enhanceApp({ app, router, siteData }) {},
};
