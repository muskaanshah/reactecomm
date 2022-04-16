import { createContext, useContext, useReducer } from "react";

const AlertContext = createContext();

const alertReducer = (state, action) => {
    switch (action.type) {
        case "ACTIVATE_ALERT":
            return { ...state, alertType: action.payload.alertType, alertMsg: action.payload.alertMsg, active: true }
        case "DEACTIVATE_ALERT":
            return initialState
        default:
            return state
    }
}

const initialState = {
    alertType: "",
    active: false,
    alertMsg: ""
}

const AlertProvider = ({ children }) => {
    const [alertState, alertDispatch] = useReducer(alertReducer, initialState);
    return (
        <AlertContext.Provider value={{ alertState, alertDispatch }} >
            {children}
        </AlertContext.Provider>
    )
}

const useAlert = () => useContext(AlertContext);

export { useAlert, AlertProvider }
