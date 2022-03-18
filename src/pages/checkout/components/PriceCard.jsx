function PriceCard() {
	return (
		<div class="ordersummary price-card p-1">
			<span class="flex-end">
				<span class="material-icons fs-1"> local_offer </span>
				<input
					type="text"
					placeholder="Enter your coupon code"
					class="input-couponcode"
				/>
				<button class="btn bg-primary py-0 px-0-5 fs-0-8">Apply</button>
			</span>
			<p class="my-0-5 fw-600">PRICE DETAILS (2 Items)</p>
			<div class="divider-black"></div>
			<div class="price-attribute">
				<p>Total MRP</p>
				<p>Rs.2398</p>
			</div>
			<div class="price-attribute">
				<p>Discount</p>
				<p class="color-success ls-1">-Rs.800</p>
			</div>
			<div class="price-attribute">
				<p>Delivery Charge</p>
				<p>Rs.199</p>
			</div>
			<div class="divider-black"></div>
			<div class="price-attribute">
				<p class="my-0-5 fw-600">Total Price</p>
				<p>Rs.1998</p>
			</div>
			<a
				href="/pages/orderplaced.html"
				class="btn bg-primary btn-place-order mt-1"
			>
				PLACE ORDER
			</a>
		</div>
	);
}

export { PriceCard };
