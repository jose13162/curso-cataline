import Factory from "@ioc:Adonis/Lucid/Factory";
import { Reaction } from "App/Models";
import { reactions } from "App/utils";

export const ReactionFactory = Factory.define(Reaction, () => {
  const randomIndex = Math.floor(Math.random()) * 5;
  const reaction = reactions[randomIndex];

  return {
    type: reaction,
    userId: Math.round(Math.random() * 99)
  };
}).build();
