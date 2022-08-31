<template>
  <div style="overflow: hidden">
    <the-list @listItemHasSelected="showSelectedItem" />

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

import { storeToRefs } from "pinia";
import { useMainStore } from "../../stores/MainStore";

import CharacterType from "../../types/CharacterType";

export default defineComponent({
  name: "TheCharacterList",
  components: {
    TheList,
    TheDescriptionCharacterModal,
  },
  setup() {
    const { showDescriptionModal } = storeToRefs(useMainStore());
    const { setShowDescriptionModal } = useMainStore();

    let selectedCharacter = ref({});

    const showSelectedItem = (character: CharacterType) => {
      selectedCharacter.value = character;
      setShowDescriptionModal(true);
      document.documentElement.style.overflow = "hidden";
    };

    return { selectedCharacter, showDescriptionModal, showSelectedItem };
  },
});
</script>
