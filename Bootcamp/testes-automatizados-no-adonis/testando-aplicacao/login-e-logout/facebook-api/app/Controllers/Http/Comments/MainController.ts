import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Comment } from "App/Models";
import { StoreValidator, UpdateValidator } from "App/Validators/Comment";

export default class MainController {
  public async store({ request, auth }: HttpContextContract) {
    const { content, postId } = await request.validate(StoreValidator);
    const user = auth.user!;

    const comment = await user.related("comments").create({ content, postId });

    return comment;
  }

  public async update({ request, response, params, auth }: HttpContextContract) {
    const data = await request.validate(UpdateValidator);
    const comment = await Comment.findOrFail(params.id);
    const user = auth.user!;

    if (user.id !== comment.userId) {
      return response.unauthorized();
    }

    comment.merge(data);
    await comment.save();

    return comment;
  }

  public async destroy({ response, params, auth }: HttpContextContract) {
    const comment = await Comment.findOrFail(params.id);
    const user = auth.user!;

    if (comment.userId !== user.id) {
      return response.unauthorized();
    }

    await comment.delete();
  }
}
