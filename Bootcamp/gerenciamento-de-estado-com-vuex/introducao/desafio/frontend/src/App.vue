<template>
  <transition>
    <Container>
      <component :is="view" @viewChange="changeView($event)" />
    </Container>
  </transition>
</template>

<script>
import CategoryList from "../src/components/CategoryList.vue";
import CategoryQuestions from "../src/components/CategoryQuestions.vue";
import QuestionAnswers from "../src/components/QuestionAnswers.vue";
import Container from "../src/components/Container.vue";

export default {
  data() {
    return {
      view: "CategoryList",
    };
  },
  methods: {
    changeView(view) {
      this.view = view;
    },
  },
  components: {
    CategoryList,
    CategoryQuestions,
    QuestionAnswers,
    Container,
  },
};
</script>

<style scoped>
* {
  color: #f5f6f8;
}
</style>
