import Route from "@ioc:Adonis/Core/Route";

Route.post("/messages", "Messages/MainController.store").middleware("auth");
