import Route from "@ioc:Adonis/Core/Route";

Route.get("/posts", "Posts/MainController.index");
Route.post("/posts", "Posts/MainController.store").middleware("auth");
Route.put("/posts/:id", "Posts/MainController.update").middleware("auth");
Route.get("/posts/:id", "Posts/MainController.index").middleware("auth");
