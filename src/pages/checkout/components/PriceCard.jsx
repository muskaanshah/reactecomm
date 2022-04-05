import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartWishlist } from "../../../context/cart-wishlist-context";
import { CouponsModal } from "./CouponsModal";

function PriceCard() {
	const [couponModal, setCouponModal] = useState(false);
	const [couponDiscount, setCouponDiscount] = useState(0);
	const { cartState, cartDispatch } = useCartWishlist();
	const navigate = useNavigate();

	const totalActualPrice = cartState.cart.reduce(
		(acc, curr) =>
			curr.actualprice
				? (acc += curr.actualprice * curr.qty)
				: (acc += curr.newprice * curr.qty),
		0
	);
	const totalDiscount = cartState.cart.reduce(
		(acc, curr) =>
			curr.actualprice * curr.qty
				? (acc += curr.actualprice * curr.qty - curr.newprice * curr.qty)
				: acc,
		0
	);
	const deliveryCharge = totalActualPrice - totalDiscount > 5000 ? 0 : 99;
	const totalPriceBeforeCoupon = totalActualPrice - totalDiscount;
	const totalPriceAfterDiscount =
		totalActualPrice - totalDiscount + deliveryCharge - couponDiscount;

	//Razorpay Payment Integration
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
	const displayRazorpay = async () => {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js"
		);

		if (!res) {
			console.error("Unable to fetch RazorPay SDK");
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
				cartDispatch({
					type: "CLEAR_ORDER_CART",
				});
			},
			theme: {
				color: "#432818",
			},
		};
		const paymentObject = new window.Razorpay(options);
		paymentObject.open();
	};
	return (
		<div className="ordersummary price-card p-1 br-4px">
			{couponDiscount === 0 && (
				<span className="flex-end">
					<span className="material-icons fs-1"> local_offer </span>
					<span className="fw-600">Apply coupon</span>
					<button
						className="btn bg-primary py-0 px-0-5 fs-0-8 br-4px"
						onClick={() => setCouponModal(true)}
					>
						Apply
					</button>
				</span>
			)}
			<p className="my-0-5 fw-600">
				PRICE DETAILS ({cartState.cartItemsNumber} Items)
			</p>
			<div className="divider-black"></div>
			<div className="price-attribute">
				<p>Total MRP</p>
				<p>₹{totalActualPrice}</p>
			</div>
			{totalDiscount !== 0 && (
				<div className="price-attribute">
					<p>Discount on MRP</p>
					<p className="color-success ls-1">-₹{totalDiscount}</p>
				</div>
			)}
			{couponDiscount !== 0 && (
				<div className="price-attribute">
					<div className="price-coupon-remove">
						<p className="my-0">Coupon Discount</p>
						<p
							className="fs-0-8 text-underline my-0"
							onClick={() => setCouponDiscount(0)}
						>
							Remove
						</p>
					</div>
					<p className="color-success ls-1">-₹{couponDiscount}</p>
				</div>
			)}
			<div className="price-attribute">
				<p>Delivery Charge</p>
				<p>₹{deliveryCharge}</p>
			</div>
			<div className="divider-black"></div>
			<div className="price-attribute">
				<p className="my-0-5 fw-600">Total Price</p>
				<p>₹{totalPriceAfterDiscount}</p>
			</div>
			<button
				className="btn bg-primary btn-place-order mt-1 br-4px"
				onClick={displayRazorpay}
			>
				PLACE ORDER
			</button>
			{couponModal && (
				<CouponsModal
					totalPriceBeforeCoupon={totalPriceBeforeCoupon}
					setCouponDiscount={setCouponDiscount}
					setCouponModal={setCouponModal}
				/>
			)}
		</div>
	);
}

export { PriceCard };
