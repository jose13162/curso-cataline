import express from "express";

const app = express();


// get
app.get("/users", (request, response) => {
  return response.json([
    "user 1",
    "user 2",
    "user 3"
  ]);
});

// post
app.post("/users", (request, response) => {
  return response.json({ message: "Criando usuário" });
});

// put
app.put("/users", (request, response) => {
  return response.json({ message: "Atualizando usuário" });
});

// delete
app.delete("/users", (request, response) => {
  return response.json({ message: "Deletando usuário" });
});


app.listen("8080", () => {
  console.log("Servidor rodando em http://localhost:8080");
});