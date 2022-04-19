import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useAlert, useAuth } from "./index";

const CartWishlistContext = createContext();

const initialState = {
    cartItemsNumber: 0,
    wishlistItemsNumber: 0,
    idOfProduct: 0,
    cartPrice: 0,
    cart: [],
    wishlist: [],
    closeButton: false,
    order: {},
};

const cartReducer = (cartState, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT_CART":
            return { ...cartState, cart: action.payload.value };
        case "UPDATE_DEFAULT_WISHLIST":
            return { ...cartState, wishlist: action.payload.value };
        case "UPDATE_CART_WISHLIST":
            return { ...cartState, ...action.payload.value };
        case "OPEN_MODAL":
            return {
                ...cartState,
                closeButton: !cartState.closeButton,
                idOfProduct: action.payload.value,
            };
        case "CLOSE_MODAL":
            return { ...cartState, closeButton: !cartState.closeButton };
        case "CLEAR_ORDER_CART":
            return {
                ...cartState,
                ...action.payload.value,
                cartItemsNumber: 0,
                cartPrice: 0,
            };
        case "ORDER_SUMMARY":
            return { ...action.payload.value };
        default:
            return cartState;
    }
};

const CartWishlistProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, initialState);
    const { alertDispatch } = useAlert();
    const { token } = useAuth();
    useEffect(() => {
        (async () => {
            alertDispatch({ type: "SET_LOADER", payload: { value: true } });
            try {
                const res = await axios.get("/api/user/cart", {
                    headers: {
                        authorization: token,
                    },
                });
                if (res.status) {
                    cartDispatch({
                        type: "UPDATE_DEFAULT_CART",
                        payload: { value: res.data.cart },
                    });
                    alertDispatch({
                        type: "SET_LOADER",
                        payload: { value: false },
                    });
                }
            } catch (err) {
                token &&
                    alertDispatch({
                        type: "ACTIVATE_ALERT",
                        payload: { alertType: "error", alertMsg: err.message },
                    });
            }
        })();
        (async () => {
            alertDispatch({ type: "SET_LOADER", payload: { value: true } });
            try {
                const res = await axios.get("/api/user/wishlist", {
                    headers: {
                        authorization: token,
                    },
                });
                if (res.status) {
                    cartDispatch({
                        type: "UPDATE_DEFAULT_WISHLIST",
                        payload: { value: res.data.wishlist },
                    });
                    alertDispatch({
                        type: "SET_LOADER",
                        payload: { value: false },
                    });
                }
            } catch (err) {
                token &&
                    alertDispatch({
                        type: "ACTIVATE_ALERT",
                        payload: { alertType: "error", alertMsg: err.message },
                    });
            }
        })();
    }, [alertDispatch, token]);

    return (
        <CartWishlistContext.Provider value={{ cartState, cartDispatch }}>
            {children}
        </CartWishlistContext.Provider>
    );
};

const useCartWishlist = () => useContext(CartWishlistContext);

export { CartWishlistProvider, useCartWishlist };
