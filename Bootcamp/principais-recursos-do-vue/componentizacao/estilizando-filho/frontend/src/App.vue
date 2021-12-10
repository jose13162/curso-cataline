<template>
  <ButtonStyled />
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

<style scoped>
.button-styled {
  position: absolute;
  top: 45%;
}

::v-deep.button-styled span {
  color: #000;
}
</style>
