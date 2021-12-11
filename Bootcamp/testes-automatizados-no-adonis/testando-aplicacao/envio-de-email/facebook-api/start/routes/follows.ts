import Route from "@ioc:Adonis/Core/Route";

Route.post("/follow", "Follows/FollowController.store").middleware("auth");
Route.post("/unfollow", "Follows/UnfollowController.store").middleware("auth");

Route.get("/followers", "Followers/MainController.index").middleware("auth");
Route.delete("/followers/:id", "Followers/MainController.destroy").middleware("auth");

Route.get("/followings", "Followings/MainController.index").middleware("auth");
