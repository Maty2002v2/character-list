import axios from "axios";
import { defineStore, storeToRefs } from "pinia";

import { useMainStore } from "./MainStore";

import ResultApiCharacter from "../types/ResultApiCharacter";

export const useCharacterApiStore = defineStore("CharacterApi", {
  state: () => {
    return {
      resultApi: Object as unknown as ResultApiCharacter,
    };
  },
  getters: {
    characterData: (state) => {
      const { phraseToFilter } = storeToRefs(useMainStore());

      return state.resultApi.results.filter((character) =>
        character.name
          .toLowerCase()
          .includes(phraseToFilter.value.toLowerCase())
      );
    },
  },
  actions: {
    async fetchData() {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => (this.resultApi = response.data));
    },
  },
});
