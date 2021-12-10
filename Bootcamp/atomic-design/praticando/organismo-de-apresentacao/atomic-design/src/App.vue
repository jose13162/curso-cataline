<template>
  <div class="component">
    <Presentation />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Presentation } from "@/components/organisms";

export default defineComponent({
  components: {
    Presentation,
  },
});
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
