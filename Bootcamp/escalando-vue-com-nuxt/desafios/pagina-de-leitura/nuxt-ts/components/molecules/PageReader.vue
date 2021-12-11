<template>
  <div class="page-reader">
    <p v-html="pageText"></p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { books } from "@/store";

export default Vue.extend({
  props: {
    pageNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    $book() {
      return books.$single;
    },
    pageText() {
      return this.$book.pages[this.$props.pageNumber].text;
    },
  },
});
</script>
