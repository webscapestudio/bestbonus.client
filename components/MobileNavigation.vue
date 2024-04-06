<script setup>
const mobileNavStore = useMobileNavStore();
const links = [
  { id: 1, title: "Bonuses", link: "/" },
  { id: 2, title: "Casinos", link: "/casinos" },
  { id: 3, title: "Games", link: "/" },
];
</script>

<template>
  <div class="navigation text-white" :class="{ active: mobileNavStore.isOpen }">
    <div class="pt-12">
      <div class="container h-full">
        <nav class="flex flex-col gap-4 mt-10 text-xl">
          <NuxtLink v-for="item in links" :to="item.link">{{
            item.title
          }}</NuxtLink>
        </nav>
      </div>
    </div>
  </div>
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
