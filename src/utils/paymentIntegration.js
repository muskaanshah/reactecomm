import { clearCartAfterOrdering } from "./cartFunctions";

const handleClearCart = async (cartState, alertDispatch, cartDispatch) => {
    const newCart = await clearCartAfterOrdering(cartState, alertDispatch);
    cartDispatch({
        type: "CLEAR_ORDER_CART",
        payload: { value: newCart },
    });
};

const loadScript = async (url) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = url;

        script.onload = () => {
            resolve(true);
        };

        script.onerror = () => {
            resolve(false);
        };

        document.body.appendChild(script);
    });
};
const displayRazorpay = async (
    cartState,
    cartDispatch,
    alertDispatch,
    totalPriceAfterDiscount,
    navigate
) => {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alertDispatch({
            type: "ACTIVATE_ALERT",
            payload: {
                alertType: "error",
                alertMsg: "Unable to fetch RazorPay SDK",
            },
        });
        return;
    }

    const options = {
        key: "rzp_test_f1OzauHEGKTHtG",
        amount: totalPriceAfterDiscount * 100,
        currency: "INR",
        name: "Board At Home",
        description: "Thank you for shopping with us",
        image:
            "https://res.cloudinary.com/ecommerce-muskaan/image/upload/v1647541606/e-commerce/dice-logo_sbyevn.png",
        handler: function (response) {
            const tempObj = {
                items: [...cartState.cart],
                amount: totalPriceAfterDiscount,
                paymentId: response.razorpay_payment_id,
            };
            cartDispatch({ type: "ORDER_SUMMARY", payload: { value: tempObj } });
            navigate("/order");
            // cartDispatch({
            //     type: "CLEAR_ORDER_CART",
            // });
            handleClearCart(cartState, alertDispatch, cartDispatch);
        },
        theme: {
            color: "#432818",
        },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
};

export { displayRazorpay }