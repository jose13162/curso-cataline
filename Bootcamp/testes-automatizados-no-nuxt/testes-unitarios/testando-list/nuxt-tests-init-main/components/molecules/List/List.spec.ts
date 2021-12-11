import { mount, Wrapper } from "@vue/test-utils";
import List from "@/components/molecules/List/List.vue";

describe("List", () => {
  let wrapper: Wrapper<List>;

  beforeAll(() => {
    wrapper = mount(List, {
      propsData: {
        items: ["a", "b", "c"]
      }
    });
  });

  test("should render the list", () => {
    expect(wrapper.findAll("li").length).toBe(3);
  });
});
