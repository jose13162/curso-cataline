<template>
  <p v-show="gender == 'masculino'"></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      gender: "masculino",
    };
  },
});
</script>
