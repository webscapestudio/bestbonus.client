<script setup>
const { slug } = useRoute().params;

const { data } = await useApiFetch(`/casinos/${slug}`);

console.log(data.sign_up_bonuses);
const { data: bonuses } = await useApiFetch(`/casinos/${slug}/bonuses/`);
</script>
<template>
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <UiBreadcrumbs
        :pageTitle="data.title"
        category="Casino"
        categorySlug="/casinos"
      />

      <div
        class="flex justify-between md:flex-row-reverse md:gap-8 md:mt-8 md:justify-end md:items-start sm:gap-4"
      >
        <div class="flex flex-col max-w-[520px] sm:max-w-none">
          <h1 class="h1 mt-8 md:mt-0">{{ data.title }}</h1>
          <div class="mt-2 text-green">
            Total Bonuses: {{ bonuses.data?.length }}
          </div>
          <p
            class="mt-4 text-gray"
            v-if="data.description"
            v-html="data.description"
          ></p>

          <div class="flex gap-4 mt-8">
            <UiBonusTag
              v-for="tag in data.sign_up_bonuses"
              :title="tag.title"
              :description="tag.description"
              :bonuscode="tag.bonus_code"
              :wagering="tag.wagering"
              :mindeposit="tag.minimo"
            />
          </div>
        </div>

        <div class="flex flex-col md:w-[120px] sm:shrink-0">
          <div
            class="block overflow-hidden rounded-[4px] bg-blackLight w-[280px] md:w-full"
          >
            <img
              :src="data.logo"
              :alt="data.title"
              class="block w-full h-auto object-contain"
            />
          </div>
          <NuxtLink
            :to="data.link"
            class="bg-green text-center rounded-[4px] py-3 leading-[100%] mt-2"
            target="_blank"
            >Visit</NuxtLink
          >
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <!-- Game Types -->
      <div class="mt-4" v-if="data.game_types.length > 0">
        <h2 class="h2">Game Types:</h2>
        <div class="flex gap-4 mt-8">
          <div
            v-for="item in data.game_types"
            class="leading-[100%] flex grow flex-col items-center w-[200px] border border-grayLight rounded-[8px] p-4"
          >
            <h3 class="text-lg font-bold uppercase">
              {{ item.title }}
            </h3>

            <div class="w-[80px] h-[80px] mt-4">
              <img
                :src="item.icon"
                :alt="item.title"
                class="h-full w-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36 lg:mt-24 md:mt-12">
    <div class="container">
      <h2 class="h2">{{ data.title.replace("Review", "") }} Bonuses</h2>

      <div class="flex flex-col mt-8 gap-4 md:mt-8">
        <BonusCard v-for="item in bonuses.data" :data="item" />
      </div>
    </div>
  </section>

  <section class="mt-36 lg:mt-24 md:mt-12">
    <div class="container">
      <div class="content" v-html="data.description_footer"></div>
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
