import test from "japa";

test.group("Example", () => {
  test("assert sum", (assert) => {
    const result = 4;

    assert.equal(result, 4);
  });
});
