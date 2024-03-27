<script setup>
const topLinks = [
  { id: 1, title: "Write For us", link: "/" },
  { id: 2, title: "Privacy Policy", link: "/privacy" },
  { id: 3, title: "Terms And Conditions", link: "/terms-and-conditions" },
  { id: 4, title: "Help Center", link: "/help" },
  { id: 5, title: "Contact Us", link: "/contact" },
  { id: 6, title: "About", link: "/about" },
  { id: 7, title: "Sitemap", link: "/sitemap" },
];
const links = [
  {
    id: 1,
    title: "Bonuses",
    links: [
      { id: 1, title: "Casino Bonus Blog", link: "/casino-bonus-blog" },
      { id: 2, title: "Exlusive bonuses", link: "/exclusive-bonuses" },
      { id: 3, title: "No Deposit Bonus", link: "/no-deposit-bonus" },
    ],
  },
  {
    id: 2,
    title: "Reviews",
    links: [
      { id: 1, title: "Online Casino reviews", link: "/online-casino-reviews" },
      { id: 2, title: "Best Online Casinos", link: "/best-online-casinos" },
      { id: 3, title: "New Online Casinos", link: "/new-online-casinos" },
    ],
  },
  {
    id: 2,
    title: "Reviews",
    links: [
      { id: 1, title: "Online Casino reviews", link: "/online-casino-reviews" },
      { id: 2, title: "Best Online Casinos", link: "/best-online-casinos" },
      { id: 3, title: "New Online Casinos", link: "/new-online-casinos" },
    ],
  },
  {
    id: 2,
    title: "Reviews",
    links: [
      { id: 1, title: "Online Casino reviews", link: "/online-casino-reviews" },
      { id: 2, title: "Best Online Casinos", link: "/best-online-casinos" },
      { id: 3, title: "New Online Casinos", link: "/new-online-casinos" },
    ],
  },
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <NuxtLink :to="item.link" v-for="item in topLinks" key="item.id">{{
          item.title
        }}</NuxtLink>
      </div>

      <div
        class="flex mt-5 gap-20 items-center md:items-start md:gap-10 sm:flex-col"
      >
        <div>
          <div class="w-40 h-40 bg-blackLight md:w-20 md:h-20"></div>
        </div>

        <div>
          <div class="flex gap-10 md:gap-10 md:flex-wrap">
            <div
              v-for="item in links"
              :key="item.id"
              class="flex flex-col gap-3"
            >
              <h4 class="font-bold text-red-600">{{ item.title }}</h4>

              <nav class="flex flex-col gap-2 text-sm">
                <NuxtLink :to="sub.link" v-for="sub in item.links">{{
                  sub.title
                }}</NuxtLink>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <hr class="text-neutral-700 my-5" />

      <!-- Socials -->
      <div class="flex flex-col items-center">
        <p class="text-grayLight text-sm max-w-lg text-center">
          DISCLAIMER: Participating in online games that involve wagering may be
          illegal in certain jurisdictions. Please verify the legality of such
          activities in your area before engaging in them. Chipy.com is not
          responsible for any actions you take.
        </p>

        <p class="font-bold text-xs mt-4 uppercase text-center">
          Gambling can be addictive. Play with caution.
        </p>
      </div>
    </div>
  </footer>

  <div class="bg-black text-white text-xs leading-[100%]">
    <div class="container">
      <div class="border-t border-neutral-700 py-4">
        <p>© Copyright 2024 - bonusescode.com All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply mt-auto pb-5 bg-black text-white;
}

.footer__top {
  @apply flex pt-5 pb-[19px] leading-[100%] gap-6 text-grayLight uppercase text-xs border-b border-neutral-700;
}

@screen sm {
  .footer__top {
    @apply gap-x-8 gap-y-4 flex-wrap;
  }
}
</style>
