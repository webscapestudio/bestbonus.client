<script setup>
const { data: page } = await useApiFetch("/pages/main-page");
const { data: featuredCasinos } = await useApiFetch("/casinos");
const { data: casinos } = await useApiFetch("/casinos");
const { data: bonusCards } = await useApiFetch("/bonus_cards");
const { data: categories } = await useApiFetch("/categories");
const { data: bonusTypes } = await useApiFetch("/bonus_types");


const searchVal = ref("");

const searchStore = useMultiSearchStore();

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
            <div class="w-full relative">
              <input
                type="text"
                placeholder="Search Bonuses and Casinos"
                class="grow search w-full border-green border-2"
                @input="searchStore.getData(searchVal)"
                v-model="searchVal"
              />

              <div
                role="status"
                class="absolute right-4 top-3"
                v-if="searchStore.isLoading"
              >
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-accent"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
            </div>

            <div
              v-if="
                searchStore.list[0]?.categories?.length > 0 ||
                searchStore.list[0]?.bonuses?.length > 0 ||
                searchStore.list[0]?.casinos?.length > 0
              "
              class="absolute p-4 max-h-[200px] overflow-y-auto bg-white text-black top-[calc(100%+20px)] z-20 w-full rounded-lg border border-accent flex flex-col gap-4"
            >
              <div v-if="searchStore.list[0]?.casinos.length > 0">
                <h4 class="font-bold">Casinos</h4>
                <div class="flex flex-col mt-2 gap-1">
                  <NuxtLink
                    :to="`/casinos/${item.slug}`"
                    class="leading-[100%]"
                    v-for="item in searchStore.list[0]?.casinos"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </div>

              <div v-if="searchStore.list[0]?.bonuses.length > 0">
                <h4 class="font-bold">Bonuses</h4>
                <div class="flex flex-col mt-2 gap-1">
                  <NuxtLink
                    :to="`/bonuses/${item.slug}`"
                    class="leading-[100%]"
                    v-for="item in searchStore.list[0]?.bonuses"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </div>

              <div v-if="searchStore.list[0]?.categories.length > 0">
                <h4 class="font-bold">Categories</h4>
                <div class="flex flex-col mt-2 gap-1">
                  <NuxtLink
                    :to="`/categories/${item.slug}`"
                    class="leading-[100%]"
                    v-for="item in searchStore.list[0]?.categories"
                  >
                    {{ item.title }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <div v-for="item in searchStore.list.casinos">
            <pre>
              {{ item }}
            </pre>
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
        class="grid mt-8 grid-cols-[2fr_1fr] rela gap-4 items-start md:grid-cols-1 lg:mt-6"
      >
        <div class="flex flex-col gap-4 md:order-2">
          <BonusCard v-for="item in bonusCards.data" :data="item" />
        </div>

        <Sidebar />
      </div>
    </div>
  </section>
  <SectionsSpacer />

  <Subscribe
    class="mt-32"
    title="Awesome Bonuses,<br> New Casinos, and Much More!"
    description="Subscribe now to TopBonuse's free newsletter to be updated with the best bonus offers on our website, latest casinos and a selection of gambling related news & guides!"
  />
</template>
