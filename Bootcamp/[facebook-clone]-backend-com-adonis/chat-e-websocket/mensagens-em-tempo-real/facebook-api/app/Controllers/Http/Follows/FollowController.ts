import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User } from "App/Models";
import { StoreValidator } from "App/Validators/Follows/Main";
import Database from "@ioc:Adonis/Lucid/Database";

export default class FollowController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { followingId } = await request.validate(StoreValidator);

    const user = await User.findOrFail(followingId);

    const isFollowing = await Database.query().from("follows").where("follower_id", auth.user!.id).first();

    if (isFollowing) {
      return response.badRequest();
    }

    await user.related("followers").attach([auth.user!.id]);
  }
}
