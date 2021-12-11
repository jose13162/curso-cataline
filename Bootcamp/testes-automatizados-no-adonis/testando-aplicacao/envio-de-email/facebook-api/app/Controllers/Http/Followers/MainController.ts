import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User } from "App/Models";
import { isFollowing } from "App/utils/isFollowing";

export default class MainController {
  public async index({ request, response, auth }: HttpContextContract) {
    const { username } = await request.qs();

    if (!username) {
      return response.badRequest();
    }

    const user = await User.findByOrFail("username", username);

    await user.load("followers", (query) => {
      query.preload("avatar");
    });

    const queries = user.followers.map(async (follower) => {
      await isFollowing(follower, auth);

      follower.$extras.itsMyProfile = user.id === auth.user!.id ? true : false;
    });

    await Promise.all(queries);

    return user.followers;
  }

  public async destroy({ params, auth }: HttpContextContract) {
    const user = auth.user!;

    await user.related("followers").detach([params.id]);
  }
}
