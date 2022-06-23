<script setup>
import DefaultTheme from 'vitepress/theme';
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-after>
      <ClientOnly>
        <!-- <Content /> -->
        asdasdasd {{ 12313 }}
      </ClientOnly>
    </template>
  </Layout>
</template>

<style scoped></style>
