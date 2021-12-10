import express from "express";
const app = express();


app.use(express.json());


app.get("/users", (request, response) => {
  const { perPage, currentPage } = request.query;
  console.log(perPage, currentPage);
  return response.json({});
});

app.post("/users", (request, response) => {
  const body = request.body;
  console.log(body)
  return response.json({ message: "Criando usuário" });
});

app.put("/users/:id", (request, response) => {
  const { id } = request.params;
  return response.json({ message: "Atualizando usuário" });
});

app.delete("/users", (request, response) => {
  return response.json({ message: "Deletando usuário" });
});


app.listen("8080", () => {
  console.log("Servidor rodando em http://localhost:8080");
});