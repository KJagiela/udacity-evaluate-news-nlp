import { checkUrl } from "../src/client/js/nameChecker";

describe("Check for valid URL", () => {
    test("it should be a function", () => {
        expect(typeof checkUrl).toBe('function');
    })
    test("it should return false if not an url", () => {
        const jsdomAlert = window.alert;
        window.alert = () => {};
        expect(checkUrl("python is better than js")).toBe(false);
        window.alert = jsdomAlert;
    })
    test("it should return true if an url", () => {
        expect(checkUrl("http://example.com")).toBe(true);
    })
  });