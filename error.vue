<script setup>
definePageMeta({
  layout: "default",
});
</script>

<template>
  <NuxtLoadingIndicator color="red" />
  <div class="flex flex-col min-h-screen relative">
    <MobileNavigation />
    <Header />
    <main class="h-full">
      <section class="h-full flex items-center">
        <div class="container">
          <h1>404</h1>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>
