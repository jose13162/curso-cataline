import Route from "@ioc:Adonis/Core/Route";

Route.post("/follow", "Follows/FollowController.store").middleware("auth");
Route.post("/unfollow", "Follows/UnfollowController.store").middleware("auth");
