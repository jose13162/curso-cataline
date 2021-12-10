<template>
  <h1>Hello, {{ fullName }}!</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "José",
      lastname: "Matos",
    };
  },
  computed: {
    fullName(): string {
      return `${this.name} ${this.lastname}`;
    },
  },
});
</script>
