function PriceCard() {
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
			<p className="my-0-5 fw-600">PRICE DETAILS (2 Items)</p>
			<div className="divider-black"></div>
			<div className="price-attribute">
				<p>Total MRP</p>
				<p>Rs.2398</p>
			</div>
			<div className="price-attribute">
				<p>Discount</p>
				<p className="color-success ls-1">-Rs.800</p>
			</div>
			<div className="price-attribute">
				<p>Delivery Charge</p>
				<p>Rs.199</p>
			</div>
			<div className="divider-black"></div>
			<div className="price-attribute">
				<p className="my-0-5 fw-600">Total Price</p>
				<p>Rs.1998</p>
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
