<template>
  <div class="services">
    <Service
      title="Front-ent"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo impedit repudiandae saepe. Rerum, repellat rem blanditiis eveniet eius earum a nesciunt exercitationem veniam ipsa voluptates vero? Qui rem quasi a!"
    />
    <Service
      title="Back-end"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo impedit repudiandae saepe. Rerum, repellat rem blanditiis eveniet eius earum a nesciunt exercitationem veniam ipsa voluptates vero? Qui rem quasi a!"
    />
    <Service
      title="Manutenção"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo impedit repudiandae saepe. Rerum, repellat rem blanditiis eveniet eius earum a nesciunt exercitationem veniam ipsa voluptates vero? Qui rem quasi a!"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Service } from "@/components/molecules";

export default defineComponent({
  components: { Service },
});
</script>

<style lang="scss" scoped>
.services {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
