import axios from "axios";
import { defineStore } from "pinia";

import ResultApiCharacter from "../types/ResultApiCharacter";

export const useCharacterApiStore = defineStore("CharacterApi", {
  state: () => {
    return {
      resultApi: Object as unknown as ResultApiCharacter,
      phraseToFilter: "",
      pageNumber: 1,
    };
  },
  getters: {
    characterData: (state) => state.resultApi.results,
    url: (state) => {
      let url = "https://rickandmortyapi.com/api/character/";

      url += `?page=${state.pageNumber}`;

      if (state.phraseToFilter.length) {
        url += `&name=${state.phraseToFilter}`;
      }

      return url;
    },
  },
  actions: {
    async fetchData() {
      await axios
        .get(this.url)
        .then((response) => (this.resultApi = response.data));
    },
    setPhraseToFilter(value: string) {
      this.phraseToFilter = value;
    },
    setPageNumber(value: number) {
      this.pageNumber = value;
    },
  },
});
