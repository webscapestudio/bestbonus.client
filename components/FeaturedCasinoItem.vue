<template>
  <div
    :key="data.id"
    class="py-4 px-4 border border-grayLight flex items-center rounded-lg lg:p-2 md:flex-col md:items-start md:p-4"
  >
    <div class="flex items-center sm:flex-col lg:w-full">
      <div
        class="shrink-0 rounded-full overflow-hidden bg-blackLight w-20 h-20 md:w-20 md:h-20"
      >
        <img
          v-show="data.logo.length > 0"
          :src="data.logo"
          :alt="`${data.title} logo`"
          class="block w-full h-full object-contain"
        />
      </div>
      <h3
        class="ml-5 text-xl font-medium w-[340px] leading-[120%] lg:text-lg sm:w-full sm:text-center sm:ml-0 sm:mt-4"
      >
        <NuxtLink :to="`/casinos/${data.slug}`"> {{ data.title }}</NuxtLink>
      </h3>
    </div>

    <div
      v-if="data.sign_up_bonuses.length > 0"
      class="flex flex-wrap gap-2 ml-10 max-w-[560px] w-full md:ml-0 md:mt-8 md:justify-center md:max-w-none"
    >
      <UiBonusTag
        v-for="tag in data.sign_up_bonuses"
        :title="tag.title"
        :description="tag.description"
        :bonuscode="tag.bonus_code"
      />
    </div>

    <div class="ml-auto max-w-32 w-full md:max-w-none md:mt-8">
      <NuxtLink
        class="btn btn-success w-full uppercase sm"
        target="blank"
        :to="data.link"
        >Visit</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style></style>
