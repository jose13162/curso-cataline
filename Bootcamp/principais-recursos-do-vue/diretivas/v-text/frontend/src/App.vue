<template>
  <!-- Dessas duas formas funciona do mesmo jeito. -->
  <h1>{{ company }}</h1>
  <h1 v-text="company"></h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      company: "Cataline",
    };
  },
});
</script>
