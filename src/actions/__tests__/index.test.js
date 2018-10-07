import { SAVE_COMMENT } from "../types";
import { saveComment } from "../index";

describe("saveComment", () => {
  it("has the correct types", () => {
    const actions = saveComment();
    expect(actions.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const actions = saveComment("New Comment");
    expect(actions.payload).toEqual("New Comment");
  });
});
