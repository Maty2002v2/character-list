<template>
  <div v-if="resultApi.info">
    <el-pagination
      layout="prev, pager, next"
      :total="resultApi.info.pages"
      :page-size="1"
      :background="true"
      :small="windowWidth < 550"
      :current-page="pageNumber"
      @current-change="currentChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";

import { storeToRefs } from "pinia";
import { useCharacterApiStore } from "../../stores/CharacterApiStore";
import { useMainStore } from "../../stores/MainStore";

export default defineComponent({
  name: "ThePagination",
  setup() {
    const { resultApi, pageNumber } = storeToRefs(useCharacterApiStore());
    const { fetchData, setPageNumber } = useCharacterApiStore();

    const { setLoadingList } = useMainStore();

    const windowWidth = ref(window.innerWidth);
    const onWidthChange = () => (windowWidth.value = window.innerWidth);

    onMounted(() => window.addEventListener("resize", onWidthChange));
    onUnmounted(() => window.removeEventListener("resize", onWidthChange));

    const currentChange = (value: number) => setPageNumber(value);
    watch(pageNumber, () => {
      setLoadingList(true);
      fetchData().then(() => setTimeout(() => setLoadingList(false), 500));
    });

    return { windowWidth, resultApi, pageNumber, currentChange };
  },
});
</script>
