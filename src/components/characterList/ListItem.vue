<template>
  <div class="character-list-item">
    <img
      class="character-list-item__image"
      :src="character.image"
      alt="image"
    />
    <div class="character-list-item__content">
      {{ character.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import CharacterType from "../../types/CharacterType";

export default defineComponent({
  name: "ListItem",
  props: {
    character: {
      type: Object as PropType<CharacterType>,
    },
  },
  // setup() {

  // },
});
</script>

<style lang="scss" scoped>
.character-list-item {
  max-width: 200px;
  max-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &__image {
    width: 100%;
    height: auto;
  }

  &__content {
    padding: 5px;
    box-sizing: border-box;
  }
}
</style>
