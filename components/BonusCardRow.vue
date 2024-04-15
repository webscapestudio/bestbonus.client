<template>
  <div class="flex items-end p-4 rounded-[4px] border border-grayLight">
    <div class="flex flex-col gap-2">
      <p class="leading-[100%] text-gray">{{ dateFormat(data.created_at) }}</p>
      <h3 class="h3">{{ data.title }}</h3>
    </div>

    <div class="ml-auto">
      <UiBonusCode :bonuscode="data.bonus_code" class="min-w-[180px]" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
