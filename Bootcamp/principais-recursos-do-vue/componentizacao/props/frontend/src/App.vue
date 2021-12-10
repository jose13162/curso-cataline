<template>
  <ButtonStyled text="Cadastro" :user="user" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStyled from "@/components/ButtonStyled.vue";

interface User {
  id: number;
  name: string;
}

export default defineComponent({
  data() {
    return {
      user: {
        id: 1,
        name: "Jenna",
      } as User,
    };
  },
  components: {
    ButtonStyled,
  },
});
</script>
