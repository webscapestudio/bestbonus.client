<template>
  <div class="flex flex-col gap-4 md:order-1">
    <aside class="filter rounded-md border border-grayLight p-5">
      <h4 class="font-medium text-lg">Bonus Categories</h4>

      <div class="flex flex-col mt-4 gap-2">
        <NuxtLink
          class="transition-colors duration-200 ease-in-out hover:text-accent"
          :to="`/casinos/${item.slug}`"
          v-for="item in categories.data"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </aside>

    <aside class="filter rounded-md border border-grayLight p-5">
      <h4 class="font-medium text-lg">Bonus By Type</h4>

      <div class="flex flex-col mt-4 gap-2">
        <NuxtLink
          class="transition-colors duration-200 ease-in-out hover:text-accent"
          active-class="text-accent"
          :to="`/${item.slug}`"
          v-for="item in bonusTypes.data"
        >
          {{ item.title }}
        </NuxtLink>
      </div>
    </aside>
   
    <aside class="filter rounded-md border border-grayLight p-5">
      <h4 class="font-medium text-lg">Software</h4>

      <div class="flex flex-col mt-4 gap-2">
        <NuxtLink
          class="transition-colors duration-200 ease-in-out hover:text-accent"
          active-class="text-accent"
          :to="`/soft/${item.slug}`"
          v-for="item in softs.data"
        >
          {{ item.title.replace("Review", "") }}
        </NuxtLink>
      </div>
    </aside>

    <aside class="filter rounded-md border border-grayLight p-5">
      <h4 class="font-medium text-lg">Search Bonus By Casino</h4>

      <input
        class="input rounded-md border border-grayLight w-full mt-4"
        type="text"
        placeholder="Search by Casino"
      />

      <div class="flex flex-col mt-4 gap-2">
        <NuxtLink
          class="transition-colors duration-200 ease-in-out hover:text-accent"
          active-class="text-accent"
          :to="`/bonuses/by-${item.slug}`"
          v-for="item in casinos.data"
        >
          {{ item.title.replace("Review", "") }}
        </NuxtLink>
      </div>
    </aside>

  </div>
</template>

<script setup>
const { data: casinos } = await useApiFetch("/casinos");
const { data: categories } = await useApiFetch("/categories");
const { data: softs } = await useApiFetch("/softs");
const { data: bonusTypes } = await useApiFetch("/bonus_types");
</script>

<style></style>
