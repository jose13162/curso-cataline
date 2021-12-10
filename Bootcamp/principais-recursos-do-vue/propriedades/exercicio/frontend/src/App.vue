<template>
  <h1>Todos concluídos</h1>
  <ul>
    <li v-for="(todo, index) in doneTodos" :key="index">
      {{ todo.text }}
    </li>
  </ul>

  <h1>Todos para concluir</h1>
  <div v-if="undoneTodos.length == 0">
    <h2>Todos os todos foram concluídos</h2>
  </div>
  <ul>
    <li v-for="(todo, index) in undoneTodos" :key="index">
      {{ todo.text }}
      <button @click="todo.done = true">Finalizar todo</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Todo {
  text: string;
  done: boolean;
}

export default defineComponent({
  data() {
    return {
      todos: [] as Todo[],
    };
  },
  created() {
    this.todos = [
      { text: "Estudar Typescript", done: true },
      { text: "Lavar os pratos", done: false },
      { text: "Aprender Nuxt.js", done: true },
    ];
  },
  computed: {
    doneTodos(): Todo[] {
      const doneTodos = this.todos.filter((todo) => todo.done);
      return doneTodos;
    },
    undoneTodos(): Todo[] {
      const undoneTodos = this.todos.filter((todo) => !todo.done);
      return undoneTodos;
    },
  },
  watch: {
    undoneTodos() {
      if (this.undoneTodos.length == 0) {
        window.alert("Todos os ToDos foram completos.");
      }
    },
  },
});
</script>
