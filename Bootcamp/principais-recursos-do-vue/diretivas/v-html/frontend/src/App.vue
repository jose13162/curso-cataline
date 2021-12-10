<template>
  <h1>Posts</h1>
  <div class="post">
    <span v-html="post"></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      post:
        "<p>Visitem meu novo site, basta clicar nesse link: <a href='https://station.cataline.io' target='__blank'>link</a></p>",
    };
  },
});
</script>
