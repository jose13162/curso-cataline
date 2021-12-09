import { createApp } from "vue";
import Todos from "./api/todos";
import "./assets/css/main.css";

const apiTodos = new Todos();

const app = createApp({
  data: () => {
    return {};
  },
  created: () => {
    console.log("Página criada");
  },
  methods: {}
});

app.mount("#app");
