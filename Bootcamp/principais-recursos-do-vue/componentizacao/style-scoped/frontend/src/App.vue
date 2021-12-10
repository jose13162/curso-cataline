<template>
  <ButtonStyled />
  <button class="button-styled">Botão estilizado</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStyled from "@/components/ButtonStyled.vue";

export default defineComponent({
  components: {
    ButtonStyled,
  },
});
</script>
