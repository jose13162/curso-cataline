import { schema, rules } from "@ioc:Adonis/Core/Validator";
import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { reactions } from "App/utils";

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    type: schema.enum(reactions),
    postId: schema.number([rules.exists({ table: "posts", column: "id" })])
  });

  public messages = {};
}
