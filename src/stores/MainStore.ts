import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      showDescriptionModal: false,
    };
  },
  actions: {
    setShowDescriptionModal(value: boolean) {
      this.showDescriptionModal = value;
    },
  },
});
