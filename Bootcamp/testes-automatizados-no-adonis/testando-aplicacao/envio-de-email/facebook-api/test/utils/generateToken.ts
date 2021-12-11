import { UserFactory } from "Database/factories";
import request from "./request";

export default async () => {
  const user = await UserFactory.merge({ password: "secret" }).create();

  const { body } = await request.post("/auth").send({ email: user.email, password: "secret" });

  return { token: body.token, user };
};
