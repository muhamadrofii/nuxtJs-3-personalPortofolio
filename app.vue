<script setup lang="ts">
useSeoMeta({
  title: 'Muhamad Rofi\'i - Personal Portfolio',
  ogTitle: 'Muhamad Rofi\'i - Personal Portfolio',
  description: 'Welcome to the personal portfolio of Muhamad Rofi\'i. Explore my projects, skills, and experiences.',
  ogDescription: 'Discover the work and expertise of Muhamad Rofi\'i, a skilled professional in the tech industry.',
  // ogImage: 'https://example.com/image.png', 
  // twitterCard: 'summary_large_image',
});

useHead({
  meta: [
    { name: 'keywords', content: 'BEK EN EMJINER, portfolio, Muhamad Rofi\'i, Nuxt.js, BEK EN EMJINER, JavaScript' }
  ]
});
</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
  