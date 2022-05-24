import { createContext, useContext, useReducer } from "react";

const AlertContext = createContext();

const alertReducer = (state, action) => {
    switch (action.type) {
        case "ACTIVATE_ALERT":
            return {
                ...state,
                alertType: action.payload.alertType,
                alertMsg: action.payload.alertMsg,
                active: true,
            };
        case "DEACTIVATE_ALERT":
            return { ...state, alertType: "", alertMsg: "", active: false };
        case "SET_LOADER":
            return { ...state, productLoader: action.payload.value };
        case "SET_CART_LOADER":
            return { ...state, cartLoader: action.payload.value };
        case "SET_WISHLIST_LOADER":
            return { ...state, wishlistLoader: action.payload.value };
        default:
            return state;
    }
};

const initialState = {
    alertType: "",
    active: false,
    alertMsg: "",
    productLoader: false,
    cartLoader: false,
    wishlistLoader: false,
};

const AlertProvider = ({ children }) => {
    const [alertState, alertDispatch] = useReducer(alertReducer, initialState);
    return (
        <AlertContext.Provider value={{ alertState, alertDispatch }}>
            {children}
        </AlertContext.Provider>
    );
};

const useAlert = () => useContext(AlertContext);

export { useAlert, AlertProvider };
