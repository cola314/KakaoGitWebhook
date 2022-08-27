import { isValidate } from "./secret-validator";

test('valid signature success test', () => {
    expect(isValidate("6bb7718b2da2ff9c873cc893a2848c560891b1be89cd89bb37d7e01f13522e46", "body message")).toBe(true);
});