import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import { User } from "App/Models";

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: "jose@gmail.com",
        name: "jose",
        password: "secret",
        username: "jose123"
      },
      {
        email: "anselmo@gmail.com",
        name: "anselmo",
        password: "secret",
        username: "anselmo123"
      },
      {
        email: "ferreira@gmail.com",
        name: "ferreira",
        password: "secret",
        username: "ferreira123"
      }
    ]);
  }
}
