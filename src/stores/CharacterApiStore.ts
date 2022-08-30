import axios from "axios";
import { defineStore } from "pinia";

export const useCharacterApiStore = defineStore("CharacterApi", {
  state: () => {
    return {
      characterData: [],
    };
  },
  getters: {},
  actions: {
    async fetchData() {
      const { data } = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      console.log(data);
    },
  },
});
