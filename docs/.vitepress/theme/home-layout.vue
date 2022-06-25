<script setup lang="ts">
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
import HomeIcon from '../components/icons/home-icon.vue';
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <home-icon class="home" />
    </template>
  </Layout>
</template>

<style scoped>
@import '../styles/home.css';
</style>
