<template>
  <Container class="home-template">
    <Header />
    <Presentation />
    <Services />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container } from "@/components/bosons";
import { Header, Presentation, Services } from "@/components/organisms";

export default defineComponent({
  components: {
    Header,
    Presentation,
    Services,
    Container,
  },
});
</script>

<style lang="scss" scoped>
.home-template {
  margin: 5rem auto;
  display: grid;
  grid-gap: 5rem;
}
</style>
