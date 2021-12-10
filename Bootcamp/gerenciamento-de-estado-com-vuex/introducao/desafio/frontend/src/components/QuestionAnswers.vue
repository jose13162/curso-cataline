<template>
  <div>
    <h1>Resposta</h1>
    <LeftButton @click="$emit('viewChange', 'CategoryQuestions')" />
    <div v-html="$question.content"></div>
  </div>
</template>

<script>
import LeftButton from "@/components/LeftButton.vue";

export default {
  components: {
    LeftButton,
  },
  computed: {
    $question() {
      return this.$store.getters.$question;
    },
  },
};
</script>
