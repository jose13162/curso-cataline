<template>
  <h1>Hello</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  beforeCreate() {
    console.log("Antes da criação");
  },
  created() {
    console.log("Depois da criação");
  },
});
</script>
