<template>
  <ButtonStyled text="Cadastro" @action="action($event)">
    <template v-slot:before>
      <i class="fab fa-facebook-square"></i>
    </template>
  </ButtonStyled>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ButtonStyled from "@/components/ButtonStyled.vue";

export default defineComponent({
  data() {
    return {
      text: "",
    };
  },
  components: {
    ButtonStyled,
  },
  methods: {
    action(event: string) {
      console.log(event);
    },
  },
});
</script>
