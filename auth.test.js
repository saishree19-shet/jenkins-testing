// describe() - test plan
// it() / test() - test case
// expect() - assertion

const { signup, login } = require("./auth");


describe("signup feature of authentication", () => {

    test("signup with new user", () => {

        const result = signup("Saishree", "saishree@gmail.com", "123456");

        expect(result.success).toBe(true);
        expect(result.message).toBe("Signup successful");

    });


    test("signup with existing email", () => {

        const result = signup("Saishree", "saishree@gmail.com", "123456");

        expect(result.success).toBe(false);
        expect(result.message).toBe("User already exists");

    });

});


describe("login feature of authentication", () => {

    test("login with correct password", () => {

        const result = login("saishree@gmail.com", "123456");

        expect(result.success).toBe(true);
        expect(result.message).toBe("Login successful");

    });


    it("login with incorrect password", () => {

        const result = login("saishree@gmail.com", "wrongpassword");

        expect(result.success).toBe(false);
        expect(result.message).toBe("Invalid password");

    });

});