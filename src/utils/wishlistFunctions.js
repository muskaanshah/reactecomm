const addToWishlist = (state, id) => {
    const itemFind = state.wishlist.find((currentItem) => currentItem._id === id);
    const temp1 = {
        ...state,
        wishlistItemsNumber: !itemFind ? state.wishlistItemsNumber + 1 : state.wishlistItemsNumber,
        idOfProduct: id,
        // First checks if item is there or not, if yes increments qty by 1; if not, adds item to the cart array
        wishlist: !itemFind
            ? state.default.reduce(
                (acc, currentProduct) =>
                    currentProduct._id === id
                        ? [...acc, currentProduct]
                        : acc,
                state.wishlist
            )
            : state.wishlist
    };
    return temp1;
};

const removeFromWishlist = (state, id) => {
    const temp2 = {
        ...state,
        wishlistItemsNumber: state.wishlistItemsNumber - 1,
        idOfProduct: id,
        wishlist: state.wishlist.filter((currentProduct) => currentProduct._id !== id),
    };
    return temp2;
};

export { addToWishlist, removeFromWishlist };
