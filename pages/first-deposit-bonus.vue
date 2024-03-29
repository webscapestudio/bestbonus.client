<script setup>
const { slug } = useRoute().params;

const { data: bonusCards } = await useApiFetch(
  `/bonus_types/first-deposit-bonus/bonuses`
);
</script>

<template>
  <section class="bg-blackLight py-16 text-white lg:py-12 md:py-10">
    <div class="container">
      <UiBreadcrumbs />
      <div class="flex mt-4">
        <div class="w-[600px]">
          <h1 class="h1 uppercase">First Deposit Bonus</h1>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-36">
    <div class="container">
      <div class="flex flex-col gap-4 md:order-2">
        <BonusCard v-for="item in bonusCards.data" :data="item" />
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
