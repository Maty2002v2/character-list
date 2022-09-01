<template>
  <div class="character-list">
    <the-list-finder />

    <the-list v-show="!loadingList" @listItemHasSelected="showSelectedItem" />

    <app-loader v-show="loadingList" />

    <teleport to="#modal">
      <the-description-character-modal
        :character="selectedCharacter"
        :isShow="showDescriptionModal"
      />
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import TheList from "./TheList.vue";
import TheDescriptionCharacterModal from "./TheDescriptionCharacterModal.vue";
import TheListFinder from "./TheListFinder.vue";
import AppLoader from "../AppLoader.vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "../../stores/MainStore";

import CharacterType from "../../types/CharacterType";

export default defineComponent({
  name: "TheCharacterList",
  components: {
    TheList,
    TheDescriptionCharacterModal,
    TheListFinder,
    AppLoader,
  },
  setup() {
    const { showDescriptionModal, loadingList } = storeToRefs(useMainStore());
    const { setShowDescriptionModal } = useMainStore();

    let selectedCharacter = ref({});

    const showSelectedItem = (character: CharacterType) => {
      selectedCharacter.value = character;
      setShowDescriptionModal(true);
      document.documentElement.style.overflow = "hidden";
    };

    return {
      selectedCharacter,
      showDescriptionModal,
      loadingList,
      showSelectedItem,
    };
  },
});
</script>

<style lang="scss" scoped>
.character-list {
  margin: 10px 50px;
}
</style>
