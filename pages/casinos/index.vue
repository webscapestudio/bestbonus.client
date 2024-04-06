<script setup>
const { data: page } = await useApiFetch("/pages/casinos");
const { data: casinos } = await useApiFetch("/casinos");
</script>

<template>
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <!-- <UiBreadcrumbs :pageTitle="page.title" /> -->
      <div class="flex">
        <div class="w-[600px]">
          <h1 class="h1 uppercase">{{ page.title }}</h1>
          <p class="mt-4 text-gray" v-if="page.description" v-html="page.description"></p>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <h2 class="h2">Favorite Casinos April 2024</h2>
      <div class="mt-6 grid grid-cols-5 gap-4">
        <div v-for="item in casinos.data" :key="item.id"
          class="p-4 rounded-[4px] bg-blackLight text-white flex flex-col items-center min-h-[300px]">
          <div class="h-[40px] w-full flex justify-center">
            <img :src="item.logo" alt="" class="block h-full w-auto object-contain" />
          </div>
          <h3 class="font-bold mt-4">{{ item.title }}</h3>

          <div class="flex flex-col items-center gap-2 mt-4">
            <UiBonusTag v-for="tag in item.sign_up_bonuses" :title="tag.title" :key="tag.id"
              :description="tag.description" :bonuscode="tag.bonus_code" />
          </div>
          <div class="mt-auto flex w-full">
            <NuxtLink href="/"
              class="py-3 px-6 rounded-[4px] bg-accent leading-[100%] text-white w-full text-center transition-colors duration-200 ease-in-out hover:bg-accentHover">
              Visit</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <h2 class="h2">All online casinos</h2>
      <p></p>
      <div class="grid mt-8 grid-cols-[2fr_1fr] gap-4 items-start md:grid-cols-1 lg:mt-6">
        <div class="flex flex-col gap-4 md:order-2">
          <div class="flex p-4 rounded-[4px] border border-grayLight" :key="item.id" v-for="item in casinos.data">
            <h2 class="font-bold w-1/2">{{ item.title }}</h2>
            <div class="flex">
              <UiBonusTag v-for="tag in item.sign_up_bonuses" :title="tag.title" :description="tag.description"
                :bonuscode="tag.bonus_code" />
            </div>
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <div class="content" v-html="page.description_footer"></div>
    </div>
  </section>
  <SectionsSpacer />
  <Subscribe class="mt-32" title="Awesome Bonuses,<br> New Casinos, and Much More!"
    description="Subscribe now to TopBonuse's free newsletter to be updated with the best bonus offers on our website, latest casinos and a selection of gambling related news & guides!" />
</template>

<style></style>
