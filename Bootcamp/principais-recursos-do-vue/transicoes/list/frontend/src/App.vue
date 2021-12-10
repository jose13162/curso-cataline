<template>
  <button @click="orderAZ">a-Z</button>
  <button @click="orderZA">z-A</button>

  <transition-group
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    appear
  >
    <li v-for="user in users" :key="user">
      {{ user }}
    </li>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "animate.css";

export default defineComponent({
  data() {
    return {
      users: ["José", "Pedro", "Maria", "João", "Letícia", "Paulo", "Kauan"],
    };
  },
  methods: {
    orderAZ() {
      this.users.sort();
    },
    orderZA() {
      this.users.sort().reverse();
    },
  },
});
</script>

<style scoped>
.v-move {
  transition: all 0.5s;
}
</style>
