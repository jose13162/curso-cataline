<template>
  <ul>
    <li @click="view = 'Home'">Home</li>
    <li @click="view = 'About'">About</li>
    <li @click="view = 'Contact'">Contact</li>
  </ul>

  <transition
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__fadeOut"
    appear
    mode="out-in"
  >
    <component :is="view" />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "animate.css";
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
