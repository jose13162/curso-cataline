import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import User from "./User";
import Post from "./Post";

export default class Comment extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public content: string;

  @column()
  public userId: number;

  @column()
  public postId: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>;

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>;
}
