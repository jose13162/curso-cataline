import { mount, Wrapper } from "@vue/test-utils";
import Input from "@/components/atoms/Input/Input.vue";

describe("Input", () => {
  let wrapper: Wrapper<Input>;

  beforeAll(() => {
    wrapper = mount(Input, {
      propsData: {
        placeholder: "Foo"
      }
    });
  });

  test("should set placeholder", () => {
    expect(wrapper.attributes("placeholder")).toBe("Foo");
  });

  test("should emit an event on change value", async () => {
    await wrapper.setValue("Foo");

    expect(wrapper.emitted("input")).toHaveLength(1);
  });
});
