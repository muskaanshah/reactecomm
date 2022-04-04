import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartWishlist } from "../../../context/cart-wishlist-context";
import { CouponsModal } from "./CouponsModal";

function PriceCard() {
	const [couponModal, setCouponModal] = useState(false);
	const [couponDiscount, setCouponDiscount] = useState(0);
	const { cartState } = useCartWishlist();
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
	return (
		<div className="ordersummary price-card p-1">
			{couponDiscount === 0 && (
				<span className="flex-end">
					<span className="material-icons fs-1"> local_offer </span>
					<span className="fw-600">Apply coupon</span>
					<button
						className="btn bg-primary py-0 px-0-5 fs-0-8"
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
			<div className="price-attribute">
				<p>Discount on MRP</p>
				<p className="color-success ls-1">-₹{totalDiscount}</p>
			</div>
			{couponDiscount !== 0 && (
				<div className="price-attribute">
					<div className="price-coupon-remove">
						<p>Coupon Discount</p>
						<p
							className="fs-0-8 text-underline"
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
			<Link to="/" className="btn bg-primary btn-place-order mt-1">
				PLACE ORDER
			</Link>
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
