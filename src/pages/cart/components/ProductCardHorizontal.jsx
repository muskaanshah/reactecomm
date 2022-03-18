function ProductCardHorizontal() {
	return (
		<div class="card-horizontal">
			<div class="card-image-wrapper">
				<img
					class="img-responsive cart-objectfit-cover"
					src="https://m.media-amazon.com/images/I/71qDTSDIN0L._SY355_.jpg"
				/>
			</div>
			<div class="card-product-details">
				<button class="btn-close">
					<span class="material-icons close-button"> close </span>
				</button>
				<h3 class="card-title">Codenames</h3>
				<p class="card-product-description">Based on team strategy</p>
				<div class="card-product-price">
					<span class="card-product-newprice">Rs.799</span>
					<span class="card-product-actualprice">Rs.1199</span>
					<span class="card-product-discount">30% off</span>
				</div>
				<div class="card-product-quantity">
					<span class="product-qty">Qty:</span>
					<select class="qty">
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</div>
				<p class="fs-0-8 pl-1 flex-end">
					<span class="material-icons color-success-dark fs-1">task_alt</span>
					Delivery by *date*
				</p>
			</div>
		</div>
	);
}

export { ProductCardHorizontal };
