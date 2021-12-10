<template>
  <h1>Hello, {{ person.name }}!</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Person {
  name: string;
  age: number;
}

export default defineComponent({
  data() {
    return {
      person: {
        name: "José",
        age: 15,
      } as Person,
    };
  },
});
</script>
