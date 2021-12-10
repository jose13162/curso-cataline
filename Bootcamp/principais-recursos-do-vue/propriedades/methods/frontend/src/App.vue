<template>
  <h1>{{ count }}</h1>

  <button @click="incrementCount">Incrementar</button>
  <button @click="decreaseCount">Diminuir</button>
  <button @click="resetCount">Resetar</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count += 1;
    },
    decreaseCount() {
      this.count -= 1;
    },
    resetCount() {
      this.count = 0;
    },
  },
});
</script>
