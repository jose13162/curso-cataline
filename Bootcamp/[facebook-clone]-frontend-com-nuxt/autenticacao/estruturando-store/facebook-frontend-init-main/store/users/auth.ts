import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { $axios, $cookies } from "~/utils/nuxt-instance";

interface CreatePayload {
  email: string;
  password: string;
}

type Token = string | null;

@Module({ name: "users/login", stateFactory: true, namespaced: true })
export default class UserRegister extends VuexModule {
  private token = null as Token;

  get $token() {
    return this.token;
  }

  @Mutation
  UPDATE_TOKEN(token: Token) {
    this.token = token;
  }

  @Action
  public async create(payload: CreatePayload) {
    const { token } = await $axios.$post("/auth", payload);

    $cookies.set("token", token, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30
    });

    this.context.commit("UPDATE_TOKEN", token);
  }

  @Action
  public async destroy() {
    await $axios.delete("/auth");

    $cookies.remove("token");

    this.context.commit("UPDATE_TOKEN", null);
  }
}
