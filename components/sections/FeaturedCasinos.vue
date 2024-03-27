<template>
  <section class="section">
    <div class="container">
      <h2 class="h2 u">Featured Casinos</h2>

      <div class="items-wrap">
        <FeaturedCasinoItem v-for="item in data" :data="item" :key="item.id" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps(["data"]);
</script>

<style scoped lang="scss">
.items-wrap {
  @apply flex flex-col gap-2 mt-6;
}

@screen lg {
  .items-wrap {
    @apply gap-2 mt-5;
  }
}
</style>
