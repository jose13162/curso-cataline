<template>
  <h1 :class="['static', { 'text-danger': hasError }, className]">
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
      className: "success",
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
