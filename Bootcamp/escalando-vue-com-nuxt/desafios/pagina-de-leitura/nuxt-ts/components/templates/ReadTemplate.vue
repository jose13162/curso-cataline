<template>
  <div class="read-template">
    <h3 class="book-title">{{ $book.title }}</h3>
    <PageSlider @pageChange="changePage($event)" />
    <PageReader :pageNumber="pageNumber" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { books } from "@/store";

export default Vue.extend({
  data() {
    return {
      pageNumber: 1,
    };
  },
  computed: {
    $book() {
      return books.$single;
    },
  },
  methods: {
    changePage(pageNumber: number) {
      if (this.$book.pages.length > 1) {
        console.log(this.$book.pages.length);
        console.log(this.pageNumber);
        this.pageNumber += pageNumber;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.book-title {
  font-weight: bold;
}
</style>
