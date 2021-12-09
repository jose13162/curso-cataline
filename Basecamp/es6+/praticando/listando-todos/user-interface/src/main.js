import { createApp } from "vue";
import Todos from "./api/todos";
import "./assets/css/main.css";

const apiTodos = new Todos();

const app = createApp({
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      this.todos = await apiTodos.index();
      console.log(this.todos)
    },
  },
});

app.mount("#app");
