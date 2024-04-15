<template>
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <UiBreadcrumbs
        :pageTitle="data.title"
        category="Bonuses"
        categorySlug="/bonuses"
      />
      <h1 class="h2 mt-4">{{ data.title }}</h1>
    </div>
  </section>

  <section class="mt-8">
    <div class="container">
      <div
        class="grid grid-cols-[2fr_1fr] rela gap-4 items-start md:grid-cols-1 lg:mt-6"
      >
        <div class="flex flex-col gap-4">
          <BonusCard :data="data" />

          <div class="mt-8">
            <h2 class="h3">Related Pages</h2>

            <div class="flex gap-4 mt-4">
              <div
                class="border rounded-sm text-accent font-medium border-grayLight p-4 w-full"
              >
                <NuxtLink :to="`/bonuses/by-${data.casino.slug}`"
                  >All {{ data.casino.title }} casino bonuses</NuxtLink
                >
              </div>
              <div
                class="border rounded-sm text-accent font-medium border-grayLight p-4 w-full"
              >
                <NuxtLink :to="`/bonuses/by-${data.bonus_type.slug}`"
                  >All {{ data.bonus_type.title }} bonuses</NuxtLink
                >
              </div>
              <div
                class="border rounded-sm text-accent font-medium border-grayLight p-4 w-full"
              >
                <NuxtLink :to="`/bonuses/by-${data.softs[0].title}`"
                  >All {{ data.softs[0].title }} bonuses</NuxtLink
                >
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h2 class="h3">Related Pages</h2>

            <div class="flex flex-col gap-4 mt-4">
              <BonusCardRow
                v-for="item in related.data"
                :key="item.id"
                :data="item"
              />
            </div>
          </div>
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

<script setup>
const { slug } = useRoute().params;

const { data } = await useApiFetch(`/bonus_cards/${slug}`);
const { data: related } = await useApiFetch(`/bonus_cards`);

console.log(related);
</script>

<style></style>
