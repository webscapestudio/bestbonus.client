<script setup>
const { data: page } = await useApiFetch("/pages/bonus");
const { data: bonusCards } = await useApiFetch("/bonus_cards");
</script>

<template>
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <UiBreadcrumbs page-title="Bonuses" />
      <div class="flex mt-4">
        <div class="w-[600px]">
          <h1 class="h1 uppercase">{{ page.title }}</h1>
          <div
            v-if="page.description"
            v-html="page.description"
            class="mt-6 lg:mt-4"
          ></div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <h2 class="h2 uppercase">Most Used Casino Bonuses in the last 7 days</h2>
      <div class="flex flex-col gap-4 mt-10">
        <div class="flex items-center border-b border-grayLight py-2">
          <h3 class="text-lg font-bold uppercase">Title three four</h3>
          <div class="ml-auto">
            <div
              class="cursor-pointer py-3 px-6 text-center leading-[100%] border border-dashed border-red-400 rounded-[4px] w-96"
            >
              IH&ASD@$2
            </div>
          </div>
        </div>

        <div class="flex items-center border-b border-grayLight py-2">
          <h3 class="text-lg font-bold uppercase">Title three four</h3>
          <div class="ml-auto">
            <div
              class="cursor-pointer py-3 px-6 text-center leading-[100%] border border-dashed border-red-400 rounded-[4px] w-96"
            >
              IH&ASD@$2
            </div>
          </div>
        </div>

        <div class="flex items-center border-b border-grayLight py-2">
          <h3 class="text-lg font-bold uppercase">Title three four</h3>
          <div class="ml-auto">
            <div
              class="cursor-pointer py-3 px-6 text-center leading-[100%] border border-dashed border-red-400 rounded-[4px] w-96"
            >
              IH&ASD@$2
            </div>
          </div>
        </div>
        <div class="flex items-center border-b border-grayLight py-2">
          <h3 class="text-lg font-bold uppercase">Title three four</h3>
          <div class="ml-auto">
            <div
              class="cursor-pointer py-3 px-6 text-center leading-[100%] border border-dashed border-red-400 rounded-[4px] w-96"
            >
              IH&ASD@$2
            </div>
          </div>
        </div>
        <div class="flex items-center border-b border-grayLight py-2">
          <h3 class="text-lg font-bold uppercase">Title three four</h3>
          <div class="ml-auto">
            <div
              class="cursor-pointer py-3 px-6 text-center leading-[100%] border border-dashed border-red-400 rounded-[4px] w-96"
            >
              IH&ASD@$2
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <div
          class="cursor-pointer leading-[100%] w-80 py-3 px-8 bg-accent text-center text-white rounded-[4px]"
        >
          Load More
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <h2 class="h2 uppercase">Bonuses</h2>

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

<style></style>
