<template>
  <div
    class="ml-auto flex items-center gap-1 sm:ml-0 sm:top-4 sm:right-4 sm:bg-green sm:text-white sm:pt-1 sm:pb-[5px] sm:px-2 sm:rounded-[4px]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1"
      v-show="useDateFromToday(days) > 0"
      class="w-6 h-6 stroke-green sm:hidden"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>

    <div
      class="leading-[100%] sm:text-white"
      :class="useDateFromToday(days) < 0 ? 'text-red-600' : 'text-green'"
    >
      <p v-if="useDateFromToday(days) > 0">
        Expires in: {{ useDateFromToday(days) }} days
      </p>

      <p v-else>Expired</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["days"]);
</script>
