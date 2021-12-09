import Todos from "./api/todos";
import "./assets/css/main.css";

const exec = async () => {
  const todos = new Todos();

  const response = await todos.destroy({ id: 9 });

  console.log(response);
};

exec();
