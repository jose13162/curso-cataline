<template>
  <HomeTemplate />
</template>

<script lang="ts">
import Vue from "vue";
import { books } from "@/store";

export default Vue.extend({
  layout: "ibook",
  asyncData() {
    // eslint-disable-next-line no-console
    console.log(books.books);
  },
});
</script>
