import { useCartWishlist } from "../../../context/cart-wishlist-context";

function PriceCard() {
	const { state } = useCartWishlist();
	const totalActualPrice = state.cart.reduce(
		(acc, curr) =>
			curr.actualprice ? (acc += curr.actualprice) : (acc += curr.newprice),
		0
	);
	const totalDiscount = state.cart.reduce(
		(acc, curr) =>
			curr.actualprice ? (acc += curr.actualprice - curr.newprice) : acc,
		0
	);
	const totalPriceAfterDiscount = totalActualPrice - totalDiscount;
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
				PRICE DETAILS ({state.cartItemsNumber} Items)
			</p>
			<div className="divider-black"></div>
			<div className="price-attribute">
				<p>Total MRP</p>
				<p>Rs.{totalActualPrice}</p>
			</div>
			<div className="price-attribute">
				<p>Discount on MRP</p>
				<p className="color-success ls-1">-Rs.{totalDiscount}</p>
			</div>
			<div className="price-attribute">
				<p>Delivery Charge</p>
				<p>Rs.199</p>
			</div>
			<div className="divider-black"></div>
			<div className="price-attribute">
				<p className="my-0-5 fw-600">Total Price</p>
				<p>Rs.{totalPriceAfterDiscount}</p>
			</div>
			<a
				href="/pages/orderplaced.html"
				className="btn bg-primary btn-place-order mt-1"
			>
				PLACE ORDER
			</a>
		</div>
	);
}

export { PriceCard };
