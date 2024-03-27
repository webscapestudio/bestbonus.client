<script setup>
const mobileNavStore = useMobileNavStore();

const toggleMenu = () => {
  if (mobileNavStore.isOpen) {
    mobileNavStore.close();
  } else {
    mobileNavStore.open();
  }
};
</script>

<template>
  <div
    class="burger"
    :class="{ active: mobileNavStore.isOpen }"
    @click="toggleMenu"
  >
    <span class="top"></span>
    <span class="center"></span>
    <span class="bottom"></span>
  </div>
</template>

<style lang="scss">
.burger {
  @apply w-6 h-6 relative;

  &.active {
    .top {
      top: 11px;
      transform: rotate(45deg);
    }

    .center {
      width: 0;
      left: 50%;
    }

    .bottom {
      bottom: 11px;
      transform: rotate(-225deg);
    }
  }

  span {
    @apply bg-white absolute w-full h-[2px] transition-all duration-200 ease-out;
  }

  .top {
    top: 4px;
  }

  .center {
    top: 50%;
    transform: translateY(-50%);
  }

  .bottom {
    bottom: 4px;
  }
}
</style>
~/stores/counter
