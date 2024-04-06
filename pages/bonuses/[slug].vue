<template>
  <section class="mt-20">
    <div class="container">
      <UiBreadcrumbs
        :pageTitle="data.title"
        category="Bonuses"
        categorySlug="/bonuses"
      />
      <h1 class="h2 mt-4">{{ data.title }}</h1>
    </div>
  </section>
</template>

<script setup>
const { slug } = useRoute().params;

const { data } = await useApiFetch(`/bonus_cards/${slug}`);
</script>

<style></style>
