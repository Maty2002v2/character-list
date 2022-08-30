<template>
  <div></div>
</template>

<script>
import { defineComponent } from "vue";

import { useCharacterApiStore } from "../../stores/CharacterApiStore";

export default defineComponent({
  name: "TheCharacterList",
  setup() {
    const { fetchData } = useCharacterApiStore();

    return { fetchData };
  },
});
</script>
