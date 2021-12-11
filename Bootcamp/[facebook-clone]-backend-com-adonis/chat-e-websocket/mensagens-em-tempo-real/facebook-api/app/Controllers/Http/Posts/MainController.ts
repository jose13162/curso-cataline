import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User, Post } from "App/Models";
import { StoreValidator, UpdateValidator } from "App/Validators/Post/Main";
import Application from "@ioc:Adonis/Core/Application";
import fs from "fs";

export default class PostsController {
  public async index({ request, auth }: HttpContextContract) {
    const { username } = request.qs();

    const user = username ? await User.findBy("username", username) : auth.user!;

    await user?.load("posts", (query) => {
      query.orderBy("id", "desc");
      query.withCount("comments");
      query.preload("media");
      query.preload("user", (query) => {
        query.select("id", "name", "username");
        query.preload("avatar");
      });
      query.preload("comments", (query) => {
        query.orderBy("id", "desc");
        query.select(["id", "userId", "content", "createdAt"]);
        query.preload("user", (query) => {
          query.select(["id", "name", "username"]);
          query.preload("avatar");
        });
      });

      query.withCount("reactions", (query) => {
        query.where("type", "like");
        query.as("likeCount");
      });

      query.withCount("reactions", (query) => {
        query.where("type", "love");
        query.as("loveCount");
      });

      query.withCount("reactions", (query) => {
        query.where("type", "haha");
        query.as("hahaCount");
      });

      query.withCount("reactions", (query) => {
        query.where("type", "sad");
        query.as("sadCount");
      });

      query.withCount("reactions", (query) => {
        query.where("type", "angry");
        query.as("angryCount");
      });

      query.preload("reactions", (query) => {
        query.where("userId", auth.user!.id);
      });
    });

    return user?.posts;
  }

  public async store({ request, auth }: HttpContextContract) {
    const user = auth.user!;
    const data = await request.validate(StoreValidator);
    const post = await user.related("posts").create(data);

    return post;
  }

  public async update({ request, response, params, auth }: HttpContextContract) {
    const user = auth.user!;
    const data = await request.validate(UpdateValidator);
    const post = await Post.findOrFail(params.id);

    if (user.id !== post.userId) {
      return response.unauthorized();
    }

    post.merge(data);
    await post.save();

    return post;
  }

  public async destroy({ response, params, auth }: HttpContextContract) {
    const user = auth.user!;
    const post = await Post.findOrFail(params.id);

    if (user.id !== post.userId) {
      return response.unauthorized();
    }

    await post.load("media");

    if (post.media) {
      fs.unlinkSync(Application.tmpPath("uploads", post.media.fileName));

      await post.media.delete();
    }

    await post.delete();
  }
}
