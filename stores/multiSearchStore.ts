import { defineStore } from "pinia";

export const useMultiSearchStore = defineStore("multiSearchStore", {
  state: () => ({
    isLoading: false,
    list: {},
  }),
  actions: {
    async getData(search) {
      this.isLoading = true;

      if (search.length < 3) {
        this.list = [];
      } else {
        const { data } = await useFetch(
          `http://149.154.68.150:8002/api/V1/search?search=${search}`
        );
        this.list = [];
        this.list.push(data.value);
      }
      this.isLoading = false;
    },
  },
});
