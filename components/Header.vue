<script setup>
const links = [
  { id: 1, title: "Bonuses", link: "/a" },
  { id: 2, title: "Casinos", link: "/a" },
  { id: 3, title: "Games", link: "/a" },
  { id: 4, title: "News", link: "/a" },
  { id: 5, title: "Q&A", link: "/a" },
];
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="flex items-center">
        <NuxtLink to="/" class="font-bold text-2xl uppercase md:text-xl">
          <span class="text-accent">Bonuses</span>codes
        </NuxtLink>

        <nav class="ml-auto flex gap-8 md:hidden">
          <NuxtLink
            v-for="item in links"
            :key="item.id"
            :to="item.link"
            exact-active-class="active"
            class="uppercase link"
            >{{ item.title }}</NuxtLink
          >
        </nav>

        <UiBurger class="hidden ml-auto md:block" />
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply bg-black text-white py-5;
}

@screen md {
  .header {
    @apply py-3 relative z-30;
  }
}

.link {
  @apply transition-colors duration-200 ease-out uppercase hover:text-accent;

  &.active {
    @apply text-accent;
  }
}
</style>
