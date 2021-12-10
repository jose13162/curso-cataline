<template>
  <button @click="show = !show">toggle</button>

  <transition
    enter-active-class="animate__animated animate__slideInLeft"
    leave-active-class="animate__animated animate__slideOutLeft"
    @after-enter="afterEnter"
  >
    <h1 v-if="show">Cataline</h1>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  methods: {
    afterEnter(el: HTMLElement) {
      el.classList.add("background");
    },
  },
});
</script>

<style scoped>
.background {
  background-color: red;
}
</style>
