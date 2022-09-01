<template>
  <div>
    <app-modal :isShow="isShow" @closeModal="hiddenModal">
      <div class="description-character">
        <button class="description-character__back-button" @click="hiddenModal">
          <i class="demo-icon icon-left"></i> Back
        </button>
        <img
          class="description-character__image"
          v-lazy="{
            src: character.image,
            loading:
              'https://c.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif',
          }"
          alt="image"
        />
        <div class="description-character__content">
          <h1 class="description-character__h1">{{ character.name }}</h1>
          <p class="description-character__p">status {{ character.status }}</p>
          <p class="description-character__p">
            species {{ character.species }}
          </p>
          <p class="description-character__p">type {{ character.type }}</p>
          <p class="description-character__p">gender {{ character.gender }}</p>
          <p class="description-character__p">
            created {{ character.created }}
          </p>
        </div>
      </div>
    </app-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import AppModal from "../AppModal.vue";

import { useMainStore } from "../../stores/MainStore";

import CharacterType from "../../types/CharacterType";

export default defineComponent({
  name: "TheDescriptionCharacterModal",
  props: {
    character: {
      type: Object as PropType<CharacterType>,
      required: true,
    },
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    AppModal,
  },
  setup() {
    const { setShowDescriptionModal } = useMainStore();

    const hiddenModal = () => {
      setShowDescriptionModal(false);
      document.documentElement.style.overflow = "visible";
    };

    return { hiddenModal };
  },
});
</script>

<style lang="scss" scoped>
.description-character {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  max-width: 300px;
  padding: 10px 30px;
  background-color: $color-elements;

  &__back-button {
    width: 70px;
    height: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: none;
    color: $color-text;
    background-color: $color-elements;
    cursor: pointer;
  }

  &__image {
    width: 100%;
    height: auto;
  }

  &__h1 {
    overflow: hidden;
    font-size: 1.5vw;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
