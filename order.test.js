// describe() - test plan
// it() / test() - test case
// expect() - assertion

const { createOrder, getOrderStatus } = require("./order");


describe("createOrder feature of order", () => {

    // 1. Valid order
    test("Creating an order with valid items should succeed", () => {

        const items = [
            {
                name: "Laptop",
                price: 1000,
                quantity: 1
            }
        ];

        const result = createOrder(items);

        expect(result.success).toBe(true);
        expect(result.message).toBe("Order created successfully");

    });


    // 2. Empty cart
    test("Empty cart should return success false and order null", () => {

        const result = createOrder([]);

        expect(result.success).toBe(false);
        expect(result.order).toBe(null);

    });


    // 3. Order total
    test("Order total should be calculated correctly", () => {

        const items = [
            {
                name: "Laptop",
                price: 1000,
                quantity: 2
            }
        ];

        const result = createOrder(items);

        expect(result.order.total).toBe(2000);

    });


    // 4. SAVE10 coupon
    test("SAVE10 coupon should apply a 10% discount", () => {

        const items = [
            {
                name: "Laptop",
                price: 1000,
                quantity: 1
            }
        ];

        const result = createOrder(items, "SAVE10");

        expect(result.order.total).toBe(900);

    });


    // 5. No coupon
    test("When no coupon is provided, coupon should be null", () => {

        const items = [
            {
                name: "Laptop",
                price: 500,
                quantity: 1
            }
        ];

        const result = createOrder(items);

        expect(result.order.coupon).toBe(null);

    });


    // 6. Premium order
    test('An order above 1000 should have status "PREMIUM"', () => {

        const items = [
            {
                name: "Laptop",
                price: 1500,
                quantity: 1
            }
        ];

        const result = createOrder(items);

        const status = getOrderStatus(result.order);

        expect(status).toBe("PREMIUM");

    });

});