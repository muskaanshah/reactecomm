const itemListCalculation = (productState) => {
    const itemStartsWith = productState.default.filter((item) =>
        item.name.toLowerCase().startsWith(productState.searchText.toLowerCase())
    );
    const itemIncludes = productState.default.filter((item) =>
        item.name.toLowerCase().includes(productState.searchText.toLowerCase())
    );
    const itemIncludesNotInStartsWith = itemIncludes.reduce((acc, curr) => {
        const itemAlreadyPresent = itemStartsWith.find(
            (curItem) => curItem._id === curr._id
        );
        return itemAlreadyPresent ? acc : [...acc, curr];
    }, []);
    const finalItemList = itemStartsWith.concat(itemIncludesNotInStartsWith);
    return finalItemList;
}

export { itemListCalculation }