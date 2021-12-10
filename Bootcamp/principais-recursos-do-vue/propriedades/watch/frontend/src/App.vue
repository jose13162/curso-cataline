<template>
  <h1>{{ count }}</h1>

  <button @click="count++">Incrementar</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count(newValue, oldValue) {
      if (this.count == 5) {
        this.count += 1;
      }
    },
  },
});
</script>
