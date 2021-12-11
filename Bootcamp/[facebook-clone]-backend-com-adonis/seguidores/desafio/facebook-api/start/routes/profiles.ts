import Route from "@ioc:Adonis/Core/Route";

Route.get("/profiles", "Profiles/MainController.show").middleware("auth");
