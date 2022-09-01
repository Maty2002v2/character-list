<template>
  <Transition
    enter-active-class="animate__animated animate__faster  animate__fadeIn"
    leave-active-class="animate__animated animate__faster animate__fadeOut"
  >
    <div class="app-modal" v-show="isShow">
      <Transition
        enter-active-class="animate__animated animate__faster animate__bounceIn"
        leave-active-class="animate__animated animate__faster animate__fadeOut"
      >
        <div v-show="isShow" class="app-modal__slot">
          <slot></slot>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppModal",
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.app-modal {
  position: fixed;
  top: 0px;
  left: 0px;

  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100%;
  padding-top: 4vh;
  box-sizing: border-box;

  background: rgba($color: #000000, $alpha: 0.4);

  &__slot {
    max-width: 500px;
    margin: 0px 20px;
    cursor: default;
  }
}
@media only screen and (max-width: 300px) {
  .app-modal {
    min-height: 120vh;
  }
}
</style>
