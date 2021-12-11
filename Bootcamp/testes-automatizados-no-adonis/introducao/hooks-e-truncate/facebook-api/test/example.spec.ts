import test from "japa";
import { request } from "Test/utils";
import { User } from "App/Models";
import Database from "@ioc:Adonis/Lucid/Database";

test.group("Example", (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction();
  });

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test("ensure the login works", async (assert) => {
    await User.create({
      email: "jose@gmail.com",
      password: "secret",
      username: "jose123",
      name: "josé"
    });

    const { body } = await request
      .post("/auth")
      .send({
        email: "jose@gmail.com",
        password: "secret"
      })
      .expect(200);

    assert.exists(body.token);
  });

  test("...", async (assert) => {
    await User.create({
      email: "jose@gmail.com",
      password: "secret",
      username: "jose123",
      name: "josé"
    });

    const { body } = await request
      .post("/auth")
      .send({
        email: "jose@gmail.com",
        password: "secret"
      })
      .expect(200);

    assert.exists(body.token);
  });
});
