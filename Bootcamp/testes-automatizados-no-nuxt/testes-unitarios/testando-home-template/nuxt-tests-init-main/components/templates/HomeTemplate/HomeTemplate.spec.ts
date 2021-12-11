import { mount, Wrapper } from "@vue/test-utils";
import HomeTemplate from "@/components/templates/HomeTemplate/HomeTemplate.vue";
import Container from "@/components/bosons/Container/Container.vue";
import Input from "@/components/atoms/Input/Input.vue";
import Button from "@/components/atoms/Button/Button.vue";
import List from "@/components/molecules/List/List.vue";

describe("HomeTemplate", () => {
  let wrapper: Wrapper<HomeTemplate>;

  beforeAll(() => {
    wrapper = mount(HomeTemplate, {
      stubs: { Container, Input, Button, List }
    });
  });

  test("should generate list when form is submitted", async () => {
    await wrapper.find("input").setValue("Foo");
    await wrapper.find("form").trigger("submit");

    expect(wrapper.findAll("li").length).toBe(wrapper.vm.$data.resultLimit);
  });
});
