import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      showDescriptionModal: false,
      loadingList: false,
      isError: false,
    };
  },
  actions: {
    setShowDescriptionModal(value: boolean) {
      this.showDescriptionModal = value;
    },
    setLoadingList(value: boolean) {
      this.loadingList = value;
    },
    setIsError(value: boolean) {
      this.isError = value;
    },
  },
});
