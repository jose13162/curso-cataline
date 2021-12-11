import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User from "App/Models/User";

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: "José",
        email: "admin@gmail.com",
        password: "secret",
        role: "admin",
      },
      {
        name: "Anselmo",
        email: "normal@gmail.com",
        password: "secret",
        role: "normal",
      },
    ]);
  }
}
