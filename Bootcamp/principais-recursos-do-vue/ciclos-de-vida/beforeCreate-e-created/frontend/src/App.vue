<template>
  <h1>Hello</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  beforeMount() {
    console.log(this.$el);
  },
  mounted() {
    console.log(this.$el);
  },
});
</script>
