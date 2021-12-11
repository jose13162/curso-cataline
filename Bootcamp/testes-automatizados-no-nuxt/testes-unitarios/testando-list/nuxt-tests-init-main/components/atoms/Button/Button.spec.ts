import { mount, Wrapper } from "@vue/test-utils";
import Button from "@/components/atoms/Button/Button.vue";

describe("Button", () => {
  let wrapper: Wrapper<Button>;

  beforeAll(() => {
    wrapper = mount(Button, {
      propsData: {
        text: "Foo",
        type: "submit"
      }
    });
  });

  test("is a Vue instance", () => {
    expect(wrapper.vm).toBeTruthy();
  });

  test("should have self component class name", () => {
    expect(wrapper.classes()).toContain("button");
  });

  test("should render the text", () => {
    expect(wrapper.text()).toBe("Foo");
  });

  test("should set type", () => {
    expect(wrapper.attributes("type")).toBe("submit");
  });

  test("should emit an event on click", async () => {
    await wrapper.trigger("click");

    expect(wrapper.emitted("click")).toHaveLength(1);
  });
});
