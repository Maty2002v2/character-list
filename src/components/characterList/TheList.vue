<template>
  <div class="list animate__animated animate__fadeIn">
    <div class="list__list">
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
.list {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 70px;
    max-width: 1290px;
    box-sizing: border-box;
  }
}

@media only screen and (max-width: $extra-small) {
  .list {
    &__list {
      justify-content: center;
    }
  }
}
</style>
