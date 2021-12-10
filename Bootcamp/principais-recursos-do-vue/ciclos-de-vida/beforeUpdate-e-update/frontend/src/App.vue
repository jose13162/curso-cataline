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
  beforeUpdate() {
    console.log("Antes de atualizar");
  },
  updated() {
    console.log("Depois da atualização");
  },
});
</script>
