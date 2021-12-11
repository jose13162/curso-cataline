import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { User } from "App/Models";

export default class UsersController {
  public async show({ params }: HttpContextContract) {
    const query = (user: User) => user.$attributes.username.toLowerCase().startsWith(params.name.toLowerCase())

    const users = (await User.all()).filter(query);

    return users;
  }
}
