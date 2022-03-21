import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import {
    setBudget,
    setRating,
    setSortType,
    setTypes
} from "../utils/setFilter";

const ProductContext = createContext();

const productReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT":
            return { ...state, filteredItems: action.payload.value, default: action.payload.value }
        case "CATEGORIES":
            return setTypes(state, action.payload.value, action.payload.isChecked);
        case "SORT_BY_PRICE":
            return setSortType(state, action.payload.value);
        case "RATING":
            return setRating(state, action.payload.value);
        case "PRICE":
            return setBudget(state, action.payload.value);
        case "CLEAR":
            return {
                ...state,
                filteredItems: state.default,
                categories: [],
                priceRange: 5000,
                rating: 0
            };
        default:
            return state;
    }
};

const initialState = {
    filteredItems: [],
    default: [],
    categories: [],
    priceRange: 5000,
    rating: 0
};

const ProductProvider = ({ children }) => {

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products")
                dispatch({ type: "UPDATE_DEFAULT", payload: { value: res.data.products } })
            }
            catch {
                console.log("Error");
            }
        })()
    }, [])
    const [state, dispatch] = useReducer(productReducer, initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
