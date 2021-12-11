import Route from "@ioc:Adonis/Core/Route";

Route.get("/posts", "Posts/MainController.index").middleware("auth");
Route.post("/posts", "Posts/MainController.store").middleware("auth");
Route.put("/posts/:id", "Posts/MainController.update").middleware("auth");
Route.delete("/posts/:id", "Posts/MainController.destroy").middleware("auth");

Route.post("/posts/:id/media", "Posts/MediaController.store").middleware("auth");
