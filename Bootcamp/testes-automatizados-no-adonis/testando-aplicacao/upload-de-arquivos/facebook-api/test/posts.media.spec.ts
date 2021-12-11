import Database from "@ioc:Adonis/Lucid/Database";
import { PostFactory } from "Database/factories";
import test from "japa";
import { generateToken, request } from "./utils";

test.group("/posts/:id/media", (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction();
  });

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test("[store] - should be able to attach an image to a post", async (assert) => {
    const { user, token } = await generateToken();
    const post = await PostFactory.merge({ userId: user.id }).create();

    await request
      .post(`/posts/${post.id}/media`)
      .set("authorization", `bearer ${token}`)
      .attach("file", "test/assets/image.png")
      .expect(200);

    const postMedia = await Database.from("files").where({ file_category: "post", owner_id: post.id }).first();

    assert.exists(postMedia.id);
  });

  test("[store] - should fail to attach an image to a post from another user", async () => {
    const { token } = await generateToken();
    const post = await PostFactory.create();

    await request
      .post(`/posts/${post.id}/media`)
      .set("authorization", `bearer ${token}`)
      .attach("file", "test/assets/image.png")
      .expect(401);
  });
});
