<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count++">Incrementar</button>
    <button @click="destroyComponent">Desmontar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    destroyComponent() {
      this.$.appContext.app.unmount();
    },
  },
  beforeUnmount() {
    console.log("Antes de desmontar");
  },
  unmounted() {
    console.log("Depois de desmontar");
  },
});
</script>
