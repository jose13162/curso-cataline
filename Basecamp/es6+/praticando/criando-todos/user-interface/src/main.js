import { createApp } from "vue";
import Todos from "./api/todos";
import "./assets/css/main.css";

const apiTodos = new Todos();

const app = createApp({
  data() {
    return {
      todos: [],
      form: {
        text: "",
        done: false,
      },
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      this.todos = await apiTodos.index();
      console.log(this.todos);
    },
    async createTodo() {
      const todo = await apiTodos.store(this.form);
      this.form = {
        text: "",
        done: false
      }
      this.todos.push(todo);
    },
  },
});

app.mount("#app");
