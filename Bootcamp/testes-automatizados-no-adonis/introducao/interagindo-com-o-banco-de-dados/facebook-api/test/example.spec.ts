import test from "japa";
import { request } from "Test/utils";
import { User } from "App/Models";

test.group("Example", () => {
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
});
