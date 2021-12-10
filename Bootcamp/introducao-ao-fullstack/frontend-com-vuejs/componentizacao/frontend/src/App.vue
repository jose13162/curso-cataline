<template>
  <Header />

  <h1>Hello, world!</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";

export default defineComponent({
  components: {
    Header,
  },
});
</script>
