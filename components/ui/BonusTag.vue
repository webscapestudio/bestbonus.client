<template>
  <ClientOnly>
    <Popover class="text-black relative p-0">
      <PopoverButton class="p-0">
        <div
          class="tag bg-neutral-100 rounded-full border-neutral-800 leading-[100%] pt-[7px] pb-[8px] px-4"
          :class="bonuscode ? 'cursor-pointer' : 'cursor-default'"
          @click="showTooltip"
        >
          {{ title }}
        </div>
      </PopoverButton>

      <transition
        v-if="bonuscode"
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel class="absolute z-10 top-[calc(100%+8px)]">
          <div
            class="relative p-4 border rounded-xl border-grayLight bg-white w-80 block"
          >
            <!-- Close -->
            <PopoverButton class="absolute right-3 top-3 p-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke-width="2"
                class="w-6 h-6 stroke-black cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </PopoverButton>

            <h4 class="font-medium text-[18px]">{{ title }}</h4>
            <div class="mt-5">
              <div
                v-if="isCopyed === false"
                @click="copy(bonuscode)"
                class="w-full pt-[15px] pb-4 cursor-pointer text-center border-2 rounded-lg mt-2 leading-[100%] border-dashed"
              >
                {{ bonuscode }}
              </div>

              <div
                v-else
                @click="copy(bonuscode)"
                class="w-full pt-[15px] pb-4 bg-green text-white border-2 border-green cursor-pointer text-center rounded-lg mt-2 leading-[100%]"
              >
                Copied to Clipboard
              </div>
            </div>

            <p
              class="text-sm mt-2 leading-[110%]"
              v-html="description"
              v-if="description"
            ></p>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </ClientOnly>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const props = defineProps([
  "size",
  "style",
  "title",
  "description",
  "bonuscode",
]);

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

<style></style>
