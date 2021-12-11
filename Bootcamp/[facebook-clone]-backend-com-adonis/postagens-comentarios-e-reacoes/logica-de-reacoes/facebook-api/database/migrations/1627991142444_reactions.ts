import BaseSchema from "@ioc:Adonis/Lucid/Schema";
import { reactions } from "App/utils";

export default class Reactions extends BaseSchema {
  protected tableName = "reactions";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.enu("type", reactions);
      table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE");
      table.integer("post_id").unsigned().references("id").inTable("posts").onDelete("CASCADE").onUpdate("CASCADE");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
