import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User } from "App/Models";
import { isFollowing } from "App/utils/isFollowing";

export default class MainController {
  public async index({ request, response, auth }: HttpContextContract) {
    const { username } = request.qs();

    if (!username) {
      return response.badRequest();
    }

    const user = await User.findByOrFail("username", username);

    await user.load("followings", (query) => {
      query.preload("avatar");
    });

    const queries = user.followings.map(async (user) => {
      await isFollowing(user, auth);
    });

    await Promise.all(queries);

    return user.followings;
  }
}
