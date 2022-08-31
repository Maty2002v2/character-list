import axios from "axios";
import { defineStore } from "pinia";

// import CharacterType from "../types/CharacterType"
import ResultApiCharacter from "../types/ResultApiCharacter";

export const useCharacterApiStore = defineStore("CharacterApi", {
  state: () => {
    return {
      resultApi: Object as unknown as ResultApiCharacter,
    };
  },
  getters: {
    characterData: (state) => state.resultApi.results,
  },
  actions: {
    async fetchData() {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => (this.resultApi = response.data));
    },
  },
});
