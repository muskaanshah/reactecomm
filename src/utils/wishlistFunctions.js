import axios from "axios";

const addToWishlist = async (state, product, alertDispatch) => {
    const isInWishlist = state.wishlist?.find(
        (wishlistProduct) => wishlistProduct._id === product._id
    );
    if (!isInWishlist) {
        alertDispatch({ type: "SET_LOADER", payload: { value: true } });
        try {
            const res = await axios.post(
                `/api/user/wishlist`,
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
                    wishlistItemsNumber: res.data.wishlist.length,
                    idOfProduct: product._id,
                    wishlist: res.data.wishlist,
                };
                alertDispatch({
                    type: "ACTIVATE_ALERT",
                    payload: {
                        alertType: "success",
                        alertMsg: "Added to wishlist",
                    },
                });
                alertDispatch({
                    type: "SET_LOADER",
                    payload: { value: false },
                });
                return temp1;
            }
        } catch (err) {
            alertDispatch({
                type: "ACTIVATE_ALERT",
                payload: {
                    alertType: "error",
                    alertMsg: err.message,
                },
            });
            alertDispatch({ type: "SET_LOADER", payload: { value: false } });
        }
    }
};

const removeFromWishlist = async (state, id, alertDispatch) => {
    alertDispatch({ type: "SET_LOADER", payload: { value: true } });
    try {
        const res = await axios.delete(`/api/user/wishlist/${id}`, {
            headers: {
                authorization: localStorage.getItem("encodedToken"),
            },
        });
        if (res.status === 200) {
            const temp1 = {
                ...state,
                wishlistItemsNumber: state.wishlistItemsNumber - 1,
                idOfProduct: id,
                wishlist: res.data.wishlist,
            };
            alertDispatch({ type: "SET_LOADER", payload: { value: false } });
            return temp1;
        }
    } catch (err) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: err.message,
            },
        });
        alertDispatch({ type: "SET_LOADER", payload: { value: false } });
    }
};

export { addToWishlist, removeFromWishlist };
