<template>
  <div class="component">
    <Service
      title="Front-end"
      description="
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi deleniti vitae facilis eligendi delectus nesciunt quod saepe dolore repellat nulla exercitationem at cum cupiditate, ea, accusamus commodi accusantium, quibusdam aspernatur!"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Service } from "@/components/molecules";

export default defineComponent({
  components: {
    Service,
  },
});
</script>

<style lang="scss" scoped>
.component {
  margin: 5rem;
}
</style>
