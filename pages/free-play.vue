<script setup>
const { slug } = useRoute().params;

const { data: bonusCards } = await useApiFetch(
  `/bonus_types/free-play/bonuses`
);

const { data: page } = await useApiFetch("/pages/free-play");
</script>

<template>
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <UiBreadcrumbs :pageTitle="page.title" />
      <div class="flex mt-4">
        <div class="w-[600px]">
          <h1 class="h1 uppercase">{{ page.title }}</h1>
          <p
            class="mt-4 text-gray"
            v-if="page.description"
            v-html="page.description"
          ></p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <h2 class="h2">Free Play Bonuses</h2>
      <BonusItems :bonuses="bonusCards.data" />
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <div class="content" v-html="page.description_footer"></div>
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
