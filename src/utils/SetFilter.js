import { FinalFiltering } from "./setFinalFilters";

const setTypes = (state, value, isChecked) => {
    const temp = isChecked
        ? {
            ...state,
            categories: [...state.categories, value]
        }
        : {
            ...state,
            categories: state.categories.filter(
                (curCategory) => curCategory !== value
            )
        };
    return FinalFiltering(temp, state.default);
};

const setSortType = (state, value) => {
    const temp2 = {
        ...state,
        sortWay: value
    };
    return FinalFiltering(temp2, state.default);
};

const setBudget = (state, value) => {
    const temp3 = {
        ...state,
        priceRange: value
    };
    return FinalFiltering(temp3, state.default);
};

const setRating = (state, value) => {
    const temp4 = {
        ...state,
        rating: value
    };
    return FinalFiltering(temp4, state.default);
};

export { setTypes, setSortType, setBudget, setRating };
