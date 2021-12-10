<template>
  <h1
    :class="{
      static: true,
      active: isActive,
      'text-danger': hasError,
    }"
  >
    Cataline
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: false,
    };
  },
});
</script>

<style scoped>
.static {
  font-weight: bold;
}
.active {
  color: blue;
}

.text-danger {
  background-color: red;
}
</style>
