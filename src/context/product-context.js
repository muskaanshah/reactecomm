import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import {
    setBudget,
    setRating,
    setSortType,
    setTypes,
} from "../utils/setFiltering";

const ProductContext = createContext();

const productReducer = (productState, action) => {
    switch (action.type) {
        case "UPDATE_DEFAULT":
            return { ...productState, filteredItems: action.payload.value, default: action.payload.value }
        case "CATEGORIES":
            return setTypes(productState, action.payload.value, action.payload.isChecked);
        case "SORT_BY_PRICE":
            return setSortType(productState, action.payload.value);
        case "RATING":
            return setRating(productState, action.payload.value);
        case "PRICE":
            return setBudget(productState, action.payload.value);
        case "SEARCH_PRODUCT":
            return {
                ...productState,
                searchText: action.payload.value
            };
        case "SEARCH_FILTER_PRODUCT":
            const temp = action.payload.value;
            return {
                ...productState,
                searchText: temp,
                categories: [],
                priceRange: 5000,
                rating: 0,
                filteredItems: productState.default.filter((curItem) =>
                    curItem.name.toLowerCase().includes(temp.toLowerCase())
                )
            };
        case "CLEAR":
            return {
                ...productState,
                filteredItems: productState.default,
                categories: [],
                priceRange: 5000,
                rating: 0,
                searchText: ""
            };
        default:
            return productState;
    }
};

const initialState = {
    filteredItems: [],
    default: [],
    categories: [],
    priceRange: 5000,
    rating: 0,
    searchText: ""
};

const ProductProvider = ({ children }) => {

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/products")
                productDispatch({ type: "UPDATE_DEFAULT", payload: { value: res.data.products } })
            }
            catch (error) {
                console.error(error);
            }
        })()
    }, [])
    const [productState, productDispatch] = useReducer(productReducer, initialState);
    return (
        <ProductContext.Provider value={{ productState, productDispatch }}>
            {children}
        </ProductContext.Provider>
    );
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
