import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User } from "App/Models";

export default class UsersController {
  public async show({ request }: HttpContextContract) {
    const { username } = request.qs();
    const user = await User.findByOrFail("username", username);

    return user;
  }
}
