<script setup>
const props = defineProps(["data"]);

const isCopyed = ref(false);
const copy = (bonuscode) => {
  try {
    navigator.clipboard.writeText(bonuscode);
    isCopyed.value = true;
    console.log(isCopyed.value);
  } catch (error) {
    console.log(error);
    isCopyed.value = false;
  }
};
</script>

<template>
  <div class="border border-neutral-200 p-5 rounded-lg relative lg:p-4">
    <div class="flex gap-10 lg:gap-4 md:flex-col-reverse">
      <div class="grow">
        <NuxtLink :to="`bonuses/${data.slug}`">
          <h3 class="text-2xl font-medium md:text-xl sm:text-lg">
            {{ data.title }}
          </h3>
        </NuxtLink>

        <hr class="text-neutral-200 my-4 md:hidden" />

        <div
          class="flex items-center mt-2 md:mt-4 sm:flex-col sm:items-start sm:gap-4"
        >
          <div class="flex items-center gap-2">
            <div
              class="w-[32px] h-[24px] rounded-sm bg-black md:w-7 md:h-5"
            ></div>
            <div class="leading-[100%] text-gray">
              {{ dateFormat(data.created_at) }}
            </div>
          </div>

          <div
            class="ml-auto flex items-center gap-1 sm:ml-0 sm:absolute sm:top-4 sm:right-4 sm:bg-green sm:text-white sm:py-1 sm:ps-2 sm:pe-3 sm:rounded-[4px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              class="w-6 h-6 stroke-green sm:stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <div class="text-green leading-[100%] sm:text-white">
              Expires in: {{ data.expired_date }}
            </div>
          </div>
        </div>

        <div class="mt-5 md:mt-4">
          <p>Bonus Code:</p>
          <div class="flex flex-col gap-2 mt-2 md:mt-1">
            <div
              v-if="isCopyed === false"
              @click="copy(data.bonus_code)"
              class="border-2 border-red-600 font-medium cursor-pointer uppercase border-dashed leading-[100%] rounded-md pt-[11px] pb-[12px] px-2 w-full text-center lg:pt-[7px] lg:pb-2"
            >
              {{ data.bonus_code }}
            </div>

            <div
              v-else
              @click="copy(bonuscode)"
              class="w-full pt-[11px] pb-[12px] px-2 bg-green text-white border-2 border-green cursor-pointer text-center rounded-md leading-[100%]"
            >
              Copied to Clipboard
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-4 mt-10 lg:mt-6">
          <!-- Item -->
          <div class="flex divide-dashed items-center justify-between">
            <p class="text-gray leading-[100%]">Bonus:</p>
            <div
              class="grow border-b border-neutral-400 h-[1px] mt-auto mx-2"
            ></div>
            <NuxtLink
              :to="'/bonuses/type/' + data.bonus_type.slug"
              class="link__inline underline leading-[100%]"
              >{{ data.bonus_type.title }}</NuxtLink
            >
          </div>
          <div
            class="flex divide-dashed items-center justify-between sm:flex-col sm:items-start sm:gap-1 sm:flex-wrap"
          >
            <p class="text-gray leading-[100%]">Game types:</p>
            <div
              class="grow border-b border-neutral-400 h-[1px] mt-auto mx-2"
            ></div>
            <div class="flex gap-1">
              <NuxtLink
                v-for="item in data.game_types"
                class="leading-[100%] text-sm bg-green text-white py-1 px-2 rounded-sm"
                >{{ item.title }}</NuxtLink
              >
            </div>
          </div>
          <div class="flex divide-dashed items-center justify-between">
            <p class="text-gray leading-[100%]">WR:</p>
            <div
              class="grow border-b border-neutral-400 h-[1px] mt-auto mx-2"
            ></div>
            <p class="leading-[100%]">{{ data.wagering }}</p>
          </div>
          <div class="flex divide-dashed items-center justify-between">
            <p class="text-gray leading-[100%]">Max cash out:</p>
            <div
              class="grow border-b border-neutral-400 h-[1px] mt-auto mx-2"
            ></div>
            <p class="leading-[100%]">{{ data.max_cash_out }}</p>
          </div>
        </div>
      </div>

      <div class="w-[300px] flex flex-col items-center lg:w-[200px] md:w-full">
        <div class="w-full rounded-lg overflow-hidden">
          <NuxtLink to="/casino/slug" class="bg-black block">
            <img
              class="w-full h-auto object-contain"
              :src="data.casino_logo"
              :alt="data.casino.title"
            />
          </NuxtLink>
        </div>
        <p
          class="text-sm py-2 px-4 bg-neutral-100 mt-4 rounded-lg lg:mt-2 lg:p-0 lg:bg-white lg:text-gray lg:leading-[120%] md:hidden"
        >
          No several consecutive free bonuses are allowed. In order to use this
          bonus, please make a deposit in case your last session was with a free
          bonus. Good luck and enjoy!
        </p>
      </div>
    </div>
  </div>
</template>

<style></style>
