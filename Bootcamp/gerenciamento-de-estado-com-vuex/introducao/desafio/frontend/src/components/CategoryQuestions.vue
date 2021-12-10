<template>
  <div>
    <h1>Lista de perguntas</h1>
    <LeftButton @click="$emit('viewChange', 'CategoryList')" />
    <li
      v-for="question in $questions"
      :key="question.id"
      @click="
        changeQuestion(question.id), $emit('viewChange', 'QuestionAnswers')
      "
    >
      {{ question.title }}
    </li>
  </div>
</template>

<script>
import LeftButton from "@/components/LeftButton.vue";

export default {
  components: {
    LeftButton,
  },
  created() {
    this.$store.dispatch("fetchQuestions");
  },
  computed: {
    $questions() {
      return this.$store.getters.$faqCategory.questions;
    },
  },
  methods: {
    changeQuestion(id) {
      this.$store.dispatch("fetchQuestion", id);
    },
  },
};
</script>
