<template>
  <ol class="breadcrumb flex gap-2 text-sm leading-[100%] md:flex-wrap">
    <li class="item">
      <nuxt-link :to="'/'" class="title"> Home </nuxt-link>
    </li>
    <li v-for="(item, i) in crumbs" :key="i" class="flex gap-2">
      <div>–</div>
      <nuxt-link :to="item.to" class="title">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ol>
</template>

<script>
export default {
  name: "Breadcrumb",
  computed: {
    crumbs() {
      const pathArray = this.$route.path.split("/");
      pathArray.shift();
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          title: path,
        });
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    },
  },
};
</script>

<style lang="scss" scoped></style>
