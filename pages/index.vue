<script setup>
const { data: page } = await useApiFetch("/pages/main-page");
const { data: featuredCasinos } = await useApiFetch("/casinos");

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

          <div
            v-if="page.description"
            v-html="page.description"
            class="mt-6 lg:mt-4"
          ></div>
          <div
            class="mt-12 flex gap-4 items-center maw-w-[600px] w-full relative"
          >
            <input
              type="text"
              placeholder="Search Bonuses and Casinos"
              class="grow search border-green border-2"
            />

            <div
              class="absolute search-results rounded-lg w-full transition-all duration-200 ease-out bg-white overflow-hidden text-black max-h-[200px] h-0 top-full mt-4"
            >
              <div
                class="p-5 inner border border-gray overflow-y-scroll max-h-[200px]"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Features Casino for Month -->

  <SectionsFeaturedCasinos :data="featuredCasinos.data" />
  <SectionsSpacer />
</template>
