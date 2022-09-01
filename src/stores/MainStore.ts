import { defineStore } from "pinia";

export const useMainStore = defineStore("Main", {
  state: () => {
    return {
      showDescriptionModal: false,
      phraseToFilter: "",
      loadingList: false,
    };
  },
  actions: {
    setShowDescriptionModal(value: boolean) {
      this.showDescriptionModal = value;
    },
    setPhraseToFilter(value: string) {
      this.phraseToFilter = value;
    },
    setLoadingList(value: boolean) {
      this.loadingList = value;
    },
  },
});
