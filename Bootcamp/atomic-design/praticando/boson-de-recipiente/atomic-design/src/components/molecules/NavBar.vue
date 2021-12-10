<template>
  <anv class="nav-bar">
    <NavItem text="Serviços" to="/serices" />
    <NavItem text="Sobre mim" to="/about" />
    <NavItem text="Cases" to="/cases" />
    <NavItem text="Contato" to="/contact" />
  </anv>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavItem } from "@/components/atoms";

export default defineComponent({
  components: {
    NavItem,
  },
});
</script>

<style lang="scss" scoped>
.nav-bar {
  width: max-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2.5rem;
}
</style>
