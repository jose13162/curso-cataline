import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User, UserKey } from "App/Models";
import Database from "@ioc:Adonis/Lucid/Database";
import faker from "faker";
import Mail from "@ioc:Adonis/Addons/Mail";
import { UpdateValidator, StoreValidator } from "App/Validators/User/ForgotPassword";

export default class ForgotPasswordsController {
  public async store({ request }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const { email, redirectUrl } = await request.validate(StoreValidator);
      const user = await User.findByOrFail("email", email);

      user.useTransaction(trx);

      const key = faker.datatype.uuid() + user.id;
      user.related("keys").create({ key });

      const link = `${redirectUrl.replace(/\/$/, "")}/${key}`;

      await Mail.send((message) => {
        message.to(email);
        message.from("contato@facebook.com", "Facebook");
        message.subject("Mudança de senha");
        message.htmlView("emails/forgot-password", { link });
      });
    });
  }

  public async show({ params }: HttpContextContract) {
    const userKey = await UserKey.findByOrFail("key", params.key);

    await userKey.load("user");
    const user = userKey.user;

    return user;
  }

  public async update({ request, response }: HttpContextContract) {
    const { key, password } = await request.validate(UpdateValidator);
    const userKey = await UserKey.findByOrFail("key", key);

    await userKey.load("user");

    const user = userKey.user;
    user.merge({ password });

    await user.save();
    await userKey.delete();

    return response.ok({ message: "Senha modificada." });
  }
}
