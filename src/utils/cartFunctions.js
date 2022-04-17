import axios from "axios";

const addToCart = async (state, product, alertDispatch) => {
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
                cartItemsNumber: state.cartItemsNumber + 1,
                idOfProduct: product._id,
                cart: res.data.cart
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
    }
    catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
}

const removeFromCart = async (state, id, alertDispatch) => {
    const itemFind = state.cart.find((currentItem) => currentItem._id === id);
    try {
        const res = await axios.delete(`/api/user/cart/${id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            const temp1 = {
                ...state,
                cartItemsNumber: state.cartItemsNumber - itemFind.qty,
                idOfProduct: id,
                cart: res.data.cart
            }
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
    }
};

const updateCartQty = async (state, id, action, alertDispatch) => {
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
                cartItemsNumber: action === "increment" ? state.cartItemsNumber + 1 : state.cartItemsNumber - 1,
                idOfProduct: id,
                cart: res.data.cart
            }
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
            return temp2
        }
    } catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
    }
}

export { addToCart, removeFromCart, updateCartQty }