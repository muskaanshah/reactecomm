import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const CartWishlistContext = createContext();

const addToCart = (state, id) => {
    const itemFind = state.cart.find((currentItem) => currentItem._id === id);
    const temp2 = {
        ...state,
        cartItemsNumber: state.cartItemsNumber + 1,
        idOfProduct: id,
        // First checks if item is there or not, if yes increments qty by 1; if not, adds item to the cart array
        cart: itemFind
            ? state.cart.map((currentProduct) =>
                currentProduct._id === id
                    ? { ...currentProduct, qty: currentProduct.qty + 1 }
                    : currentProduct
            )
            : state.default.reduce(
                (acc, currentProduct) =>
                    currentProduct._id === id
                        ? [...acc, { ...currentProduct, qty: 1 }]
                        : acc,
                state.cart
            ),
    };
    console.log(temp2);
    return temp2;
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT":
            return { ...state, default: action.payload };
        case "ADD_TO_CART":
            return addToCart(state, action.payload);
        default:
            return state;
    }
};

const initialState = {
    cartItemsNumber: 0,
    wishlistItemsNumber: 0,
    idOfProduct: 0,
    cartPrice: 0,
    default: [],
    cart: [],
    wishlist: [],
};

const CartWishlistProvider = ({ children }) => {
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products");
                dispatch({ type: "UPDATE_DEFAULT", payload: res.data.products });
            } catch (error) {
                console.log("Inside wishlist Error", error);
            }
        })();
    }, []);
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartWishlistContext.Provider value={{ state, dispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
