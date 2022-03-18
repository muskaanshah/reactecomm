function ProductCard() {
	return (
		<div class="card-product-wrapper">
			<div class="card card-product">
				<button class="btn-close">
					<span class="material-icons"> close </span>
				</button>
				<div class="card-image-wrapper">
					<img
						class="img-responsive"
						src="https://m.media-amazon.com/images/I/71qDTSDIN0L._SY355_.jpg"
						onclick="window.location = productpath"
					/>
				</div>
				<div
					class="card-product-details"
					onclick="window.location = productpath"
				>
					<h3 class="card-title">Codenames</h3>
					<p class="card-product-description">Multiplayer witty game</p>
					<div class="card-product-price pb-0">
						<span class="card-product-newprice">Rs.799</span>
						<span class="card-product-actualprice">Rs.1199</span>
						<span class="card-product-discount">30% off</span>
					</div>
				</div>
				<div class="card-button">
					<button class="btn btn-addtocart bg-primary ls-1 px-0-5 py-1">
						<span class="btn-addtocart-text">MOVE TO CART</span>
						<span class="material-icons-outlined btn-addtocart-icon">
							add_shopping_cart
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export { ProductCard };
