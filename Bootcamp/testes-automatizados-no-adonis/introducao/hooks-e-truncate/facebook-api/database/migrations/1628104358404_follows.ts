import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Follows extends BaseSchema {
  protected tableName = "follows";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer("follower_id").unsigned().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE");
      table.integer("following_id").unsigned().references("id").inTable("users").onDelete("CASCADE").onUpdate("CASCADE");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
