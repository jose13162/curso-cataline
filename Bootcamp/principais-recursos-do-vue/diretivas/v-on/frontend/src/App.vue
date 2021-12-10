<template>
  <input type="text" @keyup="something" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    something() {
      console.log("Hello, cataline!");
    },
  },
});
</script>
