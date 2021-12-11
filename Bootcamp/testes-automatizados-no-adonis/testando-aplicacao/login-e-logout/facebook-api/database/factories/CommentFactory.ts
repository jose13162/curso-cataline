import Factory from "@ioc:Adonis/Lucid/Factory";
import { Comment } from "App/Models";

export const CommentFactory = Factory.define(Comment, ({ faker }) => {
  return {
    content: faker.lorem.text()
  };
}).build();
