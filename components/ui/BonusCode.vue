<template>
  <div class="flex flex-col min-w-[120px] gap-2">
    <div
      v-if="isCopyed === false"
      @click="copy(bonuscode)"
      class="border-2 border-red-600 font-medium cursor-pointer uppercase border-dashed leading-[100%] rounded-md pt-[11px] pb-[12px] px-2 w-full text-center lg:pt-[7px] lg:pb-2"
    >
      {{ bonuscode }}
    </div>

    <div
      v-else
      class="w-full pt-[11px] pb-[12px] px-2 bg-green text-white border-2 border-green cursor-pointer text-center rounded-md leading-[100%]"
    >
      Copied to Clipboard
    </div>
  </div>
</template>

<script setup>
const isCopyed = ref(false);
const props = defineProps(["bonuscode"]);
const copy = (bonuscode) => {
  try {
    navigator.clipboard.writeText(bonuscode);
    isCopyed.value = true;
  } catch (error) {
    console.log(error);
    isCopyed.value = false;
  }
};
</script>

<style></style>
