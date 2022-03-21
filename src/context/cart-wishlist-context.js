import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { addToCart, removeFromCart } from "../utils/cartFunctions";
import { addToWishlist, removeFromWishlist } from "../utils/wishlistFunctions";

const CartWishlistContext = createContext();

const cartReducer = (cartState, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT":
            return { ...cartState, default: action.payload.value };
        case "ADD_TO_CART":
            return addToCart(cartState, action.payload.value);
        case "REMOVE_FROM_CART":
            return removeFromCart(cartState, action.payload.value, action.payload.isDeleteItem);
        case "OPEN_MODAL":
            return { ...cartState, closeButton: !cartState.closeButton, idOfProduct: action.payload.value }
        case "CLOSE_MODAL":
            return { ...cartState, closeButton: !cartState.closeButton }
        case "CLEAR_CART":
            return { ...cartState, cartItemsNumber: 0, cartPrice: 0, cart: [] }
        case "ADD_TO_WISHLIST":
            return addToWishlist(cartState, action.payload.value);
        case "REMOVE_FROM_WISHLIST":
            return removeFromWishlist(cartState, action.payload.value);
        default:
            return cartState;
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
    closeButton: false
};

const CartWishlistProvider = ({ children }) => {
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products");
                cartDispatch({ type: "UPDATE_DEFAULT", payload: { value: res.data.products } });
            } catch (error) {
                console.error("Inside wishlist Error", error);
            }
        })();
    }, []);
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
    return (
        <CartWishlistContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
