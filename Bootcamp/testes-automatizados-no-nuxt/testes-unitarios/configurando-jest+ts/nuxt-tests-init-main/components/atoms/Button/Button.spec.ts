import { mount } from "@vue/test-utils";
import Button from "@/components/atoms/Button/Button.vue";

describe("Button", () => {
  test("is a Vue instance", () => {
    const wrapper = mount(Button, {
      propsData: {
        text: "Send",
        type: "submit"
      }
    });

    expect(wrapper.vm).toBeTruthy();
  });
});
