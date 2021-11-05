import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => {
    return { collapsed: false };
  },
  actions: {
    changeStatus() {
      this.collapsed = !this.collapsed;
    },
  },
});
