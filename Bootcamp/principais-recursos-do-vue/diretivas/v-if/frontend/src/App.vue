<template>
  <p v-if="gender == 'masculino'">Masculino</p>
  <p v-else-if="gender == 'feminino'">Feminino</p>
  <p v-else>Outro</p>
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
