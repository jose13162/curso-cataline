<template>
  <ButtonStyled text="Cadastro">
    <template v-slot:before>
      <i class="fab fa-facebook-square"></i>
    </template>
  </ButtonStyled>
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
