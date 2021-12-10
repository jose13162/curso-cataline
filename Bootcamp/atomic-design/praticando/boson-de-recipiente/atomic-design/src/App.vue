<template>
  <div class="component">
    <Container
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
      aperiam quibusdam vero mollitia eos voluptatem reprehenderit, possimus
      consectetur commodi numquam debitis aliquid nihil pariatur placeat
      suscipit ea molestiae velit quod.</Container
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container } from "@/components/bosons";

export default defineComponent({
  components: {
    Container,
  },
});
</script>

<style lang="scss" scoped>
.component {
}
</style>
