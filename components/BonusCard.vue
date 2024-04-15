<script setup>
const props = defineProps(["data"]);

const isCopyed = ref(false);
const copy = (bonuscode) => {
  try {
    navigator.clipboard.writeText(bonuscode);
    isCopyed.value = true;
  } catch (error) {
    console.log(error);
    isCopyed.value = false;
  }
};
</script>

<template>
  <div
    class="border border-grayLight p-5 rounded-lg relative lg:p-4 md:p-[10px]"
  >
    <div class="flex gap-5 lg:gap-4 md:flex-col-reverse">
      <div class="grow">
        <div class="flex items-center gap-4">
          <div
            class="w-[64px] h-[64px] shrink-0 rounded-[4px] overflow-hidden hidden md:block"
          >
            <NuxtLink :to="`/bonuses/by-${data.slug}`" class="bg-black block">
              <img
                class="w-full h-auto object-contain"
                :src="data.casino_logo"
                :alt="data.casino.title"
              />
            </NuxtLink>
          </div>
          <NuxtLink :to="`/bonuses/${data.slug}`">
            <h3
              class="text-[24px] font-medium md:text-[18px] md:leading-[110%] sm:text-lg"
            >
              {{ data.title }}
            </h3>
          </NuxtLink>
        </div>

        <div class="flex gap-2 mt-3" v-if="data.softs.length > 0">
          <p>Software:</p>
          <div v-for="item in data.softs">{{ item.title }}</div>
        </div>

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

          <UiExpiredDays :days="data.expired_date" />
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
            <p class="text-gray leading-[100%]">Bonus Type:</p>
            <div
              class="grow border-b border-neutral-400 h-[1px] mt-auto mx-2"
            ></div>
            <NuxtLink
              :to="'/' + data.bonus_type.slug"
              class="link__inline underline leading-[100%]"
              >{{ data.bonus_type.title }}</NuxtLink
            >
          </div>
          <div
            v-if="data.game_types.length > 0"
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
          <div
            class="flex divide-dashed items-center justify-between"
            v-if="data.max_cash_out"
          >
            <p class="text-gray leading-[100%]">Max cash out:</p>
            <div
              class="grow border-b border-neutral-400 h-[1px] mt-auto mx-2"
            ></div>
            <p class="leading-[100%]">{{ data.max_cash_out }}</p>
          </div>

          <div class="mt-8">
            <h4 class="text-sm font-bold text-neutral-600">
              Claim this bonus at
            </h4>

            <div class="flex flex-col gap-4 mt-4">
              <div
                class="flex items-center sm:flex-col sm:items-start sm:gap-2"
                v-for="item in data.casinos"
              >
                <h3 class="font-bold">{{ item.title }}</h3>

                <div class="flex gap-2 ml-auto sm:ml-0">
                  <NuxtLink
                    :to="'/casinos/' + item.slug"
                    class="leading-[100%] rounded-[2px] pt-2 pb-[9px] px-6 bg-neutral-300"
                    >Review
                  </NuxtLink>
                  <NuxtLink
                    target="_blank"
                    :to="item.link"
                    class="leading-[100%] text-white rounded-[2px] pt-2 pb-[9px] px-6 bg-accent"
                    >Visit
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-[240px] flex flex-col items-center lg:w-[200px] md:hidden">
        <div class="w-full rounded-lg overflow-hidden">
          <NuxtLink :to="`/bonuses/by-${data.slug}`" class="bg-black block">
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
