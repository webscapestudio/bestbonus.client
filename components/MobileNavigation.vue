<script setup>
const mobileNavStore = useMobileNavStore();
</script>

<template>
  <div class="navigation" :class="{ active: mobileNavStore.isOpen }">asd</div>
</template>

<style scoped lang="scss">
.navigation {
  @apply hidden;
}

@screen md {
  .navigation {
    top: -100%;
    @apply block absolute w-full h-screen bg-blackLight z-20  transition-all duration-200 ease-in-out;

    &.active {
      top: 0;
    }
  }
}
</style>
