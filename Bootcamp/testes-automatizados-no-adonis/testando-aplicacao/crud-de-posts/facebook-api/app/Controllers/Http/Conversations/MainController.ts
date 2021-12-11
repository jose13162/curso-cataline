import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { Conversation } from "App/Models";

export default class ConversationsController {
  public async index({ auth }: HttpContextContract) {
    const conversations = await Conversation.query().where({ userIdOne: auth.user!.id }).orWhere({ userIdTwo: auth.user!.id });

    const queries = conversations.map(async (conversation) => {
      if (conversation.userIdOne === auth.user!.id) {
        await conversation.load("userTwo", (query) => {
          query.preload("avatar");
        });
      } else if (conversation.userIdTwo === auth.user!.id) {
        await conversation.load("userOne", (query) => {
          query.preload("avatar");
        });
      }
    });

    await Promise.all(queries);

    return conversations.map((conversation) => {
      conversation.toJSON().user = conversation.userOne || conversation.userTwo;
      // @ts-expect-error
      delete conversation["userOne"];
      // @ts-expect-error
      delete conversation["userTwo"];

      return conversation;
    });
  }

  public async show({ response, params, auth }: HttpContextContract) {
    const conversation = await Conversation.findOrFail(params.id);

    if (![conversation.userIdOne, conversation.userIdTwo].includes(auth.user!.id)) {
      return response.unauthorized();
    }

    await conversation.load("messages");

    return conversation;
  }
}
