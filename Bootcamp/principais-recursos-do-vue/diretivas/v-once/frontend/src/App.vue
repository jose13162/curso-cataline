<template>
  <p v-once>Estoque inicial: {{ stock }}</p>
  <p>Estoque atualizado: {{ stock }}</p>

  <button @click="stock++">Aumentar estoque</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      stock: 1,
    };
  },
});
</script>
