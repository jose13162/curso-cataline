import test from "japa";
import { request } from "./utils";
import Database from "@ioc:Adonis/Lucid/Database";
import { UserFactory } from "Database/factories";

test.group("Example", (group) => {
  group.beforeEach(async () => {
    await Database.beginGlobalTransaction();
  });

  group.afterEach(async () => {
    await Database.rollbackGlobalTransaction();
  });

  test("ensure the login works", async (assert) => {
    const user = await UserFactory.merge({ password: "secret" }).create();

    const { body } = await request
      .post("/auth")
      .send({
        email: user.email,
        password: "secret"
      })
      .expect(200);

    assert.exists(body.token);
  });
});
