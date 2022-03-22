const FinalFiltering = (newState, products) => {
    const tempFilter = {
        ...newState,
        filteredItems:
            newState.searchText.length > 0
                ? newState.filteredItems.filter((curItem) => {
                    return (
                        curItem.newprice <= newState.priceRange &&
                        curItem.rating >= newState.rating &&
                        curItem.category.some((curCategory) => {
                            return [...newState.categories].length > 0
                                ? [...newState.categories].indexOf(curCategory) >= 0
                                : true;
                        })
                    );
                })
                : products.filter((curItem) => {
                    return (
                        curItem.newprice <= newState.priceRange &&
                        curItem.rating >= newState.rating &&
                        curItem.category.some((curCategory) => {
                            return [...newState.categories].length > 0
                                ? [...newState.categories].indexOf(curCategory) >= 0
                                : true;
                        })
                    );
                }),
    };
    const tempSort = {
        ...tempFilter,
        filteredItems: tempFilter.filteredItems.sort((productOne, productTwo) => {
            if (newState.sortWay === "HIGHEST_TO_LOWEST")
                return productTwo.newprice - productOne.newprice;
            return productOne.newprice - productTwo.newprice;
        }),
    };
    return tempSort;
};

export { FinalFiltering };
