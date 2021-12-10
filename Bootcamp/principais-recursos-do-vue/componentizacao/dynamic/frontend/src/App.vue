<template>
  <ul>
    <li @click="this.view = 'Home'">Home</li>
    <li @click="this.view = 'About'">Sobre</li>
    <li @click="this.view = 'Contact'">Contato</li>
  </ul>
  <component :is="view" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Contact from "@/pages/Contact.vue";

export default defineComponent({
  data() {
    return {
      view: "Home",
    };
  },
  components: {
    Home,
    About,
    Contact,
  },
});
</script>
