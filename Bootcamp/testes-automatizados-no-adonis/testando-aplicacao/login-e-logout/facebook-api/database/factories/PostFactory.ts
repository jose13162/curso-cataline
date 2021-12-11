import Factory from "@ioc:Adonis/Lucid/Factory";
import { Post } from "App/Models";
import { CommentFactory } from "./CommentFactory";
import { ReactionFactory } from "./ReactionFactory";

export const PostFactory = Factory.define(Post, ({ faker }) => {
  return {
    description: faker.lorem.text()
  };
})
  .relation("comments", () => CommentFactory)
  .relation("reactions", () => ReactionFactory)
  .build();
