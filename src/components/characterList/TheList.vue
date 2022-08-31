<template>
  <div class="character-list animate__animated animate__fadeIn">
    <div class="character-list__list">
      <list-item
        v-for="(character, index) in characterData"
        :key="index"
        :character="character"
        @click="$emit('listItemHasSelected', character)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { storeToRefs } from "pinia";

import ListItem from "./ListItem.vue";

import { useCharacterApiStore } from "../../stores/CharacterApiStore";

export default defineComponent({
  name: "TheList",
  components: {
    ListItem,
  },
  async setup() {
    const { characterData } = storeToRefs(useCharacterApiStore());
    const { fetchData } = useCharacterApiStore();

    await fetchData();

    return { characterData };
  },
});
</script>

<style lang="scss" scoped>
.character-list {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
    padding: 40px;
    box-sizing: border-box;
  }
}
</style>
