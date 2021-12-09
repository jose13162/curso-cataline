import Todos from "./api/todos";

const exec = async () => {
  const todos = new Todos();

  const response = await todos.destroy({ id: 9 });

  console.log(response);
};

exec();
