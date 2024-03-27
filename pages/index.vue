<script setup>
const { data: page } = await useApiFetch("/pages/main-page");

useSeoMeta({
  title: () => `${page.value.title}`,
  description: () => `${page.value.description}`,
});
</script>

<template>
  <section>
    <div class="container">
      <h1 class="uppercase text-3xl">{{ page.title }}</h1>
    </div>
  </section>
</template>
