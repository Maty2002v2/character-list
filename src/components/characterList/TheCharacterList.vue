<template>
  <div>
    <the-list />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import TheList from "./TheList.vue";

import { useCharacterApiStore } from "../../stores/CharacterApiStore";

export default defineComponent({
  name: "TheCharacterList",
  components: {
    TheList,
  },
  setup() {
    const { fetchData } = useCharacterApiStore();

    return { fetchData };
  },
});
</script>
