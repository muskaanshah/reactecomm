const addToCart = (state, id) => {
    const itemFind = state.cart.find((currentItem) => currentItem._id === id);
    const temp1 = {
        ...state,
        cartItemsNumber: state.cartItemsNumber + 1,
        idOfProduct: id,
        // cartPrice: state.cartPrice + price, - easier way, used logic in temp2
        // First checks if item is there or not, if yes increments qty by 1; if not, adds item to the cart array
        cart: itemFind
            ? state.cart.map((currentProduct) =>
                currentProduct._id === id
                    ? { ...currentProduct, qty: currentProduct.qty + 1 }
                    : currentProduct
            )
            : state.default.reduce(
                (acc, currentProduct) =>
                    currentProduct._id === id
                        ? [...acc, { ...currentProduct, qty: 1 }]
                        : acc,
                state.cart
            ),
    };
    const temp2 = {
        ...temp1,
        cartPrice: temp2.cart.reduce((acc, curr) => acc += curr.newprice * curr.qty, 0)
    }
    return temp2;
};

export { addToCart }