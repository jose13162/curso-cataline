import Route from "@ioc:Adonis/Core/Route";

Route.put("/reactions", "Reactions/MainController.update").middleware("auth");
Route.delete("/reactions/:id", "Reactions/MainController.destroy").middleware("auth");
