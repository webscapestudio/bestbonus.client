<script setup>
const { data: page } = await useApiFetch("/pages/main-page");
const { data: featuredCasinos } = await useApiFetch("/casinos");
const { data: casinos } = await useApiFetch("/casinos");
const { data: bonusCards } = await useApiFetch("/bonus_cards");
const { data: categories } = await useApiFetch("/categories");
const { data: bonusTypes } = await useApiFetch("/bonus_types");

// const { data: searchResult } = await useApiFetch("/search?search");

const searchVal = ref("");

const handleSearch = async () => {
  const { data: searchResult } = await useApiFetch(
    `/search?search=${searchVal.value}`
  );
};

useSeoMeta({
  title: () => `${page.value.title}`,
  description: () => `${page.value.description}`,
  ogTitle: "My Amazing Site",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <!-- Hero Start -->
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <div class="flex">
        <div class="w-[600px]">
          <h1 class="h1 uppercase" v-html="page.title"></h1>

          <!-- <div
            v-if="page.description"
            v-html="page.description"
            class="mt-6 lg:mt-4"
          ></div> -->
          <div
            class="mt-12 flex gap-4 items-center maw-w-[600px] w-full relative"
          >
            <input
              type="text"
              placeholder="Search Bonuses and Casinos"
              class="grow search border-green border-2"
              @input="handleSearch"
              v-model="searchVal"
            />

            <div
              class="absolute rounded-lg w-full transition-all duration-200 ease-out bg-white overflow-hidden text-black max-h-[200px] h-0 top-full mt-4"
            >
              <div
                class="p-5 inner border border-gray overflow-y-scroll max-h-[200px]"
              >
                asdasd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <SectionsFeaturedCasinos :data="featuredCasinos.data" />

  <section class="section">
    <div class="container">
      <h2 class="h2">Bonuses</h2>

      <div
        class="grid mt-8 grid-cols-[2fr_1fr] gap-4 items-start md:grid-cols-1 lg:mt-6"
      >
        <div class="flex flex-col gap-4 md:order-2">
          <BonusCard v-for="item in bonusCards.data" :data="item" />
        </div>

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
                :to="`/casinos/${item.slug}`"
                v-for="item in bonusTypes.data"
              >
                {{ item.title }}
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
                :to="`/casinos/${item.slug}`"
                v-for="item in casinos.data"
              >
                {{ item.title }}
              </NuxtLink>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </section>
  <SectionsSpacer />
</template>
