import { handleSubmit } from "../src/client/js/formHandler";

describe("Handle form submit", () => {
    test("it should be a function", () => {
        expect(typeof handleSubmit).toBe('function');
    });
  });