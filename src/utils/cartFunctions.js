import axios from "axios";

const addToCart = async (state, product, alertDispatch) => {
    alertDispatch({ type: "SET_CART_LOADER", payload: { value: true } });
    try {
        const res = await axios.post(
            `/api/user/cart`,
            {
                product,
            },
            {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            }
        );
        if (res.status === 201) {
            const temp1 = {
                ...state,
                cartItemsNumber: res.data.cart.reduce(
                    (acc, curr) => (acc += curr.qty),
                    0
                ),
                idOfProduct: product._id,
                cart: res.data.cart,
            };
            const temp2 = {
                ...temp1,
                cartPrice: temp1.cart.reduce(
                    (acc, curr) => (acc += curr.newprice * curr.qty),
                    0
                ),
            };
            alertDispatch({
                type: "ACTIVATE_ALERT",
                payload: {
                    alertType: "success",
                    alertMsg: "Added to cart",
                },
            });
            return temp2;
        }
    } catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    } finally {
        alertDispatch({ type: "SET_CART_LOADER", payload: { value: false } });
    }
};

const removeFromCart = async (state, id, alertDispatch) => {
    alertDispatch({ type: "SET_CART_LOADER", payload: { value: true } });
    try {
        const res = await axios.delete(`/api/user/cart/${id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            const temp1 = {
                ...state,
                cartItemsNumber: res.data.cart.reduce(
                    (acc, curr) => (acc += curr.qty),
                    0
                ),
                idOfProduct: id,
                cart: res.data.cart,
            };
            return {
                ...temp1,
                cartPrice: temp1.cart.reduce(
                    (acc, curr) => (acc += curr.newprice * curr.qty),
                    0
                ),
            };
        }
    } catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    } finally {
        alertDispatch({ type: "SET_CART_LOADER", payload: { value: false } });
    }
};

const updateCartQty = async (state, id, action, alertDispatch) => {
    alertDispatch({ type: "SET_CART_LOADER", payload: { value: true } });
    try {
        const res = await axios.post(
            `/api/user/cart/${id}`,
            {
                action: {
                    type: action,
                },
            },
            {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            }
        );
        if (res.status === 200) {
            const temp1 = {
                ...state,
                cartItemsNumber: res.data.cart.reduce(
                    (acc, curr) => (acc += curr.qty),
                    0
                ),
                idOfProduct: id,
                cart: res.data.cart,
            };
            const temp2 = {
                ...temp1,
                cartPrice: temp1.cart.reduce(
                    (acc, curr) => (acc += curr.newprice * curr.qty),
                    0
                ),
            };
            if (action === "increment") {
                alertDispatch({
                    type: "ACTIVATE_ALERT",
                    payload: {
                        alertType: "success",
                        alertMsg: "Added to cart",
                    },
                });
            }
            return temp2;
        }
    } catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    } finally {
        alertDispatch({ type: "SET_CART_LOADER", payload: { value: false } });
    }
};

const clearCart = async (state, alertDispatch) => {
    let newState;
    alertDispatch({ type: "SET_LOADER", payload: { value: true } });
    for await (const currentItem of state.cart) {
        try {
            const res = await axios.delete(`/api/user/cart/${currentItem._id}`, {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            });
            if (res.status === 200) {
                const temp1 = {
                    ...state,
                    cartItemsNumber: 0,
                    cart: res.data.cart,
                };
                newState = {
                    ...temp1,
                    cartPrice: temp1.cart.reduce(
                        (acc, curr) => (acc += curr.newprice * curr.qty),
                        0
                    ),
                };
            }
        } catch (err) {
            alertDispatch({
                type: "ACTIVATE_ALERT",
                payload: {
                    alertType: "error",
                    alertMsg: err.message,
                },
            });
        } finally {
            alertDispatch({ type: "SET_LOADER", payload: { value: false } });
        }
    }
    return newState;
};

const clearCartAfterOrdering = async (state, alertDispatch) => {
    let newState;
    alertDispatch({ type: "SET_CART_LOADER", payload: { value: true } });
    for await (const currentItem of state.cart) {
        try {
            const res = await axios.delete(`/api/user/cart/${currentItem._id}`, {
                headers: {
                    authorization: localStorage.getItem("encodedToken"),
                },
            });
            if (res.status === 200) {
                newState = {
                    ...state,
                    cart: res.data.cart,
                };
            }
        } catch (err) {
            alertDispatch({
                type: "ACTIVATE_ALERT",
                payload: {
                    alertType: "error",
                    alertMsg: err.message,
                },
            });
        } finally {
            alertDispatch({ type: "SET_CART_LOADER", payload: { value: false } });
        }
    }
    return newState;
};

export { addToCart, removeFromCart, updateCartQty, clearCart, clearCartAfterOrdering };
