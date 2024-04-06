<template>
  <ul class="flex items-center gap-2">
    <li class="transition-colors duration-200 ease-in-out hover:text-accent">
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>–</li>
    <li
      v-if="category"
      class="transition-colors duration-200 ease-in-out hover:text-accent"
    >
      <NuxtLink :to="categorySlug">{{ category }}</NuxtLink>
    </li>
    <li v-if="category">-</li>
    <li class="text-gray">{{ pageTitle }}</li>
  </ul>
</template>

<script setup>
const props = defineProps(["pageTitle", "category", "categorySlug"]);
</script>

<style lang="scss" scoped></style>
