<template>
  <Suspense>
    <template #default>
      <the-character-list />
    </template>
    <template #fallback>
      <app-loader />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheCharacterList from "./components/characterList/TheCharacterList.vue";
import AppLoader from "./components/AppLoader.vue";

export default defineComponent({
  props: {
    msg: String,
  },
  components: {
    TheCharacterList,
    AppLoader,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
