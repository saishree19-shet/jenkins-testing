// describe() - test plan
// it() / test() - test case
// expect() - assertion

const { add, sub } = require("./calculator");

describe("add feature of calculator", () => {

    test("add two positive numbers", () => {
        expect(add(5, 10)).toBe(15);
        //expect().toEqual()
        //expect().toBeTruthy()
        //expect().toBeFalsy()
        //expcet().toBeNull()
        
    });

    test("add two negative numbers", () => {
        expect(add(-5, -10)).toBe(-15);
    });

    it("add 2 negative numbers", () => {
        expect(add(-5, -10)).toBe(-15);
    });

});


describe("sub feature of calculator", () => {

    test("subtract two positive numbers", () => {
        expect(sub(10, 5)).toBe(5);
    });

    test("subtract two negative numbers", () => {
        expect(sub(-5, -10)).toBe(5);
    });

    it("subtract 2 negative numbers", () => {
        expect(sub(-5, -10)).toBe(5);
    });

});