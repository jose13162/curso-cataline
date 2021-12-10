<template>
  <div class="container">
    <div class="heading">
      <div class="heading-image">
        <img src="@/assets/images/astronaut.svg" alt="" />
      </div>
      <div class="heading-text">
        <h2>Perguntas frequentes</h2>
        <p>Escolha a categoria desejada</p>
      </div>
    </div>
    <div class="categories">
      <ul>
        <li
          class="category-item"
          v-for="category in $faqCategories"
          :key="category.id"
          @click="
            changeCategory(category.id - 1),
              $emit('viewChange', 'CategoryQuestions')
          "
        >
          <img
            class="category-icon"
            :src="require(`../assets/images/${category.icon}`)"
          />
          {{ category.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchFaqCategories");
  },
  computed: {
    $faqCategories() {
      return this.$store.getters.$faqCategories;
    },
  },
  methods: {
    changeCategory(index) {
      this.$store.dispatch("fetchFaqCategory", index);
    },
  },
};
</script>

<style scoped>
.heading .heading-image {
  display: grid;
  justify-content: center;
}
.heading .heading-text {
  padding: 1.1rem 1.875rem 2.125rem;
}
.heading .heading-text h2 {
  font-size: 1.25rem;
  color: #f5f6f8;
}
.heading .heading-image img {
  width: 242px;
}
.heading .heading-text p {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
.categories {
  list-style: none;
}
.category-item {
  color: #f5f6f8;
  padding: 1rem 1.875rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2.125rem;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
}
.categories .category-item img {
  width: 1.5rem;
}
.categories .category-item:hover {
  background-color: #3f4452;
}
</style>
