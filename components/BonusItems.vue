<template>
  <div
    class="grid mt-8 grid-cols-[2fr_1fr] gap-4 items-start md:grid-cols-1 lg:mt-6"
  >
    <div class="flex flex-col gap-4 md:order-2">
      <BonusCard v-for="item in bonuses" :data="item" />
    </div>

    <Sidebar />
  </div>
</template>

<script setup>
const props = defineProps(["bonuses"]);
</script>

<style></style>
