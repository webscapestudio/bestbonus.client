<template>
  <section class="bg-blackLight py-16 text-white lg:py-10">
    <div class="container">
      <div
        class="flex flex-col mx-auto items-center max-w-[640px] md:max-w-[480px] sm:max-w-none"
      >
        <div>
          <img
            src="~/assets/img/email.svg"
            class="w-[64px] h-auto block lg:w-[48px]"
            alt="Email"
          />
        </div>

        <h3
          class="text-center text-[28px] font-bold mt-5 leading-[110%] lg:text-[24px] lg:mt-4"
          v-html="title"
        ></h3>

        <p
          class="text-gray-400 mt-4 text-center lg:mt-3 lg:text-sm"
          v-html="description"
        ></p>

        <div class="flex gap-2 mt-8 w-full sm:flex-col">
          <input
            class="pt-[14px] pb-[15px] grow px-[19px] rounded-[4px] leading-[100%] text-black"
            type="email"
            placeholder="Subscribe to our newsletter"
          />
          <button
            class="block pt-[14px] pb-[15px] px-[24px] bg-orange leading-[100%] text-white rounded-[4px]"
          >
            Subscribe
          </button>
        </div>
        <p class="text-gray text-center mt-2 leading-[130%]">
          By signing up you are certifying that you have read and accepted
          TopBonus <br class="md:hidden" />
          <a href="#" class="link__inline">Terms & Conditions</a> and
          <a href="#" class="link__inline">Privacy Policy </a>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(["title", "description"]);
</script>

<style></style>
