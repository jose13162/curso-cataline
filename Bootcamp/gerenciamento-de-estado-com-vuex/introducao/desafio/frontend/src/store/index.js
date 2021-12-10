import { createStore } from "vuex";
import { faqCategories } from "@/utils/db.json";

export default createStore({
  state: {
    faqCategories: [],
    faqCategory: {},
    questions: [],
    question: {},
  },
  mutations: {
    SET_FAQCATEGORIES(state, faqCategories) {
      state.faqCategories = faqCategories;
    },
    SET_FAQCATEGORY(state, faqCategory) {
      state.faqCategory = faqCategory;
    },
    SET_QUESTIONS(state, questions) {
      state.questions = questions;
    },
    SET_QUESTION(state, question) {
      state.question = question;
    },
  },
  actions: {
    fetchFaqCategories(context) {
      const categories = faqCategories;

      context.commit("SET_FAQCATEGORIES", categories);
    },
    fetchFaqCategory(context, categoryIndex) {
      const category = faqCategories[categoryIndex];

      context.commit("SET_FAQCATEGORY", category);
    },
    fetchQuestions(context) {
      const questions = this.getters.$faqCategory.questions;

      context.commit("SET_QUESTIONS", questions);
    },
    fetchQuestion(context, questionId) {
      const questionIndex = this.getters.$faqCategory.questions.findIndex(
        (question) => question.id == questionId,
      );
      const question = this.getters.$faqCategory.questions[questionIndex];

      context.commit("SET_QUESTION", question);
    },
  },
  getters: {
    $faqCategories(state) {
      return state.faqCategories;
    },
    $faqCategory(state) {
      return state.faqCategory;
    },
    $questions(state) {
      return state.questions;
    },
    $question(state) {
      return state.question;
    },
  },
});
