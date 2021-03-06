import Route from "@ioc:Adonis/Core/Route";
import "./auth";
import "./users";
import "./uploads";
import "./posts";
import "./comments";
import "./reactions";
import "./follows";
import "./profiles";

Route.get("/user-register", async ({ view }) => {
  return view.render("emails/register");
});
