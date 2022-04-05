import { v4 as uuid } from "uuid";

const couponsAvailable = [
    {
        id: uuid(),
        code: "DIWALIBONAZA",
        description: "Get ₹500 off if you spend above ₹4000",
        minimumPrice: 4000,
        discount: 500
    },
    {
        id: uuid(),
        code: "GET10",
        description: "Get 10% off if you spend above 1000",
        minimumPrice: 1000,
        discountPercentage: 10
    },
    {
        id: uuid(),
        code: "GET15",
        description: "Get 15% off if you spend above ₹2500",
        minimumPrice: 2500,
        discountPercentage: 15
    },
    {
        id: uuid(),
        code: "SUPERDEAL",
        description: "Buy games worth ₹5000 and get 20% off",
        minimumPrice: 5000,
        discountPercentage: 20
    },
    {
        id: uuid(),
        code: "GAMETIME",
        description: "Buy games worth ₹3000 and get ₹400 off",
        minimumPrice: 3000,
        discount: 400
    }
]

export { couponsAvailable }
