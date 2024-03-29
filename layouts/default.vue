<template>
  <NuxtLoadingIndicator color="red" />
  <div class="flex flex-col min-h-screen relative">
    <MobileNavigation />
    <Header />
    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style></style>
