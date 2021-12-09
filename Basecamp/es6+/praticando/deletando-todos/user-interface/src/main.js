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
        done: false,
      };
      this.todos.push(todo);
    },
    async toggleTodoStatus(todo) {
      const data = await apiTodos.update({
        ...todo,
        done: !todo.done,
      });
      const index = this.todos.findIndex(todo => todo.id === data.id);
      this.todos[index] = data;
    },
    async destroyTodo(id) {
      await apiTodos.destroy({ id });
      const index = this.todos.findIndex(todo => todo.id === id);
      this.todos.splice(index, 1);
    },
  },
});

app.mount("#app");
