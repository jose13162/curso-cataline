import Route from "@ioc:Adonis/Core/Route";

Route.post("/comments", "Comments/MainController.store").middleware("auth");
Route.put("/comments/:id", "Comments/MainController.update").middleware("auth");
Route.delete("/comments/:id", "Comments/MainController.destroy").middleware("auth");
