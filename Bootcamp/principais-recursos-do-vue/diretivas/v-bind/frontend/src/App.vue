<template>
  <a :href="product.url" :class="productClass">
    {{ product.name }}
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Product {
  name: string;
  url: string;
  stock: boolean;
}

export default defineComponent({
  data() {
    return {
      product: {
        name: "Camisa",
        url: "http://station.cataline.io",
        stock: true,
      } as Product,
    };
  },
  computed: {
    productClass(): string {
      return this.product.stock ? "success" : "danger";
    },
  },
});
</script>

<style scoped>
.danger {
  color: red;
}
.success {
  color: green;
}
</style>
