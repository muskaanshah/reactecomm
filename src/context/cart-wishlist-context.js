import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAlert } from "./alert-context";

const CartWishlistContext = createContext();

const initialState = {
    cartItemsNumber: 0,
    wishlistItemsNumber: 0,
    idOfProduct: 0,
    cartPrice: 0,
    default: [],
    cart: [],
    wishlist: [],
    closeButton: false,
    order: {}
};

const cartReducer = (cartState, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT":
            return { ...cartState, default: action.payload.value };
        case "UPDATE_DEFAULT_CART":
            return { ...cartState, cart: action.payload.value };
        case "UPDATE_DEFAULT_WISHLIST":
            return { ...cartState, wishlist: action.payload.value };
        case "UPDATE_CART_WISHLIST":
            return { ...cartState, ...action.payload.value }
        case "OPEN_MODAL":
            return { ...cartState, closeButton: !cartState.closeButton, idOfProduct: action.payload.value }
        case "CLOSE_MODAL":
            return { ...cartState, closeButton: !cartState.closeButton }
        case "CLEAR_ORDER_CART":
            // return { ...cartState, cart: [], cartItemsNumber: 0 }
            return { ...cartState, ...action.payload.value, cartItemsNumber: 0, cartPrice: 0, }
        case "ORDER_SUMMARY":
            return { ...cartState, order: { ...action.payload.value } }
        default:
            return cartState;
    }
};

const CartWishlistProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
    const { alertDispatch } = useAlert();
    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products");
                cartDispatch({ type: "UPDATE_DEFAULT", payload: { value: res.data.products } });
            } catch (error) {
                console.error("Inside wishlist Error", error);
            }
        })();
        (async () => {
            try {
                const res = await axios.get("/api/user/cart", {
                    headers: {
                        authorization: localStorage.getItem("encodedToken"),
                    },
                });
                if (res.status) {
                    cartDispatch({ type: "UPDATE_DEFAULT_CART", payload: { value: res.data.cart } });
                }
            } catch (err) {
                alertDispatch({
                    type: "ACTIVATE_ALERT",
                    payload: { alertType: "error", alertMsg: err.message },
                });
            }
        })();
        (async () => {
            try {
                const res = await axios.get("/api/user/wishlist", {
                    headers: {
                        authorization: localStorage.getItem("encodedToken"),
                    },
                });
                if (res.status) {
                    cartDispatch({ type: "UPDATE_DEFAULT_WISHLIST", payload: { value: res.data.wishlist } });
                }
            } catch (err) {
                alertDispatch({
                    type: "ACTIVATE_ALERT",
                    payload: { alertType: "error", alertMsg: err.message },
                });
            }
        })();
    }, [alertDispatch]);

    return (
        <CartWishlistContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
