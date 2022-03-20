import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { addToCart, removeFromCart } from "../utils/CartFunctionalities";

const CartWishlistContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT":
            return { ...state, default: action.payload.value };
        case "ADD_TO_CART":
            return addToCart(state, action.payload.value);
        case "REMOVE_FROM_CART":
            return removeFromCart(state, action.payload.value, action.payload.isDeleteItem);
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
                dispatch({ type: "UPDATE_DEFAULT", payload: { value: res.data.products } });
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
