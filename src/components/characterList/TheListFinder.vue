<template>
  <div class="list-finder">
    <div class="list-finder__searched-phrase">
      <i class="list-finder__icon-loupe demo-icon icon-search"></i>
      <input
        type="text"
        class="list-finder__input-phrase"
        v-model="phrase"
        @input="debouncePhrase"
        placeholder="Search for a name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onUnmounted } from "vue";

import { useMainStore } from "../../stores/MainStore";
import { useCharacterApiStore } from "../../stores/CharacterApiStore";

export default defineComponent({
  name: "TheListFinder",
  setup() {
    const { setLoadingList, setIsError } = useMainStore();
    const { fetchData, setPhraseToFilter, setPageNumber } =
      useCharacterApiStore();

    let timeout = ref(null);

    onUnmounted(() => {
      clearInterval(timeout.value);
    });

    const phrase = ref("");

    const debouncePhrase = () => {
      if (timeout.value) {
        clearTimeout(timeout.value);
      }

      timeout.value = setTimeout(() => {
        setPageNumber(1);
        setPhraseToFilter(phrase.value);
        setLoadingList(true);
        fetchData()
          .then(() => {
            setIsError(false);
            setTimeout(() => setLoadingList(false), 500);
          })
          .catch(() => setIsError(true));
      }, 2000);
    };

    return { phrase, debouncePhrase };
  },
});
</script>

<style lang="scss" scoped>
.list-finder {
  position: relative;
  max-width: 1280px;
  margin: 40px 0px;

  &__icon-loupe {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  &__input-phrase {
    width: 350px;
    padding: 15px 40px;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px -5px rgb(66 68 90);

    color: $color-text;

    background-color: $color-elements;

    outline: none;
    transition: all 0.2s ease-out;

    &::placeholder {
      color: hsla(0, 0%, 100%, 0.73);
    }

    &:-ms-input-placeholder {
      color: hsla(0, 0%, 100%, 0.73);
    }

    &::-ms-input-placeholder {
      color: hsla(0, 0%, 100%, 0.73);
    }

    &:focus {
      display: flex;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      outline: none;
    }
  }
}

@media only screen and (max-width: $extra-small) {
  .list-finder {
    &__input-phrase {
      width: 100%;
    }
  }
}
</style>
