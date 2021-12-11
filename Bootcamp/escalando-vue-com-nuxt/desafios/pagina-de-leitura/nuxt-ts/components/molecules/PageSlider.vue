<template>
  <div class="page">
    <button @click="$emit('pageChange', -1)">&lt;=</button>
    <button @click="$emit('pageChange', 1)">=&gt;</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { books } from "@/store";

export default Vue.extend({
  computed: {
    $book() {
      return books.$single;
    },
  },
});
</script>
