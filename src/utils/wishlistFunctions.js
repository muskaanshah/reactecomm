import axios from "axios";

// const addToWishlist = (state, id) => {
//     const itemFind = state.wishlist.find((currentItem) => currentItem._id === id);
//     const temp1 = {
//         ...state,
//         wishlistItemsNumber: !itemFind ? state.wishlistItemsNumber + 1 : state.wishlistItemsNumber,
//         idOfProduct: id,
//         // First checks if item is there or not, if yes increments qty by 1; if not, adds item to the cart array
//         wishlist: !itemFind
//             ? state.default.reduce(
//                 (acc, currentProduct) =>
//                     currentProduct._id === id
//                         ? [...acc, currentProduct]
//                         : acc,
//                 state.wishlist
//             )
//             : state.wishlist
//     };
//     return temp1;
// };

const addToWishlist = async (state, product) => {
    const isInWishlist = state.wishlist?.find(
        (wishlistProduct) => wishlistProduct._id === product._id
    );
    if (!isInWishlist) {
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
                    wishlist: res.data.wishlist
                };
                return temp1;
            }
        }
        catch (err) {
            console.error(err)
        }
    }
}

// const removeFromWishlist = (state, id) => {
//     const temp2 = {
//         ...state,
//         wishlistItemsNumber: state.wishlistItemsNumber - 1,
//         idOfProduct: id,
//         wishlist: state.wishlist.filter((currentProduct) => currentProduct._id !== id),
//     };
//     return temp2;
// };

const removeFromWishlist = async (state, id) => {
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
                wishlist: res.data.wishlist
            }
            return temp1
        }
    } catch (err) {
        console.log(err)
    }
};

export { addToWishlist, removeFromWishlist };
