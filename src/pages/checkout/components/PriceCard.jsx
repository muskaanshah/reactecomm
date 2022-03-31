import { Link } from "react-router-dom";
import { useCartWishlist } from "../../../context/cart-wishlist-context";

function PriceCard() {
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
	const totalPriceAfterDiscount =
		totalActualPrice - totalDiscount + deliveryCharge;
	return (
		<div className="ordersummary price-card p-1">
			<span className="flex-end">
				<span className="material-icons fs-1"> local_offer </span>
				<input
					type="text"
					placeholder="Enter your coupon code"
					className="input-couponcode"
				/>
				<button className="btn bg-primary py-0 px-0-5 fs-0-8">Apply</button>
			</span>
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
		</div>
	);
}

export { PriceCard };
